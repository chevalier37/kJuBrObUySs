import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';
import { Link } from 'react-router-dom';
import { Sidebar, Segment, Button, Header, Form, Select, Input, Message, Loader} from 'semantic-ui-react'
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
  { key: '1', text: 'Premier amour', value: 'premierAmour' },
  { key: '2', text: 'Trahison', value: 'trahison' },
  { key: '3', text: 'Friendzone', value: 'Friendzone' },
  { key: '4', text: 'Amour à distance', value: 'amourdistance' },
  { key: '5', text: 'Séparation', value: 'separation' },
  { key: '6', text: 'Timidité', value: 'timidite' },
  { key: '7', text: 'Dépression', value: 'depression' },
  { key: '8', text: 'Suicide', value: 'suicide' },
  { key: '9', text: 'Décès', value: 'deces' },
  { key: '10', text: 'Mutilation', value: 'mutilation' },
  { key: '11', text: 'Premiere fois', value: 'premierfois' },
  { key: '12', text: 'Contraception', value: 'contraception' },
  { key: '13', text: 'Maladie, MST', value: 'mst' },
  { key: '14', text: 'Viol', value: 'viol' },
  { key: '15', text: 'Avortement', value: 'avortement' },
  { key: '16', text: 'Orientation sexuelle', value: 'orientationSex' },
  { key: '17', text: 'Anorexie', value: 'Anorexie' },
  { key: '18', text: 'Obésite', value: 'obesite' },
  { key: '19', text: 'Drogue', value: 'drogue' },
  { key: '20', text: 'Alcool', value: 'alcool' },
  { key: '21', text: 'Complexe', value: 'complexe' },
  { key: '22', text: 'Hospitalisation', value: 'hopital' },
  { key: '23', text: 'Handicap', value: 'handicap' },
  { key: '24', text: 'Accident', value: 'accident' },
  { key: '25', text: 'Echec scolaire', value: 'echecEcole' },
  { key: '26', text: 'Harcèlement', value: 'Harcelement' },
  { key: '27', text: 'Discrimination', value: 'discrimination' },
  { key: '28', text: 'Violence', value: 'Violence' },
]

class ConseillerConnecter extends Component {

