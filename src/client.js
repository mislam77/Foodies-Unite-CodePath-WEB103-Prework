require('dotenv').config();

import { createClient } from '@supabase/supabase-js';

const URL = process.env.PROJECT_URL;
const API_KEY = process.env.PROJECT_API;

export const supabase = createClient(URL, API_KEY);
