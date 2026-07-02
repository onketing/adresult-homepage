"use client";

import { NavigationMenu as NavigationMenuPrimitive } from "@base-ui/react/navigation-menu";
import { cn } from "@/lib/utils";

function NavigationMenuRoot({ className, ...props }: NavigationMenuPrimitive.Root.Props) {
	return (
		<NavigationMenuPrimitive.Root
			data-slot="navigation-menu"
			className={cn("relative flex items-center", className)}
			{...props}
		/>
	);
}

function NavigationMenuList({ className, ...props }: NavigationMenuPrimitive.List.Props) {
	return (
		<NavigationMenuPrimitive.List
			data-slot="navigation-menu-list"
			className={cn("flex items-center gap-1", className)}
			{...props}
		/>
	);
}

function NavigationMenuItem({ className, ...props }: NavigationMenuPrimitive.Item.Props) {
	return (
		<NavigationMenuPrimitive.Item
			data-slot="navigation-menu-item"
			className={cn("relative", className)}
			{...props}
		/>
	);
}

function NavigationMenuTrigger({ className, ...props }: NavigationMenuPrimitive.Trigger.Props) {
	return (
		<NavigationMenuPrimitive.Trigger
			data-slot="navigation-menu-trigger"
			className={cn(
				"group flex items-center gap-1 rounded-lg px-4 py-2 font-medium text-slate-600 text-sm transition-colors hover:bg-slate-50 hover:text-foreground data-[popup-open]:text-[#ef3c39]",
				className,
			)}
			{...props}
		/>
	);
}

function NavigationMenuPortal(props: NavigationMenuPrimitive.Portal.Props) {
	return <NavigationMenuPrimitive.Portal {...props} />;
}

function NavigationMenuPositioner({
	className,
	...props
}: NavigationMenuPrimitive.Positioner.Props) {
	return (
		<NavigationMenuPrimitive.Positioner
			data-slot="navigation-menu-positioner"
			className={cn("z-50", className)}
			{...props}
		/>
	);
}

function NavigationMenuViewport({ className, ...props }: NavigationMenuPrimitive.Viewport.Props) {
	return (
		<NavigationMenuPrimitive.Viewport
			data-slot="navigation-menu-viewport"
			className={cn(className)}
			{...props}
		/>
	);
}

function NavigationMenuPopup({ className, ...props }: NavigationMenuPrimitive.Popup.Props) {
	return (
		<NavigationMenuPrimitive.Popup
			data-slot="navigation-menu-popup"
			className={cn(
				"w-[400px] rounded-2xl border border-slate-200 bg-white p-2 shadow-[0_24px_60px_rgba(15,23,42,0.12)] outline-none transition-[opacity,transform] data-[ending-style]:scale-95 data-[starting-style]:scale-95 data-[ending-style]:opacity-0 data-[starting-style]:opacity-0",
				className,
			)}
			{...props}
		/>
	);
}

function NavigationMenuContent({ className, ...props }: NavigationMenuPrimitive.Content.Props) {
	return (
		<NavigationMenuPrimitive.Content
			data-slot="navigation-menu-content"
			className={cn("flex flex-col gap-1", className)}
			{...props}
		/>
	);
}

function NavigationMenuBackdrop({ className, ...props }: NavigationMenuPrimitive.Backdrop.Props) {
	return (
		<NavigationMenuPrimitive.Backdrop
			data-slot="navigation-menu-backdrop"
			className={cn(
				"fixed inset-0 z-40 bg-[#0d0202]/10 transition-opacity data-ending-style:opacity-0 data-starting-style:opacity-0",
				className,
			)}
			{...props}
		/>
	);
}

export {
	NavigationMenuBackdrop,
	NavigationMenuContent,
	NavigationMenuItem,
	NavigationMenuList,
	NavigationMenuPopup,
	NavigationMenuPortal,
	NavigationMenuPositioner,
	NavigationMenuRoot,
	NavigationMenuTrigger,
	NavigationMenuViewport,
};
