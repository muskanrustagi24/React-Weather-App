import styled from "styled-components";

const WeatherLogo = styled.img `
    width: 250px;
    height: 250px;
    margin-top: 20px;
`;

const SelectCityLabel = styled.span`
    color: black;
    font-size: 18px;
    font-weight: bold;
    margin: 50px auto;
`;

const SearchBox = styled.form`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  margin: 20px;
  border: black solid 1px;
  border-radius: 2px;
  & input {
    padding: 20px;
    font-size: 14px;
    border: none;
    outline: none;
    font-family: Montserrat;
    font-weight: bold;
    width:400px;
  }
  & button {
    background-color: black;
    font-size: 14px;
    padding: 0 20px;
    color: white;
    outline: none;
    cursor: pointer;
    font-family: Montserrat;
    font-weight: bold;
    cursor:pointer;
  }
`;

const CityComponent = (props) => {
  const {updateCity, fetchWeather} = props;

  return (
    <>
      <WeatherLogo src="/icons/perfect-day.svg" />
      <SelectCityLabel>Find weather of your city</SelectCityLabel>
      <SearchBox onSubmit={fetchWeather}>
        <input
          onChange={(e) => {updateCity(e.target.value)}}
          placeholder="Enter City"
        />
        <button type={"submit"}>Search</button>
      </SearchBox>
    </>
  );
};

export default CityComponent;
