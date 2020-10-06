pipeline {
    agent any

    stages {
        stage('Install') {
            steps {
                npm install
            }
        }
        stage('test') {
            steps {
                npm test
            }
        }
        
    }
}
