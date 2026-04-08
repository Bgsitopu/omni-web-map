import React from 'react';
import { 
  LayoutDashboard, 
  Map as MapIcon, 
  Search, 
  Settings, 
  Bell, 
  Users, 
  Database,
  Menu,
  X
} from 'lucide-react';
import { cn } from '../lib/utils';

const menuItems = [
  { icon: LayoutDashboard, label: 'Dashboard', active: true },
  { icon: MapIcon, label: 'Global Map', active: false },
  { icon: Search, label: 'Advanced Search', active: false },
  { icon: Users, label: 'Team', active: false },
  { icon: Database, label: 'Data Sources', active: false },
  { icon: Settings, label: 'Settings', active: false },
];

export default function Sidebar() {
  return (
    <aside className="w-64 bg-white border-r border-neutral-200 flex flex-col h-screen sticky top-0">
      <div className="p-6 flex items-center gap-3">
        <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
          <LayoutDashboard className="text-white h-5 w-5" />
        </div>
        <h1 className="text-xl font-bold tracking-tight text-neutral-900">OmniHub</h1>
      </div>

      <nav className="flex-1 px-4 space-y-1">
        {menuItems.map((item) => (
          <button
            key={item.label}
            className={cn(
              "w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all",
              item.active 
                ? "bg-blue-50 text-blue-700" 
                : "text-neutral-500 hover:bg-neutral-50 hover:text-neutral-900"
            )}
          >
            <item.icon className="h-5 w-5" />
            {item.label}
          </button>
        ))}
      </nav>

      <div className="p-4 border-t border-neutral-100">
        <div className="bg-neutral-900 rounded-xl p-4 text-white">
          <p className="text-xs font-medium text-neutral-400 uppercase mb-1">Pro Plan</p>
          <p className="text-sm font-semibold mb-3">Upgrade for more AI power</p>
          <button className="w-full py-2 bg-white text-neutral-900 rounded-lg text-xs font-bold hover:bg-neutral-100 transition-colors">
            Upgrade Now
          </button>
        </div>
      </div>
    </aside>
  );
}
