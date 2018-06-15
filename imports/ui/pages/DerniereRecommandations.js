import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';
import { Link } from 'react-router-dom';
import { Sidebar, Segment, Button, Header} from 'semantic-ui-react'
import Img from 'react-image'
import { Route, Redirect } from 'react-router';


//Component
import HeaderPage from '../component/HeaderPage.js';
import ContentMenuRight from '../component/ContentMenuRight.js';
import ButtonPusher from '../component/ButtonPusher.js';
import ContentMenuLeft from '../component/ContentMenuLeft.js';
import FormPosterReponse from '../component/FormPosterReponse.js';
import SingleMessagePost from '../component/SingleMessagePost.js';
import ListeLastRecommandations from '../component/ListeLastRecommandations.js';

import { Recommandations } from '../../api/Recommandations.js';

class DerniereRecommandations extends Component {

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
        this.scrollToTop();
    }

    scrollToTop() {
        this.el.scrollIntoView();
    }

    toggleVisibility = () => this.setState({ visible: !this.state.visible })
    toggleHidden = () => this.setState({ visible: false })

    componentWillMount(){
      let id = this.props.match.params.id
      Meteor.apply('usernameRecommander', [{
              id,
              }], {
              onResultReceived: (error, response) => {
                if (error) console.warn(error.reason);
                                 
                 {response ?
                 this.setState({username: response.username}) 
                 :
                 ''}

                  {response ?
                 this.setState({gender: response.profile.gender}) 
                 :
                 ''}
                },
        })
    }

    renderAllreponses() {
          let Allreponses = this.props.Lastrecommandation;

          return Allreponses.map((message) => {
           let date = Date.parse(message.date);
             
            return (
              <ListeLastRecommandations
                key={message._id}
                message={message}
                date={date}         
              />
            );
          });
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
                  <ContentMenuLeft />
                  <div className="MainContent">
                  <Segment>
                  <Header>
                    <div className="titreRecomandation"> Les dernières recommandations </div>
                    </Header>
                  </Segment>
                   {this.renderAllreponses()}
                  </div>    
                      
                  </div> 
                </div>
              </Sidebar.Pusher>
        </Sidebar.Pushable>
      
      </div>
    );
  }
}

export default DerniereRecommandations =  withTracker(() => {
  const Handle1 = Meteor.subscribe('allRecommandations');
  const loading1 = !Handle1.ready();
  const Lastrecommandation = Recommandations.find({}, {sort:{date: -1},limit:5});
  const reponseExists1 = !loading1 && !!Lastrecommandation;

  return {
    Lastrecommandation: reponseExists1 ? Lastrecommandation.fetch() : [],
  };
})(DerniereRecommandations);
