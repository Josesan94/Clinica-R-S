let oldUser = JSON.parse(localStorage.getItem("users")) || [];

let attempt = 4;
let formLogin = document.getElementById('formLogin');
let mail = document.getElementById('email');
let passwordLoginPatient = document.getElementById('passwordLoginPatient');
let submitt = document.getElementById('submitt');
localStorage.removeItem("currentUserPatient");
localStorage.removeItem("currentUserProfessional");

formLogin.addEventListener('submit', function(event){

    console.log('escuche');
    event.preventDefault();
    let userIndex
    let usuario
    //Chequeamos si ya tengo usuarios almacenados o si aun no se ha guardado ninguno en el localStorage

    if(oldUser.length) {
        let usuario;
        oldUser.filter((el, i) => {
            if(el.mail == mail.value){
                userIndex = i;
                usuario = el;
            }
        })

        if(userIndex !== undefined){
                    if(passwordLoginPatient.value == oldUser[userIndex].password){
                        localStorage.setItem("currentUserPatient", JSON.stringify(usuario));
                        window.location.href = 'usuario-paciente.html';
                    }else{
                        attempt --;// Decremento en uno.
                        alert(`Password incorrecto, Te quedan ${attempt} intentos`);
                    }
        }}else alert(`Usuario no registrado.`);

            if( attempt == 0){
                username.disabled = true;
                password.disabled = true;
                submitt.disabled = true;
                alert(`Agotó todos sus intentos, pruebe de  en 5 minutos.`);
            }

});   



let currentuser = {};



