import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://hjcunhittybvjrxjfdla.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhqY3VuaGl0dHlidmpyeGpmZGxhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDU5MjU1MTIsImV4cCI6MjAyMTUwMTUxMn0.5OKbkQJHBw9PAIoLUuxm_iDQzC3mPrebV5TWCDoi-GY";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
// JWT expiry time
export const jwtExpiry = 5000; //3 * 60 * 60 * 10
