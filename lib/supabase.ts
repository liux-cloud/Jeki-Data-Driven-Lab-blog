import { createClient } from '@supabase/supabase-js';

// Supabase configuration
// IMPORTANT: Replace these with your actual Supabase project credentials
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'https://your-project.supabase.co';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 'your-anon-key';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

/**
 * Database Schema (Run this SQL in Supabase SQL Editor):
 * 
 * -- Create table for post views
 * CREATE TABLE IF NOT EXISTS post_views (
 *   id SERIAL PRIMARY KEY,
 *   slug TEXT UNIQUE NOT NULL,
 *   view_count INTEGER DEFAULT 0,
 *   created_at TIMESTAMPTZ DEFAULT NOW(),
 *   updated_at TIMESTAMPTZ DEFAULT NOW()
 * );
 * 
 * -- Create RPC function for atomic increment
 * CREATE OR REPLACE FUNCTION increment_view_count(post_slug TEXT)
 * RETURNS INTEGER AS $$
 * DECLARE
 *   new_count INTEGER;
 * BEGIN
 *   INSERT INTO post_views (slug, view_count)
 *   VALUES (post_slug, 1)
 *   ON CONFLICT (slug)
 *   DO UPDATE SET view_count = post_views.view_count + 1, updated_at = NOW()
 *   RETURNING view_count INTO new_count;
 *   RETURN new_count;
 * END;
 * $$ LANGUAGE plpgsql;
 * 
 * -- Enable Row Level Security
 * ALTER TABLE post_views ENABLE ROW LEVEL SECURITY;
 * 
 * -- Allow anyone to read view counts
 * CREATE POLICY "Allow public read access" ON post_views
 *   FOR SELECT USING (true);
 * 
 * -- Allow anyone to call the increment function (via RPC)
 * -- Note: RPC functions bypass RLS by default when executed with service_role key
 */
