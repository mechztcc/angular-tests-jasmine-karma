import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LikeWidgetComponent } from './shared/components/like-widget/like-widget.component';

@NgModule({
	declarations: [AppComponent, LikeWidgetComponent],
	imports: [BrowserModule, AppRoutingModule, FontAwesomeModule],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}
