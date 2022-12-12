import { render, screen } from "@testing-library/react";
import { FirstApp } from "../src/FirstApp";

describe("Pruebas en FirstApp", () => {
  const title = "Soy un titulo";
  const subtitle = 123;

  test("debe hacer match con el snapshot", () => {
    const { container } = render(
      <FirstApp title={title} subtitle={subtitle} />
    );
    expect(container).toMatchSnapshot();
  });

  test("Debe mostrar el titulo", () => {
    render(<FirstApp title={title} subtitle={subtitle} />);
    expect(screen.getByText(title)).toBeTruthy();
  });

  test("Debe de mostrar el titulo en un h1", () => {
    render(<FirstApp title={title} subtitle={subtitle} />);
    expect(screen.getByRole("heading", { level: 1 }).innerHTML).toContain(
      title
    );
  });

  test("Debe de mostrar el subtitulo enviado por props", () => {
    render(<FirstApp title={title} subtitle={subtitle} />);
    expect(screen.getAllByText(subtitle).length).toBe(2);
  });
});
