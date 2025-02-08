---
sidebar_position: 3
---

# API Reference

Welcome to the Sear Hosting API documentation. Our API enables you to programmatically manage your hosting resources.

## Authentication

All API requests require authentication using an API key. To get your API key:

1. Log into your Sear Hosting account
2. Navigate to Account Settings
3. Generate an API key in the API section

Include your API key in the Authorization header:

```bash
Authorization: Bearer YOUR_API_KEY
```

## Base URL

All API requests should be made to:

```
https://api.sear.host/v1
```

## Endpoints

### Projects

#### List Projects

```http
GET /projects
```

Returns a list of your projects.

#### Create Project

```http
POST /projects
```

Create a new project.

Request body:
```json
{
  "name": "my-project",
  "type": "nodejs",
  "region": "us-east"
}
```

### Deployments

#### List Deployments

```http
GET /projects/{project_id}/deployments
```

Returns a list of deployments for a project.

#### Create Deployment

```http
POST /projects/{project_id}/deployments
```

Create a new deployment.

Request body:
```json
{
  "source": {
    "type": "github",
    "repository": "username/repo",
    "branch": "main"
  }
}
```

## Rate Limits

The API has a rate limit of 100 requests per minute per API key.

## Errors

The API uses conventional HTTP response codes to indicate the success or failure of requests:

- 2xx: Success
- 4xx: Client errors
- 5xx: Server errors

## Support

For API support:
- Join our [Discord community](https://discord.gg/searhosting)
- Email: support@sear.host