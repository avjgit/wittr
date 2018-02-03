self.addEventListener('fetch', function(event) {
  event.respondWith(
    new Response('<div class="a-winner-is-me">hi there</div>', {
      headers: {
        'content-type': 'text/html'
    }})
  );
});