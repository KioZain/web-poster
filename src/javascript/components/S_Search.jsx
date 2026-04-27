import React, { useState, useEffect, useMemo } from 'react'

import handbookNavData from '../config/handbookNavData.js'
import flattenArticlesForSearch from '../utils/flattenArticlesForSearch.js'
import O_CardArticle from './O_CardArticle.jsx'
import { div } from 'framer-motion/client'

const MIN_QUERY_LENGTH = 3
const DEBOUNCE_DELAY = 200

function S_Search() {
  // querry
  const [query, setQuery] = useState('')

  // delayed state
  const [debouncedQuery, setDebouncedQuery] = useState('')
  const [isSearching, setIsSearching] = useState(false)
  const allArticles = useMemo(
    () => flattenArticlesForSearch(handbookNavData),
    []
  )

  useEffect(() => {
    if (query.length < MIN_QUERY_LENGTH) {
      setDebouncedQuery('')
      setIsSearching(false)
      return
    }
    setIsSearching(true)

    const timerId = setTimeout(() => {
      setDebouncedQuery(query)
      setIsSearching(false)
    }, DEBOUNCE_DELAY)

    return () => clearTimeout(timerId)
  }, [query])

  //   filtering
  const filteredArticles = useMemo(() => {
    if (debouncedQuery.length < MIN_QUERY_LENGTH) {
      return []
    }

    const normalizedQuery = debouncedQuery.toLowerCase().trim()

    return allArticles.filter((article) =>
      article.title.toLowerCase().includes(normalizedQuery)
    )
  }, [debouncedQuery, allArticles])

  // --------------------------------------
  const queryIsTooShort = query.length < MIN_QUERY_LENGTH
  const showLoader = isSearching && !queryIsTooShort
  const showResults = !isSearching && !queryIsTooShort
  const hasResults = filteredArticles.length > 0

  return (
    <div className="W_SearchResults">
      <div className="M_SearchBar">
        <input
          type="text"
          placeholder="Поиск по учебнику"
          className="A_SearchInput"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
        />
      </div>

      {/* coount */}
      {showResults && hasResults && (
        <div className="A_Found caption-caps">
          {filteredArticles.length} результата найдено
        </div>
      )}

      <div className="C_Articles result">
        {showLoader && <div className="loader" />}

        {showResults &&
          hasResults &&
          filteredArticles.map((article) => (
            <O_CardArticle key={article.id} article={article} />
          ))}

        {showResults && !hasResults && (
          <div className="M_TitleText result">
            <h4>Кажется, ничего не нашлось</h4>
            <p>Измените свой запрос</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default S_Search
