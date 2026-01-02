# 📚 Portfolio Website Documentation

A complete guide to customizing your personal portfolio website. This documentation covers everything from changing personal details to adding new content and replacing images.

---

## 📋 Table of Contents

1. [Quick Start Guide](#-quick-start-guide)
2. [File Structure Overview](#-file-structure-overview)
3. [Personalizing Your Portfolio](#-personalizing-your-portfolio)
   - [SEO & Meta Tags](#1-seo--meta-tags-indexhtml)
   - [Home Page](#2-home-page-srcpageshomepagetsx)
   - [About Page](#3-about-page-srcpagesaboutpagetsx)
   - [Projects Page](#4-projects-page-srcpagesprojectspagetsx)
   - [Skills Page](#5-skills-page-srcpagesskillspagetsx)
   - [Experience Page](#6-experience-page-srcpagesexperiencepagetsx)
   - [Certificates Page](#7-certificates-page-srcpagescertificatespagetsx)
   - [Contact Page](#8-contact-page-srcpagescontactpagetsx)
   - [Navbar & Footer](#9-navbar--footer)
4. [Working with Images](#-working-with-images)
   - [Profile Images](#profile-images)
   - [Skill Icons](#skill-icons)
   - [Project Screenshots](#project-screenshots)
   - [Certificate Images](#certificate-images)
5. [Contact Form Setup](#-contact-form-setup)
6. [Resume Configuration](#-resume-configuration)
7. [Theme Customization](#-theme-customization)
8. [Common Tasks](#-common-tasks)
9. [Troubleshooting](#-troubleshooting)

---

## 🚀 Quick Start Guide

### Finding Editable Content
All editable content is marked with `✏️ EDIT` comments in the source code. Search for this marker to find customizable sections.

### Key Files to Edit
| What to Change | File Location |
|----------------|---------------|
| SEO & Meta tags | `index.html` |
| Personal info (name, bio, links) | `src/pages/HomePage.tsx` |
| About me content | `src/pages/AboutPage.tsx` |
| Projects list | `src/pages/ProjectsPage.tsx` |
| Skills & categories | `src/pages/SkillsPage.tsx` |
| Work experience | `src/pages/ExperiencePage.tsx` |
| Certificates | `src/pages/CertificatesPage.tsx` |
| Contact details | `src/pages/ContactPage.tsx` |
| Navbar name/title | `src/components/Navbar.tsx` |
| Footer links | `src/components/Footer.tsx` |
| Profile images | `src/assets/profile-image.png` (dark) & `src/assets/profile-image-light.png` (light) |
| Skill icons | `src/assets/skills/` folder |
| Resume file | `public/resume.pdf` |

---

## 📁 File Structure Overview

```
├── index.html                    # SEO meta tags, page title, structured data
├── public/
│   ├── resume.pdf               # Your downloadable resume
│   └── robots.txt               # Search engine crawling rules
├── src/
│   ├── assets/
│   │   ├── profile-image.png       # Dark mode profile photo
│   │   ├── profile-image-light.png # Light mode profile photo
│   │   └── skills/                 # Skill icon images
│   │       ├── react.png
│   │       ├── python.png
│   │       └── ...
│   ├── components/
│   │   ├── Navbar.tsx           # Navigation bar (name, title, links)
│   │   ├── Footer.tsx           # Footer (social links, copyright)
│   │   ├── ProfileImage.tsx     # Profile image component (auto theme switch)
│   │   ├── SkillIcons.tsx       # Skill icon mappings
│   │   └── ResumePreviewDialog.tsx # Resume preview modal
│   ├── pages/
│   │   ├── HomePage.tsx         # Main landing page
│   │   ├── AboutPage.tsx        # About me section
│   │   ├── ProjectsPage.tsx     # Projects showcase
│   │   ├── SkillsPage.tsx       # Skills display
│   │   ├── ExperiencePage.tsx   # Work experience timeline
│   │   ├── CertificatesPage.tsx # Certificates gallery
│   │   └── ContactPage.tsx      # Contact form & info
│   └── lib/
│       └── emailjs.ts           # Email service configuration
```

---

## ✏️ Personalizing Your Portfolio

### 1. SEO & Meta Tags (`index.html`)

Update your website's SEO information for better search engine visibility.

**Location:** `index.html` (root directory)

```html
<!-- Primary Meta Tags -->
<title>Your Name | Full-Stack Developer</title>
<meta name="title" content="Your Name | Full-Stack Developer" />
<meta name="description" content="Your description here..." />
<meta name="author" content="Your Name" />

<!-- Open Graph (Social Media Sharing) -->
<meta property="og:title" content="Your Name | Developer" />
<meta property="og:url" content="https://yourwebsite.com" />
<meta property="og:image" content="https://yourwebsite.com/og-image.png" />

<!-- Twitter Card -->
<meta name="twitter:site" content="@yourusername" />
<meta name="twitter:creator" content="@yourusername" />

<!-- Structured Data (JSON-LD) -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Your Name",
  "url": "https://yourwebsite.com",
  "jobTitle": "Full-Stack Developer",
  "sameAs": [
    "https://github.com/yourusername",
    "https://linkedin.com/in/yourusername"
  ]
}
</script>
```

---

### 2. Home Page (`src/pages/HomePage.tsx`)

**Your name and greeting:**
```tsx
<span className="gradient-text animate-glow-text">Your Name</span>
```

**Role tags (skills displayed as badges):**
```tsx
const roles = [
  "AI Enthusiast",
  "Machine Learning Engineer",
  "Deep Learning Expert",
  // Add or modify your roles
];
```

**Social media links:**
```tsx
const socialLinks = [
  { icon: Linkedin, href: "https://linkedin.com/in/yourusername", label: "LinkedIn" },
  { icon: Mail, href: "mailto:hello@yourname.com", label: "Email" },
  { icon: Instagram, href: "https://instagram.com/yourusername", label: "Instagram" },
  { icon: Facebook, href: "https://facebook.com/yourusername", label: "Facebook" },
];
```

**Coding profile links:**
```tsx
const workLinks = [
  { icon: Github, href: "https://github.com/yourusername", label: "GitHub" },
  { icon: LeetCodeIcon, href: "https://leetcode.com/yourusername", label: "LeetCode" },
];
```

**Info cards (location, expertise, email):**
```tsx
{[
  { icon: MapPin, label: "Location", value: "Your City, Country" },
  { icon: Briefcase, label: "Expertise", value: "Web Dev, AI/ML" },
  { icon: Mail, label: "Contact", value: "hello@yourname.com" },
].map((item, index) => (
```

**Taglines (rotating text):**
```tsx
const taglines = ["Full Stack Developer", "Tech Explorer", "Problem Solver", "Code Enthusiast"];
```

---

### 3. About Page (`src/pages/AboutPage.tsx`)

**Your bio:**
```tsx
<h2 className="font-display text-2xl font-bold mb-4">Hello! I'm Your Name</h2>
<p className="text-muted-foreground leading-relaxed mb-4">
  Write your bio here. Tell visitors about yourself...
</p>
```

**Interests:**
```tsx
const interests = [
  { icon: Code2, label: "Coding", description: "Building things that matter" },
  { icon: Gamepad2, label: "Gaming", description: "Built on grind, focus and dominance" },
  { icon: Lightbulb, label: "Learning", description: "Always exploring new tech" },
  { icon: Heart, label: "Open Source", description: "Contributing to community" },
];
```

**Education:**
```tsx
const education = [
  {
    degree: "Your Degree",
    institution: "University Name",
    year: "2019",
    description: "Your specialization or notable achievements",
  },
];
```

**Certifications:**
```tsx
const certifications = [
  { name: "Certification Name", issuer: "Issuing Organization", year: "2023" },
];
```

---

### 4. Projects Page (`src/pages/ProjectsPage.tsx`)

**Adding/editing projects:**
```tsx
const projects = [
  {
    title: "Project Title",           // Project name
    emoji: "🔬",                       // Emoji icon (displayed if no image)
    description: "Project description here...",
    techStack: ["React", "Node.js", "MongoDB"],  // Technologies used
    link: "https://live-demo.com",     // Live demo URL
    github: "https://github.com/...",  // GitHub repo URL
    image: null,                       // Project screenshot (see Images section)
  },
];
```

**GitHub CTA button:**
```tsx
<a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
```

---

### 5. Skills Page (`src/pages/SkillsPage.tsx`)

**Floating skill icons (visual display):**
```tsx
const floatingSkills = [
  { name: "React", x: 15, y: 20, size: "lg" },  // x,y = position %, size = sm/md/lg
  { name: "Python", x: 65, y: 55, size: "lg" },
  // Add more skills...
];
```

**Skill categories:**
```tsx
const skillCategories = [
  {
    title: "Programming Languages",
    skills: ["Python", "C", "C++", "Java", "JavaScript", "TypeScript"],
  },
  {
    title: "Web Technologies",
    skills: ["HTML", "CSS", "React", "Next.js", "TailwindCSS", "Node.js"],
  },
  // Add more categories...
];
```

---

### 6. Experience Page (`src/pages/ExperiencePage.tsx`)

**Work experience entries:**
```tsx
const experiences = [
  {
    title: "Your Job Title",
    company: "Company Name",
    period: "2023 - Present",
    location: "Remote / City",
    description: "Describe your role and main responsibilities here.",
    achievements: [
      "Key achievement #1",
      "Key achievement #2",
      "Key achievement #3",
    ],
    skills: ["Skill 1", "Skill 2", "Skill 3"],
  },
];
```

---

### 7. Certificates Page (`src/pages/CertificatesPage.tsx`)

**Certificate entries:**
```tsx
const certificates = [
  {
    id: 1,
    name: "Certificate Name",
    issuer: "Issuing Organization",
    year: "2023",
    category: "tech",           // "tech" or "others"
    image: null,                // Certificate image URL (optional)
    link: "https://verify.com", // Verification link
  },
];
```

---

### 8. Contact Page (`src/pages/ContactPage.tsx`)

**Contact information:**
```tsx
// Email
<a href="mailto:your@email.com">your@email.com</a>

// Phone
<a href="tel:+1234567890">+1 (234) 567-890</a>

// Location
<p className="font-medium">Your City, Country</p>
```

**Social links:**
```tsx
const socialLinks = [
  { icon: Github, href: "https://github.com/yourusername", label: "GitHub" },
  { icon: Linkedin, href: "https://linkedin.com/in/yourusername", label: "LinkedIn" },
  { icon: Twitter, href: "https://twitter.com/yourusername", label: "Twitter" },
];
```

---

### 9. Navbar & Footer

**Navbar (`src/components/Navbar.tsx`):**
```tsx
{/* Your Name */}
<span className="font-display font-semibold">YourName</span>
{/* Your Title */}
<span className="text-xs text-muted-foreground">ML • AI • Developer</span>
```

**Footer (`src/components/Footer.tsx`):**
```tsx
// Brand name
<span className="font-display text-xl font-bold">YourName</span>

// Social links
const socialLinks = [
  { icon: Github, href: "https://github.com/yourusername", label: "GitHub" },
  { icon: Linkedin, href: "https://linkedin.com/in/yourusername", label: "LinkedIn" },
  { icon: Mail, href: "mailto:hello@yourname.com", label: "Email" },
];

// Copyright
<span className="text-foreground font-medium">YourName</span>
```

---

## 🖼️ Working with Images

### Profile Images

Your profile photo automatically switches based on theme:
- **Dark mode:** `src/assets/profile-image.png`
- **Light mode:** `src/assets/profile-image-light.png`

**To replace:**
1. Prepare your images (recommended: square, min 400x400px)
2. Replace the files in `src/assets/` keeping the same filenames
3. The website will automatically use the new images

**Component:** `src/components/ProfileImage.tsx`

---

### Skill Icons

**Location:** `src/assets/skills/`

**To add a new skill icon:**

1. Add your icon image to `src/assets/skills/` (e.g., `java.png`)

2. Open `src/components/SkillIcons.tsx`

3. Import the image:
   ```tsx
   import javaIcon from "@/assets/skills/java.png";
   ```

4. Add to the skillIcons object:
   ```tsx
   export const skillIcons: Record<string, string> = {
     // ... existing skills
     "Java": javaIcon,
   };
   ```

5. Use in `src/pages/SkillsPage.tsx`:
   ```tsx
   const floatingSkills = [
     { name: "Java", x: 50, y: 50, size: "md" },
   ];
   ```

**Supported formats:** PNG, SVG, JPG (PNG recommended for transparency)

---

### Project Screenshots

**To add project images:**

1. Add image to `src/assets/projects/` (create folder if needed)

2. Import in `src/pages/ProjectsPage.tsx`:
   ```tsx
   import projectImage from "@/assets/projects/my-project.png";
   ```

3. Use in project entry:
   ```tsx
   {
     title: "My Project",
     image: projectImage,  // Instead of null
     // ...
   }
   ```

**Or use external URLs:**
```tsx
{
  title: "My Project",
  image: "https://example.com/screenshot.png",
}
```

---

### Certificate Images

**To add certificate images:**

1. Add image to `src/assets/certificates/` (create folder if needed)

2. Import in `src/pages/CertificatesPage.tsx`:
   ```tsx
   import awsCert from "@/assets/certificates/aws-cert.png";
   ```

3. Use in certificate entry:
   ```tsx
   {
     name: "AWS Certification",
     image: awsCert,
   }
   ```

---

## 📧 Contact Form Setup

The contact form uses **EmailJS** for sending messages.

**Configuration:** `src/lib/emailjs.ts`

```tsx
export const EMAILJS_CONFIG = {
  serviceId: 'your_service_id',    // From EmailJS dashboard
  templateId: 'your_template_id',  // From EmailJS dashboard
  publicKey: 'your_public_key',    // From EmailJS dashboard
};

// Also update recipient name:
to_name: 'Your Name',
```

**To set up EmailJS:**
1. Create account at [emailjs.com](https://www.emailjs.com/)
2. Create an email service (Gmail, Outlook, etc.)
3. Create an email template
4. Copy Service ID, Template ID, and Public Key
5. Update `src/lib/emailjs.ts`

---

## 📄 Resume Configuration

**Resume file:** `public/resume.pdf`

**To update your resume:**
1. Replace `public/resume.pdf` with your new resume
2. Keep the filename as `resume.pdf`
3. The resume preview dialog will automatically use the new file

**Resume preview component:** `src/components/ResumePreviewDialog.tsx`

---

## 🎨 Theme Customization

**Main style files:**
- `src/index.css` - CSS variables, animations, global styles
- `tailwind.config.ts` - Tailwind configuration, colors, fonts

**Color scheme (in `src/index.css`):**
```css
:root {
  --background: 240 10% 3.9%;
  --foreground: 0 0% 98%;
  --primary: 173 80% 40%;
  /* ... more colors */
}
```

**Fonts:**
- Display font: Space Grotesk
- Body font: Sora

---

## 🔧 Common Tasks

### Change Your Name Everywhere
Search for "Your Name" or "YourName" across all files and replace with your actual name.

**Key locations:**
- `index.html` (meta tags)
- `src/pages/HomePage.tsx`
- `src/pages/AboutPage.tsx`
- `src/components/Navbar.tsx`
- `src/components/Footer.tsx`
- `src/lib/emailjs.ts`

### Add a New Page
1. Create new file in `src/pages/` (e.g., `BlogPage.tsx`)
2. Add route in `src/App.tsx`:
   ```tsx
   import BlogPage from "@/pages/BlogPage";
   // In routes:
   <Route path="/blog" element={<BlogPage />} />
   ```
3. Add nav link in `src/components/Navbar.tsx`:
   ```tsx
   const navLinks = [
     // ...existing links
     { to: "/blog", label: "Blog" },
   ];
   ```

### Add Social Media Links
Update these files:
- `src/pages/HomePage.tsx` - `socialLinks` array
- `src/pages/ContactPage.tsx` - `socialLinks` array
- `src/components/Footer.tsx` - `socialLinks` array

---

## ❓ Troubleshooting

### Image Not Showing
- Ensure the image file exists in the correct location
- Check the import path is correct
- Verify the filename matches exactly (case-sensitive)

### Contact Form Not Working
- Verify EmailJS credentials in `src/lib/emailjs.ts`
- Check browser console for errors
- Ensure EmailJS service is active

### Skill Icon Not Appearing
- Add the image to `src/assets/skills/`
- Import in `src/components/SkillIcons.tsx`
- Add to `skillIcons` object with matching name

### Changes Not Reflecting
- Save all files
- Check for syntax errors in browser console
- Hard refresh browser (Ctrl+Shift+R)

---

## 🔍 Finding Editable Content

All customizable sections are marked with:
```tsx
/* ✏️ EDIT: Description of what to change */
```

Use your code editor's search function to find `✏️ EDIT` across all files.

---

## 📝 Summary Checklist

- [ ] Update `index.html` meta tags with your info
- [ ] Replace profile images in `src/assets/`
- [ ] Update name and bio in HomePage and AboutPage
- [ ] Add your projects in ProjectsPage
- [ ] Update skills in SkillsPage
- [ ] Add work experience in ExperiencePage
- [ ] Add certificates in CertificatesPage
- [ ] Update contact info in ContactPage
- [ ] Update Navbar name and title
- [ ] Update Footer social links
- [ ] Configure EmailJS for contact form
- [ ] Replace resume PDF in `public/`
- [ ] Update all social media links

---

**Happy customizing! 🚀**
