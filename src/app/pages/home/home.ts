import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';


@Component({
  selector: 'app-home',
  imports: [RouterModule,IonicModule],
  templateUrl: './home.html',
  styleUrl: './home.css',
  standalone:true
})
export class Home {

}
