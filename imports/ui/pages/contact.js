import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';
import { Link } from 'react-router-dom';
import { Button, Checkbox, Form,  Message, Segment, Header} from 'semantic-ui-react'
import { check } from 'meteor/check';
import { Route, Redirect } from 'react-router';

 
//Component
import Header1 from '../component/Header.js';
import Footer from '../component/Footer.js';



class CGU extends Component {

   
  render() {

   
    return (
      <div className="container">
        <header>
          <div className="containerSupHeader">
            <div className="containerHeader">
              <Header1 />
            </div>
          </div>
        </header>

        <div className="containerSupIMG">
          <div className="containerIMG">
          <div className="contactMargin">
                <Segment>
                  <div className="contact">
                  <Header>
                  Contact
                  </Header>
                    Pour tout renseignement, vous pouvez nous contacter à cette adresse : editions@seconde-vie.fr
                  </div> 
                  </Segment>
          </div>
                </div>
          </div>   
          <div className="containerFooter">    
            <Footer />
          </div>
                  
      </div>
    );
  }
}



export default withTracker(() => {
   //Meteor.subscribe('all');
  return {
    
   
  };
})(CGU);
