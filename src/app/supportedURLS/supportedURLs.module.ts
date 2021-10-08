import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { SupportedURLSPage } from './supportsURLS.page';
import { SupportedURLSPageRoutingModule } from './supportedURLS-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,    
    IonicModule,
    SupportedURLSPageRoutingModule 
  ],
  declarations: [SupportedURLSPage ]
})
export class SupportedURLSPageModule {}
