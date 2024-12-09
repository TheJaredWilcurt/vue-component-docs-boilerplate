import YourLibraryButton from '@/components/YourLibraryButton.vue';

import testHelpers from '@@/unit/testHelpers.js';

describe('YourLibraryButton.vue', () => {
  // Props
  const active = true;
  const status = 'success';
  const requiredProps = {};

  const setupWrapper = async (props) => {
    const options = {
      props: {
        ...requiredProps,
        ...props
      },
      slots: {
        default: 'Button Text'
      }
    };
    const wrapper = await testHelpers.mount(YourLibraryButton, options);
    return wrapper;
  };

  test('Renders correctly', async () => {
    const wrapper = await setupWrapper();

    expect(wrapper)
      .toMatchSnapshot();
  });

  describe('Props', () => {
    test('Button is active', async () => {
      const wrapper = await setupWrapper({ active });

      expect(wrapper)
        .toMatchSnapshot();
    });

    test('Button status is set', async () => {
      const wrapper = await setupWrapper({ status });

      expect(wrapper)
        .toMatchSnapshot();
    });
  });

  describe('Emits', () => {
    test('Emits click event', async () => {
      const wrapper = await setupWrapper();

      const button = wrapper.find('[data-test="button"]');
      await button.trigger('click');

      expect(wrapper.emitted().click[0].length)
        .toEqual(1);
    });
  });
});
