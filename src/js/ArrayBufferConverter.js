import getBuffer from './getBuffer';

export default class ArrayBufferConverter {
  constructor() {
    this.buffer = getBuffer();
  }

  load() {
    let bufferText = '';
    const buffer16BitView = new Int16Array(this.buffer);
    for (let i = 0; i < buffer16BitView.length; i += 1) {
      bufferText += String.fromCharCode(buffer16BitView[i]);
    }
    return bufferText;
  }
}

