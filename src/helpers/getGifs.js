


export const getGifs = async (category) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=jzciYppmr6gKx7RR1DGSDEDpDQbdxKc2&q=${encodeURI(category)}&limit=10&lang=es`;
    const answer = await fetch(url);
    const { data } = await answer.json();
    const gifs = data.map(img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url
        }
    })
    return gifs;
}