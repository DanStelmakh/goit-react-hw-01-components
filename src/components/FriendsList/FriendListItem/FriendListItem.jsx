import {
  Image,
  Item,
  Chip,
} from 'components/FriendsList/FriendListItem/FriendListItem.styled';

export default function FriendListItem({ isOnline, avatar, name }) {
  return (
    <Item>
      <Chip status={isOnline}></Chip>
      <Image src={avatar} alt="Friend's name" />
      <p>{name}</p>
    </Item>
  );
}
