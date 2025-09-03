import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { ArrowRight, Copy, Eye, Zap, Github, Code2, Check, MousePointer, CreditCard, Type } from "lucide-react";
import { useState, useEffect } from "react";

const ComponentPreview = ({ component, code, icon: Icon }: { component: React.ReactNode; code: string; icon: any }) => {
  const [copied, setCopied] = useState(false);

  const copyCode = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  return (
    <Card className="group cursor-pointer border hover:border-primary/20 transition-all duration-300 hover:shadow-lg">
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 min-w-0 flex-1">
            <div className="flex h-8 w-8 items-center justify-center rounded-md bg-primary/10 flex-shrink-0">
              <Icon className="h-4 w-4 text-primary" />
            </div>
            <CardTitle className="text-sm font-medium truncate">
              {code.match(/<(\w+)/)?.[1] || 'Component'}
            </CardTitle>
          </div>
          <Button
            variant="ghost"
            size="sm"
            onClick={copyCode}
            className="h-8 w-8 p-0 opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0 ml-2"
          >
            {copied ? <Check className="h-3 w-3" /> : <Copy className="h-3 w-3" />}
          </Button>
        </div>
      </CardHeader>
      <CardContent className="pt-0">
        <div className="flex items-center justify-center py-6 sm:py-8 bg-muted/30 rounded-md mb-4 min-h-[80px]">
          {component}
        </div>
        <div className="overflow-hidden">
          <pre className="text-xs text-muted-foreground bg-background p-3 rounded border overflow-x-auto whitespace-pre-wrap break-words">
            <code className="block">{code}</code>
          </pre>
        </div>
      </CardContent>
    </Card>
  );
};

