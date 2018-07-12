import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor';
import { Segment, Button, Checkbox, Form, Header, TextArea, Dimmer, Loader } from 'semantic-ui-react'
import { Link } from 'react-router-dom';
import { withTracker } from 'meteor/react-meteor-data';
import Img from 'react-image'

import FormPosterMessage from './FormPosterMessage.js';
import ListeSondages from './ListeSondages.js';

import { Sondages } from '../../api/Sondages.js';

class MainContentSondages extends Component {

	constructor(props) {
			    super(props);
			 
			    this.state = {
			      	allMessages: 'visibleArticle',
					more:10,

			    };
			}

	renderAllMessages() {
	    let AllMessages = this.props.allMessages;
	    let more = this.state.more;
	    return AllMessages.slice(0, more).map((message) => {
	     let date = Date.parse(message.post_date);
         
	      return (
	        <ListeSondages
	          key={message._id}
	          message={message}
	          date={date}
	          id={message._id}
	          content={message.post_content}         
	        />
	      );
	    });
	}

	
	 

	 VoirPlus() {
	 	let plus = this.state.more + 5
       	this.setState({more: plus});
	 }

			   
  render() {

		return (
			<div className="MainContentArticle">
			<Segment>
              <div className="TitreSondage">
                Tous les sondages
              </div>
            </Segment>	    

	  			{/*loader au chargement de la page*/}
	  				<div className={this.props.loading ? "visibleLoader" : "none"}>
				        	<Loader active>Chargement des sondages</Loader>
	  				</div>
	  			<div className={this.state.allMessages}>
					
	  				{this.renderAllMessages()}
	  				<div className={this.state.more > this.props.countAllMessages ? "none" : "voirPlus" }>
						<Button
							fluid
					        color="green"
					        onClick={this.VoirPlus.bind(this)}>
					        Voir plus
						</Button>
					</div>
	  			</div>

			</div>

		);
  	}
}

export default withTracker(() => {
  
  const Handle = Meteor.subscribe('AllSondages');
  const loading = !Handle.ready();

  const allposts = Sondages.find({}, { sort: { date: -1 }});
  

   const postExists = !loading && !!allposts;

  return {
    allMessages: postExists ? allposts.fetch() : [],
    countAllMessages: postExists ? allposts.count() : '',

    loading:loading,

  };
})(MainContentSondages);