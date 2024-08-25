import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Base from './components/Base';
import ShowCreators from './pages/ShowCreators';
import ViewCreator from './pages/ViewCreator';
import EditCreator from './pages/EditCreator';
import AddCreator from './pages/AddCreator';

const App = () => {
  return (
    <div>
      <Base /> {/* Base component is always rendered */}
      <Routes>
        <Route path="/" element={<ShowCreators />} />
        <Route path="view/:id" element={<ViewCreator />} />
        <Route path="edit/:id" element={<EditCreator />} />
        <Route path="add" element={<AddCreator />} />
      </Routes>
    </div>
  );
};

export default App;