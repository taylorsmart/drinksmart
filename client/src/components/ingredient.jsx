import React, {useState, useEffect, useRef} from 'react';
import axios from 'axios';
import {ProgressBar, Row, Col, Button} from 'react-bootstrap';


// TAYLOR -- this is a new hook from online. It should be
//    separated into a new file. Also I think I've broken the 
//    thing that switches between ingredients.
//    See: https://blog.bitsrc.io/polling-in-react-using-the-useinterval-custom-hook-e2bcefda4197
export function useInterval(callback, delay) {
	const savedCallback = useRef();
	// store the callback
	useEffect(() => {
		savedCallback.current = callback;
	}, [callback])

	// set up the interval
	useEffect(() => {
		function tick() {
			savedCallback.current();
		}
		if (delay !== null) {
			const id = setInterval(tick, delay);
			return () => {
				clearInterval(id);
			};
		}
	}, [callback, delay]);
}

const Ingredient = ({name, weightExpected, event, next, handleNextToggle}) => {
  const [weight, setWeight] = useState(0)
  const [weightCheckFlag, setWeightCheckFlag] = useState(0)

  useInterval(async () => {
	  axios.get('/scaleData')
		  .then((res) => {
			  //console.log('weight response', res.data.scaleValue);
			  if (next) {
			    setWeight(res.data.scaleValue);
			  }
		  })
		  .catch((error) => {
			  console.log(error);
		  });
  }, 100);


  const percentageFilled = weight/weightExpected;

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
