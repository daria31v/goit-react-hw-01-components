import PropTypes from 'prop-types';
import data from 'Data/data.json';

const title = 'Upload stats';
export const Statistics = (stats = { data }) => {
  return (
    <section>
        <h2>{title}</h2>
        <ul>  
      {data.map(data => (
        <li key={data.id}>
            <span>{data.label}</span>
            <span>{data.percentage}</span>
          </li>
       
      ))}
          </ul>
    </section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string.isRequired,
  stats: PropTypes.number.isRequired,
}.isRequired;
