export default async function getTitle(url: string) {
  const response = await fetch(url);
  const text = await response.text();

  // regular expression to find the <title> tag
  let match = text.match(/<title.*>([^<]*)<\/title>/);
  if (match) return match[1] + " [AUTO GENERATED]";
  else return "";
}
