---
sidebar_position: 4
---

# Modpack Management

## Prerequisites
- Access to Sear server dashboard
- Server operator permissions
- Basic understanding of Minecraft modpacks
- Server backup capabilities

## Overview
This guide covers how to effectively manage modpacks on your Sear server, including switching between different modpacks, updating existing modpacks, and maintaining server stability during modpack changes.

## Managing Modpacks

### Switching Between Modpacks

1. **Backup Current Server**
   ```bash
   # Through server dashboard
   1. Navigate to Backups section
   2. Click "Create Backup"
   3. Label it with current modpack name
   ```

2. **Download Current World**
   - Save your current world files
   - Document any custom configurations
   - Export player data if needed

3. **Select New Modpack**
   1. Go to "Modpack Management"
   2. Choose from available modpacks or upload custom
   3. Review modpack requirements:
      - RAM requirements
      - Disk space needed
      - Java version compatibility

4. **Install New Modpack**
   1. Click "Install Modpack"
   2. Wait for installation to complete
   3. Review installation logs
   4. Verify file integrity

5. **Server Configuration**
   1. Adjust server settings for new modpack
   2. Update server resources (RAM, CPU)
   3. Configure new mod settings
   4. Import previous world if compatible

### Updating Existing Modpacks

1. **Pre-Update Checklist**
   - Create full server backup
   - Note current configurations
   - Check modpack update notes
   - Plan for downtime

2. **Update Process**
   1. Access modpack settings
   2. Check for available updates
   3. Review change log
   4. Begin update process
   ```yaml
   # Example update configuration
   update:
     backup: true
     verify: true
     rollback: enabled
     notifications: true
   ```

3. **Post-Update Tasks**
   - Verify server starts correctly
   - Check mod functionality
   - Update configuration files
   - Test key features

## Backup Recommendations

### Regular Backups
1. **Automated Daily Backups**
   - Configure in server dashboard
   - Set retention period
   - Verify backup integrity

2. **Manual Backups Before Changes**
   - Pre-update backups
   - Pre-modification backups
   - World save backups

### Backup Storage
- Keep multiple backup versions
- Use separate storage location
- Implement backup rotation
- Test backup restoration

## Common Issues and Solutions

### Modpack Won't Switch
1. Check server resources
2. Verify file permissions
3. Clear temporary files
4. Review error logs

### Update Failures
1. **Memory Issues**
   - Increase allocated RAM
   - Clear temporary files
   - Restart server

2. **Compatibility Problems**
   - Check Java version
   - Verify mod dependencies
   - Review forge/fabric versions

### World Compatibility
1. **Different Versions**
   - Use world converter tools
   - Remove incompatible blocks
   - Backup before conversion

2. **Missing Mods**
   - Identify required mods
   - Install missing dependencies
   - Update mod configurations

## Best Practices

1. **Documentation**
   - Keep modpack version history
   - Document configuration changes
   - Maintain mod lists
   - Record server settings

2. **Testing**
   - Test updates in staging
   - Verify mod compatibility
   - Check world conversion
   - Test backup restoration

3. **Communication**
   - Notify players of changes
   - Schedule maintenance windows
   - Provide update details
   - Share new features

4. **Maintenance**
   - Regular mod updates
   - Clean old files
   - Monitor performance
   - Update configurations

## Related Guides
- [Custom Modpack Upload](custom-modpack.md)
- [Server Customization](server-customization.md)
- [Backup System](../features/backups.md)

## Troubleshooting Tips
1. Always check logs first
2. Verify resource allocation
3. Test in safe environment
4. Keep rollback points
5. Document all changes