# Connection Issues Troubleshooting Guide

## Problem: Friends Unable to Connect to Your Server

Sometimes you might encounter a situation where some players can connect to your server while others consistently receive connection timeouts. This document provides steps to diagnose and resolve these issues.

## Common Symptoms

- Player gets "Connection timed out" error
- Player cannot see the server MOTD when attempting to connect
- Player can connect to other servers (like Hypixel) but not your specific server

## Troubleshooting Steps

### 1. Verify Server Visibility

First, confirm your server is publicly visible:
- Use [mcsrvstat.us](https://mcsrvstat.us/) to check if your server is properly visible online
- Verify that at least one person besides yourself can connect successfully

### 2. DNS Resolution Issues

One of the most common issues is DNS resolution problems on the player's end.

**Solution: Change DNS Settings**

Have the player change their DNS settings to use Cloudflare's DNS:
1. Follow the guide at [Cloudflare DNS Setup](https://developers.cloudflare.com/1.1.1.1/setup/windows/)
2. Set DNS resolver to 1.1.1.1
3. Restart Minecraft after making changes

### 3. Firewall Restrictions

Windows Firewall or other security software might be blocking connections.

**Testing Firewall Issues:**
1. **CAUTION:** Temporarily disable Windows Firewall (not recommended for regular use)
2. Try connecting to the server
3. If successful, immediately re-enable the firewall
4. Configure proper exceptions for Minecraft

**Configuring Firewall Exceptions:**
1. Open Windows Defender Firewall
2. Select "Allow an app or feature through Windows Defender Firewall"
3. Click "Change settings" and then "Allow another app"
4. Browse to locate the Minecraft launcher or java.exe
5. Select the application and ensure both "Private" and "Public" networks are checked
6. Click "OK" to save changes

### 4. VPN or Network Interference

If the player's network is restricting gaming connections:

**Possible solutions:**
- Try using a trusted VPN service (only if allowed by server rules)
- Connect from a different network (e.g., mobile hotspot) to test if ISP is blocking connections

### 5. Mod Compatibility

If running a modded server (like Forge):

- Ensure the player has exactly the same mod versions as the server
- Verify Forge version matches exactly with server (e.g., 1.20.1 Forge version)
- Try connecting with a clean Forge installation without additional mods

## After Each Change

Remember to have the player:
1. Completely close Minecraft
2. Restart the Minecraft launcher
3. Try connecting again

## Still Having Problems?

If none of these solutions work, consider:
- Checking server logs for any specific errors when the player attempts to connect
- Having the player share their logs from `.minecraft/logs/latest.log`
- Reviewing your server configuration for any potential IP restrictions
