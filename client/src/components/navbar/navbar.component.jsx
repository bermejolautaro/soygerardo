function Navbar ({handleChange,handleSubmit}){
    return (
        <div>
            <form onChange={handleChange}>
            <input placeholder="Laucha homosexual" type="search" />
            <button type="submit" onClick={handleSubmit}>Buscar</button>
            </form>
        </div>
    )
}

export default Navbar