// Компонент повинен приймати кілька пропів:
// avatar - посилання на аватар
// name - ім'я друга
// isOnline - буль, що сигналізує про стан друга: в мережі або ні.
// Залежно від пропа isOnline, повинен змінюватися колір фону span.status.
// Це можна зробити за допомогою різних CSS - класів або Styled Components.

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
