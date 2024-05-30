async function getTrendingMoviesPreview() {
  const res = await fetch('https://api.themoviedb.org/3/trending/movie/day?api_key=' + API_KEY);
  const data = await res.json();

  const movies = data.results;
  const trendingPreviewMoviesContainer = document.querySelector('#trendingPreview');

  movies.forEach(movie => {
    const movieContainer = document.createElement('div');
    movieContainer.classList.add('movie-container', 'bg-white', 'p-2', 'rounded', 'shadow', 'mb-4', 'max-w-xs', 'mx-auto');

    const movieImg = document.createElement('img');
    movieImg.classList.add('w-1/2', 'h-48', 'object-cover', 'rounded-t');
    movieImg.setAttribute('alt', movie.title);
    movieImg.setAttribute('src', 'https://image.tmdb.org/t/p/w300' + movie.poster_path);
    movieContainer.appendChild(movieImg);

    const container = document.createElement('div');
    container.classList.add('p-2', 'border-t', 'border-gray-200');

    const titulo = document.createElement('h3');
    titulo.classList.add('text-base', 'font-bold', 'text-center', 'mb-1');
    titulo.innerText = movie.title;
    container.appendChild(titulo);

    const id = document.createElement('h1');
    id.classList.add('text-xs', 'font-semibold', 'text-center', 'mb-1');
    id.innerText = `ID: ${movie.id}`;
    container.appendChild(id);

    const lengu = document.createElement('h1');
    lengu.classList.add('text-xs', 'font-semibold', 'text-center', 'mb-1');
    lengu.innerText = `Language: ${movie.original_language}`;
    container.appendChild(lengu);

    const fecha = document.createElement('h1');
    fecha.classList.add('text-xs', 'font-semibold', 'text-center', 'mb-1');
    fecha.innerText = `Release Date: ${movie.release_date}`;
    container.appendChild(fecha);

    const description = document.createElement('p');
    description.classList.add('text-xs', 'text-gray-600', 'text-center', 'mt-1');
    description.setAttribute('style','max-width:300px; overflow: hidden; text.overflow: ellipsis');
    description.innerText = movie.overview;
    container.appendChild(description);

    movieContainer.appendChild(container);
    trendingPreviewMoviesContainer.appendChild(movieContainer);
  });
}

getTrendingMoviesPreview();
