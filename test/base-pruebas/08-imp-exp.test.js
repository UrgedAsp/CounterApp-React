import {
  getHeroeById,
  getHeroesByOwner,
} from "../../src/base-pruebas/08-imp-exp";
import heroes from "../../src/data/heroes";
heroes;

describe("Pruebas en 08-imp-exp", () => {
  test("getHeroeById debe retornar un héroe por ID", () => {
    const id = 1;
    const hero = getHeroeById(id);

    expect(hero).toEqual({ id: 1, name: "Batman", owner: "DC" });
  });

  test("getHeroeById debe retornar undefinied si no existe", () => {
    const id = 100;
    const hero = getHeroeById(id);

    expect(hero).toBeFalsy();
  });

  test("getHeroesByOwner debe de retornar un arreglo con los héroes de DC", () => {
    const owner = "DC";
    const heroes = getHeroesByOwner(owner);
    expect(heroes.length).toBe(3);
    expect(heroes).toEqual(heroes.filter((heroe) => heroe.owner === owner));
    // expect(
    //   heroes.forEach((hero) => {
    //     expect(hero.owner).toBe("DC");
    //   })
    // );
  });

  test("getHeroesByOwner debe de retornar un arreglo con los héroes de Marvel", () => {
    const owner = "Marvel";
    const heroes = getHeroesByOwner(owner);
    expect(heroes.length).toBe(2);
  });
});
