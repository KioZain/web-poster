function initShare() {
  const shareBlocks = document.querySelectorAll('.M_ShareLinks')

  shareBlocks.forEach(function (block) {
    const buttons = block.querySelectorAll('.A_ShareButton[data-share]')

    buttons.forEach(function (button) {
      button.addEventListener('click', function (event) {
        event.preventDefault()

        const action = button.dataset.share
        const currentUrl = window.location.href

        if (action === 'telegram') {
          const telegramUrl =
            'https://t.me/share/url?url=' + encodeURIComponent(currentUrl)
          window.open(telegramUrl, '_blank')
        }

        if (action === 'vk') {
          const vkUrl =
            'https://vk.com/share.php?url=' + encodeURIComponent(currentUrl)
          window.open(vkUrl, '_blank')
        }

        if (action === 'copy') {
          navigator.clipboard
            .writeText(currentUrl)
            .then(function () {
              button.classList.add('is-copied')

              setTimeout(function () {
                button.classList.remove('is-copied')
              }, 2000)
            })
            .catch(function (err) {
              console.error('Ошибка при копировании:', err)
            })
        }
      })
    })
  })
}

export default initShare
