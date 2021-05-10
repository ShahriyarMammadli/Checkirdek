import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ViewChild } from '@angular/core';
import { Slides } from 'ionic-angular';
import {HomePage} from '../home/home';
import { AngularFireAuth } from 'angularfire2/auth';
/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  @ViewChild(Slides) slides: Slides;
  user: any = {};
  newUser: any = {};

  constructor(private afAuth: AngularFireAuth, public navCtrl: NavController, public navParams: NavParams) {
  }
  async login(){

    try {
      const result = this.afAuth.auth.signInWithEmailAndPassword(this.user.username,this.user.password);
      
      if(result){
        this.navCtrl.push(HomePage);
      }

    } catch (e) {
      console.error(e);
    }
  }

  async signUp(){
    try{
      const result = await this.afAuth.auth.createUserWithEmailAndPassword(this.newUser.email, this.newUser.password);
      
      if(result){
        this.slides.slideTo(0, 500);
      }
    
    }catch(e){
      console.error(e);
    }
  }
  goToSlide(index) {
    this.slides.slideTo(index, 500);
  }
}
