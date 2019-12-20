---
device: true
---

# Fieldset

### Instalación

```javascript
import { Fieldset } from 'didor';

Vue.use(Fieldset);
```

---

### Uso

#### Uso básico

``` html
<az-fieldset title="Datos de usuario">
  <az-input v-model="name" label="Nombre" placeholder="Nombre"/>
  <az-input v-model="lastName" label="Apellidos" placeholder="Apellidos"/>
  <az-input v-model="email" label="Email" placeholder="Email"/>
</az-fieldset>
```

#### Uso de slots

``` html
<az-fieldset>
  <template v-slot:title>
    <h4>Slot título</h4>
  </template>

  <az-input v-model="name" label="Nombre" placeholder="Nombre"/>
  <az-input v-model="lastName" label="Apellidos" placeholder="Apellidos"/>
  <az-input v-model="email" label="Email" placeholder="Email"/>
</az-fieldset>
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
