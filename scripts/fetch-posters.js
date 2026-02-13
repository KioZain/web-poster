// prebuild

const fs = require('fs')
const path = require('path')

require('dotenv').config()

const API_KEY = process.env.AIRTABLE_API_KEY
const BASE_ID = process.env.AIRTABLE_BASE_ID
const TABLE_NAME = process.env.AIRTABLE_TABLE_NAME

function transformRecord(record) {
  return {
    id: record.id,
    name: record.fields.Name || 'none',
    author: record.fields.Author || 'none',
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

async function fetchAllPosters() {
  let allRecords = []
  let offset = null

  // STUPID AIRTABLE ONLY 100 RECORDS

  do {
    const params = new URLSearchParams({
      pageSize: '100',
      view: 'Grid view'
    })

    if (offset) {
      params.append('offset', offset)
    }

    const url = `https://api.airtable.com/v0/${BASE_ID}/${TABLE_NAME}?${params}`

    const response = await fetch(url, {
      headers: { Authorization: `Bearer ${API_KEY}` }
    })

    if (!response.ok) {
      throw new Error(`error: ${response.status} ${response.statusText}`)
    }

    const data = await response.json()
    const transformed = data.records.map(transformRecord)
    allRecords = [...allRecords, ...transformed]

    // for @showmore
    offset = data.offset
  } while (offset)

  return allRecords
}

async function main() {
  console.log(`${BASE_ID}`)
  console.log(`${TABLE_NAME}`)

  try {
    const posters = await fetchAllPosters()

    console.log(`${posters.length} posters`)

    const outputPath = path.resolve(__dirname, '../src/data/posters.json')

    fs.writeFileSync(outputPath, JSON.stringify(posters, null, 2), 'utf-8')

    // test
    if (posters.length > 0) {
      console.log('\n first')
      console.log(`name: ${posters[0].name}`)
      console.log(`student: ${posters[0].author}`)
      console.log(`id: ${posters[0].id}`)
    }
  } catch (error) {
    console.error(`errow: ${error.message}`)
    process.exit(1)
  }
}

main()
