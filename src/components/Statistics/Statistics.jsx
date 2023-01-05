import PropTypes from 'prop-types';
import data from 'Data/data.json';
import {StatistscsCard, Title, StastisticsList, StastisticsItem} from './Statistics.styled'
const title = 'Upload stats';
export const Statistics = (stats = { data }) => {
  return (
    <StatistscsCard>
        <Title>{title}</Title>
        <StastisticsList>  
      {data.map(data => (
        <StastisticsItem key={data.id}>
            <span>{data.label}</span>
            <span>{data.percentage}</span>
          </StastisticsItem>
       
      ))}
          </StastisticsList>
    </StatistscsCard>
  );
};

Statistics.propTypes = {
  title: PropTypes.string.isRequired,
  stats: PropTypes.number.isRequired,
}.isRequired;
