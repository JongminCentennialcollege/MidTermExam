pipeline {
    agent any
    
    tools { 
        nodejs "NodeJS" 
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

      
        stage('Deliver') {
            steps {
               
                sh 'echo "Deliver stage - Mock step for releasing artifact"'
            }
        }


        stage('Deploy to Dev Env') {
            steps {
             
                sh 'echo "Deploying to Development Environment - Mock deployment"'
            }
        }

    
        stage('Deploy to QAT Env') {
            steps {
                
                sh 'echo "Deploying to QAT Environment - Mock deployment"'
            }
        }

       
        stage('Deploy to Staging Env') {
            steps {
               
                sh 'echo "Deploying to Staging Environment - Mock deployment"'
            }
        }

  
        stage('Deploy to Production Env') {
            steps {
              
                sh 'echo "Deploying to Production Environment - Mock deployment"'
            }
        }
    }
}
