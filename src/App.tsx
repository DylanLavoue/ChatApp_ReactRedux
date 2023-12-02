import React from 'react';
import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom';
import { RegisterPage } from './pages/RegisterPage';
import { ConversationsPage } from './pages/ConversationPage';
import { LoginPage } from './pages/LoginPage';
import { ConversationChannelPage } from './pages/ConversationChannelPage';


function App() {
  return (
    <>
      <Routes>
        <Route path="/register" element={<RegisterPage/>}/>
        <Route path="/login" element={<LoginPage/>}/>
        <Route path="conversations" element={<ConversationsPage/>}>
          <Route path=":id" element={<ConversationChannelPage/>}/>
        </Route>
      </Routes>
    </>
  );
}


export default App;
