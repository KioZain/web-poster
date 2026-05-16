// tabs.js
function initTabs(container) {
    const tabs = container.querySelectorAll('.A_Tab')
    const contents = container.querySelectorAll('.W_TabContent')

    if (tabs.length === 0 || contents.length === 0) return

    tabs.forEach((tab) => {
        tab.addEventListener('click', () => {
            const targetName = tab.dataset.tab
            tabs.forEach((t) => t.classList.remove('active'))
            tab.classList.add('active')
            contents.forEach((content) => {
                const contentName = content.id.replace('tab-', '')

                content.hidden = contentName !== targetName
            })
        })
    })
}
document.addEventListener('DOMContentLoaded', () => {
    const wrapper = document.querySelector('.W_HandbookPageWrapper')
    if (wrapper) initTabs(wrapper)
})