import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';
import { Link } from 'react-router-dom';
import { Sidebar, Segment, Button, Menu, Input, Icon, Header, Checkbox, Form,  Message } from 'semantic-ui-react'
import Img from 'react-image'
import { Route, Redirect } from 'react-router';
 
//Component
import HeaderPage from '../component/HeaderPage.js';
import ContentMenuRight from '../component/ContentMenuRight.js';
import ButtonPusher from '../component/ButtonPusher.js';
import ContentMenuLeft from '../component/ContentMenuLeft.js';
import MainContentSondages from '../component/MainContentSondages.js';

class TousSondage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            hidden:true,
            visible:false
        }
    }

    toggleVisibility = () => this.setState({ visible: !this.state.visible })
    toggleHidden = () => this.setState({ visible: false })

    //handleChange = (e, { name, value }) => this.setState({ [name]: value })

    handleChange(value){
      this.setState({hidden: false})
      this.setState({ name: value })
    }  

    hidden(){
      this.setState({hidden: true})
      this.setState({name: ''})
    }

    visible(){
      //this.setState({hidden: false})
      this.setState({placeholder: ''})
    }

    visiblePlaceholder(){
      this.setState({placeholder: 'Rechercher un article',})
      //this.setState({hidden: true})
    }

    focusOut(){
      {this.state.name='' ? this.setState({hidden: true}) : ''}
    }

    render() {
    const { visible } = this.state
     const { name} = this.state    
    if (!Meteor.loggingIn() && !Meteor.userId()){
      return <Redirect to="/" />;
    }
    
    
    return (
      <div className="container">
        <header>
          <div className="containerSupHeader">
          <ContentMenuLeft />
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
                  <div className="MainContentSearchArticle">
                    </div>
                    <div onClick={this.hidden.bind(this)}>
                      <MainContentSondages  />
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
})(TousSondage);
