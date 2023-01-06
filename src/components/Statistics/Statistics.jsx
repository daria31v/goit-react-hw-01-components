import PropTypes from 'prop-types';
import data from 'Data/data.json';
import {
  StatistscsCard,
  Title,
  StastisticsList,
  StastisticsItem,
} from './Statistics.styled';

// const title = 'Upload stats';
// function TitleRender(props) {
//   return <Title>{title}</Title>;
// }

export const Statistics = ({ title }, { stats }) => {
 
  if ({ title } && { stats }) {
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
  } else {
    return (
      <StatistscsCard>
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
}
Statistics.propTypes = {
  title: PropTypes.string.isRequired,
  stats: PropTypes.number.isRequired,
}.isRequired;

