import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';
import { Link } from 'react-router-dom';
import { Button, Checkbox, Form,  Message, Modal } from 'semantic-ui-react'
import Img from 'react-image'
import { Route, Redirect } from 'react-router';

//Component
import FormSubscribe from '../component/FormSubscribe.js';
import Header from '../component/Header.js';
import Footer from '../component/Footer.js';
import FaComments from 'react-icons/lib/fa/comments';

//import FaExpeditedssl from 'react-icons/lib/fa/Expeditedssl';
import FaTrashO from 'react-icons/lib/fa/trash-o';

class Connexion extends Component {

    state = { 
      visible: false,
      open:false,
      delete:false,
    }

    open(){
      this.setState({open: true})
    }

    non(){
      this.setState({open: false})
    }

    componentWillMount(){
      let width = window.innerWidth;
      if(width <900){
         this.setState({open: true})
      }else{
         this.setState({open: false})
      }
    }

  render() {
    if (Meteor.loggingIn() && Meteor.userId()){
      return <Redirect to="/home" />;
    }

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
                      <a href={"https://play.google.com/store/apps/details?id=com.idb9qf011pqj13l1a3vqwl&hl=fr"}><Img className="application" src="/android.png"/></a>
                      <a href={"https://itunes.apple.com/us/app/kurbys/id1295881140?mt=8"}><Img className="application" src="/apple.png"/></a>
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
                    <Message.Header>
                    <div className="titreAide"> Trouvez de l'aide </div>
                    </Message.Header>
                  </Message>
                </div>

                <div className="ContainerPresentation">
                  <Message floating >
                      <FaComments /> Kurbys est un espace de discussion intime où tout le monde peut donner et recevoir de l'aide.<br /><br />
                       Tous les échanges sont anonymes afin de respecter la confidentialité des messages. Cela vous permet de laisser parler votre coeur afin de dire la vérité silencieuse qui est en vous.<br /><br />
                      <FaTrashO /> Vous pouvez supprimer votre compte à tout moment. Tous vos messages seront définitivement supprimés.<br />
                  </Message>
                </div>

            </div>
            <div className="FormSubscribe">
              <FormSubscribe />
            </div>
          </div>
            <Modal basic size='small' open={this.state.open}>
                        <Modal.Content>
                          <div className="telechargerMobile">
                           <p className="deleteCount">Télécharger l'application :</p>
                            <a href={"https://play.google.com/store/apps/details?id=com.idb9qf011pqj13l1a3vqwl&hl=fr"}><Img className="application" src="/android.png"/></a>
                            <a href={"https://itunes.apple.com/us/app/kurbys/id1295881140?mt=8"}><Img className="application" src="/apple.png"/></a>
                          </div>
                        </Modal.Content>
                        <Modal.Actions>
                            <Button
                             basic 
                             color='red'
                             inverted
                             onClick={this.non.bind(this)}
                             >
                              Annuler
                            </Button>
                        </Modal.Actions>
            </Modal> 
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
