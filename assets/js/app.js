/*
==========================================================
The OPIc AL Bible
First Principles Handbook for Advanced Oral Proficiency

Version : 0.1.0
Author  : Repository
License : Personal Educational Use

Description
-----------
Core JavaScript for the GitHub Pages repository.

Design Goals

- Vanilla JavaScript only
- No external dependencies
- Progressive enhancement
- Accessible
- Lightweight
- Maintainable

==========================================================
*/

'use strict';

/* ======================================================
   Repository Namespace
====================================================== */

const OPIc = (() => {

    /**
     * Cached DOM references
     */

    const elements = {};

    /**
     * Repository configuration
     */

    const config = {

        version: '0.1.0',

        repository: 'The OPIc AL Bible'

    };

    /**
     * Initialize application
     */

    function init() {

        cacheDOM();

        bindEvents();

        highlightCurrentPage();

        updateFooterYear();

        console.info(
            `%c${config.repository} v${config.version}`,
            'color:#1f4e79;font-weight:bold;'
        );

    }

    /**
     * Cache frequently used elements
     */

    function cacheDOM() {

        elements.navigation =
            document.querySelector('nav');

        elements.footer =
            document.querySelector('footer');

    }

    /**
     * Register event listeners
     */

    function bindEvents() {

        document.addEventListener(
            'keydown',
            keyboardShortcuts
        );

    }

    /**
     * Keyboard shortcuts
     *
     * Future expansion:
     *  /  Search
     *  n  Next lesson
     *  p  Previous lesson
     */

    function keyboardShortcuts(event) {

        if (
            event.target.tagName === 'INPUT' ||
            event.target.tagName === 'TEXTAREA'
        ) {
            return;
        }

        switch (event.key.toLowerCase()) {

            default:
                break;

        }

    }

    /**
     * Highlight current navigation link
     */

    function highlightCurrentPage() {

        if (!elements.navigation) return;

        const links =
            elements.navigation.querySelectorAll('a');

        links.forEach(link => {

            const href =
                link.getAttribute('href');

            if (!href) return;

            if (
                window.location.pathname.endsWith(href)
            ) {

                link.setAttribute(
                    'aria-current',
                    'page'
                );

                link.style.fontWeight = '700';

            }

        });

    }

    /**
     * Automatically append current year
     */

    function updateFooterYear() {

        if (!elements.footer) return;

        const year =
            new Date().getFullYear();

        if (
            !elements.footer.dataset.yearAdded
        ) {

            elements.footer.insertAdjacentHTML(
                'beforeend',
                `<div style="margin-top:0.5rem;">
                    © ${year}
                </div>`
            );

            elements.footer.dataset.yearAdded = 'true';

        }

    }

    /**
     * Public API
     */

    return {

        init

    };

})();

/* ======================================================
   Bootstrap
====================================================== */

document.addEventListener(
    'DOMContentLoaded',
    OPIc.init
);
