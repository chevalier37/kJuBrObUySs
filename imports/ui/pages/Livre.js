import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';
import { Link } from 'react-router-dom';
import { Sidebar, Segment, Button, Header, Divider } from 'semantic-ui-react'
import { Route, Redirect } from 'react-router';
import Img from 'react-image'
 
//Component
import HeaderPage from '../component/HeaderPage.js';
import ContentMenuRight from '../component/ContentMenuRight.js';
import ButtonPusher from '../component/ButtonPusher.js';
import ContentMenuLeft from '../component/ContentMenuLeft.js';

import FaCartArrowDown from 'react-icons/lib/fa/cart-arrow-down';

class Livre extends Component {

    state = { visible: false }

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
                      Le Secret de Cendrillon
                      </Header>
                      <Divider />

                      <Img className="imgLivre" src="/livre.png"/>

                      <div className="PubLivre">
                      Disponible dans toute les librairies et sur :<br />
                      <a href="https://livre.fnac.com/a5195734/Jean-Benoit-Roussat-Le-secret-de-Cendrillon"><Img src="/Fnac.gif" className="fnac"/></a>
                      <a href="https://www.amazon.fr/Secret-Cendrillon-J-B-Roussat/dp/B00A9QO52O"><Img src="/amazon.png" className="amazon"/></a>
                      <br />
                      <div className="buttonCommande">
                        <Button color="blue">
                        <Link to={'/CommandeLivre/'}>  
                           <FaCartArrowDown />
                           <p className="Commande">Commande express</p>
                        </Link>
                         </Button>
                       </div>
                      </div>
                      <div  className="textCendrillon">
                      <br /><br />
                      <div className="center titre">
                        À tous ceux qui croient en leurs rêves.
                      </div><br /><br />

                      <div className="right">
                        « Tu seras aimée le jour où tu pourras montrer ta faiblesse, sans que l’autre s’en serve pour affirmer sa force. »<br />
                        Cesare PAVESE.
                      </div><br /><br /><br /><br /><br />

                      <div>
                          <p className="center">  Avant-propos </p>
                        <p className="right">« L’avenir appartient à ceux qui s’y préparent. »<br />
                        Ralf Waldo EMERSON.</p><br /><br /><br /><br />
                        
                        Il faut admettre une chose : les gens heureux sur terre ne sont vraiment pas nombreux. En effet, peu de personnes ont réalisé tous leurs rêves d’enfant, peu de gens vivent la vie dont ils ont toujours rêvé. Peu de femmes vivent l’histoire d’amour qu’elles s’étaient imaginées lorsqu’elles étaient petites. Pour beaucoup, cela n’ira pas plus loin qu’un rêve. Il y a la vie que l’on rêve d’avoir, et la vie que l’on a. Si la vie que vous menez est celle dont vous avez toujours rêvé, alors vous pouvez être fière d’avoir réussi. Vous faites partie des rares personnes sur terre à avoir atteint leur objectif. Ne vous fiez surtout pas aux photos que vous pouvez voir sur Facebook ou à ce que les gens racontent sur leur blogue. S’il est vrai que l’on montre souvent ce que l’on n’a pas, il y a aussi cette évidence : les gens heureux ne font pas de bruit. Ils sont heureux pour eux-mêmes et non pour impressionner les autres. Ne vous occupez donc pas de l’histoire d’amour de votre voisin, mais plutôt de la vôtre. Le bonheur des autres n’est pas le vôtre. Réalisez vos rêves pour vous-même et non pour faire plaisir à vos proches ou à votre entourage. On n’a qu’une seule chance de réussir sa vie. Si vous ne faites pas tout pour réaliser vos rêves, vous connaîtrez le pire des sentiments que l’on puisse avoir : des regrets. La vie est si courte et les rêves sont si grands, commencez maintenant à agir.<br /><br /><br />
                        
                        S’il est une histoire qui fait rêver, c’est bien celle de Cendrillon. Qui n’a jamais rêvé de trouver son prince après avoir mené une vie difficile ? Bien sûr, nous avons tous en tête la version de Walt Disney, où un coup de baguette magique suffit à transformer Cendrillon en princesse. Mais vous n’avez pas besoin de baguette magique pour changer votre vie. Il suffit de se poser les bonnes questions et d’être intimement persuadée que, si cela a marché pour elle, cela marchera pour vous.<br /><br /><br />
                        
                        Il y a des filles qui, ne cherchant que l’amour, n’obtiennent que de l’indifférence. Ce livre va vous aider à découvrir la personne que vous avez besoin de devenir pour trouver l’amour et le garder. N’oubliez pas que ce que vous voulez vraiment, ce n’est pas tant trouver votre prince qu’être aimée comme une princesse. Si vous ne supportez pas l’idée d’abandonner vos rêves... alors ce livre est fait pour vous !<br /><br /><br />

                        <p className="right">« N’ayez pas peur que votre vie s’arrête, craignez plutôt qu’elle ne commence jamais. » <br /> Grace HANSEN.</p><br /><br /><br /><br />

                        <div className="center titre">Introduction <br /><br />Cendrillon n’est pas qu’un conte de fées !</div><br /><br />
                        
                        Élise se lève comme tous les matins pour aller travailler, mais cette fois-ci le cœur n’y est pas vraiment. Elle a un sentiment de vide, elle ne se sent pas heureuse. Pourtant, elle a un travail qui lui plaît, un bel appartement, et elle n’a aucun souci financier. Elle est triste, car elle est seule dans sa vie. À l’école, elle était plutôt timide : elle n’osait pas aller vers les autres, et elle était terrorisée à l’idée de prendre la parole en classe. Aujourd’hui, elle n’a pas beaucoup d’amis, et passe la plupart de son temps seule, à réfléchir sur elle-même. Quantité de pensées lui traversent l’esprit, elle ne peut s’empêcher de réfléchir : elle n’est pas heureuse, car la solitude lui pèse. Élise a l’impression de ne pas exister, du fait que nul ne s’intéresse jamais à elle. Les rares personnes à lui adresser la parole sont ses collègues de travail, uniquement pour lui demander quelque chose ou pour profiter de sa gentillesse. Son patron la rabaisse continuellement, et jamais on ne lui fait de compliments.<br /><br /><br />

