import { initCodeBar } from './O_CodeBar.js'

export function initCodeAreas() {
    const codeAreas = document.querySelectorAll('.S_CodeArea')

    codeAreas.forEach(codeArea => {
        const codeBar = codeArea.querySelector('.O_CodeBar')

        if (codeBar) {
            initCodeBar(codeBar, codeArea)
        }
    })
}