import { Profile } from "./Profile/Profile";
import user from '../Data/user.json'
import { Statistics } from './Statistics/Statistics'
import data from '../Data/data.json'
import { FriendList } from "./FriendList/FriendList";
import friends from '../Data/friends.json';
import { TransactionHistory } from "./TransactionHistory/TransactionHistory";
import transactions from '../Data/transactions.json';
const title = "Upload stats";

export const App = () => {
  return (
    <>
      <Profile user={user} />
      <Statistics title={title} stats={data} />
      <Statistics stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </>
  );
};
