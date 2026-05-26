# Faissal-IZERMINE.github.io

Personal research portfolio of Faissal Izermine — live at <https://iz-f-ai-ss3.github.io/Faissal-IZERMINE.github.io/> (or whichever Pages URL is configured).

## Stack

Plain HTML + CSS + a few lines of JS. No build step, no framework. Served as static files by GitHub Pages; `.nojekyll` disables the default Jekyll processing.

## Layout

```
index.html      # main page
style.css       # all styling, includes light/dark themes
script.js       # theme toggle
.nojekyll       # disables Jekyll
assets/
  img/picture_web.jpg            # hero photo
  Faissal_IZERMINE_CV.pdf        # CV — DROP YOUR LATEST CV HERE
  projects/                      # project hero figures + PDFs
```

## Updating

- **Repo URLs:** the top of `index.html` has a block listing every repo URL the page links to. To update, just find the URL in the file and change it (or rename the GitHub repo to match).
- **Add a news item:** edit the `<section class="news">` block in `index.html`.
- **Add a project:** copy an `<article class="project">` block and adjust. Drop the figure/gif under `assets/projects/`.
- **Update CV:** replace `assets/Faissal_IZERMINE_CV.pdf`.
- **Tweak colors:** the palette lives in the `:root` block at the top of `style.css`.

## Preview locally

```bash
cd Faissal-IZERMINE.github.io
python -m http.server 8000
# open http://localhost:8000
```
