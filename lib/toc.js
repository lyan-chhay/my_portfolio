// lib/toc.js
import { remark } from 'remark';
import heading from 'remark-heading';

export async function generateTOC(content) {
  const processor = remark().use(heading);
  const file = await processor.process(content);
  
  if (!file.data.headings) return [];

  return file.data.headings.map((heading) => ({
    id: heading.id,
    title: heading.value,
    level: heading.depth,
  }));
}

export function getTOCFromContent(content) {
  // Simple regex-based TOC extraction for headings
  const headingRegex = /^(#{2,3})\s+(.+)$/gm;
  const headings = [];
  let match;

  while ((match = headingRegex.exec(content)) !== null) {
    const level = match[1].length; // ## = 2, ### = 3
    const title = match[2].trim();
    const id = title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)/g, '');

    headings.push({
      id,
      title,
      level,
    });
  }

  return headings;
}