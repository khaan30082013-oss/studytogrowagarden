/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { UserProfile, Lesson, LessonLog, GardenPlot, PlacedDecoration } from './types';
import { Navbar } from './components/Navbar';
import { GardenOverview } from './components/GardenOverview';
import { CurriculumView } from './components/CurriculumView';
import { GardenView } from './components/GardenView';
import { ShopView } from './components/ShopView';
import { GuideView } from './components/GuideView';
import { SettingsView } from './components/SettingsView';
import { QuizModal } from './components/QuizModal';
import { OnboardingModal } from './components/OnboardingModal';
import { AuthModal } from './components/AuthModal';
import { soundFx } from './utils/audio';
import { Flame, Sparkles, AlertCircle, X } from 'lucide-react';

const LOCAL_STORAGE_KEY = 'hoc_trong_vuon_users_v2';
const ACTIVE_USER_KEY = 'hoc_trong_vuon_active_user_v2';

const INITIAL_PLOTS: GardenPlot[] = [
  { id: 1, growthMinutes: 20 },
  { id: 2, growthMinutes: 20 },
  { id: 3, growthMinutes: 20 },
  { id: 4, growthMinutes: 20 },
  { id: 5, growthMinutes: 20 },
  { id: 6, growthMinutes: 20 },
];

