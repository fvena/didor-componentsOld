import Vue from 'vue';
import Button from './Button/Button.vue';
import Col from './Col/Col.vue';
import Container from './Container/Container.vue';
import Input from './Input/Input.vue';
import Loading from './Loading/Loading.vue';
import Row from './Row/Row.vue';

const Components = {
  Button,
  Col,
  Container,
  Input,
  Loading,
  Row,
};

Object.keys(Components).forEach((name) => {
  Vue.component(name, Components[name]);
});
