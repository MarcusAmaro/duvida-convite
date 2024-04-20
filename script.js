const noButton = document.querySelector('.no');

noButton.addEventListener('mouseover', () => {
  const screenWidth = window.innerWidth;
  const screenHeight = window.innerHeight;
  const buttonWidth = noButton.offsetWidth;
  const buttonHeight = noButton.offsetHeight;

  const randomX = Math.random() * (screenWidth - buttonWidth);
  const randomY = Math.random() * (screenHeight - buttonHeight);

  noButton.style.position = 'absolute';
  noButton.style.left = randomX + 'px';
  noButton.style.top = randomY + 'px';
});
