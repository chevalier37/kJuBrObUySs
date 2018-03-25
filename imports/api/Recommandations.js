import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { check } from 'meteor/check';
import { Conseilleres } from './Conseilleres.js';

export let Recommandations = new Mongo.Collection('recommandations');



if (Meteor.isServer) {

Meteor.methods({

      Recommander: function(id,text,note) {
          let search = Meteor.users.findOne({'_id':id});
          let name = search.username;
          let user = Meteor.user();

          Recommandations.insert({
                  from_id:this.userId,
                  to_id:id,
                  from_name: user.username,
                  to_name: search.username,
                  gender :user.profile.gender,
                  date: new Date(),
                  note: note,
                  commentaire: text,
                  read:false,
                });

          // on met à jours la note dans la table user
          let noteActuelle = search.profile.note;

            noteFuture = (noteActuelle + note )*0.5
            

console.log(noteActuelle)
         
           
           Meteor.users.update(id, {
                    $set: { 'profile.note': noteFuture },
            }) 
        


          // on met à jours la note dans la table conseiller
          let IsConseiller = Conseilleres.findOne({user_id:id});
          if(IsConseiller){
            let noteActuelleConseil = IsConseiller.note;
            {Number.isInteger(noteActuelleConseil) ?
              noteFutureConseil = (noteActuelleConseil + note )*0.5 :
              noteFutureConseil = note 
            }

              {
                IsConseiller
               ?
               Conseilleres.update({user_id:id}, {
                $set: { note: noteFutureConseil },
                }) 
               : ''
              } 
          }

          
          
       },

       RecommandationNotif: function(message_id){
        Recommandations.update(message_id, {$set: {read:true} })
      }


});


Meteor.publish('allRecommandations', function () {

  return Recommandations.find()
});


}

