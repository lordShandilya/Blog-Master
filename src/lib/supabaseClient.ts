import { createClient } from "@supabase/supabase-js";



const SUPABASE_URL = "https://qtwosomgpfryvzavyzud.supabase.co";
const SUPABASE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InF0d29zb21ncGZyeXZ6YXZ5enVkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTE4OTI0MTgsImV4cCI6MjAyNzQ2ODQxOH0.NXc46K9PCXDEa_J54TXRT42DCcFkeUl5MD60g8R-7xA"

export const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

