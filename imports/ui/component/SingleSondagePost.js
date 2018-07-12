import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor';
import { Segment, Button, Progress, Form, Header, Divider, Label, Comment } from 'semantic-ui-react'
import { Link } from 'react-router-dom';
import { withTracker } from 'meteor/react-meteor-data';
import { Articles } from '../../api/Articles.js';
import { EditorState, convertFromRaw, ContentState } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import renderHTML from 'react-render-html';
import Vote from 'react-icons/lib/fa/thumbs-up'; 
import AdSense from 'react-adsense';



class SingleSondagePost extends Component {
	
	constructor(props) {
		    super(props);
		 
		    this.state = {
			    disabled:false,
			    disabledVote:false,
			    color:true,
			    Q1R1:0,
	           Q1R2:0,
	           Q1R3:0,
	           Q1R4:0,
	           Q2R1:0,
	           Q2R2:0,
	           Q2R3:0, 
	           Q2R4:0, 
	           Q3R1:0,
	           Q3R2:0, 
	           Q3R3:0,
	           Q3R4:0, 
	           Q4R1:0,
	           Q4R2:0, 
	           Q4R3:0, 
	           Q4R4:0, 
	           Q5R1:0, 
	           Q5R2:0, 
	           Q5R3:0, 
	           Q5R4:0, 
	           Q6R1:0, 
	           Q6R2:0, 
	           Q6R3:0,
	           Q6R4:0, 
	           Q7R1:0, 
	           Q7R2:0, 
	           Q7R3:0, 
	           Q7R4:0, 
	           Q8R1:0, 
	           Q8R2:0, 
	           Q8R3:0,
	           Q8R4:0, 
	           Q9R1:0,
	           Q9R2:0,
	           Q9R3:0, 
	           Q9R4:0,
	           Q10R1:0, 
	           Q10R2:0,
	           Q10R3:0, 
	           Q10R4:0,

	           ButtonQ1R1:true,
	           ButtonQ1R2:true,
	           ButtonQ1R3:true,
	           ButtonQ1R4:true,
	           ButtonQ2R1:true,
	           ButtonQ2R2:true,
	           ButtonQ2R3:true, 
	           ButtonQ2R4:true, 
	           ButtonQ3R1:true,
	           ButtonQ3R2:true, 
	           ButtonQ3R3:true,
	           ButtonQ3R4:true, 
	           ButtonQ4R1:true,
	           ButtonQ4R2:true, 
	           ButtonQ4R3:true, 
	           ButtonQ4R4:true, 
	           ButtonQ5R1:true, 
	           ButtonQ5R2:true, 
	           ButtonQ5R3:true, 
	           ButtonQ5R4:true, 
	           ButtonQ6R1:true, 
	           ButtonQ6R2:true, 
	           ButtonQ6R3:true,
	           ButtonQ6R4:true, 
	           ButtonQ7R1:true, 
	           ButtonQ7R2:true, 
	           ButtonQ7R3:true, 
	           ButtonQ7R4:true, 
	           ButtonQ8R1:true, 
	           ButtonQ8R2:true, 
	           ButtonQ8R3:true,
	           ButtonQ8R4:true, 
	           ButtonQ9R1:true,
	           ButtonQ9R2:true,
	           ButtonQ9R3:true, 
	           ButtonQ9R4:true,
	           ButtonQ10R1:true, 
	           ButtonQ10R2:true,
	           ButtonQ10R3:true, 
	           ButtonQ10R4:true,
		    };
		}


		Q1R1(){
			this.setState({Q1R1: 1});
			this.setState({Q1R2: 0});
			this.setState({Q1R3: 0});
			this.setState({Q1R4: 0});

			this.setState({ButtonQ1R1: false});
			this.setState({ButtonQ1R2: true});
			this.setState({ButtonQ1R3: true});
			this.setState({ButtonQ1R4: true});
		}

		Q1R2(){
			this.setState({Q1R1: 0});
			this.setState({Q1R2: 1});
			this.setState({Q1R3: 0});
			this.setState({Q1R4: 0});

			this.setState({ButtonQ1R1: true});
			this.setState({ButtonQ1R2: false});
			this.setState({ButtonQ1R3: true});
			this.setState({ButtonQ1R4: true});
		}

		Q1R3(){
			this.setState({Q1R1: 0});
			this.setState({Q1R2: 0});
			this.setState({Q1R3: 1});
			this.setState({Q1R4: 0});

			this.setState({ButtonQ1R1: true});
			this.setState({ButtonQ1R2: true});
			this.setState({ButtonQ1R3: false});
			this.setState({ButtonQ1R4: true});
		}

		Q1R4(){
			this.setState({Q1R1: 0});
			this.setState({Q1R2: 0});
			this.setState({Q1R3: 0});
			this.setState({Q1R4: 1});

			this.setState({ButtonQ1R1: true});
			this.setState({ButtonQ1R2: true});
			this.setState({ButtonQ1R3: true});
			this.setState({ButtonQ1R4: false})
		}

		Q2R1(){
			this.setState({Q2R1: 1});
			this.setState({Q2R2: 0});
			this.setState({Q2R3: 0});
			this.setState({Q2R4: 0});

			this.setState({ButtonQ2R1: false});
			this.setState({ButtonQ2R2: true});
			this.setState({ButtonQ2R3: true});
			this.setState({ButtonQ2R4: true});
		}

		Q2R2(){
			this.setState({Q2R1: 0});
			this.setState({Q2R2: 1});
			this.setState({Q2R3: 0});
			this.setState({Q2R4: 0});

			this.setState({ButtonQ2R1: true});
			this.setState({ButtonQ2R2: false});
			this.setState({ButtonQ2R3: true});
			this.setState({ButtonQ2R4: true});
		}

		Q2R3(){
			this.setState({Q2R1: 0});
			this.setState({Q2R2: 0});
			this.setState({Q2R3: 1});
			this.setState({Q2R4: 0});

			this.setState({ButtonQ2R1: true});
			this.setState({ButtonQ2R2: true});
			this.setState({ButtonQ2R3: false});
			this.setState({ButtonQ2R4: true});
		}

		Q2R4(){
			this.setState({Q2R1: 0});
			this.setState({Q2R2: 0});
			this.setState({Q2R3: 0});
			this.setState({Q2R4: 1});

			this.setState({ButtonQ2R1: true});
			this.setState({ButtonQ2R2: true});
			this.setState({ButtonQ2R3: true});
			this.setState({ButtonQ2R4: false});
		}

		Q3R1(){
			this.setState({Q3R1: 1});
			this.setState({Q3R2: 0});
			this.setState({Q3R3: 0});
			this.setState({Q3R4: 0});

			this.setState({ButtonQ3R1: false});
			this.setState({ButtonQ3R2: true});
			this.setState({ButtonQ3R3: true});
			this.setState({ButtonQ3R4: true});
		}

