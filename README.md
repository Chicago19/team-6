# Code for Good - Team 6

## Project requirements
- MongoDB Cluster
- AWS S3 bucket

## Set up the dev env locally

Our project run using React.JS for the front-end, Express.JS for the backend, and MongoDB for our database. To get it running, run git clone on `https://github.com/Chicago19/team-6.git` and install the following:

1. npm/npx (npx comes with npm)
2. nodemon; `npm install --save-dev nodemon`
3. react-scripts; `npm install react-scripts`
4. react-dom; `npm install react react-dom --save`
4. concurrently; `npm install concurrently --save`
5. MongoDB; `npm install mongodb --save`

Then, `cd` into the `parents` folder and run `npm run dev`.

## Troubleshooting

If you have any dependency errors, try removing `node_modules` with `rm -rf node_modules` and reinstall dependencies using `npm install`.
