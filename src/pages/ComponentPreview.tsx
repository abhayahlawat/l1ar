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
import { Calendar } from "@/components/ui/calendar";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { BarChart, Bar, XAxis, YAxis, LineChart, Line } from "recharts";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "@/components/ui/alert-dialog";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "@/components/ui/command";
import { ContextMenu, ContextMenuContent, ContextMenuItem, ContextMenuTrigger } from "@/components/ui/context-menu";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import { Menubar, MenubarContent, MenubarItem, MenubarMenu, MenubarSeparator, MenubarTrigger } from "@/components/ui/menubar";
import { Sheet, SheetClose, SheetContent, SheetDescription, SheetFooter, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Skeleton } from "@/components/ui/skeleton";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { Toggle } from "@/components/ui/toggle";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { CodeBlock } from "@/components/code-block";
import { ComponentPreview } from "@/components/component-preview";
import { componentExamples } from "@/data/component-examples";
import { ArrowLeft, Package, Terminal } from "lucide-react";

// Sample data for charts
const chartData = [
  { month: "Jan", desktop: 186 },
  { month: "Feb", desktop: 305 },
  { month: "Mar", desktop: 237 },
  { month: "Apr", desktop: 173 },
  { month: "May", desktop: 209 },
  { month: "Jun", desktop: 214 },
];

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "hsl(var(--primary))",
  },
};

// Sample data for table
const invoices = [
  { invoice: "INV001", paymentStatus: "Paid", totalAmount: "$250.00", paymentMethod: "Credit Card" },
  { invoice: "INV002", paymentStatus: "Pending", totalAmount: "$150.00", paymentMethod: "PayPal" },
];

