"use client";

import * as React from "react";
import * as NavigationMenuPrimitive from "@radix-ui/react-navigation-menu";
import { cn } from "@/lib/utils";

export const NavigationMenu = NavigationMenuPrimitive.Root;
export const NavigationMenuList = NavigationMenuPrimitive.List;
export const NavigationMenuItem = NavigationMenuPrimitive.Item;
export const NavigationMenuLink = NavigationMenuPrimitive.Link;

export function NavigationBar({
  items,
}: {
  items: { label: string; href: string }[];
}) {
  return (
    <NavigationMenu className="flex gap-6">
      <NavigationMenuList className="flex gap-6">
        {items.map((item) => (
          <NavigationMenuItem key={item.href}>
            <NavigationMenuLink
              href={item.href}
              className={cn("hover:text-primary")}
            >
              {item.label}
            </NavigationMenuLink>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
}
