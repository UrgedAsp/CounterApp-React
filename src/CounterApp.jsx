import { useState } from "react";
import PropTypes from "prop-types";

const CounterApp = ({ value }) => {

    const [ counter, setCounter ] = useState(value);

  const sumar = (e) => {
    // console.log(e);
    // setCounter( counter+1 );
    setCounter( (c) => c + 1);
  };

  const restar = () => {
    setCounter( counter - 1 );
  };

  const reset = () => {
    setCounter( value );
  };

  return (
    <>
      <h1>CounterApp</h1>
      <h2>{ counter }</h2>
      <button onClick={ sumar }>+1</button>
      <button onClick={ restar }>-1</button>
      <button aria-label="btn-reset" onClick={ reset }>Reset</button>
    </>
  );
};

CounterApp.propTypes = {
  value: PropTypes.number.isRequired,
};

export default CounterApp;
