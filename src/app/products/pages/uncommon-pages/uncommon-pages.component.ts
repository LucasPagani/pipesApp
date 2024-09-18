import { Component } from '@angular/core';
import { interval, tap } from 'rxjs';

@Component({
  selector: 'app-uncommon-pages',
  templateUrl: './uncommon-pages.component.html',
  styleUrl: './uncommon-pages.component.css'
})
export class UncommonPagesComponent {

  // i18n Select

  public name: string = 'Lucas';
  public gender:  'male' | 'female'= 'male';
  public invitationMap = {
    'male' : 'invitarlo',
    'female': 'invitarla'
  }


  changeClient():void{
    this.name = 'Rocío';
    this.gender = 'female';
  }

  //i18nPlural

  public clientes: String[]=['Lucas','Rocio','matias','Malena','Cecilia','Mariano','Sebastian'];
  public clientsMap = {
    '=0': 'no tenemos ningún cliente esperando',
    '=1':'tenemos un cliente en espera',
    '=2': 'tenemos dos clientes en espera',
    'other' : 'tenemos # clientes esperando'
  }

  deleteClient(): void
{
  this.clientes.shift();
}

//keyValue Pipe

public person = {
  name: 'Lucas',
  age: 38,
  address: 'Madrid,España'

}

//async Pipe

public myObservableTimer= interval(2000).pipe(
  tap( value => console.log('tap:', value))
);

public promiseValue: Promise<string> = new Promise( (resolve, reject) => {
  setTimeout(() => {
    resolve (' Tenemos data en la promesa');
  }, 3500)
}

)

}
