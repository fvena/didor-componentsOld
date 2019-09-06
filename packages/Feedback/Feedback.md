---
device: true
---

# Feedback Loader

### Instalación

```javascript
import { Feedback } from 'didor';

Vue.use(Feedback);
```

---

### Uso

#### Uso básico

``` html
<az-feedback :isLoading="isLoading" :isSuccess="isSuccess" :isError="isError">
```

#### Uso escalas

``` html
<az-feedback :scale=1>
```

---

### API

| Attribute   | Description                                | Type      | Default   |
| ----------- | ------------------------------------------ | --------- | --------- |
| isLoading   | Cambia al estado loading                   | `Boolean` | `false`   |
| isSuccess   | Cambia al estado correcto                  | `Boolean` | `false`   |
| isError     | Cambia al estado error                     | `Boolean` | `false`   |
| scale       | Cambia la escala                           | `Integer` | 0.5       |
