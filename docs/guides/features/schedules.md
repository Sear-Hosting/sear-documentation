---
sidebar_position: 2
---

# Schedule Management

## Prerequisites
- Access to Sear server dashboard
- Server operator permissions
- Basic understanding of cron syntax (optional)
- Server management experience

## Overview
This guide covers the schedule management system in Sear, allowing you to automate server tasks, maintenance, backups, and other routine operations to keep your server running smoothly.

## Types of Schedules

### 1. Server Tasks
```yaml
tasks:
  restart:
    type: server_restart
    schedule: "0 4 * * *"  # Daily at 4 AM
    warning: true
  
  backup:
    type: backup
    schedule: "0 */6 * * *"  # Every 6 hours
```

### 2. Maintenance Windows
```yaml
maintenance:
  weekly:
    day: "Sunday"
    time: "03:00"
    duration: "2h"
    tasks:
      - backup
      - cleanup
      - optimize
```

### 3. Custom Commands
```yaml
commands:
  broadcast:
    command: "broadcast Server reset in 5 minutes"
    schedule: "*/5 * * * *"  # Every 5 minutes
```

## Creating Schedules

### 1. Basic Schedule
1. Access Schedule Manager
2. Click "New Schedule"
3. Configure basic settings:
   ```yaml
   schedule:
     name: "Daily Restart"
     enabled: true
     timing:
       type: daily
       time: "04:00"
   ```

### 2. Advanced Scheduling
```yaml
schedule:
  name: "Complex Maintenance"
  type: recurring
  pattern: "0 */4 * * *"  # Every 4 hours
  conditions:
    player_count: "<10"
    cpu_usage: "<70%"
    memory_available: ">2G"
```

### 3. Task Chains
```yaml
chain:
  name: "Full Maintenance"
  steps:
    1:
      action: "broadcast"
      message: "Maintenance starting in 5 minutes"
    2:
      action: "wait"
      duration: "5m"
    3:
      action: "save-all"
    4:
      action: "backup"
    5:
      action: "restart"
```

## Schedule Types

### 1. Time-Based
```yaml
timing:
  hourly:
    minute: 0
  daily:
    time: "04:00"
  weekly:
    day: "Sunday"
    time: "03:00"
  monthly:
    day: 1
    time: "02:00"
```

### 2. Event-Based
```yaml
events:
  player_count:
    condition: ">50"
    action: "expand_resources"
  memory_usage:
    condition: ">90%"
    action: "restart_warning"
```

### 3. Conditional
```yaml
conditions:
  performance:
    tps: "<18"
    memory: ">90%"
    actions:
      - clear_entities
      - gc_collect
```

## Managing Multiple Schedules

### 1. Priority System
```yaml
priorities:
  backup: 100
  restart: 90
  maintenance: 80
  broadcast: 50
```

### 2. Conflict Resolution
```yaml
conflicts:
  resolve: "priority"  # or "skip" or "queue"
  minimum_gap: "15m"
  queue_timeout: "1h"
```

### 3. Schedule Groups
```yaml
groups:
  maintenance:
    schedules:
      - weekly_backup
      - daily_restart
      - cleanup
    conditions:
      concurrent: false
      order: sequential
```

## Notifications

### 1. In-Game Notifications
```yaml
notifications:
  in_game:
    enabled: true
    format: "&c[Schedule] &f{message}"
    countdown:
      enabled: true
      intervals: [30m, 15m, 5m, 1m]
```

### 2. External Notifications
```yaml
notifications:
  discord:
    enabled: true
    webhook: "URL"
    events: [start, complete, fail]
  email:
    enabled: true
    recipients: ["admin@example.com"]
    events: [fail]
```

## Monitoring and Logs

### 1. Schedule Logs
```yaml
logging:
  level: info
  format: "[{timestamp}] {schedule}: {status}"
  retention: 30d
```

### 2. Performance Impact
```yaml
monitoring:
  metrics:
    - execution_time
    - server_impact
    - success_rate
  alerts:
    threshold: 5
    notification: true
```

## Common Issues and Solutions

### 1. Timing Issues
- Check server timezone
- Verify cron syntax
- Monitor execution logs
- Test in isolation

### 2. Task Failures
- Review error logs
- Check permissions
- Verify conditions
- Test dependencies

### 3. Resource Conflicts
- Adjust priorities
- Stagger schedules
- Monitor resource usage
- Implement queuing

## Best Practices

1. **Schedule Planning**
   - Coordinate maintenance windows
   - Consider time zones
   - Account for peak hours
   - Plan for holidays

2. **Resource Management**
   - Monitor performance impact
   - Stagger heavy tasks
   - Set resource limits
   - Use conditionals

3. **Documentation**
   - Document all schedules
   - Keep change history
   - Track dependencies
   - Update procedures

## Related Guides
- [Backup System](backups.md)
- [Server Customization](../server-management/server-customization.md)
- [Server Crashes](../troubleshooting/server-crashes.md)

## Emergency Procedures
1. Disable all schedules
2. Address critical issues
3. Test individual tasks
4. Re-enable gradually
5. Monitor stability