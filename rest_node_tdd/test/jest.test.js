test("Devo conhecer as principais assertivas do jest", () => {
  let number = null;
  expect(number).toBeNull();

  number = 10;
  expect(number).not.toBeNull();
  expect(number).toBe(10);
  expect(number).toEqual(10);
  expect(number).toBeGreaterThan(9);
  expect(number).toBeLessThan(11);
});

test("Devo saber trabalhar com objetos", () => {
  const obj = {
    name: "Graciela",
    email: "gra@email.com",
    password: "12345678",
  };
  expect(obj).toHaveProperty("name");
  expect(obj.name).toBe("Graciela");
  expect(obj).toHaveProperty("name", "Graciela");
  const obj2 = {
    name: "Graciela",
    email: "gra@email.com",
    password: "12345678",
  };
  // expect(obj).toBe(obj2); //o to be compara mas fala que são dois objetos diferente
  expect(obj).toEqual(obj2);
});
