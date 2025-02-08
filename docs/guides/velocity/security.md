---
sidebar_position: 2
---

# Velocity Security Guide

## Prerequisites
- Velocity proxy server installed
- Access to server configuration files
- Basic understanding of network security
- Server operator permissions

## Overview
This guide covers essential security practices for your Velocity proxy server, including configuration hardening, vulnerability prevention, and monitoring techniques to protect your network from common attacks.

## Basic Security Configuration

### 1. Authentication Settings
```toml
# velocity.toml
online-mode = true
prevent-client-proxy-connections = true
player-info-forwarding-mode = "modern"
```

### 2. Forwarding Secret
```toml
# velocity.toml
forwarding-secret = "use_a_secure_random_string_here"
```

Best practices for forwarding secret:
- Minimum 32 characters
- Mix of letters, numbers, symbols
- Unique per instance
- Regular rotation schedule

## Network Security

### 1. Firewall Configuration
```bash
# Allow only necessary ports
- 25577: Velocity
- 25565: Minecraft servers
- SSH port (if needed)
```

### 2. Rate Limiting
```toml
# velocity.toml
connection-throttle = 3000
login-throttle = 5000

[advanced]
connection-timeout = 5000
read-timeout = 30000
```

### 3. IP Forwarding Security
1. **Configure backend servers:**
   ```properties
   # server.properties
   velocity-modern-forwarding=true
   online-mode=false
   ```

2. **Verify configuration:**
   ```toml
   # velocity.toml
   player-info-forwarding-mode = "modern"
   ```

## Access Control

### 1. Permission Management
```yaml
# luckperms-velocity-config.yml
server-permissions:
  default:
    - velocity.server.lobby
  staff:
    - velocity.server.*
    - velocity.command.*
```

### 2. Command Restrictions
```yaml
commands:
  blacklist:
    - "op"
    - "deop"
    - "stop"
  whitelist:
    - "server"
    - "help"
```

## DDoS Protection

### 1. Connection Settings
```toml
# velocity.toml
[advanced]
compression-threshold = 256
compression-level = 6
initial-connection-timeout = 5000
```

### 2. Proxy Protection
1. **Enable BungeeCord IP forwarding:**
   ```properties
   # nginx configuration example
   proxy_protocol on;
   proxy_timeout 3s;
   ```

2. **Configure connection limits:**
   ```nginx
   limit_conn_zone $binary_remote_addr zone=conn_limit_per_ip:10m;
   limit_conn conn_limit_per_ip 10;
   ```

## Monitoring and Logging

### 1. Log Configuration
```toml
# velocity.toml
[log]
file = "velocity.log"
level = "info"
```

### 2. Important Events to Monitor
- Failed login attempts
- Unusual connection patterns
- Command execution
- Server switches
- Plugin errors

### 3. Logging Best Practices
1. Enable detailed logging
2. Regular log rotation
3. Secure log storage
4. Automated log analysis

## Plugin Security

### 1. Plugin Sources
- Use official sources
- Verify checksums
- Review permissions
- Keep updated

### 2. Safe Plugin Configuration
```yaml
# Example secure plugin config
plugin:
  commands:
    require-permission: true
  features:
    disable-unsafe: true
```

## Common Vulnerabilities

### 1. Protocol Exploitation
Prevention:
```toml
# velocity.toml
force-protocol-version = true
modern-forwarding = true
```

### 2. Authentication Bypass
Protection measures:
- Enable online mode
- Use modern forwarding
- Implement IP validation

### 3. Resource Exhaustion
Mitigation:
```toml
# velocity.toml
[advanced]
compression-threshold = 256
compression-level = 6
```

## Security Checklist

### 1. Initial Setup
- [ ] Strong forwarding secret
- [ ] Modern forwarding mode
- [ ] Proper authentication settings

### 2. Network
- [ ] Firewall rules configured
- [ ] Rate limiting enabled
- [ ] DDoS protection implemented

### 3. Access Control
- [ ] Permission system setup
- [ ] Command restrictions
- [ ] IP whitelist (if needed)

### 4. Monitoring
- [ ] Logging configured
- [ ] Alert system setup
- [ ] Regular log review

## Related Guides
- [Velocity Setup](setup.md)
- [Plugin Installation](../server-management/install-plugins.md)
- [Server Customization](../server-management/server-customization.md)

## Best Practices
1. Regular security audits
2. Keep software updated
3. Monitor server logs
4. Backup configurations
5. Document security policies
6. Test security measures
7. Plan incident response