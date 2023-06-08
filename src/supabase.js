import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://sybhcbhyjqohhxnaffui.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InN5YmhjYmh5anFvaGh4bmFmZnVpIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODU1NzEyNTAsImV4cCI6MjAwMTE0NzI1MH0.SDgOEdewz2VAnA0RlVXqGEhvFTrDIiQLfARjzpV_YBA";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
