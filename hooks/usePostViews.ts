import { useState, useEffect, useCallback } from 'react';
import { supabase } from '../lib/supabase';

interface UsePostViewsReturn {
    viewCount: number | null;
    isLoading: boolean;
    error: string | null;
    incrementView: () => Promise<void>;
}

/**
 * Hook to manage post view counts using Supabase.
 * Automatically fetches the current view count and provides a method to increment it.
 * 
 * @param slug The unique identifier (slug) for the blog post
 * @returns Object containing viewCount, loading state, error, and incrementView function
 */
export const usePostViews = (slug: string): UsePostViewsReturn => {
    const [viewCount, setViewCount] = useState<number | null>(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    // Fetch current view count
    const fetchViewCount = useCallback(async () => {
        if (!slug) return;

        try {
            const { data, error: fetchError } = await supabase
                .from('post_views')
                .select('view_count')
                .eq('slug', slug)
                .single();

            if (fetchError && fetchError.code !== 'PGRST116') {
                // PGRST116 = no rows returned (post doesn't exist yet)
                throw fetchError;
            }

            setViewCount(data?.view_count ?? 0);
        } catch (err) {
            console.error('Error fetching view count:', err);
            setError('Failed to load view count');
        } finally {
            setIsLoading(false);
        }
    }, [slug]);

    // Increment view count using RPC function
    const incrementView = useCallback(async () => {
        if (!slug) return;

        try {
            const { data, error: rpcError } = await supabase
                .rpc('increment_view_count', { post_slug: slug });

            if (rpcError) {
                throw rpcError;
            }

            if (data !== null) {
                setViewCount(data);
            }
        } catch (err) {
            console.error('Error incrementing view count:', err);
            // Don't set error state for increment failures (non-critical)
        }
    }, [slug]);

    // Fetch view count on mount
    useEffect(() => {
        fetchViewCount();
    }, [fetchViewCount]);

    // Increment view on first visit (using sessionStorage to prevent multiple increments)
    useEffect(() => {
        const sessionKey = `viewed_${slug}`;
        const hasViewed = sessionStorage.getItem(sessionKey);

        if (!hasViewed && slug) {
            incrementView().then(() => {
                sessionStorage.setItem(sessionKey, 'true');
            });
        }
    }, [slug, incrementView]);

    return {
        viewCount,
        isLoading,
        error,
        incrementView
    };
};
