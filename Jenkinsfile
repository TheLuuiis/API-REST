pipeline {
    agent any

    stages {
        stage('Clonacion del Repositorio') {
            steps {
                git branch: 'main', url: 'https://github.com/TheLuuiis/API-REST'
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
            emailext (
                subject: "Status del build: ${currentBuild.currentResult}",
                body: "Se ha completado el build. Puede detallar en: ${env.BUILD_URL}",
                to: "juan.madrinanjp@est.iudigital.edu.co",
                from: "jenkins@iudigital.edu.co"
            )
        }
    }
}