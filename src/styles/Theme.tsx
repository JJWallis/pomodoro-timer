export type ThemeType = {}

export const Theme = {
   // #101021 - bg pm colour
   redTheme: {},
   blueTheme: {},
   purpleTheme: {},
}

// use HOC in this file to render ThemeProvider + pass value obj above to it
// withTheme(Theme) - wrap App in index.tsx or in App.tsx
// hook to use?
// dynamic helper hook - check if data truthy + returns if so (ts destructing issue)
// use TS generics to help us (vs any)
