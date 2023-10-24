import { useState } from 'react';
import users from '../dataset/user';
import { Container, Table } from 'react-bootstrap';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';

const Cardapio = () => {
  const [usuarios, setUsuarios] = useState(users);

  return (
    <>
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
