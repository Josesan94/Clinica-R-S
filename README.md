# ClinicaRyS

[Check the website on Netlify](https://clinicarys.netlify.app/)

Este fue el proyecto final del segundo módulo del curso de fullstack de RollingCode School. El objetivo era crear un sitio web sencillo para una clínica en la que tanto médicos como pacientes pudieran loguearse y un sistema de turnos les permitiera sacar nuevas citas y poder visualizarlas.

Me encargué de diseñar toda la parte gráfica del sitio, la cual posteriormente implementé usando HTML, CSS puro y algunas clases de Bootstrap.
Además, el desafío de este módulo fue agregarle funcionalidad a la página usando JS puro (Vanilla JS), con el cual logré diseñar el sistema de turnos requerido.
Al no trabajar con bases de datos aún, este proyecto usa el localStorage para guardar los datos de los usuarios.

Para poder apreciar su funcionamiento, pueden dirigirse a la pestaña de login paciente, y desde ahí acceder al registro (al llenar todos los datos y presionar registrar automáticamente se crea el usuario y se redirige al login). Una vez registrados ahora podemos ingresar a nuestro perfil desde el login y haciendo click en el calendario podremos sacar turno con los diferentes profesionales. Nótese que la cantidad de fechas disponibles en los días disminuye a medida que los turnos se van creando, y se van creando cards en la parte inferior del sitio donde se guardan los datos de la cita reservada.
