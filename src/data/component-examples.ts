export const componentExamples = {
  button: {
    name: "Button",
    description: "Displays a button or a component that looks like a button.",
    usage: `import { Button } from "@/components/ui/button"

export function ButtonDemo() {
  return <Button>Click me</Button>
}`,
    installation: `npm install @radix-ui/react-slot
npm install class-variance-authority
npm install clsx tailwind-merge`,
    examples: [
      {
        title: "Default",
        code: `<Button>Button</Button>`,
        component: "Button"
      },
      {
        title: "Secondary", 
        code: `<Button variant="secondary">Secondary</Button>`,
        component: "Button"
      },
      {
        title: "Destructive",
        code: `<Button variant="destructive">Destructive</Button>`,
        component: "Button"
      },
      {
        title: "Outline",
        code: `<Button variant="outline">Outline</Button>`,
        component: "Button"
      },
      {
        title: "Ghost",
        code: `<Button variant="ghost">Ghost</Button>`,
        component: "Button"
      },
      {
        title: "Link",
        code: `<Button variant="link">Link</Button>`,
        component: "Button"
      }
    ]
  },
  checkbox: {
    name: "Checkbox",
    description: "A control that allows the user to toggle between checked and not checked.",
    usage: `import { Checkbox } from "@/components/ui/checkbox"

export function CheckboxDemo() {
  return (
    <div className="flex items-center space-x-2">
      <Checkbox id="terms" />
      <label htmlFor="terms">Accept terms and conditions</label>
    </div>
  )
}`,
    installation: `npm install @radix-ui/react-checkbox`,
    examples: [
      {
        title: "Default",
        code: `<Checkbox />`,
        component: "Checkbox"
      },
      {
        title: "With text",
        code: `<div className="flex items-center space-x-2">
  <Checkbox id="terms" />
  <label htmlFor="terms">Accept terms and conditions</label>
</div>`,
        component: "CheckboxWithText"
      }
    ]
  },
  input: {
    name: "Input",
    description: "Displays a form input field or a component that looks like an input field.",
    usage: `import { Input } from "@/components/ui/input"

export function InputDemo() {
  return <Input placeholder="Email" />
}`,
    installation: `# No additional packages required`,
    examples: [
      {
        title: "Default",
        code: `<Input placeholder="Email" />`,
        component: "Input"
      },
      {
        title: "Disabled",
        code: `<Input placeholder="Email" disabled />`,
        component: "Input"
      },
      {
        title: "With label",
        code: `<div className="grid w-full max-w-sm items-center gap-1.5">
  <Label htmlFor="email">Email</Label>
  <Input type="email" id="email" placeholder="Email" />
</div>`,
        component: "InputWithLabel"
      }
    ]
  },
  card: {
    name: "Card",
    description: "Displays a card with header, content, and footer.",
    usage: `import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export function CardDemo() {
  return (
    <Card>
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
  )
}`,
    installation: `# No additional packages required`,
    examples: [
      {
        title: "Default",
        code: `<Card>
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
</Card>`,
        component: "Card"
      }
    ]
  },
  "navigation-menu": {
    name: "Navigation Menu",
    description: "A collection of links for navigating websites.",
    usage: `import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu"

export function NavigationMenuDemo() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Item One</NavigationMenuTrigger>
          <NavigationMenuContent>
            <NavigationMenuLink>Link</NavigationMenuLink>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}`,
    installation: `npm install @radix-ui/react-navigation-menu`,
    examples: [
      {
        title: "Default",
        code: `<NavigationMenu>
  <NavigationMenuList>
    <NavigationMenuItem>
      <NavigationMenuTrigger>Getting started</NavigationMenuTrigger>
      <NavigationMenuContent>
        <NavigationMenuLink>Documentation</NavigationMenuLink>
      </NavigationMenuContent>
    </NavigationMenuItem>
  </NavigationMenuList>
</NavigationMenu>`,
        component: "NavigationMenu"
      }
    ]
  },
  avatar: {
    name: "Avatar",
    description: "An image element with a fallback for representing the user.",
    usage: `import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export function AvatarDemo() {
  return (
    <Avatar>
      <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>
  )
}`,
    installation: `npm install @radix-ui/react-avatar`,
    examples: [
      {
        title: "Default",
        code: `<Avatar>
  <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
  <AvatarFallback>CN</AvatarFallback>
</Avatar>`,
        component: "Avatar"
      }
    ]
  },
  badge: {
    name: "Badge",
    description: "Displays a badge or a component that looks like a badge.",
    usage: `import { Badge } from "@/components/ui/badge"

export function BadgeDemo() {
  return <Badge>Badge</Badge>
}`,
    installation: `npm install class-variance-authority`,
    examples: [
      {
        title: "Default",
        code: `<Badge>Badge</Badge>`,
        component: "Badge"
      },
      {
        title: "Secondary",
        code: `<Badge variant="secondary">Secondary</Badge>`,
        component: "Badge"
      },
      {
        title: "Destructive",
        code: `<Badge variant="destructive">Destructive</Badge>`,
        component: "Badge"
      },
      {
        title: "Outline",
        code: `<Badge variant="outline">Outline</Badge>`,
        component: "Badge"
      }
    ]
  },
  alert: {
    name: "Alert",
    description: "Displays a callout for user attention.",
    usage: `import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

export function AlertDemo() {
  return (
    <Alert>
      <AlertTitle>Heads up!</AlertTitle>
      <AlertDescription>
        You can add components to your app using the cli.
      </AlertDescription>
    </Alert>
  )
}`,
    installation: `npm install class-variance-authority`,
    examples: [
      {
        title: "Default",
        code: `<Alert>
  <AlertTitle>Heads up!</AlertTitle>
  <AlertDescription>
    You can add components to your app using the cli.
  </AlertDescription>
</Alert>`,
        component: "Alert"
      },
      {
        title: "Destructive",
        code: `<Alert variant="destructive">
  <AlertTitle>Error</AlertTitle>
  <AlertDescription>
    Your session has expired. Please log in again.
  </AlertDescription>
</Alert>`,
        component: "AlertDestructive"
      }
    ]
  },
  tabs: {
    name: "Tabs",
    description: "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
    usage: `import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export function TabsDemo() {
  return (
    <Tabs defaultValue="account" className="w-[400px]">
      <TabsList>
        <TabsTrigger value="account">Account</TabsTrigger>
        <TabsTrigger value="password">Password</TabsTrigger>
      </TabsList>
      <TabsContent value="account">Make changes to your account here.</TabsContent>
      <TabsContent value="password">Change your password here.</TabsContent>
    </Tabs>
  )
}`,
    installation: `npm install @radix-ui/react-tabs`,
    examples: [
      {
        title: "Default",
        code: `<Tabs defaultValue="account" className="w-[400px]">
  <TabsList>
    <TabsTrigger value="account">Account</TabsTrigger>
    <TabsTrigger value="password">Password</TabsTrigger>
  </TabsList>
  <TabsContent value="account">Make changes to your account here.</TabsContent>
  <TabsContent value="password">Change your password here.</TabsContent>
</Tabs>`,
        component: "Tabs"
      }
    ]
  },
  progress: {
    name: "Progress",
    description: "Displays an indicator showing the completion progress of a task.",
    usage: `import { Progress } from "@/components/ui/progress"

export function ProgressDemo() {
  return <Progress value={33} />
}`,
    installation: `npm install @radix-ui/react-progress`,
    examples: [
      {
        title: "Default",
        code: `<Progress value={33} />`,
        component: "Progress"
      }
    ]
  },
  switch: {
    name: "Switch",
    description: "A control that allows the user to toggle between checked and not checked.",
    usage: `import { Switch } from "@/components/ui/switch"

export function SwitchDemo() {
  return <Switch />
}`,
    installation: `npm install @radix-ui/react-switch`,
    examples: [
      {
        title: "Default",
        code: `<Switch />`,
        component: "Switch"
      }
    ]
  },
  slider: {
    name: "Slider",
    description: "An input where the user selects a value from within a given range.",
    usage: `import { Slider } from "@/components/ui/slider"

export function SliderDemo() {
  return <Slider defaultValue={[33]} max={100} step={1} />
}`,
    installation: `npm install @radix-ui/react-slider`,
    examples: [
      {
        title: "Default",
        code: `<Slider defaultValue={[33]} max={100} step={1} />`,
        component: "Slider"
      }
    ]
  }
};