import { CheckCircledIcon } from "@radix-ui/react-icons";

interface FormSuccessProps {
  message?: string;
}

export const FormSuccess = ({ message }: FormSuccessProps) => {
  if (!message) return null;

  return (
    <div className="flex bg-emerald-500/15 rounded-md p-3 items-center text-emerald-500 text-sm">
      <CheckCircledIcon className="w-4 h-4 mr-1" />
      <p>{message}</p>
    </div>
  );
};
