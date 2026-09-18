import React, { useState, useEffect } from 'react';
import confetti from 'canvas-confetti';
import { UserProfile, GardenPlot, SeedItem, PlacedDecoration } from '../types';
import { SEEDS, DECORATIONS } from '../data/gardenItems';
import { soundFx } from '../utils/audio';
import { Sprout, Clock, Droplets, Sparkles, Store, Plus, Check, Trash2, ArrowRight } from 'lucide-react';

interface GardenViewProps {
  user: UserProfile;
  onUpdatePlots: (plots: GardenPlot[]) => void;
  onUpdateDecorations: (decorations: PlacedDecoration[]) => void;
  onAddCoins: (amount: number) => void;
  onOpenShop: () => void;
}

export const GardenView: React.FC<GardenViewProps> = ({
  user,
  onUpdatePlots,
  onUpdateDecorations,
  onAddCoins,
  onOpenShop,
}) => {
  const [selectedPlotId, setSelectedPlotId] = useState<number | null>(null);
  const [isPlantingModalOpen, setIsPlantingModalOpen] = useState(false);
  const [isDecorModalOpen, setIsDecorModalOpen] = useState(false);
  const [currentTime, setCurrentTime] = useState(Date.now());

  // Update timer every second for real-time countdown
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(Date.now());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // Filter seeds user has in inventory
  const availableSeeds = SEEDS.filter(s => (user.inventory[s.id] || 0) > 0);

  const handleOpenPlantModal = (plotId: number) => {
    soundFx.playPop();
    setSelectedPlotId(plotId);
    setIsPlantingModalOpen(true);
  };

  const handlePlantSeed = (seed: SeedItem) => {
    if (!selectedPlotId) return;
    if ((user.inventory[seed.id] || 0) <= 0) return;

    soundFx.playPlant();

    // Deduct 1 seed from inventory
    user.inventory[seed.id] -= 1;

    // Update plot
    const updatedPlots = user.plots.map(plot => {
      if (plot.id === selectedPlotId) {
        return {
          ...plot,
          plantedSeedId: seed.id,
          plantedAt: Date.now(),
          growthMinutes: seed.growthMinutes,
          isWatered: false,
        };
      }
      return plot;
    });

    onUpdatePlots(updatedPlots);
    setIsPlantingModalOpen(false);
    setSelectedPlotId(null);
  };

  const handleSpeedUp = (plotId: number) => {
    soundFx.playPop();
    // Set plantedAt to 21 minutes ago so it becomes immediately ready
    const updatedPlots = user.plots.map(p => {
      if (p.id === plotId && p.plantedSeedId) {
        return {
          ...p,
          plantedAt: Date.now() - (p.growthMinutes + 1) * 60 * 1000,
          isWatered: true,
        };
      }
      return p;
    });
    onUpdatePlots(updatedPlots);
  };

  const handleHarvest = (plot: GardenPlot) => {
    if (!plot.plantedSeedId) return;
    const seed = SEEDS.find(s => s.id === plot.plantedSeedId);
    if (!seed) return;

    soundFx.playHarvest();
    try {
      confetti({
        particleCount: 50,
        spread: 60,
        origin: { y: 0.7 }
      });
    } catch {}

    // Add harvest total reward to user
    onAddCoins(seed.harvestTotal);

    // Reset plot
    const updatedPlots = user.plots.map(p => {
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

    onUpdatePlots(updatedPlots);
  };

  const handlePlaceDecoration = (decId: string) => {
    if ((user.inventory[decId] || 0) <= 0) return;
    soundFx.playPop();
    user.inventory[decId] -= 1;

    const newPlaced: PlacedDecoration = {
      id: `placed-${Date.now()}`,
      decorationId: decId,
      x: user.decorations.length % 6,
      y: Math.floor(user.decorations.length / 6),
    };

    onUpdateDecorations([...user.decorations, newPlaced]);
    setIsDecorModalOpen(false);
  };

  const handleRemoveDecoration = (placedId: string, decId: string) => {
    soundFx.playPop();
    user.inventory[decId] = (user.inventory[decId] || 0) + 1;
    const updated = user.decorations.filter(d => d.id !== placedId);
    onUpdateDecorations(updated);
  };

  return (
    <div className="space-y-6">
      {/* Top Banner: Farm info & Actions */}
      <div className="bg-white p-5 rounded-3xl border-2 border-emerald-300 shadow-sm flex flex-wrap items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl sm:text-3xl font-black text-emerald-950 flex items-center gap-2">
            <span>🌿 Nông Trại Tri Thức Của {user.name}</span>
          </h2>
          <p className="text-sm font-semibold text-emerald-800 mt-1">
            Gieo hạt, chăm sóc 20 phút mỗi vụ để thu hoạch nông sản tươi tốt và tích lũy Xu!
          </p>
        </div>

        <div className="flex items-center gap-2.5">
          <button
            onClick={() => setIsDecorModalOpen(true)}
            className="px-4 py-2.5 rounded-2xl bg-emerald-100 hover:bg-emerald-200 text-emerald-900 font-extrabold text-sm border border-emerald-300 flex items-center gap-1.5 transition-transform active:scale-95 cursor-pointer"
          >
            <span>🎨 Trang trí vườn</span>
          </button>

          <button
            onClick={onOpenShop}
            className="px-4 py-2.5 rounded-2xl bg-yellow-400 hover:bg-yellow-500 text-yellow-950 font-black text-sm border border-yellow-500 shadow-sm flex items-center gap-1.5 transition-transform active:scale-95 cursor-pointer"
          >
            <Store className="w-4 h-4" />
            <span>Mua thêm hạt giống</span>
          </button>
        </div>
      </div>

      {/* Main Farm Grid (6 Planting Plots) */}
      <div className="bg-gradient-to-b from-amber-100/50 via-emerald-50/50 to-green-100/60 p-5 sm:p-7 rounded-3xl border-3 border-emerald-300 shadow-lg">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <span className="text-xl">🪴</span>
            <h3 className="font-extrabold text-lg sm:text-xl text-emerald-950">
              6 Luống Đất Trồng Cây Củ Quả
            </h3>
          </div>
          <span className="text-xs font-bold text-slate-700 bg-white px-3 py-1 rounded-full border border-emerald-200">
            Thời gian trưởng thành chuẩn: 20 phút / vụ
          </span>
        </div>

        {/* 6 Plots Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {user.plots.map((plot) => {
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

            const minutesLeft = Math.floor(remainingSec / 60);
            const secondsLeft = remainingSec % 60;

            return (
              <div
                key={plot.id}
                className="bg-white rounded-3xl border-3 border-emerald-300 p-4 shadow-sm hover:border-emerald-500 transition-all flex flex-col justify-between min-h-[220px] relative overflow-hidden"
              >
                {/* Plot Header */}
                <div className="flex items-center justify-between text-xs font-black text-emerald-800 border-b border-emerald-100 pb-2">
                  <span>Luống số #{plot.id}</span>
                  {seed ? (
                    <span className={`px-2.5 py-0.5 rounded-full font-bold ${
                      isReady ? 'bg-amber-100 text-amber-900 animate-bounce' : 'bg-emerald-100 text-emerald-900'
                    }`}>
                      {isReady ? '✨ Đã chín!' : 'Đang lớn'}
                    </span>
                  ) : (
                    <span className="text-slate-600 font-semibold">Đang trống</span>
                  )}
                </div>

                {/* Plot Center Plant Graphic */}
                <div className="my-auto py-3 text-center">
                  {seed ? (
                    <div className="space-y-2">
                      <div className="text-5xl sm:text-6xl transition-transform hover:scale-110">
                        {isReady ? seed.icon : progressPercent > 50 ? '🌿' : '🌱'}
                      </div>
                      <h4 className="font-black text-base text-slate-900">
                        {seed.name}
                      </h4>
                      
                      {/* Countdown Timer or Harvest Callout */}
                      {!isReady ? (
                        <div className="space-y-1.5 max-w-[200px] mx-auto">
                          <div className="flex items-center justify-center gap-1 text-xs font-bold text-slate-600">
                            <Clock className="w-3.5 h-3.5 text-emerald-600" />
                            <span>
                              Còn {minutesLeft}:{secondsLeft < 10 ? `0${secondsLeft}` : secondsLeft}
                            </span>
                          </div>
                          {/* Progress bar */}
                          <div className="w-full h-2 bg-emerald-100 rounded-full overflow-hidden">
                            <div
                              className="h-full bg-emerald-600 transition-all duration-500"
                              style={{ width: `${progressPercent}%` }}
                            />
                          </div>
                        </div>
                      ) : (
                        <div className="text-xs font-black text-amber-900 bg-amber-100 py-1 px-3 rounded-full inline-block border border-amber-300">
                          Thu hoạch nhận: +{seed.harvestTotal} Xu (+{seed.harvestProfit} xu lãi)
                        </div>
                      )}
                    </div>
                  ) : (
                    <div className="space-y-2 py-4">
                      <div className="w-14 h-14 mx-auto rounded-2xl bg-amber-50 border-2 border-dashed border-amber-300 flex items-center justify-center text-3xl text-amber-800">
                        🪴
                      </div>
                      <p className="text-xs font-bold text-slate-500">
                        Luống đất màu mỡ sẵn sàng gieo hạt
                      </p>
                    </div>
                  )}
                </div>

                {/* Plot Action Buttons */}
                <div className="pt-2 border-t border-emerald-100 flex items-center gap-2">
                  {seed ? (
                    isReady ? (
                      <button
                        onClick={() => handleHarvest(plot)}
                        className="w-full py-2.5 px-3 rounded-xl bg-gradient-to-r from-amber-500 to-yellow-500 hover:from-amber-600 hover:to-yellow-600 text-white font-black text-sm shadow-md flex items-center justify-center gap-1.5 transition-transform active:scale-95 cursor-pointer"
                      >
                        <Sparkles className="w-4 h-4 text-yellow-100" />
                        <span>Thu hoạch ({seed.harvestTotal} xu)</span>
                      </button>
                    ) : (
                      <button
                        onClick={() => handleSpeedUp(plot.id)}
                        className="w-full py-2 px-3 rounded-xl bg-emerald-100 hover:bg-emerald-200 text-emerald-950 font-bold text-xs border border-emerald-300 flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
                        title="Tưới nước thần tốc giúp cây chín ngay tức thì để bạn thử nghiệm thu hoạch"
                      >
                        <Droplets className="w-3.5 h-3.5 text-blue-500" />
                        <span>Tưới nước thần tốc (Chín ngay)</span>
                      </button>
                    )
                  ) : (
                    <button
                      onClick={() => handleOpenPlantModal(plot.id)}
                      className="w-full py-2.5 px-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold text-sm shadow-sm flex items-center justify-center gap-1.5 transition-transform active:scale-95 cursor-pointer"
                    >
                      <Plus className="w-4 h-4" />
                      <span>Chọn hạt gieo trồng</span>
                    </button>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Garden Decorations Section (Hoa, hàng rào, hồ nước, ghế, đèn) */}
      <div className="bg-white p-5 sm:p-7 rounded-3xl border-2 border-emerald-300 shadow-md space-y-4">
        <div className="flex items-center justify-between flex-wrap gap-2">
          <div className="flex items-center gap-2">
            <span className="text-xl">🌸</span>
            <h3 className="font-extrabold text-lg sm:text-xl text-emerald-950">
              Vật Phẩm Trang Trí Khu Vườn ({user.decorations.length})
            </h3>
          </div>
          <button
            onClick={() => setIsDecorModalOpen(true)}
            className="text-xs font-bold text-emerald-800 bg-emerald-50 px-3 py-1.5 rounded-xl border border-emerald-200 hover:bg-emerald-100"
          >
            + Đặt thêm đồ trang trí
          </button>
        </div>

        {user.decorations.length === 0 ? (
          <div className="text-center py-8 bg-emerald-50/50 rounded-2xl border border-dashed border-emerald-200 p-4">
            <div className="text-3xl mb-1">⛲</div>
            <p className="text-slate-800 font-bold text-sm">Chưa đặt đồ trang trí nào trong vườn.</p>
            <p className="text-xs text-slate-600 mt-1">
              Ghé Cửa hàng mua Khóm hoa (15 xu), Hàng rào (30 xu), Hồ nước sen (60 xu), Ghế (30 xu), Đèn (40 xu) để tô điểm cho khu vườn!
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-3">
            {user.decorations.map((placed) => {
              const item = DECORATIONS.find(d => d.id === placed.decorationId);
              if (!item) return null;

              return (
                <div
                  key={placed.id}
                  className="bg-emerald-50/80 p-3 rounded-2xl border-2 border-emerald-200 text-center relative group shadow-2xs hover:border-emerald-400"
                >
                  <button
                    onClick={() => handleRemoveDecoration(placed.id, item.id)}
                    className="absolute top-1.5 right-1.5 p-1 rounded-full bg-red-100 text-red-600 opacity-0 group-hover:opacity-100 transition-opacity hover:bg-red-200"
                    title="Cất vào kho"
                  >
                    <Trash2 className="w-3 h-3" />
                  </button>
                  <div className="text-4xl my-1">{item.icon}</div>
                  <div className="text-xs font-extrabold text-emerald-950 truncate">
                    {item.name}
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>

      {/* Planting Modal: Pick a seed from inventory */}
      {isPlantingModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-emerald-950/60 backdrop-blur-sm">
          <div className="bg-white rounded-3xl max-w-md w-full p-6 shadow-2xl border-3 border-emerald-400 space-y-4">
            <div className="flex items-center justify-between border-b border-emerald-100 pb-3">
              <h4 className="text-lg font-black text-emerald-950 flex items-center gap-2">
                <span>🌱 Chọn hạt giống gieo vào Luống #{selectedPlotId}</span>
              </h4>
              <button
                onClick={() => setIsPlantingModalOpen(false)}
                className="text-slate-400 hover:text-slate-600"
              >
                ✕
              </button>
            </div>

            {availableSeeds.length === 0 ? (
              <div className="text-center py-6 space-y-3">
                <div className="text-4xl">🧺</div>
                <p className="text-slate-700 font-bold text-sm">
                  Túi đồ của bạn hiện chưa có hạt giống nào!
                </p>
                <p className="text-xs text-slate-500">
                  Hãy dùng Xu để mua hạt giống cà rốt, dâu tây, cà chua... trong Cửa hàng.
                </p>
                <button
                  onClick={() => {
                    setIsPlantingModalOpen(false);
                    onOpenShop();
                  }}
                  className="px-5 py-2.5 rounded-xl bg-yellow-400 hover:bg-yellow-500 text-yellow-950 font-black text-sm shadow-sm"
                >
                  Đến Cửa hàng ngay 🛒
                </button>
              </div>
            ) : (
              <div className="space-y-2.5 max-h-[360px] overflow-y-auto pr-1">
                {availableSeeds.map((seed) => {
                  const count = user.inventory[seed.id] || 0;
                  return (
                    <div
                      key={seed.id}
                      onClick={() => handlePlantSeed(seed)}
                      className="p-3.5 rounded-2xl border-2 border-emerald-200 bg-emerald-50/50 hover:bg-emerald-100 hover:border-emerald-400 cursor-pointer flex items-center justify-between transition-all"
                    >
                      <div className="flex items-center gap-3">
                        <span className="text-3xl">{seed.icon}</span>
                        <div>
                          <h5 className="font-extrabold text-sm text-slate-900">{seed.name}</h5>
                          <p className="text-xs text-emerald-800 font-medium">
                            Thu hoạch: +{seed.harvestTotal} xu (+{seed.harvestProfit} xu lãi)
                          </p>
                        </div>
                      </div>
                      <div className="text-right">
                        <span className="px-2.5 py-1 rounded-full bg-emerald-200 text-emerald-950 font-black text-xs">
                          x{count} hạt
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      )}

      {/* Place Decoration Modal */}
      {isDecorModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-emerald-950/60 backdrop-blur-sm">
          <div className="bg-white rounded-3xl max-w-md w-full p-6 shadow-2xl border-3 border-emerald-400 space-y-4">
            <div className="flex items-center justify-between border-b border-emerald-100 pb-3">
              <h4 className="text-lg font-black text-emerald-950 flex items-center gap-2">
                <span>🎨 Đặt vật phẩm trang trí vào vườn</span>
              </h4>
              <button
                onClick={() => setIsDecorModalOpen(false)}
                className="text-slate-400 hover:text-slate-600"
              >
                ✕
              </button>
            </div>

            {/* List decorations in inventory */}
            {DECORATIONS.filter(d => (user.inventory[d.id] || 0) > 0).length === 0 ? (
              <div className="text-center py-6 space-y-3">
                <div className="text-4xl">🪵</div>
                <p className="text-slate-700 font-bold text-sm">
                  Bạn chưa sở hữu đồ trang trí nào trong túi đồ!
                </p>
                <p className="text-xs text-slate-500">
                  Ghé Cửa hàng sắm hoa ngũ sắc, hàng rào mộc, hồ nước, ghế đá, đèn vườn nhé.
                </p>
                <button
                  onClick={() => {
                    setIsDecorModalOpen(false);
                    onOpenShop();
                  }}
                  className="px-5 py-2.5 rounded-xl bg-yellow-400 hover:bg-yellow-500 text-yellow-950 font-black text-sm shadow-sm"
                >
                  Mua đồ trang trí trong Cửa hàng
                </button>
              </div>
            ) : (
              <div className="space-y-2.5 max-h-[360px] overflow-y-auto pr-1">
                {DECORATIONS.filter(d => (user.inventory[d.id] || 0) > 0).map((dec) => {
                  const count = user.inventory[dec.id] || 0;
                  return (
                    <div
                      key={dec.id}
                      onClick={() => handlePlaceDecoration(dec.id)}
                      className="p-3.5 rounded-2xl border-2 border-emerald-200 bg-emerald-50/50 hover:bg-emerald-100 hover:border-emerald-400 cursor-pointer flex items-center justify-between transition-all"
                    >
                      <div className="flex items-center gap-3">
                        <span className="text-3xl">{dec.icon}</span>
                        <div>
                          <h5 className="font-extrabold text-sm text-slate-900">{dec.name}</h5>
                          <p className="text-xs text-slate-600">{dec.description}</p>
                        </div>
                      </div>
                      <span className="px-2.5 py-1 rounded-full bg-emerald-200 text-emerald-950 font-black text-xs">
                        Có: {count}
                      </span>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
