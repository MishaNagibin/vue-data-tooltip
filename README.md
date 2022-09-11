# vue-data-tooltip

## Установка

```
npm i vue-data-tooltip
```

Далее, если у вас Nuxt, то в вашем шаблоне, например `default.vue` импортируем плагин:

```
import VueDataTooltip from "vue-data-tooltip"

...

mounted() {
    Vue.use(VueDataTooltip)
}
```

Если у вас Vue, тогда в `App.vue` аналогичные действия.

Если будет ругаться на декларацию, тогда в `vue-shim.d.ts` добавить:

```
declare module "vue-data-tooltip";
```

### Использование

Добавляем на `html` элемент атрибут `data-tooltip` и передаем значение, которое хотим видеть в качестве тултипа.

Например:

```html
<div data-tooltip="Смотри текст в тултипе">Наведи на меня</div>
```

Или

```html
<div :data-tooltip="tooltipText">Наведи на меня</div>

...

data() { 
    return { 
        tooltipText: "Какой-то текст"
    }
}
```

### options

| name | value | description | default |
| ---- | ----- | ----------- | ------- |
| name | string | название элемента, в который будет чилдиться тултип | app &#124; div |
| isElementClass | boolean | признак, обозначающий что чилдить тултип надо в элемент по названию класса (Не совместим с isElementTag: true) | false |
| isElementTag | boolean | признак, обозначающий что чилдить тултип надо в элемент по названию тэга (Не совместим с isElementClass: true) | false |
| transitionDuration | number | скорость появления тултипа, в секундах | 0.3 |
| styles | object | стили тултипа | подробнее в таблице ниже |

### options.styles

| name | value | default |
| ---- | ----- | ------- |
| backgroundColor | string | #596175 |
| borderRadius | string | 5px |
| maxWidth | string | 259px |
| color | string | #ffffff |
| padding | string | 8px 10px |
| fontWeight | string | 600 |
| fontSize | string | 13px |
| fontFamily | string | Montserrat,sans-serif |
| lineHeight | string | 16px |
| textAlign | string | center |

## Пример использования options


### name:
```
<div id="my-app"></div>

...

Vue.use(VueDataTooltip, { name: "my-app" })
```


### isElementClass:
```
<div class="my-app"></div>

...

Vue.use(VueDataTooltip, { name: "my-app", isElementClass: true })
```

### isElementTag:
```
<main></main>

...

Vue.use(VueDataTooltip, { name: "main", isElementTag: true })
```

### transitionDuration:
```
<div id="app"></div>

...

Vue.use(VueDataTooltip, { transitionDuration: 1 })
```

### styles:
```
<div id="app"></div>

...

Vue.use(VueDataTooltip, { styles: { backgroundColor: "red", borderRadius: "10px", maxWidth: "300px", color: "black", padding: "5px", fontWeight: "bold", fontSize: "18px", fontFamily: "Times New Roman", lineHeight: "20px", textAlign: "start" } })
```