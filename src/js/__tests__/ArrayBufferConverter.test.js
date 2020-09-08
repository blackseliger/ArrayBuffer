import ArrayBufferConverter from '../ArrayBufferConverter';

describe('check method load', () => {
  test('load return data', () => {
    const expected = '{"data":{"user":{"id":1,"name":"Hitman","level":10}}}';
    const testBuffer = new ArrayBufferConverter();
    const received = testBuffer.load();
    expect(received).toEqual(expected);
  });
})