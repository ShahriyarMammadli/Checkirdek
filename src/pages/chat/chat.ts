import { Component, ViewChild} from '@angular/core';
import { IonicPage, NavController, NavParams, Content } from 'ionic-angular';
import { DoCheck } from '@angular/core/src/metadata/lifecycle_hooks';
import { Observable } from 'rxjs/Observable';
import { AngularFireDatabase } from 'angularfire2/database';
import { FirebaseListObservable } from 'angularfire2/database';
import firebase from 'firebase';
import { Item } from 'ionic-angular/components/item/item';

/**
 * Generated class for the ChatPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-chat',
  templateUrl: 'chat.html'
})
export class ChatPage implements DoCheck{
  @ViewChild(Content) content: Content;
  public model: any = {};
  public username: string = '';
  public message: string = '';
  public count;
  private program;
  private channelKey;
  private channel;
  //private dateLink;
  //private index;
  private path;
  private path2;
  private commentRef$: FirebaseListObservable<any[]>;
  private commentRef;
  constructor(public navCtrl: NavController, public navParams: NavParams, public db: AngularFireDatabase) {
    //this.username = this.navParams.get('curUsername');
    this.username = "shahriyar";
    //this.channelKey = this.navParams.get('channelKey');
    //this.dateLink = this.navParams.get('dateLink');
    //this.index = this.navParams.get('index');
    this.path ='%'+ this.channelKey+'%program_list%';
    this.commentRef = this.db.list('/'+this.path);
    //this.listAllChannels();
  }
  ionViewWillEnter(){
    this.channel = this.navParams.get('i');
    this.program = this.navParams.get('programs');
    this.path2 ='%'+ this.channel+'%'+this.program+'%';
    this.refreshComments();
    console.log(this.path)
    console.log(this.path2)
  }
  ngDoCheck(){
    this.scrollToBottom();
  }

  scrollToBottom() {
    this.content.scrollToBottom(0);
  }
  sendMessage() {
    this.model.content = this.message;
    this.model.username = this.username;
    this.model.count =  this.count;
    firebase.database().ref('chechkirdek/'+this.path2+"/"+this.count+'/').set(this.model);
    this.message = '';
  }
  refreshComments(){
    this.commentRef$ =  this.db.list('chechkirdek/'+this.path2);
    this.commentRef$.forEach(index=>{
      console.log("333")
      this.count = index.length;
  });
  }
}
