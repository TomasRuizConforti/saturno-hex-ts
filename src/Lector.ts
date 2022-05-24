import { ILectorDeTarjeta } from "./interfaces";

class Lector extends ILectorDeTarjeta {
    recibirTarjeta(): void {
        console.log("Recibi tarjeta");
        this.estacionamiento.verificarCodigoTarjeta("123", this)
    }
    devolverTarjeta(): void {
        console.log("Devolvi tarjeta");
    }
    mostrarMensajeError(): void {
        console.log("Error");
    }
    mostrarMensajeExito(): void {
        console.log("Exito");
    }
}

export default Lector;