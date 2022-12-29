import { Box, Grid, GridItem, Heading, Text } from "@chakra-ui/react"
import SmoothScroll from "components/SmoothScroll/SmoothScroll"
import { motion } from "framer-motion"
import React from "react"

import styles from '../../../styles/Home.module.css';

const Manifesto = () => {

    const manifesto = [
        {
            title: '01. Challenge the ordinary',
            desc: 'We are creative people that dare to do things differently. We think critically about tech, the industries we work with, and our society, and look for uncharted paths to have a positive impact.'
        },
        {
            title: '02. Stay curious, stay ahead',
            desc: 'We are forward thinkers that like to experiment with current and emerging technologies. We explore what’s to come in business and tech and uncover what will stay relevant.'
        },
        {
            title: '03. Grow together',
            desc: 'Opportunities and challenges are both shared here, and when those arise, we tap on each others strengths to succeed through collaboration. We learn from each other and help each other learn.'
        },
        {
            title: '04. Lift each other’s voice',
            desc: 'We work daily on creating a space where we all feel listened to. We’ve adopted communication routines that encourage the team to share their feedback on projects, internal processes and operations, and anything else.'
        },
        {
            title: '05. Enjoy the ride',
            desc: 'We love to have fun with what we do! The office is where we get to share and follow our passion for tech, design, and for making great new products happen.'
        },
    ]

    return(
        <main className={styles.main}>
        <div data-scroll-section>
          <h1 className={styles.title} data-scroll data-scroll-direction="horizontal" data-scroll-speed="6">
            Welcome to <a href="https://nextjs.org">Next.js!</a>
          </h1>

          <p className={styles.description} data-scroll data-scroll-direction="horizontal" data-scroll-speed="-5">
            Get started by editing <code className={styles.code}>pages/index.tsx</code>
          </p>

          <div className={styles.grid}>
            <a href="https://nextjs.org/docs" className={styles.card}>
              <h2>Documentation &rarr;</h2>
              <p>Find in-depth information about Next.js features and API.</p>
            </a>

            <a href="https://nextjs.org/learn" className={styles.card}>
              <h2>Learn &rarr;</h2>
              <p>Learn about Next.js in an interactive course with quizzes!</p>
            </a>

            <a href="https://github.com/vercel/next.js/tree/master/examples" className={styles.card}>
              <h2>Examples &rarr;</h2>
              <p>Discover and deploy boilerplate example Next.js projects.</p>
            </a>

            <a
              href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
              className={styles.card}
            >
              <h2>Deploy &rarr;</h2>
              <p>Instantly deploy your Next.js site to a public URL with Vercel.</p>
            </a>
          </div>
        </div>

        <div data-scroll-section>
          <p className={styles.description} data-scroll data-scroll-speed="1">
            Simple Scroll Speed
          </p>

          <div className={styles.grid}>
            {[...Array(10).keys()].map((idx) => (
              <div className={styles.card} key={idx} data-scroll data-scroll-speed={idx}>
                <h2>data-scroll-speed</h2>
                <code>{`<div data-scroll data-scroll-speed="${idx}"></div>`}</code>
              </div>
            ))}
          </div>
        </div>

        <div data-scroll-section>
          <p className={styles.description} data-scroll data-scroll-speed="1">
            Scroll Delay
          </p>

          <div className={styles.grid}>
            {[...Array(10).keys()].map((idx) => (
              <div className={styles.card} key={idx} data-scroll data-scroll-speed="1" data-scroll-delay={idx / 100}>
                <h2>data-scroll-delay</h2>
                <code>{`<div data-scroll data-scroll-speed="1" data-scroll-delay="${idx / 100}"></div>`}</code>
              </div>
            ))}
          </div>
        </div>

        <div data-scroll-section>
          <p className={styles.description} data-scroll data-scroll-speed="1">
            Scroll Speed + Delay
          </p>

          <div className={styles.grid}>
            {[...Array(10).keys()].map((idx) => (
              <div className={styles.card} key={idx} data-scroll data-scroll-speed={idx} data-scroll-delay={idx / 100}>
                <h2>data-scroll-delay</h2>
                <code>{`<div data-scroll data-scroll-speed="${idx}" data-scroll-delay="${idx / 100}"></div>`}</code>
              </div>
            ))}
          </div>
        </div>
      </main>
    )
}

export default Manifesto