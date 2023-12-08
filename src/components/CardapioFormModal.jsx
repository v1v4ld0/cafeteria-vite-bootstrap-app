import { useState } from 'react';
import { Form, Button, Modal } from 'react-bootstrap';

const CardapioFormModal = ({ show, handleModal, cardapios, setCardapios }) => {
  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    setInputs({ ...inputs, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    let cardapio = {...inputs};
    console.log(inputs);

    fetch('http://localhost:3000/cardapios', {
      method: 'POST',
      body: JSON.stringify(cardapio),
      headers: {
        'Content-type': 'application/json',
      },
    })
    .then((response) => {
      if(!response.ok){
        console.log('Cadastrou');
        setCardapios([...cardapios, cardapio])
      }
    })
    .catch((error) => {});
  };

  return (
    <>
      <Modal show={show} onHide={handleModal}>
        <Modal.Header closeButton>
          <Modal.Title>Cardápio</Modal.Title>
        </Modal.Header>
        <Form onSubmit={handleSubmit}>

        <Modal.Body>
            <Form.Group className="mb-3">
              <Form.Label>Título</Form.Label>
              <Form.Control
                name="titulo"
                value={inputs.titulo || ''}
                type="text"
                placeholder="Digite o título da Preparação"
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Descrição</Form.Label>
              <Form.Control
                name="descricao"
                value={inputs.descricao || ''}
                type="text"
                placeholder="Digite o descrição da Preparação"
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Imagem</Form.Label>
              <Form.Control
                name="imagem"
                value={inputs.imagem || ''}
                type="text"
                placeholder="Link/URL da imagem da Preparação"
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Preço</Form.Label>
              <Form.Control
                name="preco"
                value={inputs.preco || ''}
                type="text"
                placeholder="Digite o preço da Preparação"
                onChange={handleChange}
              />
            </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleModal}>
            Fechar
          </Button>
          <Button type="submit" variant="primary" onClick={handleModal}>
            Salvar
          </Button>
        </Modal.Footer>
        </Form>
      </Modal>
    </>
  );
};

export default CardapioFormModal;
