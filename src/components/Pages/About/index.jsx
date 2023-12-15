import React from "react";
import Banner from "../../commons/Banner";
import Section from "../../commons/Section";
import Container from "../../commons/Container";
import Testimonials from "./Testimonials";
import Hero from "./Testimonials/Hero";
import { API_PATHS } from "../../../utils/constants";
import useFetch from "../../../hooks/useFetch";
import Loading from "../../commons/Loading";
export default function About() {
  const {
    data: teams,
    loading: loading1,
    error: error1,
  } = useFetch({ path: API_PATHS.GET_TEAM });
  const {
    data: testimonials,
    loading: loading2,
    error: error2,
  } = useFetch({ path: API_PATHS.GET_TESTIMONIALS });

  const loading = loading1 || loading2;
  if (loading) {
    return <Loading />;
  }
  return (
    <div>
      <Banner title="About Us" breadCrumbs={["Home", "About"]} />
      <Section className="mb-[2rem]">
        <Container>
          <Hero teams={teams} />
          <Testimonials testimonials={testimonials} />
        </Container>
      </Section>
    </div>
  );
}
