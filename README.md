# Claret research website

## [Read the research article →](https://jbensonj.github.io/claret-laceration-dmg-research/)

The website includes the original videos, damage screenshots, build details, equations, and research limitations. This GitHub repository holds the source files and evidence behind the article.

Standalone static article for GitHub Pages. No framework, package installation, or external equation-rendering dependency. Open `index.html`, or run `node serve.mjs` and visit http://127.0.0.1:4173.

## Status

Working draft with supplied media, transcribed build, source links, ratio calculations, and explicit research limitations. Author name, exact test version, exact combat CRIT Rate in A and clip B target settings still need confirmation. The tester confirmed A had no discs or W-Engine and B had discs only for 119% combat CRIT Rate. Clip A menu shows enemy level 70, conflicting with the initial note of 60. A and B show max HP 5,651 and 9,262 respectively.

## Edit

- `index.html`: article, methods, and references.
- `style.css`: dark research article layout and responsive styles.
- `article.js`: equation exploration and video seek controls.
- `assets/`: original supplied files (renamed build screenshots), plus four extracted evidence frames.
- `research/observations.json`: structured observations, distinct from interpretation.
- `research/calculate.mjs`: reproducible arithmetic; run with Node.
- `research/manifest.json`: SHA-256 hashes and sizes of deliverable media.
- `research/frames/`: local sampling contact sheets, kept outside the intended publication assets.

## GitHub Pages

Repository: https://github.com/jbensonj/claret-laceration-dmg-research. Pages publishes the `main` branch root. Paths are relative and work below the repository subpath. No build is required. `research/frames/` and local publishing helpers are excluded from Git. The preview server is only a local development tool; GitHub serves the static files directly. See https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site.

The original clips are each under 21 MB. The article embeds these files directly. The repository retains the owner's existing MIT license. Third-party game assets remain the property of their respective rights holders; the software license does not grant rights to those assets.

## Tester voice (kept separate from analysis)

- Wants a research-focused GitHub website to publish findings, with videos, images, and equations.
- Initially reported the boss and character as level 60, and no Perfect Dodge because the enemy was immovable.
- Reported “M0W0” and identified the finding as the Laceration core effect “being able to crit twice.”

The article's stronger or narrower wording is editorial interpretation for review; it should not be treated as the tester's verbatim conclusion.

- Tester clarification: A was completely unequipped; B used discs only to reach 119% CRIT Rate.
