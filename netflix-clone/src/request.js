const API_KEY = "aca317e4eb6e75756593eefbb788e86b";

const request = {
  fetchTrending: `trending/all/week?api_key=${API_KEY}&language=en-US`,
  fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
  fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
  fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_generes=28`,
  fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_generes=35`,
  fetchHorroeMovies: `/discover/movie?api_key=${API_KEY}&with_generes=27`,
  fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_generes=10749`,
  fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_generes=99`,
};
export default request;
