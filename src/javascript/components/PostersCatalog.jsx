import React, { useState, useMemo } from 'react'
import { usePosters } from '../hooks/usePosters.js'
import {
  filterPosters,
  extractAvailableFilters,
  createEmptyFilters
} from '../utils/filterPosters.js'
import { POSTERS_PER_PAGE } from '../config/airtable.js'
import S_Filters from './filters/S_Filters.jsx'
import S_FiltersRow from './filters/S_FiltersRow.jsx'
import PostersGrid from './C_PostersGrid.jsx'

function PostersCatalog() {
  const { posters, isLoading, error } = usePosters()
  const [selectedFilters, setSelectedFilters] = useState(createEmptyFilters())
  const [visibleCount, setVisibleCount] = useState(POSTERS_PER_PAGE)

  const availableFilters = useMemo(() => {
    return extractAvailableFilters(posters)
  }, [posters])

  const filteredPosters = useMemo(() => {
    return filterPosters(posters, selectedFilters)
  }, [posters, selectedFilters])

  const visiblePosters = filteredPosters.slice(0, visibleCount)
  const hasMore = visibleCount < filteredPosters.length

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
    <div className="L_PostersFilter">
      <S_Filters
        availableFilters={availableFilters}
        selectedFilters={selectedFilters}
        onFilterChange={handleFilterChange}
        onReset={handleResetFilters}
      />

      <S_FiltersRow
        availableFilters={availableFilters}
        selectedFilters={selectedFilters}
        onFilterChange={handleFilterChange}
        onReset={handleResetFilters}
      />

      <div className="W_PostersWrap">
        <PostersGrid
          posters={visiblePosters}
          hasMore={hasMore}
          onLoadMore={handleLoadMore}
        />
      </div>
    </div>
  )
}

export default PostersCatalog
