import axios from 'axios';

class PortfolioApi {
  constructor() {
    this.apiURL = process.env.PORTFOLIO_API_URL + '/portfolios';
  }
  getAll() {
    return axios.get(this.apiURL);
  }
  getById(id) {
    return axios.get(`${this.apiURL}/${id}`);
  }
}

export default PortfolioApi;
