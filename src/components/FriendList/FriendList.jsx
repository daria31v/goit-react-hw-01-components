import PropTypes from 'prop-types';

import { FriendListItem } from '../FriendListItem/FriendListItem';
import { ListFriends } from './FriendList.styled';

export const FriendList = ({ friends}) => {
  return (
    <ListFriends>
      {friends.map(friends => (
        <FriendListItem key={friends.id} friends={friends} />
      ))}
    </ListFriends>
  );
};

FriendList.propTypes = {
  friends: PropTypes.number.isRequired,
 
}.isRequired;