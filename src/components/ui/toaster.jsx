import { Toaster as ToasterPrimitive } from "@/components/ui/toast";
import { useToast } from "@/components/ui/use-toast";

export function Toaster() {
  const { toasts } = useToast();

  return (
    (<ToasterPrimitive>
      {toasts.map(function ({ id, title, description, action, ...props }) {
        return (
          <ToasterPrimitive.Toast key={id} {...props}>
            <div className="grid gap-1">
              {title && <ToasterPrimitive.ToastTitle>{title}</ToasterPrimitive.ToastTitle>}
              {description && (
                <ToasterPrimitive.ToastDescription>
                  {description}
                </ToasterPrimitive.ToastDescription>
              )}
            </div>
            {action}
            <ToasterPrimitive.ToastClose />
          </ToasterPrimitive.Toast>
        );
      })}
    </ToasterPrimitive>)
  );
}