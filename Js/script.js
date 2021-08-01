/*
.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.
._._._._._._._._._._._._._._._._._.
            CALENDARIO
.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.
._._._._._._._._._._._._._._._._._.
*/

//Variable nav para saber en que mes estoy, 0 es el mes actual
let nav = 0;
// let clicked = null;

//traer eventos anteriores de localStorage o si no va a ser tring en blanco.
// let events = localStorage.getItem("events")
//   ? JSON.parse(localStorage.getItem("events"))
//   : [];


const calendar = document.getElementById("calendar");
// const newEventModal = document.getElementById("newEventModal");
// const deleteEventModal = document.getElementById("deleteEventModal");
// const backDrop = document.getElementById("modalBackDrop");
// const eventTitleInput = document.getElementById("eventTitleInput");
const weekdays = [
  "domingo",
  "lunes",
  "martes",
  "miércoles",
  "jueves",
  "viernes",
  "sábado",
];

// function openModal(date) {
//   clicked = date;

//   const eventForDay = events.find((e) => e.date === clicked);
//   if (eventForDay) {
//     document.getElementById("eventText").innerText = eventForDay.title;
//     deleteEventModal.style.display = "block"; //si existe un evento se abre la ventana para borrarlo
//   } else {
//     newEventModal.style.display = "block"; //si no existe evento se abre la ventana para agregar uno nuevo
//   }

//   backDrop.style.display = "block"; //el fondo negro se abre siempre
// }

function load() {
  const dt = new Date();

  if (nav !=+ 0) {
    dt.setMonth(new Date().getMonth() + nav); // si nav!=0 se lo suma al atributo "month" para visualizar otro
    console.log(`dt ${dt}`);
  }

  const day = dt.getDate();
  const month = dt.getMonth();
  console.log(`month ${month}`);
  const year = dt.getFullYear(); //se toma dia, mes y ano de la constante "dt"

  const firstDayOfMonth = new Date(year, month, 1);
  const daysInMonth = new Date(year, month+1, 0).getDate();//el ultimo dia del mes actual va a ser el dia 0 del mes que le sigue

  const dateString = firstDayOfMonth.toLocaleDateString("es-ES", {
    weekday: "long",
    year: "numeric",
    month: "numeric",
    day: "numeric",
  }); //del atributo "weekday" saca el dia de la semana del objeto Date que ya viene definido.

  console.log(`dateString: ${dateString}`);

  const paddingDays = weekdays.indexOf(dateString.split(", ")[0]); //esto lo saca de hacer un console log de "dateString" y ver que justo antes del ", " dice el dia, entonces busca en el vector weekdays cual el el index del elemento que coincide (lo unico que no entiendo es el [0]) ??????????

  document.getElementById("monthDisplay").innerText = `${dt.toLocaleDateString(
    "es-ES",
    { month: "long" }
  )} ${year}`; //El titulo del mes que figura en rojo arriba del calendario.

  calendar.innerHTML = ""; //limpia el calendario previo (si hubiera) antes de armarlo de nuevo.

  for (let i = 1; i <= paddingDays + daysInMonth; i++) { //hasta que el contador llegue al numero de dias del mes + los dias de padding del mes anterior
    const daySquare = document.createElement("div");
    daySquare.classList.add("day"); //crea el cuadradito del dia haciendo un "div" y agregando la clase "day" definida en el css

    // const dayString = `${month + 1}/${i - paddingDays}/${year}`;

    if (i > paddingDays) {
      daySquare.innerText = i - paddingDays; //crea el numero del dia en el calendario
      // const eventForDay = events.find((e) => e.date === dayString); //no se que es "e"???????????

      if (i - paddingDays === day && nav === 0) {
        daySquare.id = "currentDay"; //identifica el dia de hoy si estamos en el corriente mes y le agrega esa id para que tenga estilo distinto
      }

      if (i - paddingDays >= day && nav === 0) {
        daySquare.setAttribute('data-bs-toggle' , 'modal');
        daySquare.setAttribute('data-bs-target' , '#exampleModal');
        daySquare.classList.add("possibleAp");
      }


      

      // if (eventForDay) { 
      //   const eventDiv = document.createElement("div");
      //   eventDiv.classList.add("event"); //crea la caja del evento y le da formato
      //   eventDiv.innerText = eventForDay.title; //le pone el nombre que saco del input del modal
      //   daySquare.appendChild(eventDiv);  //y pone la cajita dentro del dia que corresponde
      // }

      // daySquare.addEventListener("click", () => openModal(dayString)); // entiendo lo que hace, no entiendo la sistaxis??????
    } else {
      daySquare.classList.add("padding"); //si i no es mayor que padding se le agrega esta clase para hacer los cuadrados grises
    }

    calendar.appendChild(daySquare); //pone todos los dias dentro de calendario.
  }
}

