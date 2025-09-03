import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { ComponentsSidebar } from "@/components/components-sidebar";
import { MousePointer, SquareCheck, Type, CreditCard, Navigation, Palette } from "lucide-react";
import { AlertTriangle } from "lucide-react";

const components = [
  {
    name: "Button",
    slug: "button",
    description: "Displays a button or a component that looks like a button.",
    icon: MousePointer,
    category: "Form"
  },
  {
    name: "Checkbox",
    slug: "checkbox", 
    description: "A control that allows the user to toggle between checked and not checked.",
    icon: SquareCheck,
    category: "Form"
  },
  {
    name: "Input",
    slug: "input",
    description: "Displays a form input field or a component that looks like an input field.",
    icon: Type,
    category: "Form"
  },
  {
    name: "Card",
    slug: "card",
    description: "Displays a card with header, content, and footer.",
    icon: CreditCard,
    category: "Layout"
  },
  {
    name: "Navigation Menu",
    slug: "navigation-menu",
    description: "A collection of links for navigating websites.",
    icon: Navigation,
    category: "Navigation"
  },
  {
    name: "Avatar",
    slug: "avatar",
    description: "An image element with a fallback for representing the user.",
    icon: Palette,
    category: "Display"
  },
  {
    name: "Badge",
    slug: "badge",
    description: "Displays a badge or a component that looks like a badge.",
    icon: Palette,
    category: "Display"
  },
  {
    name: "Alert",
    slug: "alert",
    description: "Displays a callout for user attention.",
    icon: AlertTriangle,
    category: "Feedback"
  },
  {
    name: "Tabs",
    slug: "tabs",
    description: "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
    icon: Navigation,
    category: "Navigation"
  },
  {
    name: "Progress",
    slug: "progress",
    description: "Displays an indicator showing the completion progress of a task.",
    icon: SquareCheck,
    category: "Feedback"
  },
  {
    name: "Switch",
    slug: "switch",
    description: "A control that allows the user to toggle between checked and not checked.",
    icon: SquareCheck,
    category: "Form"
  },
  {
    name: "Slider",
    slug: "slider",
    description: "An input where the user selects a value from within a given range.",
    icon: MousePointer,
    category: "Form"
  }
];

const categories = ["All", "Form", "Layout", "Navigation", "Display", "Feedback"];

const Components = () => {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarCollapsed(!isSidebarCollapsed);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="flex">
        {/* Sidebar */}
        <ComponentsSidebar 
          isCollapsed={isSidebarCollapsed}
          onToggleCollapse={toggleSidebar}
        />
        
        {/* Main content */}
        <div className={`flex-1 transition-all duration-300 ${isSidebarCollapsed ? 'ml-0' : 'ml-0'}`}>
          <div className="container py-8 md:py-12 xl:pt-24">
            <div className="mx-auto max-w-4xl">
              <div className="mb-8">
                <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">Components</h1>
                <p className="mt-2 text-lg text-muted-foreground">
                  Beautifully designed components that you can copy and paste into your apps.
                </p>
              </div>

              {/* Category filters - for future enhancement */}
              <div className="mb-8 flex flex-wrap gap-2">
                {categories.map((category) => (
                  <Button
                    key={category}
                    variant={category === "All" ? "default" : "outline"}
                    size="sm"
                  >
                    {category}
                  </Button>
                ))}
              </div>

              {/* Components grid */}
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2">
                {components.map((component) => {
                  const IconComponent = component.icon;
                  return (
                    <Card key={component.slug} className="group cursor-pointer border hover:border-foreground/20 transition-all duration-200">
                      <Link to={`/components/${component.slug}`}>
                        <CardHeader>
                          <div className="flex items-center space-x-3">
                            <div className="flex h-10 w-10 items-center justify-center rounded-lg border">
                              <IconComponent className="h-5 w-5" />
                            </div>
                            <div>
                              <CardTitle className="text-lg">{component.name}</CardTitle>
                              <div className="text-xs text-muted-foreground uppercase tracking-wide">{component.category}</div>
                            </div>
                          </div>
                        </CardHeader>
                        <CardContent>
                          <CardDescription className="text-sm leading-relaxed">
                            {component.description}
                          </CardDescription>
                        </CardContent>
                      </Link>
                    </Card>
                  );
                })}
              </div>

              {/* Coming soon placeholder */}
              <div className="mt-16 text-center border-t pt-16">
                <h3 className="text-xl font-semibold">More components coming soon</h3>
                <p className="mt-2 text-muted-foreground">
                  We're constantly adding new components. Check back soon for updates.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Components;