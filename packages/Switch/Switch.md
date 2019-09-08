---
device: true
---

# Switch

### Instalación

```javascript
import { Switch } from 'didor';

Vue.use(Switch);
```

---

### Uso

#### Uso básico

``` html
<az-switch v-model="checked"/>
```

#### Desactivado

``` html
<az-switch v-model="checked" disabled/>
```

#### Tamaño

``` html
<az-switch v-model="checked" size="large" disabled/>
<az-switch v-model="checked" disabled/>
<az-switch v-model="checked" size="small" disabled/>
```

#### Color personalizado

``` html
<az-switch v-model="checked" active-color="var(--color-success)" inactive-color="var(--color-danger)" />
```

#### Modo celda

``` html
<az-cell title="title">
  <az-switch v-model="checked"/>
</az-cell>
```

#### Control asíncrono

``` html
<az-switch :value="checked" @input="onInput" :disabled="loading"/>
<az-loading type="bars" v-if="loading"/>
```

``` js
export default {
  data() {
    return {
      checked: true,
      loading: false,
    };
  },

  methods: {
    async onInput(checked) {
      this.loading = true;

      await callService();

      this.loading = false;
      this.checked = checked;
    }
  }
};
```


---

### API

| Attribute   | Description                                | Type      | Default   |
| ----------- | ------------------------------------------ | --------- | --------- |
| v-model | Indica el estado del switch | `any` | `false` |
| disabled | Deshabilita el switch | `boolean` | `false` |
| size | Tamaño del switch<br>`small` `large` | `String` | -- |
| active-color | Color de fondo cuando está activo | `String` | `var(--color-brand)` |
| inactiveColor | Color de fondo cuando está inactivo | `String` | `var(--color-gray7)` |
| active-value | Valor del switch cuando está activo | `any` | `false` |
| inactive-value | Valor del switch cuando está desactivado | `any` | `false` |

### Eventos

| Evento | Descripción                                             | Argumento |
| ------ | ------------------------------------------------------- | --------- |
| change | Se lanza cuando cambia el valor del switch | -         |
