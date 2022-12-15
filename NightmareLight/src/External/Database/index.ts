import { createClient } from '@supabase/supabase-js'
require('dotenv').config()
export const supabase = createClient(
    `${process.env.DOMAIN}`, 
    `${process.env.SECRET_KEY}`)
