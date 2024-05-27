async function getTrendingMoviesPreview() {
    const res = await fetch('https://api.themoviedb.org/3/trending/movie/day?api_key=' + API_KEY);
    const data = await res.json();
  
    const movies = data.results;
    movies.forEach(movie => {
      const trendingPreviewMoviesContainer = document.querySelector('#trendingPreview')
      
      const movieContainer = document.createElement('div');
      movieContainer.classList.add('movie-container', 'bg-white', 'p-4', 'rounded', 'shadow');
  
      const movieImg = document.createElement('img');
      movieImg.classList.add('w-1/2', 'h-48');
      movieImg.setAttribute('alt', movie.title);
      movieImg.setAttribute(
        'src',
        'https://image.tmdb.org/t/p/w300' + movie.poster_path,
      );

      const information= document.createElement('div');
      information.classList.add('mt-4');

      const fecha= document.createElement('h1');
      fecha.classList.add('text-lg', 'font-bold', 'text-center');
      fecha.innerText=movie.release_date;

      const titulo= document.createElement('h3');
      titulo.classList.add('text-lg', 'font-bold', 'text-center');
      titulo.innerText=movie.title;

      const lengu= document.createElement('h1');
      lengu.classList.add('text-lg', 'font-bold', 'text-center');
      lengu.innerText=movie.original_language;
      

      const description= document.createElement('p');
      description.classList.add('text-gray-600', 'mt-2');
      description.innerText=movie.overview;

      const id= document.createElement('h1');
      id.classList.add('text-lg', 'font-bold', 'text-center');
      id.innerText=movie.id;

  
      movieContainer.appendChild(movieImg);
      movieContainer.appendChild(information);
      information.appendChild(titulo);
      information.appendChild(id);
      information.appendChild(fecha);
      information.appendChild(lengu);
      information.appendChild(description);
      trendingPreviewMoviesContainer.appendChild(movieContainer);
    });
  }
  
  getTrendingMoviesPreview();