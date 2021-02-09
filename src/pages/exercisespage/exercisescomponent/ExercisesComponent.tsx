import './ExercisesComponent.css'
import Axios, { AxiosResponse } from 'axios'
import { useState, useEffect } from 'react'


export const ExercisesComponent = () => {
    const [starwarsData, setStarwarsData] = useState<AxiosResponse>()

    const getDataFromStarWarsAPI = () => {
        Axios.get('https://swapi.dev/api/people/1/')
            .then(response => setStarwarsData(response))
            .catch(error => console.log(error))
    }

    useEffect(() => {
        getDataFromStarWarsAPI()
    }, [])

    return (
        <div className='exercisesWrapper'>

            <h1>Exercises</h1>
            <button onClick={() => console.log(starwarsData)}>Test Api Call</button>
        </div>
    )
}
