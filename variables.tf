variable "github_repo_path" {
  type        = string
  default = "sadebare/Eventdrive"
  description = "The path of your GitHub repository (e.g., 'your-username/your-repo-name')."
}

variable "site_name_prefix" {
  type        = string
  description = "A prefix for the Netlify site name to ensure it's somewhat recognizable."
  default     = "tf-challenge"
}

variable "NETLIFY_AUTH_TOKEN" {
  description = "Your Netlify personal access token"
  type        = string
  sensitive   = true
}

variable "github_token" {
  description = "Your GitHub personal access token"
  type        = string
  sensitive   = true
}
