import { useState, useEffect } from 'react';

const Texto = () => {
  const [text, setText] = useState('');
  const originalText = `Hugo Silva\nDesenvolvedor Fullstack | react | node`;

  useEffect(() => {
    let currentIndex = 0;

    const intervalId = setInterval(() => {
      if (currentIndex <= originalText.length) {
        setText(originalText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(intervalId);
      }
    }, 125); // Velocidade da digitação aqui

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="texto-container">
      <pre>{text}</pre>
      <span className="blinking-cursor">|</span>
    </div>
  );
};

export default Texto;