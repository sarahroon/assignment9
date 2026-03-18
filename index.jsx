import * as React from "react";
import * as Avatar from "@radix-ui/react-avatar";
import * as Tooltip from "@radix-ui/react-tooltip";
import "./styles.css";

export default function UserAvatarWithTooltip() {
  return (
    <div style={{ display: "flex", gap: 20 }}>
      <Tooltip.Root>
        <Tooltip.Trigger asChild>
          <Avatar.Root className="w-10 h-10 rounded-full bg-gray-200">
            <Avatar.Image
              src="https://pbs.twimg.com/media/FwfxQr2aAAAzUF-.jpg"
              alt="User Name"
              className="w-full h-full object-cover rounded-full"
            />
            <Avatar.Fallback className="flex items-center justify-center w-full h-full text-white bg-gray-500">
              UN
            </Avatar.Fallback>
          </Avatar.Root>
        </Tooltip.Trigger>
        <Tooltip.Content
          side="top"
          className="px-2 py-1 rounded bg-gray-800 text-white text-sm"
        >
          User Name
          <Tooltip.Arrow className="fill-gray-800" />
        </Tooltip.Content>
      </Tooltip.Root>

      {/* Example additional avatars */}
      <Avatar.Root className="AvatarRoot">
        <Avatar.Image
          className="AvatarImage"
          src="https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?&w=128&h=128&dpr=2&q=80"
          alt="Colm Tuite"
        />
        <Avatar.Fallback className="AvatarFallback" delayMs={600}>
          CT
        </Avatar.Fallback>
      </Avatar.Root>

      <Avatar.Root className="AvatarRoot">
        <Avatar.Fallback className="AvatarFallback">PD</Avatar.Fallback>
      </Avatar.Root>
    </div>
  );
}
