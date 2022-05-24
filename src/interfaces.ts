export abstract class ILectorDeTarjeta {
  verificarCodigoTarjeta(verificarCodigoTarjeta: any) {
    throw new Error("Method not implemented.");
  }
  constructor(protected readonly estacionamiento: IEstacionamiento) {}
  abstract recibirTarjeta(): void;
  abstract devolverTarjeta(): void;
  abstract mostrarMensajeError(): void;
  abstract mostrarMensajeExito(): void;
}

export abstract class IEstacionamiento {
  constructor(
    protected readonly acceso: IAcceso,
    protected readonly barrera: IBarrera
  ) {}
  abstract verificarCodigoTarjeta(
    codigoTarjeta: string,
    lectorConTarjeta: ILectorDeTarjeta
  ): void;
}

export interface IAcceso {
  grabarUltimoAcceso(codigoTarjeta: string): void;
}

export interface IBarrera {
  elevar(): void;
}
