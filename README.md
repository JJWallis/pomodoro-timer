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

```css

```

```ts
declare module 'styled-components' {
   export interface DefaultTheme {
      ...
   }
}
```

Module Declarations - styled components (typing theme obj with declarations + intellisense/available in GlobalStyles)

### Continued development

Custom hooks

HOCs

useReducer()

### Useful resources

-  [Example resource 1](https://www.example.com) - This helped me for XYZ reason. I really liked this pattern and will use it going forward.

## Author

-  Website - [Joshua Jameson-Wallis](https://joshuajamesonwallis.com)
-  Linkedin - [Joshua Jameson-Wallis]()

###### TODO

CSS:

Progressive meter/bar - SVG animation (outline drawing)

TS:

JS:

HOCs + TS - generics + Omit type | fixing 'any' props - rare potential use case | extending generic types (dynamic helper funcs) | diff with custom hooks - arguments HOC take outside target component scope (custom hook can take them within that scope)

Context - multiple providers | sep folder | HOCs vs children for App context | hook to use + return true if initialised inside its provider (TS destructuring solved)

TS - path aliasing | ambient declarations | sep files for types/interfaces

Folder structure
