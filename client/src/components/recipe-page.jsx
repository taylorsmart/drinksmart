import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Ingredient from './ingredient.jsx';
import {Container, Button} from 'react-bootstrap';


const RecipePage = ({recipe, handleRecipeClick}) => {
  const [next, setNext] = useState(0)
  const recipeIngredients = Object.keys(recipe); 

  const handleNextToggle = () => {
    setNext(next+ 1)
  }



  return (
    <Container>
      {recipeIngredients.map((ingredient, i) => (<Ingredient name={ingredient} weightExpected={recipe[ingredient]} key={`i${i}`} handleNextToggle={handleNextToggle} next={next} event={i} />))}
      <Button onClick={()=>{handleRecipeClick(-1)}}>Back to Drinks</Button>
    </Container>
  )
}

export default RecipePage;
