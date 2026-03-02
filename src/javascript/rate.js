function initRating() {
  const ratingBlocks = document.querySelectorAll('.O_Rating')

  ratingBlocks.forEach(function (block) {
    const goodButton = block.querySelector('.A_Reaction.good')
    const badButton = block.querySelector('.A_Reaction.bad')
    const caption = block.querySelector('.caption.light')
    const defaultHTML = caption.innerHTML
    const thankYouHTML = 'Спасибо вам за оценку!'

    if (!goodButton || !badButton || !caption) return

    function updateText() {
      const anyActive =
        goodButton.classList.contains('active') ||
        badButton.classList.contains('active')

      if (anyActive) {
        caption.innerHTML = thankYouHTML
      } else {
        caption.innerHTML = defaultHTML
      }
    }

    function toggleReaction(clicked, other) {
      const isAlreadyActive = clicked.classList.contains('active')

      if (isAlreadyActive) {
        clicked.classList.remove('active')
      } else {
        clicked.classList.add('active')
        other.classList.remove('active')
      }
      updateText()
    }

    goodButton.addEventListener('click', function () {
      toggleReaction(goodButton, badButton)
    })

    badButton.addEventListener('click', function () {
      toggleReaction(badButton, goodButton)
    })
  })
}

export default initRating
