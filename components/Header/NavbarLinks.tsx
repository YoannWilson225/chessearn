"use client"

import * as React from "react"
import Link from "next/link"
import { cn } from "@/lib/utils"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { Menu } from "@/types/menu"

const menuData: Menu[] = [
  {
    id: 2,
    title: "GAMES",
    path: "/",
    newTab: false,
    submenu: [
      {
        id: 61,
        title: "Antichess",
        desc: "Antichess is an eccentric variant where you lose all your pieces or get stalemated to win.",
        path: "/",
        newTab: false,
      },
      {
        id: 62,
        title: "Chess960",
        desc: "Chess960 (also known as Fischer Random) is a chess variant where the starting position of each piece in the home rank is randomized. However, the pieces of both sides will still be symmetrical.",
        path: "/",
        newTab: false,
      },
      {
        id: 63,
        title: "Crazyhouse",
        desc: "Captured pieces can be dropped back on the board instead of moving a piece.",
        path: "/",
        newTab: false,
      },
      {
        id: 64,
        title: "Atomic",
        desc: "Nuke your opponent's king to win.",
        path: "/",
        newTab: false,
      }
    ],
  },
  {
    id: 3,
    title: "TOURNAMENT",
    path: "/",
    newTab: false,
    submenu: [
      {
        id: 61,
        title: "Swiss system",
        desc: "Tournaments applying the Swiss system.",
        path: "/",
        newTab: false,
      },
      {
        id: 62,
        title: "Arena tournaments",
        desc: "Tournaments applying the arena system.",
        path: "/",
        newTab: false,
      },
    ],
  },
  {
    id: 5,
    title: "CHALLENGE",
    path: "/",
    newTab: false,
    submenu: [
      {
        id: 61,
        title: "Challenge a friend",
        desc: "Find a friend and challenge them now",
        path: "/",
        newTab: false,
      },
      {
        id: 62,
        title: "Create a challenge",
        desc: "Create a public or private challenge and share it!",
        path: "/",
        newTab: false,
      },
    ],
  },
  {
    id: 5,
    title: "COMMUNITY",
    path: "/",
    newTab: false,
    submenu: [
      {
        id: 61,
        title: "Players",
        desc: "Follow the activity of our best players",
        path: "/",
        newTab: false,
      },
      {
        id: 62,
        title: "Friends",
        desc: "Have fun with your friends now",
        path: "/",
        newTab: false,
      },
      {
        id: 62,
        title: "Teams",
        desc: "Manage your teams and participate in activities between members👨‍💻",
        path: "/",
        newTab: false,
      },
      {
        id: 62,
        title: "Forum",
        desc: "You have a question ? Post it on our forum",
        path: "/",
        newTab: false,
      },
      {
        id: 62,
        title: "Blog",
        desc: "Don't miss any information stay focused thanks to our blog",
        path: "/",
        newTab: false,
      },
    ],
  },
];

export function NavigationMenuDemo() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <Link href="/" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              HOME
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        {menuData.map((menuSingleData) => (
          <NavigationMenuItem key={menuSingleData.id}>
            <NavigationMenuTrigger>{menuSingleData.title}</NavigationMenuTrigger>
            {menuSingleData.submenu && (
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                  {menuSingleData.submenu.map((submenuSingleData) => (
                    <ListItem
                      key={submenuSingleData.id}
                      title={submenuSingleData.title}
                      href={submenuSingleData.path}
                    >
                      {submenuSingleData.desc}
                    </ListItem>
                  ))}
                </ul>
              </NavigationMenuContent>
            )}
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  )
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"
