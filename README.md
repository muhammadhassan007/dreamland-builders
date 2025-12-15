# BuildPro Construction Website

A modern, attractive, and fully animated construction company website built with HTML5, CSS3, Vanilla JavaScript, and Bootstrap 5.

## Features

- ✅ **Fully Responsive** - Mobile-first design that works on all devices
- ✅ **Smooth Animations** - Scroll-based animations, hover effects, and transitions
- ✅ **Lightweight & Fast** - Optimized for quick loading on shared hosting
- ✅ **SEO-Friendly** - Proper meta tags and semantic HTML structure
- ✅ **Cross-Browser Compatible** - Works on all modern browsers
- ✅ **Professional Design** - Clean, modern UI with construction industry theme

## Pages Included

1. **Home** (`index.html`) - Hero section, company intro, services preview, projects showcase, testimonials, CTA
2. **About Us** (`about.html`) - Company story, mission & vision, team section, values
3. **Services** (`services.html`) - Detailed service cards with icons and descriptions
4. **Projects** (`projects.html`) - Portfolio grid with animated hover effects
5. **Contact** (`contact.html`) - Contact form with validation, Google Map embed, contact details
6. **Blog** (`blog.html`) - Blog listing page with sidebar
7. **FAQ** (`faq.html`) - Frequently asked questions with accordion
8. **Careers** (`careers.html`) - Job listings and application process

## File Structure

```
const-design/
├── index.html          # Home page
├── about.html          # About Us page
├── services.html       # Services page
├── projects.html       # Projects/Portfolio page
├── contact.html        # Contact page
├── blog.html           # Blog page (optional)
├── faq.html            # FAQ page (optional)
├── careers.html        # Careers page (optional)
├── css/
│   └── style.css       # Main stylesheet
├── js/
│   └── main.js         # Main JavaScript file
└── README.md           # This file
```

## Technologies Used

- **HTML5** - Semantic markup
- **CSS3** - Custom styles with animations
- **JavaScript (Vanilla)** - Interactive features and form validation
- **Bootstrap 5** - Responsive framework and components
- **Bootstrap Icons** - Icon library

## Setup Instructions

1. **Download/Extract Files**
   - Extract all files to your local directory

2. **Upload to Hostinger**
   - Upload all files to your `public_html` folder (or your domain's root directory)
   - Maintain the folder structure (css/, js/ folders)

3. **No Build Process Required**
   - This is a static website - no compilation needed
   - Files are ready to use as-is

4. **Customization**
   - Edit HTML files to update content
   - Modify `css/style.css` for styling changes
   - Update `js/main.js` for JavaScript functionality

## Customization Guide

### Colors
Edit CSS variables in `css/style.css`:
```css
:root {
    --primary-yellow: #FFC107;
    --primary-black: #1A1A1A;
    --primary-gray: #6C757D;
    /* ... */
}
```

### Images
Replace Unsplash image URLs with your own images:
- Update `src` attributes in HTML files
- Recommended: Use optimized images (WebP format, compressed)

### Contact Information
Update contact details in:
- Footer section (all pages)
- Contact page
- Navigation links

### Google Map
Replace the Google Maps embed URL in `contact.html` with your actual location:
```html
<iframe src="YOUR_GOOGLE_MAPS_EMBED_URL"></iframe>
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance Tips

1. **Optimize Images**
   - Compress images before uploading
   - Use WebP format when possible
   - Consider lazy loading for images

2. **CDN Usage**
   - Bootstrap and icons are loaded from CDN (already optimized)
   - Consider hosting locally if needed

3. **Minification** (Optional)
   - Minify CSS and JS files for production
   - Use tools like UglifyJS or CSS Minifier

## Form Functionality

The contact form includes client-side validation. For full functionality:
- Connect to a backend service (PHP, Node.js, etc.)
- Or use a form service like Formspree, Netlify Forms, etc.

## License

This website template is provided for use in your construction company website project.

## Support

For questions or customization help, refer to the code comments in each file.

---

**Built with ❤️ for BuildPro Construction**

