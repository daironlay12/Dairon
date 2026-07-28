# D-Lay Prestige Solutions

A clean, responsive marketing website for **D-Lay Prestige Solutions**. It's a
self-contained static site — no build tools, frameworks, or dependencies. Just
open it in a browser or drop it on any static host.

## Preview locally

Open `index.html` directly in your browser, or run a tiny local server:

```bash
# Python 3
python3 -m http.server 8000
# then visit http://localhost:8000
```

## Structure

| File         | Purpose                                              |
| ------------ | ---------------------------------------------------- |
| `index.html` | Page markup and all section content                  |
| `styles.css` | Styling — colors, spacing, and type are CSS variables |
| `script.js`  | Mobile menu, footer year, and contact-form handling  |

## Customizing

Everything is meant to be easy to edit:

- **Colors / theme** — edit the `:root` variables at the top of `styles.css`
  (`--navy`, `--gold`, etc.).
- **Business info** — update the contact email and phone in `index.html`
  (search for `daironlay12@gmail.com` and `(000) 000-0000`).
- **Services / copy** — the `Services`, `About`, `Why Us`, and `Testimonials`
  sections in `index.html` are placeholders; swap in your real content.

## Contact form

The form currently validates input and shows a confirmation message, but does
**not** send email yet. To receive submissions, connect it to a form backend
(for example [Formspree](https://formspree.io) or [Netlify Forms](https://docs.netlify.com/manage/forms/setup/))
or your own endpoint — see the note in `script.js`.

## Deploying

Because it's static, you can host it free on GitHub Pages, Netlify, Vercel, or
Cloudflare Pages. For GitHub Pages: push to your repo, then enable Pages in the
repository settings pointing at the branch root.

---

_This is a starting point — customize the content, colors, and contact details
to match the business._
