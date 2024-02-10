import { useState, useEffect } from 'react';
import './App.css';
import Home from './pages/Home';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useDispatch, useSelector } from 'react-redux';
import { toggleDarkMode, selectDarkMode } from './redux/darkModeSlice';
function App() {
  const isDarkMode = useSelector(selectDarkMode);
  const dispatch = useDispatch();

  const handleToggleDarkMode = () => {
    dispatch(toggleDarkMode());
  };

  return (
    <div className={isDarkMode ? 'dark-mode' : 'light-mode'}>
      <button className="theme" onClick={handleToggleDarkMode}>
        {isDarkMode ? <FontAwesomeIcon icon={faSun} /> : <FontAwesomeIcon icon={faMoon} />}
      </button>
      <Home />
    </div>
  );
}

export default App;
