import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor';
import {  Input, Label, Menu, Header, Image, Divider, Segment, Icon } from 'semantic-ui-react'
import { Link } from 'react-router-dom';
import { withTracker } from 'meteor/react-meteor-data';
import AdSense from 'react-adsense';

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

import LastConseilleresContent from '../component/LastConseilleresContent.js';
import LastRecommandationsContent from '../component/LastRecommandationsContent.js';

class ContentMenuLeft extends Component {

	constructor(props) {
        super(props);
     
        this.state = {
           activeItem: '',
           id:'',
           
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
  }

  handleContextRef = contextRef => this.setState({ contextRef })

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  renderLastConseiller() {
      let Allconseilleres = this.props.lastConseiller;

      return Allconseilleres.map((conseiller) => {
        
        return (
          <LastConseilleresContent
            key={conseiller._id}
            conseiller={conseiller}      
          />
        );
      });
  }

  renderLastRecommandations() {
      let Allrecommandations = this.props.Lastrecommandation;

      return Allrecommandations.map((conseiller) => {
        
        return (
          <LastRecommandationsContent
            key={conseiller._id}
            conseiller={conseiller}      
          />
        );
      });
  }

  render() {
    const { activeItem } = this.state
    const { contextRef } = this.state

		return (
			<div className="MenuLeft">
  			<Menu vertical>
  					<div
  					 className="HeaderMenu"
  					 >
  					 Mon compte
  				 	</div>
            <div className="espaceConseiller"></div>
  				    <div className="MenuItem">
  					    <Link to={'/Profil/'+ Meteor.userId() }>
                <div className="star">  	
  					         	<FaUser /> 
                </div>Profil
  				        </Link>
    					</div>
    					
    					<div className="MenuItem">
  				        <Link to={'/Chat/' + this.state.id}>
                  <div className="star">  	
  				          <FaComments /> 
                  </div> Messagerie
  				        </Link>
  					</div>
  			       
  			       	<div className="MenuItem">
  			        	<Link to={'/Favoris/' }>
                    <div className="star">	
  			          		<FaStar />
                    </div>
                       Favoris
  			          </Link>
    					</div>

              <div className="MenuItem">
                  <Link to={'/SuiviConseil/' }>
                    <div className="star">    
                         <FaCalendarCheckO />
                    </div> Suivi des conseils
                  </Link>
              </div>

  			       	<div className="MenuItem">
  			        	<Link to={'/MessagesPostes/' }>
                    <div className="star">  	
    			          		 <FaEnvelope />
                    </div> Messages postés
  			       		</Link>
    					</div>

  			      	<div className="MenuItem">
  			        	<Link to={'/ListeDons/' + Meteor.userId() }>
                    <div className="star">  	
  			          		<FaEur /> 
                    </div>  Dons
  			    		</Link>
    					</div>
              <div className="MenuItem lesFilles">
                <Link to={'/Livre/'}> 
                  <div className="star">     
                      <FaBook/>
                  </div> Pour les filles
                </Link>
              </div>
  			</Menu>

        <div className="espacePub" ></div>
        {/*
        <AdSense.Google
          client='ca-pub-6112176939320267'
          slot='6737349349'
          style={{ display: 'inline-block',width:'200px', height:'200px'}}
        />*/}


  		  <div className="MenuLeftLastConseiller">
    				<div
    				 className="HeaderMenu"
    				 >
    				 Dernières recommandations
    				 </div>
             <div className="espaceConseiller"></div>
    			        {this.renderLastRecommandations()}
  			</div>

        <div className="espacePub" ></div>

        <div className="MenuLeftLastConseiller">
            <div
             className="HeaderMenu"
             >
             Nouveaux conseillers
             </div>
             <div className="espaceConseiller"></div>
                  {this.renderLastConseiller()}
        </div>


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
