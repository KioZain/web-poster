console.log('init drag')
// --- free movement ---

function initDragFree(root) {
  const box = root.querySelector('.drag-free-box')
  let isDragging = false
  let offsetX = 0
  let offsetY = 0

  function startDrag(clientX, clientY) {
    isDragging = true
    const rect = box.getBoundingClientRect()
    const rootRect = root.getBoundingClientRect()
    offsetX = clientX - rect.left
    offsetY = clientY - rect.top
    box.classList.add('dragging')
  }

  function moveDrag(clientX, clientY) {
    if (!isDragging) return
    const rootRect = root.getBoundingClientRect()
    const x = clientX - rootRect.left - offsetX
    const y = clientY - rootRect.top - offsetY
    box.style.left = x + 'px'
    box.style.top = y + 'px'
  }

  function endDrag() {
    isDragging = false
    box.classList.remove('dragging')
  }

  // mouse
  box.addEventListener('mousedown', (e) => {
    e.preventDefault()
    startDrag(e.clientX, e.clientY)
  })
  root.addEventListener('mousemove', (e) => moveDrag(e.clientX, e.clientY))
  root.addEventListener('mouseup', endDrag)
  root.addEventListener('mouseleave', endDrag)

  // touch
  box.addEventListener(
    'touchstart',
    (e) => {
      startDrag(e.touches[0].clientX, e.touches[0].clientY)
    },
    { passive: true }
  )
  root.addEventListener(
    'touchmove',
    (e) => {
      if (isDragging) e.preventDefault()
      moveDrag(e.touches[0].clientX, e.touches[0].clientY)
    },
    { passive: false }
  )
  root.addEventListener('touchend', endDrag)
}

// --- grid alignment ---

function initDragSnap(root) {
  const box = root.querySelector('.drag-snap-box')
  const cellSize = 60
  let isDragging = false
  let offsetX = 0
  let offsetY = 0

  function startDrag(clientX, clientY) {
    isDragging = true
    box.style.transition = 'none'
    const rect = box.getBoundingClientRect()
    offsetX = clientX - rect.left
    offsetY = clientY - rect.top
    box.classList.add('dragging')
  }

  function moveDrag(clientX, clientY) {
    if (!isDragging) return
    const rootRect = root.getBoundingClientRect()
    const x = clientX - rootRect.left - offsetX
    const y = clientY - rootRect.top - offsetY
    box.style.left = x + 'px'
    box.style.top = y + 'px'
  }

  function endDrag() {
    if (!isDragging) return
    isDragging = false
    box.classList.remove('dragging')
    const currentX = parseFloat(box.style.left) || 0
    const currentY = parseFloat(box.style.top) || 0
    const snappedX = Math.round(currentX / cellSize) * cellSize
    const snappedY = Math.round(currentY / cellSize) * cellSize
    box.style.transition = 'left 0.2s ease, top 0.2s ease'
    box.style.left = snappedX + 'px'
    box.style.top = snappedY + 'px'
  }

  box.addEventListener('mousedown', (e) => {
    e.preventDefault()
    startDrag(e.clientX, e.clientY)
  })
  root.addEventListener('mousemove', (e) => moveDrag(e.clientX, e.clientY))
  root.addEventListener('mouseup', endDrag)
  root.addEventListener('mouseleave', endDrag)

  box.addEventListener(
    'touchstart',
    (e) => {
      startDrag(e.touches[0].clientX, e.touches[0].clientY)
    },
    { passive: true }
  )
  root.addEventListener(
    'touchmove',
    (e) => {
      if (isDragging) e.preventDefault()
      moveDrag(e.touches[0].clientX, e.touches[0].clientY)
    },
    { passive: false }
  )
  root.addEventListener('touchend', endDrag)
}

// --- with borders ---

