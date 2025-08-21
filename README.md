# Netlify Static Site Deployment with Terraform & HCP Terraform

## Overview

This project demonstrates how to deploy a static frontend site to Netlify using Terraform, with state management handled securely via HCP Terraform (Terraform Cloud). The workflow is designed to be reproducible and team-friendly, ensuring all secrets are kept out of the repository.

## Workflow Summary

- **Source code**: Minimal static site (HTML/Markdown/assets) in the repo.
- **Infrastructure as Code**: All Terraform files are located in the `terraform` directory.
- **CI/CD**: GitHub Actions pipeline automates Terraform operations and Netlify deployment.
- **State Management**: Terraform state is stored remotely in HCP Terraform.
- **Secrets**: All sensitive credentials are managed via GitHub and HCP Terraform secrets.

## Prerequisites

- Terraform v1.5+ installed locally (or use the provided GitHub Actions workflow).
- Free Netlify account and a Personal Access Token.
- HCP Terraform (Terraform Cloud) account, organization, and workspace.
- GitHub repository with required secrets set:
  - `NETLIFY_AUTH_TOKEN` (Token from netlify stored in HCP terraform)
  - `TF_API_TOKEN` (HCP Terraform user/team token)
  - `GITHUB_TOKEN` (automatically provided by GitHub Actions)

## Setup Steps

1. **Clone the repository**  
   `git clone https://github.com/sadebare/Eventdrive`

2. **Configure HCP Terraform**  
   - Create an organization and workspace in HCP Terraform.
   - Add your `TF_API_TOKEN` in your GitHub repository secrets.

3. **Set Netlify Credentials**  
   - Generate a Netlify Personal Access Token.
   - Add it as `NETLIFY_AUTH_TOKEN` as a workspace variable.

4. **Customize Variables**  
   - Edit variables in `terraform/variables.tf` (e.g., site name).

5. **Run Terraform Locally (optional)**  
   ```
   cd terraform
   terraform init
   terraform plan
   terraform apply
   ```

6. **CI/CD Pipeline**  
   - On push to `main`, GitHub Actions will:
     - Run Terraform commands in the `terraform` directory.
     - Deploy the built site to Netlify using the CLI.

## Directory Structure

```
.
├── terraform/
│   ├── main.tf
│   ├── variables.tf
│   └── outputs.tf
├── src/
│   └── index.html
├── .github/
│   └── workflows/
│       └── main.yml
├── .gitignore
└── README.md
```

## Pipeline Details

- **Terraform Init/Apply**: Runs in the `terraform` directory.
- **Netlify Deploy**: Uses Netlify CLI, authenticates via secrets.
- **Outputs**: The live site URL is shown after apply and in workflow logs.

## Variables

- `site_name`: Custom name for your Netlify site.
- Other variables can be set in `terraform/variables.tf`.

## Outputs

- `site_id`: Netlify site ID.

## Excluding Secrets

- `.gitignore` excludes local state and secrets:
  ```
  .terraform/
  terraform.tfstate
  terraform.tfstate.backup
  *.tfvars
  ```

## Live Site

- [Netlify Site][(https://your-site-name.netlify.app](https://tf-challenge-trusty-goldfish.netlify.app/))

## Screenshot

Include a screenshot of a successful `terraform apply` showing the live URL.