                        Souvent, il lui arrive de s’isoler chez elle, parfois en pleurant, pensant à son avenir. Elle doute de pouvoir être vraiment heureuse un jour, car elle a peur de ne pas y arriver. Elle craint de ne pas avoir de vrais amis, et surtout de ne jamais connaître l’amour.
                        En effet, côté cœur, c’est plutôt un champ de ruines. Elle a bien connu quelques histoires, qui toutefois se sont toujours mal terminées. Elle est persuadée que les garçons se sont moqués d’elle. À chaque fois, c’est la même chose : ils se montrent extrêmement gentils, au début ; mais, très vite, ils insistent lourdement pour sortir avec elle. Elle a donc vraiment lesentiment qu’ils ne s’intéressent à elle que pour son physique, et jamais pour sa personnalité.<br /><br /><br />

                        L’amour l’a donc fait beaucoup souffrir, car elle finit toujours par en avoir le cœur brisé.
                        Comment peut-on lui faire ça ? Elle qui est tellement sincère en amour et qui s’engage pleinement dans une relation. Elle qui n’a jamais fait le moindre mal à personne. Elle qui a tellement d’affection à donner, et qui ne demande qu’à être aimée. Elle a cette sensation que la vie est cruelle, et que cela n’arrive qu’à elle.<br /><br /><br />

                        Quand elle était petite, Élise rêvait d’être une princesse. Elle rêvait d’avoir un prince rien que pour elle : quelqu’un qui prenne soin d’elle, qui la réconforte, la rassure, la soutienne, et ce quels que soient les choix qu’elle ferait dans sa vie — un homme qui l’aime pour ce qu’elle est. Elle était persuadée que, lorsqu’elle serait grande, comme Cendrillon elle trouverait son prince. Elle ne se posait même pas la question de savoir si cela était possible. C’était pour elle une évidence : l’amour existait, et elle finirait par le trouver.
                        Malheureusement, en grandissant, elle s’est aperçue à quel point il allait être difficile de réaliser son rêve. Car l’amour l’a beaucoup déçue, et les garçons sont loin d’être tous des princes charmants. Les certitudes d’hier ne sont plus celles d’aujourd’hui. Elle se met à douter et pense renoncer à son rêve.<br /><br /><br />

                        Mais, au fond de son cœur, au plus profond d’elle-même, elle continue d’y croire. En silence, sans rien dire, elle continue de rêver secrètement de son prince. Bien sûr, elle n’en parle jamais, car elle tient à protéger son rêve. Même si la vie lui a souvent apporté des désillusions, elle continue de croire en son prince et y croira certainement toute sa vie.
                        Oui, l’amour existe. Oui, il est possible d’être aimée. Même au XXIe siècle, vous pouvez vivre l’histoire d’amour dont vous avez toujours rêvé. Il est temps de vous prendre en main et de commencer sérieusement de travailler à votre propre bonheur. En faisant preuve de patience et de persévérance, vous finirez certainement, vous aussi, par rejoindre le rang très prestigieux des « princesses », celles qui ont trouvé l’amour et qui ont réalisé leur rêve. Si comme Élise vous vous sentez perdue, alors ce livre est fait pour vous.<br /><br /><br />

                        « ... Ils se marièrent, vécurent heureux et eurent beaucoup d’enfants » : ce pourrait être votre propre histoire, si vous décidez que cela le devienne ! Comment Cendrillon a-t-elle fait pour trouver son prince ? Si vous pensez qu’elle a eu « de la chance » ou que c’est seulement « par hasard » qu’elle l’a rencontré, alors il n’est pas étonnant que vous n’ayez pas encore trouvé l’amour ! Qu’est-ce qui chez Cendrillon a fait la différence ? Pourquoi le prince la choisit-il, elle et non une autre ? Parce qu’elle avait une plus belle robe que les autres ? Pensez-vous vraiment qu’un prince au cœur pur accorde de l’importance à ce genre de détail ? C’est parce qu’elle était la plus belle, me direz-vous peut-être. Le soir du bal, toutes les princesses étaient en fait aussi belles les unes que les autres. Ce n’est donc pas sa beauté ou son physique qui ont fait la différence. Parce qu’elle était plus intelligente ? Comment le savoir quand on voit quelqu’un pour la première fois ? Mais qu’avait-elle de plus, alors ?
                        Dans les yeux de Cendrillon brillait cette lueur indiquant qu’elle avait en elle quelque chose de spécial. Ce petit quelque chose se trouve aussi en vous. Ce livre vous montrera comment faire briller votre flamme intérieure, afin d’illuminer votre cœur pour que l’amour s’y installe pour toujours.<br /><br /><br />

                        Cendrillon était une fille comme les autres, avec ses joies et ses peines, ses qualités et ses défauts ; et pourtant elle a réussi à changer sa vie. Si elle l’a fait, vous le pouvez aussi. Ce livre vous donnera des indications à suivre pour vivre l’histoire d’amour donc vous avez toujours rêvé. N’oubliez pas que la vie est précieuse et que l’on n’a qu’une seule occasion de la réussir. Lisez ce livre jusqu’au bout, et décidez une bonne fois pour toutes de prendre votre destinée en main. Laissez les autres mener une vie médiocre, mais pas vous-même. La vie est courte, et les opportunités sont rares. Donc, agissez maintenant.<br /><br /><br />

