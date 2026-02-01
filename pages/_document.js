import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    "name": "Dr. Maya Reynolds, PsyD",
    "description": "Licensed Clinical Psychologist specializing in anxiety, trauma, and burnout therapy in Santa Monica, California. Evidence-based therapy for adults including CBT, EMDR, and mindfulness practices.",
    "url": "https://your-domain.com",
    "telephone": "+1-555-123-4567",
    "email": "contact@drmayareynolds.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "123th Street 45 W",
      "addressLocality": "Santa Monica",
      "addressRegion": "CA",
      "postalCode": "90401",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 34.0194,
      "longitude": -118.4912
    },
    "openingHours": "Mo,Tu,We,Th,Fr 09:00-17:00",
    "priceRange": "$$",
    "medicalSpecialty": [
      "Clinical Psychology",
      "Trauma Therapy",
      "Anxiety Disorders",
      "Burnout Counseling"
    ],
    "availableService": [
      {
        "@type": "MedicalTherapy",
        "name": "Anxiety & Panic Disorder Therapy",
        "description": "Specialized therapy for anxiety, panic attacks, and persistent worry using CBT and mindfulness techniques."
      },
      {
        "@type": "MedicalTherapy",
        "name": "Trauma Therapy & EMDR",
        "description": "Trauma-informed care using EMDR therapy for single-incident and complex trauma with careful pacing and safety."
      },
      {
        "@type": "MedicalTherapy",
        "name": "Burnout & Perfectionism Counseling",
        "description": "Support for professional burnout, perfectionism, and high internal pressure for entrepreneurs and professionals."
      }
    ],
    "founder": {
      "@type": "Person",
      "name": "Dr. Maya Reynolds",
      "jobTitle": "Licensed Clinical Psychologist",
      "credential": "PsyD",
      "knowsAbout": [
        "Clinical Psychology",
        "CBT",
        "EMDR",
        "Trauma Therapy",
        "Anxiety Disorders",
        "Burnout Prevention"
      ]
    },
    "sameAs": [
      "https://www.psychologytoday.com/profile-url",
      "https://www.linkedin.com/in/drmayareynolds"
    ]
  };

  return (
    <Html lang="en">
      <Head>
        {/* Primary Meta Tags */}
        <meta name="title" content="Dr. Maya Reynolds, PsyD | Anxiety & Trauma Therapy in Santa Monica, CA" />
        <meta name="description" content="Licensed Clinical Psychologist in Santa Monica, CA specializing in anxiety, trauma, and burnout therapy. Evidence-based therapy including CBT, EMDR, and mindfulness for adults. In-person and telehealth available." />
        <meta name="keywords" content="anxiety therapy Santa Monica, trauma therapy California, clinical psychologist, CBT therapy, EMDR therapy, burnout counseling, mental health therapy, licensed psychologist, therapy Santa Monica, panic disorder treatment" />
        <meta name="author" content="Dr. Maya Reynolds, PsyD" />
        <meta name="robots" content="index, follow" />
        <meta name="language" content="English" />
        <meta name="revisit-after" content="7 days" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://your-domain.com" />
        <meta property="og:description" content="Licensed Clinical Psychologist specializing in anxiety, trauma, and burnout therapy. Evidence-based therapy for adults in Santa Monica, California." />
        <meta property="og:image" content="https://your-domain.com/images/office/Dr. Maya Reynolds.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:site_name" content="Dr. Maya Reynolds, PsyD" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://your-domain.com" />
        <meta property="twitter:description" content="Licensed Clinical Psychologist specializing in anxiety, trauma, and burnout therapy. Evidence-based therapy for adults in Santa Monica, California." />
        <meta property="twitter:image" content="https://your-domain.com/images/office/Dr. Maya Reynolds.png" />

        {/* Additional SEO Meta Tags */}
        <meta name="theme-color" content="#68D391" />
        <meta name="msapplication-TileColor" content="#68D391" />
        <link rel="canonical" href="https://your-domain.com" />

        {/* Local Business & Healthcare Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData)
          }}
        />

        {/* Font Optimization */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />

        {/* Performance & Security */}
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="dns-prefetch" href="//fonts.gstatic.com" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      </Head>
      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
