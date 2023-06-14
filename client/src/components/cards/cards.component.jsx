import Card from "../card/card.component"

function Cards ({allGames}){

    const gameList = allGames
    return (
        <div>
            {gameList?.map((game)=>(
                <Card game={game}/>
            ))}
            <Card/>
        </div>
  )
}

export default Cards