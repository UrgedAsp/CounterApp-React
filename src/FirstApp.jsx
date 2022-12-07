import PropTypes from 'prop-types';

// const getSaludo = (nombre)=>{
//   return nombre;
// }

// const newMessage = {Juan : 'Pedro'};

export const FirstApp = ({
  title,
  subtitle = "La tierra explota!",
  name
}) => {

  // console.log(props)

  return (
    <>
    <h1>{ title }</h1>
    {/* <h1>{ getSaludo('Sebastian') }</h1> */}
    {/* <code>{ JSON.stringify(newMessage) }</code> */}
    <p>{ subtitle + 1 }</p>
    <p>{ name }</p>
    </>
  )
}

FirstApp.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.number.isRequired
}

FirstApp.defaultProps = {
  name: "Sebastian Castillo",
  subtitle: 'No hay subtitulo',
  title: 'No hay título',
}