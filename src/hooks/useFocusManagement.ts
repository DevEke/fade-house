import { useEffect, useRef } from "react";

export function useFocusManagement(open: boolean) {
  const triggerRef = useRef<HTMLButtonElement>(null);
  const firstFocusableRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    if (open) {
      firstFocusableRef.current?.focus();
    } else {
      triggerRef.current?.focus();
    }
  }, [open]);

  return { triggerRef, firstFocusableRef };
}
