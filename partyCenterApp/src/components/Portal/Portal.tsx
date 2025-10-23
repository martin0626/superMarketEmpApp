import type { ReactNode } from "react";
import { createPortal } from "react-dom";

interface PortalProps {
  children: ReactNode;
  containerId?: string; // optional: allow specifying a custom root
}

export default function PortalComponent({ children, containerId = "portal-root" }: PortalProps) {
  const portalRoot = document.getElementById(containerId);

  if (!portalRoot) {
    console.warn(`Portal root with id "${containerId}" not found in the DOM.`);
    return null;
  }

  return createPortal(children, portalRoot);
}