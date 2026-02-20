// src/javascript/utils/getRelatedPosters.js

function seededRandom(seed) {
  let value = 0
  for (let i = 0; i < seed.length; i++) {
    value = (value * 31 + seed.charCodeAt(i)) % 1000000007
  }
  return value / 1000000007
}

export function buildTagWeights(allPosters) {
  const tagFrequency = {}

  allPosters.forEach((poster) => {
    poster.tags.forEach((tag) => {
      if (tagFrequency[tag] === undefined) {
        tagFrequency[tag] = 0
      }
      tagFrequency[tag] += 1
    })
  })

  return Object.keys(tagFrequency).reduce((weights, tag) => {
    weights[tag] = 1 / tagFrequency[tag]
    return weights
  }, {})
}
// ------------------------------------
export function getPriorityTag(poster, allPosters) {
  if (!poster.tags || poster.tags.length === 0) return null

  const tagWeights = buildTagWeights(allPosters)
  return poster.tags.reduce((bestTag, currentTag) => {
    const bestWeight = tagWeights[bestTag] ?? 0
    const currentWeight = tagWeights[currentTag] ?? 0
    return currentWeight > bestWeight ? currentTag : bestTag
  })
}

export function getRelatedPosters(currentPoster, allPosters, maxCount = 12) {
  const candidates = allPosters.filter(
    (poster) => poster.id !== currentPoster.id
  )

  if (candidates.length === 0) return []

  const tagWeights = buildTagWeights(allPosters)

  const withScore = candidates.map((poster) => {
    const score = poster.tags.reduce((total, tag) => {
      const isShared = currentPoster.tags.includes(tag)
      if (!isShared) return total
      return total + (tagWeights[tag] ?? 0)
    }, 0)

    return { poster, score }
  })

  const byTags = withScore
    .filter((item) => item.score > 0)
    .sort((a, b) => b.score - a.score)
    .map((item) => item.poster)

  const usedIds = new Set(byTags.map((p) => p.id))

  const remaining = candidates
    .filter((poster) => !usedIds.has(poster.id))
    .map((poster) => ({
      poster,
      sortKey: seededRandom(currentPoster.id + poster.id)
    }))
    .sort((a, b) => a.sortKey - b.sortKey)
    .map((item) => item.poster)

  return [...byTags, ...remaining].slice(0, maxCount)
}
