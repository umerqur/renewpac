// Conversion tracking helpers for Google Ads / GA4.
//
// The dataLayer pushes below always fire, so Google Tag Manager can listen for
// `phone_call` and `lead_form_submit` events once it's installed.
//
// If you want to call Google Ads conversion tracking directly (without GTM),
// open /index.html and replace the `AW-CONVERSION_ID` placeholders with your
// real Google Ads conversion ID + label. The gtag('event', 'conversion', ...)
// calls below will then start reporting conversions automatically.

const PHONE_NUMBER = '+19052018005'

export function trackPhoneCall(source = 'unknown') {
  if (typeof window === 'undefined') return

  window.dataLayer = window.dataLayer || []
  window.dataLayer.push({
    event: 'phone_call',
    phone_source: source,
    phone_number: PHONE_NUMBER,
  })

  if (typeof window.gtag === 'function') {
    window.gtag('event', 'conversion', {
      // Google Ads phone-call conversion. Update with your real send_to value.
      send_to: 'AW-17719269754/PHONE_LABEL',
      value: 1.0,
      currency: 'CAD',
    })
    window.gtag('event', 'phone_call', {
      phone_source: source,
      phone_number: PHONE_NUMBER,
    })
  }
}

export function trackLeadSubmit(source = 'book') {
  if (typeof window === 'undefined') return

  window.dataLayer = window.dataLayer || []
  window.dataLayer.push({
    event: 'lead_form_submit',
    form_source: source,
  })

  if (typeof window.gtag === 'function') {
    window.gtag('event', 'conversion', {
      // Google Ads lead-form conversion. Update with your real send_to value.
      send_to: 'AW-17719269754/LEAD_LABEL',
      value: 1.0,
      currency: 'CAD',
    })
    window.gtag('event', 'generate_lead', {
      form_source: source,
    })
  }
}
