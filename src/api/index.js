import axios from "axios";

const url = "https://covid19.mathdro.id/api";

export const fetchAPI = async country => {
  let changeableUrl = url;

  // if there is a country parameter passed in, truthy
  if (country) {
    changeableUrl = `${url}/countries/${country}`;
  }
  try {
    // Destructure right the response away
    // = const response
    const {
      data: { confirmed, recovered, deaths, lastUpdate }
    } = await axios.get(changeableUrl);
    return { confirmed, recovered, deaths, lastUpdate };
  } catch (error) {
    console.log(error);
  }
};

export const fetchDaily = async () => {
  try {
    const { data } = await axios.get(`${url}/daily`);
    const modifiedData = data.map(data => ({
      confirmed: data.totalConfirmed,
      deaths: data.deaths.total,
      recovered: data.recovered.total,
      date: data.reportDate
    }));
    return modifiedData;
  } catch (err) {
    console.log(err);
  }
};

export const fetchCountries = async () => {
  try {
    const {
      data: { countries }
    } = await axios.get(`${url}/countries`);
    // console.log(countries);
    //returns an array of objects {name, iso2, iso3}

    return countries.map(country => country.name);
  } catch (err) {
    console.log(err);
  }
};
