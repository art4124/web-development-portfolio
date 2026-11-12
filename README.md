# Web Development & App Portfolio

A curated, responsive showcase of AI-assisted websites, application prototypes, and personal tools. The site emphasizes product direction, UX/UI, functional testing, and iterative improvement.

**Portfolio homepage:** https://art4124.github.io/web-development-portfolio/

## Featured work

| Project | Current status | Demo | Source |
| --- | --- | --- | --- |
| Chaeksoop — Korean Reading Library | Functional in-development build; audio/filtering checks ongoing | [Open app](https://art4124.github.io/chaeksoop/) | [Repository](https://github.com/art4124/chaeksoop) |
| Vune — Privacy-First Wellness Tracker | Functional browser prototype; not production or clinical software | [Open prototype](https://art4124.github.io/app_test/) | [Repository](https://github.com/art4124/app_test) |
| Interactive Career Roadmap | Personal-use planning tool; no public demo promoted | Not linked | [Repository](https://github.com/art4124/roadmap) |
| Data Analytics Portfolio | Live website; the analytics case studies are not yet completed | [Open site](https://art4124.github.io/data-analytics-portfolio/) | [Repository](https://github.com/art4124/data-analytics-portfolio) |
| Web Development Portfolio | This live website | You're viewing it | [Repository](https://github.com/art4124/web-development-portfolio) |

Statuses reflect development maturity, not independent production-security certification.

## Site features

- Five-project carousel, with a seamless wraparound slide transition.
- Mobile-friendly layouts and navigation.
- English, Spanish, and Korean localization.
- Dedicated contact page.
- Project cards linking to GitHub repositories and appropriate demos.
- Embedded ChatGPT/OpenAI icon in the Designed By section, avoiding the external favicon-loading issue.

## Repository guide

```text
index.html       # Landing page and featured project cards
contact.html     # Contact page
styles.css       # Responsive layout and visual system
script.js        # Navigation, animations, and project carousel
language.js      # English, Spanish, and Korean UI text
icon.JPEG        # Site image asset
README.md        # Project overview
```

The static-site files remain at the repository root because HTML references them directly. No build tool is required.

## Local preview

```sh
python3 -m http.server 8000
```

Open http://localhost:8000/. All features should be tested in a browser rather than assumed functional from a source-code review alone.

## My contribution

I define project goals and requirements, guide UX/UI decisions, review and test behavior, investigate bugs, and direct refinements. Generative AI assists with implementation and troubleshooting. This description does not imply that I hand-wrote every line or that each listed app is production-ready.

## Review checklist

- Verify desktop and mobile navigation, carousel arrow/swipe/dot behavior, and both wraparound directions.
- Check all three translations, project statuses, and external links.
- Confirm privacy-sensitive personal tools are not directly linked from the public project cards.
- Update each project's status only after the related features have been validated.

Publicly visible code is not automatically available for reuse without permission; no license is granted by this README.
