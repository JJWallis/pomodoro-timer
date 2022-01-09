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

![](./screenshot.png)

### Links

-  Live Site URL: https://pomodoro-timer-app-jjw.netlify.app/

## My process

### Built with

-  Semantic HTML5 markup
-  Mobile-first workflow
-  Flexbox
-  CSS Grid
-  [React](https://reactjs.org/) - JS library
-  [Styled Components](https://styled-components.com/) - For styles
-  TypeScript

### What I learned

```tsx
export const TimerContextProvider = ({ children }: { children: ReactNode }) => {
   return (
      <TimerContext.Provider value={useTimer()}>
         {children}
      </TimerContext.Provider>
   )
}
```

```tsx
export function useTimerContext() {
   const context = useContext(TimerContext)
   if (!context)
      throw new Error('useAppContext must be used within a AppContextProvider')
   return context
}
```

This project was a major step forward regarding my use of the Context API in React, most notably learning about the best ways to structure the logic and pass it down to all necessary child components.

I learnt how one should ideally create a context folder containing all created contexts and their types, whilst then manually creating your own custom provider that can be matched with a custom hook to either consume it, or return an appropiate error message if used outside the provider's range.

This solved a major problem I had encountered in previous Typescript projects, where I had to constantly check if my destructed value from Context was truthy before I could use it.

```tsx
export const ProgressCircle = styled.svg<Props>`
   stroke: ${({ theme: { currentTheme } }) => currentTheme.accent};
   stroke-width: 5
   stroke-dasharray: ${({ progressAmount }) => progressAmount}, 500;
   stroke-linecap: round;
   transition: stroke-dasharray 1s linear;
`

setProgressWidth((timerLength / 60 / current) * 500)
```

By far the most challenging feature of this project was building out the circular progress bar, which should update accordingly as the remaining timer amount decreases.

My first attempt involved creating a conic-gradient which revealed a decreasing amount of the current theme's accent colour, in contrast to the primary background-color of the Clock component. However, upon further research I came accross a better method using an SVG's `stroke-width` and `stroke-dasharray` properties, providing greater flexibility in case I wanted to change how the progress bar appeared (such as its shape).

```tsx
const updateTheme = (newTheme: string) => {
   setCurrentTheme(Theme[newTheme as keyof Omit<typeof Theme, 'baseStyles'>])
}

export type ModalContextProvider = <T>(
   Component: React.ComponentType<T>
) => React.ComponentType<T>
```

Furthermore, I used this project to enhance my knowledge of more advanced Typescript features that can help us when dealing with dynamic data and properly type checking React-based techniques.

An example of this is with Higher-order components, where the `Omit` utility type comes in handy since we can tell Typescript to include any props the targetted component originally contains, whilst excluding any logic we haven't yet passed to it from the higher-order component itself.

In the example above, I also make use of the `keyof` operator alongside `Omit` to dynamically access my theme object, whilst excluding the first property present. Additionally, we can use Generics to dynamically calculate the types of props that are originally attatched, instead of reverting to using `any`.

```tsx
function reducer(state: UseTimerState, action: UseTimerActions) {
   switch (action.type) {
      case 'SET_INITIAL_TIMER_LENGTH':
         return { ...state, timerLength: action.amount }
         ...
   }
}
```

The final major concept I learnt for this project was the `useReducer` hook and Reducers in general, both allowing us to store and update more complicated state that potentially interacts with one another in a much concise syntax. They're also less error prone due to their restrictive nature of how we can update the state they house.

The best part about Reducers are that you only need to pass down the desired state and the dispatch method in order to consume and update it, instead of passing down multiple separate functions that each update the state in different ways.

A reducer also provides a much more readable syntax within Typescript, since you have to type out all the possible actions, which I imagine serves as great documentation for any new developers contributing to a project.

### Continued development

I have loved learning about custom hooks throughout this whole project and how versatile they are in refactoring our code. I can't wait to research more examples online and see how other developers have built their own to meet their specific needs.

I am further keen to research more into Reducers and how they relate to other technologies I plan to learn in the future, most notably Redux since I've heard there are many crossovers with how state is managed within both.

### Useful resources

-  [How to code a responsive circular percentage chart with SVG and CSS.](https://medium.com/@pppped/how-to-code-a-responsive-circular-percentage-chart-with-svg-and-css-3632f8cd7705) - This article served as a great tutorial for building out the circular progress bar, as well as providing a great reference point alongside my original solution where I used a conic-gradient instead.

-  [React Higher Order Components with TypeScript](https://isamatov.com/react-hoc-typescript/) - This article introduced me to the Omit utility type in Typescript, enabling me to properly type the props my higher-order components would recieve, as well as 'omitting' the logic which would also be passed down via props from the higher-order component itself.

## Author

-  Website - [Joshua Jameson-Wallis](https://joshuajamesonwallis.com)
-  Linkedin - [Joshua Jameson-Wallis](https://www.linkedin.com/in/joshua-jameson-wallis/)
