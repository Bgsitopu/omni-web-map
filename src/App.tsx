import React from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import StatsGrid from './components/StatsGrid';
import MapComponent from './components/MapComponent';
import AISearch from './components/AISearch';
import RealTimeFeed from './components/RealTimeFeed';
import { motion } from 'motion/react';

export default function App() {
  return (
    <div className="flex min-h-screen bg-neutral-50">
      <Sidebar />
      
      <main className="flex-1 flex flex-col min-w-0">
        <Header />
        
        <div className="flex-1 p-8 space-y-8 overflow-y-auto">
          {/* Welcome Section */}
          <section>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <h2 className="text-3xl font-bold text-neutral-900 mb-2">Selamat Datang, Admin</h2>
              <p className="text-neutral-500">Berikut adalah ringkasan performa sistem Anda hari ini.</p>
            </motion.div>
          </section>

          {/* Stats Overview */}
          <StatsGrid />

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column: Search & Map */}
            <div className="lg:col-span-2 space-y-8">
              <div className="bg-white p-6 rounded-2xl border border-neutral-200 shadow-sm">
                <h3 className="text-lg font-semibold mb-4">Pencarian Cerdas (AI)</h3>
                <AISearch />
              </div>

              <div className="h-[500px] relative">
                <MapComponent />
              </div>
            </div>

            {/* Right Column: Real-time Feed & Activity */}
            <div className="space-y-8">
              <div className="bg-white p-6 rounded-2xl border border-neutral-200 shadow-sm">
                <RealTimeFeed />
              </div>

              <div className="bg-white p-6 rounded-2xl border border-neutral-200 shadow-sm">
                <h3 className="text-lg font-semibold mb-4">Recent Activity</h3>
                <div className="space-y-4">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="flex gap-3 items-start">
                      <div className="w-2 h-2 rounded-full bg-blue-500 mt-2 shrink-0"></div>
                      <div>
                        <p className="text-sm font-medium text-neutral-900">System Update {i}</p>
                        <p className="text-xs text-neutral-500">2 hours ago</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

