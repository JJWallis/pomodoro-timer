# Frontend Mentor - Pomodoro app solution

This is a solution to the [Pomodoro app challenge](https://www.frontendmentor.io/challenges/pomodoro-app-KBFnycJ6G) on Frontend Mentor

## Table of contents

-  [Overview](#overview)
   -  [The challenge](#the-challenge)
   -  [Screenshot](#screenshot)
   -  [Links](#links)
-  [My process](#my-process)
   -  [Built with](#built-with)
   -  [What I learned](#what-i-learned)
   -  [Continued development](#continued-development)
   -  [Useful resources](#useful-resources)
-  [Author](#author)
-  [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Your users should be able to:

-  Set a Pomodoro timer and short & long break timers
-  Customize how long each timer runs for
-  See a circular progress bar that updates every minute and represents how far through their timer they are
-  Customize the appearance of the app with the ability to set preferences for colors and fonts

### Screenshot

![](./Screenshot.png)

### Links

-  Live Site URL:

## My process

### Built with

-  Semantic HTML5 markup
-  Flexbox
-  CSS Grid
-  Mobile-first workflow
-  [React](https://reactjs.org/) - JS library
-  [Styled Components](https://styled-components.com/) - For styles
-  Typescript

### What I learned

```tsx
export const ProgressMeter = styled.div<Props>`
   background: conic-gradient(
      ${({ theme: { currentTheme } }) => currentTheme.accent} ${({
            progressAmount,
         }) => progressAmount}%,
      ${({ theme: { baseStyles } }) => baseStyles.bgSd} ${({
            progressAmount,
         }) => progressAmount}%
   );
`

export const ProgressCircle = styled.svg<Props>`
   stroke: ${({ theme: { currentTheme } }) => currentTheme.accent};
   stroke-width: 5
   stroke-dasharray: ${({ progressAmount }) => progressAmount}, 500;
   stroke-linecap: round;
   transition: stroke-dasharray 1s linear;
`
```

```tsx
export const withModalContext: ModalContextProvider =
   (Component) => (props) => {
      return (
         <ModalContext.Provider value={{ state, updateState }}>
            <Component {...props} />
         </ModalContext.Provider>
      )
   }
```

Context - multiple providers | sep folder | HOCs vs children for App context | hook to use + return true if initialised inside its provider (TS destructuring solved) | sep files for types/interfaces (+ diff folder structure)

```tsx
const updateTheme = (newTheme: string) => {
   setCurrentTheme(Theme[newTheme as keyof Omit<typeof Theme, 'baseStyles'>])
}
```

HOCs + TS - Omit utility type (+ generics) | fixing 'any' props - rare potential use case | diff with custom hooks - arguments HOC take outside target component scope (custom hook can take them within that scope) | add more components to tree + bloated syntax + props | example above - bracket notation with objects (ignoring other keys apart from those to target)

```tsx
declare module 'styled-components' {
   export interface DefaultTheme {
      ...
   }
}
```

Module Declarations - styled components (typing theme obj with declarations + intellisense/available in GlobalStyles)

### Continued development

Custom hooks - research online for more examples | building more logic into them

useReducer() - more usecases + how that leads in Redux (apparently similar structure)

### Useful resources

-  [How to code a responsive circular percentage chart with SVG and CSS.](https://medium.com/@pppped/how-to-code-a-responsive-circular-percentage-chart-with-svg-and-css-3632f8cd7705) -

## Author

-  Website - [Joshua Jameson-Wallis](https://joshuajamesonwallis.com)
-  Linkedin - [Joshua Jameson-Wallis]()

## Acknowledgments

[GitHub - mlatka9/Pomodoro-app](https://github.com/mlatka9/Pomodoro-app)

###### TODO

CSS:

Progressive meter/bar - SVG animation (outline drawing)

JS:
