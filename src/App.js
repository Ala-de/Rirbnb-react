import logo from './logo.svg';
import './App.css';

import Nava from './navbar'
  import Rnb from'./part2'
  import Part3 from'./part3'
const images = [
  {img:'https://a0.muscache.com/im/pictures/2f13349d-879d-43c6-83e3-8e5679291d53.jpg?im_w=720',desc:'Escapades en pleine nature'},
  {img:'https://a0.muscache.com/im/pictures/36f53e61-db8d-403c-9122-5b761c0e4264.jpg?im_w=720',desc:'Des logements uniques'},
  {img:'https://a0.muscache.com/im/pictures/7d82ca14-56e5-4465-8218-dcfa7d69b6ac.jpg?im_w=720',desc:'Logements entiers'},
  {img:'https://a0.muscache.com/im/pictures/10a638e1-6aff-4313-8033-1275cec83987.jpg?im_w=720',desc:'Animaux de compagnie acceptés'}
]

function App() {
  return (
    <div className="App">
      
      <Nava/>
      <div className="Container">
      <h1>Chez vous, partout</h1> 
      <div className="grapart2">
      <div className="Container">
      
      {/********************* */}
<div className="container d-flex flex-wrap partgr">

      <Rnb Rnn ={images}/>
      </div>
       {/********************* */}
     <Part3/>
     
     
     
        </div>
        </div>
        </div>
      
     
      
      
      
    </div>
    
    
  );
}

export default App;
