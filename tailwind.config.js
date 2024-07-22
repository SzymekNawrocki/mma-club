/** @type {import('tailwindcss').Config} */
module.exports = {
  images: {
    domains: ["cdn.pixabay.com"],
  },
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: { 
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
      colors: {
               // Default background color
               background: "hsl(var(--background))",
               foreground: "hsl(var(--foreground))",
               
               // Muted backgrounds such as <TabsList />, <Skeleton /> and <Switch />
               muted: "hsl(var(--muted))",
               "muted-foreground": "hsl(var(--muted-foreground))",
               
               // Background color for <Card />
               card: "hsl(var(--card))",
               "card-foreground": "hsl(var(--card-foreground))",
               
               // Background color for popovers such as <DropdownMenu />, <HoverCard />, <Popover />
               popover: "hsl(var(--popover))",
               "popover-foreground": "hsl(var(--popover-foreground))",
               
               // Default border color
               border: "hsl(var(--border))",
               
               // Border color for inputs such as <Input />, <Select />, <Textarea />
               input: "hsl(var(--input))",
               
               // Primary colors for <Button />
               primary: "hsl(var(--primary))",
               "primary-foreground": "hsl(var(--primary-foreground))",
               
               // Secondary colors for <Button />
               secondary: "hsl(var(--secondary))",
               "secondary-foreground": "hsl(var(--secondary-foreground))",
               
               // Used for accents such as hover effects on <DropdownMenuItem>, <SelectItem>...etc
               accent: "hsl(var(--accent))",
               "accent-foreground": "hsl(var(--accent-foreground))",
               
               // Used for destructive actions such as <Button variant='destructive'>
               destructive: "hsl(var(--destructive))",
               "destructive-foreground": "hsl(var(--destructive-foreground))",
               
               // Used for focus ring
               ring: "hsl(var(--ring))"
       
      },
    },
  },
  plugins: [],
};
