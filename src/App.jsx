import React,{Suspense, lazy} from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

import HeaderNav from './components/layouts/HeaderNav';
import SideBar from './components/layouts/SideBar';
import Home from './components/home/Home';
import Post from './components/post/Post';
import Photos from './components/photo/Photo';
import Login from './components/login-page/Login';
import ProtectedRoute from './components/shared/ProtectedRoute'; 
const Loader = lazy(() => import('./components/shared/Loader'));

const App = () => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  return (
    <div className="flex flex-col h-screen">
      <Suspense fallback={<Loader />}>
      {isAuthenticated && <HeaderNav />}
      <div className="flex flex-1">
        {isAuthenticated && <SideBar />}
        <div className="flex-1 overflow-y-auto h-[100vh]">
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/" element={
                <ProtectedRoute>
                  <Home />
                </ProtectedRoute>
              }
            />
            <Route path="/post" element={
                <ProtectedRoute>
                  <Post />
                </ProtectedRoute>
              }
            />
            <Route path="/photo" element={
                <ProtectedRoute>
                  <Photos />
                </ProtectedRoute>
              }
            />
            <Route path="*" element={<Navigate to="/login" />} />
          </Routes>
        </div>
      </div>
      </Suspense>
    </div>
  );
};

export default App;
