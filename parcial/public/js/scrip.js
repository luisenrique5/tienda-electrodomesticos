$(document).ready(function () {
  const $btnSignUp = $('.sign-up-btn');
  const $btnSignIn = $('.sign-in-btn');
  const $signIn = $('.sign-in');
  const $signUp = $('.sign-up');

  $(document).on('click', function (e) {
    if (e.target === $btnSignIn[0] || e.target === $btnSignUp[0]) {
      $signIn.toggleClass('active');
      $signUp.toggleClass('active');
    }
  });

  $('#enlaceRegistro').on('click', function (e) {
    e.preventDefault();
    $('#Registrarse').click();
  });

  $('#Registrarse').on('click', function () {
    $('.sign-up').toggleClass('active');
    $('.sign-in').toggleClass('active');
  });

  $('#btnIniciarSesion').on('click', function () {
    $('.sign-in').toggleClass('active');
    $('.sign-up').toggleClass('active');
  });
});
