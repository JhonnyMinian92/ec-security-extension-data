chrome.webRequest.onBeforeRequest.addListener(
  (details) => {
    // Detectar URLs que terminan en .pdf
    if (details.url.toLowerCase().endsWith('.pdf')) {
      const viewerUrl = chrome.runtime.getURL('apps/pdf-viewer/index.html');
      // Redirigir al visor de la extensión pasando la URL original
      return {
        redirectUrl: `${viewerUrl}?file=${encodeURIComponent(details.url)}`,
      };
    }
  },
  { urls: ['<all_urls>'], types: ['main_frame'] },
  ['blocking']
);
