import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';
import { Link } from 'react-router-dom';
import { Sidebar, Segment, Button, Header, Form, Message } from 'semantic-ui-react'
import Img from 'react-image'
import { Route, Redirect } from 'react-router';
 
//Component
import HeaderPage from '../component/HeaderPage.js';
import ContentMenuRight from '../component/ContentMenuRight.js';
import ButtonPusher from '../component/ButtonPusher.js';
import ContentMenuLeft from '../component/ContentMenuLeft.js';
import ContentMessagePostes from '../component/ContentMessagePostes.js';

class ChangerMotDePasse extends Component {

    constructor(props) {
    super(props);
    this.state = {
      errorLogin:false,
      pseudo:false,
      mail:false,
      password:false,
      connection:false,
      errorPassword:false,
      visible:false,     
    };   
  }

    toggleVisibility = () => this.setState({ visible: !this.state.visible })
    toggleHidden = () => this.setState({ visible: false })

    componentDidMount() {
        this.scrollToTop();
    }

    componentDidUpdate() {
        this.scrollToTop();
    }

    scrollToTop() {
        this.el.scrollIntoView();
    }

      Submit(event) {
      event.preventDefault();

      this.setState({errorLogin: false, })
      this.setState({pseudo: false, })
      this.setState({mail: false, })

      const pseudo = ReactDOM.findDOMNode(this.refs.pseudo).value.trim();
      const email = ReactDOM.findDOMNode(this.refs.email).value.trim();
      //const password1 = ReactDOM.findDOMNode(this.refs.password1).value.trim();
      const password = ReactDOM.findDOMNode(this.refs.password2).value.trim();

      //On verifie que le pseudo n'est pas vide
      {!pseudo ?
       this.setState({pseudo: true,}) :
       this.setState({pseudo: false,
      })}

      //On verifie que le mail n'est pas vide
      {!email ?
       this.setState({mail: true,}) :
       this.setState({mail: false,
      })}

       //On verifie que les mots de passe correspondent
      /*{password1 !== password ?
       this.setState({errorLogin: true,}) :
       ''
      }*/

       //Les password ne doivent pas être vide
       {password == '' ?
       this.setState({errorPassword: true,}) :
       ''
      }

      /*check(pseudo, String);
      check(email, String);
      check(password, String);*/

     //on vérifie que le pseudo et le mail existe
      Meteor.apply('UserExiste', [{
          pseudo:pseudo,
          email:email,
          }], {
          onResultReceived: (error, response) => {
            if (error) console.warn(error.reason);
            {response ?
             this.setState({errorLogin: false, }) :
             this.setState({errorLogin: true, })}
          },
      });

      {
        this.state.errorLogin==false
        ?
        Meteor.apply('ResetPassword', [{
        pseudo:pseudo,
        password:password,
        }], {
        onResultReceived: (error, response) => {
          if (error) console.warn(error.reason);
          {response ?
          this.setState({errorLogin: false,})
           :
           this.setState({errorLogin: true,})}

          },
        })
        :
        ''
      }
        
      const errorLogin = this.state.errorLogin;
      const errorPassword = this.state.errorPassword;

       if (errorLogin == false && errorPassword == false) {
          Meteor.loginWithPassword(pseudo, password, (err) => {
            if(err){
             
              this.setState({erreurLogin: true,})
            } else {
              {
              Meteor.userId() ? 
              this.setState({connection: true,}): ''     
              }
            }
          });
      }

  }

    render() {
    const { visible } = this.state  
    if (!Meteor.loggingIn() && !Meteor.userId()){
      return <Redirect to="/" />;
    }

    const connection = this.state.connection;
  
    if (connection) {
      return <Redirect to="/ValiderNouveauPassword" />;
    }
    
    return (
      <div className="container">
      <div ref={el => { this.el = el; }} ></div>
        <header>
          <div className="containerSupHeader">
            <div className="containerHeader">
            <div className="headerPage">
              <HeaderPage />
              <span
               className="buttonPush"
               onClick={this.toggleVisibility}>

               <ButtonPusher />
               </span>
            </div>
            </div>
          </div>
        </header>
       
        <Sidebar.Pushable >
              <Sidebar
                animation='overlay'
                className="ListRight"
                direction='right'
                visible={visible}
                icon='labeled'
                vertical
                className="SidebarUI"
              >
                <ContentMenuRight />
              </Sidebar>
              
              <Sidebar.Pusher>

                <div className="containerSite" onClick={this.toggleHidden}>
                  <div className="containerIMG">
                    <ContentMenuLeft />
              <div className="MainContent">
                <Segment className="MainContentPage">
                <Header>
                Changer de mot de passe
                </Header>
                Créer un nouveau mot de passe <p></p>

                    <Form error onSubmit={this.Submit.bind(this)}>

                        <Message
                          hidden={!this.state.errorLogin}
                          error={this.state.errorLogin}
                          header='Erreur'
                          content='Erreur identifiant'
                        />
                        <Form.Field required error={this.state.pseudo}>
                          <input
                           ref="pseudo"
                           placeholder='Pseudo'
                           />
                          
                        <Message
                          hidden={!this.state.pseudo}
                          error={this.state.pseudo}
                          header='Erreur pseudo'
                          content='Le pseudo est obligatoire'
                        />
                        </Form.Field>


                        <Form.Field required error={this.state.mail}>
                          <input
                           ref="email"
                           type='email'
                           placeholder='Email'
                           />
                         <Message
                          error={this.state.mail}
                          hidden={!this.state.mail}
                          header='Erreur email'
                          content="L'adresse mail est obligatoire"
                         />
                        </Form.Field>

                        
                        <Form.Field required error={this.state.password}>
                          <input
                           ref="password2"
                           type='password'
                           placeholder='Nouveau mot de passe'
                          />
                         <Message
                          error={this.state.password}
                          hidden={!this.state.password}
                          header='Erreur mot de passe'
                          content="Les mots de passe ne correspondent pas"
                        />
                        </Form.Field>

                        <Button type='submit' color='green'>Valider</Button>

                    </Form>
                  </Segment>
                </div>
                  </div> 
                </div>
              </Sidebar.Pusher>
        </Sidebar.Pushable>
      </div>
    );
  }
}

export default withTracker(() => {
  return {  
  };
})(ChangerMotDePasse);
