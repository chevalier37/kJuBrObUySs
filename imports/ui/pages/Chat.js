import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';
import { Link } from 'react-router-dom';
import { Sidebar, Segment, Button, Menu, Image, Icon, Header, Checkbox, Form,  Message } from 'semantic-ui-react'
import { Route, Redirect } from 'react-router';

//Component
import HeaderPage from '../component/HeaderPage.js';
import ContentMenuRight from '../component/ContentMenuRight.js';
import ButtonPusher from '../component/ButtonPusher.js';
import ContactChat from '../component/ContactChat.js';
import ChatContent from '../component/ChatContent.js';
import FormChat from '../component/FormChat.js';

import { Chat } from '../../api/Chat.js';
import { BloquerChat } from '../../api/BloquerChat.js';


class chat extends Component {

    constructor(props) {
        super(props);
     
        this.state = {
          username:'',
          naissance:'',
          update:false,
          gender:'',
          bloquer:false,
        };
    }

    componentWillMount(){
       const from_id = this.props.match.params.id
        Meteor.apply('isContactBloquer', [{
            from_id
            }], {
            onResultReceived: (error, response) => {
              if (error) console.warn(error.reason);
              {response ?  
               this.setState({bloquer: true}) :
               this.setState({bloquer: false})}
              },

        })
    }

    renderAllChat() {
          let AllChat = this.props.allChat;
          let name = this.props.username
          return AllChat.map((message) => {
           let date = Date.parse(message.post_date);
            return (
              <ChatContent
                key={message._id}
                message={message}
                date={date}
                to_id = {this.props.match.params.id} 
              />
            );
          });
    }

    componentWillReceiveProps(){
         this.setState({update: false})
         const from_id = this.props.match.params.id
          Meteor.apply('isContactBloquer', [{
            from_id
            }], {
            onResultReceived: (error, response) => {
              if (error) console.warn(error.reason);
              {response ?  
               this.setState({bloquer: true}) :
               this.setState({bloquer: false})}
              },

        })
    }

    bloquer(){
       const to_id = this.props.match.params.id
       this.setState({bloquer: !this.state.bloquer})
       
       if(this.state.bloquer == false){
       Meteor.call('bloquerChat',
          to_id,
          (err) => {
              if(err){
               } else {
                {}     
              }
            })
        }

        if(this.state.bloquer == true){
       Meteor.call('supprimerBloquer',
          to_id,
          (err) => {
              if(err){
               } else {
                {}     
              }
            })
        }

    }
      
    render() {
    
    const { visible } = this.state
    
    if (!Meteor.loggingIn() && !Meteor.userId()){
      return <Redirect to="/" />;
    } 

      const to_id = this.props.match.params.id;
       
      if(this.state.update==false && to_id != Meteor.userId()){

        //on cherche le username, l'age et on met tous les message en 'read'
        Meteor.apply('updateContact', [{
          to_id,
          }], {
          onResultReceived: (error, response) => {
            if (error) console.warn(error.reason);
            let now = new Date();
            let diff = now - response.profile.naissance;
            let age = Math.round(diff / 31536000000);
            
            {response ?
             this.setState({naissance: age})
            
             :
             ''}

             {response ?
             this.setState({update: true})
             
             :
             ''}
             
             {response ?
             this.setState({username: response.username}) 
             
             :
             ''}

              {response ?
             this.setState({gender: response.profile.gender}) 
             
             :
             ''}

            },
        });
      }

    return (
      <div className="container">
        <header>
          <div className="containerSupHeader">
            <div className="containerHeader">
            <div className="headerPage">
              <HeaderPage />
              <span
               className="buttonPush"
               onClick={this.toggleVisibility}>

               <ButtonPusher chat='true'/>
               </span>
            </div>
            </div>
          </div>
        </header>

        <div className="containerSiteChat" onClick={this.toggleHidden}>
          <div className="containerChat">
            <div className="containerContactChat"  >
              <ContactChat to_id = {this.props.match.params.id}  />
            </div>
            <div className="containerDiscussion">
              <div className="MainContentChat">
                <div className="headerChat">
                  <div className={"ChatUsername" + " " + this.state.gender}>
                      <Link to={'/Profil/' + this.props.match.params.id}>
                      {this.state.username}
                      </Link>
                  </div>
                  <div className="ChatAge">  
                      {this.state.naissance} ans
                  </div>
                  <div className={this.state.bloquer ? "none" : "recommmander"}>
                      <Link to={'/Recommander/' + this.props.match.params.id}>    
                        <Button
                         basic
                         color='violet'
                         size='tiny'
                           > 
                           Recommander
                        </Button>
                      </Link>
                  </div>
                  <div className={this.state.bloquer ? "none" :"FaireDon"}>
                    <Link to={'/Dons/' + this.props.match.params.id}>  
                        <Button
                         basic
                         color='red'
                         size='tiny'
                          >
                           Faire un don
                        </Button>
                    </Link>
                  </div>
                  <div className={this.state.bloquer ? "bloquerRed" :"none"}>
                    Utilisateur bloqué !
                  </div>
                  <div className="FaireDon">
                        <Button 
                          basic
                          size='tiny'
                          color={this.state.bloquer ? 'green' : 'red'}
                          onClick={this.bloquer.bind(this)}
                          >
                          {this.state.bloquer ? "Débloquer" : "Bloquer"}
                        </Button>
                  </div>
                </div>
                <div className="ContentDiscussion">
                   {this.renderAllChat()}
                  <FormChat to_id = {this.props.match.params.id} username={this.state.username} gender={this.state.gender} />
                </div>
              </div>
            </div>
          </div> 
        </div>
      </div>
    );
  }
}


export default chat =  withTracker(({ match }) => {
  const to_id = match.params.id;
  const from_id = Meteor.userId();
  const Handle = Meteor.subscribe('Chat', to_id, from_id);
  const loading = !Handle.ready();
  const allreponses = Chat.find({$or : [{from_id: from_id, to_id:to_id}, {from_id: to_id, to_id:from_id}]}, { sort: { post_date: 1 }});
  const reponseExists = !loading && !!allreponses;
  let username = '';

  return {
    allChat: reponseExists ? allreponses.fetch() : [],
  };
})(chat);