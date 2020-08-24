import {Component, OnInit} from '@angular/core';
import {ListChinois} from './listChinois';
import {SystemChinois} from './systemChinois';
import {euclidextend, resteModulo} from './ResteModulo';


@Component({
  selector: 'app-restechinois',
  templateUrl: './restechinois.component.html',
  styleUrls: ['./restechinois.component.scss']
})

export class RestechinoisComponent implements OnInit {

  constructor() {
    this.list = new SystemChinois();
  }

  list: SystemChinois;
  modulo = 1;
  multiply = '';
  test = 0;


  ngOnInit(): void {
    this.list.push(ListChinois.builder().reste(2).modulo(17).build());
    this.list.push(ListChinois.builder().reste(3).modulo(19).build());
    this.list.push(ListChinois.builder().reste(5).modulo(7).build());
    this.list.push(ListChinois.builder().reste(1).modulo(3).build());
    this.calculModulo();
  }

  addCongruence(): void {
    this.list.push(ListChinois.builder().reste().modulo(1).build());

  }

  calculModulo(): void {
    this.modulo = this.list.modulo();
    this.multiply = this.list.list.map(r => r.modulo.toString()).reduce((a, b) => a + '*' + b, '').substring(1);
  }



  affectReste(event, index: number): void {
    const newChinois = ListChinois.builder().reste(Number(event.target.value)).modulo(this.list[index].modulo).build();
    this.list.splice(index, 1, newChinois);
    this.calculModulo();
  }

  affectModulo(event, index: number): void {
    const newChinois = ListChinois.builder().reste(this.list[index].reste).modulo(Number(event.target.value)).build();
    this.list.list.splice(index, 1, newChinois);
    this.calculModulo();
  }

  moduleMutiply(index: number): string {
    return this.list.list.map((r) => r.modulo.toString())
      .filter((r, index1) => index !== index1)
      .reduce((a, b) => a + '*' + b, '')
      .substring(1);
  }

  module = (index: number) => {
    return this.list.list.map((r) => r.modulo).filter((r, index1) => index !== index1).reduce((a, b) => a * b, 1);
  }


  euclide = (modulo: number, imodulo: number) => {
    return Math.trunc(imodulo / resteModulo(modulo, imodulo));
  }

  resteEuclide = (modulo: number, imodulo: number) => {
    return (imodulo - (this.euclide(modulo, imodulo) * resteModulo(modulo, imodulo)));
  }

  resteModulo = (modulo: number, modulo2: number) => {
    return resteModulo(modulo, modulo2);
  }

  euclidextend = (modulo: number, modulo2: number) => {
    return euclidextend(modulo, modulo2);
  }

  somme = (list1: SystemChinois, modulo: number) => {
    let sum = 0;

    sum = list1.list.reduce((result, list) => {
      return result + list.reste * (modulo / list.modulo) * euclidextend(resteModulo(modulo, list.modulo), list.modulo)[1];
    }, 0);


    return sum;
  }

  reduction = (list: SystemChinois, modulo: number) => {
    return this.somme(list, modulo) - Math.trunc(this.somme(list, modulo) / modulo) * modulo;
  }
}