		Q3R2(){
			this.setState({Q3R1: 0});
			this.setState({Q3R2: 1});
			this.setState({Q3R3: 0});
			this.setState({Q3R4: 0});

			this.setState({ButtonQ3R1: true});
			this.setState({ButtonQ3R2: false});
			this.setState({ButtonQ3R3: true});
			this.setState({ButtonQ3R4: true});
		}

		Q3R3(){
			this.setState({Q3R1: 0});
			this.setState({Q3R2: 0});
			this.setState({Q3R3: 1});
			this.setState({Q3R4: 0});

			this.setState({ButtonQ3R1: true});
			this.setState({ButtonQ3R2: true});
			this.setState({ButtonQ3R3: false});
			this.setState({ButtonQ3R4: true});
		}

		Q3R4(){
			this.setState({Q3R1: 0});
			this.setState({Q3R2: 0});
			this.setState({Q3R3: 0});
			this.setState({Q3R4: 1});

			this.setState({ButtonQ3R1: true});
			this.setState({ButtonQ3R2: true});
			this.setState({ButtonQ3R3: true});
			this.setState({ButtonQ3R4: false});
		}

		Q4R1(){
			this.setState({Q4R1: 1});
			this.setState({Q4R2: 0});
			this.setState({Q4R3: 0});
			this.setState({Q4R4: 0});

			this.setState({ButtonQ4R1: false});
			this.setState({ButtonQ4R2: true});
			this.setState({ButtonQ4R3: true});
			this.setState({ButtonQ4R4: true});
		}

		Q4R2(){
			this.setState({Q4R1: 0});
			this.setState({Q4R2: 1});
			this.setState({Q4R3: 0});
			this.setState({Q4R4: 0});

			this.setState({ButtonQ4R1: true});
			this.setState({ButtonQ4R2: false});
			this.setState({ButtonQ4R3: true});
			this.setState({ButtonQ4R4: true});
		}

		Q4R3(){
			this.setState({Q4R1: 0});
			this.setState({Q4R2: 0});
			this.setState({Q4R3: 1});
			this.setState({Q4R4: 0});

			this.setState({ButtonQ4R1: true});
			this.setState({ButtonQ4R2: true});
			this.setState({ButtonQ4R3: false});
			this.setState({ButtonQ4R4: true});
		}

		Q4R4(){
			this.setState({Q4R1: 0});
			this.setState({Q4R2: 0});
			this.setState({Q4R3: 0});
			this.setState({Q4R4: 1});

			this.setState({ButtonQ4R1: true});
			this.setState({ButtonQ4R2: true});
			this.setState({ButtonQ4R3: true});
			this.setState({ButtonQ4R4: false});
		}

		Q5R1(){
			this.setState({Q5R1: 1});
			this.setState({Q5R2: 0});
			this.setState({Q5R3: 0});
			this.setState({Q5R4: 0});

			this.setState({ButtonQ5R1: false});
			this.setState({ButtonQ5R2: true});
			this.setState({ButtonQ5R3: true});
			this.setState({ButtonQ5R4: true});
		}

		Q5R2(){
			this.setState({Q5R1: 0});
			this.setState({Q5R2: 1});
			this.setState({Q5R3: 0});
			this.setState({Q5R4: 0});

			this.setState({ButtonQ5R1: true});
			this.setState({ButtonQ5R2: false});
			this.setState({ButtonQ5R3: true});
			this.setState({ButtonQ5R4: true});
		}

		Q5R3(){
			this.setState({Q5R1: 0});
			this.setState({Q5R2: 0});
			this.setState({Q5R3: 1});
			this.setState({Q5R4: 0});

			this.setState({ButtonQ5R1: true});
			this.setState({ButtonQ5R2: true});
			this.setState({ButtonQ5R3: false});
			this.setState({ButtonQ5R4: true});
		}

		Q5R4(){
			this.setState({Q5R1: 0});
			this.setState({Q5R2: 0});
			this.setState({Q5R3: 0});
			this.setState({Q5R4: 1});

			this.setState({ButtonQ5R1: true});
			this.setState({ButtonQ5R2: true});
			this.setState({ButtonQ5R3: true});
			this.setState({ButtonQ5R4: false});
		}

		Q6R1(){
			this.setState({Q6R1: 1});
			this.setState({Q6R2: 0});
			this.setState({Q6R3: 0});
			this.setState({Q6R4: 0});

			this.setState({ButtonQ6R1: false});
			this.setState({ButtonQ6R2: true});
			this.setState({ButtonQ6R3: true});
			this.setState({ButtonQ6R4: true});
		}

		Q6R2(){
			this.setState({Q6R1: 0});
			this.setState({Q6R2: 1});
			this.setState({Q6R3: 0});
			this.setState({Q6R4: 0});

			this.setState({ButtonQ6R1: true});
			this.setState({ButtonQ6R2: false});
			this.setState({ButtonQ6R3: true});
			this.setState({ButtonQ6R4: true});
		}

		Q6R3(){
			this.setState({Q6R1: 0});
			this.setState({Q6R2: 0});
			this.setState({Q6R3: 1});
			this.setState({Q6R4: 0});

			this.setState({ButtonQ6R1: true});
			this.setState({ButtonQ6R2: true});
			this.setState({ButtonQ6R3: false});
			this.setState({ButtonQ6R4: true});
		}

		Q6R3(){
			this.setState({Q6R1: 0});
			this.setState({Q6R2: 0});
			this.setState({Q6R3: 1});
			this.setState({Q6R4: 0});

			this.setState({ButtonQ6R1: true});
			this.setState({ButtonQ6R2: true});
			this.setState({ButtonQ6R3: false});
			this.setState({ButtonQ6R4: true});
		}

		Q6R4(){
			this.setState({Q6R1: 0});
			this.setState({Q6R2: 0});
			this.setState({Q6R3: 0});
			this.setState({Q6R4: 1});

			this.setState({ButtonQ6R1: true});
			this.setState({ButtonQ6R2: true});
			this.setState({ButtonQ6R3: true});
			this.setState({ButtonQ6R4: false});
		}

		Q7R1(){
			this.setState({Q7R1: 1});
			this.setState({Q7R2: 0});
			this.setState({Q7R3: 0});
			this.setState({Q7R4: 0});

			this.setState({ButtonQ7R1: false});
			this.setState({ButtonQ7R2: true});
			this.setState({ButtonQ7R3: true});
			this.setState({ButtonQ7R4: true});
		}

		Q7R2(){
			this.setState({Q7R1: 0});
			this.setState({Q7R2: 1});
			this.setState({Q7R3: 0});
			this.setState({Q7R4: 0});

			this.setState({ButtonQ7R1: true});
			this.setState({ButtonQ7R2: false});
			this.setState({ButtonQ7R3: true});
			this.setState({ButtonQ7R4: true});
		}

