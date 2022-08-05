# Github actions demo for CI/CD with Atlas app services 

Simple Atlas app services app and workflows for automations with Github actions

Contains sample code for the following processes

* Push to feature branch => Create or update DEV app in Atlas app services
* Push to staging branch => Update QA app in Atlas app services
* Push to main branch => Update PROD app in Atlas app services
* Deletion of feature branch => Delete / Clean-up of DEV app in Atlas app services
* Creation of secrets in Atlas app services (secrets need to be maintained as GitHub Secrets)
