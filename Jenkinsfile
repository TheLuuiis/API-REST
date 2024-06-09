pipeline {
    agent any

    stages {
        stage('Clonacion del Repositorio') {
            steps {
                git branch: 'master', url: 'https://github.com/TheLuuiis/API-REST'
            }
        }
        stage('Construccion de Docker image') {
            steps{
                script {
                    docker.build('myapp:v1', '.')
                }
            }
        }
        stage('Desplegar contenedores docker') {
            steps {
                script {
                    sh 'docker-compose up -d'
                }
            }
        }
    }
    post {
        always {
            emailext(
                subject: "Jenkins Build ${currentBuild.fullDisplayName}",
                body: "Build ${currentBuild.fullDisplayName} completed",
                to: "juan.madrinanjp@est.iudigital.edu.co"
            )
        }
    }
}