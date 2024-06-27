import type { Config } from "tailwindcss"

const config = {
  darkMode: ["class"],
  content: [
    "./index.html",
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
	],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      gridTemplateColumns: {
        '2/1': '2fr 1fr'
      },
      backgroundImage: {
        video: `linear-gradient(180deg, rgba(0, 0, 0, 0.00) 51.72%, rgba(0, 0, 0, 0.75) 104.14%), linear-gradient(180deg, #000 0%, rgba(0, 0, 0, 0.26) 22.41%, rgba(0, 0, 0, 0.00) 34.48%);`,
        videoHover: "linear-gradient(0deg, rgba(0, 0, 0, 0.50) 0%, rgba(0, 0, 0, 0.50) 100%);"
      },
      screens: {
        xs: "481px",
        md: "769px",
        desktop: "1441px",
      },
      width: {
        content: "1232px",
        page: '800px'
      },
      colors: {
        main: "#00d5bf",
        turqoise: "#00d5bf",
        halfWhite: "rgba(255, 255, 255, 0.5)",
        typography: "#576172",
        description: "#7D8CA3",
        incubation: "#101927",
        active: "#283344",
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "move-dot1": {
          "0%": {
            top: "0",
            opacity: "1",
          },
          "3.8%": {
            top: "calc(100% - 2px)",
            opacity: "1",
          },
          "4%": {
            opacity: "0",
          },
          "99%": {
            top: "0",
            opacity: "0",
          },
          "100%": {
            top: "0",
            opacity: "1",
          },
        },
        "move-dot2": {
          "0%": {
            opacity: "0",
          },
         "41%": {
            opacity: "0",
          },
          "41.3%": {
            top: "0",
            opacity: "1",
          },
          "45%": {
            top: "calc(100% - 2px)",
          },
          "46%": {
            opacity: "0",
          },
          "100%": {
            opacity: "0",
          },
        },
        "move-dot-rect1": {
          "0%": {
            opacity: '0',
          },
          "3.8%": {
            opacity: '0',
          },
          "4%": {
            top: "-2px",
            left: "-2px",
            opacity: "1",
          },
          "19%": {
            top: "-2px",
            left: "calc(100% - 1px)",
            opacity: "1",
          },
          "26%": {
            top: "calc(100% - 1px)",
            left: "calc(100% - 1px)",
            opacity: "1",
          },
          "41%": {
            top: "calc(100% - 1px)",
            left: "-2px",
            opacity: "1",
          },
          "41.3%": {
            opacity: "0",
            top: "calc(100% - 2px)",
            left: "-2px",
          },
          "100%": {
            opacity: "0"
          }
        },
        "move-dot-left": {
          "0%": {
            opacity: '0',
          },
          "51%": {
            opacity: '0',
          },
          "52%": {
            opacity: '1',
            top: "-31px",
            left: "300px",
          },
          "60%": {
            opacity: '1',
            top: "-31px",
            left: "-2px",
          },
          "63%": {
            opacity: '1',
            top: "100%",
            left: "-2px",
          },
          "64%": {
            opacity: '0',
          },
          "100%": {
            opacity: '0',
          }
        },
        "move-dot-left-sm": {
          "0%": {
            opacity: '0',
          },
          "51%": {
            opacity: '0',
          },
          "52%": {
            opacity: '1',
            top: "-2px",
          },
          "56%": {
            opacity: '1',
            top: "calc(100% - 2px)",
          },
          "57%": {
            opacity: '0',
          },
          "100%": {
            opacity: '0',
          }
        },
        "move-dot-middle": {
          "0%": {
            opacity: '0',
          },
          "69%": {
            opacity: '0',
          },
          "70%": {
            opacity: '1',
            top: "-2px",
          },
          "73%": {
            opacity: '1',
            top: "calc(100% - 2px)",
          },
          "74%": {
            opacity: '0',
          },
          "100%": {
            opacity: '0',
          }
        },
        "move-dot-middle-sm": {
          "0%": {
            opacity: '0',
          },
          "63%": {
            opacity: '0',
          },
          "64%": {
            opacity: '1',
            top: "-2px",
          },
          "67%": {
            opacity: '1',
            top: "calc(100% - 2px)",
          },
          "68%": {
            opacity: '0',
          },
          "100%": {
            opacity: '0',
          }
        },
        "move-dot-right": {
          "0%": {
            opacity: '0',
          },
          "79%": {
            opacity: '0',
          },
          "80%": {
            opacity: '1',
            top: "-31px",
            left: "-300px",
          },
          "88%": {
            opacity: '1',
            top: "-31px",
            left: "-2px",
          },
          "91%": {
            opacity: '1',
            top: "100%",
            left: "-2px",
          },
          "92%": {
            opacity: '0',
          },
          "100%": {
            opacity: '0',
          },
        },
        "move-dot-right-sm": {
          "0%": {
            opacity: '0',
          },
          "75%": {
            opacity: '0',
          },
          "76%": {
            opacity: '1',
            top: "-2px",
          },
          "79%": {
            opacity: '1',
            top: "calc(100% - 2px)",
          },
          "80%": {
            opacity: '0',
          },
          "100%": {
            opacity: '0',
          }
        },
        "blinker-image": {
          "0%": {
            "border-color": "transparent",
            "box-shadow": "none",
          },
          "45%": {
            "border-color": "transparent",
            "box-shadow": "none",
          },
          "48%": {
            "border-color": "#00d5bf",
            "box-shadow": "0 0 10px #00d5bf",
          },
          "51%": {
            "border-color": "transparent",
            "box-shadow": "none",
          },
          "100%": {
            "border-color": "transparent",
            "box-shadow": "none",
          }
        },
        "blinker-committee1": {
          "0%": {
            "box-shadow": "none",
          },
          "63%": {
            "box-shadow": "none",
          },
          "67%": {
            "box-shadow": "0 0 10px #00d5bf",
          },
          "69%": {
            "box-shadow": "none",
          },
          "100%": {
            "box-shadow": "none",
          }
        },
        "blinker-committee1-sm": {
          "0%": {
            "box-shadow": "none",
          },
          "61%": {
            "box-shadow": "none",
          },
          "64%": {
            "box-shadow": "0 0 10px #00d5bf",
          },
          "68%": {
            "box-shadow": "none",
          },
          "100%": {
            "box-shadow": "none",
          }
        },
        "blinker-committee2": {
          "0%": {
            "box-shadow": "none",
          },
          "74%": {
            "box-shadow": "none",
          },
          "77%": {
            "box-shadow": "0 0 10px #00d5bf",
          },
          "79%": {
            "box-shadow": "none",
          },
          "100%": {
            "box-shadow": "none",
          }
        },
        "blinker-committee2-sm": {
          "0%": {
            "box-shadow": "none",
          },
          "72%": {
            "box-shadow": "none",
          },
          "76%": {
            "box-shadow": "0 0 10px #00d5bf",
          },
          "80%": {
            "box-shadow": "none",
          },
          "100%": {
            "box-shadow": "none",
          }
        },
        "blinker-committee3": {
          "0%": {
            "box-shadow": "none",
          },
          "92%": {
            "box-shadow": "none",
          },
          "94%": {
            "box-shadow": "0 0 10px #00d5bf",
          },
          "98%": {
            "box-shadow": "none",
          },
          "100%": {
            "box-shadow": "none",
          }
        },
        "blinker-committee3-sm": {
          "0%": {
            "box-shadow": "none",
          },
          "84%": {
            "box-shadow": "none",
          },
          "88%": {
            "box-shadow": "0 0 10px #00d5bf",
          },
          "92%": {
            "box-shadow": "none",
          },
          "100%": {
            "box-shadow": "none",
          }
        }
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "move-dot1": "move-dot1 26s linear infinite",
        "move-dot2": "move-dot2 26s linear infinite",
        "move-dot-rect1": "move-dot-rect1 26s linear infinite",
        "move-dot-rect-left": "move-dot-left 26s linear infinite",
        "move-dot-rect-left-sm": "move-dot-left-sm 26s linear infinite",
        "move-dot-rect-right": "move-dot-right 26s linear infinite",
        "move-dot-rect-right-sm": "move-dot-right-sm 26s linear infinite",
        "move-dot-rect-middle": "move-dot-middle 26s linear infinite",
        "move-dot-rect-middle-sm": "move-dot-middle-sm 26s linear infinite",
        "blinker-image": "blinker-image 26s linear infinite",
        "blinker-committee1": "blinker-committee1 26s linear infinite",
        "blinker-committee1-sm": "blinker-committee1-sm 26s linear infinite",
        "blinker-committee2": "blinker-committee2 26s linear infinite",
        "blinker-committee2-sm": "blinker-committee2-sm 26s linear infinite",
        "blinker-committee3": "blinker-committee3 26s linear infinite",
        "blinker-committee3-sm": "blinker-committee3-sm 26s linear infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config