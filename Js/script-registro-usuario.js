let oldUser = JSON.parse(localStorage.getItem("users")) || [];

let form = document.getElementById('myForm');
let namePatient = document.getElementById('name');
let email = document.getElementById('email');
let password = document.getElementById('password');
let repeatPassword = document.getElementById('repeatPassword');
let phone = document.getElementById('phone');
let address = document.getElementById('address');
let gender = document.getElementById('gender');
let date = document.getElementById('date'); //fecha de nacimiento
let socSec = document.getElementById('socSec');

function Patient (namePatient, email, password, phone, gender, date, socSec) {
  this.namePatient = namePatient;
  this.email = email;
  this.password = password;
  this.phone = phone;
  this.address = address;
  this.gender = gender;
  this.date = date; //fecha de nacimiento
  this.socSec = socSec;
}


form.addEventListener('submit', function(e) {
e.preventDefault();
let user = new Patient (namePatient.value, email.value, password.value, phone.value, gender.value, date.value, socSec.value);
oldUser.push(user);
localStorage.setItem('users', JSON.stringify(oldUser));
})



//let arrayUsuarios = [];

let attempt = 4;
let formLogin = document.getElementById('formLogin');
let username = document.getElementById('username');
let passwordLoginPatient = document.getElementById('passwordLoginPatient');
let submitt = document.getElementById('submitt');


formLogin.addEventListener('submit', function(event){

    console.log('escuche');
    event.preventDefault();
    //Chequeamos si ya tengo usuarios almacenados o si aun no se ha guardado ninguno en el localStorage

    if(oldUser.length) {
        let index;
        oldUser.filter((el,i) => {
            if(el.user == email.value){
            index = i;
            }
        })}

if(index !== undefined){
            if(passwordLoginPage.value == oldUser[index].password){
                window.location.href = './pages/usuarioPaciente.html';
            }else{
                attempt --;// Decremento en uno.
                alert(`Password incorrecto, Te quedan ${attempt} intentos`);
            }
}else alert(`Usuario no registrado.`);

    if( attempt == 0){
        username.disabled = true;
        password.disabled = true;
        submitt.disabled = true;
        alert(`Agotó todos sus intentos, pruebe de  en 5 minutos.`);
    }

});   