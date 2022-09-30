const api = axios.create({ //Agregamos la libreria de AXIOS
    baseURL: 'https://api.themoviedb.org/3/', //La basee de la URL que se usara como base
    headers:{
        'Content-Type': 'application/json;charset=utf-8', //Le decimos que la respuesta va a ser siempre en JSON
    },
    params: {
        'api_key': API_KEY, //Agregamos nuestra API_KEY
    },


});

//Utils
function createMovies(movies, container) {
    container.innerHTML = ''; //nos aseguramos de que el container este sin ningun elemento, osea en 0

    movies.forEach(movie => { //Hacemos una interaccion por cada una de las peliculas.
        
        const movieContainer = document.createElement('div'); //Creamos un div
        movieContainer.classList.add('movie-container');//Creamos una clase

        const movieImg = document.createElement('img'); //Creamos una img
        movieImg.classList.add('movie-img'); //creamos una clase a la img
        movieImg.setAttribute('alt', movie.title);
        movieImg.setAttribute('src', 'https://image.tmdb.org/t/p/w300' + movie.poster_path,); //le agregamos un atributo con su valor


        movieContainer.appendChild(movieImg); //agregamos la img a la div
        container.appendChild(movieContainer); //Agregamos la div a el elemento previamente traido de HTML
    }); 
}

function createCategories(categories, container) {
    container.innerHTML = '';

    categories.forEach(category => { //hacemos una interaccion por cada categoria con forEach
        
        const categoryContainer = document.createElement('div');
        categoryContainer.classList.add('category-container');
        
        
        const categoryTitle = document.createElement('h3'); //Creamos un h3
        categoryTitle.classList.add('category-title');
        categoryTitle.setAttribute('id', 'id' + category.id); //Agregamos el id con la palabra 'id' y el numero de cada categoria.
        categoryTitle.addEventListener('click', () => {
           location.hash = `#category=${category.id}-${category.name}`;
        });
        const categoryTitleText = document.createTextNode(category.name); //Creamos un texto para el h3 creado anteriormente

        categoryTitle.appendChild(categoryTitleText); //Insertamos el texto en el h3
        categoryContainer.appendChild(categoryTitle);//Insertamos el h3 en el container
        container.appendChild(categoryContainer);//insertamos el div en el container padre
    });
}

//Llamados a la API

async function getTrendingMoviesPreview() {
    const { data } = await api('trending/movie/day'); //Traemos la URL de api y le agregamos nuestros endpoints para hacer las peticiones
    const movies = data.results; //Creamos una variable para ver los resultados de data
    //const data = await res.json();
    
    createMovies(movies,trendingMoviesPreviewList);
}

async function getCategoriesPreview() {
    const { data } = await api('genre/movie/list');  //Traemos la URL de api y le agregamos
    const categories = data.genres; //creamos un variable para guardar los distintos generos
    //const data = await res.json();
    
    
    createCategories(categories, categoriesPreviewList);
      
}

async function getMoviesByCategory(id) {
    const { data } = await api('discover/movie', {
        params: {
           with_genres: id,
        },
    }); //Traemos la URL de api y le agregamos nuestros endpoints para hacer las peticiones
    const movies = data.results; //Creamos una variable para ver los resultados de data
    //const data = await res.json();
    
    createMovies(movies, genericSection);
      
}