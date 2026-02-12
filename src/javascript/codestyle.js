import Prism from 'prismjs'
import 'prismjs/components/prism-css'
import 'prismjs/components/prism-javascript'

import { trimcode } from './trimcode.js'
import { theme } from './theme.js'
import { initCodeAreas } from './components/codeblock/S_CodeArea.js'
function addLineNumbers(codeArea) {
  const codeBlock = codeArea.querySelector('.A_CodeBlock code')
  const lineNumbersContainer = codeArea.querySelector('.A_LineNumbers')

  if (!codeBlock || !lineNumbersContainer) return

  const code = codeBlock.textContent
  const lineCount = code.split('\n').length

  const numbers = []
  for (let i = 1; i <= lineCount; i++) {
    numbers.push(`<span>${i}</span>`)
  }

  lineNumbersContainer.innerHTML = numbers.join('')
}

function highlight() {
  const codeBlocks = document.querySelectorAll('.A_CodeBlock')

  codeBlocks.forEach(preElement => {
    const childNodes = Array.from(preElement.childNodes)
    childNodes.forEach(node => {
      if (node.nodeType === 3) {
        node.remove()
      }
    })

    const codeElement = preElement.querySelector('code')
    if (!codeElement) return

    const rawCode = codeElement.textContent
    const cleanCode = trimcode(rawCode)
    codeElement.textContent = cleanCode

    Prism.highlightElement(codeElement)
  })
}


function lineNumbers() {
  const codeAreas = document.querySelectorAll('.S_CodeArea')

  codeAreas.forEach(area => {
    addLineNumbers(area)
  })
}

document.addEventListener('DOMContentLoaded', () => {
  theme()
  highlight()
  lineNumbers()
  initCodeAreas()
})
