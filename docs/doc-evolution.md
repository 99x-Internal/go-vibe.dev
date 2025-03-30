# Documentation Evolution

Documentation evolution is the process of updating the documentation of a project to reflect the changes in the code. This is a very important part of the go-vibe process as it ensures that the documentation is always up to date with the code.

## Documentation Evolution Process

Documentation should be updated regularly to maintain alignment with code evolution. The following process helps ensure documentation remains current and valuable:

### Update Frequency

- **With Feature Completion**: Documentation should be updated whenever a significant feature is completed or modified
- **During Code Reviews**: Documentation updates should be included in pull requests and verified during code reviews
- **Sprint Cadence**: At minimum, documentation should be reviewed and updated at the end of each sprint
- **Quarterly Reviews**: Conduct comprehensive documentation reviews quarterly to ensure overall consistency and completeness

### Using AI-Assisted Documentation

Similar to the documentation creation process, team members can leverage AI tools to help update documentation:

1. Use saved prompts from the `prompts` folder to maintain consistency in documentation structure
2. Leverage tools like Cursor with claude-3.7-sonnet model to analyze code changes and suggest documentation updates
3. Pass both existing documentation and changed code to AI to generate appropriate updates

### Example Workflow

1. Identify code changes that require documentation updates
2. Locate the relevant markdown files in the `docs` directory
3. Use a saved prompt (similar to those in `doc-creation.md`):

   ```text
    # Doc Generation Prompt

    Analyze the provided code samples and update the existing Markdown documentation accordingly. If no documentation exists, generate a new one. When updating, ensure that the documentation remains concise, relevant, and structured for ease of understanding.

    - Identify and incorporate patterns from similar code samples to make the documentation more comprehensive and reusable.
    - Ensure the documentation is generic enough to support future code generation while maintaining clarity and accuracy.
    - Strictly document only the requested scope—avoid adding unrelated or unnecessary details.
    - You may add examples, however do not replicate content in docs where you are able to refer to the file location in the docs.
    - Document reference file locations as needed in the docs.

    Always update `docs/index.md` with the document file if it is not existing in the index.

   ```

4. Review the AI-generated documentation updates for accuracy
5. Commit documentation changes alongside or immediately following code changes

### Responsibility

Documentation evolution is a shared responsibility:

- **Developers**: Update documentation for their code changes
- **Tech Leads**: Ensure documentation updates are included in definition of done
- **Documentation Champions**: Designated team members who periodically review overall documentation quality

By following this process, the team ensures that documentation remains valuable, accurate, and aligned with the evolving codebase.
