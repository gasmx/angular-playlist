import {Component, EventEmitter} from '@angular/core'
import {dir} from 'modules/app.config'

@Component({
    selector: 'video-list',
    templateUrl: dir('/video/video-list.component.html'),
    inputs: ['videos'],
    outputs: ['videoSelect']
})

export class VideoListComponent {
    videoSelect = new EventEmitter;

    selectVideo(vid) {
        this.videoSelect.emit(vid);
    }
}