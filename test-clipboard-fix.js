// Simple test to verify clipboard error handling
const {execSync} = require('child_process');

try {
  console.log('Testing clipboard error handling...');

  // Run a simple test to check if the Home component renders without crashing
  const result = execSync('npx react-scripts test --testPathPattern=Home.mobile.test.tsx --testNamePattern="handles clipboard API errors gracefully" --watchAll=false --verbose', {
    encoding: 'utf8',
    timeout: 30000
  });

  console.log('✅ Clipboard error handling test passed!');
  console.log(result);
} catch (error) {
  console.log('❌ Test failed:');
  console.log(error.message);
  process.exit(1);
} 