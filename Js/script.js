/*
.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.
._._._._._._._._._._._._._._._._._.

            CALENDARIO

.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.
._._._._._._._._._._._._._._._._._.
*/

//Variable nav para saber en que mes estoy, 0 es el mes actual
let nav = 0;
let clicked = null;

//traer eventos anteriores de localStorage o si no va a ser tring en blanco.
let events = localStorage.getItem("events")
  ? JSON.parse(localStorage.getItem("events"))
  : [];


const calendar = document.getElementById("calendar");
const newEventModal = document.getElementById("newEventModal");
const deleteEventModal = document.getElementById("deleteEventModal");
const backDrop = document.getElementById("modalBackDrop");
const eventTitleInput = document.getElementById("eventTitleInput");
const weekdays = [
  "domingo",
  "lunes",
  "martes",
  "miércoles",
  "jueves",
  "viernes",
  "sábado",
];

function openModal(date) {
  clicked = date;

  const eventForDay = events.find((e) => e.date === clicked);
  if (eventForDay) {
    document.getElementById("eventText").innerText = eventForDay.title;
    deleteEventModal.style.display = "block"; //si existe un evento se abre la ventana para borrarlo
  } else {
    newEventModal.style.display = "block"; //si no existe evento se abre la ventana para agregar uno nuevo
  }

  backDrop.style.display = "block"; //el fondo negro se abre siempre
}

function load() {
  const dt = new Date();

  if (nav != +0) {
    dt.setMonth(new Date().getMonth() + nav); // si nav!=0 se lo suma al atributo "month" para visualizar otro
  }

  const day = dt.getDate();
  const month = dt.getMonth();
  const year = dt.getFullYear(); //se toma dia, mes y ano de la constante "dt"

  const firstDayOfMonth = new Date(year, month, 1);
  const daysInMonth = new Date(year, month + 1, 0).getDate();//el ultimo dia del mes actual va a ser el dia 0 del mes que le sigue

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

    const dayString = `${month + 1}/${i - paddingDays}/${year}`;

    if (i > paddingDays) {
      daySquare.innerText = i - paddingDays; //crea el numero del dia en el calendario
      const eventForDay = events.find((e) => e.date === dayString); //no se que es "e"???????????

      if (i - paddingDays === day && nav === 0) {
        daySquare.id = "currentDay"; //identifica el dia de hoy si estamos en el corriente mes y le agrega esa id para que tenga estilo distinto
      }

      if (eventForDay) { 
        const eventDiv = document.createElement("div");
        eventDiv.classList.add("event"); //crea la caja del evento y le da formato
        eventDiv.innerText = eventForDay.title; //le pone el nombre que saco del input del modal
        daySquare.appendChild(eventDiv);  //y pone la cajita dentro del dia que corresponde
      }

      daySquare.addEventListener("click", () => openModal(dayString)); // entiendo lo que hace, no entiendo la sistaxis??????
    } else {
      daySquare.classList.add("padding"); //si i no es mayor que padding se le agrega esta clase para hacer los cuadrados grises
    }

    calendar.appendChild(daySquare); //pone todos los dias dentro de calendario.
  }
}

function closeModal() {
  eventTitleInput.classList.remove("error");
  newEventModal.style.display = "none";
  deleteEventModal.style.display = "none";
  backDrop.style.display = "none";//le pone display:none a todo para que desaparesca
  eventTitleInput.value = ""; // y vacia el input para la proxima vez
  clicked = null;
  load(); //carga el calendario con los cambios que se hicieron (o no)
}

function saveEvent() {
  if (eventTitleInput.value) {
    eventTitleInput.classList.remove("error");

    events.push({
      date: clicked, //este renglon no entiendooo??????????
      title: eventTitleInput.value,
    });
    localStorage.setItem("events", JSON.stringify(events));
    closeModal();
  } else {
    eventTitleInput.classList.add("error");
  }
}

function deleteEvent() {
  events = events.filter((e) => e.date !== clicked);
  localStorage.setItem("events", JSON.stringify(events));
  closeModal();
}

function initButtons() {
  document.getElementById("nextButton").addEventListener("click", () => {
    nav++;
    load();
  });
  document.getElementById("backButton").addEventListener("click", () => {
    nav--;
    load();
  });

  document.getElementById("saveButton").addEventListener("click", saveEvent);
  document.getElementById("cancelButton").addEventListener("click", closeModal);

  document
    .getElementById("deleteButton")
    .addEventListener("click", deleteEvent);
  document.getElementById("closeButton").addEventListener("click", closeModal);
}

initButtons();
load();

/*
.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.
._._._._._._._._._._._._._._._._._.

            CALENDARIO

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

let professional1 = new Professional("Juan Gómez","juangomez@gmail.com","1234","3814568278","345678","Clínica");
let professional2 = new Professional("Lucía Juárez","juarezlucia@gmail.com","1234","3814489827","825305","Clínica");
let professional3 = new Professional("Sofía Fernández","sfernandez@gmail.com","1234","3815678278","338726","Gastroenterología");
let professional4 = new Professional("Martín Juárez","juarezmartin@gmail.com","1234","3814581099","836472","Gastroenterología");
let professional5 = new Professional("Martina Díaz","ginecologadiaz@gmail.com","1234","3815711092","332458","Ginecología");
let professional6 = new Professional("María Faoto","faotomaria@gmail.com","1234","3814489827","825305","Ginecología");
let professional7 = new Professional("Gabriel Gutiérrez","ggutierrez@gmail.com","1234","3815678278","368678","Odontología");
let professional8 = new Professional("Luisa Guerra","luisamedica@gmail.com","1234","3814489623","675305","Odontología");
let professional9 = new Professional("Emilia Luna","lunaemilia@gmail.com","1234","3814689278","356078","Otorrinolaringología");
let professional10 = new Professional("Andrea Pérez","perezandrea@gmail.com","1234","3816789827","825532","Otorrinolaringología");
let professional11 = new Professional("Pablo Espeche","pespeche@gmail.com","1234","3816568290","343378","Pediatría");
let professional12 = new Professional("Amanda Mercado","amandamercado@gmail.com","1234","3816788777","725605","Pediatría");

localStorage.setItem("1", JSON.stringify(professional1));
localStorage.setItem("2", JSON.stringify(professional2));
localStorage.setItem("3", JSON.stringify(professional3));
localStorage.setItem("4", JSON.stringify(professional4));
localStorage.setItem("5", JSON.stringify(professional5));
localStorage.setItem("6", JSON.stringify(professional6));
localStorage.setItem("7", JSON.stringify(professional7));
localStorage.setItem("8", JSON.stringify(professional8));
localStorage.setItem("9", JSON.stringify(professional9));
localStorage.setItem("10", JSON.stringify(professional10));
localStorage.setItem("11", JSON.stringify(professional11));
localStorage.setItem("12", JSON.stringify(professional12));


let specialty = getElementById('specialty');

let professional = getElementById('professional');


function loadSprecialtys() {
  
}

function loadProfessionals() {

  for(i=0 ; ; i++) {
    
    let sprecialtyName = JSON.parse(localStorage.getItem(`${i}`)).sprecialty

    if (specialtyName == specialty.innerText) {
      const optionProfessional = document.createElement("option");
      optionProfessional.innerText = JSON.parse(localStorage.getItem(`${i}`)).name;
  
      professional.appendChild(optionProfessional);
    }
  
  }

}