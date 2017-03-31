import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';

import { UppercasePipe } from './uppercase';

@NgModule({
	imports: [
		IonicModule
	],
	declarations: [
		UppercasePipe
	],
	exports: [
		UppercasePipe
	]
})
export class PipesModule {}
