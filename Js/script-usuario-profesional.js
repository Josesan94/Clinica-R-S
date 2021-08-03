function Patient(name, mail, password, phone, address, gender, date, socSec) {
    this.name = name;
    this.mail = mail;
    this.password = password;
    this.phone = phone;
    this.address = address;
    this.gender = gender;
    this.date = date; //fecha de nacimiento
    this.socSec = socSec;
  }
  
  function Professional(name, mail, password, phone, regist, specialty) {
    this.name = name;
    this.mail = mail;
    this.password = password;
    this.phone = phone;
    this.regist = regist; //matricula profesional medico
    this.specialty = specialty; //especialidad
  }
  
  function Appointment(name1, name2, time, date, symptoms) {
    this.doctor = name1;
    this.patient = name2;
    this.time = time;
    this.date = date;
    this.symptoms = symptoms; //texto pedido en los requisitos.
  }
  
  // let currentUserProfessional = new Professional(
  //   "Martina Díaz",
  //   "ginecologadiaz@gmail.com",
  //   "1234",
  //   "3815711092",
  //   "332458",
  //   "Ginecología"
  // )
  // localStorage.setItem("currentUserProfessional", JSON.stringify(currentUserProfessional));

  let currentUserProfessional = JSON.parse(localStorage.getItem("currentUserProfessional"));

  function createCards() {
    //crear las cards
    turnosOtorgados = document.getElementById("turnosOtorgados");
    let currentUserProfessional = JSON.parse(localStorage.getItem("currentUserProfessional"));
    let saved = JSON.parse(localStorage.getItem("appointmentsSaved"));
    let appointmentsCards = saved.filter( (app) => app.doctor == currentUserProfessional.name);
    appointmentsCards.forEach((appointment) => {
      turnosOtorgados.innerHTML += `<div class="card appCard"><div class="card-title">${appointment.date} de ${new Date().toLocaleDateString(
        "es-ES",
        { month: "long" }
      )}</div><div class="card-content">Paciente: ${appointment.patient}</div><div class="card-content">Horario: ${appointment.time}:00 hs</div></div>`;
    })
    }

    createCards();