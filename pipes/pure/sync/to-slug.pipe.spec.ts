import { ToSlugPipe } from './to-slug.pipe';

describe('ToSlug.Pipe', () => {
  it('create an instance', () => {
    const pipe = new ToSlugPipe();
    expect(pipe).toBeTruthy();
  });
});
