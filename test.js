// Importamos las funciones que vamos a testear
const { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound } = require('./app.js');

// Prueba unitaria para la función sum
test("Sum of 7 and 3 should be 10", function() {
  // Hacemos la comparación (la prueba)
  expect(sum(7, 3)).toBe(10);
});

// Prueba unitaria para la función fromEuroToDollar
test("One euro should be 1.2 dollars", function() {
  // Hacemos la comparación (la prueba)
  expect(fromEuroToDollar(1)).toBe(1.2);
  expect(fromEuroToDollar(3.5)).toBe(4.2); // 1 euro son 1.2 dólares, entonces 3.5 euros deberían ser = (3.5 * 1.2)
});

// Prueba unitaria para la función fromDollarToYen
test("One dollar should be 127.9 yen", function() {
  // Hacemos la comparación (la prueba)
  expect(fromDollarToYen(1)).toBe(127.9);
});

// Prueba unitaria para la función fromYenToPound
test("One yen should be 0.00625 pounds", function() {
  // Hacemos la comparación (la prueba)
  expect(fromYenToPound(1)).toBe(0.00625);
});
