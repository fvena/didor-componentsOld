import Vue from 'vue';
import Button from './Button/Button.vue';
import Checkbox from './Checkbox/Checkbox.vue';
import CheckboxGroup from './CheckboxGroup/CheckboxGroup.vue';
import Col from './Col/Col.vue';
import Container from './Container/Container.vue';
import Feedback from './Feedback/Feedback.vue';
import Fieldset from './Fieldset/Fieldset.vue';
import Input from './Input/Input.vue';
import Loading from './Loading/Loading.vue';
import Row from './Row/Row.vue';

const Components = {
  Button,
  Checkbox,
  CheckboxGroup,
  Col,
  Container,
  Feedback,
  Fieldset,
  Input,
  Loading,
  Row,
};

const prefix = 'Az';

Object.keys(Components).forEach((name) => {
  const componentName = `${prefix}${name}`;
  Vue.component(componentName, Components[name]);
});

export default Components;
