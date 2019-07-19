import { Subject } from 'rxjs';

export enum NNEvent {
  LayerChange = 'NN_LAYER_CHANGE',
  PanelChange = 'PANEL_CHANGE',
}

interface IData {
  type: NNEvent;
  payload: any;
}

class EventStream {
  private subject: Subject<any>;
  constructor() {
    this.subject = new Subject();
  }

  send(data: IData) {
    return this.subject.next(data);
  }

  clear() {
    return this.subject.next();
  }

  getMessage() {
    return this.subject.asObservable();
  }

  subscribe(event: NNEvent, handle: Function) {
    const subscription = this.getMessage()
      .subscribe((data: IData) => {
        const { type, payload } = data;
        if (event === type) {
          handle(payload);
        }
      });
    return subscription;
  }
}

export default new EventStream();
