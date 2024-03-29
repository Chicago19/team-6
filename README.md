# Code for Good - Team 6

Our project lies betweens two folders, children and parent. The parent folder contains a React.JS PWA, and the children folder contains a React Native app.

## Project requirements
- MongoDB Cluster
- AWS S3 bucket

## Set up the dev env locally

### Parent
We use React.JS for the front-end, Express.JS for the backend, and MongoDB for our database. To get it running, run git clone on `https://github.com/Chicago19/team-6.git` and install the following:

1. npm/npx (npx comes with npm)
2. nodemon; `npm install --save-dev nodemon`
3. express.js; `npm install express --save`
4. react-scripts; `npm install react-scripts`
5. react-dom; `npm install react react-dom --save`
6. concurrently; `npm install concurrently --save`
7. MongoDB; `npm install mongodb --save`
8. sass; `npm install node-sass -S`

Then, `cd` into the `parents` folder and run `npm run dev`.

### Children
We use React Native for the front-end running on top of expo. To begin, make sure you have NodeJS and install expo cli using `npm install expo-cli --global`.

Run the app by cd'ing into the children folder and running `npm start`. Make sure your phone is connected to the same network as your laptop and scan the qr code using the expo app.

## Troubleshooting

If you have any dependency errors, try removing `node_modules` with `rm -rf node_modules` and reinstall dependencies using `npm install`.

##### The code ("Code") in this repository was created solely by the student teams during a coding competition hosted by JPMorgan Chase Bank, N.A. ("JPMC").						JPMC did not create or contribute to the development of the Code.  This Code is provided AS IS and JPMC makes no warranty of any kind, express or implied, as to the Code,						including but not limited to, merchantability, satisfactory quality, non-infringement, title or fitness for a particular purpose or use.