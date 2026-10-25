interface Reservacion {
    id: number;
    cliente: string;
    personas: number;
    zona: "Interior" | "Terraza";
}

const reservaciones: Reservacion[] = [
    { id: 1, cliente: "Andrea Flores", personas: 4, zona: "Interior" },
    { id: 2, cliente: "María García", personas: 5, zona: "Terraza" },
    { id: 3, cliente: "Christopher Campos", personas: 6, zona: "Interior" },
    { id: 4, cliente: "Christian Martínez", personas: 3, zona: "Terraza" }
];

reservaciones.push({ id: 5, cliente: "Lissandro Fernández", personas: 7, zona: "Interior" });
reservaciones.unshift({ id: 0, cliente: "Pedro Ramírez", personas: 4, zona: "Terraza" });

console.log(reservaciones, "Lista antes de atender: ", reservaciones.length);
 
const primeraReservacion = reservaciones.shift();
if (primeraReservacion) {
    console.log(`Se atendió la reservacion de ${primeraReservacion.cliente} para ${primeraReservacion.personas} personas.`);
} else {
    console.log("No hay reservaciones pendientes.");
}

const reservacionBuscada = reservaciones.find(reservacion => reservacion.id === 2);
if (reservacionBuscada) {
    console.log(`Reservación encontrada: ${reservacionBuscada.cliente}, Personas: ${reservacionBuscada.personas}, Zona: ${reservacionBuscada.zona}`);
} else {
    console.log("Reservación no encontrada.");
}


const reservacionInexistente = reservaciones.find(reservacion => reservacion.id === 99);
if (reservacionInexistente) {
    console.log(`Reservación encontrada: ${reservacionInexistente.cliente}`);
} else {
    console.log("Reservación no encontrada (Demostracion de caso id inexistente).");
}


//Funcion tipada 
function consultarReservacionesTerraza(lista: Reservacion[]): void {
    const reservacionesFiltradas = lista.filter(reservacion => reservacion.zona === "Terraza" && reservacion.personas >= 5);
    console.log(`Coincidencias producidas por el filtro: ${reservacionesFiltradas.length}`);
    
    if (reservacionesFiltradas.length > 0) {
        console.log("Reservaciones filtradas:");
        reservacionesFiltradas.forEach(reservacion => {
            console.log(` ${reservacion.cliente}: ${reservacion.personas} personas, Zona: ${reservacion.zona}`);
        });
    } else {
        console.log("No hay reservaciones que cumplan con los criterios de filtrado.");
    }
}


console.log("Primera ejecución");
const cantidadAntesFiltrar = reservaciones.length;
consultarReservacionesTerraza(reservaciones);
const cantidadDespuesFiltrar = reservaciones.length;

console.log("Segunda ejecución");
consultarReservacionesTerraza([]);

//estado final
console.log("Comprobación del estado");
console.log("Reservaciones pendientes actuales:", reservaciones);
console.log(`Cantidad de reservaciones pendientes: ${reservaciones.length}`);
console.log(`Comparación: Antes de filtrar ${cantidadAntesFiltrar} y Después de filtrar ${cantidadDespuesFiltrar} Se comprueba que el filtro no elimina registros.`);
