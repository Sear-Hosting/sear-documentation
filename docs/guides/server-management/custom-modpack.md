# How to Upload a Custom Modpack

This guide will walk you through the process of uploading and setting up a custom modpack on your Sear Hosting server.

## Prerequisites

- A valid Sear Hosting server
- Your custom modpack files ready for upload
- Access to your server's control panel

## Steps to Upload a Custom Modpack

### 1. Prepare Your Modpack

Before uploading, ensure your modpack meets these requirements:

- All mod files are compatible with your server version
- Mods are organized in the correct directory structure
- Config files are properly set up

### 2. Access the Upload Interface

1. Log into your Sear Hosting control panel
2. Navigate to your server dashboard
3. Look for the "File Manager" or "Modpack Management" section

### 3. Upload Process

1. Click on "Upload Custom Modpack"
2. Select your modpack files:
   - Use the bulk upload option for multiple files
   - Maintain the correct directory structure
3. Click "Upload" and wait for the process to complete

### 4. Post-Upload Configuration

1. Verify all files were uploaded successfully
2. Check the server's mod directory structure
3. Review server configurations

## Common Issues and Solutions

### Upload Size Limits

If you encounter upload size limits:
- Split your upload into smaller chunks
- Use FTP for larger files
- Contact support if needed

### File Structure Issues

Ensure your mods are in the correct locations:
```
server/
├── mods/          # Place mod files here
├── config/        # Configuration files
└── scripts/       # Custom scripts if any
```

### Compatibility Problems

If you encounter compatibility issues:
- Verify all mods are for the correct Minecraft version
- Check for mod conflicts
- Review server logs for specific errors

## Best Practices

1. **Backup First**: Always back up your server before uploading a new modpack
2. **Test Locally**: Test the modpack on a local instance first
3. **Document Changes**: Keep track of installed mods and configurations
4. **Version Control**: Maintain version information for future reference

## Additional Resources

- [Server Backup Guide](../features/backups.md)
- [Troubleshooting Crashes](../troubleshooting/server-crashes.md)
- [Mod Installation Guide](./install-mods.md)

## Need Help?

If you encounter any issues not covered in this guide:
1. Check the server logs for specific error messages
2. Review our [troubleshooting guide](../troubleshooting/server-crashes.md)
3. Contact our support team via the help desk