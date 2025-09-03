import { useState } from "react";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { CodeBlock } from "@/components/code-block";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ExternalLink, BookOpen, Rocket, Star, Settings } from "lucide-react";

const Docs = () => {
  const [selectedFramework, setSelectedFramework] = useState('react');

  // React Installation
  const reactInstallationCode = `npx create-react-app my-app --template typescript
cd my-app
npm install tailwindcss
npm install @radix-ui/react-slot class-variance-authority clsx tailwind-merge`;

  // Next.js Installation
  const nextjsInstallationCode = `npx create-next-app@latest my-app --typescript --tailwind --eslint
cd my-app
npm install @radix-ui/react-slot class-variance-authority clsx tailwind-merge
npm install next-themes`;

  const nextjsAppLayoutCode = `// app/layout.tsx
import { Inter } from 'next/font/google'
import { Providers } from './providers'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  )
}`;

  // Vite Installation
  const viteInstallationCode = `npm create vite@latest my-app -- --template react-ts
cd my-app
npm install
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
npm install @radix-ui/react-slot class-variance-authority clsx tailwind-merge`;

  const viteConfigCode = `// vite.config.ts
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})`;

  // Astro Installation
  const astroInstallationCode = `npm create astro@latest my-app -- --template minimal --typescript
cd my-app
npx astro add react tailwind
npm install @radix-ui/react-slot class-variance-authority clsx tailwind-merge`;

  const astroConfigCode = `// astro.config.mjs
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  integrations: [
    react(),
    tailwind({
      applyBaseStyles: false,
    })
  ],
});`;

  const tailwindConfig = `/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
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
    },
  },
  plugins: [require("tailwindcss-animate")],
}`;

  const globalCss = `@tailwind base;
@tailwind components;
@tailwind utilities;
 
@layer base {
  :root {
    --background: 0 0% 100%;
    --foreground: 222.2 84% 4.9%;
    --card: 0 0% 100%;
    --card-foreground: 222.2 84% 4.9%;
    --popover: 0 0% 100%;
    --popover-foreground: 222.2 84% 4.9%;
    --primary: 222.2 47.4% 11.2%;
    --primary-foreground: 210 40% 98%;
    --secondary: 210 40% 96.1%;
    --secondary-foreground: 222.2 47.4% 11.2%;
    --muted: 210 40% 96.1%;
    --muted-foreground: 215.4 16.3% 46.9%;
    --accent: 210 40% 96.1%;
    --accent-foreground: 222.2 47.4% 11.2%;
    --destructive: 0 84.2% 60.2%;
    --destructive-foreground: 210 40% 98%;
    --border: 214.3 31.8% 91.4%;
    --input: 214.3 31.8% 91.4%;
    --ring: 222.2 84% 4.9%;
    --radius: 0.5rem;
  }
 
  .dark {
    --background: 222.2 84% 4.9%;
    --foreground: 210 40% 98%;
    --card: 222.2 84% 4.9%;
    --card-foreground: 210 40% 98%;
    --popover: 222.2 84% 4.9%;
    --popover-foreground: 210 40% 98%;
    --primary: 210 40% 98%;
    --primary-foreground: 222.2 47.4% 11.2%;
    --secondary: 217.2 32.6% 17.5%;
    --secondary-foreground: 210 40% 98%;
    --muted: 217.2 32.6% 17.5%;
    --muted-foreground: 215 20.2% 65.1%;
    --accent: 217.2 32.6% 17.5%;
    --accent-foreground: 210 40% 98%;
    --destructive: 0 62.8% 30.6%;
    --destructive-foreground: 210 40% 98%;
    --border: 217.2 32.6% 17.5%;
    --input: 217.2 32.6% 17.5%;
    --ring: 212.7 26.8% 83.9%;
  }
}
 
@layer base {
  * {
    @apply border-border;
  }
  body {
    @apply bg-background text-foreground;
  }
}`;

  const darkModeCode = `npm install next-themes

// providers.tsx
"use client"

import { ThemeProvider } from "next-themes"

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      {children}
    </ThemeProvider>
  )
}

// theme-toggle.tsx
"use client"

import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"

export function ThemeToggle() {
  const { setTheme, theme } = useTheme()

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
    >
      <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  )
}`;

  const frameworks = [
    {
      id: 'react',
      name: 'React',
      description: 'The most popular JavaScript library for building user interfaces',
      logo: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
          <circle cx="12" cy="12" r="2" />
          <path d="M12 1c-3.2 0-6.2.9-8.8 2.5 2.6-1.6 5.8-2.5 8.8-2.5s6.2.9 8.8 2.5C18.2 1.9 15.2 1 12 1z" />
          <path d="M12 23c3.2 0 6.2-.9 8.8-2.5-2.6 1.6-5.8 2.5-8.8 2.5s-6.2-.9-8.8-2.5C5.8 22.1 8.8 23 12 23z" />
          <ellipse cx="12" cy="12" rx="11" ry="4" fill="none" stroke="currentColor" strokeWidth="1" />
          <ellipse cx="12" cy="12" rx="11" ry="4" fill="none" stroke="currentColor" strokeWidth="1" transform="rotate(60 12 12)" />
          <ellipse cx="12" cy="12" rx="11" ry="4" fill="none" stroke="currentColor" strokeWidth="1" transform="rotate(-60 12 12)" />
        </svg>
      ),
      popularity: 'Most Popular',
      installCode: reactInstallationCode,
      additionalSteps: null,
      docs: 'https://react.dev'
    },
    {
      id: 'nextjs',
      name: 'Next.js',
      description: 'The React framework for production with built-in optimization',
      logo: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2L2 7v10l10 5 10-5V7l-10-5zM12 4.2L19.5 8 12 11.8 4.5 8 12 4.2zm-8 5.3L11 13v6.8L4 16.5V9.5zm16 7L12 19.8V13l7-3.5v7z" />
          <path d="M8.5 10.5L15.5 7v10l-7-6.5z" />
        </svg>
      ),
      popularity: 'Recommended',
      installCode: nextjsInstallationCode,
      additionalSteps: nextjsAppLayoutCode,
      docs: 'https://nextjs.org/docs'
    },
    {
      id: 'vite',
      name: 'Vite + React',
      description: 'Lightning fast build tool with React template',
      logo: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
          <path d="M8.5 3.5L12 2l3.5 1.5-3.5 7-3.5-7z" />
          <path d="M12 9l8-6-8 14-8-14 8 6z" />
          <path d="M6 8l6 14 6-14-6-4-6 4z" fillOpacity="0.3" />
        </svg>
      ),
      popularity: 'Fast Build',
      installCode: viteInstallationCode,
      additionalSteps: viteConfigCode,
      docs: 'https://vitejs.dev/guide'
    },
    {
      id: 'astro',
      name: 'Astro',
      description: 'Modern static site builder with component islands',
      logo: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2L8.5 9h7L12 2z" />
          <path d="M4 22h4l2-6-6 6z" />
          <path d="M20 22h-4l-2-6 6 6z" />
          <circle cx="12" cy="15" r="2" />
          <path d="M12 13v6M10 15h4" />
        </svg>
      ),
      popularity: 'SSG Optimized',
      installCode: astroInstallationCode,
      additionalSteps: astroConfigCode,
      docs: 'https://docs.astro.build'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <div className="container py-8 md:py-12 xl:pt-24">
        <div className="mx-auto max-w-6xl">
          {/* Header */}
          <div className="mb-16 text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
              Get Started
            </h1>
            <p className="mt-6 text-lg text-muted-foreground sm:text-xl">
              Learn how to integrate our component library into your favorite React framework.
              Choose from multiple setup options to get started quickly.
            </p>
          </div>

          {/* Framework Installation */}
          <section className="mb-16">
            <div className="mb-8 text-center">
              <h2 className="mb-4 text-3xl font-semibold">Choose Your Framework</h2>
              <p className="text-muted-foreground">
                Select your preferred React framework and follow the installation guide
              </p>
            </div>

            <Tabs value={selectedFramework} onValueChange={setSelectedFramework} className="w-full">
              {/* Desktop Tabs */}
              <TabsList className="hidden md:grid w-full grid-cols-4 lg:w-2/3 lg:mx-auto mb-8">
                {frameworks.map((framework) => (
                  <TabsTrigger key={framework.id} value={framework.id} className="text-sm flex items-center gap-2">
                    {framework.logo}
                    {framework.name}
                  </TabsTrigger>
                ))}
              </TabsList>

              {/* Mobile Dropdown */}
              <div className="md:hidden mb-8">
                <Select value={selectedFramework} onValueChange={setSelectedFramework}>
                  <SelectTrigger className="w-full">
                    <SelectValue>
                      <div className="flex items-center gap-2">
                        {frameworks.find(f => f.id === selectedFramework)?.logo}
                        <span>{frameworks.find(f => f.id === selectedFramework)?.name}</span>
                      </div>
                    </SelectValue>
                  </SelectTrigger>
                  <SelectContent>
                    {frameworks.map((framework) => (
                      <SelectItem key={framework.id} value={framework.id}>
                        <div className="flex items-center gap-2">
                          {framework.logo}
                          <span>{framework.name}</span>
                        </div>
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {frameworks.map((framework) => (
                <TabsContent key={framework.id} value={framework.id} className="space-y-6">
                  <Card className="border-0 shadow-elegant">
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <div className="text-foreground">{framework.logo}</div>
                          <div>
                            <CardTitle className="flex items-center gap-2">
                              {framework.name}
                              <Badge variant="outline" className="text-xs">
                                {framework.popularity}
                              </Badge>
                            </CardTitle>
                            <CardDescription className="mt-1">
                              {framework.description}
                            </CardDescription>
                          </div>
                        </div>
                        <a
                          href={framework.docs}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center text-sm text-muted-foreground hover:text-primary"
                        >
                          View Docs
                          <ExternalLink className="ml-1 h-3 w-3" />
                        </a>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <div>
                        <h4 className="mb-3 font-medium">1. Create and setup project</h4>
                        <CodeBlock
                          code={framework.installCode}
                          language="bash"
                          title="Terminal"
                        />
                      </div>

                      {framework.additionalSteps && (
                        <div>
                          <h4 className="mb-3 font-medium">
                            2. {framework.id === 'nextjs' ? 'Configure app layout' : 'Update configuration'}
                          </h4>
                          <CodeBlock
                            code={framework.additionalSteps}
                            language={framework.id === 'nextjs' ? 'tsx' : framework.id === 'vite' ? 'typescript' : 'javascript'}
                            title={
                              framework.id === 'nextjs'
                                ? 'app/layout.tsx'
                                : framework.id === 'vite'
                                  ? 'vite.config.ts'
                                  : 'astro.config.mjs'
                            }
                          />
                        </div>
                      )}

                      <div>
                        <h4 className="mb-3 font-medium">
                          {framework.additionalSteps ? '3' : '2'}. Configure Tailwind CSS
                        </h4>
                        <p className="mb-3 text-sm text-muted-foreground">
                          Update your <code className="rounded bg-muted px-1 py-0.5">tailwind.config.js</code> file:
                        </p>
                        <CodeBlock
                          code={tailwindConfig}
                          language="javascript"
                          title="tailwind.config.js"
                        />
                      </div>

                      <div>
                        <h4 className="mb-3 font-medium">
                          {framework.additionalSteps ? '4' : '3'}. Add global styles
                        </h4>
                        <CodeBlock
                          code={globalCss}
                          language="css"
                          title="globals.css"
                        />
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
              ))}
            </Tabs>
          </section>

          {/* Usage */}
          <section className="mb-16">
            <Card className="border-0 shadow-elegant">
              <CardHeader>
                <CardTitle className="flex items-center text-2xl">
                  <Rocket className="mr-3 h-6 w-6" />
                  Usage
                </CardTitle>
                <CardDescription>
                  How to use components in your project
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid gap-6 md:grid-cols-2">
                  <div>
                    <h4 className="mb-3 font-medium">Copy & Paste Components</h4>
                    <p className="text-sm text-muted-foreground mb-3">
                      Our components are designed to be copied directly into your project. No npm package required.
                    </p>
                    <ul className="list-disc space-y-1 pl-4 text-sm text-muted-foreground">
                      <li>Browse components in our gallery</li>
                      <li>Copy the component code</li>
                      <li>Paste into your project</li>
                      <li>Customize as needed</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="mb-3 font-medium">What's Included</h4>
                    <ul className="list-disc space-y-1 pl-4 text-sm text-muted-foreground">
                      <li>TypeScript definitions</li>
                      <li>Accessibility features</li>
                      <li>Dark mode support</li>
                      <li>Responsive design</li>
                      <li>Animation variants</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Dark Mode */}
          <section className="mb-16">
            <Card className="border-0 shadow-elegant">
              <CardHeader>
                <CardTitle className="flex items-center text-2xl">
                  <Settings className="mr-3 h-6 w-6" />
                  Dark Mode Setup
                </CardTitle>
                <CardDescription>
                  Enable dark mode for your components
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  All components support dark mode out of the box using CSS variables and the `dark:` modifier.
                </p>
                <CodeBlock
                  code={darkModeCode}
                  language="tsx"
                  title="Dark mode implementation"
                />
              </CardContent>
            </Card>
          </section>

          {/* FAQ */}
          <section className="mb-16">
            <div className="mb-8 text-center">
              <h2 className="mb-4 text-3xl font-semibold">Frequently Asked Questions</h2>
              <p className="text-muted-foreground">
                Common questions about setup and usage
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <Card className="border-0 shadow-elegant">
                <CardHeader>
                  <CardTitle className="text-lg">Do I need to install packages?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Most components work with just Tailwind CSS. Some advanced components require Radix UI primitives,
                    which are listed in each component's installation section.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-elegant">
                <CardHeader>
                  <CardTitle className="text-lg">Can I customize the styling?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Yes! Components use CSS variables and Tailwind classes, making them highly customizable.
                    You can modify colors, spacing, and animations to match your design system.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-elegant">
                <CardHeader>
                  <CardTitle className="text-lg">Are components accessible?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Absolutely! Built with Radix UI primitives, components include keyboard navigation,
                    screen reader support, focus management, and proper ARIA attributes.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-elegant">
                <CardHeader>
                  <CardTitle className="text-lg">What about TypeScript support?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Full TypeScript support is included with proper type definitions, IntelliSense,
                    and compile-time error checking for all component props.
                  </p>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Call to Action */}
          <section className="text-center">
            <Card className="border-0 bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 shadow-elegant">
              <CardContent className="py-12">
                <div className="flex justify-center mb-4">
                  <Star className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-2xl font-semibold mb-4">Ready to get started?</h3>
                <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                  Choose your framework above and follow the installation guide.
                  You'll have beautiful, accessible components running in minutes.
                </p>
              </CardContent>
            </Card>
          </section>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Docs;