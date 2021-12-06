// export type ThemeType = {}

export const Theme = {
   bgPm: '#101021',
   // base
   redTheme: {},
   blueTheme: {},
   purpleTheme: {},
}

// withTheme(Theme) - wrap App in index.tsx or in App.tsx
// dynamic helper hook - check if data truthy + returns if so (ts destructing issue)
// use TS generics to help us (vs any)
// theme types - declare ThemeStyles obj + use that 3 times for each theme in parent Theme obj
// built in withTheme into styledcomponents
