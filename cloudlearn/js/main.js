/**
 * CloudLearn – Cloud Computing Academy
 * Main Shared JavaScript (main.js)
 * Handles mobile navigation, header scroll effects, back-to-top button,
 * copy-to-clipboard utilities, and project checklist state persistence.
 */

document.addEventListener('DOMContentLoaded', () => {
  initMobileNav();
  initHeaderScroll();
  initBackToTop();
  initCodeCopyButtons();
  initProjectChecklist();
  highlightActiveNavLink();
});

/**
 * 1. Mobile Navigation Drawer Toggle & Accessibility
 */
function initMobileNav() {
  const toggleBtn = document.querySelector('.mobile-toggle');
  const mobileNav = document.querySelector('.mobile-nav');

  if (!toggleBtn || !mobileNav) return;

  const toggleMenu = (open) => {
    const isOpen = open !== undefined ? open : !mobileNav.classList.contains('open');
    mobileNav.classList.toggle('open', isOpen);
    toggleBtn.setAttribute('aria-expanded', isOpen.toString());
    
    // Toggle hamburger icon between menu and close icon if svg exists
    const svg = toggleBtn.querySelector('svg');
    if (svg) {
      if (isOpen) {
        svg.innerHTML = `
          <line x1="18" y1="6" x2="6" y2="18" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
          <line x1="6" y1="6" x2="18" y2="18" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
        `;
      } else {
        svg.innerHTML = `
          <line x1="4" y1="8" x2="20" y2="8" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
          <line x1="4" y1="16" x2="20" y2="16" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
        `;
      }
    }
  };

  toggleBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    toggleMenu();
  });

  // Close when clicking outside mobile drawer
  document.addEventListener('click', (e) => {
    if (mobileNav.classList.contains('open') && !mobileNav.contains(e.target) && !toggleBtn.contains(e.target)) {
      toggleMenu(false);
    }
  });

  // Close on Escape key press
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && mobileNav.classList.contains('open')) {
      toggleMenu(false);
    }
  });

  // Close when clicking any link inside mobile navigation
  const mobileLinks = mobileNav.querySelectorAll('a');
  mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
      toggleMenu(false);
    });
  });
}

/**
 * 2. Sticky Header Elevation Shadow on Scroll
 */
function initHeaderScroll() {
  const header = document.querySelector('.header');
  if (!header) return;

  const handleScroll = () => {
    if (window.scrollY > 20) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  };

  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();
}

/**
 * 3. Back-to-Top Floating Button
 */
function initBackToTop() {
  const backToTopBtn = document.querySelector('.back-to-top');
  if (!backToTopBtn) return;

  const toggleBackToTop = () => {
    if (window.scrollY > 400) {
      backToTopBtn.classList.add('visible');
    } else {
      backToTopBtn.classList.remove('visible');
    }
  };

  window.addEventListener('scroll', toggleBackToTop, { passive: true });
  toggleBackToTop();

  backToTopBtn.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
}

/**
 * 4. Code Block Copy to Clipboard Utility
 */
function initCodeCopyButtons() {
  const copyButtons = document.querySelectorAll('.code-copy-btn');
  
  copyButtons.forEach(btn => {
    btn.addEventListener('click', async () => {
      const codeWrapper = btn.closest('.code-block-wrapper');
      if (!codeWrapper) return;
      
      const codeElement = codeWrapper.querySelector('code') || codeWrapper.querySelector('pre');
      if (!codeElement) return;

      const textToCopy = codeElement.innerText.trim();

      try {
        await navigator.clipboard.writeText(textToCopy);
        const originalText = btn.innerHTML;
        
        btn.innerHTML = `
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
            <polyline points="20 6 9 17 4 12"></polyline>
          </svg>
          Copied!
        `;
        btn.style.color = 'var(--color-success)';

        showToast('Command copied to clipboard');

        setTimeout(() => {
          btn.innerHTML = originalText;
          btn.style.color = '';
        }, 2200);
      } catch (err) {
        console.error('Failed to copy code: ', err);
        showToast('Could not copy automatically');
      }
    });
  });
}

/**
 * 5. Interactive Project Completion Tracker (Saved to LocalStorage)
 */
function initProjectChecklist() {
  const checkboxes = document.querySelectorAll('.project-complete-checkbox');
  if (!checkboxes.length) return;

  // Retrieve saved states
  let completedProjects = {};
  try {
    const saved = localStorage.getItem('cloudlearn_completed_projects');
    if (saved) {
      completedProjects = JSON.parse(saved);
    }
  } catch (e) {
    console.error('LocalStorage unavailable:', e);
  }

  checkboxes.forEach(cb => {
    const projectId = cb.getAttribute('data-project-id');
    if (projectId && completedProjects[projectId]) {
      cb.checked = true;
      const card = cb.closest('.project-card');
      if (card) card.classList.add('completed');
    }

    cb.addEventListener('change', () => {
      if (projectId) {
        completedProjects[projectId] = cb.checked;
        try {
          localStorage.setItem('cloudlearn_completed_projects', JSON.stringify(completedProjects));
        } catch (e) {
          console.error(e);
        }

        const card = cb.closest('.project-card');
        if (card) {
          card.classList.toggle('completed', cb.checked);
        }

        if (cb.checked) {
          showToast('Project marked as completed! 🎉');
        }
      }
    });
  });
}

/**
 * 6. Active Nav Link Detection
 */
function highlightActiveNavLink() {
  const currentPath = window.location.pathname.split('/').pop() || 'index.html';
  const navLinks = document.querySelectorAll('.nav-link, .mobile-nav-link');

  navLinks.forEach(link => {
    const href = link.getAttribute('href');
    if (!href) return;

    // Check exact match or root match
    if (href === currentPath || (currentPath === '' && href === 'index.html')) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
}

/**
 * 7. Reusable Floating Toast Notification
 */
function showToast(message) {
  let toastContainer = document.querySelector('.toast-container');
  if (!toastContainer) {
    toastContainer = document.createElement('div');
    toastContainer.className = 'toast-container';
    document.body.appendChild(toastContainer);
  }

  // Remove existing toast
  toastContainer.innerHTML = '';

  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.innerHTML = `
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <circle cx="12" cy="12" r="10"></circle>
      <polyline points="12 6 12 12 14 14"></polyline>
    </svg>
    <span>${message}</span>
  `;

  toastContainer.appendChild(toast);

  setTimeout(() => {
    if (toast.parentNode) {
      toast.remove();
    }
  }, 2600);
}

// Global export for other scripts
window.CloudLearn = {
  showToast
};
