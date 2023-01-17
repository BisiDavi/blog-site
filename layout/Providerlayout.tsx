import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import type { PropsWithChildren } from "react";

import NextNProgress from "@/components/NProgress";

export default function Providerlayout({ children }: PropsWithChildren) {
  const queryClient = new QueryClient();

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <NextNProgress
          color="#f54c4c"
          height={5}
          options={{ showSpinner: true }}
        />
        {children}
      </QueryClientProvider>
    </>
  );
}
