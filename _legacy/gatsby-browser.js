/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// You can delete this file if you're not using it
import "typeface-montserrat";
import "tailwindcss/dist/base.min.css";
import "./src/assets/tailwind.css";
// ES5 way
// exports.onClientEntry = () => {
// ES6 way
export const shouldUpdateScroll = ({
  routerProps: { location },
  getSavedScrollPosition,
}) => {
  return window.scrollTo(0, 0);
};


// export const onClientEntry = () => {
//   // IntersectionObserver polyfill for gatsby-background-image (Safari, IE)
//   if (!(`IntersectionObserver` in window)) {
//     import(`intersection-observer`);
//     console.log(`# IntersectionObserver is polyfilled!`);
//   }

//   // On page load or when changing themes, best to add inline in `head` to avoid FOUC
//   if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
//     document.documentElement.classList.add('dark')
//   } else {
//     document.documentElement.classList.remove('dark')
//   }
//   // localStorage.removeItem('theme')

// };
