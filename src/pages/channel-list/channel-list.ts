import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams,ToastController } from 'ionic-angular';
import { AngularFireDatabase } from 'angularfire2/database';
import { FirebaseListObservable } from 'angularfire2/database';


@IonicPage()
@Component({
  selector: 'page-channel-list',
  templateUrl: 'channel-list.html',
})
export class ChannelListPage implements OnInit {


  //private curUsername;
  private channelItemRef: FirebaseListObservable<any[]>;
  //private dateControl ;
  //private today = this.getToday();
  //private dateLink=this.getToday();

  constructor(public navCtrl: NavController, public navParams: NavParams,private database :AngularFireDatabase, private toast: ToastController) {
    /*const personRef: firebase.database.Reference = firebase.database().ref('profile/' +this.userID);
    personRef.on('value', personSnapshot => {
      this.curUsername=personSnapshot.val().username;
    });*/
  }
  ngOnInit(){
	  //this.dateControl = document.querySelector('input[type="date"]');  
		//this.dateControl.value = this.dateLink;
    if(true){
      this.toast.create({
          message: `Welcome to TV Rhino! `,
          duration: 3000
      }).present();
    }
    this.listChannelNames();
  }
  
  listChannelNames(){
      this.channelItemRef = this.database.list('/');
  }  
  getChannelList(){
    return this.channelItemRef;
  }
  goFavorites(){
    //this.navCtrl.('FavoritesPage');
  }
  /*goDate(){
		this.dateLink=this.dateControl.value;
		this.channelItemRef = this.database.list('channelList/'+this.dateLink);
		console.log(this.dateControl.value);
		
		//this.listAllChannels();
	}*/
  getToday(){
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth()+1; //January is 0!
    var yyyy = today.getFullYear();
     var d;var m;
    if(dd<10) {
        //dd = '0'+dd;
        d = '0'+dd.toString;
        
    }
     
    if(mm<10) {
       // mm = '0'+mm;
        m='0' + mm.toString;
    }
     
    var todaystr = yyyy + '-' + mm + '-' + dd;
	//var todaystr = dd + '-' + mm + '-' + yyyy;
    return todaystr;
  }
}

