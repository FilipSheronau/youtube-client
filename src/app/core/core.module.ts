import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FormsModule } from '@angular/forms';
import { CoreComponent } from './components/core/core.component';
import { Routes, RouterModule } from '@angular/router';
import { FilteringCriteriaBlockComponent }
  from './components/filtering-criteria-block/filtering-criteria-block.component';
import { ErrorComponent } from './pages/error/error.component';
import { AuthGuard } from './guards/auth.guard';
import { LoginBlockComponent } from './components/login-block/login-block.component';

const routes: Routes = [
  {
    path: 'main',
    loadChildren: '../youtube/youtube.module#YoutubeModule',
    canActivate: [AuthGuard]
  },
  { path: '', redirectTo: 'main', pathMatch: 'full'},
  { path: 'login', loadChildren: '../auth/auth.module#AuthModule'},
  { path: '404', component: ErrorComponent},
  { path: '**', redirectTo: '404' }
];

@NgModule({
  declarations: [
    HeaderComponent,
    CoreComponent,
    FilteringCriteriaBlockComponent,
    ErrorComponent,
    LoginBlockComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    CommonModule,
    FormsModule,
  ],
  exports: [
    CoreComponent,
    RouterModule,
  ],
  providers: [
    AuthGuard
  ],
  bootstrap: [CoreComponent],
})
export class CoreModule { }
