import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import foto from './FotoPerfil.jpg';
import UseAnimations from "react-useanimations";
import linkedin from 'react-useanimations/lib/linkedin';
import github from 'react-useanimations/lib/github';
import mail from 'react-useanimations/lib/mail';
import { View } from 'react-native-web';

function Introduccion() {
    return (
        <View style={{ height: 600, alignItems: 'center' }}>
            <Row style={{ display: 'flex', alignItems: 'center' }}>
                <img src={foto} style={{ width: 400, height: 500, borderRadius: 50 }} alt="Foto de perfil" />
                <Col>
                    <h1 style={{ fontSize: 35, flex: '100%' }}>Alberto García Sánchez</h1>
                    <h3 style={{ flex: '100%' }}>FullStack Developer</h3>
                    <Row>
                        <UseAnimations animation={mail} size={56} />
                        <UseAnimations animation={linkedin} size={56} />
                        <UseAnimations animation={github} size={56} />
                    </Row>
                </Col>
            </Row >
        </View>
    );
}

export default Introduccion;