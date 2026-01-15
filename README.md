# OnRamp Lab React UI Components

<div align="center">

  **A modern, accessible React component library built by OnRamp Lab**

  [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
  [![React](https://img.shields.io/badge/React-0.14.x-blue.svg)](https://reactjs.org/)
  [![TypeScript](https://img.shields.io/badge/TypeScript-Ready-blue.svg)](https://www.typescriptlang.org/)

  [Documentation](./docs/UI_UX_TRENDS_2026.md) • [Quick Start](./docs/QUICK_START.md) • [Components](#components) • [Contributing](#contributing)

</div>

---

## 🚀 About

**OnRamp Lab React UI** is a comprehensive component library designed for building modern, accessible web applications. This library provides a collection of reusable UI components that follow best practices for usability, accessibility, and design consistency.

### Built by [OnRamp Lab](https://www.onramplab.com/)

OnRamp Lab is an agile team of digital marketing operators, entrepreneurs, and technologists driving measurable value through innovative digital solutions. With 70+ professionals across Los Angeles and Taipei offices, we specialize in omnichannel digital marketing, performance-based monetization, and web publishing.

---

## ✨ Features

- 🎨 **Beautiful Components** - A wide range of customizable UI components
- ♿ **Accessible** - WCAG 2.1 compliant components out of the box
- 📱 **Responsive** - Mobile-first design approach
- 🌗 **Dark Mode Ready** - Built-in theme support
- 🔧 **Customizable** - Easy theming and styling options
- 📝 **Well Documented** - Comprehensive documentation and examples

---

## 📦 Installation

### Prerequisites

- Node.js and npm installed
- Gulp CLI installed globally

```bash
npm install -g gulp
```

### Quick Start

```bash
# Install dependencies
npm install

# Start development server with live reload
gulp

# The app will be available at http://localhost:8080
```

---

## 🎯 Components

Our component library includes:

### Form Components
| Component | Description | Status |
|-----------|-------------|--------|
| **InputDate** | Date picker with keyboard shortcuts | ✅ Stable |
| **InputLabel** | Labeled text input | ✅ Stable |
| **InputInlinelabel** | Inline labeled input | ✅ Stable |
| **Autocomplete** | Single-select autocomplete | ✅ Stable |
| **AutocompleteMuti** | Multi-select autocomplete | ✅ Stable |
| **Textarea** | Multi-line text input | ✅ Stable |
| **Uploader** | File upload component | ✅ Stable |

### Button Components
| Component | Description | Status |
|-----------|-------------|--------|
| **ButtonGroup** | Grouped button controls | ✅ Stable |
| **Breadcrumb** | Navigation breadcrumb | ✅ Stable |

### Table Components
| Component | Description | Status |
|-----------|-------------|--------|
| **TableShow** | Data display table | ✅ Stable |
| **TableChoose** | Selectable data table | ✅ Stable |

### Message Components
| Component | Description | Status |
|-----------|-------------|--------|
| **Info** | Information display | ✅ Stable |

### Navigation Components
| Component | Description | Status |
|-----------|-------------|--------|
| **Pagination** | Page navigation | ✅ Stable |
| **Selection** | Selection controls | ✅ Stable |

### Text Components
| Component | Description | Status |
|-----------|-------------|--------|
| **HtmlEditor** | WYSIWYG HTML editor | ✅ Stable |

### Image Components
| Component | Description | Status |
|-----------|-------------|--------|
| **Img** | Enhanced image component | ✅ Stable |

### Combo Components
| Component | Description | Status |
|-----------|-------------|--------|
| **WmsEmaillist** | Email list manager | ✅ Stable |
| **WmsEmailparent** | Email parent manager | ✅ Stable |
| **WmsEmaileditor** | Email editor | ✅ Stable |

---

## 💻 Usage

### Basic Example

```jsx
'use strict';

let ui = ui || {};

// Date Input Example
ui.InputDate = React.createClass({
  render() {
    return (
      <ui.InputDate name="birthDate" />
    );
  }
});
```

### With Events

```jsx
// File Uploader Example
<ui.Uploader 
  listenFile={handleFileUpload}
/>
```

### Component Documentation

Each component has its own documentation:
- Usage examples
- Props reference
- Event handlers
- Best practices

Visit the component's folder for detailed documentation.

---

## 🔧 Development

### Project Structure

```
UI/
├── src/                 # React components source
│   ├── Home/           # Documentation home
│   ├── Uploader/       # File upload component
│   ├── InputDate/      # Date input component
│   ├── ButtonGroup/    # Button group component
│   └── ...
├── build/              # Compiled output
├── config/             # Configuration files
├── dist/               # Utilities
├── lib/                # PHP helpers
├── docs/               # Documentation
└── gulpfile.js         # Build configuration
```

### Available Scripts

```bash
# Start development server
gulp

# Build for production
gulp build

# Watch for changes
gulp watch
```

### Technology Stack

- **React** 0.14.x
- **Babel** 5.x (ES6 → ES5, JSX → JS)
- **Gulp** 3.9 (Build system)
- **jQuery** 2.1.x
- **Bootstrap** 3.x
- **Font-Awesome** 4.x

---

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

---

## 📚 Documentation

For in-depth analysis of modern UI/UX trends and component library best practices, check out our documentation:

- [**UI/UX Trends 2026**](./docs/UI_UX_TRENDS_2026.md) - Comprehensive analysis of 2025-2026 design trends
- [**Quick Start Guide**](./docs/QUICK_START.md) - Action-oriented modernization guide

---

## 🤝 Contributing

We welcome contributions from the OnRamp Lab team and the open-source community!

### How to Contribute

1. **Fork the repository**
2. **Create your feature branch** (`git checkout -b feature/amazing-feature`)
3. **Commit your changes** (`git commit -m 'Add some amazing feature'`)
4. **Push to the branch** (`git push origin feature/amazing-feature`)
5. **Open a Pull Request**

### Development Guidelines

- Follow the existing code style
- Add tests for new components
- Update documentation
- Ensure accessibility compliance

### Code Style

- Use `'use strict'` in all files
- Follow the component template structure:
  ```javascript
  // --------------------------------------------------------------------------------
  // helper
  // --------------------------------------------------------------------------------
  
  // --------------------------------------------------------------------------------
  // event
  // --------------------------------------------------------------------------------
  
  // --------------------------------------------------------------------------------
  // render
  // --------------------------------------------------------------------------------
  ```

---

## 🗺️ Roadmap

### Current Version (v1.0.0)
- ✅ Core component library
- ✅ Basic documentation
- ✅ Live reload development environment

### Upcoming Features
- [ ] TypeScript migration
- [ ] React 19 upgrade
- [ ] Enhanced accessibility (WCAG 2.1 AA)
- [ ] Dark mode support
- [ ] Storybook integration
- [ ] Comprehensive test coverage
- [ ] Performance optimization
- [ ] Design system website

See [UI/UX Trends 2026](./docs/UI_UX_TRENDS_2026.md) for detailed modernization plans.

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 👥 Team

**OnRamp Lab** - An agile team of digital marketing professionals

- **Website**: [onramplab.com](https://www.onramplab.com/)
- **Locations**: Los Angeles, Taipei, Shanghai
- **Founded**: 2015 by Lawrence Ng

---

## 📞 Support

For support, please contact the OnRamp Lab development team or open an issue in this repository.

---

## 🙏 Acknowledgments

- React team and community
- Bootstrap framework
- Font Awesome icons
- All contributors to this project

---

<div align="center">

  **Built with ❤️ by [OnRamp Lab](https://www.onramplab.com/)**

  ⭐ Star us on GitHub — it helps!

</div>
