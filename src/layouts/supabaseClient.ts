import { createClient } from "@supabase/supabase-js";

const SUPABASE_URL = "tu_supabase_url"; // Reemplaza con tu URL de Supabase
const SUPABASE_ANON_KEY = "tu_supabase_anon_key"; // Reemplaza con tu clave anónima de Supabase

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);