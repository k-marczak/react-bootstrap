import React from 'react';
import { Container, Card, Button } from 'react-bootstrap'

export const Home = () => {
    return (
     <div>
        <h2>Home Page</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem nobis error neque maxime adipisci, hic fugit quos necessitatibus quibusdam ipsa rem inventore at et nam ipsam harum delectus molestias laudantium?</p>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam temporibus quod, est aliquid voluptatum minima hic provident sed ullam nisi, obcaecati dicta aliquam perferendis repudiandae maxime, unde quae quibusdam. Eligendi!</p>


        <Container>
            <Card className="text-center">
                <Card.Header>Featured</Card.Header>
                <Card.Body>
                    <Card.Title>Special title treatment</Card.Title>
                    <Card.Text>
                        With supporting text below as a natural lead-in to additional content.
                     </Card.Text>
                      <Button variant="primary">Go somewhere</Button>
                </Card.Body>
                <Card.Footer className="text-muted">2 days ago</Card.Footer>
            </Card>
        </Container>


     </div>
    );
};

export default Home;