import './ExercisesComponent.css'
import { useState, useEffect } from 'react'
import StarWarsAPIService from '../../../shared/api/service/StarWarsAPIService'


export const ExercisesComponent = () => {
    const [starwarsData, setStarwarsData] = useState<any>()
    const [count, setCount] = useState(1)
    const [search, setSearch] = useState("")

    const makeSureCountWillNeverGoBelowValue1 = () => {
        (count <= 1) ? setCount(1) : setCount(count - 1)
    }

    const getDataFromStarWarsAPI = async () => {
        try {
            const response = await StarWarsAPIService.getStarWarsCharacter(count)
            setStarwarsData(response)
        } catch (error) {
            console.log(error)

        }
    }

    const getDataFromStarWarsAPISearch = async () => {
        StarWarsAPIService.searchForStarWarsCharacter(search.toLowerCase())
            .then((response) => setStarwarsData(response.data))
            .catch((error) => console.log(error))
    }


    const displayData = () => {
        if (starwarsData) {
            return <div>
            <h3>name: {starwarsData.name} </h3>
            </div>

        }
    }



    useEffect(() => {
        getDataFromStarWarsAPI()
    }, [count])

    return (
        <div className='exercisesWrapper'>
            <span>search for starwars</span>
            <input onChange={(event) => setSearch(event.target.value)} />
            <h1>Name: {starwarsData?.data?.name}</h1>
            <h1>Hair Color: {starwarsData?.data?.hair_color}</h1>
            <h1>Gender: {starwarsData?.data?.gender}</h1>
            <h1>Birth year: {starwarsData?.data?.birth_year}</h1>
            <h1>Height: {starwarsData?.data?.height}</h1>
            <button onClick={() => makeSureCountWillNeverGoBelowValue1()}>Get previous character</button>
            <button onClick={() => setCount(count + 1)}>Get next character</button>


            <button onClick={() => getDataFromStarWarsAPISearch() }></button>
            {displayData()}
        </div>
    )
}

