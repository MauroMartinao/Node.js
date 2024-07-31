const calculos = require("./gastoCombustivel");

test('param invalido - distancia negativa', () => {
  expect(calculos.gastoCombustivel(-1, "gasolina")).toBe("parametros invalidos");
});

test('param invalido - distancia zero', () => {
  expect(calculos.gastoCombustivel(0, "gasolina")).toBe("parametros invalidos");
});

test('param invalido - tipo de combustível inválido', () => {
  expect(calculos.gastoCombustivel(1000, "solar")).toBe("parametros invalidos");
});

test('gasolina - distância maior que zero', () => {
  expect(calculos.gastoCombustivel(16000, "gasolina")).toBe(1); // 16000 metros = 16 km, deve gastar 1 litro
});

test('etanol - distância maior que zero', () => {
  expect(calculos.gastoCombustivel(11000, "etanol")).toBe(1); // 11000 metros = 11 km, deve gastar 1 litro
});

test('gasolina - distância menor que consumo', () => {
  expect(calculos.gastoCombustivel(8000, "gasolina")).toBe(0.5); // 8000 metros = 8 km, deve gastar 0.5 litro
});

test('etanol - distância menor que consumo', () => {
  expect(calculos.gastoCombustivel(5500, "etanol")).toBe(0.5); // 5500 metros = 5.5 km, deve gastar 0.5 litro
});
