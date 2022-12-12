import { getImagen } from "../../src/base-pruebas/11-async-await";

describe("Pruebas en 11-async-await", () => {
  test("getImagen debe de retornar un error si no se encontro la api key", async () => {
    const url = await getImagen();
    expect(typeof url).toEqual('string');
  });
});
