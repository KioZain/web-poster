

export function trimcode(code) {
    let lines = code.split('\n')

    if (lines.length > 0 && lines[0].trim() === '') {
        lines.shift()
    }
    if (lines.length > 0 && lines[lines.length - 1].trim() === '') {
        lines.pop()
    }

    if (lines.length === 0) {
        return ''
    }
    let minIndent = Infinity

    for (const line of lines) {
        if (line.trim() === '') {
            continue
        }
        let spaceCount = 0
        for (const char of line) {
            if (char === ' ') {
                spaceCount++
            } else if (char === '\t') {
                spaceCount += 2
            } else {
                break
            }
        }

        if (spaceCount < minIndent) {
            minIndent = spaceCount
        }
    }

    if (minIndent === Infinity) {
        minIndent = 0
    }


    const result = lines.map(line => {
        if (line.trim() === '') {
            return ''
        }
        return line.slice(minIndent)
    })

    return result.join('\n')
}

