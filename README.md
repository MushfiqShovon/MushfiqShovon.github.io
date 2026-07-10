# Md Mushfiqur Rahaman — Portfolio Website

A fast, dynamic, single-page portfolio built with plain **HTML, CSS, and
JavaScript** — no build step, no frameworks, no dependencies. It renders all
content from a single data file and works offline.

**Live sections:** Hero · About · Research Focus · Experience & Education ·
Projects (filterable) · Publications · Skills · Awards / Speaking / Leadership ·
Contact. Includes a **dark / light theme toggle**, scroll animations, a reading
progress bar, and a responsive mobile menu.

---

## 📁 Folder structure

```
portfolio/
├── index.html            # Page structure
├── css/
│   └── style.css         # All styling (dark + light themes)
├── js/
│   ├── data.js           # ← ALL your content lives here (edit this)
│   └── main.js           # Renders the page + interactions
├── assets/
│   ├── img/profile.jpeg  # Your photo
│   └── docs/             # Your CV PDFs (Academic + Professional)
└── README.md
```

## ✏️ How to update content

Open **`js/data.js`** and edit the values — name, about text, projects,
publications, skills, etc. The whole site rebuilds from that file, so you never
have to touch the HTML. To add a project, copy one `{ ... }` block inside the
`projects: [ ]` list and change the text. New project categories automatically
get their own filter button.

Two things worth setting right away in `data.js`:
- `contacts.github` → replace `"https://github.com/"` with your GitHub profile URL.
- Swap the CV PDFs in `assets/docs/` anytime you update your résumé (keep the same filenames, or update the paths in `data.js`).

## 👀 Preview locally

Just double-click `index.html`, or run a tiny local server for best results:

```bash
cd portfolio
python3 -m http.server 8000
# then open http://localhost:8000
```

---

## 🚀 Publish on GitHub (two options)

### Option A — Personal profile site at `https://<username>.github.io`

1. On GitHub, create a **new public repository** named exactly
   **`<your-username>.github.io`** (e.g. `mushfiq-shovon.github.io`).
2. Upload **the contents of this `portfolio/` folder** to the repo root
   (so `index.html` sits at the top level, not inside a `portfolio/` subfolder).
   - Web way: open the repo → **Add file → Upload files** → drag in `index.html`,
     the `css`, `js`, and `assets` folders → **Commit**.
3. Go to **Settings → Pages**. Under *Build and deployment*, set
   **Source = Deploy from a branch**, **Branch = `main` / root**, then **Save**.
4. Wait 1–2 minutes. Your site is live at `https://<username>.github.io`.

### Option B — Project site (keeps your username free)

1. Create any public repo, e.g. **`portfolio`**.
2. Upload the contents of this folder to the repo root and commit.
3. **Settings → Pages → Source = Deploy from a branch → `main` / root → Save**.
4. Site goes live at `https://<username>.github.io/portfolio/`.

> **Tip — feature it on your GitHub profile:** create a repo named after your
> username (e.g. `mushfiq-shovon/mushfiq-shovon`), add a `README.md`, and link to
> your live portfolio there. That README shows at the top of your GitHub profile.

---

## 🎨 Customization notes

- **Colors:** change the accent variables at the top of `css/style.css`
  (`--accent`, `--accent-2`, `--accent-3`). Everything else follows.
- **Default theme:** the page opens in dark mode (`<html data-theme="dark">` in
  `index.html`); switch to `"light"` there if you prefer a light default.
- **Fonts:** Sora + Inter, loaded from Google Fonts. Fully responsive down to
  mobile, with a slide-in menu.

Built with ❤️ using vanilla HTML, CSS & JavaScript.
