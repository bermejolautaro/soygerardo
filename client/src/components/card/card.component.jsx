const game =[
    {
        id: 3498,
        name: "Grand Theft Auto V",
        backGroundImage:"https://media.rawg.io/media/games/456/456dea5e1c7e3cd07060c14e96612001.jpg",
        rating: 4.47,
    },
    {
        id:3328,
        name:"The Witcher 3: Wild Hunt",
        backGroundImage:"https://media.rawg.io/media/games/618/618c2031a07bbff6b4f611f10b6bcdbc.jpg",
        rating:4.66,
    }]
function Card (){
    return (
        <div style={{display: 'flex', gap: '1rem'}}>
            {game.map(x=> <div style={{
                display: 'flex', 
                flexDirection: 'column', 
                justifyContent: 'center', 
                alignItems: 'center',
                background: '#222',
                padding: '1rem',
                borderRadius: '5px'
                }}>{x.name}, <img src={x.backGroundImage} width="250px"></img> , {x.rating}</div>)}
        </div>
    )
}

export default Card