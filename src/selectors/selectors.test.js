import {
    getAlbumDetails,
    getPhotoDetails
  } from './selectors';

import albumResponse from '../data/album-response.json';
import photoResponse from '../data/photo-response.json';

  const modifiedAlbumData = [
    {
    "userId": "1",
    "title": "quidem molestiae enim",
    "id": "1",
    "name": "Leanne Graham",
    "username": "Bret",
    "email": "Sincere@april.biz",
    "address": {
      "street": "Kulas Light",
      "suite": "Apt. 556",
      "city": "Gwenborough",
      "zipcode": "92998-3874",
      "geo": {
        "lat": "-37.3159",
        "lng": "81.1496"
      }
    },
    "phone": "1-770-736-8031 x56442",
    "website": "hildegard.org",
    "company": {
      "name": "Romaguera-Crona",
      "catchPhrase": "Multi-layered client-server neural-net",
      "bs": "harness real-time e-markets"
    }
    },
    {
    "userId": "1",
    "title": "sunt qui excepturi placeat culpa",
    "id": "1",
    "name": "Leanne Graham",
    "username": "Bret",
    "email": "Sincere@april.biz",
    "address": {
      "street": "Kulas Light",
      "suite": "Apt. 556",
      "city": "Gwenborough",
      "zipcode": "92998-3874",
      "geo": {
        "lat": "-37.3159",
        "lng": "81.1496"
      }
    },
    "phone": "1-770-736-8031 x56442",
    "website": "hildegard.org",
    "company": {
      "name": "Romaguera-Crona",
      "catchPhrase": "Multi-layered client-server neural-net",
      "bs": "harness real-time e-markets"
    }
    }
  ];

  const modifiedPhotoData = [
    {
    "userId": "1",
    "title": "quidem molestiae enim",
    "id": "1",
    "photoId": "1",
    "photoTitle": "quidem molestiae enim",
    "thumbnailUrl": "/fff",
    "name": "Leanne Graham",
    "username": "Bret",
    "email": "Sincere@april.biz",
    "address": {
      "street": "Kulas Light",
      "suite": "Apt. 556",
      "city": "Gwenborough",
      "zipcode": "92998-3874",
      "geo": {
        "lat": "-37.3159",
        "lng": "81.1496"
      }
    },
    "phone": "1-770-736-8031 x56442",
    "website": "hildegard.org",
    "company": {
      "name": "Romaguera-Crona",
      "catchPhrase": "Multi-layered client-server neural-net",
      "bs": "harness real-time e-markets"
    }
    },
    {
    "userId": "1",
    "title": "quidem molestiae enim",
    "id": "1",
    "photoId": "2",
    "photoTitle": "sunt qui excepturi placeat culpa",
    "thumbnailUrl": "/111",
    "name": "Leanne Graham",
    "username": "Bret",
    "email": "Sincere@april.biz",
    "address": {
      "street": "Kulas Light",
      "suite": "Apt. 556",
      "city": "Gwenborough",
      "zipcode": "92998-3874",
      "geo": {
        "lat": "-37.3159",
        "lng": "81.1496"
      }
    },
    "phone": "1-770-736-8031 x56442",
    "website": "hildegard.org",
    "company": {
      "name": "Romaguera-Crona",
      "catchPhrase": "Multi-layered client-server neural-net",
      "bs": "harness real-time e-markets"
    }
    }
  ];

  describe('Selectors', () => {
    describe('Album selector', () => {
      it('should return the modifie data with the users info', () => {
        expect(getAlbumDetails(albumResponse)).toStrictEqual(modifiedAlbumData);
      });
    });
    describe('Photo selector', () => {
        it('should return all the photo details with the albums and users info', () => {
          expect(getPhotoDetails(photoResponse)).toStrictEqual(modifiedPhotoData);
        });
      });
});