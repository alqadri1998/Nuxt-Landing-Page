import AOS from "aos"

import "aos/dist/aos.css"

export default defineNuxtPlugin((nuxtApp) => {
  if (typeof window !== "undefined") {
    nuxtApp.AOS = AOS.init({
      duration: 2000, // Animation duration
      offset: 200, // Offset (in pixels) from the top of the element to trigger the animation
      easing: 'ease-out', // Easing function
      delay: 0, // Delay (in milliseconds) before the animation starts
      once: true, // Whether to animate the element only once or every time it's scrolled into view
      anchorPlacement: 'top-bottom', // Anchor placement (top-bottom, center-bottom, bottom-top, etc.)
    });// eslint-disable-line new-cap
  }
})