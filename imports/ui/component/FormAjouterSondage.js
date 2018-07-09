import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor';
import { Segment, Button, Checkbox, Form, Header, TextArea, Message } from 'semantic-ui-react'
import { Link } from 'react-router-dom';
import ReactDOM from 'react-dom';
import { withTracker } from 'meteor/react-meteor-data';
import { Videos } from '../../api/Videos.js';


class FormAjouterSondage extends Component {

	constructor(props) {
	    super(props);
	 
	    this.state = {
	      visible: false,

	    };
	}


	Submit(event) {
        event.preventDefault();

	  	const titre = ReactDOM.findDOMNode(this.refs.titre).value.trim();
	  	const Q1 = ReactDOM.findDOMNode(this.refs.Q1).value.trim();
	  	const Q2 = ReactDOM.findDOMNode(this.refs.Q2).value.trim();
	  	const Q3 = ReactDOM.findDOMNode(this.refs.Q3).value.trim();
	  	const Q4 = ReactDOM.findDOMNode(this.refs.Q4).value.trim();
	  	const Q5 = ReactDOM.findDOMNode(this.refs.Q5).value.trim();
	  	const Q6 = ReactDOM.findDOMNode(this.refs.Q6).value.trim();
	  	const Q7 = ReactDOM.findDOMNode(this.refs.Q7).value.trim();
	  	const Q8 = ReactDOM.findDOMNode(this.refs.Q8).value.trim();
	  	const Q9 = ReactDOM.findDOMNode(this.refs.Q9).value.trim();
	  	const Q10 = ReactDOM.findDOMNode(this.refs.Q10).value.trim();
	  	
	  	const Q1R1 = ReactDOM.findDOMNode(this.refs.Q1R1).value.trim();
	  	const Q1R2 = ReactDOM.findDOMNode(this.refs.Q1R2).value.trim();
	  	const Q1R3 = ReactDOM.findDOMNode(this.refs.Q1R3).value.trim();
	  	const Q1R4 = ReactDOM.findDOMNode(this.refs.Q1R4).value.trim();

	  	const Q2R1 = ReactDOM.findDOMNode(this.refs.Q2R1).value.trim();
	  	const Q2R2 = ReactDOM.findDOMNode(this.refs.Q2R2).value.trim();
	  	const Q2R3 = ReactDOM.findDOMNode(this.refs.Q2R3).value.trim();
	  	const Q2R4 = ReactDOM.findDOMNode(this.refs.Q2R4).value.trim();

	  	const Q3R1 = ReactDOM.findDOMNode(this.refs.Q3R1).value.trim();
	  	const Q3R2 = ReactDOM.findDOMNode(this.refs.Q3R2).value.trim();
	  	const Q3R3 = ReactDOM.findDOMNode(this.refs.Q3R3).value.trim();
	  	const Q3R4 = ReactDOM.findDOMNode(this.refs.Q3R4).value.trim();

	  	const Q4R1 = ReactDOM.findDOMNode(this.refs.Q4R1).value.trim();
	  	const Q4R2 = ReactDOM.findDOMNode(this.refs.Q4R2).value.trim();
	  	const Q4R3 = ReactDOM.findDOMNode(this.refs.Q4R3).value.trim();
	  	const Q4R4 = ReactDOM.findDOMNode(this.refs.Q4R4).value.trim();

	  	const Q5R1 = ReactDOM.findDOMNode(this.refs.Q5R1).value.trim();
	  	const Q5R2 = ReactDOM.findDOMNode(this.refs.Q5R2).value.trim();
	  	const Q5R3 = ReactDOM.findDOMNode(this.refs.Q5R3).value.trim();
	  	const Q5R4 = ReactDOM.findDOMNode(this.refs.Q5R4).value.trim();

	  	const Q6R1 = ReactDOM.findDOMNode(this.refs.Q6R1).value.trim();
	  	const Q6R2 = ReactDOM.findDOMNode(this.refs.Q6R2).value.trim();
	  	const Q6R3 = ReactDOM.findDOMNode(this.refs.Q6R3).value.trim();
	  	const Q6R4 = ReactDOM.findDOMNode(this.refs.Q6R4).value.trim();

	  	const Q7R1 = ReactDOM.findDOMNode(this.refs.Q7R1).value.trim();
	  	const Q7R2 = ReactDOM.findDOMNode(this.refs.Q7R2).value.trim();
	  	const Q7R3 = ReactDOM.findDOMNode(this.refs.Q7R3).value.trim();
	  	const Q7R4 = ReactDOM.findDOMNode(this.refs.Q7R4).value.trim();

	  	const Q8R1 = ReactDOM.findDOMNode(this.refs.Q8R1).value.trim();
	  	const Q8R2 = ReactDOM.findDOMNode(this.refs.Q8R2).value.trim();
	  	const Q8R3 = ReactDOM.findDOMNode(this.refs.Q8R3).value.trim();
	  	const Q8R4 = ReactDOM.findDOMNode(this.refs.Q8R4).value.trim();

	  	const Q9R1 = ReactDOM.findDOMNode(this.refs.Q9R1).value.trim();
	  	const Q9R2 = ReactDOM.findDOMNode(this.refs.Q9R2).value.trim();
	  	const Q9R3 = ReactDOM.findDOMNode(this.refs.Q9R3).value.trim();
	  	const Q9R4 = ReactDOM.findDOMNode(this.refs.Q9R4).value.trim();

	  	const Q10R1 = ReactDOM.findDOMNode(this.refs.Q10R1).value.trim();
	  	const Q10R2 = ReactDOM.findDOMNode(this.refs.Q10R2).value.trim();
	  	const Q10R3 = ReactDOM.findDOMNode(this.refs.Q10R3).value.trim();
	  	const Q10R4 = ReactDOM.findDOMNode(this.refs.Q10R4).value.trim();


		  	Meteor.call('addSondage',
		  	  titre,
		  	     Q1,
			  	 Q2, 
			  	 Q3,
			  	 Q4, 
			  	 Q5,
			  	 Q6,
			  	 Q7, 
			  	 Q8, 
			  	 Q9, 
			  	 Q10,
			  	
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
			        ReactDOM.findDOMNode(this.refs.titre).value = '';
			        ReactDOM.findDOMNode(this.refs.Q1).value= '';
				   	ReactDOM.findDOMNode(this.refs.Q2).value= '';
				  	ReactDOM.findDOMNode(this.refs.Q3).value= '';
				  	 ReactDOM.findDOMNode(this.refs.Q4).value= '';
				  	 ReactDOM.findDOMNode(this.refs.Q5).value= '';
				  	 ReactDOM.findDOMNode(this.refs.Q6).value= '';
				  	 ReactDOM.findDOMNode(this.refs.Q7).value= '';
				  	 ReactDOM.findDOMNode(this.refs.Q8).value= '';
				  	 ReactDOM.findDOMNode(this.refs.Q9).value= '';
				  	ReactDOM.findDOMNode(this.refs.Q10).value= '';
				  	
				  	 ReactDOM.findDOMNode(this.refs.Q1R1).value= '';
				  	 ReactDOM.findDOMNode(this.refs.Q1R2).value= '';
				  	ReactDOM.findDOMNode(this.refs.Q1R3).value= '';
				  	ReactDOM.findDOMNode(this.refs.Q1R4).value= '';

				  	 ReactDOM.findDOMNode(this.refs.Q2R1).value= '';
				  	ReactDOM.findDOMNode(this.refs.Q2R2).value= '';
				  	 ReactDOM.findDOMNode(this.refs.Q2R3).value= '';
				  	ReactDOM.findDOMNode(this.refs.Q2R4).value= '';

				  	 ReactDOM.findDOMNode(this.refs.Q3R1).value= '';
				  	 ReactDOM.findDOMNode(this.refs.Q3R2).value= '';
				  	 ReactDOM.findDOMNode(this.refs.Q3R3).value= '';
				  	 ReactDOM.findDOMNode(this.refs.Q3R4).value= '';

				  	 ReactDOM.findDOMNode(this.refs.Q4R1).value= '';
				  	 ReactDOM.findDOMNode(this.refs.Q4R2).value= '';
				  	 ReactDOM.findDOMNode(this.refs.Q4R3).value= '';
				  	 ReactDOM.findDOMNode(this.refs.Q4R4).value= '';

				  	 ReactDOM.findDOMNode(this.refs.Q5R1).value= '';
				  	 ReactDOM.findDOMNode(this.refs.Q5R2).value= '';
				  	 ReactDOM.findDOMNode(this.refs.Q5R3).value= '';
				  	 ReactDOM.findDOMNode(this.refs.Q5R4).value= '';

				  	 ReactDOM.findDOMNode(this.refs.Q6R1).value= '';
				  	 ReactDOM.findDOMNode(this.refs.Q6R2).value= '';
				  	 ReactDOM.findDOMNode(this.refs.Q6R3).value= '';
				  	 ReactDOM.findDOMNode(this.refs.Q6R4).value= '';

				  	 ReactDOM.findDOMNode(this.refs.Q7R1).value= '';
				  	 ReactDOM.findDOMNode(this.refs.Q7R2).value= '';
				  	ReactDOM.findDOMNode(this.refs.Q7R3).value= '';
				  	 ReactDOM.findDOMNode(this.refs.Q7R4).value= '';

				  	 ReactDOM.findDOMNode(this.refs.Q8R1).value= '';
				  	 ReactDOM.findDOMNode(this.refs.Q8R2).value= '';
				  	 ReactDOM.findDOMNode(this.refs.Q8R3).value= '';
				  	ReactDOM.findDOMNode(this.refs.Q8R4).value= '';

				  	 ReactDOM.findDOMNode(this.refs.Q9R1).value= '';
				  	 ReactDOM.findDOMNode(this.refs.Q9R2).value= '';
				  	 ReactDOM.findDOMNode(this.refs.Q9R3).value= '';
				  	 ReactDOM.findDOMNode(this.refs.Q9R4).value= '';

				  	ReactDOM.findDOMNode(this.refs.Q10R1).value= '';
				  	ReactDOM.findDOMNode(this.refs.Q10R2).value= '';
				  	 ReactDOM.findDOMNode(this.refs.Q10R3).value= '';
				  	 ReactDOM.findDOMNode(this.refs.Q10R4).value= '';
			        
			    
				  	
	              	}     
            	
          	})

	

 

  	}

  	render() {

  		const { visible } = this.state
		
		return (
			<div >
				<Segment>
				    <Form error onSubmit={this.Submit.bind(this)}>
					    <Form.Field>
					      <label>Titre du sondage</label>
					      <input
					       ref="titre"
					       />
					       <Message
				            hidden={!this.state.titreVide}
				            error={this.state.titreVide}
				            content='Le titre est obligatoire'
				          />
					    </Form.Field>

					    <Form.Field>
					      <div className="LabelSondage">Question 1 :</div>
					      <input
					       ref="Q1"
					       />
					    </Form.Field>

					    <Form.Field>
					      <label>Réponse 1 :</label>
					      <input
					       ref="Q1R1"
					       />
						</Form.Field>

						<Form.Field>
					      <label>Réponse 2 :</label>
					      <input
					       ref="Q1R2"
					       />
						</Form.Field>

						<Form.Field>
					      <label>Réponse 3 :</label>
					      <input
					       ref="Q1R3"
					       />
						</Form.Field>

						<Form.Field>
					      <label>Réponse 4 :</label>
					      <input
					       ref="Q1R4"
					       />
						</Form.Field>




						 <Form.Field>
					       <div className="LabelSondage">Question 2 :</div>
					      <input
					       ref="Q2"
					       />
					    </Form.Field>

					    <Form.Field>
					      <label >Réponse 1 :</label>
					      <input
					       ref="Q2R1"
					       />
						</Form.Field>

						<Form.Field>
					      <label>Réponse 2 :</label>
					      <input
					       ref="Q2R2"
					       />
						</Form.Field>

						<Form.Field>
					      <label>Réponse 3 :</label>
					      <input
					       ref="Q2R3"
					       />
						</Form.Field>

						<Form.Field>
					      <label>Réponse 4 :</label>
					      <input
					       ref="Q2R4"
					       />
						</Form.Field>





						<Form.Field>
					       <div className="LabelSondage">Question 3 :</div>
					      <input
					       ref="Q3"
					       />
					    </Form.Field>

					    <Form.Field>
					      <label >Réponse 1 :</label>
					      <input
					       ref="Q3R1"
					       />
						</Form.Field>

						<Form.Field>
					      <label>Réponse 2 :</label>
					      <input
					       ref="Q3R2"
					       />
						</Form.Field>

						<Form.Field>
					      <label>Réponse 3 :</label>
					      <input
					       ref="Q3R3"
					       />
						</Form.Field>

						<Form.Field>
					      <label>Réponse 4 :</label>
					      <input
					       ref="Q3R4"
					       />
						</Form.Field>




						<Form.Field>
					       <div className="LabelSondage">Question 4 :</div>
					      <input
					       ref="Q4"
					       />
					    </Form.Field>

					    <Form.Field>
					      <label >Réponse 1 :</label>
					      <input
					       ref="Q4R1"
					       />
						</Form.Field>

						<Form.Field>
					      <label>Réponse 2 :</label>
					      <input
					       ref="Q4R2"
					       />
						</Form.Field>

						<Form.Field>
					      <label>Réponse 3 :</label>
					      <input
					       ref="Q4R3"
					       />
						</Form.Field>

						<Form.Field>
					      <label>Réponse 4 :</label>
					      <input
					       ref="Q4R4"
					       />
						</Form.Field>




						<Form.Field>
					       <div className="LabelSondage">Question 5 :</div>
					      <input
					       ref="Q5"
					       />
					    </Form.Field>

					    <Form.Field>
					      <label >Réponse 1 :</label>
					      <input
					       ref="Q5R1"
					       />
						</Form.Field>

						<Form.Field>
					      <label>Réponse 2 :</label>
					      <input
					       ref="Q5R2"
					       />
						</Form.Field>

						<Form.Field>
					      <label>Réponse 3 :</label>
					      <input
					       ref="Q5R3"
					       />
						</Form.Field>

						<Form.Field>
					      <label>Réponse 4 :</label>
					      <input
					       ref="Q5R4"
					       />
						</Form.Field>



						<Form.Field>
					       <div className="LabelSondage">Question 6 :</div>
					      <input
					       ref="Q6"
					       />
					    </Form.Field>

					    <Form.Field>
					      <label >Réponse 1 :</label>
					      <input
					       ref="Q6R1"
					       />
						</Form.Field>

						<Form.Field>
					      <label>Réponse 2 :</label>
					      <input
					       ref="Q6R2"
					       />
						</Form.Field>

						<Form.Field>
					      <label>Réponse 3 :</label>
					      <input
					       ref="Q6R3"
					       />
						</Form.Field>

						<Form.Field>
					      <label>Réponse 4 :</label>
					      <input
					       ref="Q6R4"
					       />
						</Form.Field>



						<Form.Field>
					       <div className="LabelSondage">Question 7 :</div>
					      <input
					       ref="Q7"
					       />
					    </Form.Field>

					    <Form.Field>
					      <label >Réponse 1 :</label>
					      <input
					       ref="Q7R1"
					       />
						</Form.Field>

						<Form.Field>
					      <label>Réponse 2 :</label>
					      <input
					       ref="Q7R2"
					       />
						</Form.Field>

						<Form.Field>
					      <label>Réponse 3 :</label>
					      <input
					       ref="Q7R3"
					       />
						</Form.Field>

						<Form.Field>
					      <label>Réponse 4 :</label>
					      <input
					       ref="Q7R4"
					       />
						</Form.Field>



						<Form.Field>
					       <div className="LabelSondage">Question 8 :</div>
					      <input
					       ref="Q8"
					       />
					    </Form.Field>

					    <Form.Field>
					      <label >Réponse 1 :</label>
					      <input
					       ref="Q8R1"
					       />
						</Form.Field>

						<Form.Field>
					      <label>Réponse 2 :</label>
					      <input
					       ref="Q8R2"
					       />
						</Form.Field>

						<Form.Field>
					      <label>Réponse 3 :</label>
					      <input
					       ref="Q8R3"
					       />
						</Form.Field>

						<Form.Field>
					      <label>Réponse 4 :</label>
					      <input
					       ref="Q8R4"
					       />
						</Form.Field>



						<Form.Field>
					       <div className="LabelSondage">Question 9 :</div>
					      <input
					       ref="Q9"
					       />
					    </Form.Field>

					    <Form.Field>
					      <label >Réponse 1 :</label>
					      <input
					       ref="Q9R1"
					       />
						</Form.Field>

						<Form.Field>
					      <label>Réponse 2 :</label>
					      <input
					       ref="Q9R2"
					       />
						</Form.Field>

						<Form.Field>
					      <label>Réponse 3 :</label>
					      <input
					       ref="Q9R3"
					       />
						</Form.Field>

						<Form.Field>
					      <label>Réponse 4 :</label>
					      <input
					       ref="Q9R4"
					       />
						</Form.Field>



						<Form.Field>
					       <div className="LabelSondage">Question 10 :</div>
					      <input
					       ref="Q10"
					       />
					    </Form.Field>

					    <Form.Field>
					      <label >Réponse 1 :</label>
					      <input
					       ref="Q10R1"
					       />
						</Form.Field>

						<Form.Field>
					      <label>Réponse 2 :</label>
					      <input
					       ref="Q10R2"
					       />
						</Form.Field>

						<Form.Field>
					      <label>Réponse 3 :</label>
					      <input
					       ref="Q10R3"
					       />
						</Form.Field>

						<Form.Field>
					      <label>Réponse 4 :</label>
					      <input
					       ref="Q10R4"
					       />
						</Form.Field>





						 
					    
					    

					    <Button type='submit' color="green">Valider</Button>
			
			  		</Form>
	  			</Segment>
	  			<div className="blockVide">
	  			</div>
			</div>
		);
  	}
}

export default withTracker(() => {
  return { 
  };
})(FormAjouterSondage);