                        <p className="center">On ne peut pas accélérer le succès, mais on peut le rendre inévitable.</p>
                        <br /><br /><br />

                        <div className="center titre">    1 <br />
                        Prenez votre vie en main</div><br />

                        <p className="right">« Même Dieu n’aime pas rester seul, c’est pour cela qu’il a créé les anges. »
                        </p><br /><br /><br /><br />

                        Personne n’aime se sentir seul. Vous n’avez pas encore trouvé quelqu’un avec qui partager votre vie, ou bien vous êtes en couple, mais votre « amoureux » ne s’intéresse pas vraiment à vous ou pire il ne vous écoute pas quand vous parlez ! En un mot, vous vous sentez seule et vous avez envie que cette situation change. Il va donc falloir vous changer vous-même. Vous perdez votre temps et vous gaspillez votre énergie en voulant changer les autres. Vous ne pouvez pas changer une personne, ce sont les gens eux-mêmes qui décident de changer. On inspire les gens pour qu’ils changent, ensuite ce sont eux qui décident d’agir sur eux-mêmes. Quand on donne un conseil à quelqu’un qui est en difficulté, généralement sa réponse sera celle-ci : « Je sais ! » Pourquoi cette personne rencontre-t-elle des difficultés alors qu’elle sait comment faire pour s’en sortir? Par manque de motivation. Les gens n’ont généralement pas besoin de conseils, ils ont juste besoin d’être motivés. Ou plutôt d’être inspirés.<br /><br /><br />

                        <p className="center">Le plus grand malheur de l’humanité n’est pas le manque de connaissances, mais le manque de motivation.</p><br /><br /><br />
                        
                        C’est d’ailleurs pour cela qu’il est plus facile de suivre un régime à deux que toute seule ! Mais comment inspirer une personne ? Tout simplement en l’aidant à se poser les bonnes questions.<br /><br /><br />

                        Il faut en effet que ce soit elle qui se pose ces questions, car elle aura alors envie de tout faire pour trouver une réponse. Ne lui posez pas de questions, faites des remarques ou des suggestions pour que cette personne en vienne personnellement, enfin, à se poser elle-même les bonnes questions. Il est inutile de traquer les défauts des autres ou de faire des reproches à votre entourage. N’oubliez pas qu’une princesse est exigeante envers elle-même, mais non envers les autres. Il est facile de dire aux autres ce qu’il faut faire ou ne pas faire, mais beaucoup plus difficile de s’imposer à soi-même une discipline personnelle.<br /><br /><br />
                        
                        Si quelque chose dans votre vie ne va pas comme vous le souhaitez, il y a fort à parier que vous y avez votre part de responsabilité, voire que vous êtes l’unique responsable de ce qui vous arrive. Retenez bien que seulement dix pour cent de ce qui nous arrive résultent d’un événement incontrôlable, auquel nous ne pouvons rien et que nous ne faisons que su-bir : par exemple, cela peut être la perte d’un amour, le décès d’un proche ou une maladie. Par contre, quatre-vingt-dix pour cent de ce qui nous arrive découlent de la façon dont nous avons réagi aux dix autres pour cent. Autrement dit, vous êtes responsable de votre vie à hauteur de quatre-vingt-dix pour cent ce qui est une bonne nouvelle pour toutes celles qui pensaient que l’on subissait sa vie à quatre-vingt- dix pour cent !<br /><br /><br />

                        En voici un exemple tiré du quotidien. Un matin, alors que vous êtes dans la cuisine en train de préparer le petit déjeuner pour votre fille, celle-ci renverse maladroitement son bol de chocolat sur votre chemisier préféré. Prise de colère, vous la grondez et montez vite vous changer. Étant donné que vous êtes énervée, vous agissez d’une manière précipitée mais désordonnée, et vous mettez du temps à trouver un autre chemisier. Comme votre fille est en pleurs, elle n’a pas fini de prendre son petit déjeuner et elle risque donc d’être en retard à l’école. Vous lui ordonnez sèchement de se dépêcher de terminer, puis vous l’attrapez par la main pour l’emmener à l’école. Toujours en colère contre elle, vous avez oublié de mettre son goûter dans son sac. Vous conduisez vite, dans l’espoir de rattraper votre retard, courant ainsi le risque de provoquer un grave accident de la route, parce que vous êtes toujours sous l’emprise de la colère.<br /><br /><br />

                        L’événement incontrôlable, sur lequel vous n’aviez aucune prise, est le fait que votre fille ait renversé son chocolat sur votre chemisier. Mais tout ce qui s’est passé par la suite résulte de la façon dont vous avez réagi. C’est donc bien vous qui êtes à l’origine de cette matinée gâchée. À présent, imaginez que vous ayez eu une autre réaction. Après que votre fille a malencontreusement taché votre chemisier, vous lui dites sans vous énerver : « Ce n’est pas grave, ma puce ; la prochaine fois, apprends à maîtriser tes gestes. » Vous remontez calmement vous changer pendant que votre fille finit tranquillement son petit déjeuner. Vous l’emmenez à l’école, et, comme vous êtes en avance, elle aura le temps de jouer un peu avec ses copines avant d’aller en classe. Dans ce cas de figure, comme dans le précédent, c’est vous qui êtes à l’origine de cette superbe matinée. Votre vie n’est donc pas déterminée par ce qui vous arrive, mais par la façon dont vous y réagissez. Pour réussir à réagir de manière toujours positive, il faut avoir accompli un travail conséquent sur soi-même. Toutes celles qui finissent par trouver l’amour et être aimées comme une princesse sont passées par cette étape. On a toujours tendance à s’idéaliser ou à se noircir, à se vouloir ange ou démon alors que l’on n’est ni l’un ni l’autre, mais un peu des deux. C’est votre façon de réagir qui va déterminer qui vous êtes vraiment.<br /><br /><br />

