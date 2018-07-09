import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor';
import {  Input, Label, Menu, Header, Image, Divider, Segment, Icon } from 'semantic-ui-react'
import { Link } from 'react-router-dom';
import { withTracker } from 'meteor/react-meteor-data';
import AdSense from 'react-adsense';
import Img from 'react-image'

import { Conseilleres } from '../../api/Conseilleres.js';
import { Recommandations } from '../../api/Recommandations.js';

//Icons
import FaUser from 'react-icons/lib/fa/user';
import FaComments from 'react-icons/lib/fa/comments';
import FaStar from 'react-icons/lib/fa/star';
import FaEnvelope from 'react-icons/lib/fa/envelope-o';
import FaEur from 'react-icons/lib/fa/eur';
import FaBook from 'react-icons/lib/fa/book';
import FaCalendarCheckO from 'react-icons/lib/fa/calendar-check-o';
import FaHandRight from 'react-icons/lib/fa/hand-o-right';
import FaHandLeft from 'react-icons/lib/fa/hand-o-left';


import LastConseilleresContent from '../component/LastConseilleresContent.js';
import LastRecommandationsContent from '../component/LastRecommandationsContent.js';

class ContentMenuLeft extends Component {

	constructor(props) {
        super(props);
     
        this.state = {
           activeItem: '',
           id:'',
           moderateur:false,
           ArticleModeration:0,
        };
    }

  componentWillMount(){
    
  	//on cherche le dernier contact
  	Meteor.apply('lastContact', [{
          }], {
          onResultReceived: (error, response) => {
            if (error) console.warn(error.reason);
            
            {
            response ?
             this.setState({id: response})
             :
             this.setState({id: Meteor.userId()})
          	}

            },
    });

    Meteor.apply('ArticleModeration', [{
          }], {
          onResultReceived: (error, response) => {
            if (error) console.warn(error.reason);
            
            {
            response ?
             this.setState({ArticleModeration: response})
             :
             ""
          	}

            },
    });

    if(Meteor.userId() == "QXf4Th7ghBzLZjpWo" ||
       Meteor.userId() == "oANNC3P9SpQ5Fw8Qg" ||
       Meteor.userId() == "3zwe2xG8SyHvMZaub" ||
       Meteor.userId() == "Bd7c7opRJ6TQ8PcD3" || //alibaba
       Meteor.userId() == "ThwXvbof74cb56Jgz"  // seduire est un art
       ){
      this.setState({moderateur: true})
    }
  }

  handleContextRef = contextRef => this.setState({ contextRef })

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state
    const { contextRef } = this.state

