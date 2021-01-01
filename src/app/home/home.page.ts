import {Component, OnInit} from '@angular/core';
import {ToastController} from '@ionic/angular';
import {Router} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{

  constructor(public toastController: ToastController, private router: Router) {}

  ngOnInit(): void {
  }

  goToLstExam(): void {
    this.router.navigate(['/lst-exam']);
  }

  async comingSoon() {
    const toast = await this.toastController.create({
      message: 'Coming soon...',
      duration: 2000,
      cssClass: 'toastStyle'
    });
    toast.present();
  }
}
