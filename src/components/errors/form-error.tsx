import { ExclamationTriangleIcon } from "@radix-ui/react-icons";

interface FormErorProps {
  message?: string;
}

export const FormError = ({ message }: FormErorProps) => {
  if (!message) return null;

  return (
    <div className="flex bg-destructive/15 rounded-md p-3 items-center text-destructive text-sm">
      <ExclamationTriangleIcon className="w-4 h-4 mr-1" />
      <p>{message}</p>
    </div>
  );
};