    constructor(props) {
        super(props);
        this.state = {
          visible: false,
          username:'',
          gender:'',
          jours: '',
          theme:"",
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


    jours(value) {
    this.setState({
      theme: value,
    });
    }

    renderAllreponses() {
          let Allreponses = this.props.Conseiller;

          return Allreponses.map((message) => {
           let gender = message.profile.gender;
           let naissance = message.profile.naissance;

            return (
              <ListeConseillerConnecte
                key={message._id}
                id={message._id}
                message={message}
                date={naissance}
                gender={gender}        
              />
            );
          });
      }

    /*renderpremierAmour() {
          let Allreponses = this.props.premierAmour;

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

      rendertrahison() {
          let Allreponses = this.props.trahison;

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

      renderFriendzone() {
          let Allreponses = this.props.Friendzone;

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

      renderamourdistance() {
          let Allreponses = this.props.amourdistance;

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

      renderseparation() {
          let Allreponses = this.props.separation;

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

      rendertimidite() {
          let Allreponses = this.props.timidite;

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

      renderdepression() {
          let Allreponses = this.props.depression;

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

      rendermutilation() {
          let Allreponses = this.props.mutilation;

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

      rendersuicide() {
          let Allreponses = this.props.suicide;

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

      renderdeces() {
          let Allreponses = this.props.deces;

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

      renderpremierfois() {
          let Allreponses = this.props.premierfois;

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

      rendercontraception() {
          let Allreponses = this.props.contraception;

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

      rendermst() {
          let Allreponses = this.props.mst;

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

      renderviol() {
          let Allreponses = this.props.viol;

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

      renderavortement() {
          let Allreponses = this.props.avortement;

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

      renderorientationSex() {
          let Allreponses = this.props.orientationSex;

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

      renderAnorexie() {
          let Allreponses = this.props.Anorexie;

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

      renderobesite() {
          let Allreponses = this.props.obesite;

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


      renderdrogue() {
          let Allreponses = this.props.drogue;

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

      renderalcool() {
          let Allreponses = this.props.alcool;

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

      rendercomplexe() {
          let Allreponses = this.props.complexe;

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

      renderhopital() {
          let Allreponses = this.props.hopital;

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

      renderaccident() {
          let Allreponses = this.props.accident;

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

      renderhandicap() {
          let Allreponses = this.props.handicap;

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

      renderechecEcole() {
          let Allreponses = this.props.echecEcole;

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

      renderHarcelement() {
          let Allreponses = this.props.Harcelement;

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

      renderdiscrimination() {
          let Allreponses = this.props.discrimination;

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

      renderViolence() {
          let Allreponses = this.props.Violence;

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
      }*/




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
                            <div className="titreRecomandation">
                             Tous les conseillers en ligne
                             {/* <div className="compétences">
                               <Form>
                                  <Form.Group widths='equal' error>
                                          <Form.Select
                                           fluid
                                           options={Jours}
                                           placeholder='Compétences'
                                           onChange={(e, { value }) => this.jours(value)}
                                           />
                                  </Form.Group>
                                </Form>
                              </div>*/}
                            </div>
                          </Header>
                        </Segment>
                        {/*loader au chargement de la page*/}
                          <div className={this.props.loading ? "visibleLoader" : "none"}>
                                <Loader active>Chargement des conseillers</Loader>
                          </div>
                        <div className={this.state.theme=="" ? "visibleConseiller" : "none"}>
                        {/*loader au chargement de la page*/}
                            <div className={this.props.loading ? "visibleLoader" : "none"}>
                                  <Loader active>Recherche des conseillers en ligne</Loader>
                            </div>
                         {this.renderAllreponses()}
                         </div>
                        {/* <div className={this.state.theme=="premierAmour" ? "visibleConseiller" : "none"}>
                            {this.renderpremierAmour()}
                         </div>
                         <div className={this.state.theme=="trahison" ? "visibleConseiller" : "none"}>
                            {this.rendertrahison()}
                         </div>
                         <div className={this.state.theme=="Friendzone" ? "visibleConseiller" : "none"}>
                            {this.renderFriendzone()}
                         </div>
                         <div className={this.state.theme=="amourdistance" ? "visibleConseiller" : "none"}>
                            {this.renderamourdistance()}
                         </div>
                         <div className={this.state.theme=="separation" ? "visibleConseiller" : "none"}>
                            {this.renderseparation()}
                         </div>
                         <div className={this.state.theme=="timidite" ? "visibleConseiller" : "none"}>
                            {this.rendertimidite()}
                         </div>
                         <div className={this.state.theme=="depression" ? "visibleConseiller" : "none"}>
                            {this.renderdepression()}
                         </div>
                         <div className={this.state.theme=="mutilation" ? "visibleConseiller" : "none"}>
                            {this.rendermutilation()}
                         </div>
                         <div className={this.state.theme=="suicide" ? "visibleConseiller" : "none"}>
                            {this.rendersuicide()}
                         </div>
                         <div className={this.state.theme=="deces" ? "visibleConseiller" : "none"}>
                            {this.renderdeces()}
                         </div>
                         <div className={this.state.theme=="premierfois" ? "visibleConseiller" : "none"}>
                            {this.renderpremierfois()}
                         </div>
                         <div className={this.state.theme=="contraception" ? "visibleConseiller" : "none"}>
                            {this.rendercontraception()}
                         </div>
                         <div className={this.state.theme=="mst" ? "visibleConseiller" : "none"}>
                            {this.rendermst()}
                         </div>
                         <div className={this.state.theme=="viol" ? "visibleConseiller" : "none"}>
                            {this.renderviol()}
                         </div>
                         <div className={this.state.theme=="avortement" ? "visibleConseiller" : "none"}>
                            {this.renderavortement()}
                         </div>
                         <div className={this.state.theme=="orientationSex" ? "visibleConseiller" : "none"}>
                            {this.renderorientationSex()}
                         </div>
                         <div className={this.state.theme=="Anorexie" ? "visibleConseiller" : "none"}>
                            {this.renderAnorexie()}
                         </div>
                         <div className={this.state.theme=="obesite" ? "visibleConseiller" : "none"}>
                            {this.renderobesite()}
                         </div>
                         <div className={this.state.theme=="drogue" ? "visibleConseiller" : "none"}>
                            {this.renderdrogue()}
                         </div>
                         <div className={this.state.theme=="alcool" ? "visibleConseiller" : "none"}>
                            {this.renderalcool()}
                         </div>
                         <div className={this.state.theme=="complexe" ? "visibleConseiller" : "none"}>
                            {this.rendercomplexe()}
                         </div>
                         <div className={this.state.theme=="hopital" ? "visibleConseiller" : "none"}>
                            {this.renderhopital()}
                         </div>
                         <div className={this.state.theme=="accident" ? "visibleConseiller" : "none"}>
                            {this.renderaccident()}
                         </div>
                         <div className={this.state.theme=="handicap" ? "visibleConseiller" : "none"}>
                            {this.renderhandicap()}
                         </div>
                         <div className={this.state.theme=="echecEcole" ? "visibleConseiller" : "none"}>
                            {this.renderechecEcole()}
                         </div>
                         <div className={this.state.theme=="Harcelement" ? "visibleConseiller" : "none"}>
                            {this.renderHarcelement()}
                         </div>
                         <div className={this.state.theme=="discrimination" ? "visibleConseiller" : "none"}>
                            {this.renderdiscrimination()}
                         </div>
                         <div className={this.state.theme=="Violence" ? "visibleConseiller" : "none"}>
                            {this.renderViolence()}
                         </div>*/}  
                      </div>  
                    </div> 
                </div>
              </Sidebar.Pusher>
        </Sidebar.Pushable>
      
      </div>
    );
  }
}

