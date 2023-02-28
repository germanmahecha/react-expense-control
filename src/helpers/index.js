export const IdGenerator = () => {
    const random = Math.random().toString(36).substring(2)
    const date = Date.now().toString(36)
    return random + date
}

export const formatDate = dateS => {
    const newDateS = new Date(dateS);
    const options = {
        year: 'numeric',
        month: 'long',
        day: '2-digit',
    }
    return newDateS.toLocaleDateString('es-ES', options)
}