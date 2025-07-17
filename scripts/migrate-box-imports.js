#!/usr/bin/env node

/**
 * Script to migrate Box imports from @mui/material to custom Box component
 * Usage: node scripts/migrate-box-imports.js
 */

const fs = require('fs');
const path = require('path');
const glob = require('glob');

// Find all TypeScript/JavaScript files in src directory
const files = glob.sync('src/**/*.{ts,tsx,js,jsx}');

let migratedFiles = 0;

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  let modified = false;

  // Check if file imports Box from @mui/material
  if (content.includes("import { Box } from '@mui/material'") ||
    content.includes("import { Box, ") ||
    content.includes(", Box } from '@mui/material'")) {

    // Replace the import
    content = content.replace(
      /import\s*{\s*([^}]*)\s*}\s*from\s*['"]@mui\/material['"]/g,
      (match, imports) => {
        const importList = imports.split(',').map(imp => imp.trim());

        // Remove Box from the import list
        const filteredImports = importList.filter(imp => imp !== 'Box');

        if (filteredImports.length === 0) {
          // If no other imports, remove the entire import line
          return '';
        } else {
          // Keep other imports
          return `import { ${filteredImports.join(', ')} } from '@mui/material'`;
        }
      }
    );

    // Add Box import from shared components
    const relativePath = path.relative(path.dirname(file), 'src/components/shared/Box');
    const importPath = relativePath.startsWith('.') ? relativePath : `./${relativePath}`;

    if (!content.includes("import { Box } from")) {
      content = `import { Box } from '${importPath}';\n${content}`;
    }

    modified = true;
  }

  // Remove component="div" props from Box components
  content = content.replace(
    /<Box\s+([^>]*?)component="div"([^>]*?)>/g,
    '<Box $1$2>'
  );

  if (modified) {
    fs.writeFileSync(file, content);
    migratedFiles++;
    console.log(`Migrated: ${file}`);
  }
});

console.log(`\nMigration complete! Migrated ${migratedFiles} files.`);
console.log('\nNext steps:');
console.log('1. Run your TypeScript compiler to check for any remaining errors');
console.log('2. Test your application to ensure everything works correctly');
console.log('3. Remove any remaining component="div" props from Box components if needed'); 