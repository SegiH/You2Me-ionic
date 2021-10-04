import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Y2MPage } from './y2m.page';

const routes: Routes = [
  {
    path: '',
    component: Y2MPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
