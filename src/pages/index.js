import "sanitize.css"
import React from "react"
import SEO from "../components/seo"
import Logo from "../images/logo.svg"
import Hexagon from "../images/hexagon.svg"
import styles from "./index.module.scss"

export default class IndexPage extends React.Component {

  initialState = {
    hexagons: [],
  }

  timeToFloat = 11
  intervalTime = 500

  constructor(props) {
    super(props)
    this.state = this.initialState;
  }

  componentDidMount() {
    let id = 0;
    setInterval(() => {
      const hexa = {
        id: id,
        left: Math.random() * 100,
        width: 50 + Math.random() * 100,
        rotation: 30 * Math.random(),
      }
      if (id > this.timeToFloat / this.intervalTime * 1000) {
        this.state.hexagons.pop()
      }
      this.setState({
        hexagons: [hexa, ...this.state.hexagons]
      })
      id += 1
    }, this.intervalTime)
  }

  render() {
    const { hexagons } = this.state
    return (
      <div className={styles.frame}>
        <SEO title="Home" />
        <div className={styles.hexagonShadowLayer}>
          {hexagons.map(h => {
            return (
              <Hexagon key={h.id} className={styles.hexagon} style={{
                  left: `calc(${h.left}% + 6px)`,
                  width: `${h.width}px`,
                  transform: `rotate(${h.rotation}deg)`
              }}/>
            )
          })}
        </div>
        <div className={styles.hexagonLayer}>
          {hexagons.map(h => {
            return (
              <Hexagon key={h.id} className={styles.hexagon} style={{
                  left: `${h.left}%`,
                  width: `${h.width}px`,
                  transform: `rotate(${h.rotation}deg)`
              }}/>
            )
          })}
        </div>
        <div className={styles.dotLayer}/>
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
  }
}
