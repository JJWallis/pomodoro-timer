// export type ThemeType = {}
// theme types - declare ThemeStyles obj + use that 3 times for each theme in parent Theme obj

export const Theme = {
   bgPm: '#101021',
   // base
   redTheme: {
      bgPm: 'red',
   },
   blueTheme: {
      bgPm: 'blue',
   },
   purpleTheme: {
      bgPm: 'purple',
   },
}

// built in withTheme into styledcomponents
// dunamic helper funcs - use TS generics to help us (vs any)
