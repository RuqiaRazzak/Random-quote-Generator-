const quotes = [
    "The best way to predict the future is to invent it. - Alan Kay",
    "Life is 10% what happens to us and 90% how we react to it. - Charles R. Swindoll",
    "The only limit to our realization of tomorrow is our doubts of today. - Franklin D. Roosevelt",
    "Do what you can, with what you have, where you are. - Theodore Roosevelt",
    "Believe you can and you're halfway there. - Theodore Roosevelt",
    "The only way to do great work is to love what you do.- Steve Jobs" ,
     "Success is not the key to happiness. Happiness is the key to success.- Albert Schweitzer" ,
     "It does not matter how slowly you go as long as you do not stop. -Confucius" ,
     "You are never too old to set another goal or to dream a new dream. -C.S. Lewis" ,
     "The purpose of our lives is to be happy. -Dalai Lama", 
  ];
  
  const quoteElement = document.getElementById('quote');
  const generateButton = document.getElementById('generate');
  
  generateButton.onclick= () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    quoteElement.textContent = quotes[randomIndex];
  };
  