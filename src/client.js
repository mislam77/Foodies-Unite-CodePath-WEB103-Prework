import { createClient } from '@supabase/supabase-js';

const URL = import.meta.env.VITE_PROJECT_URL;
const API_KEY = import.meta.env.VITE_PROJECT_API;

const supabase = createClient(URL, API_KEY);

export default supabase
