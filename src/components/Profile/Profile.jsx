// Опис компонента <Profile>
// Компонент повинен приймати кілька пропсів з інформацією про користувача:

// username — ім'я користувача
// tag — тег в соціальній мережі без @
// location — місто і країна
// avatar — посилання на зображення
// stats — об'єкт з інформацією про активності

import PropTypes from 'prop-types';
import user from 'Data/user.json';
// import { UserFile } from './Profile.styled'

export const Profile = ({
  user: { username, tag, location, avatar, stats },
}) => {
  return (
    <div>
      <div>
        <div>
          <img src={avatar} alt="User avatar" width="150" />
          <p>{username}</p>
          <p>{tag}</p>
          <p>{location}</p>
        </div>

        <ul>
          <li>
            <span>Followers</span>
            <span>{stats.followers}</span>
          </li>
          <li>
            <span>Views</span>
            <span>{stats.views}</span>
          </li>
          <li>
            <span>Likes</span>
            <span>{stats.likes}</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

Profile.propTypes = {
  user: PropTypes.exact({
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    stats: PropTypes.objectOf(PropTypes.number).isRequired,
  }).isRequired,
};
