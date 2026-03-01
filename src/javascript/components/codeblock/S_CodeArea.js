

import { initCodeBar } from './O_CodeBar.js'

function updateLineNumbers(codeArea) {
    const activeBlock = codeArea.querySelector('.A_CodeBlock.active code')
        || codeArea.querySelector('.A_CodeBlock code')

    const lineNumbersContainer = codeArea.querySelector('.A_LineNumbers')

    if (!activeBlock || !lineNumbersContainer) return

    const lineCount = activeBlock.textContent.split('\n').length
    const numbers = []

    for (let i = 1; i <= lineCount; i++) {
        numbers.push(`<span>${i}</span>`)
    }

    lineNumbersContainer.innerHTML = numbers.join('')
}

export function initCodeAreas() {
    const codeAreas = document.querySelectorAll('.S_CodeArea')

    codeAreas.forEach(codeArea => {
        const codeBar = codeArea.querySelector('.O_CodeBar')

        if (codeBar) {
            initCodeBar(codeBar, codeArea)
        }
        updateLineNumbers(codeArea)
    })
}
