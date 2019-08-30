---
device: true
---

# Input

### Instalación

```javascript
import { Input } from 'didor';

Vue.use(Input);
```

---

### Uso

#### Uso básico

El valor del input se obtine con `v-model`.

``` html
<az-fieldset>
  <az-input v-model="name" placeholder="Nombre del usuario"/>
</az-fieldset>
```

#### Input personalizado

Utiliza la propiedad `type` para definir los diferentes tipos de input.

``` html
<az-fieldset>
  <az-input
    v-model="username"
    required
    clearable
    label="Username"
    right-icon="info"
    placeholder="Username"
    @click-right-icon="callMethod"
  />

  <az-input
    v-model="password"
    type="password"
    label="Password"
    placeholder="Password"
    required
  />
</az-fieldset>
```

#### Desactivado

``` html
<az-fieldset>
  <az-input
    v-model="username"
    label="Username"
    left-icon="contact"
    placeholder="Username"
    disabled
  />
</az-fieldset>
```

#### Errores

``` html
<az-fieldset>
  <az-input
    v-model="username"
    label="Username"
    placeholder="Username"
    error
  />

  <az-input
    v-model="phone"
    label="Teléfono"
    placeholder="Teléfono"
    error-message="Teléfono no válido"
  />
</az-fieldset>
```

#### Auto resize

Cuando el tipo de input es un textarea, puedes configurar la propiedad `autosize` para que el campo se adapte al tamaño de su contenido.

``` html
<az-fieldset>
  <az-input
    v-model="message"
    label="Mensaje"
    placeholder="Mensaje"
    type="textarea"
    rows="3"
    autosize
  />
</az-fieldset>
```

#### Atributos html

Puedes utilizar los atributos HTML para controlar el máximo de caracteres o los valores máximo o mínimo en un campo del tipo número:

`autocomplete` `autofocus` `maxlength` `min` `max` `step` ...

``` html
<az-fieldset>
  <az-input
    v-model="username"
    label="Username"
    placeholder="Username"
    maxlength="5"
    autocomplete="false"
    clearable
    autofocus
  />

  <az-input
    v-model="value"
    label="Valor"
    type="number"
    placeholder="Valor"
    max="10"
    min="0"
    step="2"
  />
</az-fieldset>
```

#### Uso de slots

``` html
<az-fieldset>
  <az-input
    v-mode="username"
    placeholder="username"
  >
    <template v-slot:label>
      <h4>Label slot</h4>
    </template>

    <template v-slot:rightIcon>
      <az-icon type="brand">Guardar</az-icon>
    </template>
  </az-input>
</az-fieldset>
```

---

### API

| Attribute   | Description                                | Type      | Default   |
| ----------- | ------------------------------------------ | --------- | --------- |
| v-model | Valor del campo | `String` `Number` | -- |
| label | Título del campo | `String` | -- |
| type | Tipo de campo<br>`text` `number` `email` `tel` `password` `textarea` | `String` | `text` |
| placeholder | Placeholder del campo | `String` | -- |
| disabled | Campo desactivado | `Boolean` | `false` |
| readonly | Campo solo lectura | `Boolean` | `false` |
| required | Campo obligatorio | `Boolean` | `false` |
| clearable | Permite limpiar el valor del campo | `Boolean` | `false` |
| autosize | Permite que el campo se adapte al tamaño de su contenido, solo en los tipos textarea | `Boolean` | `false` |
| error | Campo con un error | `Boolean` | `false` |
| error-message | Mensaje de error | `String` | --  |
| info-message | Mensaje de información | `String` | --  |
| rows | Indica la altura del campo en filas cuando elegimos el tipo textarea | `String` `Number` | `90px` |
| label-width | Anchura de la etiqueta | `String` | `90px` |
| label-align | Alineación del texto de la etiqueta<br>`left` `center` `right` | `String` | `left` |
| input-align | Alineación del texto del input<br>`left` `center` `right` | `String` | `left` |
| error-align | Alineación del texto del mensaje de error<br>`left` `center` `right` | `String` | `left` |
| info-align | Alineación del texto de información<br>`left``center` `right` | String | `left` |
| left-icon | Icono del lado izquierdo | `String` | -- |
| right-icon | Icono del lado derecho | `String` | -- |

### Eventos

| Evento | Descripción                                             | Argumento |
| ------ | ------------------------------------------------------- | --------- |
| input | Se lanza cuando cambia el valor del input | -         |
| focus | Se lanza el campo recibe el foco | -         |
| blur | Se lanza cuando el campo pierde el foco | -         |
| clear | Se lanza cuando se limpia el campo con el botón | -         |
| click-left-icon | Se lanza cuando se pulsa sobre el icono izquierdo | -         |
| click-right-icon | Se lanza cuando se pulsa sobre el icono derecho | -         |

### Slots

| Nombre | Descripción                                             |
| ------ | ------------------------------------------------------- |
| label | Título del campo |
| left-icon | Botón izquierdo |
| right-icon | Botón derecho |
| error-message | Mensaje de error |
| info-message | Mensaje de información |
