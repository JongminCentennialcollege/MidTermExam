pipeline {
    agent any
    
    tools { 
        nodejs "NodeJS" // Global Tool Configuration에서 설정한 Node.js 이름
    }
    
    stages {
        stage('Checkout') {
            steps {
                // 코드 저장소에서 코드 체크아웃
                checkout scm
            }
        }

        stage('Install dependencies') {
            steps {
                // 프로젝트 의존성 설치
                sh 'npm install'
            }
        }

        stage('Build') {
            steps {
                // 프로젝트 빌드
                sh 'npm run build'
            }
        }

        stage('Test') {
            steps {
                // Jest를 전역으로 설치 (필요한 경우)
                sh 'npm install -g jest'
                // 유닛 테스트 실행 및 커버리지 리포트 생성
                sh 'npm test'
            }
        }
    }
}
