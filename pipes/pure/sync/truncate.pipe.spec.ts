import {TruncatePipe} from './truncate.pipe';

describe('TruncatePipe', () => {
  const pipe = new TruncatePipe();

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('truncate appending default string', () => {
    const result = pipe.transform('A too long text', 5);
    expect(result).toEqual('A too...');
  });

  it('truncate appending custom string', () => {
    const result = pipe.transform('A too long text', 5, '?!');
    expect(result).toEqual('A too?!');
  });

});