// function closeModal() {
//   eventTitleInput.classList.remove("error");
//   newEventModal.style.display = "none";
//   deleteEventModal.style.display = "none";
//   backDrop.style.display = "none";//le pone display:none a todo para que desaparesca
//   eventTitleInput.value = ""; // y vacia el input para la proxima vez
//   clicked = null;
//   load(); //carga el calendario con los cambios que se hicieron (o no)
// }

// function saveEvent() {
//   if (eventTitleInput.value) {
//     eventTitleInput.classList.remove("error");

//     events.push({
//       date: clicked, //este renglon no entiendooo??????????
//       title: eventTitleInput.value,
//     });
//     localStorage.setItem("events", JSON.stringify(events));
//     closeModal();
//   } else {
//     eventTitleInput.classList.add("error");
//   }
// }

// function deleteEvent() {
//   events = events.filter((e) => e.date !== clicked);
//   localStorage.setItem("events", JSON.stringify(events));
//   closeModal();
// }

function initButtons() {
  document.getElementById("nextButton").addEventListener("click", () => {
    nav++;
    load();
  });
  document.getElementById("backButton").addEventListener("click", () => {
    nav--;
    load();
  });

  // document.getElementById("saveButton").addEventListener("click", saveEvent);
  // document.getElementById("cancelButton").addEventListener("click", closeModal);

  // document
  //   .getElementById("deleteButton")
  //   .addEventListener("click", deleteEvent);
  // document.getElementById("closeButton").addEventListener("click", closeModal);
}

initButtons();
load();


/*
.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.
._._._._._._._._._._._._._._._._._.

        SISTEMA DE TURNOS

.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.
._._._._._._._._._._._._._._._._._.
*/

function Patient (name, mail, password, phone, gender, date, socSec) {
    this.name = name;
    this.mail = mail;
    this.password = password;
    this.phone = phone;
    this.address = address;
    this.gender = gender;
    this.date = date; //fecha de nacimiento
    this.socSec = socSec;
}

function Professional (name, mail, password, phone, regist, specialty) {
  this.name = name;
  this.mail = mail;
  this.password = password;
  this.phone = phone;
  this.regist = regist; //matricula profesional medico
  this.specialty = specialty; //especialidad
}

function Appointment (name1, name2, time, day, month, year, symptoms) {
    this.doctor = name1;
    this.pacient = name2;
    this.time = time;
    this.day = day;
    this.month = month;
    this.year = year;
    this.symptoms = symptoms; //texto pedido en los requisitos.
}

