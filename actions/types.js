

// Get the basic cfg obj from API and Genres for the sidebar
const FETCH_CONFIG = 'FETCH_CONFIG';
const FETCH_GENRES = 'FETCH_GENRES';

// Set the selected menu item name on sidebar
const SET_SELECTED_MENU_ITEM_NAME = 'SET_SELECTED_MENU_ITEM_NAME';
const UNSET_SELECTED_MENU_ITEM_NAME = 'UNSET_SELECTED_MENU_ITEM_NAME';

// FETCH
const FETCH_MOVIE = 'FETCH_MOVIE';
const FETCH_PERSON = 'FETCH_PERSON';
const FETCH_CREDITS = 'FETCH_CREDITS';
const FETCH_GENRE_MOVIES = 'FETCH_GENRE_MOVIES';
const FETCH_STATIC_CATEGORY_MOVIES = 'FETCH_STATIC_CATEGORY_MOVIES';
const FETCH_SEARCH_MOVIES = 'FETCH_SEARCH_MOVIES';
const FETCH_RECOMMENDED_MOVIES = 'FETCH_RECOMMENDED_MOVIES';
const FETCH_PERSON_MOVIES = 'FETCH_PERSON_MOVIES';

// LOADINGS
// General loading
const SET_LOADING = 'SET_LOADING';
const UNSET_LOADING = 'UNSET_LOADING';

// Loading movies
const SET_MOVIES_LOADING = 'SET_MOVIES_LOADING';
const UNSET_MOVIES_LOADING = 'UNSET_MOVIES_LOADING';

// Loading a movie
const SET_MOVIE_LOADING = 'SET_MOVIE_LOADING';
const UNSET_MOVIE_LOADING = 'UNSET_MOVIE_LOADING';

// Loading a person
const SET_PERSON_LOADING = 'SET_PERSON_LOADING';
const UNSET_PERSON_LOADING = 'UNSET_PERSON_LOADING';

// Loading recommended movies associated with the movie
const SET_RECOMMENDED_MOVIES_LOADING = 'SET_RECOMMENDED_MOVIES_LOADING';
const UNSET_RECOMMENDED_MOVIES_LOADING = 'UNSET_RECOMMENDED_MOVIES_LOADING';

// Loading movies associated with the person
const SET_PERSON_MOVIES_LOADING = 'SET_PERSON_MOVIES_LOADING';
const UNSET_PERSON_MOVIES_LOADING = 'UNSET_PERSON_MOVIES_LOADING';

// ERRORS
const INSERT_ERROR = 'INSERT_ERROR';
const CLEAR_ERROR = 'CLEAR_ERROR';

export {
  FETCH_CONFIG,
  FETCH_GENRES,
  SET_SELECTED_MENU_ITEM_NAME,
  UNSET_SELECTED_MENU_ITEM_NAME,
  FETCH_MOVIE,
  FETCH_CREDITS,
  FETCH_GENRE_MOVIES,
  FETCH_STATIC_CATEGORY_MOVIES,
  FETCH_SEARCH_MOVIES,
  FETCH_RECOMMENDED_MOVIES,
  FETCH_PERSON,
  FETCH_PERSON_MOVIES,
  SET_LOADING,
  UNSET_LOADING,
  SET_MOVIES_LOADING,
  UNSET_MOVIES_LOADING,
  SET_MOVIE_LOADING,
  UNSET_MOVIE_LOADING,
  SET_PERSON_LOADING,
  UNSET_PERSON_LOADING,
  SET_RECOMMENDED_MOVIES_LOADING,
  UNSET_RECOMMENDED_MOVIES_LOADING,
  SET_PERSON_MOVIES_LOADING,
  UNSET_PERSON_MOVIES_LOADING,
  INSERT_ERROR,
  CLEAR_ERROR
};
