# Contributing to NatureNani

Thank you for your interest in NatureNani. This is the public reference implementation maintained by [Opound LLC](https://opound.com). Contributions are welcome in the areas described below.

## What this repo is

`naturenani-public` is a curated public showcase of NatureNani's frontend component architecture and RAG integration patterns. It does **not** contain the full production codebase, backend logic, proprietary prompt engineering, or live API credentials.

## How you can contribute

### Bug reports and UI feedback
If you notice a bug in the components, a broken rendering, or a layout issue — please [open an issue](https://github.com/baggan1/naturenani-public/issues) with:
- A clear description of the problem
- Steps to reproduce
- Your browser/environment (OS, browser, Node version)
- A screenshot if relevant

### Feature suggestions
We welcome ideas that align with NatureNani's mission: accessible, AI-powered Ayurvedic wellness. Open an issue tagged `enhancement` and describe:
- The user problem you're solving
- Your proposed approach
- Any relevant wellness, accessibility, or AI ethics considerations

### Code contributions
For non-trivial changes, open an issue first to align on direction before writing code. For small fixes, a pull request is fine directly.

**Before submitting a PR:**
1. Fork the repo and create a feature branch from `main`
2. Follow the existing code style (TypeScript, functional React components, Tailwind utility classes)
3. Do not commit any `.env` files, API keys, or credentials — see [SECURITY.md](./SECURITY.md)
4. Test your changes locally with `npm run dev`
5. Write a clear PR description explaining what you changed and why

### Knowledge contributions
NatureNani is grounded in Ayurvedic tradition. If you have expertise in Ayurveda, Naturopathy, or traditional healing systems and spot inaccuracies in wellness content or herb/remedy descriptions, please open an issue tagged `content-accuracy`. We take knowledge integrity seriously.

## What we are not looking for

- Changes to the AI model selection or prompt structure (these are managed in the private repo)
- Modifications to Supabase schema or RLS policies (backend only)
- Unsolicited redesigns of core UI patterns
- Contributions that add telemetry, tracking, or third-party data collection

## Code of conduct

This project follows a simple standard: be respectful, be constructive, and be honest. Harassment, dismissiveness, or bad-faith contributions will result in removal from the project.

## Questions

For general questions about NatureNani or Opound's AI consulting work, reach out via [opound.com](https://opound.com) or connect on [LinkedIn](https://www.linkedin.com/in/navilla/).
