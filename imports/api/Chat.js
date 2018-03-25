import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { check } from 'meteor/check';

export const Chat = new Mongo.Collection('chat');

import { ContactChat } from './ContactChat.js';


if (Meteor.isServer) {

Meteor.methods({

      addMessageChat: function(message,to_id) {
            const user = Meteor.user()
            const search = Meteor.users.findOne({'_id':to_id});

            const to_name = search.username;
            const from_name = user.username;
            
            {to_id != this.userId ? 
             Chat.insert({
                  message:message,
                  from_id:this.userId,
                  from_name: from_name,
                  to_id:to_id,
                  to_name: to_name,
                  post_date: new Date(),
                  read:false,
                })
             : ''}
            const request = ContactChat.findOne({$or : [{from_id: this.userId, to_id:to_id}, {from_id: to_id, to_id:this.userId}]});
             {to_id != this.userId ? 
            ContactChat.update(request._id, {$set: {last_message:message, read:false, authorLastMessage:this.userId} })
             : ''}
      },

      updateContact: function(to_id) {
            const search = Meteor.users.findOne({'_id':to_id.to_id});
            const to_name = search.username;
            
            const searchContact = ContactChat.findOne({$or : [{from_id: this.userId, to_id:to_id.to_id}, {from_id: to_id.to_id, to_id:this.userId}]});
            

            {searchContact.authorLastMessage && searchContact.authorLastMessage != this.userId ?
              ContactChat.update(searchContact._id, {$set: {read:true} }) : ''}

            const searchMessage = Chat.find({$or : [{from_id: to_id.to_id, to_id:this.userId}]});
            ContactChat.update(searchMessage._id, {$set: {read:true} })
            
            console.log(to_name)
            return search
  
      },

      lastContact: function() {
                  /*     
            const searchContact = ContactChat.findOne({$or : [{from_id: this.userId}, {to_id:this.userId}]});
            if(searchContact.from_id){
            const _from_id = searchContact.from_id;
            const _to_id = searchContact.to_id;

           {
            _from_id != this.userId ?
            id = _from_id :
            id = _to_id
           }
            return id
          }
  */
      },

      NotifChat: function(message_id){
        Chat.update(message_id, {$set: {read:true} })
      }

      

  

});



Meteor.publish('AllChat', function () {

  return Chat.find();
});


}

