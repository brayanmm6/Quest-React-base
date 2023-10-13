const getAdvices = async () => {
    const url = "https://api.adviceslip.com/advice"
    const response = await fetch(url)
    const json = await response.json()
    return json
}

export { getAdvices }