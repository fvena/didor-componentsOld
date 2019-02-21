import { shallowMount } from '@vue/test-utils';
import Row from './Row.vue';

describe('packages/Row', () => {
  it('renders its content', () => {
    const slotContent = '<span>foo</span>';
    const { element } = shallowMount(Row, {
      slots: {
        default: slotContent,
      },
    });
    expect(element.innerHTML).toContain(slotContent);
  });
});
