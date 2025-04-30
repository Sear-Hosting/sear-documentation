---
sidebar_position: 5
---

# Server Customization

## Prerequisites
- Access to Sear server dashboard
- Server operator permissions
- Basic understanding of server.properties
- Image editor for server icon (optional)

## Overview
This guide covers various ways to customize your Minecraft server, including changing player capacity, customizing the Message of the Day (MOTD), setting up a server icon, and configuring additional features to make your server unique.

## Basic Server Settings

### Player Count Configuration
1. **Access Server Settings**
   - Log into server dashboard
   - Navigate to "Server Settings"
   - Locate "Player Capacity" section

2. **Adjust Max Players**
   ```properties
   # server.properties
   max-players=20
   ```
   - Consider server resources
   - Balance performance and capacity
   - Monitor server load

### Message of the Day (MOTD)

1. **Simple Text MOTD**
   ```properties
   # server.properties
   motd=Welcome to Our Server!\nNew Players Welcome!
   ```
   - Use `\n` for new line
   - Maximum 2 lines
   - Supports color codes

2. **Formatted MOTD**
   ```properties
   motd=§6§lWelcome to Our Server!§r\n§aNew Players Welcome!
   ```
   Common formatting codes:
   - §6 : Gold color
   - §a : Green color
   - §l : Bold
   - §r : Reset formatting

### Server Icon Setup

1. **Create Icon**
   - Use 64x64 pixel PNG
   - Save as "server-icon.png"
   - Keep file size small

2. **Upload Icon**
   1. Access server files
   2. Upload to root directory
   3. Restart server
   4. Verify in server list

## Advanced Customization

### Game Rules Configuration
```properties
# Custom game rules
gamerule doDaylightCycle false
gamerule keepInventory true
gamerule mobGriefing false
```

Common game rules:
1. **Environment Rules**
   - doDaylightCycle
   - doWeatherCycle
   - randomTickSpeed

2. **Gameplay Rules**
   - keepInventory
   - mobGriefing
   - doMobSpawning

### Server Properties

1. **Difficulty Settings**
   ```properties
   difficulty=normal
   hardcore=false
   ```

2. **World Settings**
   ```properties
   level-seed=
   level-type=default
   generator-settings=
   ```

3. **Network Settings**
   ```properties
   network-compression-threshold=256
   prevent-proxy-connections=false
   ```

### Resource Pack Integration

1. **Setup Resource Pack**
   ```properties
   resource-pack=URL_TO_RESOURCE_PACK
   resource-pack-sha1=PACK_SHA1_HASH
   ```

2. **Configuration Options**
   ```properties
   require-resource-pack=false
   resource-pack-prompt=Welcome message
   ```

## Performance Optimization

### Memory Allocation
```properties
# startup flags
-Xms2G
-Xmx4G
```

1. **Guidelines**
   - Minimum 2GB RAM
   - Maximum based on server plan
   - Leave room for system

2. **Optimization Tips**
   - View distance: 8-12
   - Entity distance: 4-6
   - Simulation distance: 6-10

### World Settings
```properties
view-distance=10
simulation-distance=8
entity-broadcast-range-percentage=100
```

## Additional Features

### Server Permissions
1. **Default Groups**
   ```yaml
   groups:
     default:
       permissions:
         - minecraft.command.help
     moderator:
       permissions:
         - minecraft.command.kick
         - minecraft.command.ban
   ```

2. **Custom Commands**
   ```yaml
   commands:
     welcome:
       description: Welcome new players
       usage: /welcome <player>
   ```

### World Border
```properties
world-border-size=5000
world-border-center-x=0
world-border-center-z=0
```

## Common Issues and Solutions

### MOTD Not Updating
1. Check formatting syntax
2. Clear server cache
3. Restart server
4. Verify in server.properties

### Icon Not Displaying
1. Confirm file name
2. Check image dimensions
3. Verify PNG format
4. Clear client cache

### Performance Issues
1. Review memory allocation
2. Check view distance
3. Monitor TPS
4. Optimize world settings

## Related Guides
- [Plugin Installation](install-plugins.md)
- [Modpack Management](modpack-management.md)
- [Backup System](../features/backups.md)

## Best Practices
1. Document all changes
2. Test in staging environment
3. Monitor performance impact
4. Regular configuration review
5. Backup before major changes