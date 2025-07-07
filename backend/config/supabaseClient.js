// /config/supabaseClient.js
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://wunsxitlvqbuoycofzqh.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Ind1bnN4aXRsdnFidW95Y29menFoIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc1MTczNzk5MSwiZXhwIjoyMDY3MzEzOTkxfQ.jYatP6VfWDgjUFqv6t8dMABEYLeD-DrGEbrnK6cjZ2g';

export const supabase = createClient(supabaseUrl, supabaseKey);
