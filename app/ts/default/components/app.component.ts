import {Component} from 'angular2/core'
import {Config} from 'default/services/config.service'
// import htmlTemplate from './app.component.html';

@Component({
    selector: 'my-app',
    template: '<h1 class="jumbotron">{{ title }}</h1>'
})

export class AppComponent {
    title = Config.PAGE_TITLE;
}