		return (
			<div className="MenuLeft">
            <div className="espaceConseiller"></div>
            <div className="MenuItem">
                  <Link to={'/Chat/' + this.state.id}>
                  <div className="star">   
                          <Img className="iconMenu" src="/chat.svg"/>
                    </div>
                    <div className="TextMenu">
                      Messagerie
                    </div>
                  </Link>
            </div>
            <div className="MenuItem">
                  <Link to={'/Videos/'}>
                  <div className="star">   
                          <Img className="iconMenu" src="/youtube.svg"/>
                    </div>
                    <div className="TextMenu">
                      Vidéos
                    </div>
                  </Link>
            </div>
            <div className={this.state.moderateur ? "MenuItem" : "none"}>
                  <Link to={'/ajouterVideo/'}>
                  <div className="star">   
                          <Img className="iconMenu" src="/video.svg"/>
                    </div>
                    <div className="TextMenu">
                      Ajouter une vidéo
                    </div>
                  </Link>
            </div>
            <div className="espaceConseiller"></div>
            <div className="TitreMenuItem">
             Mon compte
            </div>
  				    <div className="MenuItem">
  					    <Link to={'/Profil/'+ Meteor.userId() }>
                    <div className="star">  	
      					         	<Img className="iconMenu" src="/user.svg"/>
                    </div>
                    <div className="TextMenu">
                      Profil
                    </div>
  				      </Link>
    					</div>

                  <div className="MenuItem">
                  <Link to={'/Favoris/' }>
                     <div className="star">   
                          <Img className="iconMenu" src="/star.svg"/>
                    </div>
                    <div className="TextMenu">
                      Favoris
                    </div>
                  </Link>
              </div>

                <div className="MenuItem">
                  <Link to={'/ListeDons/' + Meteor.userId() }>
                    <div className="star">   
                          <Img className="iconMenu" src="/euro.svg"/>
                    </div>
                    <div className="TextMenu">
                      Dons
                    </div>
                </Link>
              </div>

              <div className="MenuItem">
                <Link to={'/Livre/'} >   
                    <div className="star">   
                          <Img className="iconMenu" src="/girl.svg"/>
                    </div>
                    <div className="TextMenu">
                      Pour les filles
                    </div>
                </Link>
              </div>

              <div className="espacePub" ></div>
              <div className="TitreMenuItem">
               Articles
              </div>
              <div className="MenuItem">
                  <Link to={'/MesArticles/' }>
                    <div className="star">   
                          <Img className="iconMenu" src="/articles.svg"/>
                    </div>
                    <div className="TextMenu">
                      Mes articles
                    </div>
                  </Link>
              </div>

              <div className="MenuItem">
                  <Link to="/RedigerArticles" >
                    <div className="star">   
                          <Img className="iconMenu" src="/pen.svg"/>
                    </div>
                    <div className="TextMenu">
                      Rédiger un article
                    </div>
                  </Link>
              </div>

              <div className={this.state.moderateur ? "MenuItem" : "none"}>
                  <Link to="/ArticlesModeration" >
                    <div className="star">   
                          <Img className="iconMenu" src="/notepad.svg"/>
                    </div>
                    <div className="TextMenu">
                      Modération 
                      <div className="ArticleModeration">{this.state.ArticleModeration}</div>
                    </div>
                  </Link>
              </div>

              <div className={this.state.moderateur ? "MenuItem" : "none"}>
                  <Link to="/ajouterSondage" >
                    <div className="star">   
                          <Img className="iconMenu" src="/graph.svg"/>
                    </div>
                    <div className="TextMenu">
                      Ajouter sondage
                    </div>
                  </Link>
              </div>

    					
    					<div className="espacePub" ></div>
              <div className="TitreMenuItem">
               Conseils
              </div>
              <div className="MenuItem">
                  <Link to={'/SuiviConseil/' }>
                    <div className="star">   
                          <Img className="iconMenu" src="/calendar.svg"/>
                    </div>
                    <div className="TextMenu">
                      Suivis des conseils
                    </div>
                  </Link>
              </div>

  			      <div className="MenuItem">
  			        	<Link to={'/MessagesPostes/' }>
                    <div className="star">   
                          <Img className="iconMenu" src="/email.svg"/>
                    </div>
                    <div className="TextMenu">
                      Messages postés
                    </div>
  			       		</Link>
    					</div>

              <div className="MenuItem">
                  <Link to={'/Recommandations/' + Meteor.userId() }>
                    <div className="star">   
                          <Img className="iconMenu" src="/heart.svg"/>
                    </div>
                    <div className="TextMenu">
                      Recommandations reçues
                    </div>
                  </Link>
              </div>

              <div className="MenuItem">
                  <Link to={'/RecommandationsDonner/' + Meteor.userId()}>
                    <div className="star">   
                          <Img className="iconMenu" src="/gift.svg"/>
                    </div>
                    <div className="TextMenu">
                      Recommandations données
                    </div>
                  </Link>
              </div>

              <div className="espacePub" ></div>

              <div className="espaceConseiller"></div>
                <div className="TitreMenuItem">
                 Conseillers
              </div>

               {/*<div className="MenuItem">
                      <Link to="/ConseillerConnecter" >
                        <div className="star">   
                              <Img className="iconMenu" src="/users.svg"/>
                        </div>
                        <div className="TextMenu">
                          Conseillers en ligne
                        </div>
                      </Link>
                  </div>*/}

                    <div className="MenuItem">
                      <Link to={'/NouveauxConseillers/' }>
                        <div className="star">   
                              <Img className="iconMenu" src="/team.svg"/>
                        </div>
                        <div className="TextMenu">
                          Nouveaux conseillers
                        </div>
                    </Link>
                </div>

                <div className="MenuItem">
                      <Link to={'/DerniereRecommandations/'}>
                        <div className="star">   
                              <Img className="iconMenu" src="/bulb.svg"/>
                        </div>
                        <div className="TextMenu">
                          Dernières recommandations
                        </div>
                      </Link>
                  </div>

                   {/* <div className="MenuItem">
                      <Link to={'/DevenirConseiller/'}>
                        <div className="star">   
                              <Img className="iconMenu" src="/aid.svg"/>
                        </div>
                        <div className="TextMenu">
                          Devenir conseillers
                        </div>
                    </Link>
                </div>*/}

              <div className="espacePub" ></div>

              <div className="espaceConseiller"></div>
                <div className="TitreMenuItem">
                 L'équipe
              </div>

              <div className="MenuItem">
                    <Link to={'/NousRejoindre/'}>
                      <div className="star">   
                            <Img className="iconMenu" src="/join.svg"/>
                      </div>
                      <div className="TextMenu">
                        Nous rejoindre
                      </div>
                    </Link>
              </div>
           
            {/*
            <AdSense.Google
              client='ca-pub-6112176939320267'
              slot='6737349349'
              style={{ display: 'inline-block',width:'200px', height:'200px'}}
            />*/}


        <div className="espacePub" ></div>
      
        <AdSense.Google
          client='ca-pub-6112176939320267'
          slot='6737349349'
          style={{ display: 'inline-block',width:'200px', height:'200px'}}
        />
        

		</div>
		);
  	}
}

export default ContentMenuLeft =  withTracker(() => {

  const Handle = Meteor.subscribe('AllConseiller');
  const loading = !Handle.ready();
  const allConseillers = Conseilleres.find({}, {sort:{date: -1},limit:5});
  const reponseExists = !loading && !!allConseillers;

  const Handle1 = Meteor.subscribe('allRecommandations');
  const loading1 = !Handle1.ready();
  const Lastrecommandation = Recommandations.find({}, {sort:{date: -1},limit:5});
  const reponseExists1 = !loading1 && !!Lastrecommandation;

  return {
    lastConseiller: reponseExists ? allConseillers.fetch() : [],
    Lastrecommandation: reponseExists1 ? Lastrecommandation.fetch() : [],
  };
})(ContentMenuLeft);
