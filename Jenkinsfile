pipeline {
     agent any
     stages {
        stage("Build") {
            steps {
                sh "cd front"
                sh "sudo npm install"
                sh "sudo npm run build"
            }
        }
        stage("Deploy") {
            steps {
                sh "sudo rm -rf /var/www/jenkins-react-app/front"
                sh "sudo cp -r ${WORKSPACE}/front/build/ /var/www/jenkins-react-app/front"
            }
        }
    }
}