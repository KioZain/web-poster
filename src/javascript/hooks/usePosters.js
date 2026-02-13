import { useState, useEffect } from 'react'
import postersData from '../../data/posters.json'

export function usePosters() {
  const [posters, setPosters] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    try {
      setPosters(postersData)
    } catch (err) {
      setError('Ошибка загрузки данных плакатов')
    } finally {
      setIsLoading(false)
    }
  }, [])

  return { posters, isLoading, error }
}
