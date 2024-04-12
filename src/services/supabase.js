import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://sdsaneruuqsfsdbglpse.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNkc2FuZXJ1dXFzZnNkYmdscHNlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTIzOTcxNDMsImV4cCI6MjAyNzk3MzE0M30.2TGe9JzyTs7blPNCn5g4cnKqCHSWaVXM1K5WRPPrFf4";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
