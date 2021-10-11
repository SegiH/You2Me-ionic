import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { Y2MPage } from './y2m.page';
import { Y2MPageRoutingModule } from './y2m-routing.module';
import { HTTP } from '@ionic-native/http/ngx';
import { File } from '@ionic-native/file/ngx';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Y2MPageRoutingModule
  ],
  providers: [File, HTTP],
  declarations: [Y2MPage]
})
export class Y2MPageModule {}
