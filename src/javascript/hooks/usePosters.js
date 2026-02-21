import postersData from '../../data/posters.json'

export function usePosters() {
  return {
    posters: postersData,
    isLoading: false,
    error: null
  }
}
