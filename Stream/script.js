
document.addEventListener('DOMContentLoaded', () => {
  const navButtons = document.querySelectorAll('nav button');
  
  navButtons.forEach(button => {
    button.addEventListener('click', () => {
      navButtons.forEach(btn => btn.classList.remove('active'));
      button.classList.add('active');
    });
  });

  const playBtn = document.querySelector('.play-btn');
  playBtn.addEventListener('click', () => {
    alert('Iniciando reproducción...');
  });
});
