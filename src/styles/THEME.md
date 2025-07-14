# Skyeview Montessori School Theme System

## Color Palette

### Primary Colors
- `--primary-blue: #4BB4DE` - Bright sky blue representing joy and creativity
- `--primary-green: #7ED957` - Fresh lime green for growth and nature
- `--primary-yellow: #FFD93D` - Sunshine yellow for warmth and energy

### Secondary Colors
- `--secondary-purple: #9B6DFF` - Playful purple for imagination
- `--secondary-pink: #FF8DC7` - Soft pink for nurturing and care
- `--secondary-orange: #FF965D` - Warm orange for enthusiasm

### Accent Colors
- `--accent-red: #FF6B6B` - Cheerful red for excitement
- `--accent-teal: #40CDB2` - Calming teal for focus
- `--accent-coral: #FF8882` - Soft coral for creativity

### Neutral Colors
- `--white: #FFFFFF`
- `--cloud-white: #F9FAFB` - Background color
- `--light-gray: #F3F4F6`
- `--medium-gray: #E5E7EB`
- `--text-dark: #1F2937`
- `--text-light: #4B5563`

## Typography

### Font Families
- Primary (Headers): 'Quicksand', sans-serif - Rounded, friendly font
- Body: 'Nunito', sans-serif - Soft, readable font

### Font Sizes
- `--text-xs: 0.75rem` (12px)
- `--text-sm: 0.875rem` (14px)
- `--text-base: 1rem` (16px)
- `--text-lg: 1.125rem` (18px)
- `--text-xl: 1.25rem` (20px)
- `--text-2xl: 1.5rem` (24px)
- `--text-3xl: 2rem` (32px)
- `--text-4xl: 2.5rem` (40px)
- `--text-5xl: 3rem` (48px)

### Line Heights
- `--leading-tight: 1.2`
- `--leading-normal: 1.5`
- `--leading-loose: 1.8`

## Spacing

### Base Units
- `--spacing-xs: 0.25rem` (4px)
- `--spacing-sm: 0.5rem` (8px)
- `--spacing-md: 1rem` (16px)
- `--spacing-lg: 1.5rem` (24px)
- `--spacing-xl: 2rem` (32px)
- `--spacing-2xl: 3rem` (48px)
- `--spacing-3xl: 4rem` (64px)

## Borders & Shadows

### Border Radius
- `--radius-sm: 12px`
- `--radius-md: 16px`
- `--radius-lg: 24px`
- `--radius-xl: 32px`
- `--radius-full: 9999px`

### Shadows
- `--shadow-sm: 0 2px 8px rgba(0, 0, 0, 0.05)`
- `--shadow-md: 0 4px 12px rgba(0, 0, 0, 0.08)`
- `--shadow-lg: 0 8px 24px rgba(0, 0, 0, 0.12)`
- `--shadow-xl: 0 12px 32px rgba(0, 0, 0, 0.15)`

## Component Variants

### ContentContainer
- `default`: Cloud white background, subtle shadow
- `card`: White background, medium shadow, large radius
- `hero`: Gradient background, rounded bottom corners

### Typography
- Headers: Quicksand font, bold weight for emphasis
- Body: Nunito font, regular weight for readability
- Colors: Varied by section for visual interest

### Images
- Sizes: sm (240px), md (480px), lg (720px), full (100%)
- Variants: rounded, circle, blob-shape
- Aspect ratios: square, 16:9, 4:3, auto
- Hover: Gentle scale and shadow increase

### Interactive Elements
- Buttons: Large radius, bright colors
- Hover states: Scale up slightly, brighten
- Focus states: Colorful glowing outline
- Transitions: Smooth, playful animations

## Animation Guidelines
- Duration: 300-500ms
- Easing: Smooth, bouncy for playfulness
- Hover: Scale 1.02-1.05
- Transitions: Use spring physics when appropriate

## Best Practices
1. Use bright, cheerful colors strategically
2. Maintain high contrast for readability
3. Include plenty of white space
4. Add playful illustrations and icons
5. Keep animations gentle and fun
6. Ensure mobile-first responsive design
7. Test for accessibility compliance

## Accessibility
- WCAG 2.1 AA compliance
- High contrast text (4.5:1 minimum)
- Clear focus indicators
- Keyboard navigation support
- Screen reader friendly
- Reduced motion support

## Performance
- Optimize images (WebP format)
- Lazy load below fold
- Minimize CSS/JS bundles
- Cache static assets
- Monitor Core Web Vitals 