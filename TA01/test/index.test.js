const {sumar, restar, multiplicar, dividir} = require('../index');

describe('Operaciones matemáticas', () => {
  test('Realizamos la suma', () => {
      expect(sumar(1,1)).toBe(2);
  });
  test('Realizamos la resta', () => {
      expect(restar(1,1)).toBe(0);
  });
  test('Realizamos la multiplicacion', () => {
      expect(multiplicar(1,1)).toBe(1);
  });
  test('Realizamos la division', () => {
      expect(dividir(1,1)).toBe(1);
  });
});

// Extra matchers
describe('Common matchers', () => {
  const datos = {
      nombre: 'Persona 1',
      edad: 10
  }
  const datos2 = {
      nombre: 'Persona 1',
      edad: 10
  }
  test('Comprobamos que los objectos son iguales', () => {
      expect(datos).toEqual(datos2);
  });
});

describe('Matchers numéricos', () => {
  test('Resultado menor que...', () => {
      expect(restar(5,3)).toBeLessThan(3);
  });
  test('Resultado menor o igual que...', () => {
      expect(restar(5,3)).toBeLessThanOrEqual(2);
  });
  test('Resultado mayor o igual que...', () => {
      expect(multiplicar(2,5)).toBeGreaterThanOrEqual(10);
  });
  test('Resultado mayor que...', () => {
      expect(sumar(5,5)).toBeGreaterThan(9);
  });
});
