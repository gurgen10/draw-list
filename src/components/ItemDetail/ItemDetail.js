import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';

export default function ItemDetail({item, header, children}) {
    let cardText = ''
    
    if(header === 'Brands'){
        cardText = item.details.name + ' is the top brand of the world.';
    } else if(header === 'Countries') {
        cardText = item.details.name + ' is my favorate country of the world.';
    } else if(header === 'Cars') {
        cardText = item.details.name + ' very popular in Armenia.'
    } else {
        cardText = ''
    }
    
    return (
        <Card style={{ width: '18rm', margin: '10px'}}>
            
            <Card.Body>  
            <Card.Title >{ item.details.name }</Card.Title>
            <Card.Subtitle className="mb-3 text-muted">{ cardText }</Card.Subtitle>
            <Row>
            <Col className='md-3' xs="3">
                <Card.Img variant="left" style={{width: '100px' }} src={item.image} />
            </Col>
            <Col className='md-9' xs="auto">
                <Card.Text>
                    {React.Children.map(children, (el)=> {
                        return React.cloneElement(el, {item: item.details, header} )
                    })}
                </Card.Text> 
            </Col>
            </Row>
            </Card.Body>
            
        </Card>
    )
}
