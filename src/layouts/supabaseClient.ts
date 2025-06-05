import { createClient } from "@supabase/supabase-js";

const SUPABASE_URL = "https://dykzadlrbomjbsmanvom.supabase.co"; // Reemplaza con tu URL de Supabase
const SUPABASE_ANON_KEY = "N90r0l1togq660f/qRkeh3fvL6BtHArILAHzNBCIzVLbcVwOWcwsr1DFuuhJPHDYGnEvO1UJIVf8GhZ355T1pA=="; // Reemplaza con tu clave anónima de Supabase

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);