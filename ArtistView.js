// These components will be making separate API calls from the app
// component to serve specific data about our artist
import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import NavButtons from './NavButtons'

function ArtistView() {
    const [ artistData, setArtistData ] = useState([])
    const {id} = useParams()

    useEffect(() => {
        const fetchData = async () => {
            const url = `http://localhost:4000/album/${id}`
            const response = await fetch(url)
            const data = await response.json()


            const albums = data.results.filter(item=>item.collectionType === 'Album')
            console.log(data)
        }

        fetchData()
    }, [id])

    const display = artistData.map(album =>{
        return(
            <div key ={`/album?${album.collectionId}`}>
                <p>{album.collectionName}</p>
            </div>
        )
    })

    return(
        <div>
            <NavButtons></NavButtons>
            {display}
        </div>
    )

    return (
        <div>
        {message}
            <Router>
                <Routes>
                    <Route path="/" element={
                        <div>
                            <SearchBar handleSearch = {handleSearch}/>
                            <Gallery data={data} />
                        </div>
                    } />
                    <Route path="/album/:id" element={<AlbumView />} />
                    <Route path="/artist/:id" element={<ArtistView />} />
                </Routes>
            </Router>
        </div>
    )
    
}
import { useParams } from 'react-router-dom'
import NavButtons from './NavButtons'

function ArtistView() {
    const { id } = useParams()
    const [ artistData, setArtistData ] = useState([])

    return (
        <div>
            <h2>The id passed was: {id}</h2>
            <p>Artist Data Goes Here!</p>
        </div>
    )
}

export default ArtistView
