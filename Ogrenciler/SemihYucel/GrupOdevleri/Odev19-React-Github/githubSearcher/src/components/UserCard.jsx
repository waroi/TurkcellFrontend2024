import React from 'react';
import { Card, Avatar, UserInfoContainer, DetailsSection, CardContainer } from '../styled';

const UserCard = ({ user, error }) => {
  if (error) {
    return <div style={{ color: 'red', marginTop: '1rem' }}>{error}</div>;
  }

  if (!user) return null;

  const { name, login, avatar_url, bio, followers, following, public_repos, blog, location, twitter_username, public_gists, created_at, updated_at } = user;

  return (
    <CardContainer>
      <Card>
        <div style={{ display: 'flex', flexDirection: 'row', width: '100%' }}>
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <Avatar src={avatar_url} alt={name || login} />
            <UserInfoContainer>
              <h2>{name || login}</h2>
              {bio ? <p>{bio}</p> : <p>Bio bulunamadı</p>}
              <ul>
                <li>
                  <span>{followers}</span> <strong>Followers</strong>
                </li>
                <li>
                  <span>{following}</span> <strong>Following</strong>
                </li>
                <li>
                  <span>{public_repos}</span> <strong>Repos</strong>
                </li>
              </ul>
            </UserInfoContainer>
          </div>
          <DetailsSection>
            {blog ? (
              <div>
                <strong>Blog:</strong> <a href={`https://${blog}`} target="_blank" rel="noopener noreferrer">{blog}</a>
              </div>
            ) : (
              <div>
                <strong>Blog:</strong> Bilgi bulunamadı
              </div>
            )}
            {location ? (
              <div>
                <strong>Konum:</strong> {location}
              </div>
            ) : (
              <div>
                <strong>Konum:</strong> Bilgi bulunamadı
              </div>
            )}
            {twitter_username ? (
              <div>
                <strong>Twitter:</strong> <a href={`https://twitter.com/${twitter_username}`} target="_blank" rel="noopener noreferrer">@{twitter_username}</a>
              </div>
            ) : (
              <div>
                <strong>Twitter:</strong> Bilgi bulunamadı
              </div>
            )}
          </DetailsSection>
          <DetailsSection>
            <div>
              <strong>Public Gists:</strong> {public_gists}
            </div>
            <div>
              <strong>Hesap Oluşturulma:</strong> {new Date(created_at).toLocaleDateString()}
            </div>
            <div>
              <strong>Son Güncelleme:</strong> {new Date(updated_at).toLocaleDateString()}
            </div>
          </DetailsSection>
        </div>
      </Card>
    </CardContainer>
  );
};

export default UserCard;