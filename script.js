const searchInput = document.getElementById('searchInput');
    const searchMenu = document.getElementById('searchMenu');

    searchInput.addEventListener('contextmenu', function(event) {
      event.preventDefault();
      searchMenu.style.display = 'flex';
      searchMenu.style.left = event.pageX + 'px';
      searchMenu.style.top = event.pageY + 'px';
    });

    document.addEventListener('click', function(event) {
      if (event.target !== searchInput) {
        searchMenu.style.display = 'none';
      }
    });

    function searchGoogle() {
      const query = searchInput.value;
      window.open('https://www.google.com/search?q=' + encodeURIComponent(query), '_blank');
    }

    function searchScholar() {
       const query = searchInput.value;
       window.open('scholar.google.com/scholar?q=' + encodeURIComponent(query) + '&bntG=';
    }

    function searchBing() {
      const query = searchInput.value;
      window.open('https://www.bing.com/search?q=' + encodeURIComponent(query), '_blank');
    }

    function searchYahoo() {
      const query = searchInput.value;
      window.open('https://search.yahoo.com/search?p=' + encodeURIComponent(query), '_blank');
    }

    searchInput.addEventListener('keypress', function(event) {
  if (event.key === 'Enter') {
    const query = searchInput.value;
    window.open('https://www.google.com/search?q=' + encodeURIComponent(query), '_blank');
  }
});
