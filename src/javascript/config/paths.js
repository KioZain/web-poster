const homeURL = '/'
// '/'              
// '/web-poster/' 

export function getUrl(path) {
    const cleanPath = path.replace(/^\//, '')
    return homeURL + cleanPath
}

export { homeURL }