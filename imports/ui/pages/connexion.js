import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';
import { Link } from 'react-router-dom';
import { Button, Checkbox, Form,  Message } from 'semantic-ui-react'
import Img from 'react-image'
 
//Component
import FormSubscribe from '../component/FormSubscribe.js';
import Header from '../component/Header.js';
import Footer from '../component/Footer.js';
import Drapeaux from '../component/Drapeaux.js';

class Connexion extends Component {

  render() {
    return (
      <div className="container">
        <header>
          <div className="containerSupHeader">
            <div className="containerHeader">
              <Header />
            </div>
          </div>
        </header>

        <div className="containerSupIMG">
          <div className="containerIMG">
            <div className="slogan">
                Vous ne marcherez jamais seul
                <div className="consigneSite">
                  <Message floating>
                    <Message.Header>Avec Kurbys vous pouvez :</Message.Header>
                    <Message.List>
                      <Message.Item>Contacter un conseiller pour obtenir de l'aide</Message.Item>
                      <Message.Item>Devenir conseiller pour partager votre expérience et aider ceux qui en ont besoin</Message.Item>
                      <Message.Item>Aucun sujet tabou (Amour, Amitié, Confiance en soi, Sexo... )</Message.Item>
                    </Message.List>
                  </Message>
                </div>
                <div className="ContainerDrapeaux">
                  <Message floating color='green'>
                    <Message.Header>Trouvez de l'aide</Message.Header>
                  </Message>
                </div>
            </div>
            <div className="FormSubscribe">
              <FormSubscribe />
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
  return {
  };
})(Connexion);
