# Code generation

AI-powered code generation tools like Cursor can significantly enhance developer productivity when used effectively. This document outlines how to use these tools and provides best practices for optimal results.

## Providing project context to AI agents

- **IDE rules**: Use IDE-specific rules (like `.cursor/rules/*.mdc` files) to define coding patterns and standards as described in [docs/ide-rules.md](./ide-rules.md).
- **Document-first approach**: Maintain comprehensive markdown documentation in your repository that describes the architecture, patterns, and design decisions of your project. This serves as context for AI tools. See [docs/doc-creation.md](./doc-creation.md) for more details.
- **Reference your documentation**: When prompting AI tools, reference relevant documentation files to provide necessary context. For example: `@architecture.md` or `@api-design.md`.

## Effective code generation workflow

1. **Prepare your documentation**: Ensure your documentation is up-to-date before starting a new code generation task.
2. **Select the appropriate mode**:
   - **Agent mode**: For complex tasks requiring exploration of the codebase and multiple steps
   - **Edit mode**: For precise modifications to existing files
   - **Ask mode**: For quick questions or clarifications about the code

3. **Iterative approach**: Generate code incrementally, reviewing and refining after each generation step.

## Best practices

- **Commit code often**: Make frequent commits after successful AI-generated code additions. This enables easy rollback if needed.
- **Clean prompt threads**: Regularly start new threads to limit context bloat, which can degrade AI performance over time.
- **Use branches strategically**:
  - Create separate branches for different areas of AI prompting to avoid mixing concerns
  - Use multiple branches to work with multiple AI instances simultaneously on different parts of your codebase
  - Merge branches only after thorough review and testing
- **Verify and test**: Always review, verify, and test AI-generated code before committing.
- **Learn from AI suggestions**: Use AI as a learning tool by understanding the patterns and solutions it provides.
- **Document reusable prompts**: Keep a record of effective prompts for reuse in similar situations.
