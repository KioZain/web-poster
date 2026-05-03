function initRating() {
  const ratingBlocks = document.querySelectorAll('.O_Rating')

  ratingBlocks.forEach(function (block) {
    const goodButton = block.querySelector('.A_Reaction.good')
    const badButton = block.querySelector('.A_Reaction.bad')
    const caption = block.querySelector('.caption.light')

    if (!goodButton || !badButton || !caption) return

    const defaultHTML = caption.innerHTML
    const thankYouHTML = 'Спасибо вам за оценку!'
    const navContainer = document.querySelector('.W_ArticleButtonsNavigation')
    const articleId = navContainer ? navContainer.dataset.articleId : 'unknown'

    // tracking
    function trackReaction(reaction, action) {
      if (typeof ym === 'undefined') {
        console.log('[Rating] ym не найден:', reaction, action, articleId)
        return
      }

      const goalName = reaction + '_' + action
      ym(107077248, 'reachGoal', goalName, {
        article: articleId
      })
    }

    function updateText() {
      const anyActive =
        goodButton.classList.contains('active') ||
        badButton.classList.contains('active')

      caption.innerHTML = anyActive ? thankYouHTML : defaultHTML
    }

    function toggleReaction(clicked, other, reactionName) {
      const isAlreadyActive = clicked.classList.contains('active')

      if (isAlreadyActive) {
        clicked.classList.remove('active')
        trackReaction(reactionName, 'deselect')
      } else {
        clicked.classList.add('active')
        other.classList.remove('active')
        trackReaction(reactionName, 'select')
      }

      updateText()
    }

    goodButton.addEventListener('click', function () {
      toggleReaction(goodButton, badButton, 'good')
    })

    badButton.addEventListener('click', function () {
      toggleReaction(badButton, goodButton, 'bad')
    })
  })
}

export default initRating
