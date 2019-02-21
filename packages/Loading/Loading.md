---
device: true
---

# Loading

### Instalación

```javascript
import { Loading } from 'didor';

Vue.use(Loading);
```

---

### Uso

#### Tipo

```pug
az-loading
az-loading(type="circle")
az-loading(type="bars")
az-loading(type="blobs")
az-loading(type="square")
```

#### Color

```pug
az-loading(color="var(--color-danger)")
az-loading(color="var(--color-success)")
```

#### Size

```pug
az-loading(size="10px")
az-loading(size="20px")
az-loading(size="30px")
az-loading(size="40px")
```

---

### API

| Attribute   | Description                                | Type      | Default   |
| ----------- | ------------------------------------------ | --------- | --------- |
| type        | Tipo de loading, opciones:<br>`star` `circle` `success` `bars` `blobs` `square` | `String`  | `star` |
| color       | Determinar el color del spinner. Acepta:<br> `variales css` `hexadecimal` `nombre`           | `String` | `var(--color-brand)`   |
| size        | Determinar el tamaño del spinner. Acepta valores en:<br>`px` `rem` `em`             | `String` | `1rem`    |
