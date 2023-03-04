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

export function seo(data = {}) {
  console.log("data", data);
  const defaultTitle = 'SNSS & Co | FEMA Consultant | International Tax| Company set up in UAE/USA';
  const defaultDescription = 'SNSS & Co | FEMA Consultant | International Tax| Company set up in UAE/USA';
  data.title = data.title || defaultTitle;
  data.metaDescription = data.metaDescription || defaultDescription;

  document.title = data.title;
  document.querySelector('meta[name="description"]').setAttribute('content', data.metaDescription);
}