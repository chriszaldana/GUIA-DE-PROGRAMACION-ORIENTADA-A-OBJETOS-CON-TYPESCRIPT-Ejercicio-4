class Cuenta {
  private cantidad: number;

  constructor(
      private nombre: string,
      cantidad: number,
      private tipoCuenta: string,
      private numeroCuenta: string
  ) {
      this.cantidad = cantidad;

      
      if (cantidad < 5.00) {
          console.error("El valor a depositar debe ser mayor a $5.00");
      } else {
          console.log(`Se ha depositado correctamente: $${cantidad}`);
      }
  }

  
  depositar(cantidad: number): void {
      
      if (cantidad < 5.00) {
          console.error("El valor a depositar debe ser mayor a $5.00");
      } else {
          this.cantidad += cantidad;
          console.log(`Se ha depositado correctamente: $${cantidad}`);
      }
  }

  
  retirar(valor: number): void {
     
      if (this.cantidad >= valor && valor >= 5.00) {
          this.cantidad -= valor;
          console.log(`Se ha retirado: $${valor}. Saldo restante: $${this.cantidad}`);
      } else if (valor < 5.00) {
          console.error("El retiro debe ser mayor a $5.00");
      } else {
          console.error("No hay suficiente dinero en la cuenta.");
      }
  }

 
  mostrarDatos(): void {
      console.log("Nombre:", this.nombre);
      console.log("Tipo de cuenta:", this.tipoCuenta);
      console.log("Número de cuenta:", this.numeroCuenta);
  }
}

// Ejemplo de uso
const miCuenta = new Cuenta("Juan Pérez", 10.00, "Cuenta de Ahorros", "123456789");

// Depositar
miCuenta.depositar(20.00);

// Retirar
miCuenta.retirar(7.00);

// Mostrar datos de la cuenta
miCuenta.mostrarDatos();
