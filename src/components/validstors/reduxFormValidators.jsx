export const isWritten = (content) => {
    if (!content) {
        return 'You need to write here any text'
    }
    return undefined
}

export const maxLengthValidCreator = (maxLength) => (content) => {
    if (content && content.length > maxLength) {
        return `Error! Max length for this area - ${maxLength} symbols`
    }
    return undefined
}