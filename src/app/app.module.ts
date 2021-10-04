  import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CoreModule } from './core/core.module';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ConfirmDialogComponent } from './confirmdialog/confirmdialog.component';
import {YouTubePlayerModule} from '@angular/youtube-player';
import { SAVER, getSaver } from './core/saver.provider';
import { IonicStorageModule } from '@ionic/storage-angular';

@NgModule({
  declarations: [AppComponent,ConfirmDialogComponent],
  entryComponents: [],
  imports: [BrowserModule, CoreModule, IonicModule.forRoot(), IonicStorageModule.forRoot(), AppRoutingModule, YouTubePlayerModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy },{provide: SAVER, useFactory: getSaver} ],
  bootstrap: [AppComponent],
})
export class AppModule {}