export default function App() {
  // Load saved accounts from localStorage
  const [allUsers, setAllUsers] = useState<Record<string, UserProfile>>(() => {
    try {
      const saved = localStorage.getItem(LOCAL_STORAGE_KEY);
      if (saved) return JSON.parse(saved);
    } catch {}
    return {};
  });

  // Active user name
  const [activeUserName, setActiveUserName] = useState<string | null>(() => {
    try {
      return localStorage.getItem(ACTIVE_USER_KEY);
    } catch {}
    return null;
  });

  // Active user profile
  const [user, setUser] = useState<UserProfile>(() => {
    if (activeUserName && allUsers[activeUserName]) {
      return allUsers[activeUserName];
    }
    // Default demo student
    return {
      name: 'Bạn Học Sinh',
      avatar: '🌱',
      coins: 100, // 100 xu Chào mừng
      xp: 0,
      level: 1,
      streak: 1,
      lastStudyDate: new Date().toISOString().split('T')[0],
      isStreakBroken: false,
      soundEnabled: true,
      fontSize: 'normal', // 18px minimum
      hasSeenOnboarding: false,
      inventory: {
        'seed-carrot': 3, // starter seed pack
        'seed-strawberry': 2,
        'dec-flower': 1,
      },
      plots: INITIAL_PLOTS,
      decorations: [],
      completedLessons: [],
    };
  });

  const [activeTab, setActiveTab] = useState<'start' | 'guide' | 'shop' | 'garden' | 'settings'>('garden');
  const [activeQuizLesson, setActiveQuizLesson] = useState<Lesson | null>(null);
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [showStreakModal, setShowStreakModal] = useState(false);

  // Sync sound settings with soundFx manager
  useEffect(() => {
    soundFx.enabled = user.soundEnabled;
  }, [user.soundEnabled]);

  // Persist active user data
  useEffect(() => {
    if (user.name) {
      setAllUsers(prev => {
        const updated = { ...prev, [user.name]: user };
        try {
          localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(updated));
          localStorage.setItem(ACTIVE_USER_KEY, user.name);
        } catch {}
        return updated;
      });
    }
  }, [user]);

  // Check Daily Streak upon mount
  useEffect(() => {
    const today = new Date().toISOString().split('T')[0];
    if (user.lastStudyDate && user.lastStudyDate !== today) {
      const lastDate = new Date(user.lastStudyDate);
      const currentDate = new Date(today);
      const diffDays = Math.floor((currentDate.getTime() - lastDate.getTime()) / (1000 * 3600 * 24));

      if (diffDays > 1) {
        // Skipped a day -> break streak
        setUser(prev => ({ ...prev, isStreakBroken: true }));
      }
    }
  }, []);

  // Handlers
  const handleLogin = (name: string, avatar: string) => {
    if (allUsers[name]) {
      // Existing user
      setUser(allUsers[name]);
      setActiveUserName(name);
    } else {
      // New user with 100 welcome coins
      const newUser: UserProfile = {
        name,
        avatar,
        coins: 100,
        xp: 0,
        level: 1,
        streak: 1,
        lastStudyDate: new Date().toISOString().split('T')[0],
        isStreakBroken: false,
        soundEnabled: true,
        fontSize: 'normal',
        hasSeenOnboarding: false,
        inventory: {
          'seed-carrot': 3,
          'seed-strawberry': 2,
        },
        plots: INITIAL_PLOTS,
        decorations: [],
        completedLessons: [],
      };
      setUser(newUser);
      setActiveUserName(name);
    }
    setShowAuthModal(false);
  };

  const handleUpdateName = (newName: string) => {
    setUser(prev => ({ ...prev, name: newName }));
  };

  const handleUpdateAvatar = (newAvatar: string) => {
    setUser(prev => ({ ...prev, avatar: newAvatar }));
  };

  const handleToggleSound = () => {
    setUser(prev => ({ ...prev, soundEnabled: !prev.soundEnabled }));
  };

  const handleFontSizeChange = (dir: 'inc' | 'dec') => {
    soundFx.playPop();
    setUser(prev => {
      let next: 'normal' | 'large' | 'xlarge' = prev.fontSize;
      if (dir === 'inc') {
        if (prev.fontSize === 'normal') next = 'large';
        else if (prev.fontSize === 'large') next = 'xlarge';
      } else {
        if (prev.fontSize === 'xlarge') next = 'large';
        else if (prev.fontSize === 'large') next = 'normal';
      }
      return { ...prev, fontSize: next };
    });
  };

  const handleSetFontSize = (size: 'normal' | 'large' | 'xlarge') => {
    soundFx.playPop();
    setUser(prev => ({ ...prev, fontSize: size }));
  };

  const handleBuyItem = (itemId: string, cost: number, count: number = 1) => {
    setUser(prev => ({
      ...prev,
      coins: prev.coins - cost,
      inventory: {
        ...prev.inventory,
        [itemId]: (prev.inventory[itemId] || 0) + count,
      },
    }));
  };

  const handleAddCoins = (amount: number) => {
    setUser(prev => ({
      ...prev,
      coins: prev.coins + amount,
      xp: prev.xp + 15,
      level: Math.floor((prev.xp + 15) / 100) + 1,
    }));
  };

  const handleUpdatePlots = (newPlots: GardenPlot[]) => {
    setUser(prev => ({ ...prev, plots: newPlots }));
  };

  const handleUpdateDecorations = (newDecs: PlacedDecoration[]) => {
    setUser(prev => ({ ...prev, decorations: newDecs }));
  };

  // Complete Quiz & Award coins, XP, Streak, and Log Lesson
  const handleQuizComplete = (score: number, coinsEarned: number, xpEarned: number) => {
    if (!activeQuizLesson) return;

    const today = new Date().toISOString().split('T')[0];
    const isNewDay = user.lastStudyDate !== today;

    const newLog: LessonLog = {
      id: `log-${Date.now()}`,
      lessonId: activeQuizLesson.id,
      lessonTitle: activeQuizLesson.title,
      chapterTitle: activeQuizLesson.chapterTitle,
      date: today,
      score,
      totalQuestions: activeQuizLesson.questions.length,
      coinsEarned,
      xpEarned,
      summary: activeQuizLesson.summary,
    };

    setUser(prev => {
      const nextXp = prev.xp + xpEarned;
      const nextLevel = Math.floor(nextXp / 100) + 1;
      const nextStreak = isNewDay && !prev.isStreakBroken ? prev.streak + 1 : prev.streak;

      return {
        ...prev,
        coins: prev.coins + coinsEarned,
        xp: nextXp,
        level: nextLevel,
        streak: nextStreak,
        lastStudyDate: today,
        completedLessons: [newLog, ...prev.completedLessons.filter(l => l.lessonId !== activeQuizLesson.id)],
      };
    });

    setActiveQuizLesson(null);
  };

  // Streak Recovery with 200 coins
  const handleRecoverStreak = () => {
    if (user.coins < 200) {
      soundFx.playWrong();
      alert('Bạn cần 200 Xu để khôi phục chuỗi ngày học! Hãy làm thêm bài tập để tích lũy xu nhé.');
      return;
    }
    soundFx.playHarvest();
    setUser(prev => ({
      ...prev,
      coins: prev.coins - 200,
      isStreakBroken: false,
      streak: Math.max(prev.streak, 1),
      lastStudyDate: new Date().toISOString().split('T')[0],
    }));
    setShowStreakModal(false);
    alert('🎉 Chúc mừng! Bạn đã khôi phục thành công chuỗi ngày học!');
  };

  // Simulate missed day for testing
  const handleSimulateMissedDay = () => {
    soundFx.playWrong();
    setUser(prev => ({
      ...prev,
      isStreakBroken: true,
      lastStudyDate: '2026-09-01',
    }));
  };

  // Font size base class calculation (Minimum 18px!)
  const fontSizeClass =
    user.fontSize === 'large'
      ? 'text-[20px] leading-relaxed'
      : user.fontSize === 'xlarge'
        ? 'text-[23px] leading-relaxed'
        : 'text-[18px] leading-relaxed';

  return (
    <div className={`min-h-screen bg-[#f3faf2] text-slate-800 ${fontSizeClass}`}>
      {/* Top Navigation */}
      <Navbar
        user={user}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        onToggleSound={handleToggleSound}
        onChangeFontSize={handleFontSizeChange}
        onOpenProfile={() => setActiveTab('settings')}
        onOpenStreakRecovery={() => setShowStreakModal(true)}
      />

      {/* Main Container */}
      <main className="max-w-7xl mx-auto px-3 sm:px-6 py-6 pb-24 space-y-6">
        {/* Streak broken alert banner if active */}
        {user.isStreakBroken && (
          <div className="bg-amber-100 border-2 border-amber-400 p-4 rounded-3xl shadow-sm flex flex-wrap items-center justify-between gap-3 text-amber-950">
            <div className="flex items-center gap-3">
              <span className="text-3xl">🔥</span>
              <div>
                <h4 className="font-black text-base">Bạn đã bỏ lỡ 1 ngày và chuỗi học tập bị ngắt!</h4>
                <p className="text-xs sm:text-sm font-semibold text-amber-900">
                  Đừng lo lắng, bạn có thể khôi phục lại chuỗi với giá 200 xu.
                </p>
              </div>
            </div>
            <button
              onClick={handleRecoverStreak}
              className="px-5 py-2.5 bg-amber-500 hover:bg-amber-600 text-white font-black text-sm rounded-2xl shadow-sm cursor-pointer transition-transform active:scale-95"
            >
              Khôi phục chuỗi (200 Xu)
            </button>
          </div>
        )}

        {/* Tab 1: Start / Curriculum View */}
        {activeTab === 'start' && (
          <CurriculumView
            user={user}
            onSelectLessonToQuiz={(lesson) => setActiveQuizLesson(lesson)}
          />
        )}

        {/* Tab 2: Guide View */}
        {activeTab === 'guide' && (
          <GuideView
            onStartLearning={() => setActiveTab('start')}
            onOpenGarden={() => setActiveTab('garden')}
          />
        )}

        {/* Tab 3: Shop View */}
        {activeTab === 'shop' && (
          <ShopView
            user={user}
            onBuyItem={handleBuyItem}
            onGoToGarden={() => setActiveTab('garden')}
          />
        )}

        {/* Tab 4: Garden View & Central Big Tree Overview */}
        {activeTab === 'garden' && (
          <div className="space-y-6">
            {/* Centerpiece visual garden with big tree & title */}
            <GardenOverview
              user={user}
              onNavigate={setActiveTab}
              onStartQuiz={() => setActiveTab('start')}
            />

            {/* Farm plots and planting beds */}
            <GardenView
              user={user}
              onUpdatePlots={handleUpdatePlots}
              onUpdateDecorations={handleUpdateDecorations}
              onAddCoins={handleAddCoins}
              onOpenShop={() => setActiveTab('shop')}
            />
          </div>
        )}

        {/* Tab 5: Settings View */}
        {activeTab === 'settings' && (
          <SettingsView
            user={user}
            onUpdateName={handleUpdateName}
            onUpdateAvatar={handleUpdateAvatar}
            onToggleSound={handleToggleSound}
            onSetFontSize={handleSetFontSize}
            onRecoverStreak={handleRecoverStreak}
            onSimulateMissedDay={handleSimulateMissedDay}
            onSwitchAccount={() => setShowAuthModal(true)}
          />
        )}
      </main>

      {/* Quiz Modal (10 questions + SVG illustrations + smart remedial question when wrong) */}
      {activeQuizLesson && (
        <QuizModal
          lesson={activeQuizLesson}
          onClose={() => setActiveQuizLesson(null)}
          onComplete={handleQuizComplete}
        />
      )}

      {/* Onboarding 3-step guide for first time visitors */}
      <OnboardingModal
        isOpen={!user.hasSeenOnboarding}
        onClose={() => setUser(prev => ({ ...prev, hasSeenOnboarding: true }))}
      />

      {/* Student Account Authentication Modal */}
      <AuthModal
        isOpen={showAuthModal}
        onLogin={handleLogin}
        savedAccounts={Object.values(allUsers).map(u => ({
          name: u.name,
          avatar: u.avatar,
          coins: u.coins,
        }))}
      />

      {/* Streak Recovery Quick Modal */}
      {showStreakModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-emerald-950/60 backdrop-blur-sm">
          <div className="bg-white rounded-3xl max-w-sm w-full p-6 shadow-2xl border-3 border-amber-400 space-y-4 text-center">
            <div className="w-16 h-16 mx-auto rounded-2xl bg-orange-100 flex items-center justify-center text-3xl">
              🔥
            </div>
            <h4 className="text-xl font-black text-slate-900">
              {user.isStreakBroken ? 'Khôi phục chuỗi học tập' : 'Chuỗi học tập của bạn'}
            </h4>
            <p className="text-sm font-semibold text-slate-600 leading-relaxed">
              {user.isStreakBroken
                ? 'Chuỗi hiện tại bị ngắt do bạn không học ngày hôm qua. Bạn có muốn dùng 200 Xu để khôi phục lại không?'
                : `Tuyệt vời! Bạn đang duy trì chuỗi ${user.streak} ngày học liên tiếp. Tiếp tục phát huy nhé!`}
            </p>

            {user.isStreakBroken ? (
              <div className="space-y-2 pt-2">
                <button
                  onClick={handleRecoverStreak}
                  className="w-full py-3 bg-amber-500 hover:bg-amber-600 text-white font-black rounded-2xl shadow-md transition-transform active:scale-95"
                >
                  Xác nhận khôi phục (200 Xu)
                </button>
                <button
                  onClick={() => setShowStreakModal(false)}
                  className="w-full py-2.5 bg-slate-100 text-slate-700 font-bold text-sm rounded-xl"
                >
                  Để sau
                </button>
              </div>
            ) : (
              <button
                onClick={() => setShowStreakModal(false)}
                className="w-full py-3 bg-emerald-700 text-white font-bold rounded-2xl"
              >
                Đóng
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
