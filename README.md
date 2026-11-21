# Linda Sharaf, portfolio

My personal portfolio: https://lindasharaf.github.io

Plain HTML, CSS and JavaScript. No frameworks, no build step, no npm.

## Files

| File | What it does |
|---|---|
| `index.html` | All the content of the site (projects, experience, about, contact) |
| `style.css` | All the design: colours, fonts, layout, mobile version |
| `script.js` | Two small things: the menu bar turns black when you scroll, and the contact form sends without leaving the page |
| `404.html` | The page people see if they open a link that doesn't exist |
| `robots.txt`, `sitemap.xml` | Help search engines find and index the site |
| `.nojekyll` | Tells GitHub Pages to serve the files as they are |
| `assets/` | CV, paper, certificate, favicon and the social share image (`og.png`) |
| `fonts/` | Bodoni Moda and Hanken Grotesk, self-hosted (SIL Open Font License, see the `OFL-*.txt` files) |

## Editing

- Change text: edit `index.html`, save, refresh the browser.
- Change colours: edit the variables at the top of `style.css` (`--burgundy`, `--apricot`, and so on).
- Update the CV: replace `assets/Linda-Sharaf-CV.pdf` with a new file of the same name.

## Run locally

Open `index.html` in a browser by double-clicking it. That's all.

## Contact form

The form uses [FormSubmit](https://formsubmit.co). The first message sent through it triggers an activation email to lindasharaf@hotmail.com; click the link in that email once, and every message after that arrives normally.
