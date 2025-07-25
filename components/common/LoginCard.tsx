import React from "react";
import { SignIn } from "@clerk/nextjs";
const LoginCard = () => {
  return (
    <SignIn
      appearance={{
        elements: {
          card: "card bg-base-100 text-base-content",
          headerTitle: "text-2xl font-bold text-base-content",
          socialButtonsBlockButton: "btn btn-secondary",
          dividerRow: "divider",
          formFieldLabel: "text-base-content",
          formFieldInput: "input text-base-content",
          formButtonPrimary: "btn btn-primary border-transparent",
          formFieldInputShowPasswordIcon: "text-base-content",
          formField__username: "",
          footer: "hidden",
        },
      }}
    />
  );
};

export default LoginCard;
