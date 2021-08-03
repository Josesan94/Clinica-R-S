let oldUser = JSON.parse(localStorage.getItem("users")) || [];
let button = document.getElementById('enviar')
let form = document.getElementById('myForm');
let namePatient = document.getElementById('name');
let correo = document.getElementById('correo');
let password = document.getElementById('password');
let repeatPassword = document.getElementById('password2');
let phone = document.getElementById('phone');
let address = document.getElementById('direction');
let gender = document.getElementById('gender');
let date = document.getElementById('date'); //fecha de nacimiento
let socSec = document.getElementById('socSec');

localStorage.removeItem("currentUserPatient");
localStorage.removeItem("currentUserProfessional");



function Patient (namePatient, correo, password, phone, gender, date, socSec) {
  this.namePatient = namePatient;
  this.mail = correo;
  this.password = password;
  this.phone = phone;
  this.address = address;
  this.gender = gender;
  this.date = date; //fecha de nacimiento
  this.socSec = socSec;
}

form.addEventListener('submit', function(e) {
    e.preventDefault();
    let user = new Patient (namePatient.value, correo.value, password.value, phone.value, gender.value, date.value, socSec.value);
    oldUser.push(user);
    localStorage.setItem('users', JSON.stringify(oldUser));
    });

    

    
    






    
    /*let inputs = document.querySelectorAll('#myForm input');
    let buttons = document.getElementById('enviar');
    
     
    console.log(buttons)
    let valid = true;
    console.log(inputs)
    
    const validarFormulario = (e) =>{
        
        switch(e.target.name) {
            case  "nombre":
            
            if(expresiones.nombre.test(e.target.value)){
                document.getElementById('name').classList.remove('formulario-incorrecto');
                document.getElementById('name').classList.add('formulario-correcto');
                
                
            }else{
                document.getElementById('name').classList.add('formulario-incorrecto')
                document.getElementById('name').classList.remove('formulario-correcto');
                
                
            }

            break;

            case  "date":
                console.log('funciona');
    
                break;
            case  "nombre":
            console.log('funciona');

            break;  
            
            case  "gender":
                console.log('funciona');
    
                break;
            case  "email":
            console.log('funciona');

            break;   

            case  "pass1":
            console.log('funciona');

            break; 

            case  "pass2":
                console.log('funciona');
    
                break;

            case  "direccion":
            console.log('funciona');

            break;
            case  "telefono":
                console.log('funciona');
    
                break;
            case  "obrasocial":
            console.log('funciona');

            break;         
            
        }

        
    }


    //VALIDACION FECHA DE NACIMIENTO

    






    inputs.forEach((input) => {
        input.addEventListener('keyup', validarFormulario);
        input.addEventListener('blur', validarFormulario);
    })

   

    



    ///VALIDACION MARTIN
    
    /*inputs.forEach(el => {
        console.log(el.value + ': ' + el.checkValidity());
      if(!el.checkValidity()){
            console.log('gato');
            //no se hace nada
        } else {
            //Si es invalido el formulario no esta correcto 
            console.log('trolo')
            valid = false;
        }
    
    });
    
    
    if(valid) {
        buttons.classList.remove('disabled');
        
    }*/
    
    ///VALIDACION MARTIN
    
     















/*let formIsValid = {
    namePatient: false,
    email: false,
    password: false,
    gender: false,
    socSec: false,
}

form.addEventListener('submit', (e) => {
    e.preventDefault()
    validateForm()
});

namePatient.addEventListener('change', (e) => {
    if(e.target.value.trim().length > 0) formIsValid.name = true
});

email.addEventListener('change', (e) => {
    if(e.target.value.trim().length > 0) formIsValid.email = true
});

gender.addEventListener('change', (e) => {
    console.log(e.target.checked)
    if(e.target.checked == true) formIsValid.gender = true
});

socSec.addEventListener('change', (e) => {
    if(e.target.value.trim().length > 0) formIsValid.name = true
    e.target.checked ? button.removeAttribute('disabled') : button.setAttribute('disabled', true)
});

const validateForm = () => {
    let formValues = Object.values(formIsValid)
    let valid = formValues.findIndex(value => value == false)
    if(valid == -1) form.submit()
    else alert('Form invalid')
};

*/









































/*function Validation(){
    //obtener valores de los inputs

    let patient = namePatient.value.trim();
    let mail = email.value.trim();
    let contra = password.value.trim();
    let repetircontra = repeatPassword.value.trim();
    let celu = phone.value.trim();

    if(patient === ''){
        //show error
        //add error class

        setErrorFor(namePatient, 'Debe indicar su nombre y apellido');

    
    } else {
        //add sucess class

        setSucessFor(namePatient);
    }

}

function setErrorFor(input, message){

    let formControl = input.parentElement;
    let small = formControl.querySelector('small');

    //añadir error

    small.innerText = message;  
    formControl.className = 'row d-flex justify-content-center align-content-center';

}

function setSucessFor(){
    let formControl = inpuit.parentElement;
    formControl.className = ''
}*/

























//let arrayUsuarios = [];

/*let attempt = 4;
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

});*/  


