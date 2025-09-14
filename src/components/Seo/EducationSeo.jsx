// components/seo/EducationSeo.jsx
import React from "react";
import { Helmet } from "react-helmet-async";

function EducationSeo() {
  return (
    <Helmet>
      <title>Education | Roshan Tanpure | MERN Stack Developer</title>
      <meta
        name="description"
        content="Explore Roshan Tanpure's academic background in Computer Science and journey in becoming a full-stack MERN developer. Check out educational milestones and technical skills."
      />
      <meta
        name="keywords"
        content="Roshan Tanpure education, computer science degree, MERN stack developer, full-stack developer, portfolio"
      />
      <meta name="author" content="Roshan Tanpure" />
      <meta name="robots" content="index, follow" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />

      <meta
        property="og:title"
        content="Education | Roshan Tanpure | Full-Stack Developer"
      />
      <meta
        property="og:description"
        content="Learn more about Roshan Tanpure's academic journey in Computer Science Engineering and how it shaped his path in full-stack web development."
      />
      <meta
        property="og:image"
        content=""
      />
      <meta
        property="og:url"
        content=""
      />
      <link
        rel="canonical"
        href=""
      />

      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: "Roshan Tanpure",
          jobTitle: "Full-Stack Developer",
          url: "",
          image: "",
          description:
            "Computer Science Engineering graduate and MERN stack developer with a passion for building real-world web applications.",
          alumniOf: {
            "@type": "CollegeOrUniversity",
            name: "Your College Name Here",
            sameAs: "https://college-website.example.com",
          },
          address: {
            "@type": "PostalAddress",
            streetAddress: "Pune",
            addressLocality: "hinjewadi phase1",
            addressRegion: "Maharashtra",
            postalCode: "411057",
            addressCountry: "IN",
          },
          sameAs: [
            "https://github.com/roshan7965",
            "https://www.linkedin.com/in/roshan-tanpure-63b97b234/",
          
          ],
        })}
      </script>
    </Helmet>
  );
}

export default EducationSeo;
