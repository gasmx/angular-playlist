import {Component} from '@angular/core'
import {Config} from 'default/services/config.service'
import {dir} from 'config/app.config';

@Component({
    selector: 'my-app',
    templateUrl: dir('/default/templates/app.component.html')
})

export class AppComponent {
    title = Config.PAGE_TITLE;
}