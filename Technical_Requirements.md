## Technical/Non-Functional? Requirements

Merchants can use **sections** and **blocks** to arrange **page templates**, which provides more flexibility in their store's content, and allows them to control the look and feel of their online store without needing to edit code.

### Template support requirements
- NF1. The system must support the following templates and their format [https://shopify.dev/docs/themes/store/requirements#template-support-requirements]

### Section support requirements
- NF2. All templates must support sections (JSON templates)
- NF3. But we don't need support sections on Customer Account pages, Gift Card pages, and Checkout
- NF4. Templates that support sections should include a setting of type liquid. The Custom Liquid section can act as an insertion point for certain types of apps.
- NF5. Header and footer sections must be rendered within section groups.
- NF6. Section groups allow merchants to dynamically add, remove, and reorder sections in the header and footer areas of the layout.

### Block and app block support requirements
- NF7. Themes must support blocks for all or most elements on the main section of the product page.
- NF8. Ex. Elements such as product price, product vendor, and product description should each be individual blocks within the main product section.
- NF9. Themes must support app blocks (blocks of type @app) in the main product section and featured product section.
- NF10. Introduce Custom Liquid blocks into certain sections.
- NF11. Add a Custom Liquid block anywhere you'd consider adding an app block
- NF12. because the Custom Liquid block can act as an insertion point for certain types of apps. This block should include a setting of type liquid.
- NF13. Implement Best Practices for Sections and Blocks [https://shopify.dev/docs/themes/best-practices/templates-sections-blocks]

### Lighthouse performance and accessibility
- NF14. Implement performance and accessibility
- NF15. Test performance and accessibility

### Pages
- NF16. Including well-designed page types in your theme enables merchants to build all of the elements they need to run their online store. (https://shopify.dev/docs/themes/store/requirements#6-pages)
- NF17. Layout page requirements [https://shopify.dev/docs/themes/store/requirements#layout-page-requirements]
- NF18. Product page requirements [https://shopify.dev/docs/themes/store/requirements#product-page-requirements]
- NF19. Collection page requirements [https://shopify.dev/docs/themes/store/requirements#collection-page-requirements]
- NF20. Collection List page requirements [https://shopify.dev/docs/themes/store/requirements#collection-list-page-requirements]
- NF21. Cart page requirements [https://shopify.dev/docs/themes/store/requirements#cart-page-requirements]
- NF22. Page requirements [https://shopify.dev/docs/themes/store/requirements#page-requirements]
- NF23. Blog page requirements [https://shopify.dev/docs/themes/store/requirements#blog-page-requirements]
- NF24. Article page requirements [https://shopify.dev/docs/themes/store/requirements#article-page-requirements]
- NF25. Search page requirements [https://shopify.dev/docs/themes/store/requirements#search-page-requirements]
- NF26. 404 page requirements [https://shopify.dev/docs/themes/store/requirements#404-page-requirements]
- NF27. Gift Card page requirements [https://shopify.dev/docs/themes/store/requirements#gift-card-page-requirements]
- NF28. Customer page requirements [https://shopify.dev/docs/themes/store/requirements#customer-page-requirements]
- NF29. Password page requirements [https://shopify.dev/docs/themes/store/requirements#password-page-requirements]

### Consistency and functionality
- NF30. https://shopify.dev/docs/themes/store/requirements#7-consistency-and-functionality

### Browser compatibility
- NF31. https://shopify.dev/docs/themes/store/requirements#8-browser-compatibility

### Assets
- NF32. https://shopify.dev/docs/themes/store/requirements#9-assets

### Search engine optimization (SEO)
- NF33. https://shopify.dev/docs/themes/store/requirements#10-search-engine-optimization-seo

### Accessibility
- NF34. https://shopify.dev/docs/themes/store/requirements#11-accessibility

### Social media
- NF35. https://shopify.dev/docs/themes/store/requirements#12-social-media

### Settings
- NF36. https://shopify.dev/docs/themes/store/requirements#13-settings

### Theme design and UX
- NF37. https://shopify.dev/docs/themes/store/requirements#14-theme-design-and-ux

### Font picker
- NF38. https://shopify.dev/docs/themes/store/requirements#15-font-picker

### Color system
- NF39. https://shopify.dev/docs/themes/store/requirements#16-color-system

### Responsive images
- NF40. https://shopify.dev/docs/themes/store/requirements#17-responsive-images

### Naming themes and theme styles
- NF41. https://shopify.dev/docs/themes/store/requirements#18-naming-themes-and-theme-styles

### Theme versions and release notes
- NF42. https://shopify.dev/docs/themes/store/requirements#19-theme-versions-and-release-notes

### Set up Demo stores
- NF43. https://shopify.dev/docs/themes/store/requirements#20-demo-stores

### Documentation and contract forms
- NF44. https://shopify.dev/docs/themes/store/requirements#21-documentation-and-contact-forms

### Supporting your theme
- NF45. https://shopify.dev/docs/themes/store/requirements#22-supporting-your-theme


