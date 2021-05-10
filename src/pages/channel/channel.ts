import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ChatPage} from '../chat/chat';
import { Observable } from 'rxjs/Observable';
import { AngularFireDatabase } from 'angularfire2/database';
import { FirebaseListObservable } from 'angularfire2/database';
/**
 * Generated class for the ChannelPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-channel',
  templateUrl: 'channel.html',
})
export class ChannelPage {

  private channel: any={};
  private channelname;
  private channelKey;
  private dateLink;
  private i;
  private progi;
  public count;
  private commentRef$: FirebaseListObservable<any[]>;
  private commentRef;
  private path;

  private currentLink;
  private commentViewStatus;
  constructor(public navCtrl: NavController, public navParams: NavParams,public db: AngularFireDatabase) {
    this.commentRef = this.db.list('/'+this.path);
    this.refreshComments();
  }

  ionViewWillEnter() {
    this.channel = this.navParams.get('item');
    this.i = this.navParams.get('i');
    this.path ='%'+ this.channel.ch_name+'%program_list%';
    this.commentViewStatus = false;
  }
  commentView(str: any){
    this.commentViewStatus = !this.commentViewStatus;
  }
  programClick(programs: any){
    this.navCtrl.push(ChatPage, {
      i: this.i,
      programs: programs,
    });
  }
  refreshComments(){
    this.commentRef$ =  this.db.list('comments/'+this.path);
    this.commentRef$.forEach(index=>{
      this.count = index.length;
  });
}
}