const Index = () => {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  
  const components = [
    { name: "Button", element: <Button className="bg-gradient-primary text-sm px-4 py-2">Click me</Button> },
    { name: "Input", element: <Input placeholder="Enter text..." className="w-40 sm:w-48 text-sm" /> },
    { name: "Card", element: <Card className="w-28 sm:w-32 h-16 sm:h-20"><CardContent className="p-2 sm:p-4 text-xs flex items-center justify-center">Card</CardContent></Card> },
    { name: "Badge", element: <Badge variant="default" className="text-xs">New</Badge> }
  ];
  
  const currentComponent = components[wordIndex];

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        // Typing
        if (currentIndex < currentComponent.name.length) {
          setDisplayText(currentComponent.name.slice(0, currentIndex + 1));
          setCurrentIndex(currentIndex + 1);
        } else {
          // Wait before starting to delete
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        // Deleting
        if (currentIndex > 1) {
          setDisplayText(currentComponent.name.slice(0, currentIndex - 1));
          setCurrentIndex(currentIndex - 1);
        } else {
          // Keep at least one character, then move to next word
          setIsDeleting(false);
          setWordIndex((prev) => (prev + 1) % components.length);
          setCurrentIndex(0);
        }
      }
    }, isDeleting ? 100 : 150);

    return () => clearTimeout(timeout);
  }, [currentIndex, wordIndex, isDeleting, currentComponent]);

  const exampleComponents = [
    {
      component: <Button className="bg-gradient-primary text-sm px-4 py-2">Get Started</Button>,
      code: `<Button className="bg-gradient-primary">\n  Get Started\n</Button>`,
      icon: MousePointer
    },
    {
      component: <Input placeholder="Search..." className="w-full max-w-xs text-sm" />,
      code: `<Input \n  placeholder="Search components..."\n  className="w-full" \n/>`,
      icon: Type
    },
    {
      component: <Card className="w-full max-w-xs"><CardContent className="p-3 sm:p-4"><p className="text-xs sm:text-sm">Beautiful card</p></CardContent></Card>,
      code: `<Card className="w-48">\n  <CardContent className="p-4">\n    <p>Beautiful card component</p>\n  </CardContent>\n</Card>`,
      icon: CreditCard
    },
    {
      component: <Badge variant="outline" className="border-primary text-primary text-xs">React</Badge>,
      code: `<Badge \n  variant="outline" \n  className="border-primary text-primary"\n>\n  React\n</Badge>`,
      icon: Eye
    }
  ];

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Navbar />
      
      {/* Hero Section - Mobile First */}
      <section className="relative min-h-screen flex items-center justify-center bg-background">
        <div className="container px-4 sm:px-6 lg:px-8 relative z-10 py-16 sm:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
            {/* Hero Text - Mobile First */}
            <div className="text-center lg:text-left order-2 lg:order-1">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight leading-tight">
                Build faster with{" "}
                <span className="bg-gradient-primary bg-clip-text text-transparent block sm:inline mt-2 sm:mt-0">
                  beautiful {displayText}
                  <span className="inline-block w-0.5 sm:w-1 h-6 sm:h-8 lg:h-10 xl:h-12 bg-gradient-primary ml-1 animate-pulse" />
                </span>
              </h1>
              <p className="mx-auto lg:mx-0 mt-4 sm:mt-6 max-w-lg lg:max-w-xl text-base sm:text-lg text-muted-foreground leading-relaxed">
                Copy and paste the most beautiful React components. Built with Tailwind CSS. 
                Open source and customizable.
              </p>
              <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4 lg:justify-start justify-center">
                <Button asChild size="lg" className="bg-gradient-primary hover:shadow-glow transition-all duration-300 w-full sm:w-auto">
                  <Link to="/components">
                    <span className="sm:hidden">Copy Components</span>
                    <span className="hidden sm:inline">Copy Your First Component</span>
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button variant="outline" size="lg" asChild className="w-full sm:w-auto">
                  <Link to="/docs">
                    Documentation
                  </Link>
                </Button>
              </div>
            </div>
            
            {/* Component Preview - Mobile First */}
            <div className="relative order-1 lg:order-2">
              <div className="bg-muted/30 rounded-xl p-4 sm:p-6 lg:p-8 backdrop-blur">
                <div className="bg-background rounded-lg p-4 sm:p-6 shadow-lg">
                  <div className="flex items-center gap-2 mb-3 sm:mb-4">
                    <div className="flex gap-1">
                      <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-red-400"></div>
                      <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-yellow-400"></div>
                      <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-green-400"></div>
                    </div>
                    <span className="text-xs text-muted-foreground ml-2 truncate">Component.tsx</span>
                  </div>
                  
                  <div className="space-y-3 sm:space-y-4">
                    {/* Code Preview */}
                    <div className="bg-muted/50 rounded p-3 sm:p-4 font-mono text-xs sm:text-sm overflow-x-auto">
                      <div className="text-blue-600 whitespace-nowrap">&lt;{currentComponent.name}</div>
                      <div className="text-green-600 pl-2 sm:pl-4 whitespace-nowrap">className="bg-gradient-primary"</div>
                      <div className="text-blue-600 whitespace-nowrap">&gt;</div>
                      <div className="pl-2 sm:pl-4 whitespace-nowrap">Click me</div>
                      <div className="text-blue-600 whitespace-nowrap">&lt;/{currentComponent.name}&gt;</div>
                    </div>
                    
                    {/* Live Preview */}
                    <div className="border-t pt-3 sm:pt-4">
                      <span className="text-xs text-muted-foreground mb-2 sm:mb-3 block">Preview:</span>
                      <div className="flex items-center justify-center py-3 sm:py-4 bg-background rounded border min-h-[60px]">
                        {currentComponent.element}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section - Mobile First */}
      <section className="py-16 sm:py-20 md:py-32 bg-muted/20">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight">
              How it works
            </h2>
            <p className="mt-3 sm:mt-4 text-base sm:text-lg text-muted-foreground">
              Get started in seconds with our simple workflow
            </p>
          </div>
          
          <div className="grid gap-6 sm:gap-8 md:grid-cols-3 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="flex h-12 w-12 sm:h-16 sm:w-16 mx-auto items-center justify-center rounded-full bg-primary/10 mb-3 sm:mb-4">
                <Eye className="h-6 w-6 sm:h-8 sm:w-8 text-primary" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold mb-2">1. Browse</h3>
              <p className="text-sm sm:text-base text-muted-foreground">
                Explore our collection of beautiful, production-ready components
              </p>
            </div>
            
            <div className="text-center">
              <div className="flex h-12 w-12 sm:h-16 sm:w-16 mx-auto items-center justify-center rounded-full bg-primary/10 mb-3 sm:mb-4">
                <Copy className="h-6 w-6 sm:h-8 sm:w-8 text-primary" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold mb-2">2. Copy</h3>
              <p className="text-sm sm:text-base text-muted-foreground">
                Click to copy the component code to your clipboard
              </p>
            </div>
            
            <div className="text-center">
              <div className="flex h-12 w-12 sm:h-16 sm:w-16 mx-auto items-center justify-center rounded-full bg-primary/10 mb-3 sm:mb-4">
                <Check className="h-6 w-6 sm:h-8 sm:w-8 text-primary" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold mb-2">3. Use</h3>
              <p className="text-sm sm:text-base text-muted-foreground">
                Paste into your project and customize to match your design
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Component Preview Section - Mobile First */}
      <section className="py-16 sm:py-20 md:py-32">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight">
              See them in action
            </h2>
            <p className="mt-3 sm:mt-4 text-base sm:text-lg text-muted-foreground">
              Interactive previews of our most popular components
            </p>
          </div>
          
          <div className="grid gap-4 sm:gap-6 md:grid-cols-2 max-w-6xl mx-auto">
            {exampleComponents.map((item, index) => (
              <ComponentPreview
                key={index}
                component={item.component}
                code={item.code}
                icon={item.icon}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Features Section - Mobile First */}
      <section className="py-16 sm:py-20 md:py-32 bg-muted/20">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight">
              Built for developers
            </h2>
            <p className="mt-3 sm:mt-4 text-base sm:text-lg text-muted-foreground">
              Everything you need to build stunning UIs faster
            </p>
          </div>
          
          <div className="grid gap-6 sm:gap-8 md:grid-cols-3 max-w-4xl mx-auto">
            <Card className="border-0 shadow-elegant">
              <CardContent className="p-4 sm:p-6">
                <div className="flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-lg bg-primary/10">
                  <Code2 className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
                </div>
                <h3 className="mt-3 sm:mt-4 text-lg sm:text-xl font-semibold">TypeScript Ready</h3>
                <p className="mt-2 text-sm sm:text-base text-muted-foreground">
                  Full TypeScript support with proper type definitions and IntelliSense.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-0 shadow-elegant">
              <CardContent className="p-4 sm:p-6">
                <div className="flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-lg bg-primary/10">
                  <Zap className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
                </div>
                <h3 className="mt-3 sm:mt-4 text-lg sm:text-xl font-semibold">Zero Configuration</h3>
                <p className="mt-2 text-sm sm:text-base text-muted-foreground">
                  Works with any React framework. No complex setup or configuration needed.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-0 shadow-elegant">
              <CardContent className="p-4 sm:p-6">
                <div className="flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-lg bg-primary/10">
                  <ArrowRight className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
                </div>
                <h3 className="mt-3 sm:mt-4 text-lg sm:text-xl font-semibold">Accessible</h3>
                <p className="mt-2 text-sm sm:text-base text-muted-foreground">
                  Built with accessibility in mind. ARIA attributes and keyboard navigation included.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section - Mobile First */}
      <section className="py-16 sm:py-20 md:py-32">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight">
              Start building today
            </h2>
            <p className="mt-3 sm:mt-4 text-base sm:text-lg text-muted-foreground">
              Join thousands of developers building faster with beautiful components.
            </p>
            <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4 sm:justify-center">
              <Button asChild size="lg" className="bg-gradient-primary hover:shadow-glow transition-all duration-300 w-full sm:w-auto">
                <Link to="/components">
                  <span className="sm:hidden">Browse Components</span>
                  <span className="hidden sm:inline">Browse All Components</span>
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild className="w-full sm:w-auto">
                <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                  <Github className="mr-2 h-4 w-4" />
                  View on GitHub
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;