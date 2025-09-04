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
      },
      {
        title: "Icon",
        code: `<Button size="icon">
  <ChevronRight className="h-4 w-4" />
</Button>`,
        component: "ButtonIcon"
      },
      {
        title: "Loading",
        code: `<Button disabled>
  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
  Please wait
</Button>`,
        component: "ButtonLoading"
      },
      {
        title: "With Icon",
        code: `<Button>
  <Mail className="mr-2 h-4 w-4" />
  Login with Email
</Button>`,
        component: "ButtonWithIcon"
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
      },
      {
        title: "Large",
        code: `<Badge className="px-3 py-1 text-sm">Large Badge</Badge>`,
        component: "BadgeLarge"
      },
      {
        title: "Dot",
        code: `<Badge variant="outline" className="pl-3">
  <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
  Online
</Badge>`,
        component: "BadgeDot"
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
      },
      {
        title: "With Icon",
        code: `<Alert>
  <Terminal className="h-4 w-4" />
  <AlertTitle>Heads up!</AlertTitle>
  <AlertDescription>
    You can add components to your app using the cli.
  </AlertDescription>
</Alert>`,
        component: "AlertWithIcon"
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
      },
      {
        title: "Vertical",
        code: `<Tabs defaultValue="account" orientation="vertical" className="flex w-[400px]">
  <TabsList className="flex-col h-auto">
    <TabsTrigger value="account">Account</TabsTrigger>
    <TabsTrigger value="password">Password</TabsTrigger>
  </TabsList>
  <div className="flex-1 ml-4">
    <TabsContent value="account">Account content</TabsContent>
    <TabsContent value="password">Password content</TabsContent>
  </div>
</Tabs>`,
        component: "TabsVertical"
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
      },
      {
        title: "With Label",
        code: `<div className="space-y-2">
  <div className="flex justify-between text-sm">
    <span>Progress</span>
    <span>33%</span>
  </div>
  <Progress value={33} />
</div>`,
        component: "ProgressWithLabel"
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
      },
      {
        title: "With Label",
        code: `<div className="flex items-center space-x-2">
  <Switch id="airplane-mode" />
  <Label htmlFor="airplane-mode">Airplane Mode</Label>
</div>`,
        component: "SwitchWithLabel"
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
      },
      {
        title: "Range",
        code: `<Slider defaultValue={[33, 66]} max={100} step={1} />`,
        component: "SliderRange"
      },
      {
        title: "With Label",
        code: `<div className="space-y-2">
  <Label>Volume: 33</Label>
  <Slider defaultValue={[33]} max={100} step={1} />
</div>`,
        component: "SliderWithLabel"
      }
    ]
  }
  },
  calendar: {
    name: "Calendar",
    description: "A date field component that allows users to enter and edit date.",
    usage: `import { Calendar } from "@/components/ui/calendar"

export function CalendarDemo() {
  const [date, setDate] = React.useState<Date | undefined>(new Date())

  return (
    <Calendar
      mode="single"
      selected={date}
      onSelect={setDate}
      className="rounded-md border"
    />
  )
}`,
    installation: `npm install react-day-picker`,
    examples: [
      {
        title: "Default",
        code: `<Calendar
  mode="single"
  selected={date}
  onSelect={setDate}
  className="rounded-md border"
/>`,
        component: "Calendar"
      }
    ]
  },
  chart: {
    name: "Chart",
    description: "Recharts components for data visualization.",
    usage: `import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from "recharts"

const chartData = [
  { month: "January", desktop: 186 },
  { month: "February", desktop: 305 },
  { month: "March", desktop: 237 },
  { month: "April", desktop: 73 },
  { month: "May", desktop: 209 },
  { month: "June", desktop: 214 },
]

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "hsl(var(--chart-1))",
  },
}

export function ChartDemo() {
  return (
    <ChartContainer config={chartConfig}>
      <BarChart accessibilityLayer data={chartData}>
        <XAxis dataKey="month" />
        <YAxis />
        <ChartTooltip content={<ChartTooltipContent />} />
        <Bar dataKey="desktop" fill="var(--color-desktop)" />
      </BarChart>
    </ChartContainer>
  )
}`,
    installation: `npm install recharts`,
    examples: [
      {
        title: "Bar Chart",
        code: `<ChartContainer config={chartConfig}>
  <BarChart data={chartData}>
    <XAxis dataKey="month" />
    <YAxis />
    <ChartTooltip content={<ChartTooltipContent />} />
    <Bar dataKey="desktop" fill="var(--color-desktop)" />
  </BarChart>
</ChartContainer>`,
        component: "BarChart"
      },
      {
        title: "Line Chart",
        code: `<ChartContainer config={chartConfig}>
  <LineChart data={chartData}>
    <XAxis dataKey="month" />
    <YAxis />
    <ChartTooltip content={<ChartTooltipContent />} />
    <Line type="monotone" dataKey="desktop" stroke="var(--color-desktop)" />
  </LineChart>
</ChartContainer>`,
        component: "LineChart"
      }
    ]
  },
  form: {
    name: "Form",
    description: "Building forms with React Hook Form and Zod.",
    usage: `import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"

const formSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
})

export function FormDemo() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values)
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input placeholder="shadcn" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  )
}`,
    installation: `npm install react-hook-form @hookform/resolvers zod`,
    examples: [
      {
        title: "Basic Form",
        code: `<Form {...form}>
  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
    <FormField
      control={form.control}
      name="username"
      render={({ field }) => (
        <FormItem>
          <FormLabel>Username</FormLabel>
          <FormControl>
            <Input placeholder="Enter username" {...field} />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
    <Button type="submit">Submit</Button>
  </form>
</Form>`,
        component: "Form"
      }
    ]
  },
  textarea: {
    name: "Textarea",
    description: "Displays a form textarea or a component that looks like a textarea.",
    usage: `import { Textarea } from "@/components/ui/textarea"

export function TextareaDemo() {
  return <Textarea placeholder="Type your message here." />
}`,
    installation: `# No additional packages required`,
    examples: [
      {
        title: "Default",
        code: `<Textarea placeholder="Type your message here." />`,
        component: "Textarea"
      },
      {
        title: "Disabled",
        code: `<Textarea placeholder="Type your message here." disabled />`,
        component: "TextareaDisabled"
      },
      {
        title: "With Label",
        code: `<div className="grid w-full gap-1.5">
  <Label htmlFor="message">Your message</Label>
  <Textarea placeholder="Type your message here." id="message" />
</div>`,
        component: "TextareaWithLabel"
      }
    ]
  },
  "radio-group": {
    name: "Radio Group",
    description: "A set of checkable buttons—known as radio buttons—where no more than one of the buttons can be checked at a time.",
    usage: `import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

export function RadioGroupDemo() {
  return (
    <RadioGroup defaultValue="comfortable">
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="default" id="r1" />
        <Label htmlFor="r1">Default</Label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="comfortable" id="r2" />
        <Label htmlFor="r2">Comfortable</Label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="compact" id="r3" />
        <Label htmlFor="r3">Compact</Label>
      </div>
    </RadioGroup>
  )
}`,
    installation: `npm install @radix-ui/react-radio-group`,
    examples: [
      {
        title: "Default",
        code: `<RadioGroup defaultValue="comfortable">
  <div className="flex items-center space-x-2">
    <RadioGroupItem value="default" id="r1" />
    <Label htmlFor="r1">Default</Label>
  </div>
  <div className="flex items-center space-x-2">
    <RadioGroupItem value="comfortable" id="r2" />
    <Label htmlFor="r2">Comfortable</Label>
  </div>
</RadioGroup>`,
        component: "RadioGroup"
      }
    ]
  },
  select: {
    name: "Select",
    description: "Displays a list of options for the user to pick from—triggered by a button.",
    usage: `import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export function SelectDemo() {
  return (
    <Select>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Select a fruit" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="apple">Apple</SelectItem>
        <SelectItem value="banana">Banana</SelectItem>
        <SelectItem value="blueberry">Blueberry</SelectItem>
        <SelectItem value="grapes">Grapes</SelectItem>
        <SelectItem value="pineapple">Pineapple</SelectItem>
      </SelectContent>
    </Select>
  )
}`,
    installation: `npm install @radix-ui/react-select`,
    examples: [
      {
        title: "Default",
        code: `<Select>
  <SelectTrigger className="w-[180px]">
    <SelectValue placeholder="Select a fruit" />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="apple">Apple</SelectItem>
    <SelectItem value="banana">Banana</SelectItem>
    <SelectItem value="grapes">Grapes</SelectItem>
  </SelectContent>
</Select>`,
        component: "Select"
      }
    ]
  },
  dialog: {
    name: "Dialog",
    description: "A window overlaid on either the primary window or another dialog window, rendering the content underneath inert.",
    usage: `import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export function DialogDemo() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Edit Profile</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Edit profile</DialogTitle>
          <DialogDescription>
            Make changes to your profile here. Click save when you're done.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Name
            </Label>
            <Input id="name" value="Pedro Duarte" className="col-span-3" />
          </div>
        </div>
        <DialogFooter>
          <Button type="submit">Save changes</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}`,
    installation: `npm install @radix-ui/react-dialog`,
    examples: [
      {
        title: "Default",
        code: `<Dialog>
  <DialogTrigger asChild>
    <Button variant="outline">Edit Profile</Button>
  </DialogTrigger>
  <DialogContent className="sm:max-w-[425px]">
    <DialogHeader>
      <DialogTitle>Edit profile</DialogTitle>
      <DialogDescription>
        Make changes to your profile here.
      </DialogDescription>
    </DialogHeader>
    <DialogFooter>
      <Button type="submit">Save changes</Button>
    </DialogFooter>
  </DialogContent>
</Dialog>`,
        component: "Dialog"
      }
    ]
  },
  "dropdown-menu": {
    name: "Dropdown Menu",
    description: "Displays a menu to the user — such as a set of actions or functions — triggered by a button.",
    usage: `import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export function DropdownMenuDemo() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">Open</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>Profile</DropdownMenuItem>
        <DropdownMenuItem>Billing</DropdownMenuItem>
        <DropdownMenuItem>Team</DropdownMenuItem>
        <DropdownMenuItem>Subscription</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}`,
    installation: `npm install @radix-ui/react-dropdown-menu`,
    examples: [
      {
        title: "Default",
        code: `<DropdownMenu>
  <DropdownMenuTrigger asChild>
    <Button variant="outline">Open</Button>
  </DropdownMenuTrigger>
  <DropdownMenuContent className="w-56">
    <DropdownMenuLabel>My Account</DropdownMenuLabel>
    <DropdownMenuSeparator />
    <DropdownMenuItem>Profile</DropdownMenuItem>
    <DropdownMenuItem>Settings</DropdownMenuItem>
  </DropdownMenuContent>
</DropdownMenu>`,
        component: "DropdownMenu"
      }
    ]
  },
  popover: {
    name: "Popover",
    description: "Displays rich content in a portal, triggered by a button.",
    usage: `import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

export function PopoverDemo() {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline">Open popover</Button>
      </PopoverTrigger>
      <PopoverContent className="w-80">
        <div className="grid gap-4">
          <div className="space-y-2">
            <h4 className="font-medium leading-none">Dimensions</h4>
            <p className="text-sm text-muted-foreground">
              Set the dimensions for the layer.
            </p>
          </div>
          <div className="grid gap-2">
            <div className="grid grid-cols-3 items-center gap-4">
              <Label htmlFor="width">Width</Label>
              <Input id="width" defaultValue="100%" className="col-span-2 h-8" />
            </div>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  )
}`,
    installation: `npm install @radix-ui/react-popover`,
    examples: [
      {
        title: "Default",
        code: `<Popover>
  <PopoverTrigger asChild>
    <Button variant="outline">Open popover</Button>
  </PopoverTrigger>
  <PopoverContent className="w-80">
    <div className="grid gap-4">
      <h4 className="font-medium">Dimensions</h4>
      <p className="text-sm text-muted-foreground">
        Set the dimensions for the layer.
      </p>
    </div>
  </PopoverContent>
</Popover>`,
        component: "Popover"
      }
    ]
  },
  table: {
    name: "Table",
    description: "A responsive table component.",
    usage: `import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

const invoices = [
  {
    invoice: "INV001",
    paymentStatus: "Paid",
    totalAmount: "$250.00",
    paymentMethod: "Credit Card",
  },
  {
    invoice: "INV002",
    paymentStatus: "Pending",
    totalAmount: "$150.00",
    paymentMethod: "PayPal",
  },
]

export function TableDemo() {
  return (
    <Table>
      <TableCaption>A list of your recent invoices.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">Invoice</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Method</TableHead>
          <TableHead className="text-right">Amount</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {invoices.map((invoice) => (
          <TableRow key={invoice.invoice}>
            <TableCell className="font-medium">{invoice.invoice}</TableCell>
            <TableCell>{invoice.paymentStatus}</TableCell>
            <TableCell>{invoice.paymentMethod}</TableCell>
            <TableCell className="text-right">{invoice.totalAmount}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}`,
    installation: `# No additional packages required`,
    examples: [
      {
        title: "Default",
        code: `<Table>
  <TableHeader>
    <TableRow>
      <TableHead>Invoice</TableHead>
      <TableHead>Status</TableHead>
      <TableHead>Amount</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    <TableRow>
      <TableCell>INV001</TableCell>
      <TableCell>Paid</TableCell>
      <TableCell>$250.00</TableCell>
    </TableRow>
  </TableBody>
</Table>`,
        component: "Table"
      }
    ]
  },
  accordion: {
    name: "Accordion",
    description: "A vertically stacked set of interactive headings that each reveal a section of content.",
    usage: `import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export function AccordionDemo() {
  return (
    <Accordion type="single" collapsible className="w-full">
      <AccordionItem value="item-1">
        <AccordionTrigger>Is it accessible?</AccordionTrigger>
        <AccordionContent>
          Yes. It adheres to the WAI-ARIA design pattern.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Is it styled?</AccordionTrigger>
        <AccordionContent>
          Yes. It comes with default styles that matches the other components' aesthetic.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}`,
    installation: `npm install @radix-ui/react-accordion`,
    examples: [
      {
        title: "Default",
        code: `<Accordion type="single" collapsible className="w-full">
  <AccordionItem value="item-1">
    <AccordionTrigger>Is it accessible?</AccordionTrigger>
    <AccordionContent>
      Yes. It adheres to the WAI-ARIA design pattern.
    </AccordionContent>
  </AccordionItem>
</Accordion>`,
        component: "Accordion"
      }
    ]
  },
  "alert-dialog": {
    name: "Alert Dialog",
    description: "A modal dialog that interrupts the user with important content and expects a response.",
    usage: `import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { Button } from "@/components/ui/button"

export function AlertDialogDemo() {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant="outline">Show Dialog</Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. This will permanently delete your
            account and remove your data from our servers.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction>Continue</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}`,
    installation: `npm install @radix-ui/react-alert-dialog`,
    examples: [
      {
        title: "Default",
        code: `<AlertDialog>
  <AlertDialogTrigger asChild>
    <Button variant="outline">Show Dialog</Button>
  </AlertDialogTrigger>
  <AlertDialogContent>
    <AlertDialogHeader>
      <AlertDialogTitle>Are you sure?</AlertDialogTitle>
      <AlertDialogDescription>
        This action cannot be undone.
      </AlertDialogDescription>
    </AlertDialogHeader>
    <AlertDialogFooter>
      <AlertDialogCancel>Cancel</AlertDialogCancel>
      <AlertDialogAction>Continue</AlertDialogAction>
    </AlertDialogFooter>
  </AlertDialogContent>
</AlertDialog>`,
        component: "AlertDialog"
      }
    ]
  },
  carousel: {
    name: "Carousel",
    description: "A carousel with motion and swipe built using Embla.",
    usage: `import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

export function CarouselDemo() {
  return (
    <Carousel className="w-full max-w-xs">
      <CarouselContent>
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem key={index}>
            <div className="p-1">
              <Card>
                <CardContent className="flex aspect-square items-center justify-center p-6">
                  <span className="text-4xl font-semibold">{index + 1}</span>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}`,
    installation: `npm install embla-carousel-react`,
    examples: [
      {
        title: "Default",
        code: `<Carousel className="w-full max-w-xs">
  <CarouselContent>
    {Array.from({ length: 5 }).map((_, index) => (
      <CarouselItem key={index}>
        <Card>
          <CardContent className="flex aspect-square items-center justify-center p-6">
            <span className="text-4xl font-semibold">{index + 1}</span>
          </CardContent>
        </Card>
      </CarouselItem>
    ))}
  </CarouselContent>
  <CarouselPrevious />
  <CarouselNext />
</Carousel>`,
        component: "Carousel"
      }
    ]
  },
  command: {
    name: "Command",
    description: "Fast, composable, unstyled command menu for React.",
    usage: `import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command"

export function CommandDemo() {
  return (
    <Command className="rounded-lg border shadow-md">
      <CommandInput placeholder="Type a command or search..." />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup heading="Suggestions">
          <CommandItem>
            <span>Calendar</span>
          </CommandItem>
          <CommandItem>
            <span>Search Emoji</span>
          </CommandItem>
          <CommandItem>
            <span>Calculator</span>
          </CommandItem>
        </CommandGroup>
      </CommandList>
    </Command>
  )
}`,
    installation: `npm install cmdk`,
    examples: [
      {
        title: "Default",
        code: `<Command className="rounded-lg border shadow-md">
  <CommandInput placeholder="Type a command..." />
  <CommandList>
    <CommandEmpty>No results found.</CommandEmpty>
    <CommandGroup heading="Suggestions">
      <CommandItem>Calendar</CommandItem>
      <CommandItem>Search Emoji</CommandItem>
      <CommandItem>Calculator</CommandItem>
    </CommandGroup>
  </CommandList>
</Command>`,
        component: "Command"
      }
    ]
  },
  "context-menu": {
    name: "Context Menu",
    description: "Displays a menu to the user — such as a set of actions or functions — triggered by a right click.",
    usage: `import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuTrigger,
} from "@/components/ui/context-menu"

export function ContextMenuDemo() {
  return (
    <ContextMenu>
      <ContextMenuTrigger className="flex h-[150px] w-[300px] items-center justify-center rounded-md border border-dashed text-sm">
        Right click here
      </ContextMenuTrigger>
      <ContextMenuContent className="w-64">
        <ContextMenuItem inset>
          Back
        </ContextMenuItem>
        <ContextMenuItem inset disabled>
          Forward
        </ContextMenuItem>
        <ContextMenuItem inset>
          Reload
        </ContextMenuItem>
      </ContextMenuContent>
    </ContextMenu>
  )
}`,
    installation: `npm install @radix-ui/react-context-menu`,
    examples: [
      {
        title: "Default",
        code: `<ContextMenu>
  <ContextMenuTrigger className="flex h-[150px] w-[300px] items-center justify-center rounded-md border border-dashed text-sm">
    Right click here
  </ContextMenuTrigger>
  <ContextMenuContent className="w-64">
    <ContextMenuItem>Back</ContextMenuItem>
    <ContextMenuItem>Forward</ContextMenuItem>
    <ContextMenuItem>Reload</ContextMenuItem>
  </ContextMenuContent>
</ContextMenu>`,
        component: "ContextMenu"
      }
    ]
  },
  "hover-card": {
    name: "Hover Card",
    description: "For sighted users to preview content available behind a link.",
    usage: `import { Button } from "@/components/ui/button"
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card"

export function HoverCardDemo() {
  return (
    <HoverCard>
      <HoverCardTrigger asChild>
        <Button variant="link">@nextjs</Button>
      </HoverCardTrigger>
      <HoverCardContent className="w-80">
        <div className="flex justify-between space-x-4">
          <div className="space-y-1">
            <h4 className="text-sm font-semibold">@nextjs</h4>
            <p className="text-sm">
              The React Framework – created and maintained by @vercel.
            </p>
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  )
}`,
    installation: `npm install @radix-ui/react-hover-card`,
    examples: [
      {
        title: "Default",
        code: `<HoverCard>
  <HoverCardTrigger asChild>
    <Button variant="link">@nextjs</Button>
  </HoverCardTrigger>
  <HoverCardContent className="w-80">
    <div className="space-y-1">
      <h4 className="text-sm font-semibold">@nextjs</h4>
      <p className="text-sm">
        The React Framework – created and maintained by @vercel.
      </p>
    </div>
  </HoverCardContent>
</HoverCard>`,
        component: "HoverCard"
      }
    ]
  },
  menubar: {
    name: "Menubar",
    description: "A visually persistent menu common in desktop applications that provides quick access to a consistent set of commands.",
    usage: `import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarTrigger,
} from "@/components/ui/menubar"

export function MenubarDemo() {
  return (
    <Menubar>
      <MenubarMenu>
        <MenubarTrigger>File</MenubarTrigger>
        <MenubarContent>
          <MenubarItem>
            New Tab <MenubarShortcut>⌘T</MenubarShortcut>
          </MenubarItem>
          <MenubarItem>New Window</MenubarItem>
          <MenubarSeparator />
          <MenubarItem>Share</MenubarItem>
          <MenubarSeparator />
          <MenubarItem>Print</MenubarItem>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  )
}`,
    installation: `npm install @radix-ui/react-menubar`,
    examples: [
      {
        title: "Default",
        code: `<Menubar>
  <MenubarMenu>
    <MenubarTrigger>File</MenubarTrigger>
    <MenubarContent>
      <MenubarItem>New Tab</MenubarItem>
      <MenubarItem>New Window</MenubarItem>
      <MenubarSeparator />
      <MenubarItem>Share</MenubarItem>
    </MenubarContent>
  </MenubarMenu>
</Menubar>`,
        component: "Menubar"
      }
    ]
  },
  sheet: {
    name: "Sheet",
    description: "Extends the Dialog component to display content that complements the main content of the screen.",
    usage: `import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

export function SheetDemo() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline">Open</Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Edit profile</SheetTitle>
          <SheetDescription>
            Make changes to your profile here. Click save when you're done.
          </SheetDescription>
        </SheetHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Name
            </Label>
            <Input id="name" value="Pedro Duarte" className="col-span-3" />
          </div>
        </div>
        <SheetFooter>
          <SheetClose asChild>
            <Button type="submit">Save changes</Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  )
}`,
    installation: `npm install @radix-ui/react-dialog`,
    examples: [
      {
        title: "Default",
        code: `<Sheet>
  <SheetTrigger asChild>
    <Button variant="outline">Open</Button>
  </SheetTrigger>
  <SheetContent>
    <SheetHeader>
      <SheetTitle>Edit profile</SheetTitle>
      <SheetDescription>
        Make changes to your profile here.
      </SheetDescription>
    </SheetHeader>
    <SheetFooter>
      <Button type="submit">Save changes</Button>
    </SheetFooter>
  </SheetContent>
</Sheet>`,
        component: "Sheet"
      }
    ]
  },
  skeleton: {
    name: "Skeleton",
    description: "Use to show a placeholder while content is loading.",
    usage: `import { Skeleton } from "@/components/ui/skeleton"

export function SkeletonDemo() {
  return (
    <div className="flex items-center space-x-4">
      <Skeleton className="h-12 w-12 rounded-full" />
      <div className="space-y-2">
        <Skeleton className="h-4 w-[250px]" />
        <Skeleton className="h-4 w-[200px]" />
      </div>
    </div>
  )
}`,
    installation: `# No additional packages required`,
    examples: [
      {
        title: "Default",
        code: `<div className="flex items-center space-x-4">
  <Skeleton className="h-12 w-12 rounded-full" />
  <div className="space-y-2">
    <Skeleton className="h-4 w-[250px]" />
    <Skeleton className="h-4 w-[200px]" />
  </div>
</div>`,
        component: "Skeleton"
      }
    ]
  },
  toast: {
    name: "Toast",
    description: "A succinct message that is displayed temporarily.",
    usage: `import { Button } from "@/components/ui/button"
import { useToast } from "@/hooks/use-toast"

export function ToastDemo() {
  const { toast } = useToast()

  return (
    <Button
      variant="outline"
      onClick={() => {
        toast({
          title: "Scheduled: Catch up ",
          description: "Friday, February 10, 2023 at 5:57 PM",
        })
      }}
    >
      Add to calendar
    </Button>
  )
}`,
    installation: `npm install @radix-ui/react-toast`,
    examples: [
      {
        title: "Default",
        code: `<Button
  onClick={() => {
    toast({
      title: "Scheduled: Catch up",
      description: "Friday, February 10, 2023 at 5:57 PM",
    })
  }}
>
  Show toast
</Button>`,
        component: "Toast"
      }
    ]
  },
  tooltip: {
    name: "Tooltip",
    description: "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
    usage: `import { Button } from "@/components/ui/button"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"

export function TooltipDemo() {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="outline">Hover</Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>Add to library</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}`,
    installation: `npm install @radix-ui/react-tooltip`,
    examples: [
      {
        title: "Default",
        code: `<Tooltip>
  <TooltipTrigger asChild>
    <Button variant="outline">Hover</Button>
  </TooltipTrigger>
  <TooltipContent>
    <p>Add to library</p>
  </TooltipContent>
</Tooltip>`,
        component: "Tooltip"
      }
    ]
  },
  toggle: {
    name: "Toggle",
    description: "A two-state button that can be either on or off.",
    usage: `import { Toggle } from "@/components/ui/toggle"

export function ToggleDemo() {
  return <Toggle aria-label="Toggle italic">Toggle</Toggle>
}`,
    installation: `npm install @radix-ui/react-toggle`,
    examples: [
      {
        title: "Default",
        code: `<Toggle aria-label="Toggle italic">Toggle</Toggle>`,
        component: "Toggle"
      },
      {
        title: "Outline",
        code: `<Toggle variant="outline" aria-label="Toggle italic">
  Toggle
</Toggle>`,
        component: "ToggleOutline"
      }
    ]
  }
};