# Deploy OVH — github.sarcte.eu

## Repository
`https://github.com/SARCTE/SARCTE-Developer-Portal.git`

Branch: `main`

## Local workflow
```powershell
git clone https://github.com/SARCTE/SARCTE-Developer-Portal.git
cd SARCTE-Developer-Portal
```
Copy the portal files into the cloned repository, then:
```powershell
git status
git add .
git commit -m "feat: bootstrap SARCTE Developer Portal v1.0"
git push origin main
```

## OVH configuration
1. Backup the current contents of `/home/sarctef/github/`.
2. Empty `/home/sarctef/github/` before associating Git.
3. OVH Manager → Web Cloud → Hosting → Multisite.
4. Select `github.sarcte.eu` → Associate Git.
5. Repository: `https://github.com/SARCTE/SARCTE-Developer-Portal.git`
6. Branch: `main`
7. Apply configuration.
8. Run the first Git deployment manually.
9. Verify `https://github.sarcte.eu`.
10. Configure the webhook only after the manual deployment is validated.

## Pre-push safety check
Never publish passwords, tokens, API keys, private keys, customer data, backups, internal-only architecture documents or sensitive LAB configurations.
