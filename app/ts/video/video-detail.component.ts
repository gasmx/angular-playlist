import {Component, EventEmitter} from '@angular/core'
import {Video} from 'classes/video.class'
import {dir} from 'modules/app.config'

@Component({
    selector: 'video-detail',
    templateUrl: dir('/video/video-detail.component.html'),
    inputs: ['video'],
    outputs: ['closeForm']
})

export class VideoDetailComponent {
    private editTitle: boolean = false;
    private closeForm = new EventEmitter;
    video: Video;

    onTitleClick() {
        this.editTitle = true;
    }

    onButtonOkClick() {
        this.closeForm.emit(this.video);
    }

    ngOnChanges() {
        this.editTitle = false;
    }
}