		Q7R3(){
			this.setState({Q7R1: 0});
			this.setState({Q7R2: 0});
			this.setState({Q7R3: 1});
			this.setState({Q7R4: 0});

			this.setState({ButtonQ7R1: true});
			this.setState({ButtonQ7R2: true});
			this.setState({ButtonQ7R3: false});
			this.setState({ButtonQ7R4: true});
		}

		Q7R4(){
			this.setState({Q7R1: 0});
			this.setState({Q7R2: 0});
			this.setState({Q7R3: 0});
			this.setState({Q7R4: 1});

			this.setState({ButtonQ7R1: true});
			this.setState({ButtonQ7R2: true});
			this.setState({ButtonQ7R3: true});
			this.setState({ButtonQ7R4: false});
		}

		Q8R1(){
			this.setState({Q8R1: 1});
			this.setState({Q8R2: 0});
			this.setState({Q8R3: 0});
			this.setState({Q8R4: 0});

			this.setState({ButtonQ8R1: false});
			this.setState({ButtonQ8R2: true});
			this.setState({ButtonQ8R3: true});
			this.setState({ButtonQ8R4: true});
		}

		Q8R2(){
			this.setState({Q8R1: 0});
			this.setState({Q8R2: 1});
			this.setState({Q8R3: 0});
			this.setState({Q8R4: 0});

			this.setState({ButtonQ8R1: true});
			this.setState({ButtonQ8R2: false});
			this.setState({ButtonQ8R3: true});
			this.setState({ButtonQ8R4: true});
		}

		Q8R3(){
			this.setState({Q8R1: 0});
			this.setState({Q8R2: 0});
			this.setState({Q8R3: 1});
			this.setState({Q8R4: 0});

			this.setState({ButtonQ8R1: true});
			this.setState({ButtonQ8R2: true});
			this.setState({ButtonQ8R3: false});
			this.setState({ButtonQ8R4: true});
		}

		Q8R4(){
			this.setState({Q8R1: 0});
			this.setState({Q8R2: 0});
			this.setState({Q8R3: 0});
			this.setState({Q8R4: 1});

			this.setState({ButtonQ8R1: true});
			this.setState({ButtonQ8R2: true});
			this.setState({ButtonQ8R3: true});
			this.setState({ButtonQ8R4: false});
		}

		Q9R1(){
			this.setState({Q9R1: 1});
			this.setState({Q9R2: 0});
			this.setState({Q9R3: 0});
			this.setState({Q9R4: 0});

			this.setState({ButtonQ9R1: false});
			this.setState({ButtonQ9R2: true});
			this.setState({ButtonQ9R3: true});
			this.setState({ButtonQ9R4: true});
		}

		Q9R2(){
			this.setState({Q9R1: 0});
			this.setState({Q9R2: 1});
			this.setState({Q9R3: 0});
			this.setState({Q9R4: 0});

			this.setState({ButtonQ9R1: true});
			this.setState({ButtonQ9R2: false});
			this.setState({ButtonQ9R3: true});
			this.setState({ButtonQ9R4: true});
		}

		Q9R3(){
			this.setState({Q9R1: 0});
			this.setState({Q9R2: 0});
			this.setState({Q9R3: 1});
			this.setState({Q9R4: 0});

			this.setState({ButtonQ9R1: true});
			this.setState({ButtonQ9R2: true});
			this.setState({ButtonQ9R3: false});
			this.setState({ButtonQ9R4: true});
		}

		Q9R4(){
			this.setState({Q9R1: 0});
			this.setState({Q9R2: 0});
			this.setState({Q9R3: 0});
			this.setState({Q9R4: 1});

			this.setState({ButtonQ9R1: true});
			this.setState({ButtonQ9R2: true});
			this.setState({ButtonQ9R3: true});
			this.setState({ButtonQ9R4: false});
		}

		Q10R1(){
			this.setState({Q10R1: 1});
			this.setState({Q10R2: 0});
			this.setState({Q10R3: 0});
			this.setState({Q10R4: 0});

			this.setState({ButtonQ10R1: false});
			this.setState({ButtonQ10R2: true});
			this.setState({ButtonQ10R3: true});
			this.setState({ButtonQ10R4: true});
		}

		Q10R2(){
			this.setState({Q10R1: 0});
			this.setState({Q10R2: 1});
			this.setState({Q10R3: 0});
			this.setState({Q10R4: 0});

			this.setState({ButtonQ10R1: true});
			this.setState({ButtonQ10R2: false});
			this.setState({ButtonQ10R3: true});
			this.setState({ButtonQ10R4: true});
		}

		Q10R3(){
			this.setState({Q10R1: 0});
			this.setState({Q10R2: 0});
			this.setState({Q10R3: 1});
			this.setState({Q10R4: 0});

			this.setState({ButtonQ10R1: true});
			this.setState({ButtonQ10R2: true});
			this.setState({ButtonQ10R3: false});
			this.setState({ButtonQ10R4: true});
		}

		Q10R4(){
			this.setState({Q10R1: 0});
			this.setState({Q10R2: 0});
			this.setState({Q10R3: 0});
			this.setState({Q10R4: 1});

			this.setState({ButtonQ10R1: true});
			this.setState({ButtonQ10R2: true});
			this.setState({ButtonQ10R3: true});
			this.setState({ButtonQ10R4: false});
		}


	 voteArticle() {
	    Meteor.call('voteArticle', this.props.message._id);
       	this.setState({disabledVote: true});
        this.setState({color: false});
	 }


	componentWillMount(){
		if(Meteor.userId() && _.include(this.props.message.upvoters, Meteor.userId())){
       	this.setState({disabledVote: true}); this.setState({color: false})}else{
       	this.setState({disabledVote: false})
   		}
		
		{
		Meteor.userId() && _.include(this.props.message.upvoters, Meteor.userId()) ?
       	this.setState({disabled: true}) :
       	this.setState({disabled: false})
   		}
	}


