import React, { useState, useMemo } from 'react'
import { usePosters } from '../hooks/usePosters.js'
import {
  filterPosters,
  extractAvailableFilters,
  createEmptyFilters
} from '../utils/filterPosters.js'
import { POSTERS_PER_PAGE } from '../config/airtable.js'
import S_Filters from './S_Filters.jsx'
import PostersGrid from './C_PostersGrid.jsx'

// ----------------------------------------------------------
function PostersCatalog() {
  const { posters, isLoading, error } = usePosters()
  const [selectedFilters, setSelectedFilters] = useState(createEmptyFilters())
  const [visibleCount, setVisibleCount] = useState(POSTERS_PER_PAGE)

  // filters exists
  const availableFilters = useMemo(() => {
    return extractAvailableFilters(posters)
  }, [posters])

  // filtered
  const filteredPosters = useMemo(() => {
    return filterPosters(posters, selectedFilters)
  }, [posters, selectedFilters])

  // visable posters
  const visiblePosters = filteredPosters.slice(0, visibleCount)
  const hasMore = visibleCount < filteredPosters.length

  // handlers
  const handleFilterChange = (filterKey, values) => {
    setSelectedFilters((prev) => ({ ...prev, [filterKey]: values }))
    setVisibleCount(POSTERS_PER_PAGE)
  }

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + POSTERS_PER_PAGE)
  }

  const handleResetFilters = () => {
    setSelectedFilters(createEmptyFilters())
  }

  if (error) {
    return <div className="posters-catalog__error">Ошибка: {error}</div>
  }

  return (
    <div className="L_PostersFilter margin-container">
      <S_Filters
        availableFilters={availableFilters}
        selectedFilters={selectedFilters}
        onFilterChange={handleFilterChange}
        onReset={handleResetFilters}
      />

      <PostersGrid
        posters={visiblePosters}
        isLoading={isLoading}
        hasMore={hasMore}
        onLoadMore={handleLoadMore}
      />
    </div>
  )
}

export default PostersCatalog
