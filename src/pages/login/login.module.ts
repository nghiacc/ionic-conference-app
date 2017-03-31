import { NgModule } from '@angular/core';
import { LoginPage } from './login';
import { IonicPageModule } from 'ionic-angular';

import { PipesModule } from '../../pipes/pipes.module';

@NgModule({
	declarations: [
		LoginPage
	],
	imports: [
		PipesModule,
		IonicPageModule.forChild(LoginPage)
	],
	entryComponents: [
		LoginPage
	]
})
export class LoginPageModule {}
