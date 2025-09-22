@@ .. @@
      <div className={`
-        fixed lg:static inset-y-0 left-0 z-25 w-80 bg-gradient-to-b from-green-800 via-green-700 to-green-900 
+        fixed lg:static inset-y-0 left-0 z-50 w-80 bg-gradient-to-b from-green-800 via-green-700 to-green-900 
        transform transition-transform duration-300 ease-in-out
        ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
        shadow-xl border-r border-green-600/30
@@ .. @@
          {/* Footer */}
          <div className="p-6 border-t border-green-600/30">
-            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
+            <Link 
+              to="/profile"
+              className="block bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20 hover:bg-white/20 transition-colors"
+              onClick={() => setIsOpen(false)}
+            >
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-br from-orange-400 to-red-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-sm">RS</span>
@@ .. @@
                  <p className="text-green-200 text-sm">Premium Farmer</p>
                </div>
              </div>
-            </div>
+            </Link>
          </div>
        </div>
      </div>
      }