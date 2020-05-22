import "sanitize.css"
import React from "react"
import SEO from "../components/seo"
import Logo from "../images/logo.svg"
import Hexagon from "../images/hexagon.svg"
import styles from "./index.module.scss"

console.log(styles)

const hexaPositions = Array(10).fill(null).map(() => {
  return [Math.random() * 100, Math.random() * 100, Math.random() * 200, Math.random() * 360]
})

const IndexPage = () => (
  <div className={styles.frame}>
    <SEO title="Home" />
    <div className={styles.hexagonShadowLayer}>
      {hexaPositions.map(pos => {
        return (
          <Hexagon key={pos[0]} className={styles.hexagon} style={{
              left: `calc(${pos[0]}% + 6px)`,
              top: `calc(${pos[1]}% + 6px)`,
              width: pos[2] + "px",
              transform: `rotate(${pos[3]}deg)`
          }}/>
        )
      })}
    </div>
    <div className={styles.dotLayer}/>
    <div className={styles.hexagonLayer}>
      {hexaPositions.map(pos => {
        return (
          <Hexagon key={pos[0]} className={styles.hexagon} style={{
              left: pos[0] + "%",
              top: pos[1] + "%",
              width: pos[2] + "px",
              transform: `rotate(${pos[3]}deg)`
          }}/>
        )
      })}
    </div>
    <div className={styles.contentLayer}>
      <div className={styles.logoContainer}>
        <Logo className={styles.logo}/>
      </div>
      <div className={styles.subtitle}>- gallery -</div>
      <div className={styles.blockContainer}>
        <div className={styles.block}></div>
        <div className={styles.block}></div>
        <div className={styles.block}></div>
        <div className={styles.block}></div>
      </div>
    </div>
  </div>
)

export default IndexPage
