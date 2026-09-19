import React, { useState } from 'react';
import { DEFAULT_AVATARS } from '../data/gardenItems';
import { soundFx } from '../utils/audio';
import { User, Sparkles, ArrowRight, ShieldCheck } from 'lucide-react';

interface AuthModalProps {
  isOpen: boolean;
  onLogin: (name: string, avatar: string) => void;
  savedAccounts: Array<{ name: string; avatar: string; coins: number }>;
}

export const AuthModal: React.FC<AuthModalProps> = ({
  isOpen,
  onLogin,
  savedAccounts,
}) => {
  const [name, setName] = useState('');
  const [avatar, setAvatar] = useState('🌱');
  const [mode, setMode] = useState<'login' | 'register'>(savedAccounts.length > 0 ? 'login' : 'register');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) return;
    soundFx.playHarvest();
    onLogin(name.trim(), avatar);
  };

  const handleQuickLogin = (accName: string, accAvatar: string) => {
    soundFx.playHarvest();
    onLogin(accName, accAvatar);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-emerald-950/70 backdrop-blur-sm">
      <div className="bg-white rounded-3xl max-w-md w-full p-6 sm:p-8 shadow-2xl border-4 border-emerald-400 space-y-5 text-center relative overflow-hidden">
        {/* Decorative background circle */}
        <div className="absolute -top-12 -right-12 w-32 h-32 bg-emerald-100 rounded-full blur-2xl -z-10" />

        <div className="w-16 h-16 mx-auto rounded-full overflow-hidden border-2 border-emerald-400 shadow-md bg-emerald-50">
          <img 
            src="/avatar.jpg" 
            alt="Logo" 
            className="w-full h-full object-cover" 
            referrerPolicy="no-referrer" 
          />
        </div>

        <div>
          <h3 className="text-xl sm:text-2xl font-black text-emerald-950">
            {mode === 'login' ? 'Đăng Nhập Tài Khoản Học Sinh' : 'Tạo Tài Khoản Mới'}
          </h3>
          <p className="text-xs sm:text-sm font-semibold text-emerald-800 mt-1">
            𖧷₊˚˖𓍢ִ🍓✧study to grow a garden˚.🎀༘⋆ﾟ＊
          </p>
        </div>

        {/* Existing Accounts Quick Pick if any */}
        {mode === 'login' && savedAccounts.length > 0 ? (
          <div className="space-y-3">
            <span className="text-xs font-bold text-slate-500 uppercase block">
              Chọn tài khoản đã lưu trên máy:
            </span>
            <div className="space-y-2 max-h-[180px] overflow-y-auto pr-1">
              {savedAccounts.map((acc, i) => (
                <div
                  key={i}
                  onClick={() => handleQuickLogin(acc.name, acc.avatar)}
                  className="p-3 rounded-2xl border-2 border-emerald-200 bg-emerald-50/60 hover:bg-emerald-100 cursor-pointer flex items-center justify-between transition-all"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{acc.avatar}</span>
                    <span className="font-extrabold text-sm text-slate-900">{acc.name}</span>
                  </div>
                  <span className="text-xs font-bold text-amber-700 bg-amber-100 px-2 py-0.5 rounded-full">
                    {acc.coins} xu 🪙
                  </span>
                </div>
              ))}
            </div>

            <button
              onClick={() => {
                soundFx.playPop();
                setMode('register');
              }}
              className="text-xs font-bold text-emerald-700 hover:underline pt-2 block mx-auto"
            >
              + Hoặc tạo một tài khoản học sinh mới
            </button>
          </div>
        ) : (
          /* Register Form */
          <form onSubmit={handleSubmit} className="space-y-4 text-left">
            <div>
              <label className="block text-xs font-extrabold text-slate-700 mb-1">
                Tên của bạn (Họ tên hoặc biệt danh):
              </label>
              <input
                type="text"
                placeholder="Ví dụ: Minh Anh 8A, Tuấn Khang..."
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="w-full px-4 py-3 rounded-2xl bg-emerald-50/70 border-2 border-emerald-200 text-slate-900 font-bold focus:outline-none focus:border-emerald-500 text-base"
                maxLength={25}
              />
            </div>

            <div>
              <label className="block text-xs font-extrabold text-slate-700 mb-1">
                Chọn hình đại diện yêu thích:
              </label>
              <div className="grid grid-cols-4 gap-2">
                {DEFAULT_AVATARS.slice(0, 8).map((av) => (
                  <button
                    type="button"
                    key={av.id}
                    onClick={() => setAvatar(av.emoji)}
                    className={`p-2 rounded-xl text-2xl border-2 flex items-center justify-center transition-all ${
                      avatar === av.emoji
                        ? 'bg-emerald-100 border-emerald-600 ring-2 ring-emerald-400'
                        : 'bg-slate-50 border-slate-200 hover:bg-emerald-50'
                    }`}
                  >
                    <span>{av.emoji}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Welcome Bonus Note */}
            <div className="p-2.5 rounded-xl bg-amber-50 border border-amber-200 text-xs font-bold text-amber-900 flex items-center gap-2">
              <span>🎁 Tặng ngay 100 Xu Chào Mừng khi vào tài khoản!</span>
            </div>

            <button
              type="submit"
              className="w-full py-3.5 px-6 rounded-2xl bg-gradient-to-r from-emerald-600 to-green-700 hover:from-emerald-700 hover:to-green-800 text-white font-black text-base shadow-lg shadow-emerald-800/20 flex items-center justify-center gap-2 cursor-pointer transition-transform active:scale-95"
            >
              <span>Vào Vườn Học Tập Ngay</span>
              <ArrowRight className="w-5 h-5" />
            </button>

            {savedAccounts.length > 0 && (
              <button
                type="button"
                onClick={() => setMode('login')}
                className="text-xs font-bold text-slate-500 hover:text-slate-800 block mx-auto text-center mt-2"
              >
                ← Quay lại danh sách tài khoản đã có
              </button>
            )}
          </form>
        )}
      </div>
    </div>
  );
};
