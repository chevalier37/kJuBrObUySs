import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor';
import { Segment, Button, Checkbox, Form, Header, Divider, Label, Comment } from 'semantic-ui-react'
import { withTracker } from 'meteor/react-meteor-data';

import {CardNumberElement} from 'react-stripe-elements';
import {CardExpiryElement} from 'react-stripe-elements';
import {CardCVCElement} from 'react-stripe-elements';

class CardSection extends React.Component {
  render() {
  	const style = {
  base: {
    color: '#32325d',
    
    fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
    fontSmoothing: 'antialiased',
    fontSize: '16px',
    '::placeholder': {
      color: '#aab7c4'
    }
  },
  invalid: {
    color: '#fa755a',
    iconColor: '#fa755a'
  }
};
    return (
      <label>
      <div className="cardSection">
        Carte bancaire :
        <div className="cardblock">
        	Numéro de carte :
        	<CardNumberElement style={style}  />
		</div>
		<div className="cardblock">
			Date d'expiration :
        	<CardExpiryElement style={style} />
        </div>
		<div className="cardblock">
			Code CVC :
        	<CardCVCElement style={style} />
        </div>
       </div>
      </label>
    );
  }
};

export default CardSection;