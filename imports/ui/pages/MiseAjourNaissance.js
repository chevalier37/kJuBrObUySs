import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';
import { Link } from 'react-router-dom';
import { Button, Checkbox, Form,  Message, Segment, Header} from 'semantic-ui-react'
import { check } from 'meteor/check';
import { Route, Redirect } from 'react-router';
 
//Component
import Header1 from '../component/Header.js';
import Footer from '../component/Footer.js';

const Jours = [
  { key: '1', text: '01', value: '1' },
  { key: '2', text: '02', value: '2' },
  { key: '3', text: '03', value: '3' },
  { key: '4', text: '04', value: '4' },
  { key: '5', text: '05', value: '5' },
  { key: '6', text: '06', value: '6' },
  { key: '7', text: '07', value: '7' },
  { key: '8', text: '08', value: '8' },
  { key: '9', text: '09', value: '9' },
  { key: '10', text: '10', value: '10' },
  { key: '11', text: '11', value: '11' },
  { key: '12', text: '12', value: '12' },
  { key: '13', text: '13', value: '13' },
  { key: '14', text: '14', value: '14' },
  { key: '15', text: '15', value: '15' },
  { key: '16', text: '16', value: '16' },
  { key: '17', text: '17', value: '17' },
  { key: '18', text: '18', value: '18' },
  { key: '19', text: '19', value: '19' },
  { key: '20', text: '20', value: '20' },
  { key: '21', text: '21', value: '21' },
  { key: '22', text: '22', value: '22' },
  { key: '23', text: '23', value: '23' },
  { key: '24', text: '24', value: '24' },
  { key: '25', text: '25', value: '25' },
  { key: '26', text: '26', value: '26' },
  { key: '27', text: '27', value: '27' },
  { key: '28', text: '28', value: '28' },
  { key: '29', text: '29', value: '29' },
  { key: '30', text: '30', value: '30' },
  { key: '31', text: '31', value: '31' },
]

const Année = [
  { key: '2008', text: '2008', value: '2008' },
  { key: '2007', text: '2007', value: '2007' },
  { key: '2006', text: '2006', value: '2006' },
  { key: '2005', text: '2005', value: '2005' },
  { key: '2004', text: '2004', value: '2004' },
  { key: '2003', text: '2003', value: '2003' },
  { key: '2002', text: '2002', value: '2002' },
  { key: '2001', text: '2001', value: '2001' },
  { key: '2000', text: '2000', value: '2000' },
  { key: '1999', text: '1999', value: '1999' },
  { key: '1998', text: '1998', value: '1998' },
  { key: '1997', text: '1997', value: '1997' },
  { key: '1996', text: '1996', value: '1996' },
  { key: '1995', text: '1995', value: '1995' },
  { key: '1994', text: '1994', value: '1994' },
  { key: '1993', text: '1993', value: '1993' },
  { key: '1992', text: '1992', value: '1992' },
  { key: '1991', text: '1991', value: '1991' },
  { key: '1990', text: '1990', value: '1990' },
  { key: '1989', text: '1989', value: '1989' },
  { key: '1988', text: '1988', value: '1988' },
  { key: '1987', text: '1987', value: '1987' },
  { key: '1986', text: '1986', value: '1986' },
  { key: '1985', text: '1985', value: '1985' },
  { key: '1984', text: '1984', value: '1984' },
  { key: '1983', text: '1983', value: '1983' },
  { key: '1982', text: '1982', value: '1982' },
  { key: '1981', text: '1981', value: '1981' },
  { key: '1980', text: '1980', value: '1980' },
  { key: '1979', text: '1979', value: '1979' },
  { key: '1978', text: '1978', value: '1978' },
  { key: '1977', text: '1977', value: '1977' },
  { key: '1976', text: '1976', value: '1976' },
  { key: '1975', text: '1975', value: '1975' },
  { key: '1974', text: '1974', value: '1974' },
  { key: '1973', text: '1973', value: '1973' },
  { key: '1972', text: '1972', value: '1972' },
  { key: '1971', text: '1971', value: '1971' },
  { key: '1970', text: '1970', value: '1970' },
  { key: '1969', text: '1969', value: '1969' },
  { key: '1968', text: '1968', value: '1968' },
  { key: '1967', text: '1967', value: '1967' },
  { key: '1966', text: '1966', value: '1966' },
  { key: '1965', text: '1965', value: '1965' },
  { key: '1964', text: '1964', value: '1964' },
  { key: '1963', text: '1963', value: '1963' },
  { key: '1962', text: '1962', value: '1962' },
  { key: '1961', text: '1961', value: '1961' },
  { key: '1960', text: '1960', value: '1960' },
  { key: '1959', text: '1959', value: '1959' },
  { key: '1958', text: '1958', value: '1958' },
  { key: '1957', text: '1957', value: '1957' },
  { key: '1956', text: '1956', value: '1956' },
  { key: '1955', text: '1955', value: '1955' },
  { key: '1954', text: '1954', value: '1954' },
  { key: '1953', text: '1953', value: '1953' },
  { key: '1952', text: '1952', value: '1952' },
  { key: '1951', text: '1951', value: '1951' },
  { key: '1950', text: '1950', value: '1950' },
  { key: '1949', text: '1949', value: '1949' },
  { key: '1948', text: '1948', value: '1948' },
  { key: '1947', text: '1947', value: '1947' },
  { key: '1946', text: '1946', value: '1946' },
  { key: '1945', text: '1945', value: '1945' },
  { key: '1944', text: '1944', value: '1944' },
  { key: '1943', text: '1943', value: '1943' },
  { key: '1942', text: '1942', value: '1942' },
  { key: '1941', text: '1941', value: '1941' },
  { key: '1940', text: '1940', value: '1940' },
  { key: '1939', text: '1939', value: '1939' },
  { key: '1938', text: '1938', value: '1938' },
  { key: '1937', text: '1937', value: '1937' },
  { key: '1936', text: '1936', value: '1936' },
  { key: '1935', text: '1935', value: '1935' },
  { key: '1934', text: '1934', value: '1934' },
]

