#!/usr/bin/env node

const {spawn} = require('child_process');
const path = require('path');

console.log('🚀 Running Mobile Test Suite...\n');

// Run mobile tests
const testProcess = spawn('npm', ['run', 'test:mobile'], {
  stdio: 'inherit',
  shell: true,
  env: {
    ...process.env,
    CI: 'true', // Force CI mode for consistent results
  }
});

testProcess.on('close', (code) => {
  console.log(`\n📱 Mobile tests completed with exit code: ${code}`);

  if (code === 0) {
    console.log('✅ All mobile tests passed!');
    process.exit(0);
  } else {
    console.log('❌ Some mobile tests failed. Please fix the issues before committing.');
    process.exit(1);
  }
});

testProcess.on('error', (error) => {
  console.error('❌ Error running mobile tests:', error);
  process.exit(1);
}); 