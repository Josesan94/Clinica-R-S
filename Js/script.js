/*
.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.
._._._._._._._._._._._._._._._._._.
            CALENDARIO
.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.
._._._._._._._._._._._._._._._._._.
*/

let nav = 0; //Variable nav para saber en que mes estoy, 0 es el mes actual
const calendar = document.getElementById("calendar");

const weekdays = [
  "domingo",
  "lunes",
  "martes",
  "miércoles",
  "jueves",
  "viernes",
  "sábado",
];



function initButtons() {
  document.getElementById("nextButton").addEventListener("click", () => {
    nav++;
    load();
  });
  document.getElementById("backButton").addEventListener("click", () => {
    nav--;
    load();
  });
}

function load() {
  const dt = new Date();

  if (nav != +0) {
    dt.setMonth(new Date().getMonth() + nav); // si nav!=0 se lo suma al atributo "month" para visualizar otro
  }

  const day = dt.getDate();
  const month = dt.getMonth();
  const year = dt.getFullYear(); //se toma dia, mes y año de la constante "dt"

  const firstDayOfMonth = new Date(year, month, 1);
  const daysInMonth = new Date(year, month + 1, 0).getDate(); //el ultimo dia del mes actual va a ser el dia 0 del mes que le sigue

  const dateString = firstDayOfMonth.toLocaleDateString("es-ES", {
    weekday: "long",
    year: "numeric",
    month: "numeric",
    day: "numeric",
  }); //del atributo "weekday" saca el dia de la semana del objeto Date que ya viene definido.

  const paddingDays = weekdays.indexOf(dateString.split(", ")[0]); //esto lo saca de hacer un console log de "dateString" y ver que justo antes del ", " dice el dia, entonces busca en el vector weekdays cual el el index del elemento que coincide

  document.getElementById("monthDisplay").innerText = `${dt.toLocaleDateString(
    "es-ES",
    { month: "long" }
  )} ${year}`; //El titulo del mes que figura en rojo arriba del calendario.

  calendar.innerHTML = ""; //limpia el calendario previo (si hubiera) antes de armarlo de nuevo.

  for (let i = 1; i <= paddingDays + daysInMonth; i++) {
    //hasta que el contador llegue al numero de dias del mes + los dias de padding del mes anterior
    const daySquare = document.createElement("div");
    daySquare.classList.add("day"); //crea el cuadradito del dia haciendo un "div" y agregando la clase "day" definida en el css

    if (i > paddingDays) {
      daySquare.innerText = i - paddingDays; //crea el numero del dia en el calendario

      if (i - paddingDays === day && nav === 0) {
        daySquare.classList.add("currentDay"); //identifica el dia de hoy si estamos en el corriente mes y le agrega esa id para que tenga estilo distinto.
      }

      if (i - paddingDays >= day && nav === 0) {
        daySquare.setAttribute("data-bs-toggle", "modal");
        daySquare.setAttribute("data-bs-target", "#exampleModal");
        daySquare.classList.add("possibleAp");
        daySquare.id = `${i - paddingDays}/${month}/${year}`;
      }
    } else {
      daySquare.classList.add("padding"); //si i no es mayor que padding se le agrega esta clase para hacer los cuadrados grises
    }

    calendar.appendChild(daySquare); //pone todos los dias dentro de calendario.
  }
}


allAppointments();
initButtons();
load();

/*
.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.
._._._._._._._._._._._._._._._._._.

        SISTEMA DE TURNOS

.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.
._._._._._._._._._._._._._._._._._.
*/

