import { Component, Input } from '@angular/core';

@Component({
	selector: 'session-info',
	template: `
	  <h1>{{session.name}}</h1>

    <h4 *ngFor="let speaker of session.speakers">
      {{speaker.name}}
    </h4>

    <p>
      {{session.timeStart}} - {{session.timeEnd}}
    </p>

    <p>{{session.location}}</p>

    <p>{{session.description}}</p>
	`
})
export class SessionInfoComponent {

	@Input()
	session: any;
	
	constructor() {}
}