# 1. Configure providers and HCP Terraform backend (no change here)
terraform {
  required_providers {
    netlify = {
      source  = "AegirHealth/netlify"
      version = "0.6.12"
    }
    random = {
      source  = "hashicorp/random"
      version = "3.4.3"
    }
  }

  cloud {
    organization = "shittu-barry"
    workspaces {
      name = "netlify-challenge"
    }
  }
}

# 2. Configure the Netlify provider (no change here)
provider "netlify" {
    token = var.NETLIFY_AUTH_TOKEN
}

# 3. Use the Random provider for a unique name (no change here)
resource "random_pet" "site_suffix" {
  length = 2
}

# 4. Create a deploy key that Netlify can use to access your private repo.
# Terraform will handle the generation of the public/private key pair.
resource "netlify_deploy_key" "challenge_key" {}

# 5. Define the Netlify Site resource with build settings
resource "netlify_site" "challenge_site" {
  name = "${var.site_name_prefix}-${random_pet.site_suffix.id}"

  repo {
    repo_branch   = "main"
    # deploy_key_id = "${netlify_deploy_key.key.id}"
    provider      = "github"
    repo_path     = var.github_repo_path
    command = "npm run build"
    dir = "dist"
    deploy_key_id = netlify_deploy_key.challenge_key.id
  }
  
}

