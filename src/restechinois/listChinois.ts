export interface Chinois {
  reste: number;
  modulo: number;

}


export class ListChinoisBuilder {
  private readonly listChinois: Chinois;

  constructor() {
    this.listChinois = {
      reste: 0,
      modulo: 0
    };
  }

  reste(reste?: number): ListChinoisBuilder {
    if (reste !== undefined) {

      this.listChinois.reste = reste;
    }
    return this;
  }

  modulo(modulo?: number): ListChinoisBuilder {
    if (modulo !== undefined) {
      this.listChinois.modulo = modulo;
    }
    return this;
  }

  build(): Chinois {
    while (this.getReste() < 0) {
      this.reste(this.getReste() + this.getModulo());
    }
    return this.listChinois;
  }

  getModulo(): number {
    return this.listChinois.modulo;
  }

  getReste(): number {
    return this.listChinois.reste;
  }
}

export class ListChinois {

  readonly reste: number;
  readonly modulo: number;

  constructor(builder: ListChinoisBuilder) {
    this.reste = builder.getReste();

    this.modulo = builder.getModulo();


  }

  static builder(): ListChinoisBuilder {
    return new ListChinoisBuilder();
  }


}
