import { createSelector } from 'reselect';

// const albumSelector  = state => state.albums.albums;
// const userSelector = state => state.users.users;


export const getAlbumDetails = createSelector(
    state => state.albums.albums,
    state => state.users.users,
    (albums, users) => {
        return albums.map((album) => {
            return {...album, ...users[album.userId]}
        });
    }
)

export const getPhotoDetails = createSelector(
    state => state.photos.photos,
    getAlbumDetails,
    (photos, albums) => {
        return photos.map((photo) => {
            return {...photo, ...albums[0]}
        });
    }
)
