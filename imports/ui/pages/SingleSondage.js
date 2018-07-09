import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';
import { Link } from 'react-router-dom';
import { Sidebar, Segment, Button, Menu, Image, Icon, Header, Checkbox, Form,  Message, Label, Divider } from 'semantic-ui-react'
import Img from 'react-image'
import { Route, Redirect } from 'react-router';

import { Sondages } from '../../api/Sondages.js';
import { CommentArticle } from '../../api/CommentArticle.js';

//Component
import HeaderPage from '../component/HeaderPage.js';
import ContentMenuRight from '../component/ContentMenuRight.js';
import ButtonPusher from '../component/ButtonPusher.js';
import ContentMenuLeft from '../component/ContentMenuLeft.js';
import FormPosterReponseArticle from '../component/FormPosterReponseArticle.js';
import SingleSondagePost from '../component/SingleSondagePost.js';
import ListeCommentArticle from '../component/ListeCommentArticle.js';


class SingleSondage extends Component {

    constructor(props) {
        super(props);
        this.state = {
          visible: false,
          visibleForm:false,
        }
    }

    visible(){
      this.setState({
        visibleForm: !this.state.visibleForm,
      });
    }

    componentDidMount() {
        this.scrollToTop();
    }

    componentWillMount(){
      
  }


    scrollToTop() {
        this.el.scrollIntoView();
    }

    toggleVisibility = () => this.setState({ visible: !this.state.visible })
    toggleHidden = () => this.setState({ visible: false })

    renderAllMessages() {
      let AllMessages = this.props.message;

      return AllMessages.map((message) => {
       let date = Date.parse(message.date);
         
        return (
          <SingleSondagePost
            key={message._id}
            message={message}
            date={date}
            id={message._id}
    
          />
        );
      });
  }

  renderAllcomment() {
      let Allreponses = this.props.allreponses;

      return Allreponses.map((message) => {
       let date = Date.parse(message.submitted);
         
        return (
          <ListeCommentArticle
            key={message._id}
            message={message}
            date={date}         
          />
        );
      });
  }



    render() {
    const { visible } = this.state  
    if (!Meteor.loggingIn() && !Meteor.userId()){
      return <Redirect to="/" />;
    }
    
    return (
      <div className="container">
      <div ref={el => { this.el = el; }} ></div>
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
                  <div className="MainContent">
                    <div >
                     {this.renderAllMessages()}
                    </div>
                    <div className="visibleForm">
                       <FormPosterReponseArticle
                        id={this.props.match.params.id}
                        authorId={this.props.authorId}
                        titreMessage={this.props.titreMessage}
                        />
                  </div>
                   <Divider />
                   {this.renderAllcomment()}
                  </div>    
                  </div> 
                </div>

              </Sidebar.Pusher>

        </Sidebar.Pushable>
      
      </div>
    );
  }
}

export default SingleSondage =  withTracker(({ match }) => {
  const id = match.params.id;

  const Handle = Meteor.subscribe('reponsesSingleArticle',id );
  const loading = !Handle.ready();
  const allreponses = CommentArticle.find({postId:id}, { sort: {submitted: -1 } });
  const reponseExists = !loading && !!allreponses;

  const Handle1 = Meteor.subscribe('SingleSondage');
  const loading1 = !Handle1.ready();
  const allposts = Sondages.find({}, { sort: {_id: -1 }, limit:1 }); // on cherche le dernier sondage crée
  const postExists = !loading1 && !!allposts;

  return {
  allreponses: reponseExists ? allreponses.fetch() : [],
  authorId:postExists ? allposts.post_author_id : '',
  titreMessage:postExists ? allposts.post_title : '',
  message: postExists ? allposts.fetch() : [],

  };
})(SingleSondage);
