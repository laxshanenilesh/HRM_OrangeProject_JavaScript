
pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                echo 'Jenkins is checking out the Playwright project from GitHub'
                checkout scm
            }
        }

        stage('Install Dependencies') {
            steps {
                bat 'npm ci'
            }
        }

        stage('Install Playwright Browser') {
            steps {
                bat 'npx playwright install chromium'
            }
        }

        stage('Run Playwright Tests') {
            steps {
                bat 'npx playwright test'
            }
        }
    }

    post {
        always {
            archiveArtifacts artifacts: 'playwright-report/**, test-results/**',
                             allowEmptyArchive: true
        }
    }
}
