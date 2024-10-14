import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CodeEditorComponent } from './code-editor/code-editor.component';
import { LivePreviewComponent } from './live-preview/live-preview.component';
import { PlaygroundComponent } from './playground/playground.component';
import { AceModule } from 'ngx-ace-wrapper';

@NgModule({
  declarations: [
    AppComponent,
    CodeEditorComponent,
    LivePreviewComponent,
    PlaygroundComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
