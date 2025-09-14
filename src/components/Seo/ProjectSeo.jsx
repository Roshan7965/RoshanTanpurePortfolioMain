import React from "react";
import { Helmet } from "react-helmet-async";

function ProjectSeo() {
  return (
    <>
      <Helmet>
        <title>Roshan Tanpure | Full-Stack Developer | MERN Stack</title>
        <meta
          name="description"
          content="Explore Roshan Tanpure's portfolio showcasing expertise in full-stack development with React, Node.js, and Tailwind CSS. Innovative web applications built using the MERN stack."
        />
        <meta
          name="keywords"
          content="Roshan Tanpure, full-stack developer, MERN, React, Node.js, web developer, Tailwind CSS, portfolio"
        />
        <meta name="author" content="Roshan Tanpure" />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <meta
          property="og:title"
          content="Roshan Tanpure | Full-Stack Developer"
        />
        <meta
          property="og:description"
          content="Check out Roshan Tanpure's projects built with React, Node.js, and the MERN stack."
        />
        <meta
          property="og:image"
          content=""
        />
        <meta property="og:url" content="" />
        <link rel="canonical" href="" />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            name: "Roshan Tanpure",
            jobTitle: "Full-Stack Developer",
            url: "",
            image: "",
            description:
              "MERN stack developer building fast, scalable web apps with React, Node.js, MongoDB, and Express.",
            address: {
              "@type": "PostalAddress",
              streetAddress: "hinjewadi Phase1",
              addressLocality: "Pune",
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
    </>
  );
}

export default ProjectSeo;
