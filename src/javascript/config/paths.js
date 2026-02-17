const BASE = typeof __BASE_PATH__ !== 'undefined' ? __BASE_PATH__ : '/'

export function getUrl(path) {
    const cleanPath = path.replace(/^\//, '')

    return BASE + cleanPath
}