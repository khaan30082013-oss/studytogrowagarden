import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { Lesson, Question } from '../types';
import { GeometryDiagram } from './GeometryDiagram';
import { soundFx } from '../utils/audio';
import { X, CheckCircle, AlertCircle, Sparkles, ArrowRight, Award, RotateCcw, HelpCircle } from 'lucide-react';

interface QuizModalProps {
  lesson: Lesson;
  onClose: () => void;
  onComplete: (score: number, coins: number, xp: number) => void;
}

export const QuizModal: React.FC<QuizModalProps> = ({
  lesson,
  onClose,
  onComplete,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [score, setScore] = useState(0);
  const [totalCoins, setTotalCoins] = useState(0);

  // Remedial state for wrong answers
  const [isDoingRemedial, setIsDoingRemedial] = useState(false);
  const [remedialSelected, setRemedialSelected] = useState<number | null>(null);
  const [remedialAnswered, setRemedialAnswered] = useState(false);
  const [remedialCorrect, setRemedialCorrect] = useState(false);

  // Completed summary screen
  const [isFinished, setIsFinished] = useState(false);

  const currentQ = lesson.questions[currentIndex] || lesson.questions[0];

  const handleSelectOption = (index: number) => {
    if (isAnswered) return;
    setSelectedOption(index);
    setIsAnswered(true);

    if (index === currentQ.correctIndex) {
      setIsCorrect(true);
      setScore(prev => prev + 1);
      setTotalCoins(prev => prev + 5);
      soundFx.playCorrect();
    } else {
      setIsCorrect(false);
      soundFx.playWrong();
    }
  };

  const handleRemedialSelect = (index: number) => {
    if (remedialAnswered) return;
    setRemedialSelected(index);
    setRemedialAnswered(true);
    const simQ = currentQ.similarQuestion;
    if (simQ && index === simQ.correctIndex) {
      setRemedialCorrect(true);
      setTotalCoins(prev => prev + 2); // bonus for learning
      soundFx.playCorrect();
    } else {
      setRemedialCorrect(false);
      soundFx.playWrong();
    }
  };

  const handleNext = () => {
    soundFx.playPop();

    // If user answered wrong and hasn't done remedial question yet
    if (!isCorrect && !isDoingRemedial && currentQ.similarQuestion) {
      setIsDoingRemedial(true);
      setRemedialSelected(null);
      setRemedialAnswered(false);
      setRemedialCorrect(false);
      return;
    }

    // Move to next question or finish
    if (currentIndex + 1 < lesson.questions.length) {
      setCurrentIndex(prev => prev + 1);
      setSelectedOption(null);
      setIsAnswered(false);
      setIsCorrect(false);
      setIsDoingRemedial(false);
      setRemedialSelected(null);
      setRemedialAnswered(false);
    } else {
      // Quiz finished
      setIsFinished(true);
      soundFx.playHarvest();
      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 }
        });
      } catch {}
    }
  };

  const handleFinishAndSave = () => {
    soundFx.playHarvest();
    const xpWon = score * 10 + 20; // completion bonus
    onComplete(score, totalCoins, xpWon);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-emerald-950/70 backdrop-blur-sm overflow-y-auto">
      <div className="bg-white rounded-3xl max-w-2xl w-full p-5 sm:p-7 shadow-2xl border-4 border-emerald-400 relative my-8">
        {/* Close button */}
        {!isFinished && (
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
            title="Đóng bài làm"
          >
            <X className="w-5 h-5" />
          </button>
        )}

        {/* Finished Screen */}
        {isFinished ? (
          <div className="text-center py-6 space-y-6">
            <div className="w-20 h-20 mx-auto rounded-3xl bg-gradient-to-br from-yellow-300 to-amber-500 flex items-center justify-center text-4xl shadow-lg shadow-amber-500/30">
              🏆
            </div>

            <div>
              <h3 className="text-2xl sm:text-3xl font-black text-emerald-950">
                Chúc mừng bạn đã hoàn thành bài học!
              </h3>
              <p className="text-emerald-800 font-bold mt-1 text-base">
                {lesson.title}
              </p>
            </div>

            {/* Results breakdown */}
            <div className="grid grid-cols-3 gap-3 max-w-md mx-auto bg-emerald-50 p-4 rounded-2xl border-2 border-emerald-200">
              <div>
                <span className="text-xs font-bold text-slate-500 block uppercase">Đúng</span>
                <span className="text-2xl font-black text-emerald-700">{score}/10</span>
              </div>
              <div>
                <span className="text-xs font-bold text-slate-500 block uppercase">Xu nhận</span>
                <span className="text-2xl font-black text-amber-600">+{totalCoins} 🪙</span>
              </div>
              <div>
                <span className="text-xs font-bold text-slate-500 block uppercase">Kinh nghiệm</span>
                <span className="text-2xl font-black text-emerald-600">+{score * 10 + 20} XP</span>
              </div>
            </div>

            <p className="text-sm font-semibold text-slate-600 max-w-md mx-auto">
              Số xu và kinh nghiệm đã được cộng vào tài khoản của bạn. Hãy ghé Cửa hàng mua thêm hạt giống và ghé Khu vườn chăm sóc cây cối nhé!
            </p>

            <button
              id="quiz-finish-btn"
              onClick={handleFinishAndSave}
              className="w-full sm:w-auto px-8 py-3.5 rounded-2xl bg-gradient-to-r from-emerald-600 to-green-700 hover:from-emerald-700 hover:to-green-800 text-white font-black text-lg shadow-xl shadow-emerald-800/20 transition-transform active:scale-95"
            >
              Lưu kết quả &amp; Trở về Khu Vườn 🌿
            </button>
          </div>
        ) : (
          /* Active Question Screen */
          <div className="space-y-5">
            {/* Header progress */}
            <div className="space-y-2">
              <div className="flex items-center justify-between text-xs font-extrabold text-emerald-900">
                <span>{lesson.title}</span>
                <span className="bg-emerald-100 px-3 py-1 rounded-full border border-emerald-300">
                  Câu {currentIndex + 1} / {lesson.questions.length}
                </span>
              </div>

              {/* Progress bar */}
              <div className="w-full h-2.5 bg-emerald-100 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-emerald-500 to-green-600 transition-all duration-300"
                  style={{ width: `${((currentIndex + 1) / lesson.questions.length) * 100}%` }}
                />
              </div>
            </div>

            {/* If regular question */}
            {!isDoingRemedial ? (
              <div className="space-y-4">
                <h3 className="text-lg sm:text-xl font-black text-slate-900 leading-snug">
                  {currentQ.question}
                </h3>

                {/* Geometry Diagram SVG if applicable */}
                {currentQ.hasDiagram && (
                  <GeometryDiagram
                    type={currentQ.diagramType}
                    data={currentQ.diagramData}
                  />
                )}

                {/* Options List */}
                <div className="grid grid-cols-1 gap-2.5">
                  {currentQ.options.map((option, idx) => {
                    const isSelected = selectedOption === idx;
                    const isCorrectOpt = idx === currentQ.correctIndex;

                    let btnStyle = 'bg-emerald-50/60 border-emerald-200 text-slate-800 hover:bg-emerald-100/70';
                    if (isAnswered) {
                      if (isCorrectOpt) {
                        btnStyle = 'bg-green-100 border-green-500 text-green-950 font-bold ring-2 ring-green-400';
                      } else if (isSelected) {
                        btnStyle = 'bg-rose-100 border-rose-400 text-rose-950 font-bold';
                      } else {
                        btnStyle = 'bg-slate-50 border-slate-200 text-slate-400 opacity-60';
                      }
                    }

                    return (
                      <button
                        key={idx}
                        disabled={isAnswered}
                        onClick={() => handleSelectOption(idx)}
                        className={`w-full text-left p-3.5 sm:p-4 rounded-2xl border-2 transition-all flex items-center justify-between text-base leading-snug ${btnStyle}`}
                      >
                        <span className="font-semibold">{option}</span>
                        {isAnswered && isCorrectOpt && (
                          <CheckCircle className="w-5 h-5 text-green-600 shrink-0 ml-2" />
                        )}
                        {isAnswered && isSelected && !isCorrectOpt && (
                          <AlertCircle className="w-5 h-5 text-rose-600 shrink-0 ml-2" />
                        )}
                      </button>
                    );
                  })}
                </div>

                {/* Answer Feedback Banner */}
                {isAnswered && (
                  <div className={`p-4 rounded-2xl border-2 animate-in fade-in duration-200 ${
                    isCorrect 
                      ? 'bg-emerald-50 border-emerald-400 text-emerald-950'
                      : 'bg-rose-50 border-rose-400 text-rose-950'
                  }`}>
                    <div className="flex items-center gap-2 font-black text-base sm:text-lg mb-1">
                      {isCorrect ? (
                        <>
                          <CheckCircle className="w-6 h-6 text-emerald-600" />
                          <span>Chính xác! Bạn được cộng +5 Xu 🪙</span>
                        </>
                      ) : (
                        <>
                          <AlertCircle className="w-6 h-6 text-rose-600" />
                          <span>Sai rồi!</span>
                        </>
                      )}
                    </div>

                    {!isCorrect && (
                      <div className="space-y-1.5 mt-2">
                        <p className="text-sm font-bold text-rose-900">
                          Đáp án đúng là: <span className="underline">{currentQ.options[currentQ.correctIndex]}</span>
                        </p>
                        <div className="p-2.5 rounded-xl bg-white/80 border border-rose-200 text-sm font-medium text-slate-800">
                          <span className="font-bold text-slate-900">Giải pháp rút gọn: </span>
                          {currentQ.explanation}
                        </div>
                        <p className="text-xs font-bold text-rose-800 mt-1">
                          👉 Tiếp theo sẽ có một câu hỏi tương tự để bạn rèn luyện lại cho vững nhé!
                        </p>
                      </div>
                    )}
                  </div>
                )}
              </div>
            ) : (
              /* Remedial / Similar Question */
              <div className="space-y-4">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100 text-amber-900 border border-amber-300 font-extrabold text-xs">
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Câu hỏi rèn luyện tương tự</span>
                </div>

                <h3 className="text-lg sm:text-xl font-black text-slate-900 leading-snug">
                  {currentQ.similarQuestion?.question}
                </h3>

                <div className="grid grid-cols-1 gap-2.5">
                  {currentQ.similarQuestion?.options.map((option, idx) => {
                    const isSelected = remedialSelected === idx;
                    const isCorrectOpt = idx === currentQ.similarQuestion?.correctIndex;

                    let btnStyle = 'bg-amber-50/70 border-amber-200 text-slate-800 hover:bg-amber-100';
                    if (remedialAnswered) {
                      if (isCorrectOpt) {
                        btnStyle = 'bg-green-100 border-green-500 text-green-950 font-bold ring-2 ring-green-400';
                      } else if (isSelected) {
                        btnStyle = 'bg-rose-100 border-rose-400 text-rose-950 font-bold';
                      } else {
                        btnStyle = 'bg-slate-50 border-slate-200 text-slate-400 opacity-60';
                      }
                    }

                    return (
                      <button
                        key={idx}
                        disabled={remedialAnswered}
                        onClick={() => handleRemedialSelect(idx)}
                        className={`w-full text-left p-3.5 sm:p-4 rounded-2xl border-2 transition-all flex items-center justify-between text-base leading-snug ${btnStyle}`}
                      >
                        <span className="font-semibold">{option}</span>
                        {remedialAnswered && isCorrectOpt && (
                          <CheckCircle className="w-5 h-5 text-green-600 shrink-0 ml-2" />
                        )}
                        {remedialAnswered && isSelected && !isCorrectOpt && (
                          <AlertCircle className="w-5 h-5 text-rose-600 shrink-0 ml-2" />
                        )}
                      </button>
                    );
                  })}
                </div>

                {remedialAnswered && (
                  <div className={`p-3.5 rounded-2xl border-2 ${
                    remedialCorrect ? 'bg-green-50 border-green-400 text-green-950' : 'bg-slate-50 border-slate-300 text-slate-900'
                  }`}>
                    <p className="text-sm font-bold">
                      {remedialCorrect ? 'Tuyệt vời! Bạn đã nắm vững kiến thức này (+2 Xu thưởng).' : 'Lời giải:'}
                    </p>
                    <p className="text-sm mt-1">{currentQ.similarQuestion?.explanation}</p>
                  </div>
                )}
              </div>
            )}

            {/* Next / Continue button */}
            {((!isDoingRemedial && isAnswered) || (isDoingRemedial && remedialAnswered)) && (
              <div className="pt-2">
                <button
                  id="quiz-next-btn"
                  onClick={handleNext}
                  className="w-full py-3.5 px-6 rounded-2xl bg-emerald-700 hover:bg-emerald-800 text-white font-black text-base sm:text-lg shadow-lg flex items-center justify-center gap-2 transition-transform active:scale-95"
                >
                  <span>
                    {!isCorrect && !isDoingRemedial && currentQ.similarQuestion
                      ? 'Làm câu hỏi rèn luyện tương tự'
                      : currentIndex + 1 < lesson.questions.length
                        ? 'Câu hỏi tiếp theo'
                        : 'Xem kết quả tổng kết 🏆'}
                  </span>
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
