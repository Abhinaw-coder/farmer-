@@ .. @@
import React from 'react';
-import { Menu, Search, Bell } from 'lucide-react';
+import { Menu, Search, Bell, User } from 'lucide-react';
+import { Link } from 'react-router-dom';

const MobileHeader = ({ onMenuClick }) => {
}
@@ .. @@
        <div className="flex items-center space-x-3">
          <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors relative">
            <Bell size={20} className="text-gray-600" />
            <div className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 rounded-full flex items-center justify-center">
              <span className="text-white text-xs font-bold">3</span>
            </div>
          </button>
-          <div className="w-8 h-8 bg-gradient-to-br from-orange-400 to-red-500 rounded-full flex items-center justify-center">
-            <span className="text-white font-bold text-xs">RS</span>
-          </div>
+          <Link to="/profile" className="w-8 h-8 bg-gradient-to-br from-orange-400 to-red-500 rounded-full flex items-center justify-center hover:scale-110 transition-transform">
+            <span className="text-white font-bold text-xs">RS</span>
+          </Link>
        </div>
      </div>
    </header>