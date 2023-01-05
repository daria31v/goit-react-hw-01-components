import PropTypes from 'prop-types';
import { BsFillRecordFill } from 'react-icons/bs';
import { Friends, Status, Img, Name } from './FriendListItem.styled';


export const FriendListItem = ({ friends }) => {
  return (
    <Friends>
      <Status isActive={friends.isOnline === true}><BsFillRecordFill/></Status>
      <Img src={friends.avatar} alt="User avatar" width="48" />
      <Name>{friends.name}</Name>
    </Friends>
  );
};


FriendListItem.propTypes = {
  friends: PropTypes.exact({
    name: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,})
}.isRequired