                        Votre point de vue sur le monde est un facteur déterminant pour votre réussite. Autrement dit, c’est votre philosophie qui va conditionner votre vie.<br /><br /><br />

                        Prenons l’exemple de deux sœurs qui ont eu une enfance très difficile. Elles ont subi des violences de la part de leur père lorsqu’elles étaient petites, car celui-ci était alcoolique. Leurs conditions de vie étaient très précaires. Les années ont passé. L’une des deux sœurs devient la rédactrice en chef d’un grand magazine de mode, elle est mariée, a trois enfants ; l’autre a été en détention pour trafic de drogue, et elle est également devenue alcoolique. Quand on leur demande comment elles en sont arrivées là, les deux sœurs commencent par donner la même réponse : « Avec un père comme ça, il était difficile de faire autrement ! » Bien que les deux sœurs aient subi la même enfance, elles ont pourtant connu des destins très éloignés. La seule chose qui ait fait la différence, c’est leur philosophie. Pour l’une, c’était perdu d’avance : « Mon père est alcoolique, je vais finir alcoolique. » L’autre a vu les choses à l’opposé : « Il est hors de question que je finisse comme mon père. » C’est vraiment ce qui se passe dans votre tête qui conditionne votre réussite. Retenez bien que tout ce qui vous arrive est très rarement de la faute des autres. Pour faire simple : vous êtes toujours responsable de votre situation. Que l’on soit bien clair : s’il vous arrive des malheurs (une enfance difficile, une séparation, un décès...), prenez vraiment conscience que c’est la façon dont vous allez y réagir qui va déterminer le reste de votre vie.<br /><br /><br />

