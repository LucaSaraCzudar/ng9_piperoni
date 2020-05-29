import { OrdinalSuffixPipe } from './ordinal-suffix.pipe';

describe('OrdinalSuffixPipe', () => {
  const pipe = new OrdinalSuffixPipe();

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('modify values', () => {
    expect(pipe.transform(1)).toEqual('1st');
    expect(pipe.transform(2)).toEqual('2nd');
    expect(pipe.transform(3)).toEqual('3rd');
    expect(pipe.transform(101)).toEqual('101st');
    expect(pipe.transform(322)).toEqual('322nd');
    expect(pipe.transform(293)).toEqual('293rd');
  });

  it('return values unmodified', () => {
    expect(pipe.transform(4)).toEqual('4th');
    expect(pipe.transform(10)).toEqual('10th');
    expect(pipe.transform(107)).toEqual('107th');
    expect(pipe.transform(239)).toEqual('239th');
    expect(pipe.transform(911)).toEqual('911th');
    expect(pipe.transform(12)).toEqual('12th');
    expect(pipe.transform(213)).toEqual('213th');
  });
});
