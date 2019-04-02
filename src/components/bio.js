/**
 * Bio component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import {
  StaticQuery,
  graphql
} from "gatsby"
import Image from "gatsby-image"

import {
  rhythm
} from "../utils/typography"

function Bio() {
  return (
      <StaticQuery
      query={bioQuery}
      render={data => {
        const { author, social } = data.site.siteMetadata
        return (
          <div
            style={{
              display: "flex",
              'flex-flow': "column nowrap",
            }}>
          <div
            style={{
              display: `flex`,
              marginBottom: rhythm(1),
            }}
          >
            <Image
              fixed={data.avatar.childImageSharp.fixed}
              alt={author}
              style={{
                marginRight: rhythm(1 / 2),
                marginBottom: 0,
                minWidth: 60,
                minHeight: 65,
                minWidth: 65,
              }}
            />
            <p>
              Webサービス　たぐまるの使い方を紹介するにゃん！<br />
              <a href={`https://twitter.com/${social.twitter}`}>
                たぐまるのTwitterをフォローしてトレンド記事を<strong>いち早く読める</strong>にゃん!
              </a>
            </p>
          </div>
            <Image
              fixed={data.logo.childImageSharp.fixed}
              alt="Tagmaru Logo"
              style={{
                margin: "auto",
              }}
            />
          </div>
        )
      }}
    />
  )
}

const bioQuery = graphql`
  query BioQuery {
    avatar: file(absolutePath: { regex: "/profile-pic.jpg/" }) {
      childImageSharp {
        fixed(width: 50, height: 50, quality: 100) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    logo: file(absolutePath: { regex: "/tagmaru_logo.png/" }) {
      childImageSharp {
        fixed(width: 500, quality:100) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    site {
      siteMetadata {
        author
        social {
          twitter
        }
      }
    }
  }
`

export default Bio