let professionals = [];
professionals.push(new Professional("Juan Gómez","juangomez@gmail.com","1234","3814568278","345678","Clínica"));
professionals.push(new Professional("Lucía Juárez","juarezlucia@gmail.com","1234","3814489827","825305","Clínica"));
professionals.push(new Professional("Sofía Fernández","sfernandez@gmail.com","1234","3815678278","338726","Gastroenterología"));
professionals.push(new Professional("Martín Juárez","juarezmartin@gmail.com","1234","3814581099","836472","Gastroenterología"));
professionals.push(new Professional("Martina Díaz","ginecologadiaz@gmail.com","1234","3815711092","332458","Ginecología"));
professionals.push(new Professional("María Faoto","faotomaria@gmail.com","1234","3814489827","825305","Ginecología"));
professionals.push(new Professional("Gabriel Gutiérrez","ggutierrez@gmail.com","1234","3815678278","368678","Odontología"));
professionals.push(new Professional("Luisa Guerra","luisamedica@gmail.com","1234","3814489623","675305","Odontología"));
professionals.push(new Professional("Emilia Luna","lunaemilia@gmail.com","1234","3814689278","356078","Otorrinolaringología"));
professionals.push(new Professional("Andrea Pérez","perezandrea@gmail.com","1234","3816789827","825532","Otorrinolaringología"));
professionals.push(new Professional("Pablo Espeche","pespeche@gmail.com","1234","3816568290","343378","Pediatría"));
professionals.push(new Professional("Amanda Mercado","amandamercado@gmail.com","1234","3816788777","725605","Pediatría"));

localStorage.setItem("professionals", JSON.stringify(professionals));
professionals = JSON.parse(localStorage.getItem("professionals")) || [];
console.log(professionals);
let specialties = [];

//Generar el select con las especialidades de los médicos
professionals.forEach(professional => {
  if(!specialties.find(sp => sp == professional.specialty)) {
    specialties.push(professional.specialty);
  };
});
console.log(specialties);

let specialtyElement = document.querySelector("#specialty");
let specialtyProfessionalsElement = document.querySelector("#professional");

for(sp of specialties) {
  specialtyElement.innerHTML += `<option value="${sp}">${sp}</option>`;
}
//Escuchar el evento change para cambiar el select de especialidades
specialtyElement.addEventListener("change", (e) => {
  specialtyProfessionalsElement.innerHTML = "";
  let specialityToSearch = e.target.value;
  let specialtyProfessionals = professionals.filter(professional => professional.specialty == specialityToSearch);
  specialtyProfessionals.forEach(pro => {
    specialtyProfessionalsElement.innerHTML += `<option value="${pro.regist}">${pro.name}</option>`;
  });
})




// calcularPosibles(fecha) {
//   let date = new Date(fecha).getTime() / 1000 + (9 * 60 * 60);
//   let posibles = [];
//   for(let i= 0; i < 6; i++) {
//     posibles.push(date + (i * 60 * 60))
//   }
// }
// let users = [];
// if(users.professional = true) {
//   let currentUser =
// }
// let turnos = [];
// // recorrer turnos 
// let turnoDay = [
//   { startTime: 2100000, hour: 9, month: 7, year: 2021, day: 30, client: "Juan Gómez", doctorId: 31231 },
//   { startTime: 2200000, hour: 10},
//   { startTime: 2380000, hour: 12},
//   { startTime: 2080000, hour: 12},
// ]

// // Valores posibles de turno
// let posibles = [1600000, 17, 18, 19]

// if() {
//   //turno tomado
//   <div >Horario ${item.hour} - ${item.hour + 1}</div>
// } else {

// }

//     let oldUser = JSON.parse(localStorage.getItem("users")) || [];

//     let namePatient = document.getElementById('name').value;
//     let email = document.getElementById('email').value;
//     let password = document.getElementById('password').value;
//     let repeatPassword = document.getElementById('repeatPassword').value;
//     let phone = document.getElementById('phone').value;
//     let address = document.getElementById('address').value;
//     let gender = document.getElementById('gender').value;
//     let date = document.getElementById('date').value; //fecha de nacimiento
//     let socSec = document.getElementById('socSec').value;

//     function Patient (namePatient, email, password, phone, gender, date, socSec) {
//       this.namePatient = namePatient;
//       this.email = email;
//       this.password = password;
//       this.phone = phone;
//       this.address = address;
//       this.gender = gender;
//       this.date = date; //fecha de nacimiento
//       this.socSec = socSec;
//   }

//   form.addEventListener('submit', function(e) {
//     e.preventDefault();
//     let user = new Patient (namePatient, email, password, phone, gender, date, socSec);
//     oldUser.push(user);
//     localStorage.setItem('users', JSON.stringify(oldUser));
//   })