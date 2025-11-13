export function calculateReadingTime(content) {
  // Average reading speed (words per minute)
  const WORDS_PER_MINUTE = 200;

  // Remove markdown syntax and count words
  const plainText = content
    .replace(/[#*`~>\[\]]/g, "") // Remove markdown characters
    .replace(/\s+/g, " ") // Normalize whitespace
    .trim();

  const wordCount = plainText.split(/\s+/).length;
  const readingTime = Math.ceil(wordCount / WORDS_PER_MINUTE);

  return readingTime < 1 ? 1 : readingTime; // Minimum 1 min
}
