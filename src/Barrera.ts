import { IBarrera } from "./interfaces";

class Barrera implements IBarrera {
    elevar(): void {
        console.log("Elevado")
    }

}

export default Barrera;