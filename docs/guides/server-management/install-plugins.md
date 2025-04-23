---
sidebar_position: 3
---

# Plugin Installation Guide

## Prerequisites
- Access to your Sear server dashboard
- Server operator or administrator permissions
- Compatible server type (Bukkit, Spigot, or Paper)

## Overview
This guide walks you through the process of installing and managing plugins on your Minecraft server. Plugins extend your server's functionality by adding new features, commands, and management tools.

## Step-by-Step Installation

### 1. Choose Compatible Plugins
- Verify plugin compatibility with your server type (Bukkit/Spigot/Paper)
- Check the plugin's required Minecraft version matches your server
- Review plugin dependencies to ensure all requirements are met

### 2. Upload Plugin Files
1. Log in to your Sear server dashboard
2. Navigate to the "Plugins" section
3. Click the "Upload Plugin" button
4. Select your .jar plugin file
5. Wait for the upload to complete

### 3. Install and Enable the Plugin
1. Once uploaded, locate the plugin in your plugins list
2. Click "Install" next to the plugin name
3. Wait for the installation to complete
4. Restart your server when prompted

### 4. Configure the Plugin
1. After server restart, check console for plugin startup messages
2. Navigate to the `plugins/[PluginName]` directory
3. Edit the configuration files as needed
4. Use in-game commands or the web interface for additional configuration

## Managing Multiple Plugins

### Plugin Load Order
1. Core plugins should load first
2. Dependency plugins next
3. Feature plugins last

To adjust load order:
```yaml
# server.properties
plugin-loading-priority:
  - CorePlugin
  - DependencyPlugin
  - FeaturePlugin
```

### Plugin Conflicts
- Keep plugins updated to latest stable versions
- Monitor server logs for compatibility warnings
- Test new plugins on a staging server first
- Remove conflicting plugins before adding new ones

## Common Issues and Solutions

### Plugin Won't Load
- Verify file permissions are correct
- Check server log for error messages
- Ensure all dependencies are installed
- Confirm plugin version matches server version

### Configuration Errors
- Reset plugin configuration to defaults
- Check configuration file syntax
- Review plugin documentation for correct settings
- Contact plugin support for assistance

### Performance Impact
- Monitor server performance after installing new plugins
- Use /timings command to identify performance issues
- Consider removing unused plugins
- Optimize plugin configurations

## Security Considerations
- Only download plugins from trusted sources
- Keep plugins updated to patch security vulnerabilities
- Review plugin permissions and access levels
- Monitor plugin behavior for unexpected changes

## Related Guides
- [Installing Mods](install-mods.md)
- [Server Customization](server-customization.md)
- [Modpack Management](modpack-management.md)

## Best Practices
1. Always backup your server before installing new plugins
2. Test plugins on a staging server first
3. Keep a list of installed plugins and their purposes
4. Regularly update plugins for security and features
5. Remove unused plugins to maintain performance