---
sidebar_position: 1
---

# Backup System

## Prerequisites
- Access to Sear server dashboard
- Sufficient storage space
- Server operator permissions
- Basic understanding of file systems

## Overview
This guide explains how to effectively use Sear's backup system to protect your Minecraft server data. Learn how to create, manage, and restore backups to ensure your server's safety and continuity.

## Types of Backups

### 1. Manual Backups
Immediate backups created on-demand:
```bash
# Through dashboard
1. Navigate to Backups section
2. Click "Create Backup"
3. Add description (optional)
4. Select backup type
```

### 2. Automated Backups
Scheduled backups that run automatically:
```yaml
# Example backup schedule
schedule:
  frequency: daily
  time: "03:00"
  retention: 7
  type: full
```

### 3. Differential Backups
Space-efficient backups of changed files:
```yaml
backup:
  type: differential
  base: latest_full
  compress: true
```

## Creating Backups

### 1. Full Server Backup
1. Access backup dashboard
2. Select "Full Backup"
3. Configure options:
   ```yaml
   backup:
     world: true
     plugins: true
     configurations: true
     playerdata: true
   ```

### 2. World-Only Backup
1. Choose "World Backup"
2. Select worlds to backup
3. Set compression level
   ```yaml
   world_backup:
     compression: 9
     exclude_tmp: true
   ```

### 3. Configuration Backup
```yaml
config_backup:
  include:
    - "server.properties"
    - "bukkit.yml"
    - "spigot.yml"
    - "plugins/*/config.yml"
```

## Automatic Backup Scheduling

### 1. Configure Schedule
```yaml
schedule:
  daily:
    time: "03:00"
    type: full
  hourly:
    type: differential
    retain: 24
```

### 2. Retention Policy
```yaml
retention:
  full_backups: 7
  differential: 24
  minimum_size: 500MB
  maximum_age: 30d
```

## Backup Storage Management

### 1. Storage Options
```yaml
storage:
  local:
    path: "/backups"
    quota: "50GB"
  remote:
    type: "s3"
    bucket: "minecraft-backups"
```

### 2. Compression Settings
```yaml
compression:
  algorithm: "zstd"
  level: 3
  threads: 2
```

## Restore Procedures

### 1. Full Server Restore
1. Access backup list
2. Select backup version
3. Click "Restore Server"
4. Confirm action
   ```yaml
   restore:
     verify: true
     stop_server: true
     backup_current: true
   ```

### 2. Partial Restore
1. Choose specific elements:
   ```yaml
   partial_restore:
     worlds:
       - "world"
       - "world_nether"
     plugins:
       - "essentials"
     configurations: true
   ```

### 3. World Restore
```yaml
world_restore:
  name: "world"
  seed: keep
  entities: true
  structures: true
```

## Backup Verification

### 1. Automated Checks
```yaml
verify:
  integrity: true
  size_check: true
  corruption_check: true
```

### 2. Manual Verification
1. Download backup
2. Extract contents
3. Check file integrity
4. Test in staging environment

## Common Issues and Solutions

### 1. Backup Failures
- Check storage space
- Verify permissions
- Monitor backup logs
- Check file locks

### 2. Restore Issues
- Verify backup integrity
- Check version compatibility
- Ensure sufficient space
- Clear temporary files

### 3. Performance Impact
- Schedule during off-peak
- Use compression
- Implement rate limiting
- Monitor server load

## Best Practices

1. **Regular Backups**
   - Daily full backups
   - Hourly incremental
   - Weekly archives

2. **Storage Management**
   - Monitor space usage
   - Regular cleanup
   - Verify integrity
   - Test restores

3. **Documentation**
   - Label backups clearly
   - Document changes
   - Track restore tests
   - Keep backup logs

## Related Guides
- [Schedule Management](schedules.md)
- [Server Crashes](../troubleshooting/server-crashes.md)
- [Modpack Management](../server-management/modpack-management.md)

## Emergency Procedures
1. Create emergency backup
2. Stop server if needed
3. Verify backup integrity
4. Begin restore process
5. Document incident