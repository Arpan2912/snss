export function downlodFile(url) {
  const link = document.createElement('a');
  link.href = url;
  link.setAttribute('download', 'sample.xlsx');
  link.setAttribute('target', '_blank');
  // 3. Append to html page
  document.body.appendChild(link);
  // 4. Force download
  link.click();
  // 5. Clean up and remove the link
  link.parentNode.removeChild(link);
}