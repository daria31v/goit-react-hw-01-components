import PropTypes from 'prop-types';
import friends from 'Data/friends.json';
import { FriendListItem } from '../FriendListItem/FriendListItem';

export const FriendList = ({ friends}) => {
  return (
    <ul>
      {friends.map(friends => (
        <FriendListItem key={friends.id} friends={friends} />
      ))}
    </ul>
  );
};

FriendList.propTypes = {
  friends: PropTypes.number.isRequired,
 
}.isRequired;