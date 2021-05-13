export const api_key = "050acc481097509dbc630dbcb2dbbca9";
export const api = {
  home: `https://api.themoviedb.org/3/discover/movie?api_key=${api_key}&language=en&page=1&limit=20`,
  search: (query) =>
    `https://api.themoviedb.org/3/search/movie?api_key=${api_key}&language=en&page=1&limit=20&query=${query}`,
  detail: (id) =>
    `https://api.themoviedb.org/3/movie/${id}?api_key=${api_key}&language=en`,
};

export const showVotes = (movie) => {
  const range = (start, stop, step) =>
    Array.from(
      { length: (stop - start) / step + 1 },
      (_, i) => start + i * step
    );
  let array = range(1, parseInt(movie), 1);

  return array.map((index) => (
    <svg
      className="w-5 h-5 fill-current text-yellow-500 transition duration-500 ease-in-out  transform hover:-translate-y-1 hover:scale-80"
      viewBox="0 0 24 24"
      key={index}
    >
      <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z"></path>
    </svg>
  ));
};
