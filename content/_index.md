---
# Leave the homepage title empty to use the site title
title: ""
date: 2022-10-24
type: landing
js: '/assets/js/scripts.js'

show_breadcrumb: true

design:
  # Default section spacing
  spacing: "4rem"

sections:
  - block: 'github.lingeringcode.lndgrn-cv-hero'
    content:
      hero_bg_image_url: '/assets/media/ferrite-core-magnetic-memory-5-patent-fig-logo.png'
  - block: resume-biography-3
    content:
      username: admin
      text: ""
      # Show a call-to-action button under your biography? (optional)
      button:
        text: Download CV
        url: 'assets/media/clindgrencv.pdf'
    design:
      css_class: light
      background:
        color: light
  - block: collection
    id: recent-publications
    content:
      title: Recent Publications
      # Choose how many pages you would like to display (0 = all pages)
      count: 6
      # text: ""
      filters:
        # featured_only: true
        folders:
          - publication
        exclude_featured: false
    design:
      view: article-grid
      columns: 3
  - block: collection
    id: projects
    content:
      title: Projects
      filters:
        folders:
          - project
    design:
      view: article-grid
      columns: 1
---

<script defer src="/assets/js/script.js"></script>