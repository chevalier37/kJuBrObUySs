import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor';
import { Segment, Button, Checkbox, Form, Header, TextArea } from 'semantic-ui-react'
import { Link } from 'react-router-dom';
import { withTracker } from 'meteor/react-meteor-data';

import FormPosterMessage from './FormPosterMessage.js';
import ListeModifierRecommandation from './ListeModifierRecommandation.js';

import { Recommandations } from '../../api/Recommandations.js';

class ContentModifierRecommandations extends Component {

	constructor(props) {
			    super(props);
			 
			    this.state = {
			      	allMessages: 'visible',
				 	
			    };
			}

	renderAllMessages() {
	    let AllMessages = this.props.allMessages;

	    return AllMessages.map((message) => {
	     let date = Date.parse(message.post_date);
         
	      return (
	        <ListeModifierRecommandation
	          key={message._id}
	          message={message}
	          date={date}
	          id={message._id}         
	        />
	      );
	    });
	}
			   
  render() {
		
		return (
			<div className="MainContent">
				<Segment>
					<Header>
					Modifier une recommandation
					</Header>
				</Segment>
	  			<div className="ListeMesMessages">
	  				{this.renderAllMessages()}
	  			</div>
			</div>

		);
  	}
}

export default withTracker(({post_id}) => {
	const myId = Meteor.userId();
  	const Handle = Meteor.subscribe('Recommandations', myId);
  	const loading = !Handle.ready();
  	const allposts = Recommandations.find({_id:post_id});
  	const postExists = !loading && !!allposts;
  
  return {
    allMessages: postExists ? allposts.fetch() : []
  };
})(ContentModifierRecommandations);