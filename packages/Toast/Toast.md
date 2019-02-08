## Toast

### Install

```js
import { Button } from 'vant';

Vue.use(Button);
```

### Usage

#### Type

```pug
az-button(type="primary") Primary
az-button(type="danger") Danger
az-button(type="default") Default
az-button(type="warning") Warning
```

#### Plain

```pug
az-button(plain type="primary") Primary
az-button(plain type="danger") Danger
```

#### Disabled

```pug
az-button(disabled type="primary") Diabled
az-button(disabled type="danger") Diabled
```

#### Loading

```pug
az-button(loading type="primary")
```

#### Shape

```pug
az-button(square type="primary") Square
az-button(round type="danger") Round
```

#### Size

```pug
az-button(size="large") Large
az-button(size="normal") Normal
az-button(size="small") Small
az-button(size="mini") Mini
```

### API

| Attribute   | Description                                | Type      | Default   |
| ----------- | ------------------------------------------ | --------- | --------- |
| type        | Can be set to `primary` `warning` `danger` | `String`  | `default` |
| size        | Can be set to `large` `small` `mini`       | `String`  | `normal`  |
| text        | Text                                       | `String`  | -         |
| tag         | Tag                                        | `String`  | `button`  |
| native-type | Native Type Attribute                      | `String`  | `''`      |
| plain       | Whether to be plain button                 | `Boolean` | `false`   |
| disabled    | Whether to disable button                  | `Boolean` | `false`   |
| loading     | Whether show loading status                | `Boolean` | `false`   |
| block       | Whether to set display block               | `Boolean` | `false`   |
| round       | Whether to be round button                 | `Boolean` | `false`   |
| square      | Whether to be square button                | `Boolean` | `false`   |

### Event

| Event | Description                                             | Arguments |
| ----- | ------------------------------------------------------- | --------- |
| click | Triggered when click button and not disabled or loading | -         |
