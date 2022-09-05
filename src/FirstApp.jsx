/*
  En react puedo imprimir, strings, boolean
  numbers y arrays pero no puedo con objectos, 
  para ello hay que pasarlos a json o converlirlos
  en un array
*/

const getMessage = () => {
  return 'Hola desde una funcion'
}

const newMessage = {
  message: "Hola Mundo",
  title: "Oscar",
};

export const FirstApp = () => {
  return (
    <>
    <h1>{getMessage()}</h1>
      {/* <code>{JSON.stringify(newMessage)}</code> */}
      <p>Soy un subtitulo</p>
    </>
  );
};
