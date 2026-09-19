import React from 'react';
import { UserProfile } from '../types';
import { Sparkles, Flame, Volume2, VolumeX, ZoomIn, ZoomOut, User, Sprout, Store, BookOpen, Compass, Settings } from 'lucide-react';
import { soundFx } from '../utils/audio';

interface NavbarProps {
  user: UserProfile;
  activeTab: 'start' | 'guide' | 'shop' | 'garden' | 'settings';
  setActiveTab: (tab: 'start' | 'guide' | 'shop' | 'garden' | 'settings') => void;
  onToggleSound: () => void;
  onChangeFontSize: (dir: 'inc' | 'dec') => void;
  onOpenProfile: () => void;
  onOpenStreakRecovery: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  user,
  activeTab,
  setActiveTab,
  onToggleSound,
  onChangeFontSize,
  onOpenProfile,
  onOpenStreakRecovery,
}) => {
  const handleTabClick = (tab: 'start' | 'guide' | 'shop' | 'garden' | 'settings') => {
    soundFx.playPop();
    setActiveTab(tab);
  };

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b-2 border-emerald-200 shadow-sm">
      {/* Top status bar: Title + Economy stats + Accessibility Zoom */}
      <div className="max-w-7xl mx-auto px-3 sm:px-6 py-2.5 flex flex-wrap items-center justify-between gap-3">
        {/* Title & Brand */}
        <div 
          onClick={() => handleTabClick('garden')} 
          className="flex items-center gap-2 cursor-pointer group"
          title="Về trang chủ khu vườn"
        >
          <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-emerald-500 to-green-600 flex items-center justify-center text-2xl shadow-sm group-hover:scale-105 transition-transform">
            🍓
          </div>
          <div>
            <h1 className="font-extrabold text-lg sm:text-xl tracking-tight text-emerald-950 flex items-center gap-1.5">
              <span>𖧷₊˚˖𓍢ִ🍓✧study to grow a garden˚.🎀༘⋆ﾟ＊</span>
            </h1>
            <p className="text-xs text-emerald-800 font-semibold hidden sm:block">
              Học Toán 8 Kết Nối Tri Thức &amp; Nông Trại Tri Thức Xanh
            </p>
          </div>
        </div>

        {/* User stats: Streak, Coins, XP, Font Zoom & Sound */}
        <div className="flex items-center flex-wrap gap-2 sm:gap-3">
          {/* Daily Streak */}
          <button
            onClick={onOpenStreakRecovery}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full font-bold text-sm border transition-all ${
              user.isStreakBroken
                ? 'bg-amber-100 text-amber-900 border-amber-300 hover:bg-amber-200 animate-pulse'
                : 'bg-orange-50 text-orange-700 border-orange-200 hover:bg-orange-100'
            }`}
            title={user.isStreakBroken ? 'Chuỗi bị mất! Nhấn để khôi phục (200 xu)' : 'Chuỗi học tập mỗi ngày'}
          >
            <Flame className={`w-4 h-4 ${user.isStreakBroken ? 'text-amber-500' : 'text-orange-500 fill-orange-500'}`} />
            <span>{user.streak} ngày</span>
            {user.isStreakBroken && (
              <span className="text-xs px-1.5 py-0.5 bg-red-600 text-white rounded-full font-extrabold">Cứu chuỗi</span>
            )}
          </button>

          {/* Coins */}
          <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-yellow-50 text-yellow-900 border border-yellow-300 font-extrabold text-sm shadow-2xs">
            <span className="text-base">🪙</span>
            <span className="tabular-nums">{user.coins.toLocaleString('vi-VN')}</span>
            <span className="text-xs font-semibold text-yellow-800">xu</span>
          </div>

          {/* Level / XP */}
          <div className="hidden md:flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-emerald-50 text-emerald-900 border border-emerald-300 font-bold text-sm">
            <Sparkles className="w-4 h-4 text-emerald-600" />
            <span>Cấp {user.level}</span>
            <span className="text-xs text-emerald-800 font-normal">({user.xp} XP)</span>
          </div>

          {/* Accessibility Font Size Controls */}
          <div className="flex items-center bg-emerald-100/70 p-1 rounded-full border border-emerald-300">
            <button
              onClick={() => onChangeFontSize('dec')}
              className="p-1.5 hover:bg-white rounded-full text-emerald-900 transition-colors"
              title="Giảm kích thước chữ"
              aria-label="Giảm kích thước chữ"
            >
              <ZoomOut className="w-4 h-4" />
            </button>
            <span className="text-xs font-bold px-1 text-emerald-950">A</span>
            <button
              onClick={() => onChangeFontSize('inc')}
              className="p-1.5 hover:bg-white rounded-full text-emerald-900 transition-colors"
              title="Tăng kích thước chữ"
              aria-label="Tăng kích thước chữ"
            >
              <ZoomIn className="w-4 h-4" />
            </button>
          </div>

          {/* Sound Toggle */}
          <button
            onClick={onToggleSound}
            className={`p-2 rounded-full border transition-colors ${
              user.soundEnabled
                ? 'bg-emerald-100 text-emerald-900 border-emerald-300 hover:bg-emerald-200'
                : 'bg-slate-200 text-slate-600 border-slate-300 hover:bg-slate-300'
            }`}
            title={user.soundEnabled ? 'Tắt âm thanh' : 'Bật âm thanh'}
            aria-label="Bật tắt âm thanh"
          >
            {user.soundEnabled ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
          </button>

          {/* User Profile Avatar */}
          <button
            onClick={onOpenProfile}
            className="flex items-center gap-1.5 pl-1.5 pr-3 py-1 rounded-full bg-emerald-700 text-white hover:bg-emerald-800 font-bold text-sm transition-transform active:scale-95 shadow-sm"
            title="Hồ sơ tài khoản học sinh"
          >
            <span className="w-7 h-7 rounded-full bg-white/20 flex items-center justify-center text-base">
              {user.avatar || '🌱'}
            </span>
            <span className="max-w-[80px] sm:max-w-[120px] truncate">{user.name}</span>
          </button>
        </div>
      </div>

      {/* 5 Main Tabs Navigation */}
      <nav className="bg-emerald-800 text-white border-t border-emerald-900 shadow-inner px-2">
        <div className="max-w-5xl mx-auto flex items-center justify-around sm:justify-center sm:gap-2 overflow-x-auto py-1.5">
          <button
            id="nav-start"
            onClick={() => handleTabClick('start')}
            className={`flex items-center gap-1.5 px-3.5 py-2 rounded-xl font-bold text-sm sm:text-base transition-all whitespace-nowrap ${
              activeTab === 'start'
                ? 'bg-white text-emerald-950 shadow-md scale-102 font-extrabold'
                : 'text-emerald-100 hover:bg-emerald-700/80 hover:text-white'
            }`}
          >
            <BookOpen className="w-4 h-4 text-amber-500" />
            <span>Bắt đầu</span>
          </button>

          <button
            id="nav-garden"
            onClick={() => handleTabClick('garden')}
            className={`flex items-center gap-1.5 px-3.5 py-2 rounded-xl font-bold text-sm sm:text-base transition-all whitespace-nowrap ${
              activeTab === 'garden'
                ? 'bg-white text-emerald-950 shadow-md scale-102 font-extrabold'
                : 'text-emerald-100 hover:bg-emerald-700/80 hover:text-white'
            }`}
          >
            <Sprout className="w-4 h-4 text-emerald-600" />
            <span>Khu vườn</span>
          </button>

          <button
            id="nav-shop"
            onClick={() => handleTabClick('shop')}
            className={`flex items-center gap-1.5 px-3.5 py-2 rounded-xl font-bold text-sm sm:text-base transition-all whitespace-nowrap ${
              activeTab === 'shop'
                ? 'bg-white text-emerald-950 shadow-md scale-102 font-extrabold'
                : 'text-emerald-100 hover:bg-emerald-700/80 hover:text-white'
            }`}
          >
            <Store className="w-4 h-4 text-amber-500" />
            <span>Cửa hàng</span>
          </button>

          <button
            id="nav-guide"
            onClick={() => handleTabClick('guide')}
            className={`flex items-center gap-1.5 px-3.5 py-2 rounded-xl font-bold text-sm sm:text-base transition-all whitespace-nowrap ${
              activeTab === 'guide'
                ? 'bg-white text-emerald-950 shadow-md scale-102 font-extrabold'
                : 'text-emerald-100 hover:bg-emerald-700/80 hover:text-white'
            }`}
          >
            <Compass className="w-4 h-4 text-sky-400" />
            <span>Hướng dẫn</span>
          </button>

          <button
            id="nav-settings"
            onClick={() => handleTabClick('settings')}
            className={`flex items-center gap-1.5 px-3.5 py-2 rounded-xl font-bold text-sm sm:text-base transition-all whitespace-nowrap ${
              activeTab === 'settings'
                ? 'bg-white text-emerald-950 shadow-md scale-102 font-extrabold'
                : 'text-emerald-100 hover:bg-emerald-700/80 hover:text-white'
            }`}
          >
            <Settings className="w-4 h-4 text-emerald-300" />
            <span>Cài đặt</span>
          </button>
        </div>
      </nav>
    </header>
  );
};
