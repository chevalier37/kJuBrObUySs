import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';
import { Link } from 'react-router-dom';
import { Sidebar, Segment, Button, Header, Form, Input } from 'semantic-ui-react'
import Img from 'react-image'
import { Route, Redirect } from 'react-router';

//Component
import HeaderPage from '../component/HeaderPage.js';
import ContentMenuRight from '../component/ContentMenuRight.js';
import ButtonPusher from '../component/ButtonPusher.js';
import ContentMenuLeft from '../component/ContentMenuLeft.js';


class NousRejoindre extends Component {

    constructor(props) {
        super(props);
        this.state = {
            visible: '' 
        }
    }
   

    scrollToTop() {
        this.el.scrollIntoView();
    }

    render() {

    if (!Meteor.loggingIn() && !Meteor.userId()){
      return <Redirect to="/" />;
    }
    const { visible } = this.state
    
    return (
      <div className="container">
      <div ref={el => { this.el = el; }} ></div>
        <header>
          <div className="containerSupHeader">
          <ContentMenuLeft />
            <div className="containerHeader">
            <div className="headerPage">
              <HeaderPage />
              <span
               className="buttonPush"
               onClick={this.toggleVisibility}>

               <ButtonPusher />
               </span>
            </div>
            </div>
          </div>
        </header>

       
        <Sidebar.Pushable >
              <Sidebar
                animation='overlay'
                className="ListRight"
                direction='right'
                visible={visible}
                icon='labeled'
                vertical
                className="SidebarUI"
              >
                <ContentMenuRight />
              </Sidebar>
              
              <Sidebar.Pusher>

                <div className="containerSite" onClick={this.toggleHidden}>
                  <div className="containerIMG">
                  
                  <div className="MainContent">
                  <Segment >
                      <Header>
                      <p className="center"> Nous rejoindre </p>
                      </Header>
                      <div className="ContentText">
                          <br />
                          Vous voulez rejoindre Ambre et son équipe ?<br />
                          Si vous aussi vous souhaitez nous aider à rendre le monde meilleur alors n'hésitez pas à nous contacter !
                          <br /><br />
                          <u>Nous recherchons actuellement :</u>
                          <br /><br />
                          <strong>- un/une Community Manager</strong><br />
                          Il faut une parfaite connaissance des réseaux sociaux (surtout Facebook).
                          Le but est de faire vivre ces réseaux afin de développer la communauté.
                          <br /><br />
                          <strong>- une modératrice</strong><br />
                          Vous veillerez au bon comportement des utilisateurs.
                          Vous pourrez bloquer des utilisateurs et supprimer des messages.
                          Vous aurez également la responsabilité de valider les articles.
                          <br /><br />
                          <strong>- un développeur</strong><br />
                          Vous avez des compétences en informatique et vous souhaitez mettre votre talent au service des autres.
                          Nous recherchons un développeur web pour venir renforcer notre équipe.
                          Les débutants sont acceptés.
                          <br /><br />
                          Si vous êtes intéressé par ces postes, n'hésitez pas à nous contacter à cette adresse :<br />
                          <strong> editions@seconde-vie.fr</strong>
                      </div>
                  </Segment>


                  </div>    
                      
                  </div> 
                </div>

              </Sidebar.Pusher>

        </Sidebar.Pushable>
      
      </div>
    );
  }
}

export default NousRejoindre =  withTracker(() => {
  return {
  };
})(NousRejoindre);
