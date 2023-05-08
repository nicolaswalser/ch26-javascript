/*
Hacer pruebas unitarias a una función que
verifique  que si una palabra es palíndromo

Palíndromo: La palabra se lee igual de recha a izquierda
 y de izquierda a derecha.

 "Ana"  -> true
 "Bob"  -> true
 "Radar" -> true
 "Saoko" -> false
 "Palabra" -> false
 "Somos o no somo" -> true

*/
const { isPalindrome } = require("../scripts/isPalindrome");

test("TEST Ana = true", () => {
  expect(isPalindrome("Ana")).toBe(true);
});

test("TEST Bob = true", () => {
  expect(isPalindrome("Bob")).toBe(true);
});

test("TEST Radar = true", () => {
  expect(isPalindrome("Radar")).toBe(true);
});

test("TEST Saoko = true", () => {
  expect(isPalindrome("Saoko")).toBe(false);
});

test("TEST Palabra = true", () => {
  expect(isPalindrome("Palabra")).toBe(false);
});
