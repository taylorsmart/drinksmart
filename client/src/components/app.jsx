import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {Container, CardGroup} from 'react-bootstrap';
import TitleHeading from './navbar.jsx'
import DrinkMenu from './drink-menu.jsx'
import RecipePage from './recipe-page.jsx'
import drinkList from '../tempData/drink-list.jsx'


const App = () => {
  const [recipeFlag, setRecipeFlag] = useState(-1)

  const handleRecipeClick = (recipeNum) =>{
    setRecipeFlag(recipeNum)
  }


  return (
    <Container>
      <TitleHeading/>
      <CardGroup>
        {recipeFlag === -1 ? drinkList.map((drink, i) => (<DrinkMenu drink={drink} key={i} recipeId={i} handleRecipeClick={handleRecipeClick}/>)) : <RecipePage recipe={drinkList[recipeFlag].recipe} handleRecipeClick={handleRecipeClick}/>}
      </CardGroup>
    </Container>
  )
}

export default App;
