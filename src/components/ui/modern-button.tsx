import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { forwardRef } from "react";
import { ButtonProps } from "@/components/ui/button";

interface ModernButtonProps extends ButtonProps {
  children: React.ReactNode;
  gradient?: boolean;
  pulse?: boolean;
}

const ModernButton = forwardRef<HTMLButtonElement, ModernButtonProps>(
  ({ className, children, gradient = true, pulse = false, ...props }, ref) => {
    return (
      <Button
        ref={ref}
        className={cn(
          // Base styles optimized for mobile
          "relative overflow-hidden group",
          "px-4 py-3 sm:px-6 sm:py-4 md:px-8 md:py-5",
          "text-sm sm:text-base md:text-lg",
          "font-bold text-center",
          "rounded-xl sm:rounded-2xl",
          "min-h-[52px] sm:min-h-[60px] md:min-h-[68px]",
          "w-full",
          "max-w-full",
          // Critical mobile text handling
          "break-words hyphens-auto overflow-wrap-anywhere",
          "leading-tight sm:leading-normal",
          "whitespace-normal",
          // Ensure text fits properly
          "flex items-center justify-center",
          
          // Gradient background
          gradient && "bg-gradient-to-r from-primary to-success hover:from-success hover:to-primary",
          
          // Pulse animation
          pulse && "animate-pulse",
          
          // Interactive effects
          "hover:shadow-hero transition-all duration-300 transform hover:scale-[1.02]",
          "active:scale-[0.98]",
          "disabled:opacity-50 disabled:cursor-not-allowed",
          
          // Focus states for accessibility
          "focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2",
          
          className
        )}
        {...props}
      >
        {/* Background overlay for hover effect */}
        <span className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl sm:rounded-2xl" />
        
        {/* Content wrapper with proper text handling */}
        <span className="relative z-10 flex items-center justify-center text-center px-2 py-1 w-full h-full">
          <span className="block leading-tight max-w-full overflow-hidden text-ellipsis">
            {children}
          </span>
        </span>
      </Button>
    );
  }
);

ModernButton.displayName = "ModernButton";

export { ModernButton };