# React Tailwind Components

## IconButton

### Ejemplo

```js
<IconButton size="lg">
  <div className="h-6 w-6 rounded-full bg-gray-700"></div>
</IconButton>
```

### Props

| Prop name | Type                     | Default | Description                     |
| --------- | ------------------------ | ------- | ------------------------------- |
| size      | `"sm"` o `"md"` o `"lg"` | `"md"`  | Define el tamaño del iconButton |

## InputAdornment

### Ejemplo

```js
<InputForm
  leftAdornment={<InputAdornment position="left">...</InputAdornment>}
/>
```

### Props

| Prop name | Type                 | Default   | Description                                           |
| --------- | -------------------- | --------- | ----------------------------------------------------- |
| position  | `"left"` o `"right"` | `"right"` | Define la posicion del elemento con respecto al input |

## InputBase

### Ejemplo

```js
<InputBase
  size="lg"
  status="error"
  fullWidth
  paddingLeft="lg"
  paddingRight="lg"
/>
```

### Props

| Prop name    | Type                                 | Default   | Description                                                                                                                      |
| ------------ | ------------------------------------ | --------- | -------------------------------------------------------------------------------------------------------------------------------- |
| size         | `"sm"` o `"md"` o `"lg"`             | `"md"`    | Define el tamaño del input                                                                                                       |
| status       | `"default"` o `"error"` o `"succes"` | default   | Define el color del input                                                                                                        |
| fullWidth    | boolean                              | false     | Si es true el input ocupará todo el ancho disponible                                                                             |
| paddingLeft  | `"sm"` o `"md"` o `"lg"` o `null`    | undefined | Define el padding el en el lado derecho del input, los valores por defecto para cada unidad son: `sm=32px`, `md=36px`, `lg=44px` |
| paddingRight | `"sm"` o `"md"` o `"lg"` o `null`    | undefined | Lo mismo que para `paddingLeft` pero para el lado derecho                                                                        |

## InputForm

### Ejemplo

```js
import { User2, XCircle } from 'lucide-react';
...
<InputForm
  label="Input sm"
  placeholder="Input sm"
  supportingText="supporting text"
  id="input-sm"
  size="sm"
  leftAdornment={
    <InputAdornment position="left">
      <User2 className="h-3.5 w-3.5" />
    </InputAdornment>
  }
  rightAdornment={
    <InputAdornment>
      <IconButton size="sm">
        <XCircle className="h-3.5 w-3.5" />
      </IconButton>
    </InputAdornment>
  }
/>
```

### Props

| Prop name      | Type                                 | Default   | Description                                                                                                                                                          |
| -------------- | ------------------------------------ | --------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| size           | `"sm"` o `"md"` o `"lg"`             | `"md"`    | Define el tamaño del input                                                                                                                                           |
| status         | `"default"` o `"error"` o `"succes"` | default   | Define el color del input                                                                                                                                            |
| fullWidth      | boolean                              | false     | Si es true el input ocupará todo el ancho disponible                                                                                                                 |
| leftAdornment  | component                            | undefined | Elemento que se posicionará en la parte izquierda del input. Se debe utilizar el componente `InputAdornament` para envolver todo el contenido que se quiera utilizar |
| rightAdornment | component                            | undefined | Igual que `leftElement`, pero que se poscionará al lado derecho del input                                                                                            |
| label          | string                               | undefined | Label del input                                                                                                                                                      |
| supportingText | string                               | undefined | Texto que aparece en la parte inferior del input para proporcionar informacion al usario por ejemplo un mensaje de error                                             |

## Button

### Ejemplo

```js
import { Plus } from 'lucide-react';
...
<Button
  size="xs"
  variant="outlined"
  color="secondary"
  leftIcon={<Plus className="h-3.5 w-3.5" />}
  rightIcon={<Plus className="h-3.5 w-3.5" />}
>
  button xs
</Button>
```

### Props

| Prop name | Type                                                               | Default     | Description                                                          |
| --------- | ------------------------------------------------------------------ | ----------- | -------------------------------------------------------------------- |
| size      | `"xs"` o `"sm"` o `"md"` o `"lg"` o `"xl"`                         | `"md"`      | Define el tamaño del input                                           |
| color     | `"primary"` o `"secondary"` o `"success"` o `"danger"` o `"error"` | `"primary"` | Define el tamaño del input                                           |
| variant   | `"filled"` o `"outlined"`                                          | default     | Define el color del input                                            |
| leftIcon  | component                                                          | undefined   | Icono del lado que se posicionará al lado izquierdo dentro del boton |
| leftIcon  | component                                                          | undefined   | Icono del lado que se posicionará al lado izquierdo dentro del boton |
