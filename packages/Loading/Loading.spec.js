import { shallowMount } from '@vue/test-utils';
import Loading from './Loading.vue';

describe('packages/Loading', () => {
  it('renders it', () => {
    const { element } = shallowMount(Loading, {});
    expect(element.classList).toContain('az-loading');
  });
});
