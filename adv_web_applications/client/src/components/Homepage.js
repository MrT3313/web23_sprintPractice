// IMPORTS
import React, {useState, useEffect} from 'react'
import axiosWithAuth from '../utils/axiosWithAuth.js'

// COMPONENTS
import Game from './Game.js'

// COMPONENT TO EXPORT
function Homepage(props) {
    // V1
    // const [videoGames, setVideoGames] = useState()
    
    // V2
    const [videoGames, setVideoGames] = useState([])

    useEffect(() => {
        console.log('useEffect Triggered')
        axiosWithAuth()
            .get('/api/videoGames')
            .then( videoGames => {
                console.log(videoGames)

                setVideoGames(videoGames.data)
                // console.log(videoGames)
            })
            .catch(err => [
                console.log(err)
            ])
    }, [])

    const updateVideoGame = (id) => {
    console.log(id)
    // -- //
        const updatedGame = {
            title: 'updated',
            rating: 3,
            id: id,
        }
    // -- //

        axiosWithAuth()
            .put(`/api/videoGames/${id}`, updatedGame)
            .then( updateResult => {
            console.log(updateResult)
            // -- //
                let newArray = videoGames.filter(game => game.id !== id)
                newArray.push(updatedGame)
            //  -- //
                setVideoGames([...newArray])
            })
            .catch(err => {
                console.log(err)
            })
    }
    const deleteGame = (id) => {
    console.log(id)
    // -- //
        axiosWithAuth()
            .delete(`/api/videoGames/${id}`)
            .then( updateResult => {
            console.log(updateResult)
            // -- //
                let newArray = videoGames.filter(game => game.id !== id)
            //  -- //
                setVideoGames([...newArray])
            })
            .catch(err => {
                console.log(err)
            })
    }

    console.log(videoGames)
    return(
        <div>
            {/* {videoGames.map((game, index) => <Game game={game} key={index} />)} */}
            {/* // V1 */}
            {/* {videoGames && 
                videoGames.map((game, index) => {
                    return <Game game={game} key={index}/>
                })
            } */}

            {/* // V2 */}
            {videoGames.map((game, index) => {
                <Game 
                    game={game} 
                    key={index} 
                    updateVideoGame={updateVideoGame} 
                    deleteGame={deleteGame} 
                />})
            }
            
        </div>
    )
}

// EXPORTS
export default Homepage