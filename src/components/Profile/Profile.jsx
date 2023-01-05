import PropTypes from 'prop-types';
import { CardUser, UserFile, Image, Text, ListInfo, ListInfoItem, Label } from './Profile.styled';

export const Profile = ({
  user: { username, tag, location, avatar, stats },
}) => {
  return (
    <div>
      <UserFile>
        <CardUser>
          <Image src={avatar} alt="User avatar" width="150" />
          <Text>{username}</Text>
          <Text>{tag}</Text>
          <Text>{location}</Text>
        </CardUser>

        <ListInfo>
          <ListInfoItem>
            <Label>Followers</Label>
            <Label>{stats.followers}</Label>
          </ListInfoItem>
          <ListInfoItem>
            <Label>Views</Label>
            <Label>{stats.views}</Label>
          </ListInfoItem>
          <ListInfoItem>
            <Label>Likes</Label>
            <Label>{stats.likes}</Label>
          </ListInfoItem>
        </ListInfo>
      </UserFile>
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
