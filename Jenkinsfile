pipeline {
    agent any 

    environment {

        
    }

    stages {
        stage('Checkout') {
            steps {
                checkout scm 
            }
        }

        stage('Install dependencies') {
            steps {
                sh 'npm install' 
            }
        }

        stage('Build') {
            steps {
                sh 'npm run build' 
            }
        }

        stage('SonarQube analysis') {
            steps {
                sh "sonar-scanner -Dsonar.projectKey=${SONAR_PROJECT_KEY} -Dsonar.sources=." 
            }
        }

        stage('Test') {
            steps {
                sh 'npm test' 
                
            }
        }

        stage('Deliver') {
            steps {
               
            }
        }

        stage('Deploy to Dev Env') {
            steps {
                sh 'echo Deploying to Development Environment' 
            }
        }

        stage('Deploy to QAT Env') {
            steps {
                sh 'echo Deploying to QAT Environment' 
            }
        }

        stage('Deploy to Staging Env') {
            steps {
                sh 'echo Deploying to Staging Environment' 
            }
        }

        stage('Deploy to Production Env') {
            steps {
                sh 'echo Deploying to Production Environment' 
            }
        }
    }
}
