import React, {useState} from 'react';
import {Sidebar, NewsList} from './components';

function App() {
  const [selectedSource, setSelectedSource] = useState('');

  return (
    <div className="d-flex h-100">
      <Sidebar setSelectedSource={setSelectedSource} />
      <NewsList setSelectedSource={setSelectedSource} selectedSource={selectedSource} />
    </div>
  );
}

export default App;