                        Votre petit ami vous a trompée : vous pouvez décider de rester complètement anéantie pour le reste de vos jours, ou bien vous pouvez vous dire que c’est là une très bonne occasion de trouver quelqu’un de mieux la prochaine fois (et il y a toujours mieux !). Tout le monde rencontre des problèmes, et celles qui ont réussi dans la vie en ont certainement connu beaucoup plus que les autres. Pourtant, elles sont aussi allées beaucoup plus loin que ces dernières, car elles ont décidé de toujours voir le verre à moitié plein, plutôt qu’à moitié vide. Alors, cessez de vous plaindre : les autres vous ont peut-être rendue malheureuse, mais c’est vous qui décidez de rester dans cet état ou bien de prendre votre vie en main.
                        N’avez-vous jamais remarqué que c’est toujours auprès de la mauvaise personne que les gens passent leur temps à se plaindre ? Ne faites pas comme cette femme qui se plaint de son mari auprès de son patron, et se plaint de son patron auprès de son mari ! Cela ne vous aidera jamais à avancer. Si par exemple vous rencontrez des difficultés avec votre copain, c’est auprès de lui qu’il faut résoudre ce problème ; mais ce n’est pas en allant vous plaindre auprès de votre meilleure amie que votre situation va s’améliorer. Il est impressionnant de voir le nombre de femmes tristes dans leur vie de couple : leur copain ne s’occupe pas d’elles, ou même pire les bat ; elles se plaignent sans cesse de leur sort, mais ce qui est incroyable, c’est qu’elles restent avec lui! Le changement leur fait tellement peur qu’elles préfèrent ne rien modifier. À croire qu’elles préfèrent la violence à la solitude. Beaucoup restent en couple par loyauté, par obligation ou bien par peur de devoir recommencer à zéro une nouvelle relation. Qui décide de rester en couple ? Ce sont bien elles, et personne d’autre. Malheureusement, c’est une situation classique que l’on rencontre souvent.
                        <br /><br /><br />
                        Quand vous êtes en couple avec un garçon qui ne vous rend pas heureuse, vous pensez : « Que vais-je devenir si je le quitte ? » De ce point de vue là, effectivement, on peut comprendre que vous préfériez rester avec lui ; car, si vous le quittez, vous allez vous retrouver seule sans être sûre de pouvoir un jour retrouver quelqu’un. Vous êtes donc face à l’inconnu. Pourtant, ce n’est pas en vous posant ce genre de question que vous allez finir par changer votre vie et être heureuse. Demandez-vous plutôt ceci : « Que vais-je devenir si je reste avec lui ? » La réponse est alors bien différente : vous demeurerez malheureuse toute votre vie. Si vous adoptez ce point de vue, il vous sera plus facile de vous séparer de votre copain, car vous aurez pris conscience que la situation ne peut plus durer. Prenez une décision pour vous-même. J’ai rencontré une fille qui vivait avec son petit ami, mais elle était malheureuse avec lui, car il ne lui prêtait pas beaucoup d’attention. Je lui ai dit que le mieux pour elle serait de le quitter, si vraiment elle ne supportait plus cette situation. Mais elle m’a répondu qu’elle ne le ferait pas, parce qu’ils étaient ensemble propriétaires de l’appartement, que sa famille n’approuverait pas ce changement et que ses amis risquaient de ne pas comprendre sa décision. Quelle pauvreté dans le raisonnement ! Elle décida donc de rester malheureuse avec son copain plutôt que de prendre sa vie en main.
                        <br /><br /><br />
                        Si vous basez toutes vos décisions sur ce que pensera de vous votre entourage, alors il vous sera difficile de mener la vie dont vous rêviez. Par exemple, il est possible que vos parents vous aient obligée à exercer tel ou tel métier, à fréquenter telle ou telle personne. Il est certes normal que vos parents souhaitent le meilleur pour vous, mais leur idéal de vie n’est certainement pas le vôtre. Un dialogue s’impose avec eux pour vraiment leur faire comprendre ce dont vous rêvez. Peut-être aimeriez-vous devenir actrice, chanteuse, présentatrice télé ou encore mannequin, mais vos parents ne sont pas d’accord avec ce choix de carrière : ils préféreraient que vous ayez un métier plus stable, comme avocate ou médecin. Leurs désirs sont parfaitement compréhensibles, mais c’est de votre vie à vous qu’il s’agit. C’est parce qu’elles ont trop peur de décevoir leur entourage, en faisant autre chose que ce qui avait été prévu pour elles, que beaucoup de filles n’arriveront jamais à changer leur existence et à vivre leurs rêves. N’oubliez pas que vos parents ne veulent généralement qu’une chose : votre bonheur. C’est donc à vous de leur faire comprendre ce qui vous rend vraiment heureuse. Ne faites pas de choix dans l’espoir illusoire de faire plaisir à votre entourage, sans considération de vos propres aspirations. Cela ne ferait que vous rendre malheureuse.
                        <br /><br /><br />
                        Beaucoup de jeunes femmes ont suivi de longues études prestigieuses dans le seul but de faire plaisir à leur famille, renonçant à leur propre destinée. Elles veulent que leurs parents soient fiers d’elles, ce qui n’est pas une mauvaise chose en soi. Néanmoins, une fois leurs études terminées, elles ont commencé à exercer un métier qu’elles n’aimaient pas du tout. Leur quotidien les ennuyait terriblement, elles passaient leurs journées à songer à ce qu’aurait pu être leur vie si, au lieu de chercher à faire plaisir à leur entourage, elles avaient fait ce dont elles avaient toujours rêvé.
                        <br /><br /><br />
                        Malheureusement, beaucoup de femmes passent à côté de leur rêve pour ce genre de « détail ». Veillez donc à bien distinguer entre ce que vous voulez vraiment faire et ce que votre entourage voudrait que vous fassiez. Votre bonheur en dépend, et la première étape pour devenir une princesse consiste à être heureuse.
                        <br /><br /><br />
                        Comprenez bien cela: le problème, c’est votre philosophie. Vous ne pouvez pas changer les autres, mais vous pouvez changer votre façon de voir les choses. Pourquoi les gens qui positivent sont-ils plus heureux ? Parce que leur point de vue sur le monde est orienté de manière à voir avant tout le bon côté des choses. Si une situation vous est insupportable, commencez déjà par changer votre point de vue sur ce qui vous arrive. Songez à ce que Thomas Edison répondait lorsqu’on lui rappelait qu’il avait échoué plus de mille fois avant d’inventer l’ampoule électrique : « Je n’ai pas échoué mille fois, j’ai trouvé mille façons qui ne fonctionnaient pas!» Faut-il s’étonner qu’avec une telle philosophie il soit devenu l’un des plus grands inventeurs de tous les temps ?
                        <br /><br /><br />
                        Voici une scène que j’ai pu observer et qui résume parfaitement la philosophie à adopter. Un dimanche soir, j’étais assis dans une gare en attendant mon train. Subitement, une fille s’assit à côté de moi. Elle était au téléphone et se montrait vraiment très énervée. Ne pouvant m’empêcher de tendre l’oreille (elle parlait assez fort), je compris très vite les raisons de sa colère. Elle était venue à la gare récupérer son petit ami, mais ce dernier ne l’avait pas prévenue que son train allait avoir du retard. Elle s’était donc fait du souci en ne voyant pas le train arriver. Elle racontait au téléphone, très en colère, toute cette histoire à l’une de ses amies : « À chaque fois, c’est la même chose... Il ne pense qu’à lui... J’en ai marre de son comportement... Il ne me dit jamais rien. » Elle commençait même à dire : « Ce soir, il n’aura rien... Il n’aura qu’à rentrer tout seul... Je ne peux plus le supporter... » Une demi-heure plus tard, voilà son petit ami arrivé, marchant dans sa direction. Je m’attendais à ce qu’elle lui fasse des reproches, à ce qu’elle mette ses paroles en application. Eh bien, j’étais dans l’erreur ! Quand elle vit son petit ami arriver, elle se précipita dans ses bras et ils s’enlacèrent chaleureusement. Simplement, elle lui fit gentiment remarquer qu’il aurait pu l’appeler pour la prévenir de son retard. Quel changement d’attitude ! Elle était passée de la colère à l’amour en quelques secondes. Elle avait dû se rendre compte que la colère ne mènerait à rien. Il y a fort à parier qu’ils passèrent ensuite une très bonne soirée à se raconter à quel point ils s’étaient manqué. En effet, à bien y réfléchir, à quoi cela aurait-il servi que cette fille s’énerve contre son petit ami ? Cela l’aurait certainement mis en colère lui aussi, et ils se seraient disputés. Imaginez l’ambiance, le soir, en rentrant à la maison ! Croyez-vous vraiment que l’on construise une relation solide en adressant constamment des reproches ?
                        Voilà pourquoi il est si important de bien réfléchir avant d’ouvrir la bouche. Ne laissez jamais vos émotions vous submerger, vous auriez beaucoup trop à perdre.
                        <br /><br /><br />
                        Si vous restez persuadée qu’il est impossible de changer sa vie simplement en adoptant une pensée positive, voici une histoire vraie qui devrait beaucoup vous toucher. Lisez-la donc attentivement.
                        <br /><br /><br />
                        En 1981, un Américain du nom de Christopher Paul Gardner, alias Chris Gardner, s’est retrouvé à la rue avec son fils à la suite de son licenciement et de la séparation d’avec sa femme. Un jour, il aperçoit un homme vêtu d’un beau costume cherchant à garer sa Ferrari. Intrigué par le niveau de vie de cet homme, Chris Gardner l’aborde pour lui demander comment il a fait pour réussir. L’homme lui répond qu’il est courtier en bourse. Chris Gardner se pose alors cette question : pourquoi pas moi ? Pourquoi ne pourrais-je pas, moi aussi, réussir ma vie ? De grandes sociétés de bourse offrent des programmes de formation, des sortes de stages pour apprendre les métiers de la bourse. Chris Gardner s’inscrit à l’un de ces programmes. Sans diplôme d’études supérieures et avec à peine de quoi vivre. Lui et son fils mangent à la soupe populaire et dorment dans son bureau après ses longues heures de travail, sur des bancs dans les parcs, dans la salle de bains d’une gare ferroviaire — bref, là où ils peuvent. Il passera quelques jours en prison pour ne pas avoir été en mesure de payer ses dettes. Mais Chris est un battant, et sa volonté de s’en sortir va finir par l’emporter. Sans expérience, sans études supérieures, sans relations professionnelles et vêtu de la même tenue qu’il portait le jour de sa garde à vue, Chris Gardner réussit son examen d’embauche : il a même été le seul stagiaire à se voir offrir, dès le premier essai, un emploi stable et permanent dans un établissement boursier ! Quelques années plus tard, il est devenu multimillionnaire et a créé sa propre entreprise : Gardner Rich & Company.
                        <br /><br /><br />
                        Alors, si vous pensez toujours qu’il est impossible de changer sa vie, songez encore à cet homme qui n’a jamais renoncé et qui a toujours su voir le bon côté des choses. Une femme avec un tel mental en aurait fait autant. N’oubliez jamais que la différence entre une bonne et une mauvaise journée, c’est votre attitude. En réalité, il n’y a pas de mauvaises journées, il n’y a que de bonnes journées ou d’excellentes journées. Restez positive. Prenez vraiment conscience qu’il n’y a pas de fatalité dans la vie, que c’est toujours celui qui y croit le plus qui finit par l’emporter. La prochaine fois que vous aurez des reproches à adresser aux autres, interrogez-vous sur vous-même, et voyez si le problème ne viendrait pas plutôt de vous. Si vous avez du mal à entretenir une relation durable avec un homme, vous êtes certainement à l’origine de ce qui vous arrive. Beaucoup de femmes se plaignent de n’être pas comprises, mais combien s’efforcent de chercher à comprendre ? Car la sagesse est de d’abord chercher à comprendre, avant de chercher à être comprise ! Il n’est pas nécessaire de tout changer dans votre vie, juste votre point de vue sur le monde. On vous aimera pour ce que vous êtes, pour votre état d’esprit : si vous optez pour une bonne philosophie, alors le reste viendra tout seul. Imaginez un peu la force mentale de Cendrillon. Après tout ce que ses demi-sœurs lui ont fait subir, elle a su garder une attitude positive. 
                        <br /><br /><br />
                        Pour devenir une princesse, vous n’avez pas besoin d’un physique exceptionnel, mais d’un mental exceptionnel. C’est incontestablement la marque des grands. Et ce quel que soit le domaine. Vous ne pouvez pas réaliser vos rêves si mentalement vous êtes faible. La santé physique est bien évidemment très importante, mais la santé mentale l’est encore plus. Rien ne pourra vous arrêter si dans votre tête vous avez décidé de réussir. Prenez exemple sur Cendrillon, car elle ne doit sa réussite qu’à son état d’esprit. C’est en ayant le mental d’une princesse que l’on devient une princesse, et non l’inverse. On apprend à tomber... pour mieux se relever ! Voilà un bel exemple d’attitude positive. Et vous pouvez positiver quelle que soit la situation, peu importe ce qui vous arrive. Il y a forcément un côté positif. Même un drame présente au moins un avantage : il va vous apprendre à devenir plus forte — mais encore faut-il que ce soit sous cet angle-là que vous voyiez les choses. L’amour ne va jamais vers celles qui sont faibles psychologiquement, celles qui abandonnent. Le grand amour se mérite. Seules celles qui auront fait l’effort de se forger un mental à toute épreuve réaliseront leur rêve le plus cher. Mais cela ne tient qu’à vous. Personne ne se trouve dans votre tête à votre place. Cendrillon savait qu’elle ne pouvait compter que sur elle-même pour trouver son prince. Alors, elle s’est prise en main et a commencé à changer son attitude. Rappelez-vous cette phrase célèbre :
                        <br /><br /><br />
                        La vie ne vaut pas la peine d’être vécue, si on ne la vit pas comme un rêve.
                        Avant de recevoir tout l’amour que vous méritez, vous devez vous y préparer. Voici les grandes étapes à suivre pour changer votre état d’esprit sur le monde qui vous entoure.
                        <br /><br /><br />
                        <p className="titre">La solitude : source d’inspiration</p>
                        Afin d’effectuer un travail efficace sur vous-même, vous devez impérativement vous isoler physiquement et mentalement. S’isoler physiquement signifie être seul avec soi-même. Cela peut très bien être chez vous dans votre chambre, ou dehors au sommet d’une colline, à l’ombre d’un vieux chêne. Peu importe l’endroit, mais il vous faut vous isoler du monde extérieur pour avoir une réelle conversation avec vous-même. Vous ne pourrez jamais trouver les réponses aux questions que vous vous posez si vous êtes en permanence entourée de gens. Éteignez votre portable, votre télévision et votre radio. Même si vous ne pouvez vous isoler qu’une à deux heures par semaine, voilà déjà qui devrait largement suffire pour mener la réflexion dont vous avez besoin. Il faut également vous isoler mentalement. Ne pensez pas à ce qui s’est passé hier ni à ce que vous allez faire demain. Restez concentrée sur l’instant présent. Vous avez rendez-vous avec vous-même. Cette étape sera votre point de départ — vous pouvez décider de vous y soustraire, mais vous devrez alors en payer le prix : continuer de vous sentir frustrée le reste de votre vie. Ne vous êtes-vous jamais demandé ce que faisait Cendrillon de son temps libre, après avoir fait le ménage, la lessive, la cuisine et la vaisselle ? Eh bien, elle consacrait le peu de temps libre dont elle disposait à elle-même. Non pas pour se refaire une beauté, mais pour se découvrir soi-même. Pour savoir précisément à quoi elle aspirait — et surtout comment s’y prendre pour réaliser ses rêves. Ses conditions de vie étaient très difficiles. Rappelez-vous, elle vivait dans une chambre si petite que son lit occupait la moitié de la pièce ; ses deux demi-sœurs lui menaient la vie dure ; ses parents étaient décédés ; et, par-dessus tout, elle devait subir une belle mère qui ne l’aimait pas. Pourtant, elle ne perdit jamais de vue son rêve, car elle s’accordait du temps à elle- même. Elle le savait : les réponses ne sont pas si loin, il suffit de les chercher un peu.<br /><br /><br />

