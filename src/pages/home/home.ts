import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ChannelListPage } from '../channel-list/channel-list';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit{

  constructor(public navCtrl: NavController) {

  }
  ngOnInit(){
    this.navCtrl.push(ChannelListPage);
  }
}
