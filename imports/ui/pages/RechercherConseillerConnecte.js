import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';
import { Link } from 'react-router-dom';
import { Sidebar, Segment, Button, Header, Form, Select, Input, Message} from 'semantic-ui-react'
import Img from 'react-image'
import { Route, Redirect } from 'react-router';


//Component
import HeaderPage from '../component/HeaderPage.js';
import ContentMenuRight from '../component/ContentMenuRight.js';
import ButtonPusher from '../component/ButtonPusher.js';
import ContentMenuLeft from '../component/ContentMenuLeft.js';
import FormPosterReponse from '../component/FormPosterReponse.js';
import SingleMessagePost from '../component/SingleMessagePost.js';
import ListeConseillerConnecte from '../component/ListeConseillerConnecte.js';

import { Conseilleres } from '../../api/Conseilleres.js';

const Jours = [
  { key: '1', text: 'Premier amour', value: 'Premieramour' },
  { key: '2', text: 'Trahison', value: 'Trahison' },
  { key: '3', text: 'Friendzone', value: 'Friendzone' },
  { key: '4', text: 'Amour à distance', value: 'Amourdistance' },
  { key: '5', text: 'Séparation', value: 'Separation' },
  { key: '6', text: 'Timidité', value: 'Timidite' },
  { key: '7', text: 'Dépression', value: 'Depression' },
  { key: '8', text: 'Suicide', value: 'Suicide' },
  { key: '9', text: 'Décès', value: 'Deces' },
  { key: '10', text: 'Mutilation', value: 'Mutilation' },
  { key: '11', text: 'Premiere fois', value: 'Premierefois' },
  { key: '12', text: 'Contraception', value: 'Contraception' },
  { key: '13', text: 'Maladie, MST', value: 'MST' },
  { key: '14', text: 'Viol', value: 'Viol' },
  { key: '15', text: 'Avortement', value: 'Avortement' },
  { key: '16', text: 'Orientation sexuelle', value: 'Orientation sexuelle' },
  { key: '17', text: 'Anorexie', value: 'Anorexie' },
  { key: '18', text: 'Obésite', value: 'Obesite' },
  { key: '19', text: 'Drogue', value: 'Drogue' },
  { key: '20', text: 'Alcool', value: 'Alcool' },
  { key: '21', text: 'Complexe', value: 'Complexe' },
  { key: '22', text: 'Hospitalisation', value: 'Hospitalisation' },
  { key: '23', text: 'Handicap', value: 'Handicap' },
  { key: '24', text: 'Accident', value: 'Accident' },
  { key: '25', text: 'Echec scolaire', value: 'Echec scolaire' },
  { key: '26', text: 'Harcèlement', value: 'Harcelement' },
  { key: '27', text: 'Discrimination', value: 'Discrimination' },
  { key: '28', text: 'Violence', value: 'Violence' },
]

class RecommandationsDonné extends Component {

    constructor(props) {
        super(props);
        this.state = {
          visible: false,
          username:'',
          gender:'',
          jours: '',
          redirection:false,
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

    Submit(event) {
      event.preventDefault();
      this.setState({redirection: true,})
    }

    jours(value) {
    this.setState({
      jours: value,
    });
    }
    renderAllreponses() {
          let Allreponses = this.props.lastConseiller;

          return Allreponses.map((message) => {
           let date = Date.parse(message.date);
             
            return (
              <ListeConseillerConnecte
                key={message._id}
                id={message.user_id}
                message={message}
                date={date}         
              />
            );
          });
      }

    render() {
    const { visible } = this.state
    let jours=this.state.jours; 
    const redirection = this.state.redirection;
   
    if (redirection) {
      return <Redirect to={'/RechercherConseillerConnecte/' + jours } />;
    } 

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
                            <div className="titreRecomandation"> Tous les conseillers connectés </div>
                          </Header>
                        </Segment>
                        <Segment>
                          <Header>
                            <div className="titreRecomandation">
                             Rechercher par compétences: 
                               <Form error onSubmit={this.Submit.bind(this)}>
                                  <Form.Group widths='equal' error>
                                          <Form.Select
                                           fluid
                                           options={Jours}
                                           placeholder='Compétences'
                                           onChange={(e, { value }) => this.jours(value)}
                                           />
                                  </Form.Group>
                                    <Button type='submit' color='green'>Valider</Button>
                                </Form>

                            </div>
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

export default RecommandationsDonné =  withTracker(({match}) => {
  const theme = match.params.theme;
  const Handle = Meteor.subscribe('AllConseiller');
  const loading = !Handle.ready();

  const allConseillers = Conseilleres.find({premierAmour:true}, {sort:{date: -1}});
  
  const reponseExists = !loading && !!allConseillers;

  return {
    lastConseiller: reponseExists ? allConseillers.fetch() : [],
  };
})(RecommandationsDonné);
