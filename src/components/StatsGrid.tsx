import React from 'react';
import { 
  Users, 
  Eye, 
  ShoppingBag, 
  ArrowUpRight, 
  ArrowDownRight 
} from 'lucide-react';

const stats = [
  { label: 'Total Visitors', value: '124,892', change: '+12.5%', trend: 'up', icon: Users, color: 'text-blue-600', bg: 'bg-blue-50' },
  { label: 'Page Views', value: '842,103', change: '+18.2%', trend: 'up', icon: Eye, color: 'text-purple-600', bg: 'bg-purple-50' },
  { label: 'Conversions', value: '3,421', change: '-2.4%', trend: 'down', icon: ShoppingBag, color: 'text-orange-600', bg: 'bg-orange-50' },
];

export default function StatsGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {stats.map((stat) => (
        <div key={stat.label} className="bg-white p-6 rounded-2xl border border-neutral-200 shadow-sm hover:shadow-md transition-shadow">
          <div className="flex items-start justify-between mb-4">
            <div className={stat.bg + " p-3 rounded-xl"}>
              <stat.icon className={stat.color + " h-6 w-6"} />
            </div>
            <div className={`flex items-center gap-1 text-sm font-medium ${stat.trend === 'up' ? 'text-green-600' : 'text-red-600'}`}>
              {stat.change}
              {stat.trend === 'up' ? <ArrowUpRight className="h-4 w-4" /> : <ArrowDownRight className="h-4 w-4" />}
            </div>
          </div>
          <div>
            <p className="text-sm font-medium text-neutral-500 mb-1">{stat.label}</p>
            <h3 className="text-2xl font-bold text-neutral-900">{stat.value}</h3>
          </div>
        </div>
      ))}
    </div>
  );
}
