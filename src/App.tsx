import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { Calculator } from './pages/Calculator';
import { ContactPage } from './pages/Contact';
import { LoadingBar } from './components/LoadingBar';
import { PageTransition } from './components/PageTransition';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <LoadingBar />
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<PageTransition><Home /></PageTransition>} />
            <Route path="/calculator" element={<PageTransition><Calculator /></PageTransition>} />
            <Route path="/contact" element={<PageTransition><ContactPage /></PageTransition>} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;