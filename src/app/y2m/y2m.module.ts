import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { Y2MPage } from './y2m.page';
import { Y2MPageRoutingModule } from './y2m-routing.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Y2MPageRoutingModule
  ],  
  declarations: [Y2MPage]
})
export class Y2MPageModule {}
