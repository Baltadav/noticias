import React, { Fragment, useState, useEffect } from 'react';
import Formulario from './components/Formulario';
import Header from './components/Header'
import ListadoNoticias from './components/ListadoNoticias';

function App() {

  //definir la categoria y noticias

  const [categoria, guardarCategoria] = useState('');
  const [noticias, guardarNoticias] = useState ([]);

  useEffect(() => {
    const consultarAPI = async () => {
      const url = `http://newsapi.org/v2/top-headlines?country=ar&category=${categoria}&apiKey=6581950584c340aab70320d9a53a7427`;

      const respuesta = await fetch(url);
      const noticias = await respuesta.json();

      guardarNoticias(noticias.articles);
      
    }
    consultarAPI();
  },[categoria])
  return (
    <Fragment>
      <Header
        titulo ='Buscador de noticas'
      />

      <div className="container white">
        <Formulario
          guardarCategoria = {guardarCategoria}
        />
        <ListadoNoticias
          noticias={noticias}
        />
      </div>
    </Fragment>
  );
}

export default App;
