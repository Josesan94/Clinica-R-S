let oldProfessional = JSON.parse(localStorage.getItem("professionals")) || [];

let attempt = 4;
let formLoginProfessional = document.getElementById('formLoguinProfessional');
let email = document.getElementById('email');
let passwordLoginProfessional = document.getElementById('passwordLoginProfessional');
let submitt = document.getElementById('submitt');
localStorage.removeItem("currentUserProfessional");
localStorage.removeItem("currentUserPatient");

formLoginProfessional.addEventListener('submit', function (event) {

    event.preventDefault();
    //Chequeamos si ya tengo usuarios almacenados o si aun no se ha guardado ninguno en el localStorage

        let userIndex;
        let usuario;
        oldProfessional.filter((el, i) => {
        console.log(el);

            if (el.email == email.value) {
                userIndex = i;
                usuario = el;
            }
        })
        if (userIndex !== undefined) {
            if (passwordLoginProfessional.value == oldProfessional[userIndex].password) {
                localStorage.setItem("currentUserProfessional", JSON.stringify(usuario));
                window.location.href = 'usuario-profesional.html'
            } else {
                attempt--;// Decremento en uno.
                alert(`Password incorrecto, Te quedan ${attempt} intentos`);
            }
        }else alert('Usuario no registrado')

    if (attempt == 0) {
        username.disabled = true;
        password.disabled = true;
        submitt.disabled = true;
        alert(`Agotó todos sus intentos, pruebe de  en 5 minutos.`);
    }

});