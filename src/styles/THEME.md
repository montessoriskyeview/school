# Skyeview Montessori School Theme Guide

## Color Palette

### Primary Colors
- **Primary Blue**: `#4BB4DE` - Bright sky blue for joy and creativity
- **Primary Green**: `#7ED957` - Fresh lime green for growth and nature  
- **Primary Yellow**: `#FFD93D` - Sunshine yellow for warmth and energy

### Secondary Colors
- **Secondary Purple**: `#9B6DFF` - Playful purple for imagination
- **Secondary Pink**: `#FF8DC7` - Soft pink for nurturing and care
- **Secondary Orange**: `#FF965D` - Warm orange for enthusiasm

### Accent Colors
- **Accent Red**: `#FF6B6B` - Cheerful red for excitement
- **Accent Teal**: `#40CDB2` - Calming teal for focus
- **Accent Coral**: `#FF8882` - Soft coral for creativity

### Neutral Colors
- **White**: `#FFFFFF`
- **Cloud White**: `#F9FAFB` - Background color
- **Light Gray**: `#F3F4F6`
- **Medium Gray**: `#E5E7EB`
- **Text Dark**: `#1F2937` - Primary text color
- **Text Light**: `#4B5563` - Secondary text color

## Typography

### Font Families
- **Primary**: Quicksand (headings)
- **Body**: Nunito (body text)

### Font Sizes (Increased for better readability)
- **XS**: 14px (0.875rem)
- **SM**: 16px (1rem) 
- **Base**: 18px (1.125rem)
- **LG**: 20px (1.25rem)
- **XL**: 24px (1.5rem)
- **2XL**: 30px (1.875rem)
- **3XL**: 36px (2.25rem)
- **4XL**: 44px (2.75rem)
- **5XL**: 56px (3.5rem)

### Line Heights
- **Tight**: 1.2 (headings)
- **Normal**: 1.5 (body text)
- **Loose**: 1.8 (large text blocks)

## Spacing System (Apple-Inspired)

### Vertical Spacing
- **XS**: 8px (0.5rem) - Minimal spacing
- **SM**: 16px (1rem) - Small spacing
- **MD**: 24px (1.5rem) - Element spacing
- **LG**: 32px (2rem) - Text spacing
- **XL**: 48px (3rem) - Component padding
- **2XL**: 64px (4rem) - Section spacing
- **3XL**: 96px (6rem) - Major sections
- **4XL**: 128px (8rem) - Page sections

### Spacing Philosophy
- **Generous Whitespace**: Always err on the side of too much space
- **Component Isolation**: Each component should have room to breathe
- **Visual Hierarchy**: Use spacing to create clear content sections
- **Relaxed Feeling**: Users should feel comfortable and not rushed

## Accessibility & Contrast Requirements

### CRITICAL: Text Color Rules
**NEVER use white text on light backgrounds or colored backgrounds with insufficient contrast.**

### Approved Text Color Combinations

#### Dark Text (Recommended for most content)
- **Background**: White, Cloud White, Light Gray
- **Text Color**: `#1F2937` (Text Dark) or `#4B5563` (Text Light)
- **Use for**: Body text, headings, most content areas

#### White Text (Only on dark backgrounds)
- **Background**: Dark colors with sufficient contrast
- **Text Color**: `#FFFFFF` (White)
- **Use for**: Dark cards, hero sections with dark backgrounds
- **Minimum contrast ratio**: 4.5:1 for normal text, 3:1 for large text

#### Colored Text on White Backgrounds
- **Primary Blue**: `#4BB4DE` - Use sparingly for links and highlights
- **Primary Green**: `#7ED957` - Use for success states
- **Secondary Purple**: `#9B6DFF` - Use for special elements

### Gradient Background Rules
When using gradient backgrounds, ensure text remains readable:
1. **Light gradients**: Use dark text (`#1F2937`)
2. **Dark gradients**: Use white text (`#FFFFFF`) with sufficient contrast
3. **Colored gradients**: Test contrast ratio - if insufficient, add dark overlay

### WCAG 2.1 AA Compliance
- **Normal text**: Minimum 4.5:1 contrast ratio
- **Large text (18pt+ or 14pt+ bold)**: Minimum 3:1 contrast ratio
- **UI components**: Minimum 3:1 contrast ratio
- **Always test with actual colors, not just CSS variables**

## Component Guidelines

### Content Containers
- Use generous padding: `var(--spacing-xl)` minimum
- Maintain consistent spacing between elements
- Ensure proper contrast for all text content

### Cards
- Background: White or very light colors
- Text: Dark colors (`#1F2937` or `#4B5563`)
- Border radius: `var(--radius-lg)`
- Shadow: `var(--shadow-md)`

### Buttons
- Minimum touch target: 44px × 44px
- Clear focus indicators
- Hover and focus states
- Proper contrast ratios

### Links
- Use primary blue (`#4BB4DE`) on white backgrounds
- Underline on hover for clarity
- Ensure sufficient contrast

## Implementation Checklist

Before implementing any new component or updating existing ones:

1. **Contrast Check**: Verify text contrast meets WCAG 2.1 AA standards
2. **Spacing Check**: Ensure generous Apple-inspired spacing is used
3. **Typography Check**: Use appropriate font sizes and line heights
4. **Color Check**: Follow approved color combinations
5. **Accessibility Check**: Test with keyboard navigation and screen readers

## Common Mistakes to Avoid

❌ **White text on light backgrounds**
❌ **Insufficient contrast ratios**
❌ **Tight spacing that feels cramped**
❌ **Small touch targets**
❌ **Poor focus indicators**

✅ **Dark text on light backgrounds**
✅ **Generous spacing throughout**
✅ **Clear visual hierarchy**
✅ **Accessible color combinations**
✅ **Proper contrast ratios** 