	Submit(event) {

				this.setState({disabled: true})
				let id =this.props.id;
				 let Q1R1 = this.state.Q1R1;
			  	 let Q1R2 = this.state.Q1R2;
			  	 let Q1R3 = this.state.Q1R3;
			  	 let Q1R4 = this.state.Q1R4;

			  	 let Q2R1 = this.state.Q2R1; 
			  	 let Q2R2 = this.state.Q2R2;
			  	 let Q2R3 = this.state.Q2R3; 
			  	 let Q2R4 = this.state.Q2R4; 

			  	 let Q3R1 = this.state.Q3R1; 
			  	 let Q3R2 = this.state.Q3R2; 
			  	 let Q3R3 = this.state.Q3R3;
			  	 let Q3R4 = this.state.Q3R4; 

			  	 let Q4R1 = this.state.Q4R1; 
			  	 let Q4R2 = this.state.Q4R2; 
			  	 let Q4R3 = this.state.Q4R3; 
			  	 let Q4R4 = this.state.Q4R4; 

			  	 let Q5R1 = this.state.Q5R1; 
			  	 let Q5R2 = this.state.Q5R2; 
			  	 let Q5R3 = this.state.Q5R3; 
			  	 let Q5R4 = this.state.Q5R4; 

			  	 let Q6R1 = this.state.Q6R1; 
			  	 let Q6R2 = this.state.Q6R2; 
			  	 let Q6R3 = this.state.Q6R3;
			  	 let Q6R4 = this.state.Q6R4; 

			  	 let Q7R1 = this.state.Q7R1; 
			  	 let Q7R2 = this.state.Q7R2; 
			  	 let Q7R3 = this.state.Q7R3; 
			  	 let Q7R4 = this.state.Q7R4; 

			  	 let Q8R1 = this.state.Q8R1; 
			  	 let Q8R2 = this.state.Q8R2; 
			  	 let Q8R3 = this.state.Q8R3;
			  	 let Q8R4 = this.state.Q8R4; 

			  	 let Q9R1 = this.state.Q9R1;
			  	 let Q9R2 = this.state.Q9R2; 
			  	 let Q9R3 = this.state.Q9R3; 
			  	 let Q9R4 = this.state.Q9R4;

			  	 let Q10R1 = this.state.Q10R1; 
			  	 let Q10R2 = this.state.Q10R2; 
			  	 let Q10R3 = this.state.Q10R3; 
			  	 let Q10R4 = this.state.Q10R4; 

        Meteor.call('addReponseSondage',
		  	
			  	 id,
			  	 Q1R1,
			  	 Q1R2, 
			  	 Q1R3,
			  	 Q1R4,

			  	 Q2R1, 
			  	 Q2R2, 
			  	 Q2R3, 
			  	 Q2R4, 

			  	 Q3R1, 
			  	 Q3R2, 
			  	 Q3R3,
			  	 Q3R4, 

			  	 Q4R1, 
			  	 Q4R2, 
			  	 Q4R3, 
			  	 Q4R4, 

			  	 Q5R1, 
			  	 Q5R2, 
			  	 Q5R3, 
			  	 Q5R4, 

			  	 Q6R1, 
			  	 Q6R2, 
			  	 Q6R3,
			  	 Q6R4, 

			  	 Q7R1, 
			  	 Q7R2, 
			  	 Q7R3, 
			  	 Q7R4, 

			  	 Q8R1, 
			  	 Q8R2, 
			  	 Q8R3,
			  	 Q8R4, 

			  	 Q9R1,
			  	 Q9R2, 
			  	 Q9R3, 
			  	 Q9R4,

			  	 Q10R1, 
			  	 Q10R2, 
			  	 Q10R3, 
			  	 Q10R4, 
		  	  
		  	 
		  	  (err) => {
            	if(err){
              
           		 } else {
              	// Clear form

	              	}     
            	
          	})


    }



