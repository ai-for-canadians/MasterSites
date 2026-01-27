import { createServerClient as createSupabaseServerClient } from '@supabase/ssr';
import type { Database } from './types';

export function createServerClient(cookieStore: {
  getAll: () => { name: string; value: string }[];
  setAll: (cookies: { name: string; value: string; options?: object }[]) => void;
}) {
  return createSupabaseServerClient<Database>(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() {
          return cookieStore.getAll();
        },
        setAll(cookiesToSet) {
          try {
            cookieStore.setAll(cookiesToSet);
          } catch {
            // Server Component - ignore
          }
        },
      },
    }
  );
}
