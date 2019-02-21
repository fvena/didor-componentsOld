import { shallowMount } from '@vue/test-utils';
import Button from './Button.vue';

describe('packages/Button', () => {
  it('renders its content', () => {
    const slotContent = '<span>foo</span>';
    const { element } = shallowMount(Button, {
      slots: {
        default: slotContent,
      },
    });
    expect(element.innerHTML).toContain(slotContent);
  });
});