function Patient(name, mail, password, phone, gender, date, socSec) {
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

function Appointment(name1, name2, time, day, month, year, symptoms) {
  this.doctor = name1;
  this.pacient = name2;
  this.time = time;
  this.day = day;
  this.month = month;
  this.year = year;
  this.symptoms = symptoms; //texto pedido en los requisitos.
}



let professionals = [];
professionals.push(
  new Professional(
    "Juan Gómez",
    "juangomez@gmail.com",
    "1234",
    "3814568278",
    "345678",
    "Clínica"
  )
);
professionals.push(
  new Professional(
    "Lucía Juárez",
    "juarezlucia@gmail.com",
    "1234",
    "3814489827",
    "825305",
    "Clínica"
  )
);
professionals.push(
  new Professional(
    "Sofía Fernández",
    "sfernandez@gmail.com",
    "1234",
    "3815678278",
    "338726",
    "Gastroenterología"
  )
);
professionals.push(
  new Professional(
    "Martín Juárez",
    "juarezmartin@gmail.com",
    "1234",
    "3814581099",
    "836472",
    "Gastroenterología"
  )
);
professionals.push(
  new Professional(
    "Martina Díaz",
    "ginecologadiaz@gmail.com",
    "1234",
    "3815711092",
    "332458",
    "Ginecología"
  )
);
professionals.push(
  new Professional(
    "María Faoto",
    "faotomaria@gmail.com",
    "1234",
    "3814489827",
    "825305",
    "Ginecología"
  )
);
professionals.push(
  new Professional(
    "Gabriel Gutiérrez",
    "ggutierrez@gmail.com",
    "1234",
    "3815678278",
    "368678",
    "Odontología"
  )
);
professionals.push(
  new Professional(
    "Luisa Guerra",
    "luisamedica@gmail.com",
    "1234",
    "3814489623",
    "675305",
    "Odontología"
  )
);
professionals.push(
  new Professional(
    "Emilia Luna",
    "lunaemilia@gmail.com",
    "1234",
    "3814689278",
    "356078",
    "Otorrinolaringología"
  )
);
professionals.push(
  new Professional(
    "Andrea Pérez",
    "perezandrea@gmail.com",
    "1234",
    "3816789827",
    "825532",
    "Otorrinolaringología"
  )
);
professionals.push(
  new Professional(
    "Pablo Espeche",
    "pespeche@gmail.com",
    "1234",
    "3816568290",
    "343378",
    "Pediatría"
  )
);
professionals.push(
  new Professional(
    "Amanda Mercado",
    "amandamercado@gmail.com",
    "1234",
    "3816788777",
    "725605",
    "Pediatría"
  )
);

function allAppointments() {
  const day = new Date().getDate();
  const month = new Date().getMonth();
  const year = new Date().getFullYear(); //obtengo la fecha de hoy
  let posibles = [];

  let diasPosibles =
    new Date(year, month + 1, 0).getDate() - new Date().getDate(); //obtengo la cantidad de dias que quedan disponibles con turnos

  for (i = 0; i <= diasPosibles; i++) {
    for (let j = 0; j < 4; j++) {
      diaTurno = new Date(year, month, day + i, 9 + j).toLocaleDateString(
        "es-ES",
        {
          year: "numeric",
          month: "numeric",
          day: "numeric",
          hour: "numeric",
        }
      );
      posibles.push(diaTurno);
    }
  }
  console.log(`posibles: ${posibles}`)
  localStorage.setItem("turnos", JSON.stringify(posibles));
}



localStorage.setItem("professionals", JSON.stringify(professionals));

professionals = JSON.parse(localStorage.getItem("professionals")) || [];
let specialties = [];

//Generar el select con las especialidades de los médicos
professionals.forEach((professional) => {
  if (!specialties.find((sp) => sp == professional.specialty)) {
    specialties.push(professional.specialty);
  }
});

let specialtyElement = document.querySelector("#specialty");
let specialtyProfessionalsElement = document.querySelector("#professional");

for (sp of specialties) {
  specialtyElement.innerHTML += `<option value="${sp}">${sp}</option>`;
}

//Escuchar el evento change para cambiar el select de especialidades
specialtyElement.addEventListener("change", (e) => {
  specialtyProfessionalsElement.innerHTML = "";
  let specialityToSearch = e.target.value;
  let specialtyProfessionals = professionals.filter(
    (professional) => professional.specialty == specialityToSearch
  );
  specialtyProfessionals.forEach((pro) => {
    specialtyProfessionalsElement.innerHTML += `<option value="${pro.regist}">${pro.name}</option>`;
  });
});

//Escuchar el click en uno de los días e identificarlo para desplegar el select con los turnos del día especifico
let hourAp = document.getElementById("hourAp");
document.querySelectorAll(".possibleAp").forEach((el) => {
  el.addEventListener("click", (e) => {
    let fecha = e.target.getAttribute("id");
    console.log("Se ha clickeado el dia: " + fecha);
    let turnos = JSON.parse(localStorage.getItem("turnos"));
    let turnosDelDia = turnos.filter(
      (DateConstructor) =>
        DateConstructor.toLocaleDateString("es-ES", {
          year: "numeric",
          month: "numeric",
          day: "numeric",
        }) == fecha
    );
    console.log(turnosDelDia);
    hourAp.forEach((app) => {
      hourApElement.innerHTML += `<option value="${app.hour}">${app.hour}</option>`;
    });
  });
});

// function saveAppointment {
// //crear objeto turno y eliminar ese turno del array turnos

// }

// function appointmentCards {
//  // crear las cards tanto para el medico como para el paciente con los turnos correspondientes
// }

// function appontmentsLeft {
//   //que muestre en cada cuadradito la cantidad de turnos que quedan libres para ese dia
// }





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
