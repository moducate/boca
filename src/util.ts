export function toPrefix (str: string) {
  const prefix = str.replace(/[@]/g, '').replace(/[-/]/g, '_').toUpperCase()
  return prefix.match(/^[A-Z0-9_]+$/) ? prefix : false
}
