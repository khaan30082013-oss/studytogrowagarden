import React, { useState } from 'react';
import { UserProfile, SeedItem, DecorationItem } from '../types';
import { SEEDS, DECORATIONS } from '../data/gardenItems';
import { soundFx } from '../utils/audio';
import { Store, ShoppingCart, Sparkles, Check, AlertTriangle, ArrowRight } from 'lucide-react';

interface ShopViewProps {
  user: UserProfile;
  onBuyItem: (itemId: string, cost: number, count?: number) => void;
  onGoToGarden: () => void;
}

export const ShopView: React.FC<ShopViewProps> = ({
  user,
  onBuyItem,
  onGoToGarden,
}) => {
  const [activeCategory, setActiveCategory] = useState<'seeds' | 'decor'>('seeds');
  const [purchaseSuccessMessage, setPurchaseSuccessMessage] = useState<string | null>(null);

  const handleBuy = (itemId: string, price: number, itemName: string) => {
    if (user.coins < price) {
      soundFx.playWrong();
      alert(`Bạn không đủ Xu để mua ${itemName}! Hãy hoàn thành thêm các câu hỏi Toán 8 để nhận Xu nhé.`);
      return;
    }

    soundFx.playCoin();
    onBuyItem(itemId, price, 1);
    setPurchaseSuccessMessage(`Đã mua thành công 1 ${itemName}!`);
    setTimeout(() => {
      setPurchaseSuccessMessage(null);
    }, 2500);
  };

  return (
    <div className="space-y-6">
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-amber-500 via-yellow-500 to-amber-600 text-amber-950 p-6 sm:p-8 rounded-3xl shadow-lg border-2 border-yellow-400 flex flex-wrap items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider mb-1 text-yellow-900">
            <span>🛒 CỬA HÀNG NÔNG TRẠI TRI THỨC</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-amber-950 flex items-center gap-2">
            <span>Tiệm Hạt Giống &amp; Trang Trí Khu Vườn</span>
          </h2>
          <p className="text-sm sm:text-base font-bold text-amber-900 mt-1 max-w-xl">
            Dùng Xu bạn kiếm được từ việc giải toán để mua các loại hạt giống bội thu và vật phẩm trang trí khuôn viên xanh tươi!
          </p>
        </div>

        {/* Current Balance */}
        <div className="bg-white/95 backdrop-blur-md px-5 py-3 rounded-2xl border-2 border-amber-300 shadow-md flex items-center gap-3">
          <span className="text-3xl">🪙</span>
          <div>
            <span className="text-xs font-bold text-slate-500 block uppercase">Số dư của bạn</span>
            <span className="text-2xl font-black text-amber-600 tabular-nums">
              {user.coins.toLocaleString('vi-VN')} <span className="text-sm font-bold">xu</span>
            </span>
          </div>
        </div>
      </div>

      {/* Success Notification Alert */}
      {purchaseSuccessMessage && (
        <div className="p-4 rounded-2xl bg-emerald-500 text-white font-extrabold text-base shadow-md flex items-center justify-between animate-in fade-in duration-200">
          <div className="flex items-center gap-2">
            <Check className="w-5 h-5" />
            <span>{purchaseSuccessMessage}</span>
          </div>
          <button
            onClick={onGoToGarden}
            className="px-3 py-1 bg-white text-emerald-800 rounded-xl text-xs font-black hover:bg-emerald-50"
          >
            Vào vườn trồng ngay →
          </button>
        </div>
      )}

      {/* Category Tabs: Seeds vs Decor */}
      <div className="flex rounded-2xl bg-white p-1.5 border-2 border-emerald-200 shadow-sm max-w-md mx-auto">
        <button
          onClick={() => { soundFx.playPop(); setActiveCategory('seeds'); }}
          className={`flex-1 py-3 rounded-xl font-extrabold text-base transition-all flex items-center justify-center gap-2 ${
            activeCategory === 'seeds'
              ? 'bg-emerald-700 text-white shadow-sm font-black'
              : 'text-emerald-950 hover:bg-emerald-50'
          }`}
        >
          <span>🌱 Hạt giống củ quả ({SEEDS.length})</span>
        </button>

        <button
          onClick={() => { soundFx.playPop(); setActiveCategory('decor'); }}
          className={`flex-1 py-3 rounded-xl font-extrabold text-base transition-all flex items-center justify-center gap-2 ${
            activeCategory === 'decor'
              ? 'bg-emerald-700 text-white shadow-sm font-black'
              : 'text-emerald-950 hover:bg-emerald-50'
          }`}
        >
          <span>🌸 Đồ trang trí ({DECORATIONS.length})</span>
        </button>
      </div>

      {/* Seeds Product Grid */}
      {activeCategory === 'seeds' && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {SEEDS.map((seed) => {
            const inInventory = user.inventory[seed.id] || 0;
            const canAfford = user.coins >= seed.buyPrice;

            return (
              <div
                key={seed.id}
                className="bg-white rounded-3xl border-2 border-emerald-200 p-5 shadow-sm hover:border-emerald-400 hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div className="space-y-2 text-center">
                  <div className="w-16 h-16 mx-auto rounded-2xl bg-emerald-50 flex items-center justify-center text-4xl shadow-inner">
                    {seed.icon}
                  </div>
                  <h4 className="font-extrabold text-lg text-slate-900">
                    {seed.name}
                  </h4>
                  <p className="text-xs text-slate-600 min-h-[34px] leading-relaxed">
                    {seed.description}
                  </p>

                  <div className="p-2.5 rounded-xl bg-emerald-50/70 border border-emerald-200 text-xs font-semibold text-emerald-950 space-y-1 text-left">
                    <div className="flex justify-between">
                      <span>Giá mua:</span>
                      <span className="font-black text-amber-700">{seed.buyPrice} xu</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Thu hoạch:</span>
                      <span className="font-black text-emerald-700">+{seed.harvestTotal} xu</span>
                    </div>
                    <div className="flex justify-between text-emerald-800 font-bold">
                      <span>Lợi nhuận:</span>
                      <span>+{seed.harvestProfit} xu</span>
                    </div>
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-emerald-100 flex items-center justify-between gap-2">
                  <span className="text-xs font-bold text-slate-500">
                    Có: <strong className="text-emerald-800">{inInventory}</strong>
                  </span>

                  <button
                    onClick={() => handleBuy(seed.id, seed.buyPrice, seed.name)}
                    className={`px-4 py-2 rounded-xl font-extrabold text-sm shadow-sm flex items-center gap-1.5 transition-transform active:scale-95 cursor-pointer ${
                      canAfford
                        ? 'bg-yellow-400 hover:bg-yellow-500 text-yellow-950 border border-yellow-500'
                        : 'bg-slate-100 text-slate-400 border border-slate-200 cursor-not-allowed'
                    }`}
                  >
                    <span>Mua {seed.buyPrice} xu</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* Decorations Product Grid */}
      {activeCategory === 'decor' && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {DECORATIONS.map((dec) => {
            const inInventory = user.inventory[dec.id] || 0;
            const canAfford = user.coins >= dec.price;

            return (
              <div
                key={dec.id}
                className="bg-white rounded-3xl border-2 border-emerald-200 p-5 shadow-sm hover:border-emerald-400 hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div className="space-y-2 text-center">
                  <div className="w-16 h-16 mx-auto rounded-2xl bg-amber-50 flex items-center justify-center text-4xl shadow-inner">
                    {dec.icon}
                  </div>
                  <h4 className="font-extrabold text-lg text-slate-900">
                    {dec.name}
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed min-h-[34px]">
                    {dec.description}
                  </p>

                  <div className="p-2.5 rounded-xl bg-amber-50/80 border border-amber-200 text-xs font-semibold text-amber-950 flex justify-between items-center">
                    <span>Giá vật phẩm:</span>
                    <span className="font-black text-amber-800 text-sm">{dec.price} xu</span>
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-emerald-100 flex items-center justify-between gap-2">
                  <span className="text-xs font-bold text-slate-500">
                    Trong kho: <strong className="text-emerald-800">{inInventory}</strong>
                  </span>

                  <button
                    onClick={() => handleBuy(dec.id, dec.price, dec.name)}
                    className={`px-4 py-2 rounded-xl font-extrabold text-sm shadow-sm flex items-center gap-1.5 transition-transform active:scale-95 cursor-pointer ${
                      canAfford
                        ? 'bg-yellow-400 hover:bg-yellow-500 text-yellow-950 border border-yellow-500'
                        : 'bg-slate-100 text-slate-400 border border-slate-200 cursor-not-allowed'
                    }`}
                  >
                    <span>Mua {dec.price} xu</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};
