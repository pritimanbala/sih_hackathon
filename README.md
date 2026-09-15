# MediTriage AI Imaging Platform

MediTriage is a React + Vite healthcare workflow prototype for imaging triage, patient intake, clinical review, referrals, and case completion. It includes separate admin, doctor, radiologist, and patient kiosk experiences.

## Features

- Role-based admin, doctor, and radiologist dashboards
- Patient queue, registration, assignments, referrals, notifications, and completed cases
- Patient kiosk flow for ABHA ID sign-in, new patient registration, consent, and intake preparation
- Global language selector with English, Hindi, and Tamil options
- ABHA QR extraction that accepts payloads containing the standard `12-3456-7890-1234` identifier, including whitespace or separator variations
- Browser-based QR camera scanning through `html5-qrcode`

## Technology

- React 19
- TypeScript
- Vite
- Tailwind CSS 4
- Recharts
- html5-qrcode

## Getting started

Requirements: Node.js and pnpm.

```bash
pnpm install
pnpm dev
```

The development server runs on the port configured by the environment, commonly `8443`. Open the Vite preview URL shown by the development environment.

## Available scripts

```bash
pnpm dev       # Start the development server
pnpm build     # Create a production build
pnpm preview   # Preview the production build
pnpm format    # Format the project with oxfmt
```

## Main flows

### Staff workspace

Choose a role from the login screen to access the corresponding workspace. Staff can review queues, manage assignments, inspect clinical summaries, handle referrals, and track completed cases.

### Patient kiosk

Open the kiosk from the patient entry point, select a language from the top-right selector, then choose an existing ABHA ID flow or new patient registration. For QR scanning, a valid ABHA identifier is extracted from the decoded payload and the patient confirmation step opens automatically.

The accepted canonical format is:

```text
12-3456-7890-1234
```

The scanner also tolerates spaces, tabs, newlines, and hyphen variations around the 14 digits. If a QR payload does not contain a 14-digit ABHA identifier, the kiosk displays a manual-entry fallback.

## Project structure

```text
src/
├── components/   Shared application shell and UI components
├── data/         Mock workflow data used by the prototype
├── services/     ABHA validation and browser speech helpers
├── views/        Staff dashboards and patient kiosk screens
├── App.tsx       Application provider and view router
├── context.tsx   Shared workflow, kiosk, language, and session state
└── types.ts      Shared TypeScript domain types
```

## Notes

This is a frontend prototype. Workflow state and intake records are stored in browser local storage for demonstration. Camera access requires browser permission and HTTPS or a supported local development origin. Consent copy, identity verification, and clinical workflows should be reviewed by the hospital's legal, privacy, and compliance teams before production use.

## License

This project is intended for the SIH hackathon prototype and does not currently declare a separate open-source license.
