import PropTypes from 'prop-types';
import {
  List,
  Image,
  Item,
  Chip,
} from 'components/FriendsList/FriendsList.styled';

export default function Friends({ friends }) {
  return (
    <List>
      {friends.map(friend => (
        <Item key={friend.id}>
          <Chip status={friend.isOnline}></Chip>
          <Image src={friend.avatar} alt="Friend's name" />
          <p>{friend.name}</p>
        </Item>
      ))}
    </List>
  );
}
Friends.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.exact({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    })
  ),
};
