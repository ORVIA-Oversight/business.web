# Morrow Studio — ORVIA Web Showcase Build 04

Production target: https://business.web.orvia.org.uk/

This app is designed to be deployed with the Vercel Root Directory set to `apps/business`.

## Included

- Premium image-led Morrow Studio public site
- About, Services, Reviews, Contact and Demo Information routes
- Six-step working demonstration booking flow
- Service preselection from service CTAs
- Session-isolated demo bookings using `sessionStorage`
- Booking success reference (`MOR-DEMO-XXXX`)
- Morrow Desk owner app: Today, Bookings, Customers, Services, Availability, Messages
- Working reschedule/move flow
- Demonstration service on/off, price and duration controls
- Mobile Morrow Desk bottom navigation
- NOINDEX/NOFOLLOW robots configuration
- No live payment keys or real external messaging
- Video section prepared as a deliberate placeholder for the future Morrow film

## Video handoff

When the final video is supplied, the intended production asset path is:

`/public/media/business/morrow-demo.mp4`

The current build intentionally shows a polished poster-style placeholder instead of a broken player.

## Media

The current code uses curated remote editorial image assets as a safe build fallback. Before final production handoff, replace them with the commissioned/generated Morrow media set under `/public/media/business/` if you want the repository to be fully self-contained.

## Run

```bash
npm install
npm run dev
```

## Vercel

Set the project Root Directory to:

`apps/business`

Then connect the production domain:

`business.web.orvia.org.uk`
