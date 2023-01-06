import PropTypes from 'prop-types';
import data from 'Data/data.json';
import {
  StatistscsCard,
  Title,
  StastisticsList,
  StastisticsItem,
} from './Statistics.styled';

export function Statistics({title}, {stats}) {
  return <StatistscsCard>
    {title && <Title>{title}</Title>}
    <StastisticsList>
          {data.map(data => (
            <StastisticsItem key={data.id}>
              <span>{data.label}</span>
              <span>{data.percentage}</span>
            </StastisticsItem>
          ))}
        </StastisticsList>
  </StatistscsCard>
}

Statistics.prototypes = {
  title: PropTypes.string,
  stats: PropTypes.number.isRequired,
}.isRequired