# Create Post API (Frontend Docs)

## Endpoint

- **Method:** `POST`
- **URL:** `/api/v1/post/create`
- **Auth:** Required (`Authorization: Bearer <token>`)
- **Content-Type:** `application/json` or `multipart/form-data`

---

## Request Body

### Common Fields (all post types)

- `groupId` (string, required)
- `type` (string, required): `SIMPLE` | `EVENT` | `POLL`
- `taggedUsers` (optional):
  - either `string[]` (array of user ids)
  - or `{ id: string }[]`
  - if using multipart, you can send as JSON string

---

## Type-wise Payload

### 1) SIMPLE Post

Required:
- `simplePost.content` (string)

Optional:
- `simplePost.image` (string URL)
- multipart file upload field: `image` (if file sent, backend stores and uses uploaded URL)

Example (JSON):

```json
{
  "groupId": "group_uuid",
  "type": "SIMPLE",
  "taggedUsers": ["user_uuid_1", "user_uuid_2"],
  "simplePost": {
    "content": "Weekend meetup plan?",
    "image": "https://cdn.example.com/post-image.jpg"
  }
}
```

---

### 2) EVENT Post

Required:
- `eventPost.eventName` (string)
- `eventPost.eventDescription` (string)
- `eventPost.eventStartDate` (ISO date string)
- `eventPost.eventEndDate` (ISO date string)
- `eventPost.eventLocation` (string)

Optional:
- `eventPost.eventImage` (string URL)
- `eventPost.notes` (string)
- `eventPost.eventRoles` (array):
  - `roleName` (string)
  - `roleDescription` (string)
- multipart file upload field: `image` (used as fallback for event image)

Example (JSON):

```json
{
  "groupId": "group_uuid",
  "type": "EVENT",
  "taggedUsers": [{ "id": "user_uuid_1" }],
  "eventPost": {
    "eventName": "Community Cleanup",
    "eventDescription": "Join us for cleanup drive.",
    "eventStartDate": "2026-05-10T09:00:00.000Z",
    "eventEndDate": "2026-05-10T12:00:00.000Z",
    "eventLocation": "Central Park",
    "eventImage": "https://cdn.example.com/event-cover.jpg",
    "notes": "Wear comfortable shoes",
    "eventRoles": [
      { "roleName": "Volunteer", "roleDescription": "On-ground support" },
      { "roleName": "Photographer", "roleDescription": "Cover event moments" }
    ]
  }
}
```

---

### 3) POLL Post

Required:
- `poll.pollQuestion` (string)
- `poll.pollOptions` (string[], minimum 2 non-empty options)

Example (JSON):

```json
{
  "groupId": "group_uuid",
  "type": "POLL",
  "taggedUsers": [],
  "poll": {
    "pollQuestion": "Best day for meetup?",
    "pollOptions": ["Friday", "Saturday", "Sunday"]
  }
}
```

---

## Success Response

- **Status:** `201`

```json
{
  "message": "Post created successfully",
  "data": {
    "post": {
      "id": "post_uuid",
      "type": "SIMPLE",
      "userId": "user_uuid",
      "groupId": "group_uuid",
      "taggedUsers": [],
      "simplePost": {
        "id": "simple_post_uuid",
        "postId": "post_uuid",
        "content": "Weekend meetup plan?",
        "image": null
      },
      "eventPost": null,
      "poll": null,
      "createdAt": "2026-04-29T17:00:00.000Z",
      "updatedAt": "2026-04-29T17:00:00.000Z"
    }
  },
  "success": true
}
```

> Note: response includes only the matching detail object (`simplePost` or `eventPost` or `poll`) and others are `null`.

---

## Validation Errors (400)

Possible messages:

- `groupId and valid type (SIMPLE | EVENT | POLL) are required`
- `simplePost.content is required for SIMPLE post`
- `eventPost.eventName, eventDescription, eventStartDate, eventEndDate, eventLocation are required`
- `poll.pollQuestion and at least 2 poll.pollOptions are required`
- `poll.pollOptions must include at least 2 non-empty options`

---

## Auth Error (401)

If token missing/invalid:

```json
{
  "statusCode": 401,
  "message": "Unauthorized",
  "status": "401"
}
```

---

## Multipart Example (Simple Post with image file)

Use `multipart/form-data`:

- `groupId`: `group_uuid`
- `type`: `SIMPLE`
- `simplePost[content]`: `Hello from FE`
- `taggedUsers`: `["user_uuid_1","user_uuid_2"]` (JSON string)
- `image`: file

Headers:

- `Authorization: Bearer <token>`

