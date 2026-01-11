import React, { useState } from 'react';
import NavBar from './components/NavBar.jsx';

const FeedInterface = () => {
  const [activeTab, setActiveTab] = useState('settings');

  return (
    <div>
      <NavBar activeTab={activeTab} onTabChange={setActiveTab} />
      <div style={{ padding: '20px' }}>
        {activeTab === 'settings' && <div>Settings content goes here.</div>}
        {activeTab === 'messages' && <div>Messages content goes here.</div>}
        {activeTab === 'notifications' && <div>Notifications content goes here.</div>}
      </div>
    </div>
  );
};

export default FeedInterface;
