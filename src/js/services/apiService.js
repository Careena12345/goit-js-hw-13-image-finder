const baseUrl = 'https://pixabay.com/api/';

export default {
  page: 1,
  query: '',
  key: '14759976-cf03712b5e5adf38202017e66',
  incrementPage() {
    this.page += 1;
  },
  fetchImages() {
    const requestParams = `?image_type=photo&orientation=horizontal&q=${this.query}&page=${this.page}&per_page=12&key=${this.key}`;
    return fetch(baseUrl + requestParams)
      .then(response => response.json())
      .then(parsedResponse => {
        this.incrementPage();
        return parsedResponse;
      });
  },
  get searchQuery() {
    return this.query;
  },
  set searchQuery(string) {
    this.query = string;
  },
};