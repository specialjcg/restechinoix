export const resteModulo = (modulo: number, imodulo: number) => {
  const division = modulo / imodulo;
  const reste = Math.trunc(division / imodulo) * imodulo;
  return division - reste;
};

export const euclidextend = (a: number, b: number) => {
const adeb = a;
const bdeb = b;
let x = 1;
let xx = 0;
let y = 0;
let yy = 1;
while (b !== 0) {
    const q = Math.trunc(a / b);
    let reste;
    reste = a - q * b;
    let div;
    div = a;
    a = b;
    b = (reste) < 0 ? div : reste;

    let xx1;
    xx1 = x - q * xx;
    let x2;
    x2 = xx;
    xx = xx1;
    x = x2;
    let yy1;
    yy1 = y - q * yy;
    let y2;
    y2 = yy;
    yy = yy1;
    y = y2;
  }
if (x < 0) {
    x = x + bdeb;
  }
if (y < 0) {
    y = y + adeb;
  }
return [a, x, y];
};


