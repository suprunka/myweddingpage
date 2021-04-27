import React, { useState } from 'react'
import { useSprings,useSpring, animated, to  } from 'react-spring'
import { useDrag } from 'react-use-gesture'
import { useGesture } from 'react-with-gesture'

import p1 from "../../src/assets/1.jpg"
import p2 from "../../src/assets/2.jpg"
import p3 from "../../src/assets/3.jpg"
import p4 from "../../src/assets/4.jpg"



// function PullRelease() {
//   // const [{ x, y }, set] = useSpring(() => ({ x: 0, y: 0 }))
//   const imgs=[p1, p2, p3, p4]
// console.log(imgs)

//   const to = (i) => ({ x: 0, y: i * -4, scale: 1, rot: -10 + Math.random() * 20, delay: i * 100 })
//   const from = (i) => ({ x: 0, rot: 0, scale: 1.5, y: -1000 })
//   const [springs, set]  = useSprings(imgs.length, (i) => ({ ...to(i), from: from(i), url:imgs[i] })) 

//   // Set the drag hook and define component movement based on gesture data
//   const bind = useDrag((item) => {
//     console.log(item)
//     set({ x: item.values ? item.values[0] : 11, y: item.values ? item.values[1]  : 11 })
//   })

//   console.log(springs)
//   // Bind it to a component
//   return (
//   <React.Fragment>
//   {springs.map((imgUrl, i)=>   <animated.div {...bind()} style={{ x:imgUrl.x,y:imgUrl.y, touchAction: 'none', width:"100px", height:"100px", 
//   backgroundImage:`url(${imgs[i]})`, backgroundSize: "cover" 
// }} />
// )}
//   </React.Fragment>
//   )
  

// }

// function Pull() {
//   const [{ xy }, set] = useSpring(() => ({ xy: [0, 0] }))
//   const bind = useGesture(({ down, delta, velocity }) => {
//     velocity = clamp(velocity, 1, 8)
//     set({ xy: down ? delta : [0, 0], config: { mass: velocity, tension: 500 * velocity, friction: 50 } })
//   })
//   return <animated.div {...bind()} style={{ transform: xy.interpolate((x, y) => `translate3d(${x}px,${y}px,0)`) }} />
// }
const cards = [p1, p2, p3, p4]

// These two are just helpers, they curate spring data, values that are later being interpolated into css
const toD = i => ({ x: 0, y: i * -4, scale: 1, rot: -10 + Math.random() * 20, delay: i * 100 })
const from = i => ({ x: 0, rot: 0, scale: 1.5, y: -1000 })
// This is being used down there in the view, it interpolates rotation and scale into a css transform
const trans = (r, s) => `perspective(1500px) rotateX(30deg) rotateY(${r / 10}deg) rotateZ(${r}deg) scale(${s})`

function Deck() {
  const [gone] = useState(() => new Set()) // The set flags all the cards that are flicked out
  const [props, set] = useSprings(cards.length, i => ({ ...toD(i), from: from(i) })) // Create a bunch of springs using the helpers above
  // Create a gesture, we're interested in down-state, delta (current-pos - click-pos), direction and velocity
  const bind = useGesture(({ args: [index], down, delta: [xDelta], distance, direction: [xDir], velocity }) => {
    const trigger = velocity > 0.2 // If you flick hard enough it should trigger the card to fly out
    const dir = xDir < 0 ? -1 : 1 // Direction should either point left or right
    if (!down && trigger) gone.add(index) // If button/finger's up and trigger velocity is reached, we flag the card ready to fly out
    set(i => {
      if (index !== i) return // We're only interested in changing spring-data for the current spring
      const isGone = gone.has(index)
      const x = isGone ? (200 + window.innerWidth) * dir : down ? xDelta : 0 // When a card is gone it flys out left or right, otherwise goes back to zero
      const rot = xDelta / 100 + (isGone ? dir * 10 * velocity : 0) // How much the card tilts, flicking it harder makes it rotate faster
      const scale = down ? 1.1 : 1 // Active cards lift up a bit
      return { x, rot, scale, delay: undefined, config: { friction: 50, tension: down ? 800 : isGone ? 200 : 500 } }
    })
    if (!down && gone?.size === cards?.length) setTimeout(() => gone.clear() || set(i => toD(i)), 600)
  })
  // Now we're just mapping the animated values to our view, that's it. Btw, this component only renders once. :-)
  return props.map(({ x, y, rot, scale }, i) => (
    <animated.div key={i} style={{ transform: to([x, y], (x, y) => `translate3d(${x}px,${y}px,0)`) }}>
      {/* This is the card itself, we're binding our gesture to it (and inject its index so we know which is which) */}
      <animated.div {...bind(i)} style={{ transform: to([rot, scale], trans), background:`url(${cards[i]}) `, backgroundPosition:"center center",backgroundRepeat:"no-repeat" }}  />
    </animated.div>
  ))
}

export default Deck;
