// colors
const colors = {
  mono1: 'hsl(230, 8%, 24%)',   // Основной текст
  mono2: 'hsl(230, 6%, 44%)',   // Вторичный текст
  mono3: 'hsl(230, 4%, 64%)',   // Приглушённый текст (комментарии)

  // Акцентные цвета
  hue1: 'hsl(198, 99%, 37%)',   // Голубой (URL, ссылки)
  hue2: 'hsl(221, 87%, 60%)',   // Синий (функции, переменные, операторы)
  hue3: 'hsl(301, 63%, 40%)',   // Фиолетовый (ключевые слова)
  hue4: 'hsl(119, 34%, 47%)',   // Зелёный (строки, селекторы)
  hue5: 'hsl(189, 100%, 40%)',     // Красный (теги, свойства, важное)
  hue52: 'hsl(344, 84%, 43%)',  // Тёмно-красный (интерполяция)
  hue6: 'hsl(35, 99%, 36%)',    // Оранжевый (числа, константы)

  // Фон и служебные
  background: 'hsl(230, 1%, 98%)',
  selection: 'hsl(230, 1%, 90%)',
  gutter: 'hsl(230, 1%, 62%)',      // Номера строк
  guide: 'hsla(230, 8%, 24%, 0.2)', // Направляющие линии
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