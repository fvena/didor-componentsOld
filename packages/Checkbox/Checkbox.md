---
device: true
---

# Fieldset

### Instalación

```javascript
import { Checkbox } from 'didor';

Vue.use(Checkbox);
```

---

### Uso

#### Uso básico

``` html
<az-checkbox v-model="checked">Checkbox</az-checkbox>
```

#### Desactivado

``` html
<az-checkbox v-model="checked" disabled>Checkbox</az-checkbox>
<az-checkbox v-model="checked" disabled>Checkbox</az-checkbox>
```

#### Grupos

Cuando varios checkbox están dentro de un grupo, el valor del grupo es un array con los `value` de cada checkbox.

``` html
<az-checkbox-group v-model="sports">
  <az-checkbox value="swimming">Natación</az-checkbox>
  <az-checkbox value="cycling">Ciclismo</az-checkbox>
  <az-checkbox value="running">Carrera</az-checkbox>
</az-checkbox-group>
```

Puedes generar un listado de checkbox con un array de valores:

``` html
<az-checkbox-group v-model="result">
  <az-checkbox
    v-for="(item, index) in sports"
    :key="index"
    :value="item">
      {{ item }
  </az-checkbox>
</az-checkbox-group>
```

``` js
export default {
  data() {
    return {
      sports: ['swimming', 'cycling', 'running'],
      result: ['cycling'],
    };
  },
};
```

#### Máximo número de checkbox seleccionados

Cuando varios checkbox están dentro de un grupo, el valor del grupo es un array con los `value` de cada checkbox.

``` html
<az-checkbox-group v-model="sports" max="2">
  <az-checkbox value="swimming">Natación</az-checkbox>
  <az-checkbox value="cycling">Ciclismo</az-checkbox>
  <az-checkbox value="running">Carrera</az-checkbox>
</az-checkbox-group>
```

#### Modo celda

Modifica su visualización para verse como dentro de una celda

``` html
<az-checkbox-group v-model="sports" cell>
  <az-checkbox value="swimming">Natación</az-checkbox>
  <az-checkbox value="cycling">Ciclismo</az-checkbox>
  <az-checkbox value="running">Carrera</az-checkbox>
</az-checkbox-group>
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
