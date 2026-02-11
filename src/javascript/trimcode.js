

export function trimcode(code) {
    let lines = code.split('\n')

    // --- Шаг 1: Убираем первую строку, если она пустая ---
    // После <code> идёт перенос строки, это создаёт пустую первую строку
    if (lines.length > 0 && lines[0].trim() === '') {
        lines.shift()
    }

    // --- Шаг 2: Убираем последнюю строку, если она пустая ---
    // Перед </code> тоже часто есть пустая строка
    if (lines.length > 0 && lines[lines.length - 1].trim() === '') {
        lines.pop()
    }

    // Если ничего не осталось
    if (lines.length === 0) {
        return ''
    }

    // --- Шаг 3: Находим минимальный отступ ---
    let minIndent = Infinity

    for (const line of lines) {
        // Пропускаем полностью пустые строки
        if (line.trim() === '') {
            continue
        }

        // Считаем пробелы в начале строки
        let spaceCount = 0
        for (const char of line) {
            if (char === ' ') {
                spaceCount++
            } else if (char === '\t') {
                spaceCount += 2  // Таб считаем как 2 пробела
            } else {
                break  // Дошли до непробельного символа
            }
        }

        // Обновляем минимум
        if (spaceCount < minIndent) {
            minIndent = spaceCount
        }
    }

    // Если minIndent остался Infinity (все строки пустые)
    if (minIndent === Infinity) {
        minIndent = 0
    }

    // --- Шаг 4: Убираем minIndent пробелов у каждой строки ---
    const result = lines.map(line => {
        if (line.trim() === '') {
            return ''  // Пустые строки оставляем пустыми
        }
        return line.slice(minIndent)
    })

    return result.join('\n')
}
console.log('trim')