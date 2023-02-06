import { Component, Input, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-buttonc',
  templateUrl: './buttonc.component.html',
  styleUrls: ['./buttonc.component.scss'],
})
export class ButtoncComponent implements OnInit {
  @Input() label!: string;
  constructor(public navCtrl: NavController) { }

  ngOnInit() {}


  navegar(){
    this.navCtrl.pop();
  }

}
