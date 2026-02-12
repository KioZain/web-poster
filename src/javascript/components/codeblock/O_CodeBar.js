

import React from 'react'
import { createRoot } from 'react-dom/client'
import A_CopyButton from './A_CopyButton.jsx'

export function initCodeBar(codeBar, codeArea) {
    initCopyButton(codeBar, codeArea)
}


function initCopyButton(codeBar, codeArea) {
    const buttonContainer = codeBar.querySelector('.A_CopyButton-container')
    if (!buttonContainer) return

    const getCode = () => {
        const codeElement = codeArea.querySelector('.A_CodeBlock code')
        return codeElement ? codeElement.textContent : 'каво'
    }

    const root = createRoot(buttonContainer)
    root.render(<A_CopyButton getCode={getCode} />)
}