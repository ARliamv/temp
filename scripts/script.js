// Wait for the page to load
window.addEventListener('load', () => {
    setTimeout(() => {
      // Hide loading page and show toggle page
      document.getElementById('loading-page').classList.remove('active');
      document.getElementById('loading-page').classList.add('hidden');
      document.getElementById('toggle-page').classList.remove('hidden');
      document.getElementById('toggle-page').classList.add('active');
    }, 3000); // Simulate a 3-second loading time
  });
  
  // Toggle switch event
  document.getElementById('switch').addEventListener('change', () => {
    // Hide toggle page and show button page
    document.getElementById('toggle-page').classList.remove('active');
    document.getElementById('toggle-page').classList.add('hidden');
    document.getElementById('button-page').classList.remove('hidden');
    document.getElementById('button-page').classList.add('active');
  });
  
  // Heart button event
  document.getElementById('heart-button').addEventListener('click', () => {
    // Hide button page and show love page
    document.getElementById('button-page').classList.remove('active');
    document.getElementById('button-page').classList.add('hidden');
    document.getElementById('love-page').classList.remove('hidden');
    document.getElementById('love-page').classList.add('active');
  });