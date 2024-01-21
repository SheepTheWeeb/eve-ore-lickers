import { Alert } from "flowbite-react";
import React from "react";
import { HiInformationCircle } from "react-icons/hi";

interface ErrorMessageProps {
  readonly message: string;
}

export default function ErrorMessage({ message }: ErrorMessageProps) {
  return (
    <div>
      <Alert color="failure" icon={HiInformationCircle}>
        <span className="font-medium">Error:</span>
        {` ${message}`}
      </Alert>
    </div>
  );
}
