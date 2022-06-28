import { useEffect, useState } from 'react';

import '../App.css';
import GistItem from './GistItem';
import Pagination from './Pagination';

const App = () => {

  let perPage = 30
  let since = new Date(2022).toISOString()

  const [gists, setGists] = useState([])
  const [page, setPage] = useState(1)
  const [isLoading, setLoading] = useState(true)

  useEffect(() => {
    const fetchGists = () => {
      setLoading(true)
      fetch(`https://api.github.com/gists/public?per_page=${perPage}&page=${page}&since=${since}`)
        .then(result => result.json())
        .then(result => setGists(result))
        .catch(error => console.error("Error fetching the data", error))
        .finally(() => setLoading(false))
    }
    fetchGists()
  }, [page, perPage, since])

  return (
    <div className="App">
      {isLoading ? <div className='centered-text loading'>Loading...</div> : (
        <div className="gist-list">
          {gists && gists.length > 0 && gists.map((gist, i) => <GistItem key={i} owner={gist.owner} files={gist.files} />)}
        </div>
      )}
      <Pagination setPage={setPage} currentPage={page} totalPages={30} />
    </div>
  );
}

export default App;
