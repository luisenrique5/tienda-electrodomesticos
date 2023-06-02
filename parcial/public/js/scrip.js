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
    $('#RegistrarseBoton').click();
  });

  // Envía los datos del formulario al servidor para el registro
  $('#registrarUsuario').on('click', function () {
    console.log("aqui llego")
    const nombre = $('#nombre').val();
    const apellido = $('#apellido').val();
    const email = $('#email').val();
    const direccion = $('#direccion').val();
    const cargo = $('#cargo').val();
    const salario = $('#salario').val();
    const password = $('#password').val();

    $.ajax({
      url: '/register',
      method: 'POST',
      data: {
        nombre,
        apellido,
        email,
        direccion,
        cargo,
        salario,
        password
      },
      success: function (response) {
        alert('Registro exitoso');
      },
      error: function (error) {
        console.error(error);
        alert('Error al registrar');
      }
    });
  });

  $('#btnIniciarSesion').on('click', function () {
    $('.sign-in').toggleClass('active');
    $('.sign-up').toggleClass('active');
  });
});