function initDragBounds(root) {
  const box = root.querySelector('.drag-bounds-box')
  let isDragging = false
  let offsetX = 0
  let offsetY = 0

  function startDrag(clientX, clientY) {
    isDragging = true
    const rect = box.getBoundingClientRect()
    offsetX = clientX - rect.left
    offsetY = clientY - rect.top
    box.classList.add('dragging')
  }

  function moveDrag(clientX, clientY) {
    if (!isDragging) return
    const rootRect = root.getBoundingClientRect()
    let x = clientX - rootRect.left - offsetX
    let y = clientY - rootRect.top - offsetY
    const maxX = root.offsetWidth - box.offsetWidth
    const maxY = root.offsetHeight - box.offsetHeight
    x = Math.max(0, Math.min(maxX, x))
    y = Math.max(0, Math.min(maxY, y))
    box.style.left = x + 'px'
    box.style.top = y + 'px'
  }

  function endDrag() {
    isDragging = false
    box.classList.remove('dragging')
  }

  box.addEventListener('mousedown', (e) => {
    e.preventDefault()
    startDrag(e.clientX, e.clientY)
  })
  root.addEventListener('mousemove', (e) => moveDrag(e.clientX, e.clientY))
  root.addEventListener('mouseup', endDrag)
  root.addEventListener('mouseleave', endDrag)

  box.addEventListener(
    'touchstart',
    (e) => {
      startDrag(e.touches[0].clientX, e.touches[0].clientY)
    },
    { passive: true }
  )
  root.addEventListener(
    'touchmove',
    (e) => {
      if (isDragging) e.preventDefault()
      moveDrag(e.touches[0].clientX, e.touches[0].clientY)
    },
    { passive: false }
  )
  root.addEventListener('touchend', endDrag)
}

// --- drop areas ---

function initDragDropZones(root) {
  const item = root.querySelector('.drag-item')
  const zones = root.querySelectorAll('.drop-zone')
  let isDragging = false
  let offsetX = 0
  let offsetY = 0
  let startX = 0
  let startY = 0

  function startDrag(clientX, clientY) {
    isDragging = true
    const rect = item.getBoundingClientRect()
    offsetX = clientX - rect.left
    offsetY = clientY - rect.top
    startX = parseFloat(item.style.left) || item.offsetLeft
    startY = parseFloat(item.style.top) || item.offsetTop
    item.style.transition = 'none'
    item.classList.add('dragging')
  }

  function moveDrag(clientX, clientY) {
    if (!isDragging) return
    const rootRect = root.getBoundingClientRect()
    const x = clientX - rootRect.left - offsetX
    const y = clientY - rootRect.top - offsetY
    item.style.left = x + 'px'
    item.style.top = y + 'px'

    const itemRect = item.getBoundingClientRect()
    const itemCenterX = itemRect.left + itemRect.width / 2
    const itemCenterY = itemRect.top + itemRect.height / 2

    zones.forEach((zone) => {
      const zoneRect = zone.getBoundingClientRect()
      const isOver =
        itemCenterX > zoneRect.left &&
        itemCenterX < zoneRect.right &&
        itemCenterY > zoneRect.top &&
        itemCenterY < zoneRect.bottom
      zone.classList.toggle('drag-over', isOver)
    })
  }

  function endDrag() {
    if (!isDragging) return
    isDragging = false
    item.classList.remove('dragging')
    item.style.transition = 'left 0.3s ease, top 0.3s ease'
    const itemRect = item.getBoundingClientRect()
    const itemCenterX = itemRect.left + itemRect.width / 2
    const itemCenterY = itemRect.top + itemRect.height / 2
    let landed = false

    zones.forEach((zone) => {
      zone.classList.remove('drag-over')
      const zoneRect = zone.getBoundingClientRect()
      const rootRect = root.getBoundingClientRect()
      const isOver =
        itemCenterX > zoneRect.left &&
        itemCenterX < zoneRect.right &&
        itemCenterY > zoneRect.top &&
        itemCenterY < zoneRect.bottom
      if (isOver) {
        const zoneX =
          zoneRect.left -
          rootRect.left +
          (zoneRect.width - item.offsetWidth) / 2
        const zoneY =
          zoneRect.top -
          rootRect.top +
          (zoneRect.height - item.offsetHeight) / 2
        item.style.left = zoneX + 'px'
        item.style.top = zoneY + 'px'
        zone.classList.add('zone-filled')
        landed = true
      }
    })

    if (!landed) {
      item.style.left = startX + 'px'
      item.style.top = startY + 'px'
    }
  }

  item.addEventListener('mousedown', (e) => {
    e.preventDefault()
    zones.forEach((z) => z.classList.remove('zone-filled'))
    startDrag(e.clientX, e.clientY)
  })
  root.addEventListener('mousemove', (e) => moveDrag(e.clientX, e.clientY))
  root.addEventListener('mouseup', endDrag)
  root.addEventListener('mouseleave', endDrag)

  item.addEventListener(
    'touchstart',
    (e) => {
      zones.forEach((z) => z.classList.remove('zone-filled'))
      startDrag(e.touches[0].clientX, e.touches[0].clientY)
    },
    { passive: true }
  )
  root.addEventListener(
    'touchmove',
    (e) => {
      if (isDragging) e.preventDefault()
      moveDrag(e.touches[0].clientX, e.touches[0].clientY)
    },
    { passive: false }
  )
  root.addEventListener('touchend', endDrag)
}

