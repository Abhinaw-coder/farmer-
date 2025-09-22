@@ .. @@
import Quiz from './pages/Quiz';
import TrackMyFarm from './pages/TrackMyFarm';
import NutritionAI from './pages/NutritionAI';
import GlobalChat from './pages/GlobalChat';
import ComplaintSection from './pages/ComplaintSection';
import VeteranAdvice from './pages/VeteranAdvice';
+import Profile from './pages/Profile';

function App() {
}
@@ .. @@
            <Route path="/chat" element={<GlobalChat />} />
            <Route path="/complaint" element={<ComplaintSection />} />
            <Route path="/veteran" element={<VeteranAdvice />} />
+            <Route path="/profile" element={<Profile />} />
          </Routes>
        </Layout>
      </Router>