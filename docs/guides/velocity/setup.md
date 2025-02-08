---
sidebar_position: 1
---

# Velocity Proxy Setup

## Prerequisites
- Sear hosting account
- Access to server dashboard
- Basic understanding of server networking
- Multiple Minecraft servers (for proxy setup)

## Overview
This guide walks you through setting up a Velocity proxy server on Sear hosting. Velocity is a modern, high-performance Minecraft proxy server that allows you to connect multiple Minecraft servers together, creating a seamless network experience for your players.

## Initial Setup

### 1. Create Velocity Server
1. Log into Sear dashboard
2. Click "Create New Server"
3. Select "Velocity" as server type
4. Choose server resources:
   ```properties
   Recommended minimum:
   - RAM: 512MB
   - CPU: 1 core
   ```

### 2. Basic Configuration
1. Access the `velocity.toml` file:
   ```toml
   # Basic server configuration
   bind = "0.0.0.0:25577"
   motd = "&#09ADD3Welcome to our network!"
   show-max-players = 500
   
   # Player info forwarding mode
   player-info-forwarding-mode = "modern"
   
   # Online mode should match your backend servers
   online-mode = true
   
   # Force clients to match server version
   force-protocol-version = true
   ```

2. Configure try list:
   ```toml
   [servers]
   lobby = "lobby.example.com:25565"
   survival = "survival.example.com:25565"
   creative = "creative.example.com:25565"
   
   [forced-hosts]
   "lobby.example.com" = ["lobby"]
   "survival.example.com" = ["survival"]
   "creative.example.com" = ["creative"]
   
   [try]
   default = ["lobby"]
   ```

## Network Configuration

### 1. Port Forwarding
1. Access server network settings
2. Forward default port (25577)
3. Configure firewall rules
4. Test connectivity

### 2. Backend Server Setup
1. **Configure each backend server:**
   ```properties
   # server.properties
   online-mode=false
   velocity-modern-forwarding=true
   ```

2. **Set forwarding secret:**
   ```toml
   # velocity.toml
   forwarding-secret = "your_secure_secret_here"
   ```

## Advanced Configuration

### 1. Load Balancing
```toml
[servers]
lobby-1 = "lobby1.example.com:25565"
lobby-2 = "lobby2.example.com:25565"

[load-balance]
lobby = ["lobby-1", "lobby-2"]
```

### 2. Server Attempts
```toml
[servers]
# Configure multiple attempt servers
attempt-1 = "attempt1.example.com:25565"
attempt-2 = "attempt2.example.com:25565"

[try]
default = ["attempt-1", "attempt-2"]
```

## Plugin Integration

### 1. Install Plugins
1. Download Velocity-compatible plugins
2. Place in `plugins` folder
3. Restart proxy server

### 2. Common Plugins
```yaml
Essential plugins:
- LuckPerms (permissions)
- VelocityChat (chat management)
- Plan (statistics)
- ProxyMonitor (monitoring)
```

## Testing and Verification

### 1. Connection Testing
1. Start Velocity server
2. Start all backend servers
3. Test connections from client
4. Verify server switching

### 2. Monitoring
```bash
# Common monitoring commands
/velocity info
/velocity reload
/velocity server list
```

## Troubleshooting

### Connection Issues
1. **Unable to Connect**
   - Verify port forwarding
   - Check server status
   - Confirm IP configurations

2. **Authentication Failures**
   - Verify online-mode settings
   - Check forwarding-secret
   - Confirm player-info-forwarding-mode

### Performance Issues
1. **High Latency**
   - Monitor network usage
   - Check server resources
   - Optimize configurations

2. **Server Switching Problems**
   - Verify try list configuration
   - Check server availability
   - Review connection logs

## Related Guides
- [Velocity Security](security.md)
- [Server Customization](../server-management/server-customization.md)
- [Plugin Installation](../server-management/install-plugins.md)

## Best Practices
1. Use secure forwarding secrets
2. Implement proper load balancing
3. Regular plugin updates
4. Monitor server performance
5. Backup configurations regularly
6. Document network topology
7. Test failover scenarios