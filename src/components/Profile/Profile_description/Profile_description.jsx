import PropTypes from 'prop-types';
import defaultImg from 'defaultImages/user.png';
import dataProfileStats from 'data/user.json';
import ProfileStats from '../Profile_stats/Profile_stats';
import {
  Card,
  Text,
  Image,
} from 'components/Profile/Profile_description/Profile_descr.styled';
export default function ProfileDescription(dataProfile) {
  //======деструктуризация=================
  const { username, tag, location, userImg = defaultImg } = dataProfile;
  //=======================================
  return (
    <Card>
      <Image src={userImg} alt={username} />
      <Text>{username}</Text>
      <Text>{tag}</Text>
      <Text>{location}</Text>
      <ProfileStats
        followers={dataProfileStats.stats.followers}
        views={dataProfileStats.stats.views}
        likes={dataProfileStats.stats.likes}
      />
    </Card>
  );
}
//===========propTypes description==========
ProfileDescription.propTypes = {
  username: PropTypes.string,
  tag: PropTypes.string,
  location: PropTypes.string,
  avatar: PropTypes.string,
};
