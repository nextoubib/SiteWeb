import { cn } from "@/lib/utils";

const controlBase =
  "block w-full rounded-md border border-border-strong bg-background px-3.5 py-2.5 text-sm text-foreground shadow-[inset_0_1px_2px_rgb(11_18_32/0.04)] transition-[border-color,box-shadow] outline-none placeholder:text-muted/70 focus:border-primary focus:ring-2 focus:ring-primary/25 disabled:opacity-60 aria-invalid:border-danger aria-invalid:ring-danger/20";

export function Label({ className, ...props }: React.ComponentProps<"label">) {
  return (
    <label
      className={cn("mb-1.5 block text-sm font-medium text-foreground", className)}
      {...props}
    />
  );
}

export function Input({ className, ...props }: React.ComponentProps<"input">) {
  return <input className={cn(controlBase, className)} {...props} />;
}

export function Textarea({ className, ...props }: React.ComponentProps<"textarea">) {
  return (
    <textarea className={cn(controlBase, "min-h-28 resize-y", className)} {...props} />
  );
}

export function Select({
  className,
  children,
  ...props
}: React.ComponentProps<"select">) {
  return (
    <div className="relative">
      <select
        className={cn(
          controlBase,
          "bg-[url('data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%2216%22 height=%2216%22 viewBox=%220 0 24 24%22 fill=%22none%22 stroke=%22%235b6b85%22 stroke-width=%222%22 stroke-linecap=%22round%22 stroke-linejoin=%22round%22><path d=%22m6 9 6 6 6-6%22/></svg>')] appearance-none bg-[length:16px_16px] bg-[position:right_0.75rem_center] bg-no-repeat pr-10",
          className,
        )}
        {...props}
      >
        {children}
      </select>
    </div>
  );
}

export function FieldError({ id, children }: { id: string; children?: React.ReactNode }) {
  if (!children) return null;
  return (
    <p id={id} role="alert" className="mt-1.5 text-xs font-medium text-danger">
      {children}
    </p>
  );
}

export function FieldHint({ children }: { children: React.ReactNode }) {
  return <p className="mt-1.5 text-xs text-muted">{children}</p>;
}
