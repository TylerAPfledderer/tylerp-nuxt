<h1 align="center">Tyler Pfledderer - Portfolio Website</h1>

<div align="center">

![Netlify](https://img.shields.io/netlify/fa9ace03-d44a-4a22-8bf5-731067ba9995?color=%2300AD9F&style=for-the-badge)
![GitHub package.json dependency version (prod)](https://img.shields.io/github/package-json/dependency-version/tylerapfledderer/tylerp-nuxt/nuxt?color=41b883&style=for-the-badge)
![GitHub package.json dependency version (prod)](https://img.shields.io/github/package-json/dependency-version/tylerapfledderer/tylerp-nuxt/@nuxtjs/pwa?style=for-the-badge)
![GitHub package.json dependency version (dev dep on branch)](https://img.shields.io/github/package-json/dependency-version/tylerapfledderer/tylerp-nuxt/dev/tailwindcss/main?color=00b4b6&style=for-the-badge)
![Website](https://img.shields.io/website?down_message=offline&style=for-the-badge&up_message=online&url=https%3A%2F%2Ftylerpweb.dev)

</div>
<p align="center">A site for Web Developer Tyler Pfledderer, showcasing projects focused in Front-End Web Development.</p>

## Technology Used

- NuxtJS
- TailwindCSS
- Netlfiy CMS with Nuxt Content API to assist in the use of Markdown files
- Hosted in Netlify with Form management

## Live Site

![Preview Image of the site](https://user-images.githubusercontent.com/65234762/121609268-863fed00-ca21-11eb-8d9d-f9b404e863e4.png)

<a href='https://tylerpweb.dev'>Visit the site</a>

## Primary Takeaways

This site is a second iteration. This site was originally built in vanilla HTML, CSS, and JavaScript, with SASS Preprocessing. The reason for this new version was to provide a site with a more appealing design, and within a current techonology such as Nuxt. Further additions were made with the help of TailwindCSS to provide more control with utility styles and organiztion annd customization of these styles withing a JavaScript-based config file.

This site implements the Netlify CMS (Content Management System) to currently use a GUI for easier importing of any new projects I wish to add later, should I add a blog.

## Further Considerations

- This site has passed Lighthouse checks in Web Accessibility. However, this is not enough as more can be done to improve UX with screen readers, such as a 'Skip Navigation' link and use of the `aria-live` / `role="alert"` attributes to trigger the screen reader should contact form validation fail.
- As stated above, I use Netlify CMS to make it easier to add and update my list of projects through a simple but helpful UI. I will be exploring options to use to it for easier updating to other parts of my site, such as the list of skills.
