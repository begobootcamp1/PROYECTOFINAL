import "./CalendarioEvento.css";
import Boton from "../Boton/Boton";

export default function CalendarioEvento() {}

// const meses = [
//   "Enero",
//   "Febrero",
//   "Marzo",
//   "Abril",
//   "Mayo",
//   "Junio",
//   "Julio",
//   "Agosto",
//   "Septiembre",
//   "Octubre",
//   "Noviembre",
//   "Diciembre",
// ];
// let currentDate = new Date(); //coge la fecha del ordenador como referencia
// let currentDay = currentDate.getDate(); //nos devuelve el día de la semana
// let calendarioMes = currentDate.getMonth();
// let calendarioAño = currentDate.getFullYear();
// //let diaEvento = document.getElementById({ diaEvento });
// //let mes = document.getElementById({ mesEvento });
// //let año = document.getElementById({ añoEvento });
// let prevMonthDOM = document.getElementById("prev-mes");
// let nextMonthDOM = document.getElementById("next-mes");

// mes.textContext = meses[calendarioMes];
// año.textContext = calendarioAño.toString();

// prevMonthDOM.addEventListener("click", () => lastmonth());
// nextMonthDOM.addEventListener("click", () => nextmonth());

// writeMes(calendarioMes);
// function writeMes(calendarioMes) {
//   dia.textContent = "";
//   for (let i = startDay(); i > 0; i--) {
//     {
//       dia.innerHTML += `
//         <div className="calendarioDia calendarItem lastDays">
//           ${getTotalDays(mes - 1) - (i - 1)}
//         </div>`;
//     }
//     for (let i = 1; i <= getTotalDays(calendarioMes); i++) {
//       if (i === currentDay) {
//         dia.innerHTML += `
//           <div className="calendarioDia calendarItem calendarToday">${i}</div>
//         `;
//       } else {
//         dia.innerHTML += `<div className="calendarioDia calendarItem">${i}</div>`;
//       }
//     }
//   }
// }
// function getTotalDays(calendarioMes) {
//   if (calendarioMes === -1) {
//     calendarioMes === 11;
//   }
//   if (
//     calendarioMes === 0 ||
//     calendarioMes === 4 ||
//     calendarioMes === 6 ||
//     calendarioMes === 7 ||
//     calendarioMes === 9 ||
//     calendarioMes === 11
//   ) {
//     return 31;
//   } else if (
//     calendarioMes === 3 ||
//     calendarioMes === 5 ||
//     calendarioMes === 8 ||
//     calendarioMes === 10
//   ) {
//     return 30;
//   } else {
//     return bisiesto() ? 29 : 28;
//   }
// }

// function bisiesto() {
//   return (
//     (calendarioAño % 100 !== 0 && calendarioAño % 4 === 0) ||
//     calendarioAño % 400 === 0
//   );
// }
// function startDay() {
//   let start = new Date(calendarioAño, calendarioMes, 1);
//   return start.getDay() - 1 === -1 ? 6 : start.getDay() - 1;
// }
// function lastmonth() {
//   if (calendarioMes !== 0) {
//     calendarioMes--;
//   } else {
//     calendarioMes = 11;
//     calendarioAño--;
//   }
//   setNewDate();
// }
// function nextmonth() {
//   if (calendarioMes !== 11) {
//     calendarioMes++;
//   } else {
//     calendarioMes = 0;
//     calendarioAño++;
//   }
//   setNewDate();
// }
// function setNewDate() {
//   currentDate.setFullYear(calendarioAño, calendarioMes, currentDay);
//   mes.textContent = meses[calendarioMes];
//   año.textContent = calendarioAño.toString();
//   writeMes(calendarioMes);
//   dia.textContent = "";
// }

// export default function CalendarioEvento() {
//   return (
//     <>
//       <div className="container">
//         <div>
//           <h1 className="titulo">Calendario Evento</h1>
//         </div>

//         <div className="calendario">
//           <div className="calendarioInfo">
//             {/* flechas con caracteres unicode */}
//             <div className="calendarioPrev" id="prev-mes">
//               &#9664;
//             </div>
//             <div className="calendarioMes" id="mes"></div>
//             <div className="calendarioAño" id="año"></div>
//             <div className="calendarioNext" id="next-mes">
//               &#9654;
//             </div>
//           </div>

//           <div className="calendarioSemana">
//             <div className="calendarioDia calendarioItem">Lunes</div>
//             <div className="calendarioDia calendarioItem">Martes</div>
//             <div className="calendarioDia calendarioItem">Miércoles</div>
//             <div className="calendarioDia calendarioItem">Jueves</div>
//             <div className="calendarioDia calendarioItem">Viernes</div>
//             <div className="calendarioDia calendarioItem">Sábado</div>
//             <div className="calendarioDia calendarioItem">Domingo</div>
//           </div>

//           {/* aquí escribo todos los días de la semana */}
//           <div className="calendarioFechas" id="fechas"></div>
//         </div>

//         <script src="js/scripts-dist.js"></script>
//       </div>
//     </>
//   );
// }
