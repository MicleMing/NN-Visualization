import EventEmitter from 'eventemitter2';

const server = new EventEmitter.EventEmitter2();

export enum NNEvent {
  LayerChange = 'NN_LayerChange',
}

export default server;
