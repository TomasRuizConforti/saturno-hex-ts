import { IAcceso } from "./interfaces";

class Acceso implements IAcceso {
    grabarUltimoAcceso(codigoTarjeta: string): void {
        console.log("123455");
    }
}

export default Acceso;