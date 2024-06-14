import { Input as Root, InputProps } from "@/components/ui/input";
import { forwardRef } from "react";

export const Input = forwardRef<HTMLInputElement, InputProps>((props) => {
  return <Root {...props} />;
});
