import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';

import { SessionInfoComponent } from './session-info';

@NgModule({
	imports: [
		IonicModule
	],
	declarations: [
		SessionInfoComponent
	],
	exports: [
		SessionInfoComponent
	]
})
export class ComponentsModule {}