                        Celles qui ont trouvé les bonnes réponses sont celles qui ont cherché les bonnes questions !
                        Ce qui est regrettable aujourd’hui, c’est que beaucoup de gens passent trop de temps à écouter les histoires des autres et pas assez à écouter ce que leur propre cœur aurait à leur dire. Plutôt que d’écrire les histoires des autres, commencez par écrire votre histoire personnelle. Et aujourd’hui est le jour idéal pour commencer.
                        Si comme Cendrillon vous faites l’effort de vous retrouver seule avec vous-même, vous allez découvrir ce dont vous rêvez vraiment, ce que vous avez toujours voulu. Il ne suffit pas de savoir que faire, il faut le faire et le faire maintenant. Ce n’est pas demain que vous allez commencer à changer votre vie, c’est aujourd’hui! Préférez-vous être seule quelques heures par semaine à vous poser les bonnes questions, ou bien préférez-vous vous sentir seule toute votre vie à vous poser des questions ?<br /><br /><br />
                        
                        <p className="titre">Écrire pour exister</p>
                        Faire le point sur soi-même est important, mais cela ne vous mènera nulle part si vous n’écrivez pas noir sur blanc toutes les choses que vous aimeriez faire dans votre vie. Les gens qui notent ainsi tous leurs rêves ont souvent plus de succès que les autres, et ce n’est pas par hasard. Le fait d’écrire vous permet « d’officialiser » votre rêve envers vous-même. Avant, tout cela était bien ancré au fond de votre cœur ; maintenant, c’est sur du papier. Comme on le dit si bien, les écrits restent. Désormais, vous êtes certaine de ne jamais oublier votre rêve. Pendant les moments de doute, vous pourrez lire et relire votre rêve pour être sûre de ne pas vous égarer en chemin, cela éclairera votre route. C’est toujours dans l’obscurité que l’on a le plus besoin de lumière.<br /><br /><br />

