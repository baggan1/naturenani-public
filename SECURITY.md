# Security Policy

## Scope

This document applies to the `naturenani-public` repository, maintained by [Opound LLC](https://opound.com). This is a public reference repo — it does not contain production credentials, live database access, or the full NatureNani application backend.

## Reporting a vulnerability

If you discover a security vulnerability in this codebase, please **do not open a public GitHub issue**. Instead, report it responsibly by emailing:

**security@opound.com**

Please include:
- A description of the vulnerability and its potential impact
- Steps to reproduce or a proof-of-concept (if applicable)
- The affected file(s) or component(s)
- Your suggested fix or mitigation, if you have one

We will acknowledge receipt within **72 hours** and aim to respond with a remediation plan within **7 business days** for confirmed vulnerabilities.

## What to report

We consider the following in scope:
- Exposed or hardcoded API keys, credentials, or secrets in committed code
- Cross-site scripting (XSS) vulnerabilities in React components
- Insecure dependencies with known CVEs (check via `npm audit`)
- Logic flaws that could lead to unauthorized data access if this code were deployed

Out of scope for this public repo:
- Issues in third-party services (Supabase, Google Gemini, Stripe) — report those directly to the respective vendors
- Findings from automated scanners without manual verification
- Social engineering or phishing attempts

## Credentials and secrets

**Never commit secrets to this repo.** All environment variables must be stored in `.env.local` (already in `.gitignore`). The expected variables are documented by name only in the README:

```
VITE_GEMINI_API_KEY
VITE_SUPABASE_URL
VITE_SUPABASE_ANON_KEY
```

If you fork this repo and accidentally commit credentials, rotate them immediately via the relevant provider dashboard (Google Cloud Console, Supabase project settings, Stripe dashboard).

## Dependency security

This project uses `npm`. Before running the project locally, it is good practice to run:

```bash
npm audit
npm audit fix
```

We periodically review dependencies for known vulnerabilities. Pull requests that update outdated or vulnerable dependencies are welcome.

## AI and data handling

NatureNani processes user wellness queries through Google Gemini models and retrieves context via Supabase pgvector. This public repo does not connect to any live data. In the production deployment:
- No personally identifiable information (PII) is logged at the AI layer
- Supabase Row Level Security (RLS) policies enforce per-user data isolation
- All API calls are made server-side or via short-lived client tokens

## Disclosure policy

We follow responsible disclosure. We ask that you:
1. Give us reasonable time to remediate before public disclosure
2. Avoid accessing or modifying data that is not yours
3. Act in good faith

We will acknowledge researchers who report valid vulnerabilities in our public changelog, with your permission.

---

*This policy was last reviewed: May 2026*  
*Maintained by Navilla Bagga, Opound LLC — [opound.com](https://opound.com)*
