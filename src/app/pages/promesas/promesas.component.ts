import { Component, OnInit } from '@angular/core';
import { resolve } from 'chart.js/helpers';

@Component({
  selector: 'app-promesas',
  templateUrl: './promesas.component.html',
  styles: ``
})
export class PromesasComponent implements OnInit{

  constructor(){

  }

  ngOnInit(): void  {
    // const promesa = new Promise( ( resolve ) => {
      
    //   resolve('Hola mundo');

    // });

    // promesa.then( (mensaje)=> {
    //   console.log(mensaje);
    // });

    this.getUsuarios().then( usuarios => {
      console.log(usuarios);
    });

  }

  getUsuarios() {

    const promesa = new Promise( resolve => {
      fetch('https://reqres.in/api/users')
      .then( resp => resp.json())
      .then( body => resolve(body.data));
    });

    return promesa;
  }


}