const Mois = [
  { key: '1', text: 'Janvier', value: 'january' },
  { key: '2', text: 'Février', value: 'february' },
  { key: '3', text: 'Mars', value: 'march' },
  { key: '4', text: 'Avril', value: 'april' },
  { key: '5', text: 'Mai', value: 'may' },
  { key: '6', text: 'Juin', value: 'june' },
  { key: '7', text: 'Juillet', value: 'july' },
  { key: '8', text: 'Août', value: 'august' },
  { key: '9', text: 'Septembre', value: 'september' },
  { key: '10', text: 'Octobre', value: 'october' },
  { key: '11', text: 'Novembre', value: 'november' },
  { key: '12', text: 'Décembre', value: 'december' },
  
]

class MiseAjourNaissance extends Component {

    constructor(props) {
    super(props);
    this.state = {
      errorLogin:false,
      connection:false,
      jours: '',
      mois:'',
      année: '',
      naissance:false,
      age:false,     
    }; 

    this.jours = this.jours.bind(this);
    this.mois = this.mois.bind(this);
    this.année = this.année.bind(this);
  }

  Submit(event) {
      event.preventDefault();
      
      let jours= parseInt(this.state.jours);
      let mois = this.state.mois;
      let année = parseInt(this.state.année) 
      const naissance = new Date(''+mois +jours+','+année+'');

      //On verifie que la date de naissance n'est pas vide
      {naissance =='Invalid Date' ?
       this.setState({naissance: true,}) :
       this.setState({naissance: false,
      })}

      // On vérifie l'age > 13 ans
       let now = new Date();
       //on calcul l'age en millisecondes
       let diff = now - naissance;
       //on calcul l'age en années
       let age = diff / 31536000000;

      {age <13 ?
       this.setState({age: true,}) :
       this.setState({age: false,
      })} 

      check(naissance, Date);
       
      {
          this.state.naissance === false
          &&this.state.age === false
                    
          ?

          Meteor.call('MiseAjourNaissance',
          naissance,
          (err) => {
              if(err){
               } else {
                {
                this.setState({connection: true,})
                }     
              }
            })

           : ""
      }
    } 
      
    jours(value) {
    this.setState({
      jours: value,
    });
    }

    mois(value, key) {
    this.setState({
      mois: value,
    });
    }

    année(value) {
    this.setState({
      année: value,
    });
    }   

  render() {

    const connection = this.state.connection;
  
    if (connection) {
      return <Redirect to="/home" />;
    }

    return (
      <div className="container">
        <header>
          <div className="containerSupHeader">
            <div className="containerHeader">
              <Header1 />
            </div>
          </div>
        </header>

        <div className="containerSupIMG">
          <div className="containerIMG">
              <div className="ResetPassword">
                <Segment>
                <div className="TitreNaissance">
                  Mettez à jour votre date de naissance
                </div>
                <div className="TextNaissance">
                Vous devez mettre à jour votre date de naissance afin de continuer sur le site <p></p>
                </div>
                    <Form error onSubmit={this.Submit.bind(this)}>

                        
                          <Form.Group widths='equal' error>
                            <Form.Select
                             fluid
                             options={Jours}
                             placeholder='Jours'
                             onChange={(e, { value }) => this.jours(value)}
                             />

                            <Form.Select
                             fluid
                             options={Mois}
                             placeholder='Mois'
                             onChange={(e, { value }) => this.mois(value)}
                              />

                            <Form.Select
                             fluid
                             options={Année}
                             placeholder='Année'
                             onChange={(e, { value }) => this.année(value)}
                              />
                          </Form.Group>
                          <Message
                            error={this.state.naissance}
                            hidden={!this.state.naissance}
                            header='Erreur date de naissance'
                            content="La date de naissance est obligatoire"
                          />
                          <Message
                            error={this.state.age}
                            hidden={!this.state.age}
                            header="Tu ne peux pas t'inscire"
                            content="Tu dois avoir +13 ans pour t'inscire sur le site"
                          />
                        <Button type='submit' color='green'>Valider</Button>

                    </Form>
                  </Segment>
                </div>
            </div> 
        </div>
                
        <div className="containerFooter">    
            <Footer />
        </div>
                  
      </div>
    );
  }
}

export default withTracker(() => {
  return { 
  };
})(MiseAjourNaissance);