// --- sorting  ---

function initDragSort(root) {
  const list = root.querySelector('.drag-sort-list')
  const items = list.querySelectorAll('.drag-sort-item')
  let draggedEl = null
  let placeholder = null

  items.forEach((item) => {
    item.addEventListener('mousedown', (e) => {
      e.preventDefault()
      beginSort(item, e.clientY)
    })
    item.addEventListener(
      'touchstart',
      (e) => {
        beginSort(item, e.touches[0].clientY)
      },
      { passive: true }
    )
  })

  function beginSort(item, clientY) {
    draggedEl = item
    draggedEl.classList.add('sort-dragging')

    placeholder = document.createElement('div')
    placeholder.classList.add('drag-sort-placeholder')
    placeholder.style.height = item.offsetHeight + 'px'
    list.insertBefore(placeholder, item.nextSibling)
  }

  root.addEventListener('mousemove', (e) => handleSortMove(e.clientY))
  root.addEventListener(
    'touchmove',
    (e) => {
      if (draggedEl) e.preventDefault()
      handleSortMove(e.touches[0].clientY)
    },
    { passive: false }
  )

  function handleSortMove(clientY) {
    if (!draggedEl) return
    const siblings = [
      ...list.querySelectorAll('.drag-sort-item:not(.sort-dragging)')
    ]
    for (const sibling of siblings) {
      const rect = sibling.getBoundingClientRect()
      const midY = rect.top + rect.height / 2
      if (clientY < midY) {
        list.insertBefore(placeholder, sibling)
        return
      }
    }
    list.appendChild(placeholder)
  }

  function endSort() {
    if (!draggedEl) return
    draggedEl.classList.remove('sort-dragging')
    list.insertBefore(draggedEl, placeholder)
    placeholder.remove()
    placeholder = null
    draggedEl = null
  }

  root.addEventListener('mouseup', endSort)
  root.addEventListener('touchend', endSort)
}

// --- registry ---

const registry = {
  'drag-free': initDragFree,
  'drag-snap': initDragSnap,
  'drag-bounds': initDragBounds,
  'drag-drop-zones': initDragDropZones,
  'drag-sort': initDragSort
}

// --- boot ---

function boot() {
  const areas = document.querySelectorAll('.M_PreviewArea[data-demo]')
  areas.forEach((area) => {
    const name = area.dataset.demo
    const init = registry[name]
    if (init) init(area)
  })
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', boot)
} else {
  boot()
}
