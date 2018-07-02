import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';
import { Link } from 'react-router-dom';
import { Sidebar, Segment, Button, Header, Message  } from 'semantic-ui-react'
import Img from 'react-image'
import { Route, Redirect } from 'react-router';
import FormPosterArticle from '../component/FormPosterArticle.js';

//Component
import HeaderPage from '../component/HeaderPage.js';
import ContentMenuRight from '../component/ContentMenuRight.js';
import ButtonPusher from '../component/ButtonPusher.js';
import ContentMenuLeft from '../component/ContentMenuLeft.js';

class RedigerArticles extends Component {

    constructor(props) {
        super(props);
        this.state = {
          visible: false,
          username:'',
          gender:'',
        }
    }

    componentDidMount() {
        this.scrollToTop();
    }

    componentDidUpdate() {
        //this.scrollToTop();
    }

    scrollToTop() {
        this.el.scrollIntoView();
    }

    toggleVisibility = () => this.setState({ visible: !this.state.visible })
    toggleHidden = () => this.setState({ visible: false })

    componentWillMount(){

      }


    render() {
   
    const { visible } = this.state  

    if (!Meteor.loggingIn() && !Meteor.userId()){
      return <Redirect to="/" />;
    }
    
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
                      <Segment>
                        <Header>
                          <div className="titreRecomandation"> Rédiger un article </div>
                        </Header>
                      </Segment>
                      <Message
                        info
                        header='Conseils pour rédiger un article :'
                        list={[
                          'Rédige un article pour donner un conseil ou partager ton expérience',
                          'Tout le monde peut voir tes articles et les commenter',
                          "Pas de fautes d'orthographe",
                          "Ton article sera posté après validation par notre équipe",
                        ]}
                      />
                      <FormPosterArticle />
                    </div>    
                  </div> 
                </div>

              </Sidebar.Pusher>

        </Sidebar.Pushable>
      
      </div>
    );
  }
}

export default RedigerArticles =  withTracker(() => {
  
  return {
    
  };
})(RedigerArticles);