                        Et surtout, voyez grand, n’oubliez pas qu’il n’y a pas de rêve qui soit trop fou. Rappelez-vous vos rêves d’enfant, ils étaient sans limites. Voyager à l’autre bout du monde, vivre dans un château, nager avec les dauphins, trouver son prince... tout cela vous semblait tellement réalisable que vous n’avez alors jamais douté de votre succès. Mais que s’est-il passé entre cette époque merveilleuse où le monde semblait vous appartenir et aujourd’hui ? Eh bien, la plus dramatique, la plus triste, la plus redoutable des choses s’est produite : vous avez oublié vos rêves ! Toutes les femmes ayant une vie médiocre que j’ai rencontrées ont oublié leurs rêves. Elles sont incapables de se rappeler ce à quoi elles rêvaient lorsqu’elles étaient petites, il est donc normal que leur vie ne soit pas exceptionnelle. À l’inverse, toutes les femmes qui ont fini par devenir des « princesses » sont celles ayant toujours cru en la beauté de leurs rêves. Elles n’ont jamais oublié leurs rêves d’enfant, et c’est pour cela qu’elles obtiennent plus de réussite que les autres. Comme le disait si bien le chanteur Grand Corps Malade, « Le monde appartient à ceux qui rêvent trop ! » La pire des choses qui puissent vous arriver serait vraiment d’avoir oublié tous vos rêves. Je parle en l’occurrence de votre vrai rêve personnel. Je ne suis pas persuadé qu’il était de vous retrouver enfermée toute la journée dans un bureau à travailler avec des gens que vous n’aimez pas pour un patron qui ne vous accorde aucune reconnaissance. Vous aviez rêvé de tant de choses quand vous étiez petite, mais finalement vous êtes déçue, car rien ne se passe comme vous l’aviez imaginé.<br /><br /><br />

                        Pourquoi avez-vous oublié vos rêves d’enfant ? Certainement parce que vous n’aviez aucun plan, aucune ligne conductrice, aucune discipline personnelle à suivre pour parvenir jusqu’à votre rêve. L’idée de prendre des notes ne vous est même pas venue à l’esprit. Il est donc normal que vous ayez fini par oublier vos rêves. C’est incroyable, cette capacité de l’être humain à oublier. Mais vous pouvez remédier à ce problème dès maintenant, en prenant un papier et un crayon. Notez tout ce qui vous passe par la tête. Vos rêves, vos envies, vos désirs, vos passions... Écrivez ! Votre imagination est sans limites, alors ne vous limitez pas à ce que l’on vous a dit ou à ce que vous avez vu. Laissez parler votre cœur. Écoutez ce qu’il a à vous dire. Ces dernières années, vous étiez bien trop occupée à vous faire du souci pour des choses sans importance, à écouter à fond de la musique aux écouteurs, à lire les messages laissés sur votre portable. Mais vous aviez oublié l’essentiel : écouter les messages laissés par votre cœur ! C’est donc l’occasion d’écouter tout ce que vous avez sur le cœur, et de l’écrire. Vous avez un rêve secret qui mérite d’être respecté. Si vous continuez de le maltraiter, alors votre vie vous semblera dépourvue de sens. Vous pourrez paraître heureuse à l’extérieur, mais vous serez vide à l’intérieur. Toutes celles qui sont parvenues à changer leur vie ont réussi à le faire parce qu’elles n’ont pas oublié leurs rêves, et elles ont toujours écouté leur cœur plutôt que les médisants.
                        Oui, c’est possible !<br /><br /><br />

