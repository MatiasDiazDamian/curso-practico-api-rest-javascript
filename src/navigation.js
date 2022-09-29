searchFormBtn.addEventListener('click', () => { //Agregamos un escuchador de evento para que cambie al search cuando haga click
    location.hash = '#search=';
});

trendingBtn.addEventListener('click', () => {
    location.hash = '#trends='; 
});

arrowBtn.addEventListener('click', () => {
    location.hash = '#home=';  //Agregamos un escuchador de evento para que vuelva a home cuando haga click
});


window.addEventListener('DOMContentLoaded', navigator, false);
window.addEventListener('hashchange', navigator, false);


function navigator() {
    console.log({location});
    
    if (location.hash.startsWith('#trends')) {
            trendsPage();
    } else if (location.hash.startsWith('#search=')) {
            searchPage();
    }  else if (location.hash.startsWith('#movie=')) {
        movieDetailsPage();
    }  else if (location.hash.startsWith('#category=')) {
        categoriesPage();        
    }  else {
        homePage();         
    }
}

function homePage() {
    console.log('HOME!!')

    headerSection.classList.remove('header-container--long');
    headerSection.style.backgroung = '';
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
    headerSection.style.backgroung = '';
    arrowBtn.classList.remove('inactive');
    arrowBtn.classList.remove('header-arrow--white');
    headerTitle.classList.add('inactive');
    headerCategoryTitle.classList.remove('inactive');
    searchForm.classList.add('inactive');
    
    trendingPreviewSection.classList.add('inactive');
    categoriesPreviewSection.classList.add('inactive');
    genericSection.classList.remove('inactive');
    movieDetailSection.classList.add('inactive');
    
    

}
function movieDetailsPage() {
    console.log('MOVIE!!');

    headerSection.classList.add('header-container--long');
    //headerSection.style.backgroung = '';
    arrowBtn.classList.remove('inactive');
    arrowBtn.classList.add('header-arrow--white');
    headerTitle.classList.add('inactive');
    headerCategoryTitle.classList.add('inactive');
    searchForm.classList.add('inactive');
    
    trendingPreviewSection.classList.add('inactive');
    categoriesPreviewSection.classList.add('inactive');
    genericSection.classList.add('inactive');
    movieDetailSection.classList.remove('inactive');
    
    
}
function searchPage() {
    console.log('SEARCH!!');

    headerSection.classList.remove('header-container--long');
    headerSection.style.backgroung = '';
    arrowBtn.classList.remove('inactive');
    arrowBtn.classList.remove('header-arrow--white');
    headerTitle.classList.add('inactive');
    headerCategoryTitle.classList.remove('inactive');
    searchForm.classList.remove('inactive');
    
    trendingPreviewSection.classList.add('inactive');
    categoriesPreviewSection.classList.add('inactive');
    genericSection.classList.remove('inactive');
    movieDetailSection.classList.add('inactive');

}
function trendsPage() {
    console.log('TRENDS!!');

    headerSection.classList.remove('header-container--long');
    headerSection.style.backgroung = '';
    arrowBtn.classList.remove('inactive');
    arrowBtn.classList.remove('header-arrow--white');
    headerTitle.classList.add('inactive');
    headerCategoryTitle.classList.remove('inactive');
    searchForm.classList.add('inactive');
    
    trendingPreviewSection.classList.add('inactive');
    categoriesPreviewSection.classList.add('inactive');
    genericSection.classList.remove('inactive');
    movieDetailSection.classList.add('inactive');
}
