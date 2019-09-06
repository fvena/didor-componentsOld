---
device: true
---

# Cell Group

### Instalación

```javascript
import { CellGroup } from 'didor';

Vue.use(CellGroup);
```

---

### Uso

#### Uso básico

``` html
<az-cell-group title="Datos de usuario">
  <az-cell title="Cell title" value="Content"/>
  <az-cell title="Cell title" value="Content" label="Description"/>
</az-cell-group>
```

#### Uso de slots

``` html
<az-cell-group>
  <template v-slot:title>
    <h4>Slot título</h4>
  </template>

  <az-cell title="Cell title" value="Content"/>
  <az-cell title="Cell title" value="Content" label="Description"/>
</az-cell-group>
```

---

### API

| Attribute   | Description                                | Type      | Default   |
| ----------- | ------------------------------------------ | --------- | --------- |
| title | Título del grupo | `String` | -- |

### Slots

| Nombre | Descripción                                             |
| ------ | ------------------------------------------------------- |
| title | Título del grupo |
