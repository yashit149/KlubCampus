import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens:{
        xsm:"500px",
        sm:"600px",
        md:"690px",
        lg:"988px",
        xl:"1078px",
        xxl:"1265px",
    
      },
      colors: {
       
    /* Dark mode color pallete */
        bg_Dark: "#000",
        Dark_dull: "#0d0d0d",
        Dark_Highlited:"#1a1a1a",
        /* text color */
        Light_Dull:"#f2f2f2",
        Muted_text:"#808080",
        


    /* light mode color pallete */
        bg_Light:"#e6e6e6",
        // Light_Dull:"#f2f2f2",
        Light_Highlited:"#fafafa",
        /* text color */
        // Dark_dull: "#0d0d0d",
        // Muted_text:"#808080",

    
    /* Accent colour  */
        Accent_col:"#ff5400",


    /* Signal colours  */

        Red:"#ef233c",
        Green:"#80ed99",
        Blue:"#4cc9f0",



      },
    },
  },
  plugins: [],
} satisfies Config;
