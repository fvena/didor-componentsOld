import Vue from 'vue';
import Avatar from './Avatar/Avatar.vue';
import Button from './Button/Button.vue';
import Cell from './Cell/Cell.vue';
import CellGroup from './CellGroup/CellGroup.vue';
import Checkbox from './Checkbox/Checkbox.vue';
import CheckboxGroup from './CheckboxGroup/CheckboxGroup.vue';
import Col from './Col/Col.vue';
import Container from './Container/Container.vue';
import Feedback from './Feedback/Feedback.vue';
import Fieldset from './Fieldset/Fieldset.vue';
import Input from './Input/Input.vue';
import Loading from './Loading/Loading.vue';
import Row from './Row/Row.vue';
import Switch from './Switch/Switch.vue';
import TabBar from './TabBar/TabBar.vue';
import TabBarItem from './TabBarItem/TabBarItem.vue';

const Components = {
  Avatar,
  Button,
  Cell,
  CellGroup,
  Checkbox,
  CheckboxGroup,
  Col,
  Container,
  Feedback,
  Fieldset,
  Input,
  Loading,
  Row,
  Switch,
  TabBar,
  TabBarItem,
};

const prefix = 'Az';

Object.keys(Components).forEach((name) => {
  const componentName = `${prefix}${name}`;
  Vue.component(componentName, Components[name]);
});

export default Components;
