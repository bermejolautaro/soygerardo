import Card from "../card/card.component"

function Cards ({allGames}){
    return (
        <div>
            {allGames?.map((game)=>(
                <Card game={game}/>
            ))}
        </div>
  )
}

export default Cards