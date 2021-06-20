import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {ProgressBar, Row, Col, Button} from 'react-bootstrap';


const Ingredient = ({name, weightExpected, event, next, handleNextToggle}) => {
  const [weight, setWeight] = useState(0)
  const [weightCheckFlag, setWeightCheckFlag] = useState(0)

  const startWeightQuery = () => {
    if(next === event ) {
      setWeight(weight + 15) //this is for illustrative purposes
    }
    // setWeightCheckFlag(); // this should automatically trigger the useEffectBelow to re-fetch weight from the server
  }
  setTimeout(function(){startWeightQuery() }, 300);

  const percentageFilled = weight/weightExpected;


  useEffect(() => {
    axios.get('/scaleData')
      .then((res) => {
      setWeight(res.data.scaleValue) // This will shift to 'res'
    })
    .catch((error) => {
      console.log(error)
    });
  },[weightCheckFlag])

  return (
      <Row xs={12} md={12} lg={12} className="showGrid">
        <Col>
          {name}
        </Col>
        <Col >
          <ProgressBar now={percentageFilled} />
        </Col>
        <Col xs={2}>
          <Button onClick={handleNextToggle}>Next</Button>
        </Col>
      </Row>
  )
}

export default Ingredient;