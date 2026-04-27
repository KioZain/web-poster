export default function flattenArticlesForSearch(navData) {
    const result = []

    for (const part of navData.parts) {
        for (const chapter of part.chapters) {
            for (const article of chapter.articles) {
                result.push({ ...article })
            }
        }
    }

    return result
}