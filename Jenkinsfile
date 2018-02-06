pipeline {
  agent any
  stages {
    stage('Node Update') {
      steps {
        sh 'npm -v'
        sh 'npm install'
      }
    }
    stage('Unit Testing') {
      steps {
        sh 'npm test'
      }
    }
  }
}