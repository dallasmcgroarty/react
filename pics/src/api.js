import axios from 'axios';

const searchImages = async (term) => {
    const response = await axios.get('https://api.unsplash.com/search/photos', {
        headers: {
            Authorization: 'Client-ID uCxyyFFklqOXAfBs_waO9mvpxNAOErVxx1UquXcVix8'
        },
        params: {
            query: term
        }
    });

    return response.data.results;
};

export default searchImages;