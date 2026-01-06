// @/components/Modal.tsx
"use client";
import { cn } from "@/lib/utils";
import { MouseEventHandler, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { FaXmark } from "react-icons/fa6";

interface ModalProps {
  show: boolean;
  onClose: MouseEventHandler<Element>;
  className?: string;
  children?: React.ReactNode;
  closeButton?: boolean | { className?: string, iconClassName?: string, onClick?: MouseEventHandler<HTMLButtonElement> };
  disableClickOutside?: boolean;
}

export default function Modal({ show, onClose, children, className, closeButton = false, disableClickOutside = false }: ModalProps) {
  const eleRef = useRef<HTMLDivElement>(null);
  const [isMounted, setIsMounted] = useState(show);

  // Mount/unmount controller
  useEffect(() => {
    const handleShowChange = () => {
      if (show) {
        setIsMounted(true);
        document.body.style.overflow = "hidden";
      } else {
        document.body.style.overflow = "";
        // Wait for exit animation
        const timer = setTimeout(() => setIsMounted(false), 200);
        return () => clearTimeout(timer);
      }
    };

    handleShowChange();
  }, [show]);

  // Click-outside logic (unchanged)
  useEffect(() => {
    if (!show || disableClickOutside) return;

    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node;

      if (eleRef.current && !eleRef.current.contains(target)) {
        const isPortalClick =
          (target as Element).closest?.('[role="presentation"]') ||
          (target as Element).closest?.('.MuiPopover-root') ||
          (target as Element).closest?.('.MuiModal-root');

        if (!isPortalClick) onClose(event as any);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [onClose, show, disableClickOutside]);

  if (!isMounted) return null;

  return createPortal(
    <div
      className={cn(
        "fixed inset-0 flex-center z-100 bg-black/70 dark:bg-black/80 transition-opacity duration-500",
        show ? "opacity-100" : "opacity-0"
      )}
      onClick={onClose}
    >
      {closeButton && (
        <button type="button" className={cn("fixed top-4 right-4", typeof closeButton === "object" && closeButton?.className)} onClick={(e) => {
          onClose(e);
          if (typeof closeButton === "object") closeButton?.onClick?.(e)
        }} aria-label="Close">
          <FaXmark size={24} className="fill-white" />
        </button>
      )}
      <div
        ref={eleRef}
        onClick={(e) => e.stopPropagation()}
        className={cn(
          "bg-primary p-4 rounded-lg max-h-[80vh] max-w-[80vw] overflow-auto transition-all duration-500",
          show ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-12 scale-85",
          className
        )}
      >
        {children}
      </div>
    </div>,
    document.documentElement
  );
};
