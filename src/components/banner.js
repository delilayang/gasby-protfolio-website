import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

export default function Banner() {
  const data = useStaticQuery(graphql`
    query {
      poppinShadesImage: file(relativePath: { eq: "poppin-shades.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }

      diamondsImage: file(relativePath: { eq: "diamonds.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }

      orangeImage: file(relativePath: { eq: "sexy-orange.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <div className="banner">
      <div className="container">
        <div className="row">
          <div className="side-image left">
            <Img fluid={data.diamondsImage.childImageSharp.fluid} />
          </div>
          <div className="main-text">Oladimeji Odunsi</div>
          <div className="main-image">
            <Img fluid={data.poppinShadesImage.childImageSharp.fluid} />
          </div>
          <div className="side-image right">
            <Img fluid={data.orangeImage.childImageSharp.fluid} />
          </div>
        </div>
        <div className="scroll">
          <span>Scroll down</span>
        </div>
      </div>
    </div>
  )
}
