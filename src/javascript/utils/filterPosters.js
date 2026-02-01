export function filterPosters(posters, filters) {
  return posters.filter(poster => {

    // tag
    if (filters.tags?.length > 0) {
      const posterTags = poster.tags || []
      if (!filters.tags.every(tag => posterTags.includes(tag))) {
        return false
      }
    }

    // type
    if (filters.type?.length > 0) {
      if (!filters.type.includes(poster.type)) {
        return false
      }
    }

    // layout
    if (filters.layout?.length > 0) {
      if (!filters.layout.includes(poster.layout)) {
        return false
      }
    }

    // year
    if (filters.year?.length > 0) {
      if (!filters.year.includes(poster.year)) {
        return false
      }
    }

    // modules
    if (filters.modules?.length > 0) {
      const posterModules = poster.modules || []
      if (!filters.modules.every(mod => posterModules.includes(mod))) {
        return false
      }
    }

    return true
  })
}

export function extractAvailableFilters(posters) {
  const tags = new Set()
  const types = new Set()
  const layouts = new Set()
  const years = new Set()
  const modules = new Set()

  posters.forEach(poster => {
    poster.tags?.forEach(tag => tags.add(tag))
    poster.modules?.forEach(mod => modules.add(mod))
    if (poster.type) types.add(poster.type)
    if (poster.layout) layouts.add(poster.layout)
    if (poster.year) years.add(poster.year)
  })

  return {
    tags: Array.from(tags).sort(),
    type: Array.from(types).sort(),
    layout: Array.from(layouts).sort(),
    year: Array.from(years).sort((a, b) => b - a),
    modules: Array.from(modules).sort()
  }
}

export function createEmptyFilters() {
  return {
    tags: [],
    type: [],
    layout: [],
    year: [],
    modules: []
  }
}