import { shallowMount } from '@vue/test-utils';
import Icon from './Icon.vue';

describe('packages/Icon', () => {
  it('renders a icon', () => {
    const { element } = shallowMount(Icon, {
      props: {
        name: 'build1',
      },
    });
    expect(element.tagName).toEqual('svg');
    expect(element.classList).toContain('az-icon', 'az-icon--build1');
  });
});
