const config = {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}", "*.{js,ts,jsx,tsx,mdx}"],
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
      colors: {
        border: "#374151",
        input: "#1f2937",
        ring: "#6b7280",
        background: "#000000",
        foreground: "#ffffff",
        primary: {
          DEFAULT: "#ffffff",
          foreground: "#000000",
        },
        secondary: {
          DEFAULT: "#1f2937",
          foreground: "#ffffff",
        },
        destructive: {
          DEFAULT: "#dc2626",
          foreground: "#ffffff",
        },
        muted: {
          DEFAULT: "#1f2937",
          foreground: "#9ca3af",
        },
        accent: {
          DEFAULT: "#1f2937",
          foreground: "#ffffff",
        },
        popover: {
          DEFAULT: "#111827",
          foreground: "#ffffff",
        },
        card: {
          DEFAULT: "#111827",
          foreground: "#ffffff",
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
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },

  plugins: [require("tailwindcss-animate")]
}

export default config
