# Contribution Guidelines for Candidates

Welcome! This repository is used as part of our hiring process. Follow these steps to submit your work.

---

##  Submission Process

### 1. Fork the Repository
Click the **Fork** button in the top right to create your own copy.

### 2. Clone Your Fork
```bash
git clone https://github.com/YOUR_USERNAME/modelsuite-qualification.git
cd modelsuite-qualification
```

### 3. Create a Task Branch
**IMPORTANT:** Always work in a dedicated branch, never directly on `master`.

```bash
git checkout -b [TASK-ID]-brief-description
```

Example: `git checkout -b [TP-42]-add-login-validation`

### 4. Make Your Changes
- Follow the existing code style and structure
- Test your changes locally before pushing
- Run lint and build commands (see below)

### 5. Test Locally (Required Before Submitting)

**For Client Changes:**
```bash
cd client
npm install
npm run lint        # Must pass with no warnings
npm run build       # Must succeed
```

**For Server Changes:**
```bash
cd server
npm install
npm run lint        # Must pass with no warnings
node -c index.js    # Check for syntax errors
```

### 6. Commit Your Changes
Use clear, descriptive commit messages:

```bash
git add .
git commit -m "[TASK-ID] Brief description of what you changed"
```

Example: `git commit -m "[TP-42] Add email validation to login form"`

### 7. Push to Your Fork
```bash
git push origin [TASK-ID]-brief-description
```

### 8. Open a Pull Request
1. Go to the original repository: `https://github.com/modelsuite-ai/modelsuite-qualification`
2. Click **"New Pull Request"**
3. Click **"compare across forks"**
4. Select your fork and branch
5. Fill out the PR template completely (see below)

---

##  Pull Request Requirements

Your PR **MUST** include:

### 1. Proper Title Format
```
[TASK-ID]-brief-description
```

Examples:
- ✅ `[TP-42]-add-login-validation`
- ✅ `[9DWW]-fix-task-submission-bug`
- ❌ `TP-42 add login` (missing brackets and dash)
- ❌ `Add login validation` (no task ID)

### 2. Complete Description
Your PR description must include:

- **What was done:** Clear summary of changes
- **How it was tested:** Steps to verify functionality
- **Screenshots:** If UI changes were made
- **Files changed:** List key files modified
- **Testing notes:** How to run/test locally

**Incomplete PR descriptions will result in automatic failure.**

### 3. Pre-Submit Checklist
Before submitting your PR, verify:

- [ ] All lint checks pass locally
- [ ] Build succeeds locally
- [ ] No `console.log`, `TODO`, or `FIXME` statements remain
- [ ] No secrets, API keys, or credentials committed
- [ ] PR title follows format: `[TASK-ID]-description`
- [ ] Screenshots included for UI changes
- [ ] PR description is complete (not just one line)

---

##  Automated CI/CD Checks

After you submit your PR, our automated CI/CD pipeline will run:

### What Gets Tested:
1. **Danger JS** - Validates PR format, title, and description
2. **Client Lint** - Checks for code style issues
3. **Client Build** - Ensures the frontend builds successfully
4. **Server Lint** - Checks for code style issues
5. **Server Syntax** - Validates Node.js code syntax

### What Happens:
- ✅ **All checks pass:** You'll get a success comment, and your PR is ready for review
- ❌ **Any check fails:** Your PR will be **automatically closed** with details about what failed

### Important Notes:
- **Zero tolerance for lint warnings** - The linter runs with `--max-warnings 0`
- **Fix issues and resubmit** - If your PR is auto-closed, fix the issues and open a new PR
- **Check CI logs** - Click "Details" next to failed checks to see what went wrong

---

##  Code Quality Standards

### General Rules
- Follow existing code structure and patterns
- Use meaningful variable and function names
- Keep functions small and focused
- Add comments for complex logic only
- Remove all debugging statements before committing

### React/Frontend (Client)
- Use functional components with hooks
- Follow the existing component structure
- Use Tailwind CSS for styling (avoid inline styles)
- Handle errors gracefully with user-friendly messages
- Test all forms and user interactions

### Node.js/Backend (Server)
- Follow RESTful API conventions
- Use async/await (not callbacks)
- Add proper error handling with try/catch
- Validate all inputs
- Use existing middleware patterns

### Git Commits
- One logical change per commit
- Clear, descriptive commit messages
- Include task ID in commit message

---

##  Common Mistakes to Avoid

1. **Working directly on master branch**
   - Always create a feature branch

2. **Incomplete PR description**
   - Fill out all sections of the template

3. **Not testing locally**
   - Run lint and build before pushing

4. **Leaving debug code**
   - Remove `console.log`, `debugger`, `TODO`, etc.

5. **Wrong PR title format**
   - Must be: `[TASK-ID]-description`

6. **Committing sensitive files**
   - Never commit `.env`, secrets, or credentials

7. **No screenshots for UI changes**
   - Always include before/after images

8. **Modifying sensitive files unnecessarily**
   - Don't change `.github/workflows/`, `dangerfile.js`, etc.

---

##  Getting Help

If you encounter issues:

1. **Check existing documentation:**
   - Main [README.md](./README.md) for project setup
   - [PR template](./.github/pull_request_template.md) for submission format

2. **Review CI logs:**
   - Click "Details" next to failed checks
   - Read error messages carefully

3. **Test locally:**
   - Reproduce the issue on your machine
   - Verify lint and build commands pass

4. **Search for similar issues:**
   - Check closed PRs for examples
   - Look for common error patterns

---

##  Evaluation Criteria

Your submission will be evaluated on:

1. **Technical Implementation**
   - Code quality and structure
   - Following best practices
   - Proper error handling

2. **Testing & Validation**
   - All CI checks pass
   - Local testing was thorough
   - Edge cases considered

3. **Documentation**
   - Clear PR description
   - Testing steps provided
   - Code is self-documenting

4. **Process Adherence**
   - Followed all guidelines
   - Proper branch and commit strategy
   - Professional communication

5. **Attention to Detail**
   - No leftover debug code
   - Clean, organized changes
   - Follows existing patterns

---

##  Good Luck!

We look forward to reviewing your submission. Remember:

- **Quality over speed** - Take time to do it right
- **Test thoroughly** - Catch issues before CI does
- **Follow the process** - All requirements exist for a reason
- **Ask questions** - If something is unclear, ask before submitting

