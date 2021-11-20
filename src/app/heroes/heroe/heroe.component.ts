import { Component } from "@angular/core";


@Component({
    selector: 'app-heroe',
    templateUrl: 'heroe.Component.html'
})
export class HeroeComponent{   //este componente hay que incluirlo en el app.module
nombre: string ='Iroman';
edad: number = 45;

get nombreCapitalizado(): string{
    return this.nombre.toLocaleUpperCase();
}

obtenerNombre(): string{
    return `${this.nombre} - ${this.edad}`;
    // return this.nombre + ' - ' + this.edad.toString;
}

cambiarNombre(): void{
    this.nombre = 'Spaiderman';
}


cambiarEdad(): void{
    this.edad = 60;
}

}