// These components will be making separate API calls from the app
// component to serve specific data about a given album
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

function AlbumView() {
    const [ albumData, setAlbumData ] = useState([])
    const {id} = useParams()

    useEffect(() => {
        const fetchData = async () => {
            const url = `http://localhost:4000/album/${id}`
            const response = await fetch(url)
            const data = await response.json()


            const albums = data.results.filter(item=>item.wrapperType === 'track')
            setAlbumData(data)
        }

        fetchData()
    }, [id])

    const display = albumData.map(song =>{
        return <p key={song.trackedId}>{song.trackName}</p>
    })

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
export default AlbumView