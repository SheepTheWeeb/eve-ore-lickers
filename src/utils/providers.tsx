"use client";

import React, { ReactNode } from "react";
import { QueryClient, QueryClientProvider } from "react-query";

export const Provider = ({ children }: { children: ReactNode }) => {
  const [queryClient] = React.useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            refetchOnWindowFocus: false,
          },
        },
      })
  );
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};
