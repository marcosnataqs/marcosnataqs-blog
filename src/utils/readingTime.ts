const WORDS_PER_MINUTE = 200;

export function getReadingTime(content: string): string {
  const text = content.replace(/```[\s\S]*?```/g, '').replace(/[#*`>\-\[\]()!|]/g, '');
  const words = text.trim().split(/\s+/).length;
  const minutes = Math.max(1, Math.ceil(words / WORDS_PER_MINUTE));
  return `${minutes} min read`;
}
