
# React photo album
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn test --coverage --watchAll`
Gives the coverage report of the test cases, and simultaneously watch on changes.
Excluded all the files from create react app bolier plate and the index.js files to bootstrap the component and modules.<br>
src/**/index.js
src/configureStore.js"
src/serviceWorker.js

### `yarn run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify



### Run through Docker

If you want to run the application through `docker` then follow the below steps.

Go to the terminal and move the the project root folder.

#### Build docker image
#### `docker build --tag=photo-album1 .`

#### Build docker image
#### `docker run -d -p 3000:3000 photo-album1`

Then, Open [http://localhost:3000](http://localhost:3000) to view it in the browser.


## What we are looking for 

### Browser back button functionality  Back button mainly needs to be handled when <br>
a.)we change the page of the album or the photo<br>
b.) when the size of the album or photos is changed, then the page count should also reset.<br>

Back button is handled for all the scenarios, except when the user clicks on the photo to open the <br>

### Eeadable and tested code  Unit tests are included for most of the code and is divided into different files and folders, like components, assets, reducers, scss to increase readability.

### coding not just the "happy path" but also handling missing data, network issues, ...  handled the network error scenario and when no data exists(refer to the screenshot)

### a performant solution (amount of requests & bytes, compression, render-blocking Js,  lazy load...)  Suspense and lazy methods provided by react@16.2 are used to lazy load the album list and photo list component.

### mobile first approach  

### clean and responsive layout  

### usage of a VCS and an informative commit history  Shared the path of the GIT repo.

### to run the project via docker  Docker file included, with instructions to run the docker image.

### documentation 
Documentation is all included in the readme files with screenshot of the app.



![Album list without hover effect](https://github.com/apoorv173/react-photo-album/blob/master/screenshots/album-list-without-data.png)
![Album list with user and album data on hover](https://github.com/apoorv173/react-photo-album/blob/master/screenshots/album-list-with-data.png)
![Album list on mobile without hover effect](https://github.com/apoorv173/react-photo-album/blob/master/screenshots/album-list-mobile-without-data.png)
![Album list on mobile with hover effect](https://github.com/apoorv173/react-photo-album/blob/master/screenshots/album-list-mobile.png)

![no result found page](https://github.com/apoorv173/react-photo-album/blob/master/screenshots/no-result-found.png)
![Photo list](https://github.com/apoorv173/react-photo-album/blob/master/screenshots/photo-list.png)
![modal design on desktop](https://github.com/apoorv173/react-photo-album/blob/master/screenshots/modal-desktop.png)
![Modal design on mobile](https://github.com/apoorv173/react-photo-album/blob/master/screenshots/modal-mobile.png)

![Loading screen](https://github.com/apoorv173/react-photo-album/blob/master/screenshots/loading.png)


![Unit test coverage](https://github.com/apoorv173/react-photo-album/blob/master/screenshots/test-cases.png)

### Manual BDD tests executed:

1.) ON size change the page count should reset for that current url<br>

2.) the page and the size numbers are appended in the url for both album and photo pages???<br>

3.) back navigation<br>

4.) no results found after 100 results<br>

5.) Loading scenarios<br>

6.) Image description<br>


### Todos

User page with the complete user information<br>

Add redux sagas to it, instead of thunk<br>

Add library to add support for title change in SPA

### Title change
First thought of using react-document-title for modifying the title, as it is created by gaeron(guy who introduced redux).
But the document title tags are supposed to be wrapped around the whole component, so, switching to a more powerful library with more features, called react-helmet.
