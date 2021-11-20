import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
 })
export class ListadoComponent  {

  heroes: string[] = ['Spiderman', 'Iroman','Hulk','thor'];
  heroeBorrado: string ='';

    borrarHeroe(){
      console.log('Borrando.... ');
     this.heroeBorrado = this.heroes.shift() || '';
     // const heroeBorrado = this.heroes.shift();
     // console.log(heroeBorrado);
    }
 /* implements OnInit
 constructor() {
    console.log('constructor');
   }

  ngOnInit(): void {
    console.log('ngOnInit');
  }
*/
}
