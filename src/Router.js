import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Lending from './Lending';
import Hint1 from './Hint1';
import Hint2 from './Hint2';
import Hint3 from './Hint3';
import Hint4 from './Hint4';
import Hint5 from './Hint5';
import Hint6 from './Hint6';
import Hint7 from './Hint7';
import Hint8 from './Hint8';
import Hint9 from './Hint9';
import Hint10 from './Hint10';
import Test from './Test';

import ScrollToTop from './ScrollToTop';

function DefaultRouter() {
  return (
    <Router basename="/hintapp">
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Lending />} />
        <Route path="/Hint1" element={<Hint1 />} />
        <Route path="/Hint2" element={<Hint2 />} />
        <Route path="/Hint3" element={<Hint3 />} />
        <Route path="/Hint4" element={<Hint4 />} />
        <Route path="/Hint5" element={<Hint5 />} />
        <Route path="/Hint6" element={<Hint6 />} />
        <Route path="/Hint7" element={<Hint7 />} />
        <Route path="/Hint8" element={<Hint8 />} />
        <Route path="/Hint9" element={<Hint9 />} />
        <Route path="/Hint10" element={<Hint10 />} />
        <Route path="/Test" element={<Test />} />
      </Routes>
    </Router>
  );
}

export default DefaultRouter;
