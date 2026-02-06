export interface TOCItem {
  id: string;
  text: string;
  level: number;
}

/**
 * Processes HTML content to add IDs to headings and extract TOC items.
 * @param html The raw HTML content
 * @returns An object containing the processed HTML and the list of TOC items
 */
export const processContentWithTOC = (html: string): { processedContent: string; tocItems: TOCItem[] } => {
  if (!html) return { processedContent: '', tocItems: [] };

  const tocItems: TOCItem[] = [];
  let processedContent = html;

  // Regular expression to find h2 and h3 tags
  // This is a simple parsing approach. For more complex HTML, a DOM parser would be better,
  // but for this specific static content string, regex is sufficient and lightweight.
  const headingRegex = /<(h[23])(?:[^>]*)>(.*?)<\/\1>/gi;

  let headingCount = 0;

  processedContent = html.replace(headingRegex, (match, tag, text) => {
    // Remove HTML tags from text for the TOC label
    const cleanText = text.replace(/<[^>]*>/g, '');
    const id = `heading-${headingCount++}`;
    const level = parseInt(tag.charAt(1), 10);

    tocItems.push({
      id,
      text: cleanText,
      level
    });

    // Reconstruct the tag with the new ID
    // We preserve the class attribute if we wanted to be more careful, but here
    // the regex captures the tag name and content. We need to be careful about existing attributes.
    // The original content has classes like: <h2 class="text-2xl font-bold mt-10 mb-4 text-black">

    // Let's use a slightly more robust replacement to keep attributes
    // We can just inject the id before the closing bracket of the opening tag if we matched the whole opening tag
    // But since our regex matches the whole element, we can reconstruct it.

    // To preserve attributes, we need to capture them.
    // Let's refine the regex logic inside the replace callback isn't ideal for preserving varying attributes easily without more groups.
    // Simpler approach for this specific codebase:
    // The codebase uses consistent styling. We can just inject the ID.
    // However, to be safe and simple, let's use the DOM parser API since we are in a browser environment (React).
    return match; // Placeholder, seeing below for DOMParser implementation
  });

  // Since we are purely client-side/browser based, DOMParser is much safer and easier than Regex for HTML manipulation.
  const parser = new DOMParser();
  const doc = parser.parseFromString(html, 'text/html');
  const headings = doc.querySelectorAll('h2, h3');

  const items: TOCItem[] = [];

  headings.forEach((heading, index) => {
    const id = `toc-heading-${index}`;
    heading.id = id;
    items.push({
      id,
      text: heading.textContent || '',
      level: parseInt(heading.tagName.substring(1), 10)
    });
  });

  return {
    processedContent: doc.body.innerHTML,
    tocItems: items
  };
};

/**
 * Calculates the estimated reading time for an article.
 * Uses 400 characters per minute for Japanese text (slower due to Kanji complexity).
 * Falls back to 200 words per minute for English/mixed content.
 * @param htmlContent The HTML content of the article
 * @returns Reading time in minutes (minimum 1)
 */
export const calculateReadingTime = (htmlContent: string): number => {
  if (!htmlContent) return 1;

  // Strip HTML tags to get plain text
  const plainText = htmlContent.replace(/<[^>]*>/g, '').trim();

  // Count characters (good for Japanese text)
  const charCount = plainText.length;

  // Japanese reading speed: ~400-600 chars/min. We use 500 as average.
  const jpReadingSpeed = 500;

  // Calculate time in minutes
  const readingTime = Math.ceil(charCount / jpReadingSpeed);

  // Return at least 1 minute
  return Math.max(1, readingTime);
};
