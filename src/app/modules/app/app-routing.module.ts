import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


/** The routes for the project*/
const routes: Routes = [
  // Other Routes
  { path: '', loadChildren: '../test/test.module#TestModule' },
  // TODO: 404 route maybe, doubt it, but ask
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { useHash: true })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
