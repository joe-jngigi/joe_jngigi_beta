```TSX
"use client";

import * as React from "react";
import {
  Check,
  CheckCircle2,
  ChevronsUpDown,
  PlusCircleIcon,
} from "lucide-react";
import { FcAcceptDatabase } from "react-icons/fc";
import { AiFillDatabase } from "react-icons/ai";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useParams } from "next/navigation";
import { TDatabase } from "@/data_manipulation/types/types";

/**
 * This is a utility type provided by React.
 * It extracts all the props of a given component type except for the ref prop.
 */
type PopoverTriggerProps = React.ComponentProps<
  typeof PopoverTrigger
>;
type MenuDBProps = PopoverTriggerProps & {
  items: TDatabase[];
};
export const ComboBox = ({ items }: MenuDBProps) => {
  const params = useParams();
  const [openPopover, setOpenPopover] = React.useState(false);

  /**
   * Using the map function to transform an array of items into a new array called DatabaseItems
   *
   * Where each item in the original array is transformed into an object with label and value properties.
   */
  const DatabaseItems = items.map((item) => ({
    label: item.name,
    value: item.id,
  }));

  console.log(DatabaseItems);

  /**
   * This will extract the database item with the params ID
   *
   * Note: This code,
   *
   *  === params.database_id
   */
  const currentDatabase = DatabaseItems.find((item) => item.value);

  const onDatabaseSelect = (database: { value?: string; label?: string }) => {
    setOpenPopover(true);
  };

  return (
    <Popover open={openPopover} onOpenChange={setOpenPopover}>
      {/* Trigger */}
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={openPopover}
          className="w-[300px] justify-between"
        >
          <FcAcceptDatabase className="mr-4 h-4 w-4" />
          <span className=" w-[80%] text-start truncate">
            {currentDatabase === undefined
              ? "Select a Database"
              : currentDatabase?.label}
          </span>
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>

      {/* Content */}
      <PopoverContent className="w-[300px] p-0">
        <Command>
          <CommandList>
            <CommandInput placeholder="Search a Database"></CommandInput>
            <CommandEmpty>No Databases</CommandEmpty>
                
            <CommandGroup heading="Database List">
              {DatabaseItems.map((database_item) => (
                <CommandItem 
                  className="text-xs sm:text-sm mb-1 cursor-pointer select-text"
                  key={database_item.value}
                  value={database_item.value}
                  onSelect={() => onDatabaseSelect(database_item)}
                >
                  <AiFillDatabase className="mr-4 h-4 w-4" />
                  <span className="truncate">{database_item.label}</span>
                  <CheckCircle2
                    className={cn(
                      "ml-auto h-4 w-4",
                      currentDatabase?.value == database_item.value
                        ? "opacity-100 text-emerald-500"
                        : "opacity-0"
                    )}
                  />
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>

          <CommandSeparator />

          <CommandList>
            <CommandGroup>
              <CommandItem
                className="cursor-pointer"
                onSelect={() => {
                  setOpenPopover(true);
                  // TODO: Add a modal to add a database
                }}
              >
                <PlusCircleIcon className="mr-2 w-5 h-5" />
                Add Database
              </CommandItem>
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
};

```