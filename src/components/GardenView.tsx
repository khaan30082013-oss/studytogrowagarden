import React, { useState, useEffect } from 'react';
import confetti from 'canvas-confetti';
import { UserProfile, GardenPlot, SeedItem, GardenTileType } from '../types';
import { SEEDS, DECORATIONS, createDefaultGardenPlots } from '../data/gardenItems';
import { soundFx } from '../utils/audio';
import { Store, Droplets, Sparkles, RotateCcw, X, Plus, Clock, Check, Trash2, Edit3 } from 'lucide-react';

interface GardenViewProps {
  user: UserProfile;
  onUpdatePlots: (plots: GardenPlot[]) => void;
  onUpdateDecorations: (decorations: any[]) => void;
  onAddCoins: (amount: number) => void;
  onOpenShop: () => void;
}

export const GardenView: React.FC<GardenViewProps> = ({
  user,
  onUpdatePlots,
  onAddCoins,
  onOpenShop,
}) => {
  const [currentTime, setCurrentTime] = useState(Date.now());
  const [selectedTileId, setSelectedTileId] = useState<number | null>(null);
  const [isPlantModalOpen, setIsPlantModalOpen] = useState(false);
  const [isTileEditModalOpen, setIsTileEditModalOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Ensure user has 30 plots matching the screenshot grid
  const plots: GardenPlot[] = user.plots && user.plots.length === 30
    ? user.plots
    : createDefaultGardenPlots();

  // Tick timer every second
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(Date.now());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 2800);
  };

  // Harvest a ripe crop
  const handleHarvest = (plot: GardenPlot) => {
    if (!plot.plantedSeedId) return;
    const seed = SEEDS.find(s => s.id === plot.plantedSeedId);
    const rewardCoins = seed ? seed.harvestTotal : 50;
    const cropName = seed ? seed.name : 'Nông sản';

    soundFx.playHarvest();
    try {
      confetti({
        particleCount: 60,
        spread: 70,
        origin: { y: 0.6 }
      });
    } catch {}

    onAddCoins(rewardCoins);
    showToast(`🎉 Thu hoạch ${cropName}! Nhận +${rewardCoins} Xu & +15 XP!`);

    // Reset plot to empty soil
    const updated = plots.map(p => {
      if (p.id === plot.id) {
        return {
          ...p,
          plantedSeedId: undefined,
          plantedAt: undefined,
          isWatered: false,
        };
      }
      return p;
    });
    onUpdatePlots(updated);
  };

  // Open planting modal for a soil plot
  const handleTileClick = (plot: GardenPlot) => {
    soundFx.playPop();

    // If it has a ripe crop, harvest immediately!
    const seed = plot.plantedSeedId ? SEEDS.find(s => s.id === plot.plantedSeedId) : null;
    if (seed && plot.plantedAt) {
      const elapsedMs = currentTime - plot.plantedAt;
      const totalMs = plot.growthMinutes * 60 * 1000;
      if (elapsedMs >= totalMs) {
        handleHarvest(plot);
        return;
      }
    }

    setSelectedTileId(plot.id);

    // If it's a soil plot without ripe crop
    if (plot.tileType === 'soil' || !plot.tileType) {
      if (!plot.plantedSeedId) {
        setIsPlantModalOpen(true);
      } else {
        // Already planted and growing -> open inspect / water
        setIsTileEditModalOpen(true);
      }
    } else {
      // Grass or stone tile -> open customize modal
      setIsTileEditModalOpen(true);
    }
  };

  // Plant a seed
  const handlePlantSeed = (seed: SeedItem) => {
    if (selectedTileId === null) return;
    if ((user.inventory[seed.id] || 0) <= 0) {
      showToast(`Hết hạt giống ${seed.name}! Hãy vào Cửa Hàng mua thêm nhé.`);
      return;
    }

    soundFx.playPlant();
    user.inventory[seed.id] -= 1;

    const updated = plots.map(p => {
      if (p.id === selectedTileId) {
        return {
          ...p,
          tileType: 'soil' as GardenTileType,
          plantedSeedId: seed.id,
          plantedAt: Date.now(),
          growthMinutes: seed.growthMinutes,
          isWatered: true, // Automatically watered when planted
        };
      }
      return p;
    });

    onUpdatePlots(updated);
    setIsPlantModalOpen(false);
    setSelectedTileId(null);
    showToast(`🌱 Đã gieo ${seed.name}! Cây sẽ lớn trong ${seed.growthMinutes} phút.`);
  };

  // Water all soil crops
  const handleWaterAll = () => {
    soundFx.playPop();
    const updated = plots.map(p => {
      if (p.tileType === 'soil' && p.plantedSeedId) {
        return { ...p, isWatered: true };
      }
      return p;
    });
    onUpdatePlots(updated);
    showToast('💧 Đã tưới nước mát lành cho toàn bộ cây trồng trong vườn!');
  };

  // Speed up all crops to ripe (test & play feature)
  const handleSpeedUpAll = () => {
    soundFx.playPop();
    const updated = plots.map(p => {
      if (p.tileType === 'soil' && p.plantedSeedId) {
        return {
          ...p,
          plantedAt: Date.now() - (p.growthMinutes + 1) * 60 * 1000,
          isWatered: true,
        };
      }
      return p;
    });
    onUpdatePlots(updated);
    showToast('⚡ Thần dược tăng trưởng: Toàn bộ nông sản đã chín vàng sẵn sàng thu hoạch!');
  };

  // Reset to default layout from screenshot
  const handleResetToDefault = () => {
    soundFx.playPop();
    onUpdatePlots(createDefaultGardenPlots());
    showToast('🔄 Đã khôi phục bố cục vườn mẫu chuẩn theo giao diện!');
  };

  // Change tile type (Soil, Grass, Stone) or Decoration
  const handleChangeTileType = (newType: GardenTileType) => {
    if (selectedTileId === null) return;
    soundFx.playPop();
    const updated = plots.map(p => {
      if (p.id === selectedTileId) {
        return {
          ...p,
          tileType: newType,
          plantedSeedId: undefined,
          plantedAt: undefined,
          decorationId: undefined,
          decorationName: undefined,
          decorationIcon: undefined,
        };
      }
      return p;
    });
    onUpdatePlots(updated);
    setIsTileEditModalOpen(false);
    setSelectedTileId(null);
  };

  // Set decoration on tile
  const handleSetDecoration = (icon: string, name: string) => {
    if (selectedTileId === null) return;
    soundFx.playPop();
    const updated = plots.map(p => {
      if (p.id === selectedTileId) {
        return {
          ...p,
          decorationIcon: icon,
          decorationName: name,
        };
      }
      return p;
    });
    onUpdatePlots(updated);
    setIsTileEditModalOpen(false);
    setSelectedTileId(null);
  };

  // Remove decoration
  const handleRemoveDecoration = () => {
    if (selectedTileId === null) return;
    soundFx.playPop();
    const updated = plots.map(p => {
      if (p.id === selectedTileId) {
        return {
          ...p,
          decorationIcon: undefined,
          decorationName: undefined,
        };
      }
      return p;
    });
    onUpdatePlots(updated);
    setIsTileEditModalOpen(false);
    setSelectedTileId(null);
  };

  const selectedPlot = plots.find(p => p.id === selectedTileId);

  return (
    <div className="space-y-4 max-w-6xl mx-auto">
      {/* Top Action & Status Ribbon */}
      <div className="bg-white px-4 sm:px-6 py-3.5 rounded-3xl border-2 border-emerald-300 shadow-sm flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-2.5">
          <span className="text-2xl">🏡</span>
          <div>
            <h3 className="font-black text-emerald-950 text-base sm:text-lg leading-tight">
              Nông Trại Tri Thức 6x5 • {user.name}
            </h3>
            <p className="text-xs font-semibold text-emerald-700">
              Trồng cây, tưới nước, thu hoạch Coin &amp; XP để học tập hăng say!
            </p>
          </div>
        </div>

        <div className="flex items-center flex-wrap gap-2">
          <button
            onClick={handleWaterAll}
            className="px-3.5 py-2 rounded-2xl bg-cyan-100 hover:bg-cyan-200 text-cyan-900 font-extrabold text-xs sm:text-sm border border-cyan-300 flex items-center gap-1.5 transition-transform active:scale-95 shadow-sm cursor-pointer"
            title="Tưới nước cho tất cả cây đang trồng"
          >
            <Droplets className="w-4 h-4 text-cyan-600 fill-cyan-400" />
            <span>Tưới tất cả</span>
          </button>

          <button
            onClick={handleSpeedUpAll}
            className="px-3.5 py-2 rounded-2xl bg-amber-100 hover:bg-amber-200 text-amber-950 font-extrabold text-xs sm:text-sm border border-amber-300 flex items-center gap-1.5 transition-transform active:scale-95 shadow-sm cursor-pointer"
            title="Thúc chín tất cả cây để thu hoạch ngay"
          >
            <Sparkles className="w-4 h-4 text-amber-600" />
            <span>Thúc chín nhanh</span>
          </button>

          <button
            onClick={handleResetToDefault}
            className="px-3 py-2 rounded-2xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs border border-slate-300 flex items-center gap-1 transition-transform active:scale-95 cursor-pointer"
            title="Khôi phục bố cục vườn giống như hình mẫu"
          >
            <RotateCcw className="w-3.5 h-3.5 text-slate-600" />
            <span>Mẫu chuẩn</span>
          </button>

          <button
            onClick={onOpenShop}
            className="px-4 py-2 rounded-2xl bg-yellow-400 hover:bg-yellow-500 text-yellow-950 font-black text-xs sm:text-sm border border-yellow-500 shadow-sm flex items-center gap-1.5 transition-transform active:scale-95 cursor-pointer"
          >
            <Store className="w-4 h-4" />
            <span>Cửa hàng</span>
          </button>
        </div>
      </div>

      {/* Floating Toast notification */}
      {toastMessage && (
        <div className="fixed top-20 left-1/2 -translate-x-1/2 z-50 bg-emerald-950/95 text-white px-5 py-2.5 rounded-full shadow-2xl font-black text-sm border-2 border-emerald-400 animate-bounce flex items-center gap-2">
          <span>{toastMessage}</span>
        </div>
      )}

      {/* =====================================================
          THE EXACT GARDEN CANVAS (MATCHING USER SCREENSHOT)
          ===================================================== */}
      <div className="relative overflow-hidden rounded-[32px] sm:rounded-[40px] bg-[#009b55] border-4 border-[#008346] shadow-2xl p-4 sm:p-7 md:p-9 select-none">
        {/* Four Corner Icons exactly as in screenshot */}
        {/* Top-Left: Sprout / Leaf 🌿 */}
        <div className="absolute top-3 left-4 sm:top-4 sm:left-5 text-emerald-200/60 text-xl sm:text-2xl pointer-events-none">
          🌿
        </div>
        {/* Top-Right: Sunflower 🌻 */}
        <div className="absolute top-3 right-4 sm:top-4 sm:right-5 text-xl sm:text-2xl pointer-events-none drop-shadow-sm">
          🌻
        </div>
        {/* Bottom-Left: Tulip 🌷 */}
        <div className="absolute bottom-3 left-4 sm:bottom-4 sm:left-5 text-xl sm:text-2xl pointer-events-none drop-shadow-sm">
          🌷
        </div>
        {/* Bottom-Right: Four-leaf Clover 🍀 */}
        <div className="absolute bottom-3 right-4 sm:bottom-4 sm:right-5 text-xl sm:text-2xl pointer-events-none drop-shadow-sm">
          🍀
        </div>

        {/* 6x5 Grid of 30 Tiles */}
        <div className="grid grid-cols-6 gap-2 sm:gap-3 md:gap-3.5 max-w-4xl mx-auto my-2 sm:my-3">
          {plots.map((plot) => {
            const tileType = plot.tileType || 'soil';
            const seed = plot.plantedSeedId ? SEEDS.find(s => s.id === plot.plantedSeedId) : null;
            
            let isReady = false;
            let remainingSec = 0;
            let progressPercent = 0;

            if (plot.plantedAt && seed) {
              const elapsedMs = currentTime - plot.plantedAt;
              const totalMs = plot.growthMinutes * 60 * 1000;
              remainingSec = Math.max(0, Math.ceil((totalMs - elapsedMs) / 1000));
              isReady = remainingSec === 0;
              progressPercent = Math.min(100, Math.round((elapsedMs / totalMs) * 100));
            }

            // Determine tile styling
            let tileBg = 'bg-[#48451f]'; // Default dark soil
            let tileBorder = 'border border-[#3d3a1a]';
            let tileText = 'Đất';
            let tileTextColor = 'text-[#7d794c]';

            if (tileType === 'grass') {
              tileBg = 'bg-[#00a86b]'; // Vibrant emerald lawn
              tileBorder = 'border border-[#00925c]';
              tileText = 'Cỏ';
              tileTextColor = 'text-[#2fdc92]';
            } else if (tileType === 'stone') {
              tileBg = 'bg-[#8fa1b8]'; // Slate grey
              tileBorder = 'border border-[#7e90a6]';
              tileText = 'Đá';
              tileTextColor = 'text-[#e2e8f0]';
            } else if (tileType === 'soil') {
              tileBg = 'bg-[#48451f]';
              tileBorder = 'border border-[#3d3a1a]';
              tileText = 'Đất';
              tileTextColor = 'text-[#7d794c]';
              // If soil is watered
              if (plot.isWatered) {
                tileBorder = 'border-2 border-cyan-400 ring-1 ring-cyan-300 shadow-[0_0_10px_rgba(34,211,238,0.35)]';
              }
            }

            return (
              <div
                key={plot.id}
                onClick={() => handleTileClick(plot)}
                className={`group relative aspect-square rounded-2xl sm:rounded-[22px] md:rounded-[26px] ${tileBg} ${tileBorder} p-1.5 sm:p-2.5 flex flex-col items-center justify-center cursor-pointer transition-all duration-150 hover:brightness-110 active:scale-95 shadow-sm overflow-hidden`}
              >
                {/* 1. HAS RIPE CROP (Like Blueberry 🫐 on Tile 0 in screenshot) */}
                {seed && isReady && (
                  <div className="w-full h-full flex flex-col items-center justify-between py-1">
                    {/* Crop Icon */}
                    <div className="text-3xl sm:text-4xl md:text-5xl mt-auto transform group-hover:scale-110 transition-transform animate-bounce">
                      {seed.icon}
                    </div>

                    {/* Golden Pill "Thu hoạch!" Button exactly as in screenshot */}
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleHarvest(plot);
                      }}
                      className="mt-auto px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-full bg-[#f59e0b] hover:bg-[#d97706] text-slate-950 font-black text-[10px] sm:text-xs shadow-md border border-[#b45309] transition-transform active:scale-90 whitespace-nowrap cursor-pointer"
                    >
                      Thu hoạch!
                    </button>
                  </div>
                )}

                {/* 2. HAS GROWING CROP */}
                {seed && !isReady && (
                  <div className="w-full h-full flex flex-col items-center justify-center text-center">
                    <div className="text-2xl sm:text-3xl md:text-4xl transition-transform group-hover:scale-110">
                      {progressPercent > 50 ? '🌿' : '🌱'}
                    </div>
                    <span className="text-[9px] sm:text-[11px] font-extrabold text-amber-200 mt-0.5 truncate max-w-full px-1">
                      {Math.floor(remainingSec / 60)}:{remainingSec % 60 < 10 ? `0${remainingSec % 60}` : remainingSec % 60}
                    </span>
                    {/* Mini progress bar */}
                    <div className="w-3/4 h-1 bg-black/30 rounded-full mt-1 overflow-hidden">
                      <div
                        className="h-full bg-emerald-400 rounded-full"
                        style={{ width: `${progressPercent}%` }}
                      />
                    </div>
                  </div>
                )}

                {/* 3. HAS DECORATION (Like 🏮 Đèn, 🌊 Hồ, 🪑 Ghế in screenshot) */}
                {!seed && plot.decorationIcon && (
                  <div className="w-full h-full flex flex-col items-center justify-center text-center">
                    <div className="text-2xl sm:text-3xl md:text-4xl transform group-hover:scale-110 transition-transform drop-shadow-md">
                      {plot.decorationIcon}
                    </div>
                    <span className="text-[10px] sm:text-xs font-black text-white/90 drop-shadow-sm mt-0.5">
                      {plot.decorationName || 'Trang trí'}
                    </span>
                  </div>
                )}

                {/* 4. EMPTY TILE (Shows text "Đất", "Cỏ", "Đá" centered) */}
                {!seed && !plot.decorationIcon && (
                  <div className="flex items-center justify-center w-full h-full">
                    <span className={`font-black text-xs sm:text-sm md:text-base ${tileTextColor}`}>
                      {tileText}
                    </span>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* =====================================================
            BOTTOM LEGEND BAR (EXACTLY MATCHING USER SCREENSHOT)
            ===================================================== */}
        <div className="mt-4 sm:mt-6 pt-3 border-t border-emerald-400/30 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs sm:text-sm font-black">
          {/* 1. Đất đã tưới nước */}
          <div className="flex items-center gap-2 text-cyan-200">
            <span className="w-3.5 h-3.5 rounded-md bg-[#48451f] border-2 border-cyan-400 shadow-[0_0_6px_rgba(34,211,238,0.8)] inline-block" />
            <span>Đất đã tưới nước</span>
          </div>

          {/* 2. Đất sẵn sàng gieo */}
          <div className="flex items-center gap-2 text-amber-200">
            <span className="w-3.5 h-3.5 rounded-md bg-[#48451f] border border-[#3d3a1a] inline-block" />
            <span>Đất sẵn sàng gieo</span>
          </div>

          {/* 3. Thảm cỏ xanh */}
          <div className="flex items-center gap-2 text-emerald-200">
            <span className="w-3.5 h-3.5 rounded-md bg-[#00a86b] border border-[#00925c] inline-block" />
            <span>Thảm cỏ xanh</span>
          </div>

          {/* 4. Cây chín vàng bấm vào là nhận Coin & XP! */}
          <div className="flex items-center gap-1.5 text-yellow-300">
            <span>✨</span>
            <span className="font-extrabold text-yellow-300 drop-shadow-sm">
              Cây chín vàng bấm vào là nhận Coin &amp; XP!
            </span>
          </div>
        </div>
      </div>

      {/* =====================================================
          MODAL 1: PLANT SEED MODAL
          ===================================================== */}
      {isPlantModalOpen && selectedPlot && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl border-3 border-emerald-400 shadow-2xl max-w-lg w-full p-6 space-y-4 animate-in fade-in zoom-in-95 duration-150">
            <div className="flex items-center justify-between border-b border-emerald-100 pb-3">
              <div className="flex items-center gap-2">
                <span className="text-2xl">🌱</span>
                <h3 className="font-black text-xl text-emerald-950">
                  Gieo hạt vào ô đất #{selectedPlot.id + 1}
                </h3>
              </div>
              <button
                onClick={() => setIsPlantModalOpen(false)}
                className="w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center text-slate-700 font-bold"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <p className="text-xs sm:text-sm font-semibold text-slate-600">
              Chọn hạt giống trong túi đồ của bạn để bắt đầu vụ mùa mới. Cây sẽ phát triển trong 20 phút.
            </p>

            {/* Seed Choices */}
            <div className="grid grid-cols-2 gap-3 max-h-[320px] overflow-y-auto pr-1">
              {SEEDS.map((seed) => {
                const count = user.inventory[seed.id] || 0;
                const canPlant = count > 0;

                return (
                  <div
                    key={seed.id}
                    onClick={() => canPlant && handlePlantSeed(seed)}
                    className={`p-3 rounded-2xl border-2 transition-all flex flex-col justify-between ${
                      canPlant
                        ? 'bg-emerald-50/70 border-emerald-300 hover:border-emerald-500 hover:bg-emerald-100/80 cursor-pointer'
                        : 'bg-slate-50 border-slate-200 opacity-60 cursor-not-allowed'
                    }`}
                  >
                    <div className="flex items-center gap-2.5">
                      <span className="text-3xl">{seed.icon}</span>
                      <div>
                        <h4 className="font-extrabold text-sm text-slate-900 leading-tight">
                          {seed.name}
                        </h4>
                        <span className={`text-xs font-bold ${canPlant ? 'text-emerald-700' : 'text-slate-400'}`}>
                          Có sẵn: {count} hạt
                        </span>
                      </div>
                    </div>

                    <div className="mt-2 pt-2 border-t border-emerald-100/60 flex items-center justify-between text-[11px] font-bold text-slate-600">
                      <span>Thu: +{seed.harvestTotal} Xu</span>
                      <span className="text-emerald-700 font-extrabold">20 phút</span>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="pt-2 flex items-center justify-between gap-3">
              <button
                onClick={() => {
                  setIsPlantModalOpen(false);
                  onOpenShop();
                }}
                className="px-4 py-2.5 rounded-2xl bg-yellow-400 hover:bg-yellow-500 text-yellow-950 font-black text-xs sm:text-sm border border-yellow-500 flex items-center gap-1.5 shadow-sm"
              >
                <Store className="w-4 h-4" />
                <span>Mua thêm hạt giống</span>
              </button>

              <button
                onClick={() => setIsPlantModalOpen(false)}
                className="px-4 py-2.5 rounded-2xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs sm:text-sm"
              >
                Đóng
              </button>
            </div>
          </div>
        </div>
      )}

      {/* =====================================================
          MODAL 2: TILE EDIT & DECORATION MODAL
          ===================================================== */}
      {isTileEditModalOpen && selectedPlot && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl border-3 border-emerald-400 shadow-2xl max-w-md w-full p-6 space-y-4 animate-in fade-in zoom-in-95 duration-150">
            <div className="flex items-center justify-between border-b border-emerald-100 pb-3">
              <div className="flex items-center gap-2">
                <span className="text-2xl">🎨</span>
                <h3 className="font-black text-lg text-emerald-950">
                  Tùy Chỉnh Ô #{selectedPlot.id + 1}
                </h3>
              </div>
              <button
                onClick={() => setIsTileEditModalOpen(false)}
                className="w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center text-slate-700 font-bold"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* If has crop growing */}
            {selectedPlot.plantedSeedId && (
              <div className="p-3.5 rounded-2xl bg-amber-50 border-2 border-amber-200 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="font-extrabold text-sm text-amber-950">
                    Đang trồng: {SEEDS.find(s => s.id === selectedPlot.plantedSeedId)?.name}
                  </span>
                  <span className="text-xs font-bold text-amber-800">
                    {selectedPlot.isWatered ? '💧 Đã tưới nước' : 'Chưa tưới'}
                  </span>
                </div>
                <div className="flex gap-2 pt-1">
                  <button
                    onClick={() => {
                      const updated = plots.map(p => p.id === selectedPlot.id ? { ...p, isWatered: true } : p);
                      onUpdatePlots(updated);
                      soundFx.playPop();
                      showToast('💧 Đã tưới nước cho ô đất này!');
                      setIsTileEditModalOpen(false);
                    }}
                    className="flex-1 py-2 rounded-xl bg-cyan-600 hover:bg-cyan-700 text-white font-extrabold text-xs"
                  >
                    Tưới nước ngay 💧
                  </button>
                  <button
                    onClick={() => {
                      const updated = plots.map(p => p.id === selectedPlot.id ? { ...p, plantedAt: Date.now() - 25 * 60 * 1000, isWatered: true } : p);
                      onUpdatePlots(updated);
                      soundFx.playPop();
                      showToast('⚡ Đã thúc chín tức thì!');
                      setIsTileEditModalOpen(false);
                    }}
                    className="flex-1 py-2 rounded-xl bg-amber-500 hover:bg-amber-600 text-white font-extrabold text-xs"
                  >
                    Thúc chín ngay ⚡
                  </button>
                </div>
              </div>
            )}

            {/* Change Tile Type Options */}
            <div className="space-y-2">
              <label className="text-xs font-black text-slate-700 uppercase tracking-wide">
                Đổi loại nền của ô:
              </label>
              <div className="grid grid-cols-3 gap-2">
                <button
                  onClick={() => handleChangeTileType('soil')}
                  className={`py-2.5 px-2 rounded-xl border-2 font-black text-xs flex flex-col items-center gap-1 ${
                    selectedPlot.tileType === 'soil'
                      ? 'bg-[#48451f] text-amber-200 border-amber-400'
                      : 'bg-slate-100 text-slate-700 border-slate-300'
                  }`}
                >
                  <span className="w-4 h-4 rounded bg-[#48451f] border border-amber-400 inline-block" />
                  <span>Đất</span>
                </button>

                <button
                  onClick={() => handleChangeTileType('grass')}
                  className={`py-2.5 px-2 rounded-xl border-2 font-black text-xs flex flex-col items-center gap-1 ${
                    selectedPlot.tileType === 'grass'
                      ? 'bg-[#00a86b] text-white border-emerald-400'
                      : 'bg-slate-100 text-slate-700 border-slate-300'
                  }`}
                >
                  <span className="w-4 h-4 rounded bg-[#00a86b] border border-white inline-block" />
                  <span>Cỏ</span>
                </button>

                <button
                  onClick={() => handleChangeTileType('stone')}
                  className={`py-2.5 px-2 rounded-xl border-2 font-black text-xs flex flex-col items-center gap-1 ${
                    selectedPlot.tileType === 'stone'
                      ? 'bg-[#8fa1b8] text-white border-slate-400'
                      : 'bg-slate-100 text-slate-700 border-slate-300'
                  }`}
                >
                  <span className="w-4 h-4 rounded bg-[#8fa1b8] border border-white inline-block" />
                  <span>Đá</span>
                </button>
              </div>
            </div>

            {/* Quick Placement of Iconic Decorations */}
            <div className="space-y-2">
              <label className="text-xs font-black text-slate-700 uppercase tracking-wide">
                Đặt vật trang trí lên ô này:
              </label>
              <div className="grid grid-cols-3 gap-2">
                <button
                  onClick={() => handleSetDecoration('🏮', 'Đèn')}
                  className="p-2.5 rounded-xl bg-emerald-50 hover:bg-emerald-100 border border-emerald-300 font-extrabold text-xs flex flex-col items-center gap-1"
                >
                  <span className="text-2xl">🏮</span>
                  <span>Đèn</span>
                </button>

                <button
                  onClick={() => handleSetDecoration('🌊', 'Hồ')}
                  className="p-2.5 rounded-xl bg-emerald-50 hover:bg-emerald-100 border border-emerald-300 font-extrabold text-xs flex flex-col items-center gap-1"
                >
                  <span className="text-2xl">🌊</span>
                  <span>Hồ</span>
                </button>

                <button
                  onClick={() => handleSetDecoration('🪑', 'Ghế')}
                  className="p-2.5 rounded-xl bg-emerald-50 hover:bg-emerald-100 border border-emerald-300 font-extrabold text-xs flex flex-col items-center gap-1"
                >
                  <span className="text-2xl">🪑</span>
                  <span>Ghế</span>
                </button>

                <button
                  onClick={() => handleSetDecoration('🌸', 'Hoa')}
                  className="p-2.5 rounded-xl bg-emerald-50 hover:bg-emerald-100 border border-emerald-300 font-extrabold text-xs flex flex-col items-center gap-1"
                >
                  <span className="text-2xl">🌸</span>
                  <span>Hoa</span>
                </button>

                <button
                  onClick={() => handleSetDecoration('🪵', 'Rào')}
                  className="p-2.5 rounded-xl bg-emerald-50 hover:bg-emerald-100 border border-emerald-300 font-extrabold text-xs flex flex-col items-center gap-1"
                >
                  <span className="text-2xl">🪵</span>
                  <span>Rào</span>
                </button>

                <button
                  onClick={() => handleSetDecoration('🌻', 'Hoa')}
                  className="p-2.5 rounded-xl bg-emerald-50 hover:bg-emerald-100 border border-emerald-300 font-extrabold text-xs flex flex-col items-center gap-1"
                >
                  <span className="text-2xl">🌻</span>
                  <span>Hướng dương</span>
                </button>
              </div>
            </div>

            {selectedPlot.decorationIcon && (
              <button
                onClick={handleRemoveDecoration}
                className="w-full py-2.5 rounded-xl bg-red-100 hover:bg-red-200 text-red-800 font-extrabold text-xs border border-red-300 flex items-center justify-center gap-1.5"
              >
                <Trash2 className="w-3.5 h-3.5 text-red-600" />
                <span>Gỡ vật trang trí khỏi ô</span>
              </button>
            )}

            <button
              onClick={() => setIsTileEditModalOpen(false)}
              className="w-full py-2.5 rounded-2xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs sm:text-sm"
            >
              Hoàn tất
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
