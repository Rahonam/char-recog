import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  {
    path: "",
    canActivate: [AuthGuard],
    loadChildren: ()=>import('./ocr/ocr.module').then(m=>m.OcrModule)
  },
  {
    path: "auth",
    loadChildren: ()=>import('./auth/auth.module').then(m=>m.AuthModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
