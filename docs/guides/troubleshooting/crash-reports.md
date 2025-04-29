---
sidebar_position: 1
---

# Logs and Crash Reports

## Prerequisites
- Access to Sear server dashboard
- Basic understanding of log files
- Server operator permissions
- Text editor for log viewing

## Overview
This guide explains how to access, understand, and use server logs and crash reports to diagnose and resolve issues with your Minecraft server. Learn how to interpret different types of logs and extract meaningful information from crash reports.

## Accessing Server Logs

### 1. Dashboard Access
```yaml
# Log locations in dashboard
locations:
  - latest.log
  - crash-reports/
  - debug.log
  - server.log
```

### 2. File Structure
```
logs/
├── latest.log
├── debug/
│   └── debug-{date}.log
├── crash-reports/
│   └── crash-{timestamp}-server.txt
└── archived/
    └── {yyyy-MM-dd}/
```

## Types of Logs

### 1. Server Logs (latest.log)
```log
[12:34:56] [Server thread/INFO]: Starting Minecraft server version 1.19.2
[12:34:56] [Server thread/INFO]: Loading properties
[12:34:56] [Server thread/WARN]: Failed to load eula.txt
```

Common log levels:
- INFO: Normal operations
- WARN: Potential issues
- ERROR: Serious problems
- DEBUG: Detailed information

### 2. Crash Reports
```log
---- Minecraft Crash Report ----
// Who set us up the TNT?

Time: 2024-02-08 12:34:56
Description: Exception in server tick loop

java.lang.OutOfMemoryError: Java heap space
    at net.minecraft.server.level.ChunkMap.tick(ChunkMap.java:451)
    at net.minecraft.server.level.ServerLevel.tick(ServerLevel.java:382)
```

### 3. Debug Logs
```log
[FINE] [CustomPlugin]: Loading configuration
[FINEST] [CustomPlugin]: Initializing database connection
[FINE] [CustomPlugin]: Database connected successfully
```

## Understanding Crash Reports

### 1. Crash Report Structure
```yaml
sections:
  header:
    - timestamp
    - description
    - error type
  system_details:
    - operating_system
    - java_version
    - memory_allocation
  stack_trace:
    - error_location
    - call_sequence
  additional_info:
    - affected_entities
    - loaded_mods
    - server_stats
```

### 2. Common Crash Types
1. **Out of Memory (OOM)**
   ```log
   java.lang.OutOfMemoryError: Java heap space
   ```
   Solution:
   ```properties
   # server.properties
   -Xmx4G
   -Xms2G
   ```

2. **Stack Overflow**
   ```log
   java.lang.StackOverflowError
   at net.minecraft.world.level.chunk.LevelChunk
   ```
   Check for:
   - Infinite loops
   - Recursive calls
   - Plugin conflicts

3. **Mod Conflicts**
   ```log
   java.lang.NoSuchMethodError: 'void mod.class.method()'
   ```
   Resolution:
   - Update mods
   - Check compatibility
   - Remove conflicting mods

## Log Analysis

### 1. Key Information to Look For
```yaml
analysis_points:
  performance:
    - TPS drops
    - Memory usage
    - CPU spikes
  errors:
    - Exception traces
    - Plugin errors
    - Network issues
  security:
    - Login attempts
    - Console commands
    - Permission issues
```

### 2. Common Patterns
```log
# Performance issues
[WARNING]: Can't keep up! Is the server overloaded?

# Plugin conflicts
[ERROR]: Could not pass event PlayerJoinEvent to Plugin

# Network problems
[WARNING]: Failed to handle packet for player
```

## Troubleshooting Steps

### 1. Initial Analysis
1. Check latest.log
2. Review crash reports
3. Examine system resources
4. Note recent changes

### 2. Log Collection
```bash
# Collect relevant logs
1. latest.log
2. crash-reports/
3. debug logs
4. plugin logs
```

### 3. Problem Identification
```yaml
checklist:
  - Error messages
  - Stack traces
  - Timing reports
  - Plugin conflicts
  - Resource usage
```

## Advanced Debugging

### 1. Debug Mode
```properties
# server.properties
debug=true
debug.verbose=true
```

### 2. Timings Analysis
```minecraft
/timings on
/timings paste
```

### 3. Plugin Debugging
```yaml
plugin_debug:
  enabled: true
  level: FINEST
  separate_files: true
```

## Best Practices

### 1. Log Management
```yaml
management:
  rotation:
    enabled: true
    max_size: 100MB
    max_files: 10
  archival:
    enabled: true
    compression: true
    retention: 30d
```

### 2. Monitoring
- Regular log review
- Automated alerts
- Performance tracking
- Error pattern detection

### 3. Documentation
- Keep error logs
- Document solutions
- Track patterns
- Update procedures

## Related Guides
- [Server Crashes](server-crashes.md)
- [Performance Optimization](../server-management/server-customization.md)
- [Plugin Management](../server-management/install-plugins.md)

## Emergency Procedures
1. Collect crash reports
2. Analyze recent logs
3. Identify pattern
4. Implement solution
5. Monitor resolution
6. Document findings