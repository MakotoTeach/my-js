const baseUrl = 'https://pixabay.com/api/';
const key = '14239053-7da15a6cef2814c1860b92e83';

export default {
  query: '',
  page: 1,
  fetchImages() {
    const requestParams = `?q=${this.query}&page=${this.page}&per_page=12&image_type=photo&key=`;

    return fetch(baseUrl + requestParams + key).then(respone => {
        this.incrementPage();
      return respone.json();
    });
  },

  get searchQuery() {
    return this.query;
  },

  set searchQuery(string) {
    this.query = string;
  },

  incrementPage() {
    this.page += 1;
  },

  resetPage() {
    this.page = 1;
  },
};
