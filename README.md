# vue-data-tooltip

## Установка

```
npm i vue-data-tooltip
```

Далее, если у вас Nuxt, то в вашем шаблоне, например `default.vue` импортируем плагин:

```
import VueDataTooltip from "vue-data-tooltip"
Vue.use(VueDataTooltip)
```

Также в `Vue.use(VueDataTooltip)` вы можете передать id элемента в котором рендерится сайт, если же он указан не будет, то плагин по умолчанию использует `app`:

```
Vue.use(VueDataTooltip, "myID")
```

Если у вас Vue, тогда в main.js/main.ts аналогичные действия.

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
        tooltipText: "Какой-то текст",
    }
}
```
