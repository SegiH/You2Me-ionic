import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { Y2MPage } from './y2m.page';
import { HomePageRoutingModule } from './y2m-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,    
    IonicModule,
    HomePageRoutingModule
  ],
  declarations: [Y2MPage]
})
export class HomePageModule {}
