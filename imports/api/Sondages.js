import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { check } from 'meteor/check';
 
export const Sondages = new Mongo.Collection('sondages');

if (Meteor.isServer) {

Meteor.methods({

      addSondage: function(
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
        
        ) {

          Sondages.update({"semaine1": true}, {
                    $set: { "semaine1": false,},
                    })

          let search = Meteor.users.findOne({'_id':this.userId});
          let gender = search.profile.gender;

          Sondages.insert({
              titre:titre,
              date:new Date(),
              semaine1:true,
               Q1:Q1,
               Q2: Q2,
               Q3:Q3,
               Q4: Q4,
               Q5:Q5,
               Q6:Q6,
               Q7: Q7,
               Q8: Q8,
               Q9: Q9,
               Q10:Q10,
              
               Q1R1:Q1R1,
               Q1R2: Q1R2,
               Q1R3: Q1R3,
               Q1R4: Q1R4,
               Q1R1C:0,
               Q1R2C: 0,
               Q1R3C: 0,
               Q1R4C: 0,

               Q2R1: Q2R1,
               Q2R2: Q2R2,
               Q2R3: Q2R3,
               Q2R4: Q2R4,
               Q2R1C: 0,
               Q2R2C: 0,
               Q2R3C: 0,
               Q2R4C: 0,

               Q3R1: Q3R1,
               Q3R2: Q3R2,
               Q3R3: Q3R3,
               Q3R4: Q3R4,
               Q3R1C: 0,
               Q3R2C: 0,
               Q3R3C: 0,
               Q3R4C: 0,

               Q4R1: Q4R1,
               Q4R2: Q4R2,
               Q4R3: Q4R3,
               Q4R4: Q4R4,
               Q4R1C: 0,
               Q4R2C: 0,
               Q4R3C: 0,
               Q4R4C: 0,

               Q5R1: Q5R1,
               Q5R2: Q5R2,
               Q5R3: Q5R3,
               Q5R4: Q5R4,
               Q5R1C: 0,
               Q5R2C: 0,
               Q5R3C: 0,
               Q5R4C: 0,

               Q6R1: Q6R1,
               Q6R2: Q6R2,
               Q6R3: Q6R3,
               Q6R4: Q6R4,
               Q6R1C: 0,
               Q6R2C: 0,
               Q6R3C: 0,
               Q6R4C: 0,

               Q7R1: Q7R1,
               Q7R2: Q7R2,
               Q7R3: Q7R3,
               Q7R4: Q7R4,
               Q7R1C: 0,
               Q7R2C: 0,
               Q7R3C: 0,
               Q7R4C: 0,

               Q8R1: Q8R1,
               Q8R2: Q8R2,
               Q8R3: Q8R3,
               Q8R4: Q8R4,
               Q8R1C: 0,
               Q8R2C: 0,
               Q8R3C: 0,
               Q8R4C: 0,

               Q9R1: Q9R1,
               Q9R2: Q9R2,
               Q9R3: Q9R3,
               Q9R4: Q9R4,
               Q9R1C: 0,
               Q9R2C: 0,
               Q9R3C: 0,
               Q9R4C: 0,

               Q10R1: Q10R1,
               Q10R2: Q10R2,
               Q10R3: Q10R3,
               Q10R4: Q10R4,
               Q10R1C: 0,
               Q10R2C: 0,
               Q10R3C: 0,
               Q10R4C: 0,

               upvoters:[],
               gender:gender,
            });
         },


        addReponseSondage: function(
          id,
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


          ) {
           const search = Sondages.findOne(id);
           const nbrQ1R1 = search.Q1R1C;
           const nbrQ1R2 = search.Q1R2C;
           const nbrQ1R3 = search.Q1R3C;
           const nbrQ1R4 = search.Q1R4C;

           const nbrQ2R1 = search.Q2R1C;
           const nbrQ2R2 = search.Q2R2C;
           const nbrQ2R3 = search.Q2R3C;
           const nbrQ2R4 = search.Q2R4C;

           const nbrQ3R1 = search.Q3R1C;
           const nbrQ3R2 = search.Q3R2C;
           const nbrQ3R3 = search.Q3R3C;
           const nbrQ3R4 = search.Q3R4C;

           const nbrQ4R1 = search.Q4R1C;
           const nbrQ4R2 = search.Q4R2C;
           const nbrQ4R3 = search.Q4R3C;
           const nbrQ4R4 = search.Q4R4C;

           const nbrQ5R1 = search.Q5R1C;
           const nbrQ5R2 = search.Q5R2C;
           const nbrQ5R3 = search.Q5R3C;
           const nbrQ5R4 = search.Q5R4C;

           const nbrQ6R1 = search.Q6R1C;
           const nbrQ6R2 = search.Q6R2C;
           const nbrQ6R3 = search.Q6R3C;
           const nbrQ6R4 = search.Q6R4C;

           const nbrQ7R1 = search.Q7R1C;
           const nbrQ7R2 = search.Q7R2C;
           const nbrQ7R3 = search.Q7R3C;
           const nbrQ7R4 = search.Q7R4C;

           const nbrQ8R1 = search.Q8R1C;
           const nbrQ8R2 = search.Q8R2C;
           const nbrQ8R3 = search.Q8R3C;
           const nbrQ8R4 = search.Q8R4C;

           const nbrQ9R1 = search.Q9R1C;
           const nbrQ9R2 = search.Q9R2C;
           const nbrQ9R3 = search.Q9R3C;
           const nbrQ9R4 = search.Q9R4C;

           const nbrQ10R1 = search.Q10R1C;
           const nbrQ10R2 = search.Q10R2C;
           const nbrQ10R3 = search.Q10R3C;
           const nbrQ10R4 = search.Q10R4C;

           const updatenbrQ1R1 = nbrQ1R1 + Q1R1;
           const updatenbrQ1R2 = nbrQ1R2 + Q1R2;
           const updatenbrQ1R3 = nbrQ1R3 + Q1R3;
           const updatenbrQ1R4 = nbrQ1R4 + Q1R4;

           const updatenbrQ2R1 = nbrQ2R1 + Q2R1;
           const updatenbrQ2R2 = nbrQ2R2 + Q2R2;
           const updatenbrQ2R3 = nbrQ2R3 + Q2R3;
           const updatenbrQ2R4 = nbrQ2R4 + Q2R4;

           const updatenbrQ3R1 = nbrQ3R1 + Q3R1;
           const updatenbrQ3R2 = nbrQ3R2 + Q3R2;
           const updatenbrQ3R3 = nbrQ3R3 + Q3R3;
           const updatenbrQ3R4 = nbrQ3R4 + Q3R4;

           const updatenbrQ4R1 = nbrQ4R1 + Q4R1;
           const updatenbrQ4R2 = nbrQ4R2 + Q4R2;
           const updatenbrQ4R3 = nbrQ4R3 + Q4R3;
           const updatenbrQ4R4 = nbrQ4R4 + Q4R4;

           const updatenbrQ5R1 = nbrQ5R1 + Q5R1;
           const updatenbrQ5R2 = nbrQ5R2 + Q5R2;
           const updatenbrQ5R3 = nbrQ5R3 + Q5R3;
           const updatenbrQ5R4 = nbrQ5R4 + Q5R4;

           const updatenbrQ6R1 = nbrQ6R1 + Q6R1;
           const updatenbrQ6R2 = nbrQ6R2 + Q6R2;
           const updatenbrQ6R3 = nbrQ6R3 + Q6R3;
           const updatenbrQ6R4 = nbrQ6R4 + Q6R4;

           const updatenbrQ7R1 = nbrQ7R1 + Q7R1;
           const updatenbrQ7R2 = nbrQ7R2 + Q7R2;
           const updatenbrQ7R3 = nbrQ7R3 + Q7R3;
           const updatenbrQ7R4 = nbrQ7R4 + Q7R4;

           const updatenbrQ8R1 = nbrQ8R1 + Q8R1;
           const updatenbrQ8R2 = nbrQ8R2 + Q8R2;
           const updatenbrQ8R3 = nbrQ8R3 + Q8R3;
           const updatenbrQ8R4 = nbrQ8R4 + Q8R4;

           const updatenbrQ9R1 = nbrQ9R1 + Q9R1;
           const updatenbrQ9R2 = nbrQ9R2 + Q9R2;
           const updatenbrQ9R3 = nbrQ9R3 + Q9R3;
           const updatenbrQ9R4 = nbrQ9R4 + Q9R4;

           const updatenbrQ10R1 = nbrQ10R1 + Q10R1;
           const updatenbrQ10R2 = nbrQ10R2 + Q10R2;
           const updatenbrQ10R3 = nbrQ10R3 + Q10R3;
           const updatenbrQ10R4 = nbrQ10R4 + Q10R4;



          Sondages.update(id, {
          $set: { 

           Q1R1C : updatenbrQ1R1 ,
           Q1R2C : updatenbrQ1R2 ,
           Q1R3C : updatenbrQ1R3 ,
           Q1R4C : updatenbrQ1R4 ,

           Q2R1C : updatenbrQ2R1 ,
           Q2R2C : updatenbrQ2R2 ,
           Q2R3C : updatenbrQ2R3 ,
           Q2R4C : updatenbrQ2R4 ,

           Q3R1C : updatenbrQ3R1 ,
           Q3R2C: updatenbrQ3R2 ,
           Q3R3C : updatenbrQ3R3 ,
           Q3R4C : updatenbrQ3R4 ,

           Q4R1C : updatenbrQ4R1 ,
           Q4R2C : updatenbrQ4R2 ,
           Q4R3C : updatenbrQ4R3 ,
           Q4R4C : updatenbrQ4R4 ,

           Q5R1C : updatenbrQ5R1 ,
           Q5R2C : updatenbrQ5R2 ,
           Q5R3C : updatenbrQ5R3 ,
           Q5R4C : updatenbrQ5R4 ,

           Q6R1C : updatenbrQ6R1 ,
           Q6R2C : updatenbrQ6R2 ,
           Q6R3C : updatenbrQ6R3 ,
           Q6R4C : updatenbrQ6R4 ,

           Q7R1C : updatenbrQ7R1 ,
           Q7R2C : updatenbrQ7R2 ,
           Q7R3C : updatenbrQ7R3 ,
           Q7R4C : updatenbrQ7R4 ,

           Q8R1C : updatenbrQ8R1 ,
           Q8R2C : updatenbrQ8R2 ,
           Q8R3C : updatenbrQ8R3 ,
           Q8R4C : updatenbrQ8R4 ,

           Q9R1C : updatenbrQ9R1 ,
           Q9R2C : updatenbrQ9R2 ,
           Q9R3C : updatenbrQ9R3 ,
           Q9R4C : updatenbrQ9R4 ,

           Q10R1C : updatenbrQ10R1 ,
           Q10R2C : updatenbrQ10R2 ,
           Q10R3C : updatenbrQ10R3 ,
           Q10R4C : updatenbrQ10R4 ,
           },
          });

          const searchVoters = Sondages.find(id);
          console.log(searchVoters)
          if (!search)
            throw new Meteor.Error('invalid', 'Post not found');
          if (_.include(searchVoters.upvoters, this.userId))
            throw new Meteor.Error('invalid', 'Already upvoted this post');
          Sondages.update(id, {
            $addToSet: {upvoters: this.userId},
          });         
      },

      ArticleSemaine: function() { 
        const search = Sondages.findOne({semaine1:true});
        const id = search._id

        return id 
        },

        ArticleTitre: function() { 
        const search = Sondages.findOne({semaine1:true});
        const titre = search.titre

        return titre
        }

        

      /*supprimerMessage: function(idMessage) {
         check(idMessage, String);
          Posts.remove({_id:idMessage});
       },*/


});





Meteor.publish('AllSondages', function ( ) {
  return Sondages.find();
});


Meteor.publish('SondageSemaine', function () {

  return Sondages.find();
});

/*
Meteor.publish('MyMessages', function (myId) {
new SimpleSchema({
      myId: {type: String},
    }).validate({myId});

  return Posts.find({'post_author_id':myId});
});

Meteor.publish('Message', function (id) {
new SimpleSchema({
      id: {type: String},
    }).validate({id});

  return Posts.find({'_id':id});
});*/


}