pipeline {
    agent none
    options { skipDefaultCheckout(false) }
    stages {
        stage('git pull') {
            agent any
            steps {
                checkout scm
            }
        }
        stage('Docker setting') {
            agent any
            steps {
                sh 'docker ps -f name=server -q \
                | xargs --no-run-if-empty docker container stop'
                sh 'docker ps -f name=web -q \
                | xargs --no-run-if-empty docker container stop'

                sh 'docker container ls -a -f name=server -q \
                | xargs -r docker container rm'
                sh 'docker container ls -a -f name=web -q \
                | xargs -r docker container rm'

                sh 'docker rmi -f server'
                sh 'docker rmi -f web'
            }
        }
        stage('Docker compose run') {
            agent any
            steps {
                sh 'docker-compose up -d'
            }
        }
    }
}
