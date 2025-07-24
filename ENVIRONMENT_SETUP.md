# Environment Setup - Montessori Skye View Learning Center

This document explains how the application handles different environments and analytics tracking.

## 🎯 Overview

The application uses separate HTML templates for development and production environments to ensure that **no analytics data is collected during local development**.

## 📁 File Structure

```
public/
├── index.dev.html    # Development template (NO analytics)
├── index.prod.html   # Production template (FULL analytics)
└── ... (other assets)
```

## 🌍 Environment Configuration

### Development Environment (`npm start`)
- **Template**: `public/index.dev.html`
- **Analytics**: ❌ **NO TRACKING**
- **URLs**: `http://localhost:3000`
- **SEO**: `noindex, nofollow`
- **Title**: Includes "(DEV)" suffix

### Production Environment (`npm run build`)
- **Template**: `public/index.prod.html`
- **Analytics**: ✅ **FULL TRACKING**
- **URLs**: `https://montessoriskyeview.com`
- **SEO**: `index, follow`
- **Title**: Production titles

## 🔧 Configuration

The environment switching is handled automatically by the CRACO configuration in `craco.config.js`:

```javascript
// Automatically selects the correct template based on environment
const templateFile = env === 'development' ? 'index.dev.html' : 'index.prod.html';
```

## 📊 Analytics Status

### Development (localhost:3000)
- ❌ No Google Analytics tracking
- ❌ No conversion tracking
- ❌ No data collection
- ✅ Safe for development and testing

### Production (montessoriskyeview.com)
- ✅ Google Analytics tracking enabled
- ✅ Conversion tracking enabled
- ✅ Full data collection
- ✅ SEO optimized

## 🚀 Usage

### Development
```bash
npm start
```
- Uses `index.dev.html`
- No analytics tracking
- Safe for local development

### Production Build
```bash
npm run build
```
- Uses `index.prod.html`
- Full analytics tracking
- Ready for deployment

### Environment Verification
```bash
# Check environment files
npm run env:check

# Show help and usage
npm run env:help
```

## 🔍 Verification

### To verify no analytics in development:

1. Start the development server:
   ```bash
   npm start
   ```

2. Open browser developer tools (F12)

3. Go to the Network tab

4. Refresh the page

5. **Verify NO requests to:**
   - `google-analytics.com`
   - `googlesyndication.com`
   - `googletagmanager.com`

### Expected Development Behavior:
- ✅ No analytics requests in Network tab
- ✅ Page title includes "(DEV)"
- ✅ Robots meta tag shows `noindex, nofollow`
- ✅ All URLs point to `localhost:3000`

### Expected Production Behavior:
- ✅ Analytics requests present in Network tab
- ✅ Page title is production-ready
- ✅ Robots meta tag shows `index, follow`
- ✅ All URLs point to `montessoriskyeview.com`

## 🛠️ Troubleshooting

### If you see analytics requests in development:

1. **Check the template being used:**
   ```bash
   npm run env:check
   ```

2. **Verify CRACO configuration:**
   - Ensure `craco.config.js` is properly configured
   - Check that `index.dev.html` exists in `public/`

3. **Clear browser cache:**
   - Hard refresh (Ctrl+Shift+R / Cmd+Shift+R)
   - Clear browser cache and cookies

4. **Restart development server:**
   ```bash
   npm start
   ```

### If production build doesn't include analytics:

1. **Check the template being used:**
   ```bash
   npm run env:check
   ```

2. **Verify build process:**
   ```bash
   npm run build
   ```

3. **Check the built files:**
   - Look in `build/index.html`
   - Verify Google Analytics scripts are present

## 📝 Key Differences

| Feature | Development | Production |
|---------|-------------|------------|
| Template | `index.dev.html` | `index.prod.html` |
| Analytics | ❌ Disabled | ✅ Enabled |
| SEO | `noindex, nofollow` | `index, follow` |
| URLs | `localhost:3000` | `montessoriskyeview.com` |
| Title | Includes "(DEV)" | Production title |
| Robots | Blocked | Allowed |

## 🔒 Security & Privacy

- **Development**: No data is ever sent to Google Analytics
- **Production**: Full analytics with proper consent management
- **Environment Detection**: Automatic based on build environment
- **No Manual Switching**: Impossible to accidentally enable analytics in development

## 📞 Support

If you encounter issues with the environment setup:

1. Run `npm run env:check` to verify files
2. Check this documentation
3. Review the CRACO configuration
4. Ensure you're using the correct npm commands

---

**Remember**: The development environment is designed to be completely safe for testing without any analytics tracking. The production environment includes full analytics for proper business insights. 