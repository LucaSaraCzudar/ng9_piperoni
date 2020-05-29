import { DefaultPipe } from './default.pipe';

describe('DefaultPipe', () => {
  const pipe = new DefaultPipe();

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('return the original value', () => {
    expect(pipe.transform('Bear', 'Cat')).toEqual('Bear');
  });

  it('if the original value is falsy, return the default value', () => {
    expect(pipe.transform(undefined, 'Cat')).toEqual('Cat');
  });
});
