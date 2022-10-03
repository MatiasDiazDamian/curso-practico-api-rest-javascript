searchFormBtn.addEventListener('click', () => { //Agregamos un escuchador de evento para que cambie al search cuando haga click
    location.hash = `#search=${searchFormInput.value.trim()}`;
});

trendingBtn.addEventListener('click', () => {
    location.hash = '#trends='; 
});

arrowBtn.addEventListener('click', () => {
    location.hash = window.history.back();  //Agregamos un escuchador de evento para que vuelva a home cuando haga click
    
});

headerTitle.addEventListener('click', () => {
    location.hash = '#home';

});


window.addEventListener('DOMContentLoaded', navigator, false);
window.addEventListener('hashchange', navigator, false);


function navigator() {
    console.log({location});
    
    if (location.hash.startsWith('#trends')) {
            trendsPage();
    } else if (location.hash.startsWith('#search=')) {
            searchPage();
    } else if (location.hash.startsWith('#movie=')) {
        movieDetailsPage();
    } else if (location.hash.startsWith('#category=')) {
        categoriesPage();        
    } else {
        homePage();         
    }

    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

function homePage() {
    console.log('HOME!!')
    
    headerSection.classList.remove('header-container--long');
    headerSection.style.background = '';
    arrowBtn.classList.add('inactive');
    arrowBtn.classList.remove('header-arrow--white');
    headerTitle.classList.remove('inactive');
    headerCategoryTitle.classList.add('inactive');
    searchForm.classList.remove('inactive');
    
    trendingPreviewSection.classList.remove('inactive');
    categoriesPreviewSection.classList.remove('inactive');
    genericSection.classList.add('inactive');
    movieDetailSection.classList.add('inactive');
    
    
    
    //llamamos ambas funciones
    getCategoriesPreview();
    getTrendingMoviesPreview(); 
}
function categoriesPage() {
    console.log('CATEGORIES!!')

    headerSection.classList.remove('header-container--long');
    headerSection.style.background = '';
    arrowBtn.classList.remove('inactive');
    arrowBtn.classList.remove('header-arrow--white');
    headerTitle.classList.remove('inactive');
    headerCategoryTitle.classList.remove('inactive');
    searchForm.classList.add('inactive');
    
    trendingPreviewSection.classList.add('inactive');
    categoriesPreviewSection.classList.add('inactive');
    genericSection.classList.remove('inactive');
    movieDetailSection.classList.add('inactive');
    

    //['#category=', 'id-name'] Esto es lo que nos daria el split de abajo
    const [ , categoryData] = location.hash.split('='); //Me separa la url cada que encuentra un '=' y como necesito el segundo que aparezca en el array al comienzo de la variable ignoro el primer valor
    const [categoryId, categoryName] = categoryData.split('-'); //Me separa lo que nos dio el array anterior cada que encuentra un '-'
    
    headerCategoryTitle.innerHTML = categoryName; //Le concatenamos el category name al titulo cada que llamamos una nueva category
    getMoviesByCategory(categoryId); //llamamos la funcion y le pasamos el numero de id que traemos desde 'category

}
function movieDetailsPage() {
    console.log('MOVIE!!');

    headerSection.classList.add('header-container--long');
    headerSection.style.background = '';
    arrowBtn.classList.remove('inactive');
    arrowBtn.classList.add('header-arrow--white');
    headerTitle.classList.add('inactive');
    headerCategoryTitle.classList.add('inactive');
    searchForm.classList.add('inactive');
    
    trendingPreviewSection.classList.add('inactive');
    categoriesPreviewSection.classList.add('inactive');
    genericSection.classList.add('inactive');
    movieDetailSection.classList.remove('inactive');
    

    //['#search', '124531'] Esto es lo que nos daria el split de abajo
    const [ , movieId] = location.hash.split('='); //Me separa la url cada que encuentra un '=' y como necesito el segundo que aparezca en el array al comienzo de la variable ignoro el primer valor

    getMovieById(movieId);
}
function searchPage() {
    console.log('SEARCH!!');

    headerSection.classList.remove('header-container--long');
    headerSection.style.background = '';
    arrowBtn.classList.remove('inactive');
    arrowBtn.classList.remove('header-arrow--white');
    headerTitle.classList.remove('inactive');
    headerCategoryTitle.classList.add('inactive');
    searchForm.classList.remove('inactive');
    
    trendingPreviewSection.classList.add('inactive');
    categoriesPreviewSection.classList.add('inactive');
    genericSection.classList.remove('inactive');
    movieDetailSection.classList.add('inactive');


     //['#search', 'nombreBuscado'] Esto es lo que nos daria el split de abajo
     const [ , query] = location.hash.split('='); //Me separa la url cada que encuentra un '=' y como necesito el segundo que aparezca en el array al comienzo de la variable ignoro el primer valor
     getMoviesBySearch(query);
}
function trendsPage() {
    console.log('TRENDS!!');

    headerSection.classList.remove('header-container--long');
    headerSection.style.background = '';
    arrowBtn.classList.remove('inactive');
    arrowBtn.classList.remove('header-arrow--white');
    headerTitle.classList.remove('inactive');
    headerCategoryTitle.classList.remove('inactive');
    searchForm.classList.add('inactive');
    
    trendingPreviewSection.classList.add('inactive');
    categoriesPreviewSection.classList.add('inactive');
    genericSection.classList.remove('inactive');
    movieDetailSection.classList.add('inactive');



    getTrendingMovies();
}
