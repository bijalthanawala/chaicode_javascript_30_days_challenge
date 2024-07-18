## Run the daily javascript file using a node container (Example: Run day 1 file)
`docker run --rm --volume $(pwd):/home/node node:alpine /home/node/day_001*.js`


## (Optional) Use eslint

### Build the docker image with eslint (*Note:* This is a one-off step) 
`docker build -t <name of the image> .`

### After the image is ready, eslint file at a time as you progress daily (Example: Lint day 1 file)
`docker run --rm --volume $(pwd):/home/node/js <name of the image> /home/node/js/day_001_*.js`

### Or lint all the files anytime
`docker run --rm --volume $(pwd):/home/node/js <name of the image> /home/node/js/*.js`
