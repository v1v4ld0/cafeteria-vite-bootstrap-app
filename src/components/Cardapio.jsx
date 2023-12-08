import { useEffect, useState } from 'react';
import { Container, Table, Form, Button, Modal } from 'react-bootstrap';
import CardapioFormModal from './CardapioFormModal';

const Cardapio = () => {
  const [show, setShow] = useState(false);

  const [consulta, setConsulta] = useState('');

  const [cardapios, setCardapios] = useState([]);

  const handleModal = () => {
    setShow(!show);
  };

  const handleClick = (event) => {
    console.log('clicou! ');
  };

  useEffect(() => {
    //requisição get.
    let jsonPromise = fetch('http://localhost:3000/cardapios')
      .then((response) => {
        console.log(response.ok);
        return response.json();
      })
      .catch((error) => {});

    jsonPromise.then((data) => {
      setCardapios([...data]);
    });
  }, []);

  return (
    <>
      <Container>
        <Button variant="primary" onClick={handleModal}>
          +
        </Button>
        <CardapioFormModal
          show={show}
          handleModal={handleModal}
        ></CardapioFormModal>
      </Container>
      <Container>
        <Form onSubmit={handleClick}>
          <Form.Group className="mb-3">
            <Form.Label>Busca</Form.Label>
            <Form.Control
              name="consulta"
              value={consulta || ''}
              type="text"
              placeholder="Digite um valor para buscar"
            />
          </Form.Group>
          <Button variant="primary" type="button" onClick={handleClick}>
            Buscar
          </Button>
        </Form>
      </Container>
      <Container className="mt-3">
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Título</th>
              <th>Descrição</th>
              <th>Preço</th>
            </tr>
          </thead>
          <tbody>
            {cardapios.map((cardapio, i) => {
              return (
                <tr key={i}>
                  <td>{cardapio.titulo}</td>
                  <td>{cardapio.descricao}</td>
                  <td>{cardapio.preco}</td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </Container>
    </>
  );
};

export default Cardapio;
