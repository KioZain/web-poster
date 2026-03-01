function updateLineNumbers(codeArea) {
    const activeBlock = codeArea.querySelector('.A_CodeBlock.active code')
    const lineNumbersContainer = codeArea.querySelector('.A_LineNumbers')

    if (!activeBlock || !lineNumbersContainer) return

    const lineCount = activeBlock.textContent.split('\n').length

    const numbers = []
    for (let i = 1; i <= lineCount; i++) {
        numbers.push(`<span>${i}</span>`)
    }

    lineNumbersContainer.innerHTML = numbers.join('')
}

function switchTab(clickedTab, codeArea) {
    const targetLang = clickedTab.dataset.lang
    if (!targetLang) return

    const allTabs = codeArea.querySelectorAll('.A_CodeTab')
    const allCodeBlocks = codeArea.querySelectorAll('.A_CodeBlock')

    allTabs.forEach(tab => {
        tab.classList.remove('active')
    })

    allCodeBlocks.forEach(block => {
        block.classList.remove('active')
    })

    clickedTab.classList.add('active')

    const targetBlock = codeArea.querySelector(`.A_CodeBlock[data-lang="${targetLang}"]`)
    if (targetBlock) {
        targetBlock.classList.add('active')
    }

    updateLineNumbers(codeArea)
}

function setInitialState(codeArea) {
    const allTabs = codeArea.querySelectorAll('.A_CodeTab')
    const allCodeBlocks = codeArea.querySelectorAll('.A_CodeBlock')

    if (allTabs.length <= 1) return
    const activeTab = codeArea.querySelector('.A_CodeTab.active')

    if (activeTab) {
        const targetLang = activeTab.dataset.lang

        allCodeBlocks.forEach(block => {
            block.classList.remove('active')
        })

        const targetBlock = codeArea.querySelector(`.A_CodeBlock[data-lang="${targetLang}"]`)
        if (targetBlock) {
            targetBlock.classList.add('active')
        }
    } else {
        const firstTab = allTabs[0]
        const targetLang = firstTab.dataset.lang

        firstTab.classList.add('active')

        const targetBlock = codeArea.querySelector(`.A_CodeBlock[data-lang="${targetLang}"]`)
        if (targetBlock) {
            targetBlock.classList.add('active')
        }
    }
}

export function initCodeTabs(tabsContainer, codeArea) {
    const tabs = tabsContainer.querySelectorAll('.A_CodeTab')

    if (tabs.length <= 1) return

    setInitialState(codeArea)
    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            if (tab.classList.contains('active')) return

            switchTab(tab, codeArea)
        })
    })
}