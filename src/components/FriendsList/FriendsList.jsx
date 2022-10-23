import PropTypes from 'prop-types';
import { List } from 'components/FriendsList/FriendsList.styled';

import FriendListItem from './FriendListItem/FriendListItem';

export default function Friends({ friends }) {
  return (
    <List>
      {friends.map(friend => (
        //   <Item key={friend.id}>
        //     <Chip status={friend.isOnline}></Chip>
        //     <Image src={friend.avatar} alt="Friend's name" />
        //     <p>{friend.name}</p>
        //   </Item>
        <FriendListItem
          key={friend.id}
          isOnline={friend.isOnline}
          avatar={friend.avatar}
          name={friend.name}
        />
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
