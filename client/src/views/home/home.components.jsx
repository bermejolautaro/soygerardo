import { useEffect, useState } from "react"
import {useDispatch, useSelector} from "react-redux"
// import clearDetail

import { getGames,getByName } from "../../redux/actions"

import Navbar from "../../components/navbar/navbar.component"
import Cards from "../../components/cards/cards.component"

function Home (){

const dispatch = useDispatch()
const allGames = useSelector((state)=> state.allGames)
const gamesCopy = useSelector((state)=> state.gamesCopy)
const [filtered, setFiltered] = useState(gamesCopy)
const [searchGame, setSearchGame] = useState("")

function handleChange(e){
    e.preventDefault()
    setSearchGame(e.target.value)
}

function handleSubmit(e){
    e.preventDefault()
    dispatch(getByName(searchGame))
    setFiltered(allGames)
}

useEffect(()=>{
    dispatch(getGames())
    // return (()=>{
    //     clearDetail()
    // })
},[])


    return (
        <div>
            <Navbar handleChange={handleChange} handleSubmit={handleSubmit} />
            <p>La home uwu</p>
            <Cards allGames={filtered} />
        </div>
    )
}

export default Home