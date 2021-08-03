let oldProfessional = JSON.parse(localStorage.getItem("professionales")) || [];

let form = document.getElementById('formProfessional');
let nameProfessional = document.getElementById('name');
let mail = document.getElementById('correo');
let pass = document.getElementById('password');
let repeatPassword = document.getElementById('password2');
let telefono = document.getElementById('phone');
let specialty = document.getElementById('specialty');
let regist = document.getElementById('matricule');

localStorage.removeItem("currentUserPatient");
localStorage.removeItem("currentUserProfessional");


function Professional(name, correo, pass, telefono, matricule, specialty) {
    this.name = name;
    this.mail = correo;
    this.password = pass;
    this.phone = telefono;
    this.regist = matricule; //matricula profesional medico
    this.specialty = specialty; //especialidad
  }


form.addEventListener('submit', function(e) {
e.preventDefault();
let professional = new Professional (nameProfessional.value, mail.value, pass.value, telefono.value, regist.value, specialty.value,);
oldProfessional.push(professional);
localStorage.setItem('professionales', JSON.stringify(oldProfessional));
})


