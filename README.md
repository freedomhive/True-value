# True Value Realty — website starter

Mobile-first static website using HTML, CSS, vanilla JavaScript, Firebase Authentication and Firestore. Designed for Cloudflare Pages and GitHub.

## Included
- Responsive public homepage, listing catalogue and property detail page
- Search/filter UI
- WhatsApp enquiry form (requires official number configuration)
- Firebase Authentication sign-in (no public sign-up)
- Admin property create/edit/delete and publish/draft workflow
- Firestore rules template
- Privacy notice starter

## Important before launch
This is a starter implementation, not a deployed production site. Firebase config, Firebase admin custom claim, official phone/WhatsApp numbers, real property listings, approved photographs and domain must be configured. Do not publish invented data or sample property records. Review `SETUP.md` and `firestore.rules`.

The hero and supporting editorial photos are remote Unsplash images for general atmosphere only, not actual listings. Replace them with properly licensed brand imagery before launch. Property catalogue starts empty by design.

## Local testing
Because the project uses ES modules, run a static local web server (for example `python -m http.server 8000`) and open `http://localhost:8000`. Opening the HTML file directly may block module imports.
