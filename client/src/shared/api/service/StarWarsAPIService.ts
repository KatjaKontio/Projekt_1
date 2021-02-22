import http from '../StarwarsAPI'

const getDataLukeSkywalker = () => {
    return http.get('/people/1')
}

const getStarWarsCharacter = (characterNumber: number) => {
    return http.get(`/people/${characterNumber}`)
}

const searchForStarWarsCharacter = (userSearch: any) => {
    return http.get(`/people/${userSearch}`)
}

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    getDataLukeSkywalker,
    getStarWarsCharacter,
    searchForStarWarsCharacter
}