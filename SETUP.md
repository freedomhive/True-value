# Setup and launch checklist

## 1. Create Firebase
1. The supplied configuration currently points to the Firebase project `clad-whale` (auth domain `clad-whale.firebaseapp.com`). Confirm you own/control this project and intend to use it for True Value Realty; its project name suggests it may belong to another brand.
2. If this is the correct project, enable Authentication and Firestore in that project. If it is not, create a dedicated True Value Realty project and replace `assets/js/firebase-config.js` with that project's Web app configuration.
3. Firebase Web configuration values are client-side identifiers, not service-account secrets. Never put service-account private keys in this website or GitHub.
4. In Authentication → Sign-in method, enable Email/Password.
5. Create your first admin user using the Firebase Console. Do not build public account registration.
6. Create Firestore Database and deploy `firestore.rules`.

## 2. Grant the admin role securely
The Firestore rules require a Firebase Authentication custom claim `admin: true`. A user merely being signed in is not enough.

Set this claim from a trusted server or a secure one-time Admin SDK script run in a trusted environment by a project owner. Never put a service-account JSON key in this website or commit it to GitHub. After setting the claim, sign out and sign back in to refresh the ID token.

Illustrative trusted Admin SDK operation (run only in a secure, owner-controlled environment):
```js
await getAuth().setCustomUserClaims("FIREBASE_AUTH_UID", { admin: true });
```
Use the real UID from Firebase Authentication. This is an instruction, not a credential; do not paste private keys into chat or the website.

## 3. Set official business contact numbers
In `assets/js/app.js`, the business phone is already set to `8275872736`. If this number is also the official WhatsApp number, add the following line near the top after confirming it is registered on WhatsApp:
```js
window.TV_REALTY_WHATSAPP = "91XXXXXXXXXX"; // replace with confirmed WhatsApp number including country code
```
Use digits with country code for WhatsApp. Confirm the numbers belong to the business and can receive enquiries before publishing.

## 4. Add real listings
1. Sign in at `/admin/login.html`.
2. Open `/admin/`.
3. Enter accurate title, category, listing type, price, location and description.
4. Add HTTPS image URLs that you have permission to use.
5. Select ownership source and confirm listing/photo authorisation.
6. Keep status `draft` until details have been checked. Publish only when approved.
7. Third-party listings should have documented permission and accurate attribution where required.

## 5. Test security
- In Firebase Rules Playground or Emulator, verify anonymous users can read only `status == "published"` documents.
- Verify anonymous users cannot write.
- Verify signed-in users without `admin: true` cannot write.
- Verify an admin can manage records.
- Verify drafts, sold and archived listings are not visible publicly.
- Do not loosen rules to make an error disappear.

## 6. Deploy to Cloudflare Pages
1. Push the folder to a GitHub repository.
2. In Cloudflare Dashboard, create a Pages project and connect the repository.
3. Production branch: `main`.
4. Build command: `exit 0`.
5. Build output directory: `/` (the repository root).
6. Deploy, test on mobile, then configure a custom domain if available.

## 7. Before real launch
- Replace generic hero photos with properly licensed brand images.
- Add official phone, WhatsApp, company address and working hours if desired.
- Replace privacy notice with a complete policy that accurately reflects actual processing.
- Add appropriate legal disclosures and RERA details only where verified and applicable.
- Configure analytics only if desired, and update privacy disclosures accordingly.
- Test enquiry links on an actual phone.
- Confirm all third-party listings and property images are authorised.
