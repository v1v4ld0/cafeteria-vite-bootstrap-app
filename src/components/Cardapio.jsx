import { useEffect, useState } from 'react';
import { Container, Table, Form, Button, Modal } from 'react-bootstrap';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';

const Cardapio = () => {
  const [show, setShow] = useState(false);

  const [inputs, setInputs] = useState({});

  const [usuarios, setUsuarios] = useState([]);

  const handleClick = (event) => {
    console.log('clicou! ');
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(inputs);
  };

  const handleChange = (event) => {
    setInputs({ ...inputs, [event.target.name]: event.target.value });
  };

  const handleModal = () => {
    setShow(!show);
  };

  useEffect(() => {
    //requisição.
  }, []);

  return (
    <>
      <Container>
        <Button variant="primary" onClick={handleModal}>
          +
        </Button>

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
              <Button variant="primary" type="button" onClick={handleClick}>
                Buscar
              </Button>

              <Button variant="primary" type="submit">
                Submit
              </Button>
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
      </Container>
      <Container>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Label>Busca</Form.Label>
            <Form.Control
              name="consulta"
              value={inputs.consulta || ''}
              type="text"
              placeholder="Digite um valor para buscar"
              onChange={handleChange}
            />
          </Form.Group>
          <Button variant="primary" type="button" onClick={handleClick}>
            Buscar
          </Button>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Container>
      <Container className="mt-3">
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Nome</th>
              <th>Usuário</th>
              <th>E-mail</th>
              <th>Endereço</th>
              <th>Mapa</th>
            </tr>
          </thead>
          <tbody>
            {usuarios.map((usuario, i) => {
              const posicao = [
                usuario.address.geo.lat,
                usuario.address.geo.lng,
              ];

              return (
                <tr key={i}>
                  <td>{usuario.name}</td>
                  <td>{usuario.username}</td>
                  <td>{usuario.email}</td>
                  <td>
                    {usuario.address.street}, {usuario.address.suite},{' '}
                    {usuario.address.city}, {usuario.address.zipcode}
                  </td>
                  <td style={{ width: '50vh' }}>
                    <MapContainer
                      center={posicao}
                      zoom={13}
                      scrollWheelZoom={false}
                      style={{ height: '20vh', width: '100%' }}
                    >
                      <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                      />
                      <Marker position={posicao}>
                        <Popup>
                          A pretty CSS3 popup. <br /> Easily customizable.
                        </Popup>
                      </Marker>
                    </MapContainer>
                  </td>
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
