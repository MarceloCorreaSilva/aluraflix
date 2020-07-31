const URL_BACKEND_TOP = window.location.hostname.includes('localhost')
  ? 'http://localhost:8000'
  : 'https://marcoflix.herokuapp.com';

export default {
  URL_BACKEND_TOP,
};
