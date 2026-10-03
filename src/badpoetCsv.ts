/** Badpoet adaptation: lossless quoted CSV with explicit spreadsheet protection. */
export function csvCell(value: unknown): string {
  let text = value == null ? '' : String(value);
  // Text from a provider must stay text when opened in a spreadsheet.
  if (typeof value === 'string' && /^[\s]*[=+\-@]/.test(text)) text = "'" + text;
  return '"' + text.replace(/"/g, '""') + '"';
}

export function csvDocument(headers: unknown[], rows: unknown[][]): string {
  return '\uFEFF' + [headers, ...rows].map(row => row.map(csvCell).join(',')).join('\r\n') + '\r\n';
}
