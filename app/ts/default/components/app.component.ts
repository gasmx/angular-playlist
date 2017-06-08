import {Component} from '@angular/core'
import {Config} from 'default/services/config.service'

@Component({
    selector: 'my-app',
    template: '<h1 class="jumbotron">{{ title }}</h1>'
})

export class AppComponent {
    title = Config.PAGE_TITLE;
}