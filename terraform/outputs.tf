# outputs.tf

output "site_url" {
  description = "The live URL of the deployed Netlify site."
  # This attribute 'url' exists and is the correct one to use for the live site.
  value       = "https://${netlify_site.challenge_site.name}.netlify.app"
}

output "site_admin_url" {
  description = "The admin URL for the site in the Netlify UI."
  # We are constructing this URL manually using the site's name, which IS an available attribute.
  value       = "https://app.netlify.com/sites/${netlify_site.challenge_site.name}/overview"
}

output "site_id" {
  description = "The unique identifier for the Netlify site."
  # The 'id' attribute is available and provides the unique identifier for the site.
  value       = netlify_site.challenge_site.id
}
