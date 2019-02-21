import { shallowMount } from '@vue/test-utils';
import Col from './Col.vue';

describe('packages/Col', () => {
  it('renders its content', () => {
    const slotContent = '<span>foo</span>';
    const { element } = shallowMount(Col, {
      slots: {
        default: slotContent,
      },
    });
    expect(element.innerHTML).toContain(slotContent);
  });
});
