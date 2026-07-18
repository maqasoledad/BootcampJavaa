class ReporteCiudadano {
    constructor(direccion, fecha) {
        this.direccion = direccion;
        this.fecha = fecha;
    }
    mostrarInfo() {
        console.log(`Dirección: ${this.direccion}, Fecha: ${this.fecha}`);
    }
}

class ReporteLuminaria extends ReporteCiudadano {
    constructor(direccion, fecha, tipo) {
        super(direccion, fecha);
        this.tipo = tipo;
    }
    mostrarInfo() {
        super.mostrarInfo();
        console.log(`Tipo de luminaria: ${this.tipo}`);
    }
}

class ReporteBache extends ReporteCiudadano {
    constructor(direccion, fecha, tamanio) {
        super(direccion, fecha);
        this.tamanio = tamanio;
    }
    mostrarInfo() {
        super.mostrarInfo();
        console.log(`Tamaño del bache: ${this.tamanio}`);
    }
}
