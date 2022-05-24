import { IEstacionamiento, ILectorDeTarjeta } from "./interfaces";

class Estacionamiento extends IEstacionamiento {
    verificarCodigoTarjeta(codigoTarjeta: string, lectorConTarjeta: ILectorDeTarjeta): void {
        console.log("123")
    }
}

export default Estacionamiento;