import { useEffect } from "react"
import {useDispatch, useSelector} from "react-redux"
// import clearDetail

import { getGames } from "../../redux/actions"

import Navbar from "../../components/navbar/navbar.component"
import Cards from "../../components/cards/cards.component"

function Home (){

const dispatch = useDispatch()
const allGames = useSelector((state)=> state.allGames)

useEffect(()=>{
    dispatch(getGames())
    // return (()=>{
    //     clearDetail()
    // })
},[dispatch])


    return (
        <div>
            <Navbar/>
            <p>La home uwu</p>
            <Cards allGames={allGames} />
        </div>
    )
}

export default Home