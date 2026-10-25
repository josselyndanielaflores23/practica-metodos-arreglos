interface SolicitudPrestamo {
    id: number
    estudiante: string
    libro: string
    categoria: string

} 

const solicitudes: SolicitudPrestamo[] = [
    { id: 1, estudiante: "Juan Pérez", libro: "Introducción a la Programación", categoria: "Tecnología"},
    { id: 2, estudiante: "María García", libro: "Historia del Arte", categoria: "Humanidades"},
    { id: 3, estudiante: "Carlos López", libro: "Machine Learning Fundamentals", categoria: "Tecnología"}
];

solicitudes.push({ id: 4, estudiante: "Ana Martínez", libro: "Física Cuántica", categoria: "Ciencia" });
solicitudes.unshift({ id: 0, estudiante: "Pedro Ramírez", libro: "Matemáticas Avanzadas", categoria: "Ciencia" });
console.log(`Lista antes de atender: ${solicitudes.length}`);

const primeraSolicitud = solicitudes.shift();
console.log(`Primera solicitud atendida: ${primeraSolicitud?.estudiante}`);
if (primeraSolicitud) {
    console.log(`Estudiante: ${primeraSolicitud.estudiante}, Libro: ${primeraSolicitud.libro}`);
} else {
    console.log("No hay solicitudes para atender.");
}
console.log(`Lista despues de atender: ${solicitudes.length}`);

const solicitudBuscada = solicitudes.find(solicitud => solicitud.id === 2);
if (solicitudBuscada) {
    console.log(`Solicitud encontrada: ${solicitudBuscada.estudiante}`);
} else {
    console.log("Solicitud no encontrada.");
}

const solicitudesTecnologia = solicitudes.filter(solicitud => solicitud.categoria === "Tecnología");
console.log("Solicitudes de Tecnología:");
solicitudesTecnologia.forEach(solicitud => {
    console.log(` ${solicitud.estudiante}: ${solicitud.libro}`);
}); 

console.log("Arreglo final de solicitudes:");
console.log(solicitudes);
console.log(`Cantidad de solicitudes pendientes: ${solicitudes.length}`);

const cantidadSolicitudesOriginal = 5; 
console.log(`Cantidad de solicitudes originales: ${cantidadSolicitudesOriginal}`);
console.log(`Cantidad de solicitudes después del filtro: ${solicitudes.length}`);

// El filtro no retiro ninguna solicitud del arreglo original, lo unico que hizo fue filtrar las solicitudes segun la categoria de tecnologia
//y mostrar solo esas solicitudes, pero el arreglo original se mantiene igual, con 4 solicitudes.



