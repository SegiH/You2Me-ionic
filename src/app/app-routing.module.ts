import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'y2m',
    redirectTo: '',
  },
  {
    path: 'Y2M',
    redirectTo: '',
  },
  {
    path: 'search',
    loadChildren: () => import('./ytsearch/ytsearch.module').then( m => m.Y2MSearchPageModule)
  },
  {
    path: 'Search',
    redirectTo: 'search',
    pathMatch: 'full'
  },
  {
    path: '',
    loadChildren: () => import('./y2m/y2m.module').then( m => m.Y2MPageModule),
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
