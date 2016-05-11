import {Component} from 'angular2/core';
import {NegroComponent} from './negro.component';

@Component({
    selector: 'my-app',
    template: `
        <h1>Angular 2 Boilerplate</h1>
        <p>Hello Negro!</p>
        <negro>loading...</negro>
    `,
    directives: [NegroComponent],
})
export class AppComponent {

}