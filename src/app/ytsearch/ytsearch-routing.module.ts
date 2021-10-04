import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { YTSearchComponent } from './ytsearch.page';

const routes: Routes = [
  {
    path: '',
    component: YTSearchComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