export default ConseillerConnecter =  withTracker(() => {
  
  const Handle = Meteor.subscribe('allConseiller');
  const loading = !Handle.ready();

 
  const allConseillers = Meteor.users.find({'conseiller':true, 'status.online':true});
  const reponseExists = !loading && !!allConseillers;

  /*const premierAmour = Conseilleres.find({premierAmour:true, Online:true}, {sort:{date: -1}});
  const reponseExists1 = !loading && !!premierAmour;

  const trahison = Conseilleres.find({trahison:true, Online:true}, {sort:{date: -1}});
  const reponseExists2 = !loading && !!trahison;

  const amourdistance = Conseilleres.find({amourdistance:true, Online:true}, {sort:{date: -1}});
  const reponseExists4 = !loading && !!amourdistance;

  const Friendzone = Conseilleres.find({Friendzone:true, Online:true}, {sort:{date: -1}});
  const reponseExists3 = !loading && !!Friendzone;

  const separation = Conseilleres.find({separation:true, Online:true}, {sort:{date: -1}});
  const reponseExists5 = !loading && !!separation;

  const timidite = Conseilleres.find({timidite:true, Online:true}, {sort:{date: -1}});
  const reponseExists6 = !loading && !!timidite;

  const depression = Conseilleres.find({depression:true, Online:true}, {sort:{date: -1}});
  const reponseExists7 = !loading && !!depression;

  const mutilation = Conseilleres.find({mutilation:true, Online:true}, {sort:{date: -1}});
  const reponseExists8 = !loading && !!mutilation;

  const suicide = Conseilleres.find({suicide:true, Online:true}, {sort:{date: -1}});
  const reponseExists9 = !loading && !!suicide;

  const deces = Conseilleres.find({deces:true, Online:true}, {sort:{date: -1}});
  const reponseExists10 = !loading && !!deces;

  const premierfois = Conseilleres.find({premierfois:true, Online:true}, {sort:{date: -1}});
  const reponseExists11 = !loading && !!premierfois;

  const contraception = Conseilleres.find({contraception:true, Online:true}, {sort:{date: -1}});
  const reponseExists12 = !loading && !!contraception;

  const mst = Conseilleres.find({mst:true, Online:true}, {sort:{date: -1}});
  const reponseExists13 = !loading && !!mst;

  const viol = Conseilleres.find({viol:true, Online:true}, {sort:{date: -1}});
  const reponseExists14 = !loading && !!viol;

  const avortement = Conseilleres.find({avortement:true, Online:true}, {sort:{date: -1}});
  const reponseExists15 = !loading && !!avortement;

  const orientationSex = Conseilleres.find({orientationSex:true, Online:true}, {sort:{date: -1}});
  const reponseExists16 = !loading && !!orientationSex;

  const Anorexie = Conseilleres.find({Anorexie:true, Online:true}, {sort:{date: -1}});
  const reponseExists17 = !loading && !!Anorexie;

  const obesite = Conseilleres.find({obesite:true, Online:true}, {sort:{date: -1}});
  const reponseExists18 = !loading && !!obesite;

  const drogue = Conseilleres.find({drogue:true, Online:true}, {sort:{date: -1}});
  const reponseExists19 = !loading && !!drogue;

  const alcool = Conseilleres.find({alcool:true, Online:true}, {sort:{date: -1}});
  const reponseExists20 = !loading && !!alcool;

  const complexe = Conseilleres.find({complexe:true, Online:true}, {sort:{date: -1}});
  const reponseExists21 = !loading && !!complexe;

  const hopital = Conseilleres.find({hopital:true, Online:true}, {sort:{date: -1}});
  const reponseExists23 = !loading && !!hopital;

  const accident = Conseilleres.find({accident:true, Online:true}, {sort:{date: -1}});
  const reponseExists24 = !loading && !!accident;

  const handicap = Conseilleres.find({handicap:true, Online:true}, {sort:{date: -1}});
  const reponseExists25 = !loading && !!handicap;

  const echecEcole = Conseilleres.find({echecEcole:true, Online:true}, {sort:{date: -1}});
  const reponseExists26 = !loading && !!echecEcole;

  const Harcelement = Conseilleres.find({Harcelement:true, Online:true}, {sort:{date: -1}});
  const reponseExists27 = !loading && !!Harcelement;

  const discrimination = Conseilleres.find({discrimination:true, Online:true}, {sort:{date: -1}});
  const reponseExists28 = !loading && !!discrimination;

  const Violence = Conseilleres.find({Violence:true, Online:true}, {sort:{date: -1}});
  const reponseExists29 = !loading && !!Violence;*/

  return {
    Conseiller: reponseExists ? allConseillers.fetch() : [],
    /*premierAmour: reponseExists1 ? premierAmour.fetch() : [],
    trahison: reponseExists2 ? trahison.fetch() : [],
    Friendzone: reponseExists3 ? Friendzone.fetch() : [],
    amourdistance: reponseExists4 ? amourdistance.fetch() : [],
    separation: reponseExists5 ? separation.fetch() : [],
    timidite: reponseExists6 ? timidite.fetch() : [],
    depression: reponseExists7 ? depression.fetch() : [],
    mutilation: reponseExists8 ? mutilation.fetch() : [],
    suicide: reponseExists9 ? suicide.fetch() : [],
    deces: reponseExists10 ? deces.fetch() : [],
    premierfois: reponseExists11 ? premierfois.fetch() : [],
    contraception: reponseExists12 ? contraception.fetch() : [],
    mst: reponseExists13 ? mst.fetch() : [],
    viol: reponseExists14 ? viol.fetch() : [],
    avortement: reponseExists15 ? avortement.fetch() : [],
    orientationSex: reponseExists16 ? orientationSex.fetch() : [],
    Anorexie: reponseExists17 ? Anorexie.fetch() : [],
    obesite: reponseExists18 ? obesite.fetch() : [],
    drogue: reponseExists19 ? drogue.fetch() : [],
    alcool: reponseExists20 ? alcool.fetch() : [],
    complexe: reponseExists21 ? complexe.fetch() : [],
    hopital: reponseExists23 ? hopital.fetch() : [],
    accident: reponseExists24 ? accident.fetch() : [],
    handicap: reponseExists25 ? handicap.fetch() : [],
    echecEcole: reponseExists26 ? echecEcole.fetch() : [],
    Harcelement: reponseExists27 ? Harcelement.fetch() : [],
    discrimination: reponseExists28 ? discrimination.fetch() : [],
    Violence: reponseExists29 ? Violence.fetch() : [],*/

    


  };
})(ConseillerConnecter);
