import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, BookOpen, CheckCircle, Sprout, ArrowRight } from 'lucide-react';
import { soundFx } from '../utils/audio';

interface OnboardingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const OnboardingModal: React.FC<OnboardingModalProps> = ({ isOpen, onClose }) => {
  const [step, setStep] = useState(1);

  if (!isOpen) return null;

  const handleNext = () => {
    soundFx.playPop();
    if (step < 3) {
      setStep(step + 1);
    } else {
      soundFx.playHarvest();
      onClose();
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-emerald-950/60 backdrop-blur-sm animate-in fade-in duration-200">
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border-4 border-emerald-300 text-center relative overflow-hidden"
      >
        {/* Decorative garden header */}
        <div className="absolute -top-10 -right-10 w-32 h-32 bg-emerald-100 rounded-full blur-2xl -z-10" />
        <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-yellow-100 rounded-full blur-2xl -z-10" />

        {/* Title banner */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-100 text-emerald-900 font-extrabold text-sm mb-4 border border-emerald-300">
          <span>🌸 Hướng dẫn 3 bước cho người mới 🌸</span>
        </div>

        {/* Welcome reward banner */}
        <div className="mb-6 p-3 rounded-2xl bg-gradient-to-r from-amber-50 via-yellow-100 to-amber-50 border-2 border-amber-300 flex items-center justify-center gap-3">
          <span className="text-3xl">🎁</span>
          <div className="text-left">
            <h4 className="font-extrabold text-amber-950 text-base">Quà tặng 100 Xu Chào Mừng!</h4>
            <p className="text-xs text-amber-900 font-medium">Bắt đầu hành trình trồng cây và học Toán 8 thật thú vị.</p>
          </div>
        </div>

        {/* Step Indicator */}
        <div className="flex justify-center items-center gap-2 mb-6">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                step === i ? 'w-8 bg-emerald-600' : 'w-2.5 bg-emerald-200'
              }`}
            />
          ))}
        </div>

        {/* Steps Content */}
        <div className="min-h-[220px] flex flex-col items-center justify-center">
          {step === 1 && (
            <div className="space-y-3">
              <div className="w-16 h-16 mx-auto rounded-2xl bg-emerald-100 flex items-center justify-center text-3xl shadow-inner text-emerald-800">
                📚
              </div>
              <h3 className="font-extrabold text-xl text-emerald-950">Bước 1: Chọn bài học Toán lớp 8</h3>
              <p className="text-base text-slate-700 leading-relaxed max-w-md mx-auto">
                Khám phá chương trình <strong>Học kỳ 1</strong> &amp; <strong>Học kỳ 2</strong> chuẩn sách giáo khoa. Xem tóm tắt lý thuyết trọng tâm trước khi làm bài.
              </p>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-3">
              <div className="w-16 h-16 mx-auto rounded-2xl bg-amber-100 flex items-center justify-center text-3xl shadow-inner text-amber-800">
                ✍️
              </div>
              <h3 className="font-extrabold text-xl text-emerald-950">Bước 2: Giải bài 10 câu &amp; Nhận thưởng</h3>
              <p className="text-base text-slate-700 leading-relaxed max-w-md mx-auto">
                Mỗi câu trả lời đúng được tặng <strong>+5 Xu</strong> và XP. Nếu trả lời sai, bạn sẽ nhận ngay giải pháp rút gọn và một câu hỏi tương tự để rèn luyện lại cho thuần thục!
              </p>
            </div>
          )}

          {step === 3 && (
            <div className="space-y-3">
              <div className="w-16 h-16 mx-auto rounded-2xl bg-green-100 flex items-center justify-center text-3xl shadow-inner text-green-800">
                🍓
              </div>
              <h3 className="font-extrabold text-xl text-emerald-950">Bước 3: Mua hạt giống &amp; Chăm sóc khu vườn</h3>
              <p className="text-base text-slate-700 leading-relaxed max-w-md mx-auto">
                Ghé <strong>Cửa hàng</strong> sắm hạt cà rốt, dâu tây, cà chua, ngô, bí đỏ... Trồng vào luống đất, thu hoạch sau 20 phút và trang trí vườn với hồ nước, ghế, đèn xinh lung linh!
              </p>
            </div>
          )}
        </div>

        {/* Action button */}
        <div className="mt-6 flex items-center justify-between gap-3 pt-4 border-t border-emerald-100">
          {step > 1 ? (
            <button
              onClick={() => {
                soundFx.playPop();
                setStep(step - 1);
              }}
              className="px-4 py-2.5 rounded-xl border border-emerald-300 text-emerald-900 font-bold text-sm hover:bg-emerald-50"
            >
              Quay lại
            </button>
          ) : (
            <div />
          )}

          <button
            id="onboarding-next-btn"
            onClick={handleNext}
            className="flex-1 sm:flex-initial px-6 py-3 rounded-2xl bg-gradient-to-r from-emerald-600 to-green-700 hover:from-emerald-700 hover:to-green-800 text-white font-black text-base shadow-lg shadow-emerald-700/20 flex items-center justify-center gap-2 transition-transform active:scale-95"
          >
            <span>{step === 3 ? 'Bắt đầu khám phá ngay! 🌸' : 'Tiếp theo'}</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </motion.div>
    </div>
  );
};
