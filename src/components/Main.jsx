import { Col, Container, Row, Card, Button, Table } from 'react-bootstrap';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';

import './Main.css';
import Banner from './Banner';
import Usuario from './Usuario';
import { useState } from 'react';
import users from '../dataset/user';

const Main = () => {
  let itensCorousel = [
    {
      id: 1,
      src: 'https://images.unsplash.com/photo-1442512595331-e89e73853f31?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80',
      alt: 'Café - Primeiro Slide',
      header: 'Primeira Imagem',
      description: 'Descrição do Item',
    },
    {
      id: 2,
      src: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1738&q=80',
      alt: 'Café - Primeiro Slide',
      header: 'Primeira Imagem',
      description: 'Descrição do Item',
    },
    {
      id: 3,
      src: 'https://images.unsplash.com/photo-1511537190424-bbbab87ac5eb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80',
      alt: 'Café - Primeiro Slide',
      header: 'Primeira Imagem',
      description: 'Descrição do Item',
    },
  ];

  const [usuarios, setUsuarios] = useState(users);

  const handleClickLogin = (event) => {
    console.log('Login!');
  };

  // let contador = 0;
  const [contador, setContador] = useState(0);

  const handleClickContador = (event) => {
    // contador = contador + 1;
    setContador(contador + 1);
    console.log(`Contador: ${contador}`);
  };

  return (
    <main>
      <p>Contador é: {contador}</p>
      <Button onClick={handleClickContador}>Contador</Button>

      <Usuario nome="João"></Usuario>
      <Button variant="primary" onClick={handleClickLogin}>
        Login
      </Button>

      <Banner itens={itensCorousel}></Banner>

      {/* <div className="container"></div> */}
      <Container className="mt-3">
        <Row>
          <Col>
            <Card style={{ width: '18rem' }}>
              <Card.Img
                variant="top"
                src="https://images.unsplash.com/photo-1523368749929-6b2bf370dbf8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80"
              />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card style={{ width: '18rem' }}>
              <Card.Img
                variant="top"
                src="https://images.unsplash.com/photo-1507914372368-b2b085b925a1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80"
              />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card style={{ width: '18rem' }}>
              <Card.Img
                variant="top"
                src="https://images.unsplash.com/photo-1560105214-ad76e8531c42?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1935&q=80"
              />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
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
    </main>
  );
};

export default Main;
