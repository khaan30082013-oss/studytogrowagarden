import React from 'react';
import { UserProfile } from '../types';
import { BookOpen, Sprout, Store, Compass, Settings, Flame, Sparkles, ArrowRight, Sun, Award } from 'lucide-react';
import { soundFx } from '../utils/audio';

interface GardenOverviewProps {
  user: UserProfile;
  onNavigate: (tab: 'start' | 'guide' | 'shop' | 'garden' | 'settings') => void;
  onStartQuiz: () => void;
}

export const GardenOverview: React.FC<GardenOverviewProps> = ({
  user,
  onNavigate,
  onStartQuiz,
}) => {
  const readyToHarvestCount = user.plots.filter(p => {
    if (!p.plantedSeedId || !p.plantedAt) return false;
    const elapsedMinutes = (Date.now() - p.plantedAt) / (1000 * 60);
    return elapsedMinutes >= p.growthMinutes;
  }).length;

  const plantedCount = user.plots.filter(p => p.plantedSeedId).length;

  return (
    <div className="relative overflow-hidden rounded-3xl border-3 border-emerald-300 bg-gradient-to-b from-sky-100 via-emerald-100 to-green-150 p-4 sm:p-8 shadow-xl my-4">
      {/* Garden Sky & Sun details */}
      <div className="absolute top-4 right-8 flex items-center gap-2 text-amber-500 animate-pulse">
        <Sun className="w-12 h-12 text-amber-400 drop-shadow-md" />
      </div>

      {/* Centerpiece Big Tree with Title */}
      <div className="relative z-10 flex flex-col items-center text-center my-4 sm:my-6">
        {/* Animated Big Tree Illustration */}
        <div className="relative mb-2">
          {/* Tree Canopy */}
          <div className="relative w-44 h-44 sm:w-56 sm:h-56 mx-auto flex items-center justify-center">
            {/* Soft glow */}
            <div className="absolute inset-0 bg-emerald-400/30 rounded-full blur-2xl transform scale-90" />
            
            {/* SVG Big Tree with lush leaves, cute strawberries, ribbons */}
            <svg viewBox="0 0 200 200" className="w-full h-full drop-shadow-lg">
              {/* Tree Trunk */}
              <path
                d="M90 190 C90 140, 85 120, 100 100 C115 120, 110 140, 110 190 Z"
                fill="#854d0e"
                stroke="#582a06"
                strokeWidth="3"
              />
              <path d="M96 150 C98 135, 102 135, 104 150" stroke="#582a06" strokeWidth="2" fill="none" />
              {/* Roots */}
              <path d="M85 188 C70 195, 60 198, 45 198" stroke="#582a06" strokeWidth="3" fill="none" strokeLinecap="round" />
              <path d="M115 188 C130 195, 140 198, 155 198" stroke="#582a06" strokeWidth="3" fill="none" strokeLinecap="round" />
              
              {/* Main Foliage Cloud 1 */}
              <circle cx="100" cy="75" r="55" fill="#15803d" />
              <circle cx="65" cy="85" r="42" fill="#16a34a" />
              <circle cx="135" cy="85" r="42" fill="#16a34a" />
              <circle cx="80" cy="50" r="38" fill="#22c55e" />
              <circle cx="120" cy="50" r="38" fill="#22c55e" />
              <circle cx="100" cy="40" r="30" fill="#4ade80" />

              {/* Little Strawberries & Flowers hanging on Tree */}
              <g transform="translate(65, 65) scale(0.7)">
                <text x="0" y="0" fontSize="22">🍓</text>
              </g>
              <g transform="translate(120, 60) scale(0.7)">
                <text x="0" y="0" fontSize="22">🍓</text>
              </g>
              <g transform="translate(90, 85) scale(0.75)">
                <text x="0" y="0" fontSize="22">🍓</text>
              </g>
              <g transform="translate(50, 95) scale(0.65)">
                <text x="0" y="0" fontSize="22">🌸</text>
              </g>
              <g transform="translate(135, 95) scale(0.65)">
                <text x="0" y="0" fontSize="22">🌸</text>
              </g>
              <g transform="translate(92, 30) scale(0.7)">
                <text x="0" y="0" fontSize="22">🎀</text>
              </g>
            </svg>
          </div>
        </div>

        {/* Title Signboard on the Big Tree */}
        <div className="bg-white/95 backdrop-blur-md px-5 py-3.5 sm:px-8 sm:py-4 rounded-3xl border-3 border-emerald-400 shadow-xl max-w-2xl mx-auto -mt-6 flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
          <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full overflow-hidden border-3 border-emerald-500 shadow-md shrink-0 bg-emerald-50 mx-auto">
            <img 
              src="/avatar.jpg" 
              alt="Mascot Study to Grow a Garden" 
              className="w-full h-full object-cover" 
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="flex-1 text-center sm:text-left">
            <div className="text-emerald-800 text-xs sm:text-sm font-black uppercase tracking-wider mb-1 flex items-center justify-center sm:justify-start gap-1.5">
              <span>✧ NÔNG TRẠI TOÁN HỌC LỚP 8 ✧</span>
            </div>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-emerald-950 tracking-tight leading-snug">
              “ 𖧷₊˚˖𓍢ִ🍓✧study to grow a garden˚.🎀༘⋆ﾟ＊ ”
            </h2>
            <p className="mt-1.5 text-sm sm:text-base font-semibold text-slate-800 max-w-lg">
              Học từng bài học Toán 8, giải 10 câu hỏi để nhận Xu &amp; XP, chăm sóc luống rau củ và xây dựng khu vườn trong mơ!
            </p>
          </div>
        </div>
      </div>

      {/* Planting Pot & Quick Status Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 max-w-4xl mx-auto my-6 relative z-10">
        {/* Pot 1: Planting pot status */}
        <div 
          onClick={() => { soundFx.playPop(); onNavigate('garden'); }}
          className="bg-white/90 p-4 rounded-2xl border-2 border-emerald-300 shadow-sm hover:border-emerald-500 cursor-pointer transition-all hover:scale-102 flex items-center gap-3"
        >
          <div className="w-14 h-14 rounded-2xl bg-amber-100 border border-amber-300 flex items-center justify-center text-3xl shadow-inner">
            🪴
          </div>
          <div>
            <span className="text-xs font-bold text-emerald-800 uppercase tracking-wide">Bồn trồng cây</span>
            <h4 className="font-extrabold text-slate-900 text-base">
              {plantedCount > 0 ? `${plantedCount}/6 Luống đang trồng` : 'Đang trống hạt'}
            </h4>
            <p className="text-xs font-semibold text-emerald-700">
              {readyToHarvestCount > 0 ? `✨ Có ${readyToHarvestCount} cây đã chín!` : 'Chăm sóc 20 phút mỗi vụ'}
            </p>
          </div>
        </div>

        {/* Pot 2: Study Streak */}
        <div 
          onClick={() => { soundFx.playPop(); onNavigate('start'); }}
          className="bg-white/90 p-4 rounded-2xl border-2 border-emerald-300 shadow-sm hover:border-emerald-500 cursor-pointer transition-all hover:scale-102 flex items-center gap-3"
        >
          <div className="w-14 h-14 rounded-2xl bg-orange-100 border border-orange-300 flex items-center justify-center text-3xl shadow-inner">
            🔥
          </div>
          <div>
            <span className="text-xs font-bold text-orange-800 uppercase tracking-wide">Chuỗi mỗi ngày</span>
            <h4 className="font-extrabold text-slate-900 text-base">
              {user.isStreakBroken ? 'Chuỗi bị ngắt' : `${user.streak} Ngày liên tiếp`}
            </h4>
            <p className="text-xs font-semibold text-slate-700">
              {user.isStreakBroken ? 'Khôi phục 200 xu' : 'Duy trì học mỗi ngày'}
            </p>
          </div>
        </div>

        {/* Pot 3: Completed Lessons */}
        <div 
          onClick={() => { soundFx.playPop(); onNavigate('start'); }}
          className="bg-white/90 p-4 rounded-2xl border-2 border-emerald-300 shadow-sm hover:border-emerald-500 cursor-pointer transition-all hover:scale-102 flex items-center gap-3"
        >
          <div className="w-14 h-14 rounded-2xl bg-emerald-100 border border-emerald-300 flex items-center justify-center text-3xl shadow-inner">
            📖
          </div>
          <div>
            <span className="text-xs font-bold text-emerald-800 uppercase tracking-wide">Bài đã hoàn thành</span>
            <h4 className="font-extrabold text-slate-900 text-base">
              {user.completedLessons.length} / 39 Bài học
            </h4>
            <p className="text-xs font-semibold text-emerald-700">
              Đầy đủ 10 chương Toán 8
            </p>
          </div>
        </div>
      </div>

      {/* Big Action Buttons Row */}
      <div className="max-w-3xl mx-auto flex flex-wrap items-center justify-center gap-3 sm:gap-4 relative z-10 pt-2">
        <button
          id="hero-start-btn"
          onClick={() => {
            soundFx.playPop();
            onNavigate('start');
          }}
          className="px-6 py-3.5 rounded-2xl bg-gradient-to-r from-emerald-600 via-green-600 to-emerald-700 hover:from-emerald-700 hover:to-green-800 text-white font-black text-base sm:text-lg shadow-lg shadow-emerald-800/20 flex items-center gap-2.5 transition-all hover:scale-103 active:scale-95 border-2 border-emerald-400"
        >
          <BookOpen className="w-5 h-5 text-amber-300" />
          <span>Bắt đầu học Toán 8 ngay</span>
          <ArrowRight className="w-5 h-5" />
        </button>

        <button
          id="hero-garden-btn"
          onClick={() => {
            soundFx.playPop();
            onNavigate('garden');
          }}
          className="px-5 py-3.5 rounded-2xl bg-white hover:bg-emerald-50 text-emerald-950 font-extrabold text-base sm:text-lg shadow-md border-2 border-emerald-400 flex items-center gap-2 transition-all hover:scale-103 active:scale-95"
        >
          <Sprout className="w-5 h-5 text-emerald-600" />
          <span>Vào nông trại trồng cây</span>
        </button>

        <button
          id="hero-shop-btn"
          onClick={() => {
            soundFx.playPop();
            onNavigate('shop');
          }}
          className="px-5 py-3.5 rounded-2xl bg-yellow-400 hover:bg-yellow-500 text-yellow-950 font-black text-base sm:text-lg shadow-md border-2 border-yellow-500 flex items-center gap-2 transition-all hover:scale-103 active:scale-95"
        >
          <Store className="w-5 h-5 text-yellow-900" />
          <span>Cửa hàng hạt giống &amp; Decor</span>
        </button>
      </div>

      {/* Decorative Ground Grass & Flowers footer */}
      <div className="mt-8 pt-4 border-t border-emerald-200/60 flex items-center justify-between text-xs font-semibold text-emerald-900 max-w-4xl mx-auto">
        <div className="flex items-center gap-2">
          <span>🌿 Khu vườn xanh tốt</span>
          <span>•</span>
          <span>🌸 10 câu hỏi/bài</span>
          <span>•</span>
          <span>🪙 +5 xu mỗi câu đúng</span>
        </div>
        <div className="hidden sm:block text-slate-700">
          Chủ đề: Cây cối &amp; Học tập tích cực
        </div>
      </div>
    </div>
  );
};
