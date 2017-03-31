import { NgModule } from '@angular/core';
import { SessionDetailPage } from './session-detail';
import { IonicPageModule } from 'ionic-angular';

import { ComponentsModule } from '../../components/components.module';

@NgModule({
	declarations: [
		SessionDetailPage
	],
	imports: [
		ComponentsModule,
		IonicPageModule.forChild(SessionDetailPage)
	],
	entryComponents: [
		SessionDetailPage
	]
})
export class SessionDetailModule {}
