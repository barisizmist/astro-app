import { Component } from 'preact';

export default class Country extends Component {
  constructor() {
    super();
    this.state = { data: null, country: null };
  }

  componentDidMount() {
    this.randomCountry();
  }
  randomCountry() {
    fetch('https://restcountries.com/v2/all')
      .then((response) => response.json())
      .then((data) => {
        this.setState({ data, country: data[Math.floor(Math.random() * data.length)] });
      });
  }

  render() {
    const { country } = this.state;
    return this.state.country ? (
      <div>
        <img src={country.flags.png} alt="flag" />
        <p>Languages: {country.languages[0].name}</p>
        <p>Capital: {country.capital}</p>
        <p>Population: {country.population.toLocaleString()}</p>
      </div>
    ) : (
      <div>Loading...</div>
    );
  }
}
