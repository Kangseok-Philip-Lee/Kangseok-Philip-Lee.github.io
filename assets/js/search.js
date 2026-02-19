document.addEventListener('DOMContentLoaded', function () {
  var searchBtn = document.getElementById('searchBtn');
  var searchOverlay = document.getElementById('searchOverlay');
  var searchClose = document.getElementById('searchClose');
  var searchInput = document.getElementById('searchInput');
  var searchResults = document.getElementById('searchResults');
  var menuToggle = document.getElementById('menuToggle');
  var siteNav = document.querySelector('.site-nav');
  var posts = [];

  // Mobile menu toggle
  if (menuToggle && siteNav) {
    menuToggle.addEventListener('click', function () {
      siteNav.classList.toggle('open');
    });
  }

  // Open search
  if (searchBtn) {
    searchBtn.addEventListener('click', function () {
      searchOverlay.classList.add('active');
      searchInput.value = '';
      searchResults.innerHTML = '';
      setTimeout(function () { searchInput.focus(); }, 100);
    });
  }

  // Close search
  if (searchClose) {
    searchClose.addEventListener('click', closeSearch);
  }

  if (searchOverlay) {
    searchOverlay.addEventListener('click', function (e) {
      if (e.target === searchOverlay) closeSearch();
    });
  }

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') closeSearch();
    if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
      e.preventDefault();
      searchBtn.click();
    }
  });

  function closeSearch() {
    searchOverlay.classList.remove('active');
  }

  // Load search data
  fetch('/search.json')
    .then(function (res) { return res.json(); })
    .then(function (data) { posts = data; })
    .catch(function () { posts = []; });

  // Search input handler
  if (searchInput) {
    searchInput.addEventListener('input', function () {
      var query = this.value.trim().toLowerCase();
      if (query.length < 2) {
        searchResults.innerHTML = '';
        return;
      }

      var results = posts.filter(function (post) {
        return post.title.toLowerCase().includes(query) ||
          post.subtitle.toLowerCase().includes(query) ||
          post.tags.toLowerCase().includes(query) ||
          post.category.toLowerCase().includes(query);
      });

      if (results.length === 0) {
        searchResults.innerHTML = '<div class="search-no-results">검색 결과가 없습니다.</div>';
        return;
      }

      var categoryMap = { travel: '여행', food: '음식', study: '공부' };

      searchResults.innerHTML = results.map(function (post) {
        var cat = categoryMap[post.category] || post.category;
        return '<a class="search-result-item" href="' + post.url + '">' +
          '<div class="search-result-title">' + escapeHtml(post.title) + '</div>' +
          '<div class="search-result-meta">' + post.date + ' · ' + cat + '</div>' +
          '</a>';
      }).join('');
    });
  }

  function escapeHtml(text) {
    var div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
  }
});
