import React from 'react'
import './appp.css'
import  {Navbar,Button} from 'react-bootstrap';

      function Nava(){
        return(
          <div className="img-glob"> 
      <Navbar>
  <Navbar.Brand href="#home"> <img className="logo" src="https://play-lh.googleusercontent.com/1zfN_BL13q20v0wvBzMWiZ_sL_t4KcCJBeAMRpOZeT3p34quM-4-pO-VcLj8PJNXPA0" /></Navbar.Brand>
  <Navbar.Toggle />
  <Navbar.Collapse className="justify-content-end">
    <Navbar.Text>
    <a href="#login">Hébergements</a>
    <a href="#login">Expériences</a>
    <a href="#login">Expériences en ligne</a>
    </Navbar.Text>
  </Navbar.Collapse>
</Navbar>
{/*-------------*/}
<div className="butntop">
<h1 className="titretop">En pleine nature</h1>
<h6>Favoris sélectionnés par Airbnb.</h6>
<Button variant="dark">Trouver l'inspiration</Button>
</div>
      
      
     
  </div>

        
    )
}

export default Nava
