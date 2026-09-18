import React from 'react';
import { BookOpen, Sprout, Store, Award, Flame, HelpCircle, CheckCircle2, RotateCcw } from 'lucide-react';
import { soundFx } from '../utils/audio';

interface GuideViewProps {
  onStartLearning: () => void;
  onOpenGarden: () => void;
}

export const GuideView: React.FC<GuideViewProps> = ({
  onStartLearning,
  onOpenGarden,
}) => {
  return (
    <div className="space-y-6 max-w-4xl mx-auto">
      {/* Hero Banner */}
      <div className="bg-gradient-to-r from-emerald-600 to-green-700 text-white p-6 sm:p-8 rounded-3xl shadow-lg border-2 border-emerald-400">
        <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider mb-2 text-emerald-200">
          <span>📖 HƯỚNG DẪN CÁCH CHƠI &amp; NHẬN THƯỞNG</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-black">
          Vòng Tuần Hoàn Thú Vị: Học Tập - Tích Lũy - Nở Hoa 🌸
        </h2>
        <p className="text-emerald-100 font-semibold text-sm sm:text-base mt-2 leading-relaxed">
          Mục tiêu của ứng dụng là biến việc học Toán lớp 8 thành một trải nghiệm trồng trọt đầy hứng khởi, giúp bạn duy trì thói quen học tập chăm chỉ mỗi ngày!
        </p>
      </div>

      {/* 3 Steps Visual Breakdown */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {/* Step 1 */}
        <div className="bg-white p-5 rounded-3xl border-2 border-emerald-200 shadow-sm space-y-3">
          <div className="w-12 h-12 rounded-2xl bg-emerald-100 flex items-center justify-center text-2xl font-black text-emerald-800">
            1
          </div>
          <h4 className="font-extrabold text-lg text-emerald-950">Học bài &amp; Làm bài giải</h4>
          <p className="text-sm text-slate-700 leading-relaxed font-medium">
            Chọn học kỳ 1 hoặc 2, xem tóm tắt lý thuyết bài học và làm <strong>10 câu hỏi</strong> bám sát SGK Toán 8 (có hình minh họa cho các bài hình học).
          </p>
        </div>

        {/* Step 2 */}
        <div className="bg-white p-5 rounded-3xl border-2 border-emerald-200 shadow-sm space-y-3">
          <div className="w-12 h-12 rounded-2xl bg-amber-100 flex items-center justify-center text-2xl font-black text-amber-800">
            2
          </div>
          <h4 className="font-extrabold text-lg text-emerald-950">Nhận Xu &amp; Sửa lỗi thông minh</h4>
          <p className="text-sm text-slate-700 leading-relaxed font-medium">
            Trả lời đúng được <strong>+5 Xu</strong> mỗi câu. Nếu sai, ứng dụng cung cấp <strong>giải pháp rút gọn</strong> và cho làm <strong>câu hỏi tương tự</strong> để rèn luyện sâu!
          </p>
        </div>

        {/* Step 3 */}
        <div className="bg-white p-5 rounded-3xl border-2 border-emerald-200 shadow-sm space-y-3">
          <div className="w-12 h-12 rounded-2xl bg-green-100 flex items-center justify-center text-2xl font-black text-green-800">
            3
          </div>
          <h4 className="font-extrabold text-lg text-emerald-950">Trồng cây &amp; Xây khu vườn</h4>
          <p className="text-sm text-slate-700 leading-relaxed font-medium">
            Dùng Xu mua hạt giống cà rốt, dâu tây, cà chua... Gieo trồng 20 phút mỗi vụ để thu hoạch nông sản bội thu và trang trí hồ sen, ghế đá, đèn vườn lung linh!
          </p>
        </div>
      </div>

      {/* Rules FAQ Table */}
      <div className="bg-white p-6 sm:p-8 rounded-3xl border-2 border-emerald-200 shadow-sm space-y-5">
        <h3 className="text-xl font-black text-emerald-950 flex items-center gap-2">
          <HelpCircle className="w-6 h-6 text-emerald-600" />
          <span>Quy tắc chi tiết trong ứng dụng</span>
        </h3>

        <div className="space-y-4">
          <div className="p-4 rounded-2xl bg-emerald-50/70 border border-emerald-200">
            <h5 className="font-black text-emerald-950 text-base flex items-center gap-2">
              <Flame className="w-5 h-5 text-orange-500" />
              <span>Chuỗi ngày học liên tục (Daily Streak)</span>
            </h5>
            <p className="text-sm text-slate-700 mt-1 leading-relaxed">
              Mỗi ngày bạn vào học và hoàn thành bài tập, chuỗi ngày học sẽ tăng thêm 1 ngày. Nếu bỏ lỡ một ngày không học, chuỗi sẽ bị ngắt. Bạn có thể dùng <strong>200 Xu</strong> để khôi phục lại chuỗi ngày học quý giá này!
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-amber-50/70 border border-amber-200">
            <h5 className="font-black text-amber-950 text-base flex items-center gap-2">
              <Sprout className="w-5 h-5 text-green-600" />
              <span>Thời gian sinh trưởng và thu hoạch nông sản</span>
            </h5>
            <p className="text-sm text-slate-700 mt-1 leading-relaxed">
              Mỗi hạt giống cần đúng <strong>20 phút</strong> để trưởng thành. Ứng dụng cũng trang bị nút <em>"Tưới nước thần tốc"</em> để bạn có thể kiểm tra thu hoạch tức thì khi muốn thử nghiệm.
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-green-50/70 border border-green-200">
            <h5 className="font-black text-green-950 text-base flex items-center gap-2">
              <Award className="w-5 h-5 text-green-600" />
              <span>Bảng quy đổi kinh tế nông trại</span>
            </h5>
            <div className="mt-2 text-xs sm:text-sm text-slate-800 space-y-1 font-semibold">
              <p>• <strong>Cà rốt:</strong> Mua 15 xu ➔ Thu hoạch nhận 20 xu (lãi 5 xu)</p>
              <p>• <strong>Dâu tây:</strong> Mua 30 xu ➔ Thu hoạch nhận 45 xu (lãi 15 xu)</p>
              <p>• <strong>Việt quất:</strong> Mua 30 xu ➔ Thu hoạch nhận 50 xu (lãi 20 xu)</p>
              <p>• <strong>Cà chua:</strong> Mua 40 xu ➔ Thu hoạch nhận 65 xu (lãi 25 xu)</p>
              <p>• <strong>Ngô:</strong> Mua 45 xu ➔ Thu hoạch nhận 70 xu (lãi 25 xu)</p>
              <p>• <strong>Liễu cảnh:</strong> Mua 80 xu ➔ Thu hoạch nhận 130 xu (lãi 50 xu)</p>
              <p>• <strong>Bí đỏ:</strong> Mua 100 xu ➔ Thu hoạch nhận 180 xu (lãi 80 xu)</p>
            </div>
          </div>
        </div>

        {/* Action button */}
        <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
          <button
            onClick={() => { soundFx.playPop(); onStartLearning(); }}
            className="px-6 py-3.5 rounded-2xl bg-emerald-700 hover:bg-emerald-800 text-white font-black text-base shadow-md transition-transform active:scale-95"
          >
            Bắt đầu bài học đầu tiên 📚
          </button>
          <button
            onClick={() => { soundFx.playPop(); onOpenGarden(); }}
            className="px-6 py-3.5 rounded-2xl bg-yellow-400 hover:bg-yellow-500 text-yellow-950 font-black text-base shadow-md border border-yellow-500 transition-transform active:scale-95"
          >
            Ghé thăm nông trại 🌿
          </button>
        </div>
      </div>
    </div>
  );
};
