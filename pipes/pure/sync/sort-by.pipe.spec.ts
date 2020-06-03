import {SortByPipe} from './sort-by.pipe';

describe('SortByPipe', () => {
  const pipe = new SortByPipe();

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('reverse array', () => {
    const data = [
      {
        ID: '1',
        name: 'Test'
      },
      {
        ID: '2',
        name: 'Not a test'
      },
      {
        ID: '3',
        name: 'What if it is a test'
      }
    ];

    expect(pipe.transform(data, true))
      .toEqual([
        {
          ID: '3',
          name: 'What if it is a test'
        },
        {
          ID: '2',
          name: 'Not a test'
        },
        {
          ID: '1',
          name: 'Test'
        }
      ]);
  });

  it('sort simple array', () => {
    const simpleData = ['banana', 'apple', 'plum', 'mango'];
    expect(pipe.transform(simpleData))
      .toEqual(['apple', 'banana', 'mango', 'plum']);
  });

  it('sort array by parameter', () => {
    const data = [
      {
        ID: '1',
        name: 'Test'
      },
      {
        ID: '2',
        name: 'Not a test'
      },
      {
        ID: '3',
        name: 'What if it is a test'
      }
    ];

    expect(pipe.transform(data, false, 'name'))
      .toEqual([
        {
          ID: '2',
          name: 'Not a test'
        },
        {
          ID: '1',
          name: 'Test'
        },
        {
          ID: '3',
          name: 'What if it is a test'
        }
      ]);
  });

  it('reverse array by parameter', () => {
    const data = [
      {
        ID: '1',
        name: 'Test'
      },
      {
        ID: '2',
        name: 'Not a test'
      },
      {
        ID: '3',
        name: 'What if it is a test'
      }
    ];

    expect(pipe.transform(data, true, 'name'))
      .toEqual([
        {
          ID: '1',
          name: 'Test'
        },
        {
          ID: '3',
          name: 'What if it is a test'
        },
        {
          ID: '2',
          name: 'Not a test'
        }
      ]);
  });
});
