import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor';
import { Segment, Button, Checkbox, Form, Header, Divider, Label, Comment } from 'semantic-ui-react'
import { Link } from 'react-router-dom';
import { withTracker } from 'meteor/react-meteor-data';
import { Articles } from '../../api/Articles.js';
import { EditorState, convertFromRaw, ContentState } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import renderHTML from 'react-render-html';
import Vote from 'react-icons/lib/fa/thumbs-up'; 
import AdSense from 'react-adsense';



class SingleArticlePost extends Component {
	
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

		return (
			<div className="ListeMessagesSingle">
	        	
	  			<Segment>
					<div className="TitreSingleMessage">
						{this.props.message.titre}
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
			  			Question n°1 :
			  				{this.props.message.Q1}
			  			</div>
			  			<div className="ChoixSondage">
			  				<Button color="blue" basic={this.state.ButtonQ1R1} fluid onClick={this.Q1R1.bind(this)}>
			  				{this.props.message.Q1R1}
			  				</Button>
			  			</div>
			  			<div className="ChoixSondage">
			  				<Button color="blue" basic={this.state.ButtonQ1R2} fluid onClick={this.Q1R2.bind(this)}>
			  				{this.props.message.Q1R2}
			  				</Button>
			  			</div>
			  			<div className="ChoixSondage">
			  				<Button color="blue" basic={this.state.ButtonQ1R3} fluid onClick={this.Q1R3.bind(this)}>
			  				{this.props.message.Q1R3}
			  				</Button>
			  			</div>
			  			<div className="ChoixSondage">
			  				<Button color="blue" basic={this.state.ButtonQ1R4} fluid onClick={this.Q1R4.bind(this)}>
			  				{this.props.message.Q1R4}
			  				</Button>
			  			</div>

			  			<div className="espaceSondage" ></div>

			  			<div className="titreQuestion">
			  			Question n°2 :
			  				{this.props.message.Q2}
			  			</div>
			  			<div className="ChoixSondage">
			  				<Button color="blue" basic={this.state.ButtonQ2R1} fluid onClick={this.Q2R1.bind(this)}>
			  				{this.props.message.Q2R1}
			  				</Button>
			  			</div>
			  			<div className="ChoixSondage">
			  				<Button color="blue" basic={this.state.ButtonQ2R2} fluid onClick={this.Q2R2.bind(this)}>
			  				{this.props.message.Q2R2}
			  				</Button>
			  			</div>
			  			<div className="ChoixSondage">
			  				<Button color="blue" basic={this.state.ButtonQ2R3} fluid onClick={this.Q2R3.bind(this)}>
			  				{this.props.message.Q2R3}
			  				</Button>
			  			</div>
			  			<div className="ChoixSondage">
			  				<Button color="blue" basic={this.state.ButtonQ2R4} fluid onClick={this.Q2R4.bind(this)}>
			  				{this.props.message.Q2R4}
			  				</Button>
			  			</div>

			  			<div className="espaceSondage" ></div>

			  			<div className="titreQuestion">
			  			Question n°3 :
			  				{this.props.message.Q3}
			  			</div>
			  			<div className="ChoixSondage">
			  				<Button color="blue" basic={this.state.ButtonQ3R1} fluid onClick={this.Q3R1.bind(this)}>
			  				{this.props.message.Q3R1}
			  				</Button>
			  			</div>
			  			<div className="ChoixSondage">
			  				<Button color="blue" basic={this.state.ButtonQ3R2} fluid onClick={this.Q3R2.bind(this)}>
			  				{this.props.message.Q3R2}
			  				</Button>
			  			</div>
			  			<div className="ChoixSondage">
			  				<Button color="blue" basic={this.state.ButtonQ3R3} fluid onClick={this.Q3R3.bind(this)}>
			  				{this.props.message.Q3R3}
			  				</Button>
			  			</div>
			  			<div className="ChoixSondage">
			  				<Button color="blue" basic={this.state.ButtonQ3R4} fluid onClick={this.Q3R4.bind(this)}>
			  				{this.props.message.Q3R4}
			  				</Button>
			  			</div>

			  			<div className="espaceSondage" ></div>

			  			<div className="titreQuestion">
			  			Question n°4 :
			  				{this.props.message.Q4}
			  			</div>
			  			<div className="ChoixSondage">
			  				<Button color="blue" basic={this.state.ButtonQ4R1} fluid onClick={this.Q4R1.bind(this)}>
			  				{this.props.message.Q4R1}
			  				</Button>
			  			</div>
			  			<div className="ChoixSondage">
			  				<Button color="blue" basic={this.state.ButtonQ4R2} fluid onClick={this.Q4R2.bind(this)}>
			  				{this.props.message.Q4R2}
			  				</Button>
			  			</div>
			  			<div className="ChoixSondage">
			  				<Button color="blue" basic={this.state.ButtonQ4R3} fluid onClick={this.Q4R3.bind(this)}>
			  				{this.props.message.Q4R3}
			  				</Button>
			  			</div>
			  			<div className="ChoixSondage">
			  				<Button color="blue" basic={this.state.ButtonQ4R4} fluid onClick={this.Q4R4.bind(this)}>
			  				{this.props.message.Q4R4}
			  				</Button>
			  			</div>

			  			<div className="espaceSondage" ></div>

			  			<div className="titreQuestion">
			  			Question n°5 :
			  				{this.props.message.Q5}
			  			</div>
			  			<div className="ChoixSondage">
			  				<Button color="blue" basic={this.state.ButtonQ5R1} fluid onClick={this.Q5R1.bind(this)}>
			  				{this.props.message.Q5R1}
			  				</Button>
			  			</div>
			  			<div className="ChoixSondage">
			  				<Button color="blue" basic={this.state.ButtonQ5R2} fluid onClick={this.Q5R2.bind(this)}>
			  				{this.props.message.Q5R2}
			  				</Button>
			  			</div>
			  			<div className="ChoixSondage">
			  				<Button color="blue" basic={this.state.ButtonQ5R3} fluid onClick={this.Q5R3.bind(this)}>
			  				{this.props.message.Q5R3}
			  				</Button>
			  			</div>
			  			<div className="ChoixSondage">
			  				<Button color="blue" basic={this.state.ButtonQ5R4} fluid onClick={this.Q5R4.bind(this)}>
			  				{this.props.message.Q5R4}
			  				</Button>
			  			</div>

			  			<div className="espaceSondage" ></div>

			  			<div className="titreQuestion">
			  			Question n°6 :
			  				{this.props.message.Q6}
			  			</div>
			  			<div className="ChoixSondage">
			  				<Button color="blue" basic={this.state.ButtonQ6R1} fluid onClick={this.Q6R1.bind(this)}>
			  				{this.props.message.Q6R1}
			  				</Button>
			  			</div>
			  			<div className="ChoixSondage">
			  				<Button color="blue" basic={this.state.ButtonQ6R2} fluid onClick={this.Q6R2.bind(this)}>
			  				{this.props.message.Q6R2}
			  				</Button>
			  			</div>
			  			<div className="ChoixSondage">
			  				<Button color="blue" basic={this.state.ButtonQ6R3} fluid onClick={this.Q6R3.bind(this)}>
			  				{this.props.message.Q6R3}
			  				</Button>
			  			</div>
			  			<div className="ChoixSondage">
			  				<Button color="blue" basic={this.state.ButtonQ6R4} fluid onClick={this.Q6R4.bind(this)}>
			  				{this.props.message.Q6R4}
			  				</Button>
			  			</div>

			  			<div className="espaceSondage" ></div>

			  			<div className="titreQuestion">
			  			Question n°7 :
			  				{this.props.message.Q7}
			  			</div>
			  			<div className="ChoixSondage">
			  				<Button color="blue" basic={this.state.ButtonQ7R1} fluid onClick={this.Q7R1.bind(this)}>
			  				{this.props.message.Q7R1}
			  				</Button>
			  			</div>
			  			<div className="ChoixSondage">
			  				<Button color="blue" basic={this.state.ButtonQ7R2} fluid onClick={this.Q7R2.bind(this)}>
			  				{this.props.message.Q7R2}
			  				</Button>
			  			</div>
			  			<div className="ChoixSondage">
			  				<Button color="blue" basic={this.state.ButtonQ7R3} fluid onClick={this.Q7R3.bind(this)}>
			  				{this.props.message.Q7R3}
			  				</Button>
			  			</div>
			  			<div className="ChoixSondage">
			  				<Button color="blue" basic={this.state.ButtonQ7R4} fluid onClick={this.Q7R4.bind(this)}>
			  				{this.props.message.Q7R4}
			  				</Button>
			  			</div>

			  			<div className="espaceSondage" ></div>

			  			<div className="titreQuestion">
			  			Question n°8 :
			  				{this.props.message.Q8}
			  			</div>
			  			<div className="ChoixSondage">
			  				<Button color="blue" fluid basic={this.state.ButtonQ8R1} onClick={this.Q8R1.bind(this)}>
			  				{this.props.message.Q8R1}
			  				</Button>
			  			</div>
			  			<div className="ChoixSondage">
			  				<Button color="blue" basic={this.state.ButtonQ8R2} fluid onClick={this.Q8R2.bind(this)}>
			  				{this.props.message.Q8R2}
			  				</Button>
			  			</div>
			  			<div className="ChoixSondage">
			  				<Button color="blue" basic={this.state.ButtonQ8R3} fluid onClick={this.Q8R3.bind(this)}>
			  				{this.props.message.Q8R3}
			  				</Button>
			  			</div>
			  			<div className="ChoixSondage">
			  				<Button color="blue" basic={this.state.ButtonQ8R4} fluid onClick={this.Q8R4.bind(this)}>
			  				{this.props.message.Q8R4}
			  				</Button>
			  			</div>

			  			<div className="espaceSondage" ></div>

			  			<div className="titreQuestion">
			  			Question n°9 :
			  				{this.props.message.Q9}
			  			</div>
			  			<div className="ChoixSondage">
			  				<Button color="blue" basic={this.state.ButtonQ9R1} fluid onClick={this.Q9R1.bind(this)}>
			  				{this.props.message.Q9R1}
			  				</Button>
			  			</div>
			  			<div className="ChoixSondage">
			  				<Button color="blue" basic={this.state.ButtonQ9R2} fluid onClick={this.Q9R2.bind(this)}>
			  				{this.props.message.Q9R2}
			  				</Button>
			  			</div>
			  			<div className="ChoixSondage">
			  				<Button color="blue" basic={this.state.ButtonQ9R3} fluid onClick={this.Q9R3.bind(this)}>
			  				{this.props.message.Q9R3}
			  				</Button>
			  			</div>
			  			<div className="ChoixSondage">
			  				<Button color="blue" basic={this.state.ButtonQ9R4} fluid onClick={this.Q9R4.bind(this)}>
			  				{this.props.message.Q9R4}
			  				</Button>
			  			</div>

			  			<div className="espaceSondage" ></div>

			  			<div className="titreQuestion">
			  			Question n°10 :
			  				{this.props.message.Q10}
			  			</div>
			  			<div className="ChoixSondage">
			  				<Button color="blue" basic={this.state.ButtonQ10R1} fluid onClick={this.Q10R1.bind(this)}>
			  				{this.props.message.Q10R1}
			  				</Button>
			  			</div>
			  			<div className="ChoixSondage">
			  				<Button color="blue" basic={this.state.ButtonQ10R2} fluid onClick={this.Q10R2.bind(this)}>
			  				{this.props.message.Q10R2}
			  				</Button>
			  			</div>
			  			<div className="ChoixSondage">
			  				<Button color="blue" basic={this.state.ButtonQ10R3} fluid onClick={this.Q10R3.bind(this)}>
			  				{this.props.message.Q10R3}
			  				</Button>
			  			</div>
			  			<div className="ChoixSondage">
			  				<Button color="blue" basic={this.state.ButtonQ10R4} fluid onClick={this.Q10R4.bind(this)}>
			  				{this.props.message.Q10R4}
			  				</Button>
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

export default SingleArticlePost =  withTracker(({ id }) => {
  

  return {

  };
})(SingleArticlePost);