                        Vous venez de faire un grand pas en avant. Vous faites désormais partie des rares personnes sur cette planète qui ont écrit tout ce qu’elles voulaient faire dans leur vie. Mais vous avez bien conscience que cela ne peut pas rester sur du papier. Il va falloir maintenant intimement vous persuader que cela est possible. Autrement dit, il faut y croire.
                        <br /><br /><br />
                        N’oubliez jamais que, à la question « Est-ce que c’est possible ? », la réponse sera toujours « Oui, ça l’est ! ». Quel que soit votre rêve, à partir du moment où vous n’y croyez pas vous-même, alors vous mènerez une vie moyenne, sans couleurs, sans saveur, sans passion. Les rêves sont faits pour être réalisés. À quoi sert de rêver si c’est juste pour que tout cela reste un rêve ? Si vous avez des jambes, c’est pour marcher. Si vous avez des yeux, c’est pour voir. Eh bien, si vous avez un rêve, c’est pour le réaliser. Pourtant, j’ai déjà rencontré une fille qui m’a dit que les rêves devaient rester des rêves ! Voulez-vous savoir ce qu’elle fait dans la vie ? Elle est hôtesse de caisse depuis plusieurs années et vit dans une pièce de neuf mètres carrés avec son copain, qui est au chômage et noie ses problèmes dans l’alcool... Quel dommage de rater sa vie parce que l’on n’a pas cru en ses rêves ! Si vous êtes à présent persuadée que vous pouvez réaliser votre rêve, il vous reste la partie la plus importante et la plus difficile à entreprendre : agir ! Et agir maintenant.
                        <br /><br /><br />
                        Retenez-le bien : « Même le plus grand des voyages commence par un premier pas. » Voilà pourquoi peu de gens ne vivront jamais leur rêve : ils n’agissent pas. Ils attendent qu’arrive quelque chose, ils espèrent que leur vie va changer du jour au lendemain. Ne commettez pas cette erreur de passer votre vie à attendre, il faut agir. Soyez patiente, mais non passive. Ce n’est pas en restant dans votre canapé à regarder la télévision ou à passer toutes vos soirées sur Internet que vous allez réaliser votre rêve. Avant de partir dans n’importe quelle direction, commencez par travailler sur vous-même. Vous méritez une vie exceptionnelle, commencez par devenir une personne exceptionnelle.
                        <br /><br /><br />
                        Pour illustrer l’importance de bien se connaître, voici l’exemple d’une rencontre très significative. Un jour, je fis la connaissance d’une jeune femme qui sortait d’une école d’ingénieur. En vérité, cette fille était particulièrement brillante, intelligente, cultivée et très bien éduquée. Par ailleurs, elle était aussi extrêmement belle. Elle avait également un copain très amoureux d’elle. Elle menait a priori une vie parfaite. Un jour, elle vint me demander si je pouvais parcourir son C.V. avant qu’elle l’envoie à diverses entreprises pour une demande de stage. J’acceptai avec grand plaisir. Voici ce que l’on pouvait lire sur ce C.V. : elle avait obtenu le baccalauréat avec les félicitations du jury, intégré l’une des meilleures classes préparatoires de France, puis une école d’ingénieur, et suivi des cours dans une école de commerce. Elle indiquait également parler anglais et espagnol couramment, et avoir des notions de russe et de japonais. Elle précisait enfin posséder de très bonnes connaissances en programmation informatique. Il fallait l’avouer, son C.V. était tout à fait impressionnant, et je lui dis que celui-ci était en outre bien rédigé et qu’elle n’aurait aucun mal à obtenir un stage ! Naturellement, je me permis à cette occasion de lui demander ce qu’elle voulait faire plus tard, une fois ses études terminées. Sa réponse m’a beaucoup choqué, et je ne suis pas près de l’oublier : « Je n’en ai absolument aucune idée ! »
                        <br /><br /><br />
                        Je me fis alors cette réflexion : à quoi bon avoir acquis toute cette connaissance si c’est pour ne pas se connaître soi-même ? Aussi incroyable que cela puisse paraître, cette jeune fille était malheureuse, car elle ne savait pas ce qu’elle aurait aimé faire, ne savait même pas ce dont elle rêvait. Elle avait passé toutes ces dernières années à étudier pour les autres, sans jamais vraiment se pencher sur elle-même. Si vous ne voulez pas éprouver au fond de vous-même ce sentiment de vide, il faut commencer par acquérir de la connaissance sur vous-même.<br /><br /><br />

                        Savoir par cœur le théorème de Pythagore peut être utile pour résoudre un problème de géométrie, mais savoir par cœur qui vous êtes vous permettra de résoudre les problèmes dans votre vie quotidienne. Accordez-vous plus d’importance à un problème de géométrie ou à un problème dans votre vie ? C’est à vous d’écrire votre histoire personnelle. Commencez maintenant.<br /><br /><br />

                        <p className="titre center">Une fille heureuse est une fille qui n’a pas peur d’aller au bout de ses rêves.</p><br /><br />

                        <p className="center">Fin de l’extrait<br />
                      
                        </p>
                        <br /><br /><br /><br /><br /><br />
                      </div><br />

                    </div>
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
})(Livre);
