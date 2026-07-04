pipeline {
    agent any

    environment {
        IMAGE_NAME = "corporatecompany:1.0"
    }

    stages {

        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Build') {
            steps {
                bat 'mvn clean package'
            }
        }

        stage('Build Docker Image') {
            steps {
                bat 'docker build -t %IMAGE_NAME% .'
            }
        }

        stage('Run Docker Container') {
            steps {
                bat 'docker rm -f corporatecompany-app || exit 0'
                bat 'docker run -d -p 8086:8086 --name corporatecompany-app %IMAGE_NAME%'
            }
        }
    }

    post {
        success {
            echo 'Build Successful'
        }

        failure {
            echo 'Build Failed'
        }
    }
}