import { useEffect, useState } from 'react';
import { Container, Table, Form, Button, Modal } from 'react-bootstrap';

const CardapioFormModal = ({ show, handleModal }) => {
  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    setInputs({ ...inputs, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(inputs);
  };

  return (
    <>
      <Modal show={show} onHide={handleModal}>
        <Modal.Header closeButton>
          <Modal.Title>Usuário</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Label>Nome</Form.Label>
              <Form.Control
                name="nome"
                value={inputs.nome || ''}
                type="text"
                placeholder="Digite o nome da Preparação"
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Sobrenome</Form.Label>
              <Form.Control
                name="sobrenome"
                value={inputs.sobrenome || ''}
                type="text"
                placeholder="Digite o nome da Preparação"
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>CPF</Form.Label>
              <Form.Control
                name="cpf"
                value={inputs.cpf || ''}
                type="text"
                placeholder="Digite o nome da Preparação"
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Celular</Form.Label>
              <Form.Control
                name="celular"
                value={inputs.celular || ''}
                type="text"
                placeholder="Digite o nome da Preparação"
                onChange={handleChange}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleModal}>
            Fechar
          </Button>
          <Button variant="primary" onClick={handleModal}>
            Salvar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default CardapioFormModal;
