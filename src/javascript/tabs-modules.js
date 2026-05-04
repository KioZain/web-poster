function initModuleTabs() {
  const tabButtons = document.querySelectorAll('.A_TabModule[data-tab]')
  const tabSections = document.querySelectorAll('.W_ModulesWrap')

  if (tabButtons.length === 0) return

  tabButtons.forEach(function (button) {
    button.addEventListener('click', function () {
      tabButtons.forEach(function (btn) {
        btn.classList.remove('active')
      })

      tabSections.forEach(function (section) {
        section.classList.add('is-hidden')
      })

      button.classList.add('active')
      const targetId = button.dataset.tab
      const targetSection = document.getElementById(targetId)

      if (targetSection) {
        targetSection.classList.remove('is-hidden')
      }
    })
  })
}

initModuleTabs()
