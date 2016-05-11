import {Component} from 'angular2/core';

@Component({
    selector: 'negro',
    template: `
        My name is {{name}} and <span [class.is-awesome]="inputElement.value === 'yes'">It's awesome</span>
        <br>
        <br>
        <input type="text" #inputElement (keyup)="0">
    `,
    'styleUrls': ['src/css/negro.css'],
})

export class NegroComponent {
    name: 'Sebastian';
}