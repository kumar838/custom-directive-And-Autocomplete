import { BrowserModule } from '@angular/platform-browser';
import { NgModule} from '@angular/core';
import { HttpModule } from '@angular/http';
import {Routes,Router,RouterModule} from '@angular/router';

import { HiddenDirective } from './Directives/mydirective.directive';
import { DirComponent } from './dir/dir.component';

import { AutocompleteComponent } from './autocomplete/autocomplete.component';
//import { SharedModule } from './shared/shared.module';

const approuting :Routes=[
  {path:'' ,component:HomeComponent},
  {path:'directive', component:DirComponent},
  {path:'autocomplete', component:AutocompleteComponent}
];


@NgModule({
  declarations: [
    AppComponent,
   
    HiddenDirective,
    DirComponent,
    
    AutocompleteComponent  
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    //SharedModule,
    RouterModule.forRoot(approuting)
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
  
})

export class AppModule { }
