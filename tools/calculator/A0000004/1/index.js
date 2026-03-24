document.addEventListener('DOMContentLoaded', () => {
        const mobileToggle = document.getElementById('mobile-toggle');
        const mobileMenuPane = document.getElementById('mobile-menu-pane');
        const mainNav = document.getElementById('main-nav');
        if(mainNav) {
            mobileMenuPane.innerHTML = mainNav.innerHTML;
        }
        if(mobileToggle) {
            mobileToggle.addEventListener('click', (e) => {
                e.stopPropagation();
                mobileMenuPane.classList.toggle('is-open');
            });
        }
    });
