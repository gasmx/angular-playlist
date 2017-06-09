import {Component} from '@angular/core'
import {Config} from 'default/config.service'
import {Video} from 'classes/video.class';
import {dir} from 'modules/app.config';

@Component({
    selector: 'my-app',
    templateUrl: dir('/default/app.component.html')
})

export class AppComponent {
    title: string = Config.PAGE_TITLE;
    videosSrc: Array<Video>;
    selectedVideo: Video;

    constructor() {
        this.videosSrc = [
            new Video(1, 'Test', 'www.test.com', 'Test description'),
            new Video(2, 'Test2', 'www.test2.com')
        ]
    }

    onSelectVideo(video) {
        this.selectedVideo = video;
    }

    onCloseForm(video) {
        this.selectedVideo = null;
        this.videosSrc[video.id-1] = video;
    }

    newVideo() {
        let v: Video = new Video(this.videosSrc.length+1, "A new video", 'www.new.com');
        this.videosSrc.push(v);
        this.selectedVideo = v;
    }
}