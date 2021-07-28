//Calendario

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

  const paddingDays = weekdays.indexOf(dateString.split(", ")[0]); //esto lo saca de hacer un console log de "dateString" y ver que justo antes del ", " dice el dia (pero no entiendo como saca un numero de esto, osea saca la cantidad de dias de la semana que pertenecen al mes anterior usando el string "weekdays" que defini arriba) ??????????

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



//Sistema de turnos



function Patient (name, mail, password, phone, gender, birth, socSec) {
    this.name = name;
    this.mail = mail;
    this.password = password;
    this.phone = phone;
    this.address = addressñ
    this.gender = gender;
    this.birth = birth; //fecha de nacimiento
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

