import { useState, useEffect } from 'react'
import { AIRTABLE_CONFIG } from '../config/airtable.js'

function transformRecord(record) {
  return {
    id: record.id,
    name: record.fields.Name || 'Без названия',
    author: record.fields.Author || 'Неизвестен',
    year: record.fields.Year || '',
    type: record.fields.Type || null,
    layout: record.fields.Layout || null,
    tags: record.fields.Tags || [],
    modules: record.fields.Modules || [],
    cover: record.fields.Cover || '',
    ghPages: record.fields.GH_pages || '',
    github: record.fields.Github || '',
    project: record.fields.Project || ''
  }
}

export function usePosters() {
  const [posters, setPosters] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    fetchAllPosters()
  }, [])

  async function fetchAllPosters() {
    setIsLoading(true)
    setError(null)

    try {
      let allRecords = []
      let offset = null

      do {
        const params = new URLSearchParams({
          pageSize: '100',
          view: 'Grid view'
        })
        if (offset) params.append('offset', offset)

        const url = `https://api.airtable.com/v0/${AIRTABLE_CONFIG.baseId}/${AIRTABLE_CONFIG.tableName}?${params}`

        const response = await fetch(url, {
          headers: { Authorization: `Bearer ${AIRTABLE_CONFIG.apiKey}` }
        })

        if (!response.ok) throw new Error(`Ошибка: ${response.status}`)

        const data = await response.json()
        allRecords = [...allRecords, ...data.records.map(transformRecord)]
        offset = data.offset
      } while (offset)

      setPosters(allRecords)
    } catch (err) {
      setError(err.message)
    } finally {
      setIsLoading(false)
    }
  }

  return { posters, isLoading, error, refetch: fetchAllPosters }
}
