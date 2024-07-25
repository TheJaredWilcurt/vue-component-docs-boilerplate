import library from '@/library.js';

describe('Library export', () => {
  test('Exports Vue install function', () => {
    const vueAppMock = {
      component: vi.fn()
    };

    library.install(vueAppMock);

    expect(vueAppMock.component)
      .toHaveBeenCalled();
  });
});
