# Performance Testing Guide

## Local Performance Testing Options

### 1. Lighthouse Performance Testing

#### Quick Start
```bash
# Test production build performance
npm run test:perf

# Test development server performance
npm run test:perf:dev
```

#### Manual Lighthouse Testing
```bash
# Start your development server
npm start

# In another terminal, run Lighthouse
npx lighthouse --chrome-flags="--headless" --output=html --output-path=./lighthouse-report.html http://localhost:3000

# Open the report
open lighthouse-report.html
```

### 2. Chrome DevTools Performance

1. **Open Chrome DevTools** (F12)
2. **Go to Performance tab**
3. **Click Record button** (circle icon)
4. **Interact with your app** (navigate, click buttons, etc.)
5. **Stop recording**
6. **Analyze the timeline**

**Key Metrics to Watch:**
- **FCP (First Contentful Paint)**: < 1.8s
- **LCP (Largest Contentful Paint)**: < 2.5s
- **CLS (Cumulative Layout Shift)**: < 0.1
- **FID (First Input Delay)**: < 100ms

### 3. Bundle Analysis

```bash
# Analyze bundle size
npm run build
npx webpack-bundle-analyzer build/static/js/*.js
```

### 4. Core Web Vitals Testing

#### Using web-vitals library
```bash
npm install --save-dev web-vitals
```

Add to your `src/index.tsx`:
```typescript
import { getCLS, getFID, getFCP, getLCP, getTTFB } from 'web-vitals';

getCLS(console.log);
getFID(console.log);
getFCP(console.log);
getLCP(console.log);
getTTFB(console.log);
```

### 5. Memory Performance Testing

#### Check for Memory Leaks
1. **Open Chrome DevTools**
2. **Go to Memory tab**
3. **Take heap snapshots**
4. **Compare snapshots after interactions**

#### Monitor Performance in React DevTools
1. **Install React Developer Tools** browser extension
2. **Go to Profiler tab**
3. **Start profiling**
4. **Interact with your app**
5. **Stop and analyze**

## Performance Testing Commands

```bash
# Mobile-specific performance testing
npm run test:mobile                    # Run mobile tests
npm run test:mobile:coverage          # Run with coverage
npm run test:perf                      # Full performance audit
npm run test:lighthouse               # Lighthouse audit only

# Bundle analysis
npm run build                          # Build for production
npm run analyze                        # Analyze bundle (if configured)

# Coverage and quality
npm run test:coverage                  # Test coverage report
npm run lint:fix                       # Fix linting issues
```

## Performance Benchmarks for Montessori School Site

### Target Metrics
- **Mobile Performance Score**: > 90
- **Desktop Performance Score**: > 95
- **Accessibility Score**: > 95
- **Best Practices Score**: > 90
- **SEO Score**: > 90

### Load Time Targets
- **First Contentful Paint**: < 1.5s
- **Largest Contentful Paint**: < 2.0s
- **Time to Interactive**: < 3.0s
- **Total Blocking Time**: < 200ms

### Bundle Size Targets
- **Initial Bundle**: < 500KB (gzipped)
- **Total Assets**: < 2MB
- **Images**: Optimized WebP/AVIF formats

## Continuous Performance Monitoring

### 1. GitHub Actions (Recommended)
Create `.github/workflows/performance.yml`:

```yaml
name: Performance Testing
on: [push, pull_request]
jobs:
  lighthouse:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '18'
      - run: npm ci
      - run: npm run build
      - run: npm install -g @lhci/cli
      - run: lhci autorun
```

### 2. Local Performance Dashboard

Install a local performance monitoring dashboard:
```bash
npm install --save-dev bundlesize
```

Add to `package.json`:
```json
{
  "bundlesize": [
    {
      "path": "./build/static/js/*.js",
      "maxSize": "500 kB"
    },
    {
      "path": "./build/static/css/*.css",
      "maxSize": "50 kB"
    }
  ]
}
```

### 3. Performance Budget

Create `budget.json`:
```json
{
  "resourceSizes": [
    {
      "resourceType": "script",
      "budget": 500
    },
    {
      "resourceType": "total",
      "budget": 2000
    }
  ]
}
```

## Performance Optimization Tips

### 1. Code Splitting
```typescript
// Lazy load components
const LazyComponent = React.lazy(() => import('./LazyComponent'));

// Use React.Suspense
<Suspense fallback={<div>Loading...</div>}>
  <LazyComponent />
</Suspense>
```

### 2. Image Optimization
```typescript
// Use next-gen formats
<img src="image.webp" alt="Description" loading="lazy" />

// Responsive images
<picture>
  <source srcSet="image.webp" type="image/webp" />
  <source srcSet="image.jpg" type="image/jpeg" />
  <img src="image.jpg" alt="Description" />
</picture>
```

### 3. Bundle Optimization
```javascript
// Tree shaking - import only what you need
import { debounce } from 'lodash/debounce';
// Instead of: import _ from 'lodash';

// Code splitting by route
const Home = lazy(() => import('./pages/Home'));
```

## Troubleshooting Performance Issues

### Common Issues and Solutions

1. **Large Bundle Size**
   - Use bundle analyzer to identify large dependencies
   - Implement code splitting
   - Remove unused dependencies

2. **Slow Initial Load**
   - Optimize images
   - Implement lazy loading
   - Use CDN for static assets

3. **Poor Mobile Performance**
   - Reduce JavaScript execution time
   - Optimize CSS delivery
   - Use service workers for caching

4. **Memory Leaks**
   - Clean up event listeners
   - Cancel pending requests in useEffect cleanup
   - Use React.memo for expensive components

## Resources

- [Web Vitals](https://web.dev/vitals/)
- [Lighthouse](https://developers.google.com/web/tools/lighthouse)
- [React DevTools Profiler](https://reactjs.org/blog/2018/09/10/introducing-the-react-profiler.html)
- [Bundle Analyzer](https://www.npmjs.com/package/webpack-bundle-analyzer) 