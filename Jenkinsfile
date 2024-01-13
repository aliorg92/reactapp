pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                sh 'docker-compose up -d'
            }
        }
        stage('push image to gitlab registry') {
            steps { 
                script {
                    withCredentials([usernamePassword(credentialsId: 'DockerHub', usernameVariable: 'USERNAME', passwordVariable: 'PASSWORD')]) {
                        
                        sh "echo $PASSWORD | docker login -u $USERNAME --password-stdin"
                        sh "docker tag alifronrfndimage aliorg92/alifronrfndimage"
                        
                        sh "docker push aliorg92/alifronrfndimage"
                    }
                }
            }
        }
}
