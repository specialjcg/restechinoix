import {Chinois, ListChinois} from './listChinois';

export class SystemChinois {
  list: ListChinois[] = [];


  modulo = () => {
    return this.list.map(r => r.modulo).reduce((a, b) => a * b, 1);
  }

  push = (chinois: Chinois) => {
    this.list.push(chinois);
  }


  splice = (index: number, position: number, newChinois: Chinois) => {
    this.list.splice(index, position, newChinois);
  }
}
