import React from 'react';
import { Bell, Search, User, Globe } from 'lucide-react';

export default function Header() {
  return (
    <header className="h-16 bg-white border-b border-neutral-200 px-8 flex items-center justify-between sticky top-0 z-10">
      <div className="flex items-center gap-4 text-sm text-neutral-500">
        <Globe className="h-4 w-4" />
        <span>Global Network Status: <span className="text-green-600 font-medium">Optimal</span></span>
      </div>

      <div className="flex items-center gap-4">
        <button className="p-2 text-neutral-400 hover:text-neutral-900 hover:bg-neutral-50 rounded-full transition-all relative">
          <Bell className="h-5 w-5" />
          <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
        </button>
        
        <div className="h-8 w-[1px] bg-neutral-200 mx-2"></div>
        
        <div className="flex items-center gap-3 pl-2">
          <div className="text-right hidden sm:block">
            <p className="text-sm font-semibold text-neutral-900">Admin User</p>
            <p className="text-xs text-neutral-500">habelsitopu1@gmail.com</p>
          </div>
          <div className="w-10 h-10 bg-neutral-100 rounded-full flex items-center justify-center border border-neutral-200">
            <User className="h-6 w-6 text-neutral-400" />
          </div>
        </div>
      </div>
    </header>
  );
}
