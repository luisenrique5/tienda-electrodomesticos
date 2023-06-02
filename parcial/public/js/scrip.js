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
    const nombre = $('#nombre').val();
    const apellido = $('#apellido').val();
    const email = $('#email').val();
    const direccion = $('#direccion').val();
    const cargo = $('#cargo').val();
    const salario = $('#salario').val();
    const password = $('#password').val();
    const fotoPerfil = $('#fotoPerfil')[0].files[0];

    // Crear un objeto FormData
    var formData = new FormData();
    formData.append('nombre', nombre);
    formData.append('apellido', apellido);
    formData.append('email', email);
    formData.append('direccion', direccion);
    formData.append('cargo', cargo);
    formData.append('salario', salario);
    formData.append('password', password);
    formData.append('fotoPerfil', fotoPerfil);

    // Enviar la solicitud AJAX
    $.ajax({
      url: '/register',
      type: 'POST',
      data: formData,
      processData: false,
      contentType: false,
      success: function(response) {
        alert('Registro exitoso');
      },
      error: function(error) {
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
