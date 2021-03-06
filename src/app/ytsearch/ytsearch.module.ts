import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { YTSearchComponent } from './ytsearch.page';
import { IonCard } from '@ionic/angular';
import { AppPageRoutingModule } from './ytsearch-routing.module';
import {YouTubePlayerModule} from '@angular/youtube-player';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,    
    IonicModule,
    AppPageRoutingModule,
    YouTubePlayerModule
  ],
  declarations: [YTSearchComponent]
})
export class Y2MSearchPageModule {}
