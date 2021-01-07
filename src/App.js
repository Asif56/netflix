// import logo from './logo.svg';
import './App.css';
import Row from './Row'
import request from './request'
import Banner from './Banner'
import Nav from './Nav'

function App() {
  return (
    <div className="app">
    <Nav/>
     <Banner/>
     <Row title='NETFLIX ORIGINAL' fetchUrl={request.fetchNetflixOriginals} isLargeRow={true} />
     <Row title='Trending row'  fetchUrl={request.fetchTrending}/>
     <Row title='Top Rated'  fetchUrl={request.fetchTopRated}/>
     <Row title='Action Movie'  fetchUrl={request.fetchActionMovie}/>
     <Row title='Comedy Movie'  fetchUrl={request.fetchComedyMovie}/>
     <Row title='Horror Movie'  fetchUrl={request.fetchHorrorMovie}/>
     <Row title='Romance Movie'  fetchUrl={request.fetchRomanceMovie}/>
     <Row title='Documentaries'  fetchUrl={request.fetchDocumentaries}/>


    </div>
  );
}

export default App;
