// tabs.js

/**
 * Инициализирует логику табов внутри указанного контейнера.
 * Контейнер нужен, чтобы при необходимости иметь несколько независимых
 * групп табов на одной странице — каждая работает изолированно.
 *
 * @param {HTMLElement} container — элемент, внутри которого живут кнопки .A_Tab
 *                                  и блоки .W_TabContent
 */
function initTabs(container) {
    // Собираем все кнопки и все блоки контента ВНУТРИ контейнера.
    // querySelectorAll возвращает NodeList — мы будем по нему итерироваться.
    const tabs = container.querySelectorAll('.A_Tab')
    const contents = container.querySelectorAll('.W_TabContent')

    // Защита от случая, когда на странице нет табов:
    // если ничего не нашли — выходим, чтобы не падать ошибками.
    if (tabs.length === 0 || contents.length === 0) return

    // Вешаем обработчик клика на каждую кнопку.
    tabs.forEach((tab) => {
        tab.addEventListener('click', () => {
            // Достаём имя таба из data-атрибута.
            // data-tab="theory" → tab.dataset.tab === "theory"
            const targetName = tab.dataset.tab

            // --- 1. Обновляем состояние кнопок ---
            // Снимаем класс .active со всех кнопок, потом ставим на текущую.
            // Это проще, чем искать предыдущую активную и снимать только с неё.
            tabs.forEach((t) => t.classList.remove('active'))
            tab.classList.add('active')

            // --- 2. Обновляем видимость блоков контента ---
            // Проходим по всем блокам и для каждого решаем: показать или скрыть.
            contents.forEach((content) => {
                // Имя блока берём из id: "tab-theory" → "theory"
                // .replace('tab-', '') убирает префикс.
                const contentName = content.id.replace('tab-', '')

                // Если имя блока совпадает с тем, что в кликнутой кнопке —
                // показываем (hidden = false), иначе скрываем (hidden = true).
                content.hidden = contentName !== targetName
            })
        })
    })
}

// Запускаем инициализацию после загрузки DOM.
// DOMContentLoaded срабатывает, когда HTML распарсен (но картинки могут ещё грузиться).
// Для нашей задачи этого достаточно — нам нужен только DOM.
document.addEventListener('DOMContentLoaded', () => {
    // Ищем обёртку страницы — внутри неё лежат и кнопки, и блоки.
    const wrapper = document.querySelector('.W_HandbookPageWrapper')
    if (wrapper) initTabs(wrapper)
})