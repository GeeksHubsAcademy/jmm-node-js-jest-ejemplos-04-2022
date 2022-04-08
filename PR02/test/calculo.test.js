const {suma, resta} = require('../calculo');

test('sumar 1 + 2 es igual a 3', () => {
  expect(suma(1, 2)).toBe(3);
});

test('restar 1 - 2 es igual a -1', () => {
  expect(resta(1, 2)).toBe(-1);
});

