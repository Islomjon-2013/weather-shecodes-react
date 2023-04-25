import React from "react";
import "./weather.css";
const Weather = () => {
  return (
    <div className="container">
      <div className="row border mt-5 p-5 box">
        <div className="col-12">
          <ul className="d-flex">
            <li>
              {" "}
              <a href="#">Lisbon</a>{" "}
            </li>
            <li>
              {" "}
              <a href="#">Paris</a>{" "}
            </li>
            <li>
              {" "}
              <a href="#">Sydney</a>{" "}
            </li>
            <li>
              {" "}
              <a href="#">San Francisco</a>{" "}
            </li>
          </ul>

          <form>
            <div className="input-box">
              <input type="search" className="form-control" />

              <button className="btn btn-danger">search</button>
            </div>
          </form>
          <h1 className="text-danger">London</h1>
          <p className="week">
            Monday <span>17:17</span>
          </p>
          <p className="cloud">Cloudy</p>
          <div className="row weather">
            <div className="col-3">
              🌧 <span className="degree">19℃</span>
            </div>
            <div className="col-3">
              <p>
                Precipitation: <span>62%</span>{" "}
              </p>
              <p>
                {" "}
                Wind: <span>13km/h</span>{" "}
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <h5>TUE</h5>
              🌧
              <h6>19℃</h6>
            </div>
            <div className="col">
              <h5>WED</h5>
              🌧
              <h6>19℃</h6>
            </div>
            <div className="col">
              <h5>THU</h5>
              🌧
              <h6>19℃</h6>
            </div>
            <div className="col">
              <h5>FRI</h5>
              🌧
              <h6>19℃</h6>
            </div>
            <div className="col">
              <h5>SAT</h5>
              🌧
              <h6>19℃</h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Weather;
