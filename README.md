# Github actions demo for CI/CD with Atlas app services 

Simple Atlas app services app and workflows for automations with Github actions

Contains sample code for the following processes

* Push to feature branch => Create or update DEV app in Atlas app services
* Push to staging branch => Update QA app in Atlas app services
* Push to main branch => Update PROD app in Atlas app services
* Deletion of feature branch => Delete / Clean-up of DEV app in Atlas app services
* Creation of secrets in Atlas app services (secrets need to be maintained as GitHub Secrets)

## Instructions, how to use this example?

Prerequisites:
* An atlas app service app (PROD)
* A copy of your app that is used for QA (if a QA version is not needed, it is also possible to remove all QA/staging deployment parts from the code)

Setup:
1. Create a new repository containing your Atlas app services app
(we used the folder *atlas-app* in our example)

2. Create the necessary secrets for GitHub Actions in your repository
Secrets can be created under Settings > Secrets > Actions

  * Create Secrets for the Atlas API
  ```
  ATLAS_API_PRIVATE_KEY
  ATLAS_API_PUBLIC_KEY
  ```

  * Create additional seecrets that are specific for your app (e.g. passwords or login data).
  GitHub Actions is used to create development versions of your app that contain these secrets.

3. Clone and modify the two files
```
/.github/workflows/build.yml
/.github/workflows/delete-feature-branch-artifacts.yml
```

4. Modify the variables in the code as needed for your project
```
ATLAS_PROJECT_ID: 61d3f66b516c9a03d00e09a1
ATLAS_APP_ID_PROD: cicd-demo-prod-ayrvk
ATLAS_APP_ID_QA: cicd-demo-qa-uzann
ATLAS_APP_ID_DEV_PREFIX: cicd-demo
ATLAS_CLUSTER_PROD: demo-cluster
ATLAS_CLUSTER_QA: demo-cluster-qa
ATLAS_CLUSTER_DEV: demo-cluster-dev
```
  
  


