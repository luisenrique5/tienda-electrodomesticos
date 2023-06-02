const $btnSignUp = document.querySelector('.sign-up-btn'),
  $btnSignIn = document.querySelector('.sign-in-btn'),
  $signIn = document.querySelector('.sign-in'),
  $signUp = document.querySelector('.sign-up');

document.addEventListener('click', e => {
  if (e.target === $btnSignIn || e.target === $btnSignUp) {
    $signIn.classList.toggle('active');
    $signUp.classList.toggle('active')
  }
});