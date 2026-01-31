export function filterPosters(posters, filters) {
  return posters.filter((poster) => {
    if (filters.tags?.length > 0) {
      const posterTags = poster.tags || []
      if (!filters.tags.every((tag) => posterTags.includes(tag))) {
        return false
      }
    }
    return true
  })
}

export function extractAvailableFilters(posters) {
  const tags = new Set()

  posters.forEach((poster) => {
    poster.tags?.forEach((tag) => tags.add(tag))
  })

  return {
    tags: Array.from(tags).sort()
  }
}

export function createEmptyFilters() {
  return { tags: [] }
}
