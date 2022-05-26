echo "wait holuba_db server"
dockerize -wait tcp://holuba_db:3306 -timeout 20s

echo "start node server"
nodemon index.js