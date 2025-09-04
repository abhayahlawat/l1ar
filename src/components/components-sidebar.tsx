import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Search, ChevronDown, ChevronRight, PanelLeftClose, PanelLeftOpen } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { componentExamples } from "@/data/component-examples";

const componentsList = [
  {
    name: "Button",
    slug: "button",
    category: "Form",
    hasExamples: true
  },
  {
    name: "Checkbox", 
    slug: "checkbox",
    category: "Form",
    hasExamples: true
  },
  {
    name: "Input",
    slug: "input",
    category: "Form", 
    hasExamples: true
  },
  {
    name: "Card",
    slug: "card",
    category: "Layout",
    hasExamples: true
  },
  {
    name: "Navigation Menu",
    slug: "navigation-menu",
    category: "Navigation",
    hasExamples: true
  },
  {
    name: "Avatar",
    slug: "avatar",
    category: "Display",
    hasExamples: true
  },
  {
    name: "Badge",
    slug: "badge",
    category: "Display",
    hasExamples: true
  },
  {
    name: "Alert",
    slug: "alert",
    category: "Feedback",
    hasExamples: true
  },
  {
    name: "Tabs",
    slug: "tabs",
    category: "Navigation",
    hasExamples: true
  },
  {
    name: "Progress",
    slug: "progress",
    category: "Feedback",
    hasExamples: true
  },
  {
    name: "Switch",
    slug: "switch",
    category: "Form",
    hasExamples: true
  },
  {
    name: "Slider",
    slug: "slider",
    category: "Form",
    hasExamples: true
  }
];

const categories = ["Form", "Layout", "Navigation", "Display", "Feedback"];

interface ComponentsSidebarProps {
  isCollapsed: boolean;
  onToggleCollapse: () => void;
}

export const ComponentsSidebar = ({ isCollapsed, onToggleCollapse }: ComponentsSidebarProps) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [openCategories, setOpenCategories] = useState<Record<string, boolean>>({
    Form: true,
    Layout: false,
    Navigation: false,
    Display: false,
    Feedback: false
  });
  const location = useLocation();

  const filteredComponents = componentsList.filter(component =>
    component.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    component.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const componentsByCategory = categories.reduce((acc, category) => {
    acc[category] = filteredComponents.filter(comp => comp.category === category);
    return acc;
  }, {} as Record<string, typeof componentsList>);

  const toggleCategory = (category: string) => {
    setOpenCategories(prev => ({
      ...prev,
      [category]: !prev[category]
    }));
  };

  const isActiveComponent = (slug: string) => {
    return location.pathname === `/components/${slug}`;
  };

  return (
    <>
      {/* Collapsed Toggle Button - Only visible when sidebar is collapsed */}
      {isCollapsed && (
        <Button
          variant="ghost"
          size="sm"
          onClick={onToggleCollapse}
          className="fixed left-4 top-20 z-50 h-10 w-10 p-0 border border-border bg-background shadow-lg hover:bg-accent rounded-md"
          title="Expand sidebar"
        >
          <PanelLeftOpen className="h-5 w-5" />
        </Button>
      )}

      <div className={`${isCollapsed ? 'w-0' : 'w-[40%] md:w-64'} border-r border-border bg-background h-screen sticky top-0 overflow-hidden transition-all duration-300 ease-in-out`}>
        <div className={`${isCollapsed ? 'opacity-0 pointer-events-none' : 'opacity-100'} transition-opacity duration-300 w-full overflow-y-auto h-full`}>
          {/* Search */}
          <div className="p-4 border-b border-border">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                placeholder="Search components..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-9 bg-muted/50 border-0 focus-visible:ring-1"
              />
            </div>
          </div>

          {/* Header with Toggle Button - positioned alongside categories */}
          <div className="px-4 py-3 border-b border-border flex items-center justify-between gap-2 min-w-0">
            <span className="text-sm font-semibold text-foreground truncate">Components</span>
            <Button
              variant="ghost"
              size="sm"
              onClick={onToggleCollapse}
              className="h-7 w-7 p-0 hover:bg-accent transition-colors rounded-md flex-shrink-0"
              title="Collapse sidebar"
            >
              <PanelLeftClose className="h-4 w-4" />
            </Button>
          </div>

          {/* Categories and Components */}
          <div className="p-2">
            {categories.map(category => {
              const categoryComponents = componentsByCategory[category];
              if (categoryComponents.length === 0 && searchQuery) return null;

              return (
                <Collapsible
                  key={category}
                  open={openCategories[category]}
                  onOpenChange={() => toggleCategory(category)}
                >
                  <CollapsibleTrigger className="flex w-full items-center justify-between px-2 py-2 text-sm font-medium text-foreground hover:bg-muted/50 rounded-md">
                    <span>{category}</span>
                    {openCategories[category] ? (
                      <ChevronDown className="h-4 w-4" />
                    ) : (
                      <ChevronRight className="h-4 w-4" />
                    )}
                  </CollapsibleTrigger>
                  
                  <CollapsibleContent className="space-y-1 pl-4">
                    {categoryComponents.map(component => {
                      const examples = componentExamples[component.slug as keyof typeof componentExamples]?.examples || [];
                      
                      return (
                        <div key={component.slug}>
                          <Link
                            to={`/components/${component.slug}`}
                            className={`block px-2 py-1.5 text-sm rounded-md transition-colors ${
                              isActiveComponent(component.slug)
                                ? "bg-accent text-accent-foreground font-medium"
                                : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                            }`}
                          >
                            {component.name}
                          </Link>
                          
                          {/* Examples */}
                          {component.hasExamples && examples.length > 0 && (
                            <div className="ml-3 mt-1 space-y-1">
                              {examples.map((example, index) => (
                                <Link
                                  key={index}
                                  to={`/components/${component.slug}#${example.title.toLowerCase().replace(/\s+/g, '-')}`}
                                  className="block px-2 py-1 text-xs text-muted-foreground hover:text-foreground rounded-md hover:bg-muted/30 transition-colors"
                                >
                                  {example.title}
                                </Link>
                              ))}
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </CollapsibleContent>
                </Collapsible>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};