// Form schema
const formSchema = z.object({
  username: z.string().min(2, { message: "Username must be at least 2 characters." }),
});

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
      
    case "ButtonIcon":
      return (
        <Button size="icon">
          <ArrowLeft className="h-4 w-4" />
        </Button>
      );
      
    case "ButtonLoading":
      return (
        <Button disabled>
          <ArrowLeft className="mr-2 h-4 w-4 animate-spin" />
          Please wait
        </Button>
      );
      
    case "ButtonWithIcon":
      return (
        <Button>
          <ArrowLeft className="mr-2 h-4 w-4" />
          Login with Email
        </Button>
      );
      
    case "BadgeLarge":
      return <Badge className="px-3 py-1 text-sm">Large Badge</Badge>;
      
    case "BadgeDot":
      return (
        <Badge variant="outline" className="pl-3">
          <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
          Online
        </Badge>
      );
      
    case "AlertWithIcon":
      return (
        <Alert>
          <Terminal className="h-4 w-4" />
          <AlertTitle>Heads up!</AlertTitle>
          <AlertDescription>
            You can add components to your app using the cli.
          </AlertDescription>
        </Alert>
      );
      
    case "TabsVertical":
      return (
        <Tabs defaultValue="account" className="flex w-[400px]">
          <TabsList className="flex-col h-auto">
            <TabsTrigger value="account">Account</TabsTrigger>
            <TabsTrigger value="password">Password</TabsTrigger>
          </TabsList>
          <div className="flex-1 ml-4">
            <TabsContent value="account">Account content</TabsContent>
            <TabsContent value="password">Password content</TabsContent>
          </div>
        </Tabs>
      );
      
    case "ProgressWithLabel":
      return (
        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span>Progress</span>
            <span>33%</span>
          </div>
          <Progress value={33} />
        </div>
      );
      
    case "SwitchWithLabel":
      return (
        <div className="flex items-center space-x-2">
          <Switch id="airplane-mode" />
          <Label htmlFor="airplane-mode">Airplane Mode</Label>
        </div>
      );
      
    case "SliderRange":
      return <Slider defaultValue={[33, 66]} max={100} step={1} />;
      
    case "SliderWithLabel":
      return (
        <div className="space-y-2">
          <Label>Volume: 33</Label>
          <Slider defaultValue={[33]} max={100} step={1} />
        </div>
      );
      
    case "Calendar":
      const [date, setDate] = useState<Date | undefined>(new Date());
      return (
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          className="rounded-md border"
        />
      );
      
    case "BarChart":
      return (
        <ChartContainer config={chartConfig} className="min-h-[200px] w-full">
          <BarChart data={chartData}>
            <XAxis dataKey="month" />
            <YAxis />
            <ChartTooltip content={<ChartTooltipContent />} />
            <Bar dataKey="desktop" fill="var(--color-desktop)" />
          </BarChart>
        </ChartContainer>
      );
      
    case "LineChart":
      return (
        <ChartContainer config={chartConfig} className="min-h-[200px] w-full">
          <LineChart data={chartData}>
            <XAxis dataKey="month" />
            <YAxis />
            <ChartTooltip content={<ChartTooltipContent />} />
            <Line type="monotone" dataKey="desktop" stroke="var(--color-desktop)" />
          </LineChart>
        </ChartContainer>
      );
      
    case "Form":
      const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: { username: "" },
      });
      
      return (
        <Form {...form}>
          <form className="space-y-4 w-full max-w-sm">
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
        </Form>
      );
      
    case "Textarea":
      return <Textarea placeholder="Type your message here." />;
      
    case "TextareaDisabled":
      return <Textarea placeholder="Type your message here." disabled />;
      
    case "TextareaWithLabel":
      return (
        <div className="grid w-full gap-1.5">
          <Label htmlFor="message">Your message</Label>
          <Textarea placeholder="Type your message here." id="message" />
        </div>
      );
      
    case "RadioGroup":
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
        </RadioGroup>
      );
      
    case "Select":
      return (
        <Select>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Select a fruit" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="apple">Apple</SelectItem>
            <SelectItem value="banana">Banana</SelectItem>
            <SelectItem value="grapes">Grapes</SelectItem>
          </SelectContent>
        </Select>
      );
      
    case "Dialog":
      return (
        <Dialog>
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
        </Dialog>
      );
      
    case "DropdownMenu":
      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline">Open</Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56">
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Profile</DropdownMenuItem>
            <DropdownMenuItem>Settings</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
      
    case "Popover":
      return (
        <Popover>
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
        </Popover>
      );
      
    case "Table":
      return (
        <Table>
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
        </Table>
      );
      
    case "Accordion":
      return (
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger>Is it accessible?</AccordionTrigger>
            <AccordionContent>
              Yes. It adheres to the WAI-ARIA design pattern.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      );
      
    case "AlertDialog":
      return (
        <AlertDialog>
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
        </AlertDialog>
      );
      
    case "Carousel":
      return (
        <Carousel className="w-full max-w-xs">
          <CarouselContent>
            {Array.from({ length: 3 }).map((_, index) => (
              <CarouselItem key={index}>
                <div className="p-1">
                  <Card>
                    <CardContent className="flex aspect-square items-center justify-center p-6">
                      <span className="text-2xl font-semibold">{index + 1}</span>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      );
      
    case "Command":
      return (
        <Command className="rounded-lg border shadow-md max-w-sm">
          <CommandInput placeholder="Type a command..." />
          <CommandList>
            <CommandEmpty>No results found.</CommandEmpty>
            <CommandGroup heading="Suggestions">
              <CommandItem>Calendar</CommandItem>
              <CommandItem>Search Emoji</CommandItem>
              <CommandItem>Calculator</CommandItem>
            </CommandGroup>
          </CommandList>
        </Command>
      );
      
    case "ContextMenu":
      return (
        <ContextMenu>
          <ContextMenuTrigger className="flex h-[150px] w-[300px] items-center justify-center rounded-md border border-dashed text-sm">
            Right click here
          </ContextMenuTrigger>
          <ContextMenuContent className="w-64">
            <ContextMenuItem>Back</ContextMenuItem>
            <ContextMenuItem>Forward</ContextMenuItem>
            <ContextMenuItem>Reload</ContextMenuItem>
          </ContextMenuContent>
        </ContextMenu>
      );
      
    case "HoverCard":
      return (
        <HoverCard>
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
        </HoverCard>
      );
      
    case "Menubar":
      return (
        <Menubar>
          <MenubarMenu>
            <MenubarTrigger>File</MenubarTrigger>
            <MenubarContent>
              <MenubarItem>New Tab</MenubarItem>
              <MenubarItem>New Window</MenubarItem>
              <MenubarSeparator />
              <MenubarItem>Share</MenubarItem>
            </MenubarContent>
          </MenubarMenu>
        </Menubar>
      );
      
    case "Sheet":
      return (
        <Sheet>
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
        </Sheet>
      );
      
    case "Skeleton":
      return (
        <div className="flex items-center space-x-4">
          <Skeleton className="h-12 w-12 rounded-full" />
          <div className="space-y-2">
            <Skeleton className="h-4 w-[250px]" />
            <Skeleton className="h-4 w-[200px]" />
          </div>
        </div>
      );
      
    case "Toast":
      const { toast } = useToast();
      return (
        <Button
          variant="outline"
          onClick={() => {
            toast({
              title: "Scheduled: Catch up",
              description: "Friday, February 10, 2023 at 5:57 PM",
            });
          }}
        >
          Show toast
        </Button>
      );
      
    case "Tooltip":
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
      );
      
    case "Toggle":
      return <Toggle aria-label="Toggle italic">Toggle</Toggle>;
      
    case "ToggleOutline":
      return <Toggle variant="outline" aria-label="Toggle italic">Toggle</Toggle>;
      
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