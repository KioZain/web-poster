function initPreviewPoster(container) {
  const iframe = container.querySelector('iframe')
  const button = container.querySelector('button')
  const closeIcon = container.querySelector('img.close')

  if (!iframe || !button || !closeIcon) {
    console.warn(
      'M_PreviewPoster: не найдены нужные элементы внутри',
      container
    )
    return
  }
  function openPoster() {
    container.classList.add('is-open')
  }
  function closePoster() {
    container.classList.remove('is-open')
  }
  button.addEventListener('click', openPoster)
  closeIcon.addEventListener('click', closePoster)
}

export function initAllPreviewPosters() {
  const allPosters = document.querySelectorAll('.M_PreviewPoster')

  allPosters.forEach(function (container) {
    initPreviewPoster(container)
  })
}
