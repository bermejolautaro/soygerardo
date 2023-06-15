// const game =[
//     {
//         id: 3498,
//         name: "Grand Theft Auto V",
//         backGroundImage:"https://media.rawg.io/media/games/456/456dea5e1c7e3cd07060c14e96612001.jpg",
//         rating: 4.47,
//     }]
import { Link } from "react-router-dom"
function Card ({game}){
    if (!game) return <div>asdasDasds</div>
    const {name, image, genre, rating, id} = game 
    
    return (
        <div style={{display: 'flex', gap: '1rem'}}>
            <Link to={`home/${id}`}>
            <div style={{
                display: 'flex', 
                flexDirection: 'column', 
                justifyContent: 'center', 
                alignItems: 'center',
                background: '#222',
                padding: '1rem',
                borderRadius: '5px'
                }}><h1>{name}</h1> 
                <p><img src={image} width="250px"></img></p> 
                <p>{rating}</p> 
                <li>{genre}</li>
                </div>
                </Link>   
        </div>
    )
}

export default Card