  render() {
 	let TotalQ1T = this.props.message.Q1R1C + this.props.message.Q1R2C  + this.props.message.Q1R3C + this.props.message.Q1R4C;
 	{TotalQ1T ==0 ? TotalQ1 = 1 : TotalQ1=TotalQ1T} 
	let TotalQ1R1 = Math.round((this.props.message.Q1R1C / TotalQ1)*100);
	let TotalQ1R2 = Math.round((this.props.message.Q1R2C / TotalQ1)*100);
	let TotalQ1R3 = Math.round((this.props.message.Q1R3C / TotalQ1)*100);
	let TotalQ1R4 = Math.round((this.props.message.Q1R4C / TotalQ1)*100);

	let TotalQ2T = this.props.message.Q2R1C + this.props.message.Q2R2C  + this.props.message.Q2R3C + this.props.message.Q2R4C;
	{TotalQ2T ==0 ? TotalQ2 = 1 : TotalQ2=TotalQ2T}  
	let TotalQ2R1 = Math.round((this.props.message.Q2R1C / TotalQ2)*100);
	let TotalQ2R2 = Math.round((this.props.message.Q2R2C / TotalQ2)*100);
	let TotalQ2R3 = Math.round((this.props.message.Q2R3C / TotalQ2)*100);
	let TotalQ2R4 = Math.round((this.props.message.Q2R4C / TotalQ2)*100);

	let TotalQ3T = this.props.message.Q3R1C + this.props.message.Q3R2C  + this.props.message.Q3R3C + this.props.message.Q3R4C;
	{TotalQ3T ==0 ? TotalQ3 = 1 : TotalQ3=TotalQ3T}   
	let TotalQ3R1 = Math.round((this.props.message.Q3R1C / TotalQ3)*100);
	let TotalQ3R2 = Math.round((this.props.message.Q3R2C / TotalQ3)*100);
	let TotalQ3R3 = Math.round((this.props.message.Q3R3C / TotalQ3)*100);
	let TotalQ3R4 = Math.round((this.props.message.Q3R4C / TotalQ3)*100);

	let TotalQ4T = this.props.message.Q4R1C + this.props.message.Q4R2C  + this.props.message.Q4R3C + this.props.message.Q4R4C;
	{TotalQ4T ==0 ? TotalQ4 = 1 : TotalQ4=TotalQ4T}   
	let TotalQ4R1 = Math.round((this.props.message.Q4R1C / TotalQ4)*100);
	let TotalQ4R2 = Math.round((this.props.message.Q4R2C / TotalQ4)*100);
	let TotalQ4R3 = Math.round((this.props.message.Q4R3C / TotalQ4)*100);
	let TotalQ4R4 = Math.round((this.props.message.Q4R4C / TotalQ4)*100);

	let TotalQ5T = this.props.message.Q5R1C + this.props.message.Q5R2C  + this.props.message.Q5R3C + this.props.message.Q5R4C;
	{TotalQ5T ==0 ? TotalQ5 = 1 : TotalQ5=TotalQ5T}   
	let TotalQ5R1 = Math.round((this.props.message.Q5R1C / TotalQ5)*100);
	let TotalQ5R2 = Math.round((this.props.message.Q5R2C / TotalQ5)*100);
	let TotalQ5R3 = Math.round((this.props.message.Q5R3C / TotalQ5)*100);
	let TotalQ5R4 = Math.round((this.props.message.Q5R4C / TotalQ5)*100);

	let TotalQ6T = this.props.message.Q6R1C + this.props.message.Q6R2C  + this.props.message.Q6R3C + this.props.message.Q6R4C;
	{TotalQ6T ==0 ? TotalQ6 = 1 : TotalQ6=TotalQ6T}   
	let TotalQ6R1 = Math.round((this.props.message.Q6R1C / TotalQ6)*100);
	let TotalQ6R2 = Math.round((this.props.message.Q6R2C / TotalQ6)*100);
	let TotalQ6R3 = Math.round((this.props.message.Q6R3C / TotalQ6)*100);
	let TotalQ6R4 = Math.round((this.props.message.Q6R4C / TotalQ6)*100);

	let TotalQ7T = this.props.message.Q7R1C + this.props.message.Q7R2C  + this.props.message.Q7R3C + this.props.message.Q7R4C;
	{TotalQ7T ==0 ? TotalQ7 = 1 : TotalQ7=TotalQ7T}   
	let TotalQ7R1 = Math.round((this.props.message.Q7R1C / TotalQ7)*100);
	let TotalQ7R2 = Math.round((this.props.message.Q7R2C / TotalQ7)*100);
	let TotalQ7R3 = Math.round((this.props.message.Q7R3C / TotalQ7)*100);
	let TotalQ7R4 = Math.round((this.props.message.Q7R4C / TotalQ7)*100);

	let TotalQ8T = this.props.message.Q8R1C + this.props.message.Q8R2C  + this.props.message.Q8R3C + this.props.message.Q8R4C;
	{TotalQ8T ==0 ? TotalQ8 = 1 : TotalQ8=TotalQ8T}   
	let TotalQ8R1 = Math.round((this.props.message.Q8R1C / TotalQ8)*100);
	let TotalQ8R2 = Math.round((this.props.message.Q8R2C / TotalQ8)*100);
	let TotalQ8R3 = Math.round((this.props.message.Q8R3C / TotalQ8)*100);
	let TotalQ8R4 = Math.round((this.props.message.Q8R4C / TotalQ8)*100);

	let TotalQ9T = this.props.message.Q9R1C + this.props.message.Q9R2C  + this.props.message.Q9R3C + this.props.message.Q9R4C;
	{TotalQ9T ==0 ? TotalQ9 = 1 : TotalQ9=TotalQ9T}   
	let TotalQ9R1 = Math.round((this.props.message.Q9R1C / TotalQ9)*100);
	let TotalQ9R2 = Math.round((this.props.message.Q9R2C / TotalQ9)*100);
	let TotalQ9R3 = Math.round((this.props.message.Q9R3C / TotalQ9)*100);
	let TotalQ9R4 = Math.round((this.props.message.Q9R4C / TotalQ9)*100);

	let TotalQ10T = this.props.message.Q10R1C + this.props.message.Q10R2C  + this.props.message.Q10R3C + this.props.message.Q10R4C;
	{TotalQ10T ==0 ? TotalQ10 = 1 : TotalQ10=TotalQ10T}   
	let TotalQ10R1 = Math.round((this.props.message.Q10R1C / TotalQ10)*100);
	let TotalQ10R2 = Math.round((this.props.message.Q10R2C / TotalQ10)*100);
	let TotalQ10R3 = Math.round((this.props.message.Q10R3C / TotalQ10)*100);
	let TotalQ10R4 = Math.round((this.props.message.Q10R4C / TotalQ10)*100);

		return (
			<div className="ListeMessagesSingle">
	        	
	  			<Segment>
					<div className="TitreSingleMessage">
						{this.props.message.titre}
					</div>

					<div className="TousSondage">
					  <Link to={'/TousSondage/' }>
			  				<Button
			  				 color="green"
			  				>
			  				Voir tous les sondages
			  				</Button>
		  				</Link>
			  		</div>

					<div className="espacePub" ></div>
      				<div className="pubSondage">
				        <AdSense.Google
				          client='ca-pub-6112176939320267'
				          slot='4929880369'
				          style={{ display: 'inline-block',width:'468px', height:'60px'}}
				        />
					</div>
					<div className="espacePub" ></div>
			<Form error >
		  			<div className={"ContentSondage" + " " + "display-linebreak"}>
			  			<div className="titreQuestion">
			  			<u>Question n°1 :</u> <br/>
			  				{this.props.message.Q1}
			  			</div>
			  			<div className="ChoixSondage">
			  				<Button
			  				 color="blue" basic={this.state.disabled ? false : this.state.ButtonQ1R1}
			  				 fluid
			  				 onClick={this.Q1R1.bind(this)}
			  				 disabled={this.state.disabled}
			  				>
			  				{this.props.message.Q1R1}
			  				</Button>
				  			<div className={this.state.disabled ? "resultBar" : "none"}>
					  				<Progress percent={TotalQ1R1} color='orange' progress />
					  		</div>
			  			</div>


			  			<div className="ChoixSondage">
			  				<Button
			  				 color="blue"
			  				 basic={this.state.disabled ? false : this.state.ButtonQ1R2}
			  				 fluid
			  				 onClick={this.Q1R2.bind(this)}
			  				 disabled={this.state.disabled}
			  				 >
			  				{this.props.message.Q1R2}
			  				</Button>
			  				<div className={this.state.disabled ? "resultBar" : "none"}>
					  				<Progress percent={TotalQ1R2} color='orange' progress />
					  		</div>
			  			</div>
			  			<div className="ChoixSondage">
			  				<Button
			  				 color="blue"
			  				 basic={this.state.disabled ? false : this.state.ButtonQ1R3}
			  				 fluid 
			  				 onClick={this.Q1R3.bind(this)}
			  				 disabled={this.state.disabled}
			  				 >
			  				{this.props.message.Q1R3}
			  				</Button>
			  				<div className={this.state.disabled ? "resultBar" : "none"}>
					  				<Progress percent={TotalQ1R3} color='orange' progress />
					  		</div>
			  			</div>
			  			<div className="ChoixSondage">
			  				<Button
			  				 color="blue"
			  				 basic={this.state.disabled ? false : this.state.ButtonQ1R4}
			  				 fluid
			  				 onClick={this.Q1R4.bind(this)}
			  				 disabled={this.state.disabled}
			  				 >
			  				{this.props.message.Q1R4}
			  				</Button>
			  				<div className={this.state.disabled ? "resultBar" : "none"}>
					  				<Progress percent={TotalQ1R4} color='orange' progress />
					  		</div>
			  			</div>

			  			<div className="espaceSondage" ></div>

			  			<div className="titreQuestion">
			  			<u>Question n°2 :</u> <br/>
			  				{this.props.message.Q2}
			  			</div>
			  			<div className="ChoixSondage">
			  				<Button
			  				 color="blue"
			  				 basic={this.state.disabled ? false : this.state.ButtonQ2R1}
			  				 fluid
			  				 onClick={this.Q2R1.bind(this)}
			  				 disabled={this.state.disabled}
			  				 >
			  				{this.props.message.Q2R1}
			  				</Button>
			  				<div className={this.state.disabled ? "resultBar" : "none"}>
					  				<Progress percent={TotalQ2R1} color='orange' progress />
					  		</div>
			  			</div>
			  			<div className="ChoixSondage">
			  				<Button
			  				 color="blue"
			  				 basic={this.state.disabled ? false : this.state.ButtonQ2R2}
			  				 fluid
			  				 onClick={this.Q2R2.bind(this)}
			  				 disabled={this.state.disabled}
			  				 >
			  				{this.props.message.Q2R2}
			  				</Button>
			  				<div className={this.state.disabled ? "resultBar" : "none"}>
					  				<Progress percent={TotalQ2R2} color='orange' progress />
					  		</div>
			  			</div>
			  			<div className="ChoixSondage">
			  				<Button
			  				 color="blue"
			  				 basic={this.state.disabled ? false : this.state.ButtonQ2R3}
			  				 fluid
			  				 onClick={this.Q2R3.bind(this)}
			  				 disabled={this.state.disabled}
			  				 >
			  				{this.props.message.Q2R3}
			  				</Button>
			  				<div className={this.state.disabled ? "resultBar" : "none"}>
					  				<Progress percent={TotalQ2R3} color='orange' progress />
					  		</div>
			  			</div>
			  			<div className="ChoixSondage">
			  				<Button
			  				 color="blue"
			  				 basic={this.state.disabled ? false : this.state.ButtonQ2R4}
			  				 fluid 
			  				 onClick={this.Q2R4.bind(this)}
			  				 disabled={this.state.disabled}
			  				 >
			  				{this.props.message.Q2R4}
			  				</Button>
			  				<div className={this.state.disabled ? "resultBar" : "none"}>
					  				<Progress percent={TotalQ2R4} color='orange' progress />
					  		</div>
			  			</div>

			  			<div className="espaceSondage" ></div>

			  			<div className="titreQuestion">
			  			<u>Question n°3 :</u> <br/>
			  				{this.props.message.Q3}
			  			</div>
			  			<div className="ChoixSondage">
			  				<Button
			  				 color="blue"
			  				 basic={this.state.disabled ? false : this.state.ButtonQ3R1}
			  				 fluid
			  				 onClick={this.Q3R1.bind(this)}
			  				 disabled={this.state.disabled}
			  				 >
			  				{this.props.message.Q3R1}
			  				</Button>
			  				<div className={this.state.disabled ? "resultBar" : "none"}>
					  				<Progress percent={TotalQ3R1} color='orange' progress />
					  		</div>
			  			</div>
			  			<div className="ChoixSondage">
			  				<Button
			  				 color="blue"
			  				 basic={this.state.disabled ? false : this.state.ButtonQ3R2}
			  				 fluid
			  				 onClick={this.Q3R2.bind(this)}
			  				 disabled={this.state.disabled}
			  				 >
			  				{this.props.message.Q3R2}
			  				</Button>
			  				<div className={this.state.disabled ? "resultBar" : "none"}>
					  				<Progress percent={TotalQ3R2} color='orange' progress />
					  		</div>
			  			</div>
			  			<div className="ChoixSondage">
			  				<Button
			  				 color="blue"
			  				 basic={this.state.disabled ? false : this.state.ButtonQ3R3}
			  				 fluid
			  				 onClick={this.Q3R3.bind(this)}
			  				 disabled={this.state.disabled}
			  				 >
			  				{this.props.message.Q3R3}
			  				</Button>
			  				<div className={this.state.disabled ? "resultBar" : "none"}>
					  				<Progress percent={TotalQ3R3} color='orange' progress />
					  		</div>
			  			</div>
			  			<div className="ChoixSondage">
			  				<Button
			  				 color="blue"
			  				  basic={this.state.disabled ? false : this.state.ButtonQ3R4}
			  				  fluid
			  				  onClick={this.Q3R4.bind(this)}
			  				  disabled={this.state.disabled}
			  				  >
			  				{this.props.message.Q3R4}
			  				</Button>
			  				<div className={this.state.disabled ? "resultBar" : "none"}>
					  				<Progress percent={TotalQ3R4} color='orange' progress />
					  		</div>
			  			</div>

			  			<div className="espaceSondage" ></div>

			  			<div className="titreQuestion">
			  			<u>Question n°4 :</u> <br/>
			  				{this.props.message.Q4}
			  			</div>
			  			<div className="ChoixSondage">
			  				<Button
			  				 color="blue"
			  				 basic={this.state.disabled ? false : this.state.ButtonQ4R1}
			  				 fluid
			  				 onClick={this.Q4R1.bind(this)}
			  				 disabled={this.state.disabled}
			  				 >
			  				{this.props.message.Q4R1}
			  				</Button>
			  				<div className={this.state.disabled ? "resultBar" : "none"}>
					  				<Progress percent={TotalQ4R1} color='orange' progress />
					  		</div>
			  			</div>
			  			<div className="ChoixSondage">
			  				<Button
			  				 color="blue"
			  				 basic={this.state.disabled ? false : this.state.ButtonQ4R2}
			  				 fluid
			  				 onClick={this.Q4R2.bind(this)}
			  				 disabled={this.state.disabled}
			  				 >
			  				{this.props.message.Q4R2}
			  				</Button>
			  				<div className={this.state.disabled ? "resultBar" : "none"}>
					  				<Progress percent={TotalQ4R2} color='orange' progress />
					  		</div>
			  			</div>
			  			<div className="ChoixSondage">
			  				<Button
			  				 color="blue"
			  				 basic={this.state.disabled ? false : this.state.ButtonQ4R3}
			  				 fluid
			  				 onClick={this.Q4R3.bind(this)}
			  				 disabled={this.state.disabled}
			  				 >
			  				{this.props.message.Q4R3}
			  				</Button>
			  				<div className={this.state.disabled ? "resultBar" : "none"}>
					  				<Progress percent={TotalQ4R3} color='orange' progress />
					  		</div>
			  			</div>
			  			<div className="ChoixSondage">
			  				<Button
			  				 color="blue"
			  				 basic={this.state.disabled ? false : this.state.ButtonQ4R4}
			  				 fluid
			  				 onClick={this.Q4R4.bind(this)}
			  				 disabled={this.state.disabled}
			  				 >
			  				{this.props.message.Q4R4}
			  				</Button>
			  				<div className={this.state.disabled ? "resultBar" : "none"}>
					  				<Progress percent={TotalQ4R4} color='orange' progress />
					  		</div>
			  			</div>

			  			<div className="espaceSondage" ></div>

			  			<div className="titreQuestion">
			  			<u>Question n°5 :</u> <br/>
			  				{this.props.message.Q5}
			  			</div>
			  			<div className="ChoixSondage">
			  				<Button
			  				 color="blue"
			  				 basic={this.state.disabled ? false : this.state.ButtonQ5R1}
			  				 fluid
			  				 onClick={this.Q5R1.bind(this)}
			  				 disabled={this.state.disabled}
			  				 >
			  				{this.props.message.Q5R1}
			  				</Button>
			  				<div className={this.state.disabled ? "resultBar" : "none"}>
					  				<Progress percent={TotalQ5R1} color='orange' progress />
					  		</div>
			  			</div>
			  			<div className="ChoixSondage">
			  				<Button
			  				 color="blue"
			  				 basic={this.state.disabled ? false : this.state.ButtonQ5R2}
			  				 fluid
			  				 onClick={this.Q5R2.bind(this)}
			  				 disabled={this.state.disabled}
			  				 >
			  				{this.props.message.Q5R2}
			  				</Button>
			  				<div className={this.state.disabled ? "resultBar" : "none"}>
					  				<Progress percent={TotalQ5R2} color='orange' progress />
					  		</div>
			  			</div>
			  			<div className="ChoixSondage">
			  				<Button
			  				 color="blue"
			  				 basic={this.state.disabled ? false : this.state.ButtonQ5R3}
			  				 fluid
			  				 onClick={this.Q5R3.bind(this)}
			  				 disabled={this.state.disabled}
			  				 >
			  				{this.props.message.Q5R3}
			  				</Button>
			  				<div className={this.state.disabled ? "resultBar" : "none"}>
					  				<Progress percent={TotalQ5R3} color='orange' progress />
					  		</div>
			  			</div>
			  			<div className="ChoixSondage">
			  				<Button
			  				 color="blue" 
			  				 basic={this.state.disabled ? false : this.state.ButtonQ5R4}
			  				 fluid
			  				 onClick={this.Q5R4.bind(this)}
			  				 disabled={this.state.disabled}
			  				 >
			  				{this.props.message.Q5R4}
			  				</Button>
			  				<div className={this.state.disabled ? "resultBar" : "none"}>
					  				<Progress percent={TotalQ5R4} color='orange' progress />
					  		</div>
			  			</div>

			  			<div className="espaceSondage" ></div>

			  			<div className="titreQuestion">
			  			<u>Question n°6 :</u> <br/>
			  				{this.props.message.Q6}
			  			</div>
			  			<div className="ChoixSondage">
			  				<Button
			  				 color="blue"
			  				 basic={this.state.disabled ? false : this.state.ButtonQ6R1}
			  				 fluid
			  				 onClick={this.Q6R1.bind(this)}
			  				 disabled={this.state.disabled}
			  				 >
			  				{this.props.message.Q6R1}
			  				</Button>
			  				<div className={this.state.disabled ? "resultBar" : "none"}>
					  				<Progress percent={TotalQ6R1} color='orange' progress />
					  		</div>
			  			</div>
			  			<div className="ChoixSondage">
			  				<Button
			  				 color="blue"
			  				 basic={this.state.disabled ? false : this.state.ButtonQ6R2}
			  				 fluid
			  				 onClick={this.Q6R2.bind(this)}
			  				 disabled={this.state.disabled}
			  				 >
			  				{this.props.message.Q6R2}
			  				</Button>
			  				<div className={this.state.disabled ? "resultBar" : "none"}>
					  				<Progress percent={TotalQ6R2} color='orange' progress />
					  		</div>
			  			</div>
			  			<div className="ChoixSondage">
			  				<Button 
			  				color="blue"
			  				basic={this.state.disabled ? false : this.state.ButtonQ6R3}
			  				fluid
			  				onClick={this.Q6R3.bind(this)}
			  				disabled={this.state.disabled}
			  				>
			  				{this.props.message.Q6R3}
			  				</Button>
			  				<div className={this.state.disabled ? "resultBar" : "none"}>
					  				<Progress percent={TotalQ6R3} color='orange' progress />
					  		</div>
			  			</div>
			  			<div className="ChoixSondage">
			  				<Button
			  				 color="blue"
			  				 basic={this.state.disabled ? false : this.state.ButtonQ6R4}
			  				 fluid
			  				 onClick={this.Q6R4.bind(this)}
			  				 disabled={this.state.disabled}
			  				 >
			  				{this.props.message.Q6R4}
			  				</Button>
			  				<div className={this.state.disabled ? "resultBar" : "none"}>
					  				<Progress percent={TotalQ6R4} color='orange' progress />
					  		</div>
			  			</div>

			  			<div className="espaceSondage" ></div>

			  			<div className="titreQuestion">
			  			<u>Question n°7 :</u> <br/>
			  				{this.props.message.Q7}
			  			</div>
			  			<div className="ChoixSondage">
			  				<Button
			  				 color="blue"
			  				 basic={this.state.disabled ? false : this.state.ButtonQ7R1}
			  				 fluid
			  				 onClick={this.Q7R1.bind(this)}
			  				 disabled={this.state.disabled}
			  				 >
			  				{this.props.message.Q7R1}
			  				</Button>
			  				<div className={this.state.disabled ? "resultBar" : "none"}>
					  				<Progress percent={TotalQ7R1} color='orange' progress />
					  		</div>
			  			</div>
			  			<div className="ChoixSondage">
			  				<Button
			  				 color="blue"
			  				 basic={this.state.disabled ? false : this.state.ButtonQ7R2}
			  				 fluid
			  				 onClick={this.Q7R2.bind(this)}
			  				 disabled={this.state.disabled}
			  				 >
			  				{this.props.message.Q7R2}
			  				</Button>
			  				<div className={this.state.disabled ? "resultBar" : "none"}>
					  				<Progress percent={TotalQ7R2} color='orange' progress />
					  		</div>
			  			</div>
			  			<div className="ChoixSondage">
			  				<Button
			  				 color="blue"
			  				 basic={this.state.disabled ? false : this.state.ButtonQ7R3}
			  				 fluid
			  				 onClick={this.Q7R3.bind(this)}
			  				 disabled={this.state.disabled}
			  				 >
			  				{this.props.message.Q7R3}
			  				</Button>
			  				<div className={this.state.disabled ? "resultBar" : "none"}>
					  				<Progress percent={TotalQ7R3} color='orange' progress />
					  		</div>
			  			</div>
			  			<div className="ChoixSondage">
			  				<Button
			  				 color="blue"
			  				 basic={this.state.disabled ? false : this.state.ButtonQ7R4}
			  				 fluid
			  				 onClick={this.Q7R4.bind(this)}
			  				 disabled={this.state.disabled}
			  				 >
			  				{this.props.message.Q7R4}
			  				</Button>
			  				<div className={this.state.disabled ? "resultBar" : "none"}>
					  				<Progress percent={TotalQ7R4} color='orange' progress />
					  		</div>
			  			</div>

			  			<div className="espaceSondage" ></div>

			  			<div className="titreQuestion">
			  			<u>Question n°8 :</u> <br/>
			  				{this.props.message.Q8}
			  			</div>
			  			<div className="ChoixSondage">
			  				<Button
			  				 color="blue"
			  				 fluid
			  				 basic={this.state.disabled ? false : this.state.ButtonQ8R1}
			  				 onClick={this.Q8R1.bind(this)}
			  				 disabled={this.state.disabled}
			  				 >
			  				{this.props.message.Q8R1}
			  				</Button>
			  				<div className={this.state.disabled ? "resultBar" : "none"}>
					  				<Progress percent={TotalQ8R1} color='orange' progress />
					  		</div>
			  			</div>
			  			<div className="ChoixSondage">
			  				<Button
			  				 color="blue"
			  				 basic={this.state.disabled ? false : this.state.ButtonQ8R2}
			  				 fluid
			  				 onClick={this.Q8R2.bind(this)}
			  				 disabled={this.state.disabled}
			  				 >
			  				{this.props.message.Q8R2}
			  				</Button>
			  				<div className={this.state.disabled ? "resultBar" : "none"}>
					  				<Progress percent={TotalQ8R2} color='orange' progress />
					  		</div>
			  			</div>
			  			<div className="ChoixSondage">
			  				<Button
			  				 color="blue"
			  				 basic={this.state.disabled ? false : this.state.ButtonQ8R3}
			  				 fluid 
			  				 onClick={this.Q8R3.bind(this)}
			  				 disabled={this.state.disabled}
			  				 >
			  				{this.props.message.Q8R3}
			  				</Button>
			  				<div className={this.state.disabled ? "resultBar" : "none"}>
					  				<Progress percent={TotalQ8R3} color='orange' progress />
					  		</div>
			  			</div>
			  			<div className="ChoixSondage">
			  				<Button
			  				 color="blue"
			  				 basic={this.state.disabled ? false : this.state.ButtonQ8R4}
			  				 fluid
			  				 onClick={this.Q8R4.bind(this)}
			  				 disabled={this.state.disabled}
			  				 >
			  				{this.props.message.Q8R4}
			  				</Button>
			  				<div className={this.state.disabled ? "resultBar" : "none"}>
					  				<Progress percent={TotalQ8R4} color='orange' progress />
					  		</div>
			  			</div>

			  			<div className="espaceSondage" ></div>

			  			<div className="titreQuestion">
			  			<u>Question n°9 :</u> <br/>
			  				{this.props.message.Q9}
			  			</div>
			  			<div className="ChoixSondage">
			  				<Button
			  				 color="blue"
			  				 basic={this.state.disabled ? false : this.state.ButtonQ9R1}
			  				 fluid
			  				 onClick={this.Q9R1.bind(this)}
			  				 disabled={this.state.disabled}
			  				 >
			  				{this.props.message.Q9R1}
			  				</Button>
			  				<div className={this.state.disabled ? "resultBar" : "none"}>
					  				<Progress percent={TotalQ9R1} color='orange' progress />
					  		</div>
			  			</div>
			  			<div className="ChoixSondage">
			  				<Button
			  				 color="blue"
			  				 basic={this.state.disabled ? false : this.state.ButtonQ9R2}
			  				 fluid
			  				 onClick={this.Q9R2.bind(this)}
			  				 disabled={this.state.disabled}
			  				 >
			  				{this.props.message.Q9R2}
			  				</Button>
			  				<div className={this.state.disabled ? "resultBar" : "none"}>
					  				<Progress percent={TotalQ9R2} color='orange' progress />
					  		</div>
			  			</div>
			  			<div className="ChoixSondage">
			  				<Button
			  				 color="blue"
			  				 basic={this.state.disabled ? false : this.state.ButtonQ9R3}
			  				 fluid
			  				 onClick={this.Q9R3.bind(this)}
			  				 disabled={this.state.disabled}
			  				 >
			  				{this.props.message.Q9R3}
			  				</Button>
			  				<div className={this.state.disabled ? "resultBar" : "none"}>
					  				<Progress percent={TotalQ9R3} color='orange' progress />
					  		</div>
			  			</div>
			  			<div className="ChoixSondage">
			  				<Button 
			  				color="blue"
			  				basic={this.state.disabled ? false : this.state.ButtonQ9R4}
			  				fluid onClick={this.Q9R4.bind(this)}
			  				disabled={this.state.disabled}
			  				>
			  				{this.props.message.Q9R4}
			  				</Button>
			  				<div className={this.state.disabled ? "resultBar" : "none"}>
					  				<Progress percent={TotalQ9R4} color='orange' progress />
					  		</div>
			  			</div>

			  			<div className="espaceSondage" ></div>

			  			<div className="titreQuestion">
			  			<u>Question n°10 :</u> <br/>
			  				{this.props.message.Q10}
			  			</div>
			  			<div className="ChoixSondage">
			  				<Button
			  				 color="blue"
			  				 basic={this.state.disabled ? false : this.state.ButtonQ10R1}
			  				 fluid
			  				 onClick={this.Q10R1.bind(this)}
			  				 disabled={this.state.disabled}
			  				 >
			  				{this.props.message.Q10R1}
			  				</Button>
			  				<div className={this.state.disabled ? "resultBar" : "none"}>
					  				<Progress percent={TotalQ10R1} color='orange' progress />
					  		</div>
			  			</div>
			  			<div className="ChoixSondage">
			  				<Button
			  				 color="blue"
			  				 basic={this.state.disabled ? false : this.state.ButtonQ10R2}
			  				 fluid 
			  				 onClick={this.Q10R2.bind(this)}
			  				 disabled={this.state.disabled}
			  				 >
			  				{this.props.message.Q10R2}
			  				</Button>
			  				<div className={this.state.disabled ? "resultBar" : "none"}>
					  				<Progress percent={TotalQ10R2} color='orange' progress />
					  		</div>
			  			</div>
			  			<div className="ChoixSondage">
			  				<Button
			  				 color="blue"
			  				 basic={this.state.disabled ? false : this.state.ButtonQ10R3}
			  				 fluid
			  				 onClick={this.Q10R3.bind(this)}
			  				 disabled={this.state.disabled}
			  				 >
			  				{this.props.message.Q10R3}
			  				</Button>
			  				<div className={this.state.disabled ? "resultBar" : "none"}>
					  				<Progress percent={TotalQ10R3} color='orange' progress />
					  		</div>
			  			</div>
			  			<div className="ChoixSondage">
			  				<Button
			  				 color="blue"
			  				 basic={this.state.disabled ? false : this.state.ButtonQ10R4}
			  				 fluid
			  				 onClick={this.Q10R4.bind(this)}
			  				 disabled={this.state.disabled}
			  				 >
			  				{this.props.message.Q10R4}
			  				</Button>
			  				<div className={this.state.disabled ? "resultBar" : "none"}>
					  				<Progress percent={TotalQ10R4} color='orange' progress />
					  		</div>
			  			</div>
		  			</div>
		  			<br/>
		  			<Button
		  			 color="green"
		  			 fluid
		  			 onClick={this.Submit.bind(this)}
		  			 disabled={this.state.disabled}
		  			 >
			  				Valider et voir les résultats
			  		</Button>
		  		</Form>
		  			<Divider />
		  	
	  			</Segment>
			</div>

		);
  	}
}

export default SingleSondagePost =  withTracker(({ id }) => {
  

  return {

  };
})(SingleSondagePost);