import dataProfile from 'data/user.json';
import stats from 'data/stats.json';
import friendsList from 'data/friends.json';
import transactions from 'data/transactions.json';
import ProfileDescription from '../Profile/Profile_description/Profile_description';
import Statistics from 'components/Statistic/Statistics';
import Friends from 'components/FriendsList/FriendsList';
import TransactionHistory from 'components/TransactionHistory/TransactionHistory';
import { Container } from 'components/App/App.styled';

export const App = () => {
  return (
    <Container>
      <ProfileDescription
        username={dataProfile.username}
        tag={dataProfile.tag}
        location={dataProfile.location}
        userImg={dataProfile.avatar}
      />
      <Statistics title="User statistic" data={stats} />
      <Friends friends={friendsList} />
      <TransactionHistory transactions={transactions} />
    </Container>
  );
};
