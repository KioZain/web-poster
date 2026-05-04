document.addEventListener('DOMContentLoaded', () => {
  const linksContainer = document.querySelector('.C_AticleLinks')
  const articleContainer = document.querySelector('.W_ArticleContentContainer')
  if (!linksContainer || !articleContainer) return
  linksContainer.innerHTML = ''

  const headings = articleContainer.querySelectorAll('h3')

  if (headings.length === 0) {
    const tocBlock = document.querySelector('.O_ArticleContent')
    if (tocBlock) tocBlock.style.display = 'none'
    return
  }
  const linksBySlug = {}

  headings.forEach((heading) => {
    const slug = heading.textContent
      .trim()
      .toLowerCase()
      .replace(/\s+/g, '-')
      .replace(/[^a-zа-яё0-9-]/g, '')
      .replace(/-+/g, '-')
      .replace(/^-|-$/g, '')

    heading.id = slug

    // creating links
    const link = document.createElement('a')
    link.href = `#${slug}`
    link.className = 'A_ListItem'
    link.textContent = heading.textContent.trim()
    // .A_ListItem[data-level="3"] { padding-left: 1.5rem; }
    const level = parseInt(heading.tagName[1], 10)
    link.dataset.level = level

    linksContainer.appendChild(link)
    linksBySlug[slug] = link
  })

  // ovserver for watching active blocks
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return

        const link = linksBySlug[entry.target.id]
        if (!link) return
        // removing is-active from others
        Object.values(linksBySlug).forEach((l) =>
          l.classList.remove('is-active')
        )
        // current
        link.classList.add('is-active')
      })
    },
    {
      rootMargin: '-91px 0px -70% 0px',
      threshold: [0, 0.25, 0.5, 0.75, 1]
    }
  )

  headings.forEach((heading) => observer.observe(heading))
  // Copy buttons
  const copyButtons = document.querySelectorAll('.copy')
  if (copyButtons.length === 0) return
  let activeToast = null
  let hideTimerId = null

  copyButtons.forEach((button) => {
    button.addEventListener('click', async (event) => {
      event.stopPropagation()

      const block = button.closest('.M_ParagraphArticle')
      if (!block) {
        return
      }
      if (!block.id) {
        return
      }

      const url = `${window.location.origin}${window.location.pathname}#${block.id}`

      try {
        await navigator.clipboard.writeText(url)
        showToast()
      } catch (err) {
        console.error('error', err)
      }
    })
  })

  function showToast() {
    if (activeToast) {
      clearTimeout(hideTimerId)
      hideTimerId = setTimeout(hideToast, 2000)
      return
    }

    const toast = document.createElement('div')
    toast.className = 'A_Toast'
    toast.innerHTML = `
            <span class="check"></span>
            Ссылка скопирована
        `
    document.body.appendChild(toast)
    activeToast = toast
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        toast.classList.add('is-visible')
      })
    })
    hideTimerId = setTimeout(hideToast, 2000)
  }

  function hideToast() {
    if (!activeToast) return
    activeToast.classList.remove('is-visible')
    const toastToRemove = activeToast
    activeToast = null
    hideTimerId = null

    setTimeout(() => {
      toastToRemove.remove()
    }, 300)
  }
})
