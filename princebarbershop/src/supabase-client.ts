import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://exhkjpjxzyiqyozxzlpu.supabase.co";
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImV4aGtqcGp4enlpcXlvenh6bHB1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTkwNjg3MjAsImV4cCI6MjA3NDY0NDcyMH0.Ncd-isLyVreBHfslHYI0CtrsVP9IKuOlsENkLK_n7k4";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
