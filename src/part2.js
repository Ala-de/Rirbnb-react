import React from 'react'
import "react-bootstrap";
import './appp.css';

function Rnb(props) {
    return( props.Rnn.map(el=>
  
      <div>
          
  <div className="part2">
      <img className="imgpart"  src={el.img} />
  
      <h3 className="titreb">{el.desc}</h3>
  
  </div>
  
      </div>
     
  
    ))
}
  
  export default Rnb
