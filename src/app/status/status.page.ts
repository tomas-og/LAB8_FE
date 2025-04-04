import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {IonRadioGroup, IonRadio, IonItem, IonLabel, IonList, IonContent, IonHeader, 
  IonTitle, IonToolbar, IonButton, IonButtons, IonBackButton } from '@ionic/angular/standalone';

  import { Storage } from '@ionic/storage-angular';
  import { Router } from '@angular/router';
  @Component({
  selector: 'app-status',
  templateUrl: './status.page.html',
  styleUrls: ['./status.page.scss'],
  standalone: true,
  imports: [IonRadioGroup, IonRadio, IonItem, IonLabel, IonList, IonBackButton, IonButtons, 
    IonButtons, IonContent, IonHeader,IonButton, IonTitle, IonToolbar, CommonModule, FormsModule]
})

export class StatusPage implements OnInit {
  myStatus: string = '';  //Stores the status
  constructor(private storage:Storage, private router:Router) { }


  async onSave(){
     // Save status in storage and go to home page
    console.log(this.myStatus);
    await this.storage.create();
    await this.storage.set('status', this.myStatus)
    this.router.navigate(['/home']);
  }

  async ionViewWillEnter() {
    // Load saved status when page opens
    await this.storage.create();
    this.myStatus = await this.storage.get('status')
  }

  ngOnInit() {
  }

}
