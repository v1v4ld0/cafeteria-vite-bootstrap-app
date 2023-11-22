import { Col, Container, Row, Card, Button, Table } from 'react-bootstrap';

import './Main.css';
import Banner from './Banner';
import { useEffect, useState } from 'react';

const Main = () => {
  const [incremento, setIncremento] = useState(0);

  const [nome, setNome] = useState('');

  useEffect(() => {
    document.title = nome;
  }, [nome]);

  const handleClickIncremento = (event) => {
    setIncremento(incremento + 1);
  };

  const handleClickNome = (event) => {
    setIncremento(incremento + 1);
    setNome('João ' + incremento);
  };

  return (
    <>
      <button onClick={handleClickIncremento}>Incrementar</button>

      {nome}
      <button onClick={handleClickNome}>Nomear</button>
    </>
  );
};

export default Main;
