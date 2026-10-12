# True Value Realty Merged Website

This is the merged True Value Realty site:

- Old website appearance preserved: layout, header, hero, category strip, property cards, detail page styling, admin form/list styling, typography, colors, spacing, mobile navigation, footer, and WhatsApp floating button.
- New website backend integrated: Supabase Database, Supabase Auth, Supabase Storage, published/draft/archived listings, property images, cover image selection, admin allowlist, and RLS-backed security.

## Changed Files

Primary merged files:

- `index.html`
- `properties.html`
- `property.html`
- `privacy.html`
- `terms.html`
- `admin/login.html`
- `admin/index.html`
- `assets/css/styles.css`
- `assets/js/app.js`
- `assets/js/property-detail.js`
- `assets/js/admin-login.js`
- `assets/js/admin.js`
- `assets/js/config.js`
- `assets/js/supabase-client.js`
- `supabase-setup.sql`
- `_redirects`
- `robots.txt`
- `sitemap.xml`

The obsolete Firebase runtime files are not used. The final site uses Supabase only.

## Supabase Setup

1. Create a Supabase project.
2. Open Supabase SQL Editor.
3. Run `supabase-setup.sql`.
4. In Supabase Storage, create a public bucket named `property-images`.
5. In Supabase Authentication, create your admin email/password user.
6. Copy that user's UUID.
7. Run:

```sql
insert into public.admin_users (user_id, email)
values ('AUTH_USER_UUID_HERE', 'admin@example.com');
```

Only authenticated users listed in `admin_users` can manage properties.

## Configure Frontend

Edit `assets/js/config.js`:

```js
SUPABASE_URL: "YOUR_SUPABASE_PROJECT_URL",
SUPABASE_ANON_KEY: "YOUR_SUPABASE_PUBLISHABLE_ANON_KEY",
SITE_URL: "https://your-domain.com",
```

Use the public anon/publishable key only. Never put a Supabase `service_role` key, database password, admin password, or other secret in frontend files.

## Admin Workflow

1. Open `/admin/login.html`.
2. Sign in with the Supabase admin account.
3. Open `/admin/index.html`.
4. Add a property. It can stay as `draft` or be set to `published`.
5. Select multiple JPEG, PNG, or WebP images.
6. Choose the cover image.
7. Save.
8. Published properties appear on the public website without redeploying.

The admin dashboard supports editing, deleting, publishing, unpublishing, archiving, and image removal.

## Cloudflare Pages Upload

Upload the full project folder contents to Cloudflare Pages by direct upload.

No build command is required.

Include:

- HTML files
- `admin/`
- `assets/`
- `supabase-setup.sql`
- `README.md`
- `robots.txt`
- `sitemap.xml`
- `_redirects`

Website design/code changes require re-uploading the site. Property data and photos are managed through Supabase/admin and do not require redeployment.

## Testing Notes

Local syntax checks were run for the JavaScript files. Live Supabase reads, writes, auth, and uploads require your real Supabase URL/key and admin account, so those cannot be truthfully verified until configured.

After configuration, test:

- Published listings load on home and properties pages.
- Filters/search work.
- `property.html?id=PROPERTY_ID` opens the correct published listing.
- Admin login rejects non-allowlisted users.
- Admin can create a draft, upload multiple images, set a cover, publish, edit, archive, and delete.
- Public visitors cannot modify data.
- WhatsApp enquiry links include business number and property details.
