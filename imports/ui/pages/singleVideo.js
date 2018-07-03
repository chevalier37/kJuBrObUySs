import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';
import { Link } from 'react-router-dom';
import { Sidebar, Segment, Button, Menu, Image, Icon, Header, Checkbox, Form,  Message, Label, Divider } from 'semantic-ui-react'
import Img from 'react-image'
import { Route, Redirect } from 'react-router';
import { Videos } from '../../api/Videos.js';
import { CommentVideos } from '../../api/CommentVideos.js';
//Component
import HeaderPage from '../component/HeaderPage.js';
import ContentMenuRight from '../component/ContentMenuRight.js';
import ButtonPusher from '../component/ButtonPusher.js';
import ContentMenuLeft from '../component/ContentMenuLeft.js';
import FormPosterReponseVideo from '../component/FormPosterReponseVideo.js';
import SingleVideoPost from '../component/SingleVideoPost.js';
import ListeCommentVideo from '../component/ListeCommentVideo.js';


class singleVideo extends Component {

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
         
        return (
          <SingleVideoPost
            key={message._id}
            message={message}
            id={this.props.match.params.id}
     
          />
        );
      });
  }

  renderAllcomment() {
      let Allreponses = this.props.allreponses;

      return Allreponses.map((message) => {
       let date = Date.parse(message.submitted);
         
        return (
          <ListeCommentVideo
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
                       <FormPosterReponseVideo
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

export default singleVideo =  withTracker(({ match }) => {
  const id = match.params.id;

  const Handle = Meteor.subscribe('reponsesSingleVideo',id );
  const loading = !Handle.ready();
  const allreponses = CommentVideos.find({postId:id}, { sort: {submitted: -1 } });
  const reponseExists = !loading && !!allreponses;

  const Handle1 = Meteor.subscribe('SingleVideo', id);
  const loading1 = !Handle1.ready();
  const allposts = Videos.find({_id:id});
  const postExists = !loading1 && !!allposts;

  return {
  allreponses: reponseExists ? allreponses.fetch() : [],
  authorId:postExists ? allposts.post_author_id : '',
  titreMessage:postExists ? allposts.post_title : '',
  message: postExists ? allposts.fetch() : [],

  };
})(singleVideo);
