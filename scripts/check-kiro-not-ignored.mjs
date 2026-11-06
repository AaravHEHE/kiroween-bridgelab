import { execFileSync } from 'node:child_process';
import { existsSync } from 'node:fs';

if (!existsSync('.kiro')) {
  console.error('FAIL: .kiro folder is missing');
  process.exit(1);
}

try {
  // Exit code 0 means the path IS ignored, which is a failure for us.
  execFileSync('git', ['check-ignore', '-q', '.kiro/steering/product.md']);
  console.error('FAIL: .kiro is ignored by .gitignore');
  process.exit(1);
} catch (e) {
  if (e.status === 1) {
    console.log('OK: .kiro is not ignored');
    process.exit(0);
  }
  console.error('FAIL: could not run git check-ignore', e.message);
  process.exit(1);
}