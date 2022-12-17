import { BaseEvent, OnEventExecute } from '@/app/utils/baseEvent';
import { TrackData } from '@/app/utils/trackData';


// todo: remove nested server event calls
export default class TrackInfoChange extends BaseEvent implements OnEventExecute {
  constructor() {
    super("track:change");
  }
  execute(track: TrackData) {
    const trackProvider = this.getProvider("track");
    trackProvider.pushTrackToViews(track);
  }
}
