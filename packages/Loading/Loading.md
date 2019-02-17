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

El tamaño del componente `Loading` depende directamente de su tamaño de fuente:

```pug
az-loading(style="font-size: 10px")
az-loading(style="font-size: 20px")
az-loading(style="font-size: 30px")
az-loading(style="font-size: 40px")
```
