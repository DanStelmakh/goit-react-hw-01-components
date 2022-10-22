import PropTypes from 'prop-types';
import {
  UserStatistics,
  StatisticList,
  StatisticItem,
  StatisticTitle,
  StatisticTxt,
} from 'components/Statistic/Statistics.styled';

export default function Statistics({ data, title }) {
  return (
    <UserStatistics>
      <StatisticTitle>{title}</StatisticTitle>
      <StatisticList>
        {data.map(item => (
          <StatisticItem key={item.id}>
            <StatisticTxt>{item.label}</StatisticTxt>
            <StatisticTxt>{item.percentage}%</StatisticTxt>
          </StatisticItem>
        ))}
      </StatisticList>
    </UserStatistics>
  );
}

Statistics.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
  title: PropTypes.string,
  //передавать data, title - то что приходит в пропс функцию
};
