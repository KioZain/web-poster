// src/javascript/code-highlight.js

import Prism from 'prismjs'
import 'prismjs/components/prism-css'
import 'prismjs/components/prism-javascript'

import { trimcode } from './trimcode.js'
// ================================
// НАСТРОЙКИ КАСТОМНОЙ ТЕМЫ
// ================================
// Измени эти цвета под свой дизайн

const theme = {
  // Фон и текст
  background: '#FCFCFC',
  text: '#d4d4d4',

  // Комментарии
  comment: '#6a9955',

  // Строки и значения
  string: '#ce9178',
  number: '#b5cea8',

  // Ключевые слова (const, let, if, function...)
  keyword: '#569cd6',

  // Функции и методы
  function: '#dcdcaa',

  // Операторы (=, +, -, >, <...)
  operator: '#d4d4d4',

  // Пунктуация ({, }, (, ), ;, :...)
  punctuation: '#d4d4d4',

  // CSS: селекторы (.class, #id, tag)
  selector: '#d7ba7d',

  // CSS: свойства (color, width, margin...)
  property: '#9cdcfe',

  // CSS: значения свойств
  value: '#ce9178',

  // HTML: теги
  tag: '#569cd6',

  // HTML: названия атрибутов
  attrName: '#9cdcfe',

  // HTML: значения атрибутов
  attrValue: '#ce9178',

  // Нумерация строк
  lineNumbers: '#858585',
}

/**
 * Применяет кастомную тему через CSS-переменные
 */
function applyTheme() {
  const style = document.createElement('style')
  style.textContent = `
    /* Базовые стили блока кода */
    .A_CodeBlock {
      background: ${theme.background};
      color: ${theme.text};
    }
    
    .A_CodeBlock code {
      color: ${theme.text};
    }
    
    /* Нумерация строк */
    .A_LineNumbers {
      color: ${theme.lineNumbers};
    }
    
    /* === Prism токены === */
    
    /* Комментарии */
    .token.comment,
    .token.prolog,
    .token.doctype,
    .token.cdata {
      color: ${theme.comment};
    }
    
    /* Пунктуация */
    .token.punctuation {
      color: ${theme.punctuation};
    }
    
    /* Теги, булевы значения, числа */
    .token.tag,
    .token.boolean,
    .token.constant,
    .token.symbol,
    .token.deleted {
      color: ${theme.tag};
    }
    
    .token.number {
      color: ${theme.number};
    }
    
    /* Селекторы, строки, атрибуты */
    .token.selector,
    .token.char,
    .token.builtin,
    .token.inserted {
      color: ${theme.selector};
    }
    
    .token.string,
    .token.attr-value {
      color: ${theme.string};
    }
    
    /* Операторы */
    .token.operator,
    .token.entity,
    .token.url {
      color: ${theme.operator};
    }
    
    /* Ключевые слова */
    .token.atrule,
    .token.keyword {
      color: ${theme.keyword};
    }
    
    /* CSS свойства */
    .token.property {
      color: ${theme.property};
    }
    
    /* Функции */
    .token.function,
    .token.class-name {
      color: ${theme.function};
    }
    
    /* HTML атрибуты */
    .token.attr-name {
      color: ${theme.attrName};
    }
    
    /* Regex и важные элементы */
    .token.regex,
    .token.important,
    .token.variable {
      color: ${theme.value};
    }
  `
  document.head.appendChild(style)
}

/**
 * Генерирует нумерацию строк для блока кода
 */
function addLineNumbers(codeArea) {
  const codeBlock = codeArea.querySelector('.A_CodeBlock code')
  const lineNumbersContainer = codeArea.querySelector('.A_LineNumbers')

  if (!codeBlock || !lineNumbersContainer) return

  // Считаем количество строк
  const code = codeBlock.textContent
  const lineCount = code.split('\n').length

  // Генерируем номера строк
  const numbers = []
  for (let i = 1; i <= lineCount; i++) {
    numbers.push(`<span>${i}</span>`)
  }

  lineNumbersContainer.innerHTML = numbers.join('')
}

/**
 * Инициализирует подсветку синтаксиса
 */
function initHighlight() {
  const codeBlocks = document.querySelectorAll('.A_CodeBlock code')

  codeBlocks.forEach(codeElement => {
    const rawCode = codeElement.textContent
    console.log('=== ДО trimIndent ===')
    console.log(JSON.stringify(rawCode))
    // Сначала убираем лишние отступы

    const cleanCode = trimcode(rawCode)

    console.log('=== ПОСЛЕ trimIndent ===')
    console.log(JSON.stringify(cleanCode))

    codeElement.textContent = trimcode(codeElement.textContent)
    Prism.highlightElement(codeElement)
  })
}

/**
 * Инициализирует нумерацию строк для всех блоков
 */
function initLineNumbers() {
  const codeAreas = document.querySelectorAll('.S_CodeArea')

  codeAreas.forEach(area => {
    addLineNumbers(area)
  })
}

// ================================
// ЗАПУСК
// ================================

document.addEventListener('DOMContentLoaded', () => {
  applyTheme()
  initHighlight()
  initLineNumbers()
})