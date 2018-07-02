import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor';
import { Segment, Button, Checkbox, Form, Header, TextArea } from 'semantic-ui-react'
import { Link } from 'react-router-dom';
import { withTracker } from 'meteor/react-meteor-data';

import FormPosterMessage from './FormPosterMessage.js';
import ListeMesArticles from './ListeMesArticles.js';

import { Articles } from '../../api/Articles.js';

class ContentMesArticles extends Component {

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
	     const rawContent = message.post_content;  
         
	      return (
	        <ListeMesArticles
	          key={message._id}
	          message={message}
	          date={date}
	          id={message._id}
	          content={rawContent}        
	        />
	      );
	    });
	}
			   
  render() {
		
		return (
			<div className="MainContent">
				<Segment>
					<Header> 
					 <div className="titreRecomandation"> Mes articles </div>
					</Header>
				</Segment>
	  			<div className="ListeMesMessages">
	  				{this.renderAllMessages()}
	  			</div>
			</div>

		);
  	}
}

export default withTracker(() => {
	const myId = Meteor.userId();
  	const Handle = Meteor.subscribe('MesArticles', myId);
  	const loading = !Handle.ready();
  	const allposts = Articles.find({post_author_id:myId}, { sort: { post_date: -1 }});
  	const postExists = !loading && !!allposts;
  
  return {
    allMessages: postExists ? allposts.fetch() : []
  };
})(ContentMesArticles);