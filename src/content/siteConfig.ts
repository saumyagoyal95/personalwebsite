/**
 * Central site configuration — edit these values to personalize the whole site.
 * Anything marked TODO needs Saumya's real value before launch.
 */
export const siteConfig = {
  name: "Saumya Goyal",
  firstName: "Saumya",
  role: "MLOps Engineer & Speaker",
  location: "Munich, Germany",

  // The line the whole brand rests on.
  tagline: "Building data that speaks.",

  description:
    "Saumya Goyal is an MLOps engineer and conference speaker in Munich. She builds reliable, observable ML & LLM systems — and takes the stage to make them make sense.",

  url: "https://saumyagoyal.me",

  email: "saumyagoyal95@gmail.com",

  // Google Calendar "Appointment schedule" public booking link (opens the
  // scheduler in a new tab — this is the one you share directly).
  calendarUrl: "https://calendar.app.google/DS3TAPGVK5QALfWu7",

  // Embeddable version of the same schedule (Google's iframe form, ends in
  // ?gv=true). Used for the on-page embed. To regenerate: in Google Calendar,
  // open the appointment schedule → "Share" → "Embed", and copy the src URL.
  calendarEmbedUrl:
    "https://calendar.google.com/calendar/appointments/schedules/AcZssZ0Fu8dOPdQqxFQ-v-cdqp4jGFwcK-EzucbtckVcGFBbZwaHFvVQyUW_5yTGILQNO_aDmLRo9DUn?gv=true",

  socials: {
    linkedin: "https://www.linkedin.com/in/saumyagoyal95/",
    medium: "https://saumyagoyal.medium.com",
    mlconference: "https://mlconference.ai/speaker/saumya-goyal/",
    // TODO (optional): add x/twitter, github, youtube, instagram if you want them.
  },
} as const;

export type SiteConfig = typeof siteConfig;
