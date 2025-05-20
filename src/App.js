import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './components/header';
import NotesApp from './components/NotesApp';
import Footer from './components/footer';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="container py-5">
        <NotesApp />
      </div>
      <Footer />
    </div>
  );
}

export default App;
