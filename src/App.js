import React from "react";
import { Cards, Chart, CountryPicker } from "./components";
import styles from "./App.module.css";
import { fetchAPI } from "./api";
import logoImage from "./images/image.png";

class App extends React.Component {
  state = {
    data: {},
    country: ""
  };

  async componentDidMount() {
    const fetchedData = await fetchAPI();

    this.setState({ data: fetchedData });

    console.log(this.state);
    // now we have the API data in the state
    // we can pass it as prop to Cards
  }

  // can't say use function name(), why??
  handleCountryChange = async country => {
    console.log("Country was changed to" + country);

    //fectchAPI again
    const fetchedCountryData = await fetchAPI(country);

    //update the state
    this.setState({ data: fetchedCountryData, country: country });
    console.log(this.state);
  };

  render() {
    return (
      <div className={styles.container}>
        <img className={styles.image} src={logoImage} alt="COVID-19 logo" />
        <Cards data={this.state.data} />
        <CountryPicker handleCountryChange={this.handleCountryChange} />
        <Chart data={this.state.data} country={this.state.country} />
      </div>
    );
  }
}

export default App;
