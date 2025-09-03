import { useState } from "react";
import { Search, ChevronDown, ChevronRight, PanelLeftClose, PanelLeftOpen } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { iconExamples } from "@/data/icon-examples";

interface IconsSidebarProps {
  isCollapsed: boolean;
  onToggleCollapse: () => void;
  onCategorySelect: (category: string) => void;
  selectedCategory: string;
}

export const IconsSidebar = ({ 
  isCollapsed, 
  onToggleCollapse, 
  onCategorySelect, 
  selectedCategory 
}: IconsSidebarProps) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [openCategories, setOpenCategories] = useState<Record<string, boolean>>({
    "lucide-icons": true
  });

  const toggleCategory = (category: string) => {
    setOpenCategories(prev => ({
      ...prev,
      [category]: !prev[category]
    }));
  };

  const filteredCategories = Object.entries(iconExamples).filter(([key, iconSet]) =>
    iconSet.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    iconSet.categories.some(cat => 
      cat.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      cat.icons.some(icon => icon.name.toLowerCase().includes(searchQuery.toLowerCase()))
    )
  );

  return (
    <>
      {/* Collapsed Toggle Button */}
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
                placeholder="Search icons..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-9 bg-muted/50 border-0 focus-visible:ring-1"
              />
            </div>
          </div>

          {/* Header with Toggle Button */}
          <div className="px-4 py-3 border-b border-border flex items-center justify-between gap-2 min-w-0">
            <span className="text-sm font-semibold text-foreground truncate">Icon Sets</span>
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

          {/* Icon Sets and Categories */}
          <div className="p-2">
            {filteredCategories.map(([key, iconSet]) => (
              <Collapsible
                key={key}
                open={openCategories[key]}
                onOpenChange={() => toggleCategory(key)}
              >
                <CollapsibleTrigger className="flex w-full items-center justify-between px-2 py-2 text-sm font-medium text-foreground hover:bg-muted/50 rounded-md">
                  <span>{iconSet.name}</span>
                  {openCategories[key] ? (
                    <ChevronDown className="h-4 w-4" />
                  ) : (
                    <ChevronRight className="h-4 w-4" />
                  )}
                </CollapsibleTrigger>
                
                <CollapsibleContent className="space-y-1 pl-4">
                  {iconSet.categories.map(category => (
                    <button
                      key={category.name}
                      onClick={() => onCategorySelect(category.name)}
                      className={`block w-full text-left px-2 py-1.5 text-sm rounded-md transition-colors ${
                        selectedCategory === category.name
                          ? "bg-accent text-accent-foreground font-medium"
                          : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                      }`}
                    >
                      {category.name}
                    </button>
                  ))}
                </CollapsibleContent>
              </Collapsible>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};