import React, { useState } from 'react';
import { Lesson, UserProfile, Semester } from '../types';
import { CURRICULUM_LESSONS } from '../data/curriculumData';
import { BookOpen, Search, CheckCircle, Play, Info, Sparkles, Award, ArrowRight, FileText } from 'lucide-react';
import { soundFx } from '../utils/audio';

interface CurriculumViewProps {
  user: UserProfile;
  onSelectLessonToQuiz: (lesson: Lesson) => void;
}

export const CurriculumView: React.FC<CurriculumViewProps> = ({
  user,
  onSelectLessonToQuiz,
}) => {
  const [selectedSemester, setSelectedSemester] = useState<Semester>(1);
  const [selectedChapter, setSelectedChapter] = useState<number | 'all'>('all');
  const [searchQuery, setSearchQuery] = useState('');
  
  // Filter lessons (strictly Math 8)
  const filteredLessons = CURRICULUM_LESSONS.filter(l => {
    const matchSemester = l.semester === selectedSemester;
    const matchChapter = selectedChapter === 'all' || l.chapterNumber === selectedChapter;
    const matchQuery = searchQuery.trim() === '' ||
                       l.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                       l.chapterTitle.toLowerCase().includes(searchQuery.toLowerCase());
    return matchSemester && matchChapter && matchQuery;
  });

  const [activeLessonId, setActiveLessonId] = useState<string>(
    CURRICULUM_LESSONS[0]?.id || ''
  );

  const activeLesson = CURRICULUM_LESSONS.find(l => l.id === activeLessonId) || filteredLessons[0] || CURRICULUM_LESSONS[0];

  // Available chapters in current semester
  const availableChapters = Array.from(
    new Set(
      CURRICULUM_LESSONS
        .filter(l => l.semester === selectedSemester)
        .map(l => l.chapterNumber)
    )
  ).sort((a, b) => a - b);

  const isCompleted = user.completedLessons.some(c => c.lessonId === activeLesson?.id);
  const completionRecord = user.completedLessons.find(c => c.lessonId === activeLesson?.id);

  const handleSelectLesson = (lesson: Lesson) => {
    soundFx.playPop();
    setActiveLessonId(lesson.id);
  };

  return (
    <div className="space-y-6">
      {/* Top Banner: Toán Lớp 8 */}
      <div className="bg-white p-4 sm:p-5 rounded-3xl border-2 border-emerald-300 shadow-sm flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-emerald-600 to-emerald-800 text-white flex items-center justify-center font-black text-xl shadow-md border-2 border-emerald-300">
            8
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h3 className="font-black text-emerald-950 text-base sm:text-lg">
                Toán Lớp 8 • Kết Nối Tri Thức Với Cuộc Sống
              </h3>
            </div>
            <p className="text-xs sm:text-sm font-semibold text-emerald-800">
              Chương trình chuẩn: 10 chương • 39 bài học • 390 câu hỏi trắc nghiệm &amp; phụ đạo
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <span className="text-xs sm:text-sm font-extrabold text-emerald-800 bg-emerald-100/80 px-4 py-2 rounded-2xl border border-emerald-300 flex items-center gap-1.5 shadow-sm">
            <span>📖 SGK Toán 8 (Tập 1 &amp; Tập 2)</span>
          </span>
        </div>
      </div>

      {/* Two Column Layout (Inspired by screenshot) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Left Column: Semester Tabs + Search + Step Timeline (5 cols) */}
        <div className="lg:col-span-5 bg-white rounded-3xl border-2 border-emerald-200 shadow-md p-4 sm:p-5">
          {/* Semester Tabs */}
          <div className="flex rounded-2xl bg-emerald-100/60 p-1 mb-3 border border-emerald-200">
            <button
              onClick={() => {
                soundFx.playPop();
                setSelectedSemester(1);
                setSelectedChapter('all');
                const first = CURRICULUM_LESSONS.find(l => l.semester === 1);
                if (first) setActiveLessonId(first.id);
              }}
              className={`flex-1 py-2.5 rounded-xl font-extrabold text-sm sm:text-base transition-all ${
                selectedSemester === 1
                  ? 'bg-emerald-700 text-white shadow-sm'
                  : 'text-emerald-900 hover:bg-emerald-200/60'
              }`}
            >
              Học kỳ 1 (Bài 1 - 20)
            </button>
            <button
              onClick={() => {
                soundFx.playPop();
                setSelectedSemester(2);
                setSelectedChapter('all');
                const first = CURRICULUM_LESSONS.find(l => l.semester === 2);
                if (first) setActiveLessonId(first.id);
              }}
              className={`flex-1 py-2.5 rounded-xl font-extrabold text-sm sm:text-base transition-all ${
                selectedSemester === 2
                  ? 'bg-emerald-700 text-white shadow-sm'
                  : 'text-emerald-900 hover:bg-emerald-200/60'
              }`}
            >
              Học kỳ 2 (Bài 21 - 39)
            </button>
          </div>

          {/* Chapter Quick Filter Chips */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-2 mb-3 no-scrollbar text-xs">
            <button
              onClick={() => {
                soundFx.playPop();
                setSelectedChapter('all');
              }}
              className={`px-2.5 py-1 rounded-lg font-extrabold whitespace-nowrap transition-colors ${
                selectedChapter === 'all'
                  ? 'bg-emerald-700 text-white shadow-sm'
                  : 'bg-emerald-100/70 text-emerald-900 hover:bg-emerald-200'
              }`}
            >
              Tất cả chương
            </button>
            {availableChapters.map(ch => (
              <button
                key={ch}
                onClick={() => {
                  soundFx.playPop();
                  setSelectedChapter(ch);
                  const firstCh = CURRICULUM_LESSONS.find(l => l.semester === selectedSemester && l.chapterNumber === ch);
                  if (firstCh) setActiveLessonId(firstCh.id);
                }}
                className={`px-2.5 py-1 rounded-lg font-extrabold whitespace-nowrap transition-colors ${
                  selectedChapter === ch
                    ? 'bg-emerald-700 text-white shadow-sm'
                    : 'bg-emerald-100/70 text-emerald-900 hover:bg-emerald-200'
                }`}
              >
                Chương {ch}
              </button>
            ))}
          </div>

          {/* Search bar */}
          <div className="relative mb-4">
            <Search className="w-5 h-5 text-emerald-600 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Tìm kiếm bài học, chủ đề, định lí..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-2xl bg-emerald-50/70 border border-emerald-200 text-slate-800 placeholder-slate-400 text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
          </div>

          {/* Stepped Lesson List */}
          <div className="space-y-3 max-h-[580px] overflow-y-auto pr-1">
            {filteredLessons.length === 0 ? (
              <div className="text-center py-8 text-slate-500 font-semibold text-sm">
                Không tìm thấy bài học phù hợp với từ khóa tìm kiếm.
              </div>
            ) : (
              filteredLessons.map((lesson, idx) => {
                const isSelected = lesson.id === activeLesson?.id;
                const hasDone = user.completedLessons.some(c => c.lessonId === lesson.id);

                return (
                  <div
                    key={lesson.id}
                    onClick={() => handleSelectLesson(lesson)}
                    className={`relative flex items-start gap-3 p-3.5 rounded-2xl cursor-pointer transition-all border ${
                      isSelected
                        ? 'bg-emerald-100/90 border-emerald-500 shadow-sm'
                        : 'bg-emerald-50/40 border-emerald-100 hover:bg-emerald-50 hover:border-emerald-300'
                    }`}
                  >
                    {/* Stepper Node */}
                    <div className="mt-0.5 flex flex-col items-center">
                      <div className={`w-7 h-7 rounded-full flex items-center justify-center font-bold text-xs ${
                        hasDone 
                          ? 'bg-emerald-600 text-white shadow-sm' 
                          : isSelected 
                            ? 'bg-emerald-700 text-white ring-2 ring-emerald-300' 
                            : 'bg-white border-2 border-emerald-300 text-emerald-800'
                      }`}>
                        {hasDone ? '✓' : idx + 1}
                      </div>
                    </div>

                    {/* Lesson Info */}
                    <div className="flex-1 min-w-0">
                      <div className="text-xs font-bold text-emerald-800 truncate mb-0.5">
                        {lesson.chapterTitle}
                      </div>
                      <h4 className={`font-extrabold text-sm sm:text-base leading-snug ${
                        isSelected ? 'text-emerald-950' : 'text-slate-800'
                      }`}>
                        {lesson.title}
                      </h4>
                      <div className="mt-1 flex items-center gap-2 text-xs font-semibold text-slate-500">
                        <span>10 câu hỏi</span>
                        <span>•</span>
                        <span className="text-emerald-700 font-bold">+5 xu/câu đúng</span>
                        {hasDone && (
                          <span className="ml-auto text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded-full font-bold">
                            Đã làm
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })
            )}
          </div>
        </div>

        {/* Right Column: Detailed Lesson Content & Action (7 cols) */}
        {activeLesson && (
          <div className="lg:col-span-7 bg-white rounded-3xl border-2 border-emerald-200 shadow-md p-5 sm:p-7 space-y-6">
            {/* Header with Title & Stats (Like screenshot) */}
            <div className="border-b border-emerald-100 pb-5">
              <div className="flex items-center gap-2 text-xs font-extrabold text-emerald-700 uppercase tracking-wide mb-1">
                <span>{activeLesson.chapterTitle}</span>
                <span>•</span>
                <span>{activeLesson.textbookRef}</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-emerald-950 flex items-center gap-2">
                <span>📐 {activeLesson.title}</span>
              </h2>

              {/* Stats Bar */}
              <div className="mt-4 grid grid-cols-3 gap-3 bg-emerald-50/70 p-3 rounded-2xl border border-emerald-200 text-center">
                <div>
                  <span className="text-xs font-bold text-slate-500 block uppercase">Chủ điểm</span>
                  <span className="text-lg font-black text-emerald-700">1/1</span>
                </div>
                <div>
                  <span className="text-xs font-bold text-slate-500 block uppercase">Kiểm tra</span>
                  <span className="text-lg font-black text-emerald-700">10 câu</span>
                </div>
                <div>
                  <span className="text-xs font-bold text-slate-500 block uppercase">Điểm cao nhất</span>
                  <span className="text-lg font-black text-emerald-700">
                    {completionRecord ? `${completionRecord.score}/${completionRecord.totalQuestions}` : 'Chưa làm'}
                  </span>
                </div>
              </div>
            </div>

            {/* MANDATORY AI NOTICE */}
            <div className="p-3.5 rounded-2xl bg-amber-50 border-2 border-amber-300 flex items-start gap-3">
              <Info className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
              <p className="text-xs sm:text-sm font-semibold text-amber-950 leading-relaxed">
                “Đây là bản tóm tắt do AI tạo ra, có thể chưa đầy đủ — hãy đọc bản gốc nếu cần hiểu chi tiết.”
              </p>
            </div>

            {/* Theory & Summary Section */}
            <div className="space-y-3">
              <h3 className="font-extrabold text-lg text-emerald-950 flex items-center gap-2">
                <FileText className="w-5 h-5 text-emerald-600" />
                <span>Tóm tắt kiến thức trọng tâm bài học</span>
              </h3>
              <div className="bg-[#fcfdfa] p-4 sm:p-5 rounded-2xl border border-emerald-200 text-slate-800 text-base leading-relaxed whitespace-pre-line font-medium shadow-inner">
                {activeLesson.summary}
              </div>
            </div>

            {/* Key Formulas if available */}
            {activeLesson.keyFormulas && activeLesson.keyFormulas.length > 0 && (
              <div className="space-y-2">
                <h4 className="font-extrabold text-base text-emerald-950 flex items-center gap-1.5">
                  <Sparkles className="w-4 h-4 text-emerald-600" />
                  <span>Công thức &amp; Định lí cốt lõi:</span>
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {activeLesson.keyFormulas.map((f, i) => (
                    <div
                      key={i}
                      className="px-3.5 py-2.5 rounded-xl bg-emerald-100/70 border border-emerald-300 font-mono text-sm font-bold text-emerald-950"
                    >
                      {f}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Previous completion record if any */}
            {completionRecord && (
              <div className="p-4 rounded-2xl bg-green-50 border border-green-200 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Award className="w-6 h-6 text-green-600" />
                  <div>
                    <h5 className="font-extrabold text-sm text-green-950">Đã hoàn thành ngày {completionRecord.date}</h5>
                    <p className="text-xs text-green-800 font-semibold">
                      Đạt {completionRecord.score}/{completionRecord.totalQuestions} điểm • Nhận +{completionRecord.coinsEarned} xu &amp; +{completionRecord.xpEarned} XP
                    </p>
                  </div>
                </div>
                <span className="px-3 py-1 rounded-full bg-green-200 text-green-900 font-black text-xs">
                  {Math.round((completionRecord.score / completionRecord.totalQuestions) * 100)}%
                </span>
              </div>
            )}

            {/* Start Quiz Action Card */}
            <div className="pt-2">
              <button
                id="start-quiz-btn"
                onClick={() => {
                  soundFx.playPop();
                  onSelectLessonToQuiz(activeLesson);
                }}
                className="w-full py-4 px-6 rounded-2xl bg-gradient-to-r from-emerald-600 via-green-600 to-emerald-700 hover:from-emerald-700 hover:to-green-800 text-white font-black text-lg sm:text-xl shadow-xl shadow-emerald-900/20 flex items-center justify-center gap-3 transition-transform active:scale-98 border-2 border-emerald-400 cursor-pointer"
              >
                <Play className="w-6 h-6 fill-white text-white" />
                <span>Bắt đầu làm 10 câu hỏi bài này</span>
                <ArrowRight className="w-6 h-6" />
              </button>
              <p className="text-center text-xs font-semibold text-slate-500 mt-2">
                Thưởng: 5 xu/câu đúng • Có câu hỏi rèn luyện nếu làm sai • Không phạt thời gian
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
