import PropTypes from 'prop-types';


export const FriendListItem = ({ friends }) => {
  return (
    <li>
      <span>{friends.isOnline}</span>
      <img src={friends.avatar} alt="User avatar" width="48" />
      <p>{friends.name}</p>
    </li>
  );
};


FriendListItem.propTypes = {
  friends: PropTypes.exact({
    name: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,})
}.isRequired
