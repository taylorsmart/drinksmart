import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {Card, Button} from 'react-bootstrap';


const DrinkMenu = ({drink,recipeId,handleRecipeClick}) => {

  return (
    <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src={drink.image} />
    <Card.Body>
      <Card.Title>{drink.name}</Card.Title>
      <Card.Text>
        {drink.description}
      </Card.Text>
      <Button variant="primary" onClick={()=>{handleRecipeClick(recipeId)}}>Start Measuring</Button>
    </Card.Body>
  </Card>
  )
}

export default DrinkMenu;