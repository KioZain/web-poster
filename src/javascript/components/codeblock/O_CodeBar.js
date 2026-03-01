// src/javascript/components/codeblock/O_CodeBar.js

import React from 'react'
import { createRoot } from 'react-dom/client'
import A_CopyButton from './A_CopyButton.jsx'
import { initCodeTabs } from './M_CodeTabs.js'

/**
 * Инициализирует интерактивные элементы внутри .O_CodeBar
 * 
 * @param {HTMLElement} codeBar — элемент .O_CodeBar
 * @param {HTMLElement} codeArea — родительский .S_CodeArea
 */
export function initCodeBar(codeBar, codeArea) {
    // Инициализируем табы
    const tabsContainer = codeBar.querySelector('.M_CodeTabs')
    if (tabsContainer) {
        initCodeTabs(tabsContainer, codeArea)
    }

    // Инициализируем кнопку копирования
    initCopyButton(codeBar, codeArea)
}

/**
 * Инициализирует кнопку копирования
 */
function initCopyButton(codeBar, codeArea) {
    const buttonContainer = codeBar.querySelector('.A_CopyButton-container')
    if (!buttonContainer) return

    // Функция получает код из АКТИВНОГО блока
    const getCode = () => {
        const activeCodeBlock = codeArea.querySelector('.A_CodeBlock.active code')
        // Если активного нет — берём первый (для случая с одним табом)
        if (activeCodeBlock) {
            return activeCodeBlock.textContent
        }

        const firstCodeBlock = codeArea.querySelector('.A_CodeBlock code')
        return firstCodeBlock ? firstCodeBlock.textContent : ''
    }

    const root = createRoot(buttonContainer)
    root.render(<A_CopyButton getCode={getCode} />)
}