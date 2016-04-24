import {Page} from 'ionic-angular';
import {Mensagem} from '../mensagem/mensagem';
import {Agenda} from '../agenda/agenda';
import {Noticias} from '../noticias/noticias';
import {Configuracoes} from '../configuracoes/configuracoes';


@Page({
  templateUrl: 'build/pages/tabs/tabs.html'
})
export class TabsPage {
  constructor() {
    // this tells the tabs component which Pages
    // should be each tab's root Page
    this.tab1Root = Mensagem;
    this.tab2Root = Agenda;
    this.tab3Root = Noticias;
    this.tab4Root = Configuracoes;
  }
}
