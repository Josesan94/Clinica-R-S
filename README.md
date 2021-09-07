# ClinicaRyS

[Check the website on Netlify](https://clinicarys.netlify.app/)

( 🇺🇸 below)

Este fue el proyecto final del segundo módulo del curso de fullstack de RollingCode School. El objetivo era crear un sitio web sencillo para una clínica en la que tanto médicos como pacientes pudieran loguearse y un sistema de turnos les permitiera sacar nuevas citas y poder visualizarlas.

Me encargué de diseñar toda la parte gráfica del sitio, la cual posteriormente implementé usando HTML, CSS puro y algunas clases de Bootstrap.
Además, el desafío de este módulo fue agregarle funcionalidad a la página usando JS puro (Vanilla JS), con el cual logré diseñar el sistema de turnos requerido.
Al no trabajar con bases de datos aún, este proyecto usa el localStorage para guardar los datos de los usuarios.

Para poder apreciar su funcionamiento, pueden dirigirse a la pestaña de login paciente, y desde ahí acceder al registro (al llenar todos los datos y presionar registrar automáticamente se crea el usuario y se redirige al login). Una vez registrados ahora podemos ingresar a nuestro perfil desde el login y haciendo click en el calendario podremos sacar turno con los diferentes profesionales. Nótese que la cantidad de fechas disponibles en los días van disminuyendo y se van creando cards en la parte inferior del sitio donde se guardan los datos de la cita reservada.

----------------

This was the final project of the second part of the RollingCode School fullstack course. The goal was to create a simple website for a clinic where both doctors and patients could log in and a system would allow them to make new appointments and visualize them.

I was in charge of designing all the graphics of the site, which I later implemented using HTML, pure CSS and some Bootstrap classes.
Also, the challenge of this module was to add functionality to the page using pure JS (Vanilla JS), with which I was able to design the required appointment system.
Not working with databases yet, this project uses the localStorage to save user data.

In order to appreciate how it works, you can go to the patient login tab, and from there access the registration form (by filling in all the data and pressing register, the user is automatically created and redirected to the login). Once registered, we can now enter our profile page from the login and by clicking on the calendar we can create appointments with the different professionals. Note that the number of dates available in the days is decreasing and cards are being created at the bottom of the site where the data of the reserved appointment is stored.
