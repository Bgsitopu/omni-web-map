import React, { useState, useEffect } from 'react';
import { Activity, TrendingUp, TrendingDown, RefreshCw } from 'lucide-react';
import { motion } from 'motion/react';

interface FeedItem {
  id: string;
  source: string;
  value: string;
  change: number;
  timestamp: string;
}

export default function RealTimeFeed() {
  const [items, setItems] = useState<FeedItem[]>([
    { id: '1', source: 'BTC/USD', value: '$64,231.50', change: 2.4, timestamp: new Date().toLocaleTimeString() },
    { id: '2', source: 'Server Load', value: '42%', change: -5.1, timestamp: new Date().toLocaleTimeString() },
    { id: '3', source: 'Active Users', value: '1,284', change: 12.3, timestamp: new Date().toLocaleTimeString() },
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      setItems(prev => prev.map(item => {
        const change = (Math.random() * 4 - 2);
        return {
          ...item,
          value: item.source.includes('$') 
            ? `$${(parseFloat(item.value.replace('$', '').replace(',', '')) + change * 10).toFixed(2)}`
            : item.source.includes('%')
              ? `${Math.max(0, Math.min(100, parseFloat(item.value) + change)).toFixed(1)}%`
              : `${Math.max(0, Math.floor(parseInt(item.value) + change * 5))}`,
          change: change,
          timestamp: new Date().toLocaleTimeString()
        };
      }));
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-semibold text-neutral-800 flex items-center gap-2">
          <Activity className="h-4 w-4 text-blue-500" />
          Real-time Feeds
        </h3>
        <RefreshCw className="h-3 w-3 text-neutral-400 animate-spin-slow" />
      </div>
      
      {items.map((item) => (
        <motion.div
          key={item.id}
          layout
          className="p-3 bg-white border border-neutral-100 rounded-lg shadow-sm flex items-center justify-between"
        >
          <div>
            <p className="text-xs text-neutral-500 font-medium uppercase tracking-wider">{item.source}</p>
            <p className="text-lg font-bold text-neutral-900">{item.value}</p>
          </div>
          <div className="text-right">
            <div className={`flex items-center gap-1 text-sm font-medium ${item.change >= 0 ? 'text-green-600' : 'text-red-600'}`}>
              {item.change >= 0 ? <TrendingUp className="h-3 w-3" /> : <TrendingDown className="h-3 w-3" />}
              {Math.abs(item.change).toFixed(1)}%
            </div>
            <p className="text-[10px] text-neutral-400">{item.timestamp}</p>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
