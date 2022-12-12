import { fireEvent, render, screen } from "@testing-library/react";
import CounterApp from "../src/CounterApp";

describe("Pruebas en CounterApp", () => {
  const counter = 10;

  test("Debe de hacer match con el snapshot", () => {
    const { container } = render(<CounterApp value={counter} />);
    expect(container).toMatchSnapshot();
  });

  test("Debe de mostrar el valor inicial de 100", () => {
    render(<CounterApp value={100} />);
    expect(screen.getByText(100)).toBeTruthy();
  });

  test("Debe de incrementar con el boton +1", () => {
    render(<CounterApp value={counter} />);
    fireEvent.click(screen.getByText("+1"));
    expect(screen.getByText("11")).toBeTruthy();
  });

  test("Debe de decrementar con el boton -1", () => {
    render(<CounterApp value={counter} />);
    fireEvent.click(screen.getByText("-1"));
    expect(screen.getByText("9")).toBeTruthy();
  });

  test("Debe de reiniciarse con el boton reset", () => {
    render(<CounterApp value={counter} />);
    fireEvent.click(screen.getByText("+1"));
    fireEvent.click(screen.getByText("+1"));
    fireEvent.click(screen.getByText("+1"));
    // fireEvent.click(screen.getByText('Reset'));
    fireEvent.click(screen.getByRole('button', {name: 'btn-reset'}));
    
    expect(screen.getByText(10)).toBeTruthy();
  });
});
