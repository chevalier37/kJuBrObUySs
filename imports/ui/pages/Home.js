import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';
import { Link } from 'react-router-dom';
import { Sidebar, Segment, Button, Menu, Image, Icon, Header, Checkbox, Form,  Message } from 'semantic-ui-react'
import Img from 'react-image'
import { Route, Redirect } from 'react-router';
 
//Component
import HeaderPage from '../component/HeaderPage.js';
import ContentMenuRight from '../component/ContentMenuRight.js';
import ButtonPusher from '../component/ButtonPusher.js';
import ContentMenuLeft from '../component/ContentMenuLeft.js';
import MainContent from '../component/MainContent.js';

class Home extends Component {

    state = { visible: false }

    componentWillMount(){
      Meteor.call('UpdateConseiller');

    }

    toggleVisibility = () => this.setState({ visible: !this.state.visible })
    toggleHidden = () => this.setState({ visible: false })

    

    render() {
    const { visible } = this.state  
    if (!Meteor.loggingIn() && !Meteor.userId()){
      return <Redirect to="/" />;
    }
    const naissance = this.props.naissance;
    const typeNaissance = typeof naissance;
     if (typeNaissance == 'string'){
     }else if (typeNaissance !== 'object'){
      return <Redirect to="/MiseAjourNaissance" />;
    }
    
    return (
      <div className="container">
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
                    <MainContent  />  
                  </div> 
                </div>

              </Sidebar.Pusher>
        </Sidebar.Pushable>
      </div>
    );
  }
}

export default withTracker(() => {
  const id = Meteor.userId();
  const Handle = Meteor.subscribe('user', id);
  const loading = !Handle.ready();
  const allreponses = Meteor.users.find({_id:id});
  const reponseExists = !loading && !!allreponses;

  return {
    naissance: reponseExists ? allreponses.fetch() : '',
  };
})(Home);
