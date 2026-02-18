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
                Object.values(linksBySlug).forEach((l) => l.classList.remove('is-active'))
                // current
                link.classList.add('is-active')
            })
        },
        {
            rootMargin: '-10% 0px -100% 0px'
        }
    )

    headings.forEach((heading) => observer.observe(heading))
})