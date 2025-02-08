# Installing Mods

This guide will walk you through the process of installing and managing mods on your Sear Hosting Minecraft server.

## Prerequisites
- Access to your Sear Hosting control panel
- The mod files you want to install (.jar format)
- Compatible Minecraft server version
- Forge or Fabric mod loader installed on your server

## Mod Installation Process

### Step 1: Access Your Server Files
1. Log in to your Sear Hosting control panel
2. Navigate to the File Manager
3. Go to the `mods` directory (create it if it doesn't exist)

### Step 2: Upload Mod Files
1. Click the "Upload" button in the File Manager
2. Select your mod file(s) (.jar format)
3. Wait for the upload to complete
4. Verify the mods appear in your mods directory

### Step 3: Server Restart
1. Save any ongoing game progress
2. Stop your Minecraft server
3. Start the server to load the new mods
4. Check the server console for any error messages

## Compatible Mod Formats

### Supported File Types
- `.jar` - Standard mod file format
- `.disabled` - Temporarily disabled mods (rename .jar to .disabled)

### Version Compatibility
- Always check mod compatibility with your Minecraft version
- Verify compatibility with your mod loader (Forge/Fabric)
- Test mods in a local environment before server deployment

## Best Practices for Mod Management

### Organization
- Keep a list of installed mods and their versions
- Create a backup before installing new mods
- Use clear naming conventions for mod files

### Performance Considerations
- Monitor server performance after installing new mods
- Remove unused mods to maintain optimal performance
- Start with fewer mods and add gradually as needed

### Security
- Download mods only from trusted sources:
  - CurseForge
  - Modrinth
  - Official mod websites
- Scan mod files for malware before installation
- Keep mods updated to patch security vulnerabilities

## Troubleshooting Common Issues

### Mod Conflicts
- Check server logs for conflict messages
- Remove mods one by one to identify conflicts
- Verify all mods are for the same Minecraft version

### Server Won't Start
1. Check the server logs for error messages
2. Verify mod loader compatibility
3. Remove recently added mods
4. Ensure all required dependencies are installed

### Performance Issues
- Monitor server resource usage
- Check for mod updates
- Consider removing resource-intensive mods
- Optimize mod configurations

## Related Guides
- [Custom Modpack Upload](custom-modpack.md)
- [Modpack Management](modpack-management.md)
- [Server Crashes](../troubleshooting/server-crashes.md)

## Support
If you encounter issues not covered in this guide, please contact Sear Hosting support through your control panel or visit our community forums for assistance.