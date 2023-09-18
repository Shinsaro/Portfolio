import { Card, Button, Row } from "react-bootstrap";
import { View } from "react-native-web";

function Projects() {
    return (
        <View >
            <h1 style={{ textAlign: 'center', marginBottom: 50 }}>Projects</h1>
            <Row style={{ display: 'flex', flexDirection: 'row', justifyContent: "space-evenly" }}>
                <Card style={{ width: '23rem', marginBottom: 20 }}>
                    <Card.Img variant="top" src="holder.js/100px180" />
                    <Card.Body>
                        <Card.Title>Calculator App</Card.Title>
                        <Card.Text>
                            A simple calculator made in React. You will be able to make all simple operations.
                        </Card.Text>
                        <Button variant="primary">Open</Button>
                    </Card.Body>
                </Card>
                <Card style={{ width: '23rem', marginBottom: 20 }}>
                    <Card.Img variant="top" src="holder.js/100px180" />
                    <Card.Body>
                        <Card.Title>Weather App</Card.Title>
                        <Card.Text>
                            Shows the weather in the actual postion and in the ones you add.
                        </Card.Text>
                        <Button variant="primary">Open</Button>
                    </Card.Body>
                </Card>
                <Card style={{ width: '23rem', marginBottom: 20 }}>
                    <Card.Img variant="top" src="holder.js/100px180" />
                    <Card.Body>
                        <Card.Title>Movie catalog</Card.Title>
                        <Card.Text>
                            Shows the collection of movies, you can search them, check the plot, and filter by genre.
                        </Card.Text>
                        <Button variant="primary">Open</Button>
                    </Card.Body>
                </Card>
                <Card style={{ width: '23rem', marginBottom: 20 }}>
                    <Card.Img variant="top" src="holder.js/100px180" />
                    <Card.Body>
                        <Card.Title>To Do Lits</Card.Title>
                        <Card.Text>
                            Shows a typical list to do where you can add elements, remove them, pin them to the top.
                        </Card.Text>
                        <Button variant="primary">Open</Button>
                    </Card.Body>
                </Card>
                <Card style={{ width: '23rem', marginBottom: 20 }}>
                    <Card.Img variant="top" src="holder.js/100px180" />
                    <Card.Body>
                        <Card.Title>Movie catalog</Card.Title>
                        <Card.Text>
                            Shows the collection of movies, you can search them, check the plot, and filter by genre.
                        </Card.Text>
                        <Button variant="primary">Open</Button>
                    </Card.Body>
                </Card>
                <Card style={{ width: '23rem', marginBottom: 20 }}>
                    <Card.Img variant="top" src="holder.js/100px180" />
                    <Card.Body>
                        <Card.Title>To Do Lits</Card.Title>
                        <Card.Text>
                            Shows a typical list to do where you can add elements, remove them, pin them to the top.
                        </Card.Text>
                        <Button variant="primary">Open</Button>
                    </Card.Body>
                </Card>
                <Card style={{ width: '23rem', marginBottom: 20 }}>
                    <Card.Img variant="top" src="holder.js/100px180" />
                    <Card.Body>
                        <Card.Title>Movie catalog</Card.Title>
                        <Card.Text>
                            Shows the collection of movies, you can search them, check the plot, and filter by genre.
                        </Card.Text>
                        <Button variant="primary">Open</Button>
                    </Card.Body>
                </Card>
                <Card style={{ width: '23rem', marginBottom: 20 }}>
                    <Card.Img variant="top" src="holder.js/100px180" />
                    <Card.Body>
                        <Card.Title>To Do Lits</Card.Title>
                        <Card.Text>
                            Shows a typical list to do where you can add elements, remove them, pin them to the top.
                        </Card.Text>
                        <Button variant="primary">Open</Button>
                    </Card.Body>
                </Card>
            </Row>
        </View>
    );
}

export default Projects;