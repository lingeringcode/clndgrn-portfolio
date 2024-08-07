---
# An instance of the Contact widget.
widget: contact

# This file represents a page section.
headless: true

# Order that this section appears on the page.
weight: 130

title: Contact
subtitle:

content:
  # Automatically link email and phone or display as text?
  autolink: true
  
  # Email form provider
  form:
    provider: netlify
    formspree:
      id:
    netlify:
      # Enable CAPTCHA challenge to reduce spam?
      captcha: false

  # Contact details (edit or remove options as required)
  email: calindgr@ncsu.edu
  # phone: 888 888 88 88
  address:
    street: 131D Tompkins Hall, 2211 Hillsborough St
    city: Raleigh
    region: NC
    postcode: '27695'
    country: United States
    country_code: US
  coordinates:
    latitude: '35.786740'
    longitude: '-78.665150'
  # directions: Enter Shanks Hall and take the stairs to Office 207 on Floor 2
  # office_hours:
  #   - 'Monday 10:00 to 13:00'
  #   - 'Wednesday 09:00 to 10:00'
  # appointment_url: 'https://calendly.com'
  contact_links:
    - icon: twitter
      icon_pack: fab
      name: DM Me
      link: 'https://twitter.com/lndgrn'
    # - icon: video
    #   icon_pack: fas
    #   name: Zoom Me
    #   link: 'https://zoom.com'

design:
  columns: '2'
---
