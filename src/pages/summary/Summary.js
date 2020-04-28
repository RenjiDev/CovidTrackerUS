import React, { useContext, useEffect } from 'react';
import './styles.scss';

import CountryContext from '../../context/country/countryContext';

const Summary = () => {
  const countryContext = useContext(CountryContext);
  const { loading, getCountryData, globalData } = countryContext;

  useEffect(() => {
    getCountryData();
    //eslint-disable-next-line
  }, []);

  return loading ? null : (
    <div className="summary-container">
      <div className="summary-info">
        <div className="summary-title">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="35"
            height="35"
            viewBox="0 0 24 24"
            fill="#c70039"
          >
            <path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12z" />
          </svg>
          <h1>Summary</h1>
        </div>
        <div className="summary-row1 summary-row">
          <div className="summary-confirmed">
            <p>
              {globalData.cases.total.toLocaleString(navigator.language, {
                minimumFractionDigits: 0,
              })}
            </p>
            <p className="summary-desc">Confirmed</p>
          </div>
          <div className="summary-active">
            <p>
              {globalData.cases.active.toLocaleString(navigator.language, {
                minimumFractionDigits: 0,
              })}
            </p>
            <p className="summary-desc">Active</p>
          </div>
        </div>
        <div className="summary-row2 summary-row">
          <div className="summary-recovered">
            <p>
              {globalData.cases.recovered.toLocaleString(navigator.language, {
                minimumFractionDigits: 0,
              })}
            </p>
            <p className="summary-desc">Recovered</p>
          </div>
          <div className="summary-deceased">
            <p>
              {globalData.deaths.total.toLocaleString(navigator.language, {
                minimumFractionDigits: 0,
              })}
            </p>
            <p className="summary-desc">Deceased</p>
          </div>
        </div>
        <div className="summary-row3 summary-row">
          <div className="summary-new-cases">
            <p>
              {parseInt(globalData.cases.new).toLocaleString(
                navigator.language,
                {
                  minimumFractionDigits: 0,
                }
              )}
            </p>
            <p className="summary-desc">New Cases</p>
          </div>
          <div className="summary-new-deaths">
            <p>
              {parseInt(globalData.deaths.new).toLocaleString(
                navigator.language,
                {
                  minimumFractionDigits: 0,
                }
              )}
            </p>
            <p className="summary-desc">New Deaths</p>
          </div>
        </div>
        <div className="summary-global">
          <p>{globalData.country}</p>
        </div>
        <p className="summary-date">
          {new Date(globalData.time).toLocaleString()}
        </p>
      </div>
      <div className="summary-graphic"></div>
    </div>
  );
};

export default Summary;
