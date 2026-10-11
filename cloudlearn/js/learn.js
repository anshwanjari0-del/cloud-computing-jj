/**
 * CloudLearn – Cloud Computing Academy
 * Learn Page Module (learn.js)
 * Implements real-time text searching, category filtering,
 * expandable deep-dive topic details, and empty states.
 */

document.addEventListener('DOMContentLoaded', () => {
  initTopicFilterAndSearch();
  initTopicExpandables();
});

function initTopicFilterAndSearch() {
  const searchInput = document.getElementById('topicSearch');
  const clearBtn = document.getElementById('searchClearBtn');
  const categoryPills = document.querySelectorAll('.category-pill');
  const topicCards = document.querySelectorAll('.topic-card');
  const emptyState = document.getElementById('emptyState');
  const resetFiltersBtn = document.getElementById('resetFiltersBtn');
  const filterCountEl = document.getElementById('filterCount');
  const totalCountEl = document.getElementById('totalCount');

  if (!topicCards.length) return;

  const totalTopics = topicCards.length;
  if (totalCountEl) totalCountEl.textContent = totalTopics;

  let activeCategory = 'all';
  let searchQuery = '';

  function applyFilters() {
    let visibleCount = 0;

    topicCards.forEach(card => {
      const cardCategory = card.getAttribute('data-category') || '';
      const cardText = card.textContent.toLowerCase();

      const matchesCategory = activeCategory === 'all' || cardCategory === activeCategory;
      const matchesSearch = !searchQuery || cardText.includes(searchQuery);

      if (matchesCategory && matchesSearch) {
        card.style.display = 'flex';
        visibleCount++;
      } else {
        card.style.display = 'none';
      }
    });

    // Update count display
    if (filterCountEl) {
      filterCountEl.textContent = visibleCount;
    }

    // Handle empty state
    if (emptyState) {
      if (visibleCount === 0) {
        emptyState.classList.add('visible');
      } else {
        emptyState.classList.remove('visible');
      }
    }

    // Toggle clear button
    if (clearBtn) {
      if (searchQuery.length > 0) {
        clearBtn.classList.add('visible');
      } else {
        clearBtn.classList.remove('visible');
      }
    }
  }

  // Search input event
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      searchQuery = e.target.value.trim().toLowerCase();
      applyFilters();
    });

    // Keyboard shortcut '/' to focus search
    document.addEventListener('keydown', (e) => {
      if (e.key === '/' && document.activeElement !== searchInput) {
        e.preventDefault();
        searchInput.focus();
      }
    });
  }

  // Clear search button
  if (clearBtn) {
    clearBtn.addEventListener('click', () => {
      searchInput.value = '';
      searchQuery = '';
      searchInput.focus();
      applyFilters();
    });
  }

  // Category pills event
  categoryPills.forEach(pill => {
    pill.addEventListener('click', () => {
      categoryPills.forEach(p => p.classList.remove('active'));
      pill.classList.add('active');
      activeCategory = pill.getAttribute('data-category') || 'all';
      applyFilters();
    });
  });

  // Reset filters button in empty state
  if (resetFiltersBtn) {
    resetFiltersBtn.addEventListener('click', () => {
      if (searchInput) searchInput.value = '';
      searchQuery = '';
      activeCategory = 'all';
      categoryPills.forEach(p => {
        if (p.getAttribute('data-category') === 'all') {
          p.classList.add('active');
        } else {
          p.classList.remove('active');
        }
      });
      applyFilters();
    });
  }

  // Check URL hash for category or specific topic anchor
  const hash = window.location.hash;
  if (hash) {
    if (hash === '#service-models') {
      const servicePill = document.querySelector('.category-pill[data-category="service-models"]');
      if (servicePill) {
        servicePill.click();
      }
    }
  }
}

/**
 * Expand and collapse topic deep-dive sections
 */
function initTopicExpandables() {
  const toggleButtons = document.querySelectorAll('.topic-toggle-btn');
  const expandAllBtn = document.getElementById('expandAllTopics');
  const collapseAllBtn = document.getElementById('collapseAllTopics');

  toggleButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const card = btn.closest('.topic-card');
      if (!card) return;

      const expandable = card.querySelector('.topic-expandable');
      if (!expandable) return;

      const isOpen = expandable.classList.contains('open');

      if (isOpen) {
        expandable.classList.remove('open');
        btn.innerHTML = `
          <span>View In-Depth Guide</span>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <polyline points="6 9 12 15 18 9"></polyline>
          </svg>
        `;
        btn.setAttribute('aria-expanded', 'false');
      } else {
        expandable.classList.add('open');
        btn.innerHTML = `
          <span>Collapse Guide</span>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <polyline points="18 15 12 9 6 15"></polyline>
          </svg>
        `;
        btn.setAttribute('aria-expanded', 'true');
      }
    });
  });

  if (expandAllBtn) {
    expandAllBtn.addEventListener('click', () => {
      document.querySelectorAll('.topic-expandable').forEach(exp => exp.classList.add('open'));
      toggleButtons.forEach(btn => {
        btn.innerHTML = `
          <span>Collapse Guide</span>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <polyline points="18 15 12 9 6 15"></polyline>
          </svg>
        `;
        btn.setAttribute('aria-expanded', 'true');
      });
    });
  }

  if (collapseAllBtn) {
    collapseAllBtn.addEventListener('click', () => {
      document.querySelectorAll('.topic-expandable').forEach(exp => exp.classList.remove('open'));
      toggleButtons.forEach(btn => {
        btn.innerHTML = `
          <span>View In-Depth Guide</span>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <polyline points="6 9 12 15 18 9"></polyline>
          </svg>
        `;
        btn.setAttribute('aria-expanded', 'false');
      });
    });
  }
}
