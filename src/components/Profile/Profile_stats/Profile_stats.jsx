import PropTypes from 'prop-types';
import {
  StatsList,
  Item,
} from 'components/Profile/Profile_stats/Profile_stats.styled';

export default function ProfileStats(dataStats) {
  const { followers, views, likes } = dataStats;
  return (
    <StatsList>
      <Item>
        <span>Followers </span>
        <span>{followers}</span>
      </Item>
      <Item>
        <span>Views </span>
        <span>{views}</span>
      </Item>
      <Item>
        <span>Likes </span>
        <span>{likes}</span>
      </Item>
    </StatsList>
  );
}

// "followers": 5603,
// "views": 4827,
// "likes": 1308

ProfileStats.propTypes = {
  followers: PropTypes.number,
  views: PropTypes.number,
  likes: PropTypes.number,
};
