import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { Switch } from "@/components/ui/switch";
import { Slider } from "@/components/ui/slider";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from "@/components/ui/navigation-menu";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { CodeBlock } from "@/components/code-block";
import { ComponentPreview } from "@/components/component-preview";
import { componentExamples } from "@/data/component-examples";
import { ArrowLeft, Package, Terminal } from "lucide-react";

// Component renderer for live examples
const ComponentRenderer = ({ component, code }: { component: string; code: string }) => {
  switch (component) {
    case "Button":
      if (code.includes('variant="secondary"')) return <Button variant="secondary">Secondary</Button>;
      if (code.includes('variant="destructive"')) return <Button variant="destructive">Destructive</Button>;
      if (code.includes('variant="outline"')) return <Button variant="outline">Outline</Button>;
      if (code.includes('variant="ghost"')) return <Button variant="ghost">Ghost</Button>;
      if (code.includes('variant="link"')) return <Button variant="link">Link</Button>;
      return <Button>Button</Button>;
      
    case "Checkbox":
      return <Checkbox />;
      
    case "CheckboxWithText":
      return (
        <div className="flex items-center space-x-2">
          <Checkbox id="terms" />
          <label htmlFor="terms" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
            Accept terms and conditions
          </label>
        </div>
      );
      
    case "Input":
      if (code.includes('disabled')) return <Input placeholder="Email" disabled />;
      return <Input placeholder="Email" />;
      
    case "InputWithLabel":
      return (
        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label htmlFor="email">Email</Label>
          <Input type="email" id="email" placeholder="Email" />
        </div>
      );
      
    case "Card":
      return (
        <Card className="w-[350px]">
          <CardHeader>
            <CardTitle>Card Title</CardTitle>
            <CardDescription>Card Description</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Card Content</p>
          </CardContent>
          <CardFooter>
            <p>Card Footer</p>
          </CardFooter>
        </Card>
      );
      
    case "NavigationMenu":
      return (
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Getting started</NavigationMenuTrigger>
              <NavigationMenuContent>
                <NavigationMenuLink className="block p-4">Documentation</NavigationMenuLink>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      );
      
    case "Avatar":
      return (
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      );
      
    case "Badge":
      if (code.includes('variant="secondary"')) return <Badge variant="secondary">Secondary</Badge>;
      if (code.includes('variant="destructive"')) return <Badge variant="destructive">Destructive</Badge>;
      if (code.includes('variant="outline"')) return <Badge variant="outline">Outline</Badge>;
      return <Badge>Badge</Badge>;
      
    case "Alert":
      return (
        <Alert>
          <AlertTitle>Heads up!</AlertTitle>
          <AlertDescription>
            You can add components to your app using the cli.
          </AlertDescription>
        </Alert>
      );
      
    case "AlertDestructive":
      return (
        <Alert variant="destructive">
          <AlertTitle>Error</AlertTitle>
          <AlertDescription>
            Your session has expired. Please log in again.
          </AlertDescription>
        </Alert>
      );
      
    case "Tabs":
      return (
        <Tabs defaultValue="account" className="w-[400px]">
          <TabsList>
            <TabsTrigger value="account">Account</TabsTrigger>
            <TabsTrigger value="password">Password</TabsTrigger>
          </TabsList>
          <TabsContent value="account">Make changes to your account here.</TabsContent>
          <TabsContent value="password">Change your password here.</TabsContent>
        </Tabs>
      );
      
    case "Progress":
      return <Progress value={33} />;
      
    case "Switch":
      return <Switch />;
      
    case "Slider":
      return <Slider defaultValue={[33]} max={100} step={1} />;
      
    default:
      return <div>Component not found</div>;
  }
};

const ComponentPreviewPage = () => {
  const { slug } = useParams<{ slug: string }>();
  
  if (!slug || !componentExamples[slug as keyof typeof componentExamples]) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="container py-8">
          <div className="text-center">
            <h1 className="text-2xl font-bold">Component not found</h1>
            <p className="mt-2 text-muted-foreground">
              The component you're looking for doesn't exist.
            </p>
            <Button asChild className="mt-4">
              <Link to="/components">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Components
              </Link>
            </Button>
          </div>
        </div>
      </div>
    );
  }

  const component = componentExamples[slug as keyof typeof componentExamples];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="container py-8 md:py-12 xl:pt-24">
        <div className="mx-auto max-w-6xl">
          {/* Header */}
          <div className="mb-8">
            <Button variant="ghost" asChild className="mb-4">
              <Link to="/components">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Components
              </Link>
            </Button>
            
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
              {component.name}
            </h1>
            <p className="mt-2 text-lg text-muted-foreground">
              {component.description}
            </p>
          </div>

          {/* Installation */}
          <div className="mb-8">
            <h2 className="mb-4 flex items-center text-xl font-semibold">
              <Package className="mr-2 h-5 w-5" />
              Installation
            </h2>
            <CodeBlock
              code={component.installation}
              language="bash"
              title="Install dependencies"
            />
          </div>

          {/* Usage */}
          <div className="mb-8">
            <h2 className="mb-4 flex items-center text-xl font-semibold">
              <Terminal className="mr-2 h-5 w-5" />
              Usage
            </h2>
            <CodeBlock
              code={component.usage}
              language="tsx"
              title="Basic usage"
            />
          </div>

          {/* Examples */}
          <div className="mb-8">
            <h2 className="mb-6 text-xl font-semibold">Examples</h2>
            <div className="space-y-8">
              {component.examples.map((example, index) => (
                <div key={index}>
                  <h3 className="mb-4 text-lg font-medium">{example.title}</h3>
                  
                  {/* Live preview */}
                  <div className="mb-4">
                    <ComponentPreview>
                      <ComponentRenderer component={example.component} code={example.code} />
                    </ComponentPreview>
                  </div>
                  
                  {/* Code */}
                  <CodeBlock
                    code={example.code}
                    language="tsx"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ComponentPreviewPage;