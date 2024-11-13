import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/AboutComponent";
import Heading from "@theme/Heading";

import styles from "./index.module.css";
import SCDEXHeroComponent from "../components/SCDEXHeroComponent";
import UpcomingRoadmapComponent from "../components/UpcomingRoadmapComponent";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="https://blog.opensupplyhub.org/2024/07/24/introducing-the-open-data-exchange-standard-for-global-supply-chains/">
            Read More
          </Link>
        </div>
      </div>
    </header>
  );
}

function SpotifyEmbed({ id, guest, include }) {
  if (!include) {
    return null;
  }
  console.debug("Embedding Spotify episode", id, "with guest", guest);
  return (
    <div style={{ height: "152px" }}>
      <iframe
        style={{ height: "100%", width: "100%" }}
        src={`https://open.spotify.com/embed/episode/${id}?theme=1`}
      />
    </div>
  );
};

function ExpertInterviewGrid() {
  const spotifyEpisodes = [
    {
      id: "3eEU531s6T64rheAjMEHME",
      guest: "Franzisca Markschläger, GIZ",
      include: true,
    },
    {
      id: "76JRWkSwM1zSE5rmADdrAr",
      guest: "Kate Chapman, Open Supply Hub",
      include: true,
    },
    {
      id: "1xxhhHb7uRMkuzFqUVX4p5",
      guest: "Shanika Whitehurst, Consumer Reports",
      include: true,
    },
    {
      id: "03inx8EhxM9j20wrvgskAS",
      guest: "Ìrem Yanpar Coşdan, Open Supply Hub",
      include: true,
    },
    {
      id: "57MeKYzV5eWWCSDbA1Niu1",
      guest: "Samapriya Roy, Geospatial Earth Engine Community Catalog",
      include: true,
    },
    {
      id: "4tcbIrMptpiexoxfs0mEeS",
      guest: "Inês Ferreira",
      include: true,
    },
  ];

  return (
    <div
      style={{
        maxWidth: "1320px",
        margin: "0 auto",
        padding: "0 32px",
        marginBottom: "32px",
      }}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)",
          gap: "16px",
          marginBottom: "32px",
        }}
      >
        {spotifyEpisodes.map((episode) => (
          <SpotifyEmbed
            key={episode.id}
            id={episode.id}
            guest={episode.guest}
            include={episode.include}
          />
        ))}
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Link
          to="https://forms.gle/ZQkGYfaWxNohArdH7"
          style={{
            padding: "8px 24px",
            borderRadius: "9999px",
            border: "1px solid #e5e7eb",
            textDecoration: "none",
          }}
        >
          Nominate an Expert →
        </Link>
        <Link
          to="https://open.spotify.com/show/6Wwaw6Y0FqpoAcJmnvKzf1"
          style={{
            padding: "8px 24px",
            borderRadius: "9999px",
            backgroundColor: "#DD4B39",
            color: "white",
            textDecoration: "none",
          }}
        >
          Listen to the series →
        </Link>
      </div>
    </div>
  );
};

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
    >
      <HomepageHeader />
      <main>
        {/* <SCDEXHeroComponent /> */}
        <HomepageFeatures />
        <ExpertInterviewGrid />
        {/* <UpcomingRoadmapComponent /> */}
      </main>
    </Layout>
  );
}
