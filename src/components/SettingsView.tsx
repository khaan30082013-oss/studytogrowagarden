import React, { useState } from 'react';
import { UserProfile, LessonLog } from '../types';
import { DEFAULT_AVATARS } from '../data/gardenItems';
import { soundFx } from '../utils/audio';
import { Volume2, VolumeX, User, Sparkles, Flame, History, BookOpen, Check, ZoomIn, ZoomOut, RotateCcw, AlertTriangle } from 'lucide-react';

interface SettingsViewProps {
  user: UserProfile;
  onUpdateName: (name: string) => void;
  onUpdateAvatar: (avatar: string) => void;
  onToggleSound: () => void;
  onSetFontSize: (size: 'normal' | 'large' | 'xlarge') => void;
  onRecoverStreak: () => void;
  onSimulateMissedDay: () => void;
  onSwitchAccount: () => void;
}

export const SettingsView: React.FC<SettingsViewProps> = ({
  user,
  onUpdateName,
  onUpdateAvatar,
  onToggleSound,
  onSetFontSize,
  onRecoverStreak,
  onSimulateMissedDay,
  onSwitchAccount,
}) => {
  const [editingName, setEditingName] = useState(user.name);
  const [selectedReviewLesson, setSelectedReviewLesson] = useState<LessonLog | null>(null);
  const [nameSavedNotice, setNameSavedNotice] = useState(false);

  const handleSaveName = (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingName.trim()) return;
    soundFx.playPop();
    onUpdateName(editingName.trim());
    setNameSavedNotice(true);
    setTimeout(() => setNameSavedNotice(false), 2000);
  };

  return (
    <div className="space-y-6 max-w-4xl mx-auto">
      {/* Profile & Name Card */}
      <div className="bg-white p-6 sm:p-8 rounded-3xl border-2 border-emerald-200 shadow-sm space-y-6">
        <h3 className="text-xl font-black text-emerald-950 flex items-center gap-2">
          <User className="w-6 h-6 text-emerald-600" />
          <span>Thông tin tài khoản học sinh</span>
        </h3>

        {/* Name input */}
        <form onSubmit={handleSaveName} className="space-y-3">
          <label className="block text-sm font-extrabold text-slate-700">
            Tên hiển thị của bạn:
          </label>
          <div className="flex gap-2 max-w-md">
            <input
              type="text"
              value={editingName}
              onChange={(e) => setEditingName(e.target.value)}
              className="flex-1 px-4 py-2.5 rounded-2xl bg-emerald-50/60 border-2 border-emerald-200 text-slate-900 font-bold focus:outline-none focus:border-emerald-500"
              maxLength={25}
            />
            <button
              type="submit"
              className="px-5 py-2.5 bg-emerald-700 hover:bg-emerald-800 text-white font-black rounded-2xl transition-transform active:scale-95 cursor-pointer"
            >
              Lưu tên
            </button>
          </div>
          {nameSavedNotice && (
            <p className="text-xs font-bold text-emerald-700">✓ Đã cập nhật tên thành công!</p>
          )}
        </form>

        {/* Avatar Picker */}
        <div className="space-y-3">
          <label className="block text-sm font-extrabold text-slate-700">
            Chọn hình đại diện nông dân nhí:
          </label>
          <div className="grid grid-cols-4 sm:grid-cols-8 gap-2.5">
            {DEFAULT_AVATARS.map((av) => (
              <button
                key={av.id}
                onClick={() => {
                  soundFx.playPop();
                  onUpdateAvatar(av.emoji);
                }}
                className={`p-3 rounded-2xl border-2 text-2xl sm:text-3xl flex flex-col items-center justify-center transition-all cursor-pointer ${
                  user.avatar === av.emoji
                    ? 'bg-emerald-100 border-emerald-600 ring-2 ring-emerald-400 scale-105'
                    : 'bg-emerald-50/50 border-emerald-200 hover:bg-emerald-100'
                }`}
                title={av.label}
              >
                <span>{av.emoji}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Switch Account button */}
        <div className="pt-2 border-t border-emerald-100 flex items-center justify-between">
          <span className="text-xs font-semibold text-slate-500">Đăng nhập tài khoản khác trên thiết bị</span>
          <button
            onClick={onSwitchAccount}
            className="px-4 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs"
          >
            Đổi tài khoản / Đăng xuất
          </button>
        </div>
      </div>

      {/* Game & Accessibility Settings Card */}
      <div className="bg-white p-6 sm:p-8 rounded-3xl border-2 border-emerald-200 shadow-sm space-y-6">
        <h3 className="text-xl font-black text-emerald-950 flex items-center gap-2">
          <Sparkles className="w-6 h-6 text-emerald-600" />
          <span>Cài đặt trò chơi &amp; Giao diện</span>
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* Sound Setting */}
          <div className="p-4 rounded-2xl bg-emerald-50/60 border border-emerald-200 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center text-emerald-700 shadow-2xs">
                {user.soundEnabled ? <Volume2 className="w-5 h-5" /> : <VolumeX className="w-5 h-5" />}
              </div>
              <div>
                <h5 className="font-extrabold text-sm text-slate-900">Âm thanh hiệu ứng</h5>
                <p className="text-xs text-slate-500 font-medium">Tiếng gieo hạt, thu hoạch xu</p>
              </div>
            </div>
            <button
              onClick={() => {
                soundFx.playPop();
                onToggleSound();
              }}
              className={`px-4 py-2 rounded-xl font-extrabold text-xs transition-colors ${
                user.soundEnabled
                  ? 'bg-emerald-700 text-white'
                  : 'bg-slate-200 text-slate-600'
              }`}
            >
              {user.soundEnabled ? 'Đang BẬT' : 'Đang TẮT'}
            </button>
          </div>

          {/* Font Size Setting (Minimum 18px by requirement) */}
          <div className="p-4 rounded-2xl bg-emerald-50/60 border border-emerald-200 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center text-emerald-700 shadow-2xs font-black text-base">
                A±
              </div>
              <div>
                <h5 className="font-extrabold text-sm text-slate-900">Kích thước chữ (Tối thiểu 18px)</h5>
                <p className="text-xs text-slate-500 font-medium">
                  Hiện tại: {user.fontSize === 'normal' ? '18px (Chuẩn)' : user.fontSize === 'large' ? '20px (Lớn)' : '23px (Rất lớn)'}
                </p>
              </div>
            </div>
            <div className="flex gap-1">
              <button
                onClick={() => onSetFontSize('normal')}
                className={`px-2.5 py-1.5 rounded-lg text-xs font-black ${
                  user.fontSize === 'normal' ? 'bg-emerald-700 text-white' : 'bg-white text-slate-700 border'
                }`}
              >
                18px
              </button>
              <button
                onClick={() => onSetFontSize('large')}
                className={`px-2.5 py-1.5 rounded-lg text-xs font-black ${
                  user.fontSize === 'large' ? 'bg-emerald-700 text-white' : 'bg-white text-slate-700 border'
                }`}
              >
                20px
              </button>
              <button
                onClick={() => onSetFontSize('xlarge')}
                className={`px-2.5 py-1.5 rounded-lg text-xs font-black ${
                  user.fontSize === 'xlarge' ? 'bg-emerald-700 text-white' : 'bg-white text-slate-700 border'
                }`}
              >
                23px
              </button>
            </div>
          </div>
        </div>

        {/* Daily Streak Management & Recovery */}
        <div className="p-5 rounded-2xl bg-gradient-to-r from-orange-50 to-amber-50 border-2 border-orange-200 space-y-3">
          <div className="flex items-center justify-between flex-wrap gap-2">
            <div className="flex items-center gap-2">
              <Flame className="w-6 h-6 text-orange-500 fill-orange-500" />
              <div>
                <h5 className="font-black text-slate-900 text-base">
                  Chuỗi học tập mỗi ngày: {user.streak} ngày
                </h5>
                <p className="text-xs text-slate-600 font-semibold">
                  Ngày học gần nhất: {user.lastStudyDate || 'Chưa ghi nhận'}
                </p>
              </div>
            </div>

            {user.isStreakBroken ? (
              <button
                onClick={onRecoverStreak}
                className="px-5 py-2.5 rounded-2xl bg-amber-500 hover:bg-amber-600 text-white font-black text-sm shadow-md flex items-center gap-1.5 cursor-pointer"
              >
                <span>Khôi phục chuỗi (200 Xu)</span>
              </button>
            ) : (
              <span className="px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 font-bold text-xs">
                ✓ Chuỗi đang duy trì tốt
              </span>
            )}
          </div>

          <div className="flex items-center justify-between pt-2 border-t border-orange-100 text-xs text-slate-500">
            <span>Nếu không vào học một ngày, chuỗi sẽ mất và cần 200 xu để khôi phục.</span>
            <button
              onClick={onSimulateMissedDay}
              className="text-orange-700 hover:underline font-bold"
              title="Mô phỏng bỏ lỡ 1 ngày để thử tính năng khôi phục chuỗi 200 xu"
            >
              [Mô phỏng bỏ lỡ 1 ngày]
            </button>
          </div>
        </div>
      </div>

      {/* SAVED LESSONS LOG (Lưu lại danh sách các bài học ngay trong phiên để người dùng xem lại) */}
      <div className="bg-white p-6 sm:p-8 rounded-3xl border-2 border-emerald-200 shadow-sm space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-xl font-black text-emerald-950 flex items-center gap-2">
            <History className="w-6 h-6 text-emerald-600" />
            <span>Nhật ký bài học đã hoàn thành ({user.completedLessons.length})</span>
          </h3>
          <span className="text-xs font-semibold text-slate-500">Lưu trữ trong phiên làm việc</span>
        </div>

        {user.completedLessons.length === 0 ? (
          <div className="text-center py-8 bg-emerald-50/50 rounded-2xl border border-dashed border-emerald-200 p-4">
            <BookOpen className="w-8 h-8 text-emerald-500 mx-auto mb-2 opacity-60" />
            <p className="text-slate-800 font-bold text-sm">Bạn chưa hoàn thành bài học nào.</p>
            <p className="text-xs text-slate-600 mt-1">
              Hãy chọn một bài ở mục "Bắt đầu", hoàn thành 10 câu hỏi để lưu lại nhật ký và nhận thưởng!
            </p>
          </div>
        ) : (
          <div className="space-y-3">
            {user.completedLessons.map((log) => (
              <div
                key={log.id}
                className="p-4 rounded-2xl border-2 border-emerald-100 bg-emerald-50/40 hover:bg-emerald-50 flex flex-wrap items-center justify-between gap-3 transition-colors"
              >
                <div className="space-y-0.5">
                  <span className="text-xs font-bold text-emerald-700 uppercase">
                    {log.chapterTitle} • {log.date}
                  </span>
                  <h4 className="font-extrabold text-base text-slate-900">
                    {log.lessonTitle}
                  </h4>
                  <div className="flex items-center gap-2 text-xs font-semibold text-slate-600">
                    <span className="text-emerald-700 font-bold">
                      Điểm: {log.score}/{log.totalQuestions}
                    </span>
                    <span>•</span>
                    <span className="text-amber-700 font-bold">
                      +{log.coinsEarned} xu
                    </span>
                    <span>•</span>
                    <span className="text-emerald-800 font-bold">
                      +{log.xpEarned} XP
                    </span>
                  </div>
                </div>

                <button
                  onClick={() => {
                    soundFx.playPop();
                    setSelectedReviewLesson(log);
                  }}
                  className="px-4 py-2 rounded-xl bg-white hover:bg-emerald-100 border border-emerald-300 text-emerald-950 font-extrabold text-xs shadow-2xs cursor-pointer"
                >
                  Xem lại tóm tắt bài học
                </button>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Review Modal for a specific logged lesson */}
      {selectedReviewLesson && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-emerald-950/60 backdrop-blur-sm">
          <div className="bg-white rounded-3xl max-w-lg w-full p-6 shadow-2xl border-3 border-emerald-400 space-y-4 max-h-[85vh] overflow-y-auto">
            <div className="flex items-center justify-between border-b border-emerald-100 pb-3">
              <div>
                <span className="text-xs font-bold text-emerald-700">Ngày học: {selectedReviewLesson.date}</span>
                <h4 className="text-lg font-black text-emerald-950">
                  {selectedReviewLesson.lessonTitle}
                </h4>
              </div>
              <button
                onClick={() => setSelectedReviewLesson(null)}
                className="text-slate-400 hover:text-slate-600 text-xl font-bold"
              >
                ✕
              </button>
            </div>

            <div className="p-3.5 rounded-2xl bg-amber-50 border border-amber-200 text-xs font-semibold text-amber-900">
              “Đây là bản tóm tắt do AI tạo ra, có thể chưa đầy đủ — hãy đọc bản gốc nếu cần hiểu chi tiết.”
            </div>

            <div className="bg-emerald-50/50 p-4 rounded-2xl border border-emerald-200 text-slate-800 text-sm whitespace-pre-line leading-relaxed font-medium">
              {selectedReviewLesson.summary}
            </div>

            <div className="pt-2 text-center">
              <button
                onClick={() => setSelectedReviewLesson(null)}
                className="px-6 py-2.5 rounded-xl bg-emerald-700 text-white font-bold text-sm"
              >
                Đóng
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
