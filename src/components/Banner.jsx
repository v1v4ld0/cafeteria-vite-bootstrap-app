import { Carousel, Container, Image } from 'react-bootstrap';

const Banner = ({ itens = [] }) => {
  return (
    <Container fluid="sm">
      <Carousel>
        {itens.map((item, i) => {
          return (
            <Carousel.Item key={i}>
              <Image fluid src={item.src} alt={item.alt} />
              <Carousel.Caption>
                <h3>{item.header}</h3>
                <p>{item.description}</p>
              </Carousel.Caption>
            </Carousel.Item>
          );
        })}
      </Carousel>
    </Container>
  );
};

export default Banner;
