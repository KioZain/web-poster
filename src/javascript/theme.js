// colors
const colors = {
  // Нейтральные (на основе #4E4E4B с тёплым оттенком)
  mono1: 'hsl(60, 5%, 22%)',   // Основной текст — #3a3a35 — 11.28:1
  mono2: 'hsl(60, 4%, 38%)',   // Вторичный текст — #64645d — 5.90:1
  mono3: 'hsl(60, 3%, 45%)',   // Комментарии — #76766f — 4.56:1

  // Акцентные (адаптация фирменных цветов)
  hue1: 'hsl(191, 70%, 33%)',  // Глубокий циан → URL, ссылки — #19798f — 5.00:1
  hue2: 'hsl(205, 55%, 40%)',  // Сине-циан → функции, переменные — #2d6f9e — 5.39:1
  hue3: 'hsl(315, 45%, 40%)',  // Приглушённый розовый → ключевые слова — #93387c — 6.73:1
  hue4: 'hsl(100, 45%, 35%)',  // Зелёный → строки, селекторы — #4b8131 — 4.65:1
  hue5: 'hsl(191, 80%, 30%)',  // Тёмный циан → теги, свойства — #0f7389 — 5.45:1
  hue52: 'hsl(13, 65%, 40%)',  // Приглушённый красный → интерполяция — #a84023 — 6.11:1
  hue6: 'hsl(25, 65%, 40%)',   // Тёплый оранжевый → числа, константы — #a85a23 — 5.01:1

  // Фон и служебные
  background: 'hsl(60, 3%, 98%)',       // Чуть тёплый белый
  selection: 'hsl(191, 15%, 90%)',       // Лёгкий циановый оттенок при выделении
  gutter: 'hsl(60, 3%, 58%)',           // Номера строк
  guide: 'hsla(60, 5%, 22%, 0.15)',     // Направляющие линии
}
// css
const themeStyles = `

  /* === Комментарии === */
  .token.comment,
  .token.prolog,
  .token.cdata {
    color: ${colors.mono3};
    // font-style: italic;
  }

  /* === Пунктуация и сущности === */
  .token.doctype,
  .token.punctuation,
  .token.entity {
    color: ${colors.mono1};
  }

  /* === Числа, константы, булевы значения === */
  .token.attr-name,
  .token.class-name,
  .token.boolean,
  .token.constant,
  .token.number,
  .token.atrule {
    color: ${colors.hue6};
  }

  /* === Ключевые слова === */
  .token.keyword {
    color: ${colors.hue3};
  }

  /* === Теги, свойства, важное === */
  .token.property,
  .token.tag,
  .token.symbol,
  .token.deleted,
  .token.important {
    color: ${colors.hue5};
  }

  /* === Строки, селекторы === */
  .token.selector,
  .token.string,
  .token.char,
  .token.builtin,
  .token.inserted,
  .token.regex,
  .token.attr-value,
  .token.attr-value > .token.punctuation {
    color: ${colors.hue4};
  }

  /* === Функции, переменные, операторы === */
  .token.variable,
  .token.operator,
  .token.function {
    color: ${colors.hue2};
  }

  /* === URL === */
  .token.url {
    color: ${colors.hue1};
  }

  /* === CSS переопределения === */
  .language-css .token.selector {
    color: ${colors.hue5};
  }

  .language-css .token.property {
    color: ${colors.mono1};
  }

  .language-css .token.function,
  .language-css .token.url > .token.function {
    color: ${colors.hue1};
  }

  .language-css .token.url > .token.string.url {
    color: ${colors.hue4};
  }

  .language-css .token.important,
  .language-css .token.atrule .token.rule {
    color: ${colors.hue3};
  }

  /* === JavaScript переопределения === */
  .language-javascript .token.operator {
    color: ${colors.hue3};
  }

  .language-javascript .token.template-string > .token.interpolation > .token.interpolation-punctuation.punctuation {
    color: ${colors.hue52};
  }

  /* === JSON переопределения === */
  .language-json .token.operator {
    color: ${colors.mono1};
  }

  .language-json .token.null.keyword {
    color: ${colors.hue6};
  }

  /* === HTML переопределения === */
  .token.attr-value > .token.punctuation.attr-equals,
  .token.special-attr > .token.attr-value > .token.value.css {
    color: ${colors.mono1};
  }

  /* === Жирный и курсив === */
  .token.bold {
    font-weight: bold;
  }

  .token.italic {
    font-style: italic;
  }

  .token.entity {
    cursor: help;
  }

  .token.namespace {
    opacity: 0.8;
  }
`

export function theme() {
  const styleElement = document.createElement('style')
  styleElement.id = 'code-theme'
  styleElement.textContent = themeStyles
  document.head.appendChild(styleElement)
}

export { colors as themeColors }