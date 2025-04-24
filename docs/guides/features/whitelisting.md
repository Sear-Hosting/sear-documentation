---
sidebar_position: 3
---

# Server Whitelisting

## Prerequisites
- Access to Sear server dashboard
- Server operator permissions
- Basic understanding of Minecraft permissions
- Player usernames or UUIDs

## Overview
This guide explains how to use the whitelist system to control who can join your Minecraft server. Learn how to enable, configure, and manage the whitelist to maintain a controlled player base and improve server security.

## Enabling Whitelist

### 1. Through Server Dashboard
```yaml
# Quick enable steps
1. Navigate to Security settings
2. Find Whitelist section
3. Toggle "Enable Whitelist"
4. Save changes
```

### 2. Using Server Commands
```minecraft
# In-game or console
/whitelist on
/whitelist off
```

### 3. Configuration File
```properties
# server.properties
white-list=true
enforce-whitelist=true
```

## Managing Whitelisted Players

### 1. Adding Players
```minecraft
# Single player
/whitelist add playername

# Multiple players
/whitelist add player1 player2 player3
```

### 2. Removing Players
```minecraft
# Remove individual
/whitelist remove playername

# Clear entire list
/whitelist clear
```

### 3. Bulk Management
```yaml
# whitelist.json
{
  "whitelist": [
    {
      "uuid": "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx",
      "name": "player1"
    },
    {
      "uuid": "yyyyyyyy-yyyy-yyyy-yyyy-yyyyyyyyyyyy",
      "name": "player2"
    }
  ]
}
```

## Whitelist Configurations

### 1. Basic Settings
```properties
# server.properties
white-list=true
enforce-whitelist=true
whitelist-message=Custom kick message for non-whitelisted players
```

### 2. Permission Integration
```yaml
# permissions.yml
permissions:
  whitelist.bypass: false
  whitelist.manage: op
  whitelist.view: true
```

### 3. Advanced Configuration
```yaml
whitelist:
  auto_add:
    enabled: true
    conditions:
      - playtime: ">2h"
      - infractions: 0
  auto_remove:
    enabled: true
    triggers:
      - inactive: ">30d"
      - banned: true
```

## Whitelist Commands

### 1. Basic Commands
```minecraft
/whitelist add <player>    # Add player
/whitelist remove <player> # Remove player
/whitelist list           # Show all whitelisted players
/whitelist on            # Enable whitelist
/whitelist off           # Disable whitelist
/whitelist reload        # Reload whitelist from file
```

### 2. Advanced Commands
```minecraft
/whitelist import <file>   # Import from file
/whitelist export <file>   # Export to file
/whitelist query <player>  # Check player status
```

## Automated Management

### 1. API Integration
```javascript
// Example API endpoint usage
POST /api/whitelist/add
{
  "player": "username",
  "duration": "30d",
  "reason": "Approved application"
}
```

### 2. Scheduled Tasks
```yaml
schedules:
  whitelist_cleanup:
    frequency: weekly
    actions:
      - remove_inactive
      - validate_entries
      - backup_list
```

## Best Practices

### 1. Security
- Regular list audits
- Backup whitelist file
- Document changes
- Validate entries

### 2. Management
```yaml
management:
  backup_frequency: daily
  validation_checks: true
  notification_system: true
  logging:
    enabled: true
    format: "[Whitelist] {action} by {operator}"
```

### 3. Documentation
```yaml
documentation:
  required_info:
    - player_name
    - addition_date
    - added_by
    - reason
  tracking:
    enabled: true
    history_length: 90d
```

## Common Issues and Solutions

### 1. UUID Conflicts
- Verify player names
- Check UUID format
- Clear cache
- Reload whitelist

### 2. Synchronization Issues
- Restart server
- Reload whitelist
- Check file permissions
- Verify file format

### 3. Permission Problems
- Check operator status
- Verify command permissions
- Review permission nodes
- Update configurations

## Integration with Other Systems

### 1. Permission Systems
```yaml
luckperms:
  auto_group:
    whitelisted: true
    default_group: "member"
```

### 2. Application Systems
```yaml
applications:
  auto_whitelist:
    enabled: true
    requirements:
      - form_completed
      - rules_accepted
      - age_verified
```

## Related Guides
- [Server Security](../velocity/security.md)
- [Schedule Management](schedules.md)
- [Server Customization](../server-management/server-customization.md)

## Best Practices
1. Regular whitelist audits
2. Document all changes
3. Maintain backups
4. Test regularly
5. Clear communication
6. Monitor access patterns
7. Update procedures