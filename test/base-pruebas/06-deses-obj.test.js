import { usContext } from "../../src/base-pruebas/06-deses-obj";

describe("Pruebas en 06-deses", () => {
  test("usContext debe retornar un objeto", () => {
    const test = usContext({ clave: "Capitán", edad: "Capitán" });

    expect(test).toEqual({
      nombreClave: expect.any(String),
      anios: expect.any(String),
      latlng: {
        lat: 14.1232,
        lng: -12.3232,
      },
    });
  });
});
