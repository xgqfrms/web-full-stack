self.importScripts('assets/sw-toolbox/sw-toolbox.js');

self.toolbox.precache([
  '/images/s/t.svg',
  '/images/s/f.svg',
  '/images/s/r.svg',
  '/images/s/h.svg',
  '/images/logos/angular-logo.svg',
  '/images/logos/js-logo.svg',
  '/images/logos/css3-logo.svg',
  '/images/logos/html5-logo.svg',
  '/images/logos/jekyll-logo.svg',
  '/images/logos/sass-logo.svg',
  '/images/logos/typescript-logo.svg',
  '/images/logos/vue-logo.svg',
  '/images/alligator-logo3.svg',
  '/assets/img/search.svg',
  '/offline',
  '/images/dead-benedict.svg'
]);

// self.toolbox.router.get('/*', toolbox.networkFirst);

self.toolbox.router.get('/(.*)', function(request, values, options) {
  return toolbox.networkFirst(request, values, options).catch(function(error) {
    if (request.method === 'GET' && request.headers.get('accept').includes('text/html')) {
      return toolbox.cacheOnly(new Request('/offline'), values, options);
    }
    throw error;
  });
});
