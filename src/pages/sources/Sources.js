import React from 'react';
import './styles.scss';
import SourceItem from '../../components/sources/SourceItem';

const Sources = () => {
  const sources = [
    {
      title: 'Google News',
      sourceTitle: 'Google',
      url:
        'https://www.google.com/search?q=covid&source=lnms&tbm=nws&sa=X&ved=2ahUKEwiJsei7_pHpAhVMZ80KHfVAB30Q_AUoAXoECCEQAw&biw=1920&bih=898',
    },
    {
      title: 'The Covid Tracking Project',
      sourceTitle: 'The Atlantic',
      url: 'https://covidtracking.com/',
    },
    {
      title: 'Our World in Data',
      sourceTitle: 'Oxford',
      url: 'https://ourworldindata.org/',
    },
    {
      title: 'COVID-19 (1.0.2)',
      sourceTitle: 'API-SPORTS',
      url: 'https://api-sports.io/documentation/covid-19',
    },
  ];
  return (
    <div className="sources-container">
      <span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="50"
          height="50"
          viewBox="0 0 24 24"
          fill="#C70039"
        >
          <path d="M11.362 2c4.156 0 2.638 6 2.638 6s6-1.65 6 2.457v11.543h-16v-20h7.362zm.827-2h-10.189v24h20v-14.386c0-2.391-6.648-9.614-9.811-9.614zm4.811 13h-3v-1h3v1zm0 2h-3v1h3v-1zm0 3h-10v1h10v-1zm-5-6h-5v4h5v-4z" />
        </svg>
        <h1>Sources</h1>
      </span>

      <div className="sources-content">
        {sources.map((s) => (
          <SourceItem title={s.title} sourceTitle={s.sourceTitle} url={s.url} />
        ))}
      </div>
    </div>
  );
};

export default Sources;
