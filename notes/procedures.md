# Procedures

list of procedure describing the overall matcha api.

## USER

### signup

**Type** → `Mutation`  
**Path** → `user.signup`

**Request (Input)**  
```ts
{
  "email": string,
  "firstName": string,
  "lastName": string,
  "password": string,
}
```

### e-mail verification

**Type** → `Mutation`  
**Path** → `user.emailVerify`

**Request (Input)**  
```ts
{
  "token": string
}
```

### signin

**Type** → `Query`  
**Path** → `user.signin`

**Request (Input)**  
```ts
{
  "email": string,
  "paswword": string
}
```

### password reset

**Type** → `mutation`  
**Path** → `user.resetPassword`

**Request (Input)**  
```ts
{
  "email": string,
}
```

### pasword reset verify

**Type** → `Query`  
**Path** → `user.resetPasswordVerify`

**Request (Input)**  
```ts
{
  "paswword": string
}
```

### user photo

**Type** → `mutation`  
**Path** → `user.addPhotos`

**Request (Input)**  
```ts
{
  "photos": string
}
```

### user gender

**Type** → `mutation`  
**Path** → `user.setGender`

**Request (Input)**  
```ts
{
  "gender": string //(Enum?)
}
```

### user preference

**Type** → `mutation`
**Path** → `user.setPreference`

**Request (Input)**  
```ts
{
  "gender": string //(Enum ?)
}
```

### user bio

**Type** → `mutation`  
**Path** → `user.setBio`

**Request (Input)**  
```ts
{
  "bio": string
}
```

### user tags

**Type** → `mutation`  
**Path** → `user.setTags`

**Request (Input)**  
```ts
{
  "tags": List[string]
}
```

### user profile

**Type** → `Query`  
**Path** → `user.getById`

**Request (Input)**  
```ts
{
  "id": "string (uuid)"
}
```
**Response (Output)**
```ts
{
  "id": string,
  "email": string,
  "username": string,
  "firstName": string,
  "lastName": string,
  "gender": string,
  "rank": number // still have to define
  "preferences": string[],
  "bio": string,
  "tags": string[],
  "photos": string[],  // URLs or IDs main photo is the first occurence of the list
  "emailVerified": true,
}
```

## Match

## Chat

### conversations

**Type** → `query`  
**Path** → `chat.getConversations`

**Request (Output)**  
```ts
{
  conversations: [ 
    {
      "conversation_ids": string,
      "conversation_name": string
    }
  ]
}
```

### view conversation

**Type** → `query`  
**Path** → `chat.getConversation`

**Request (Output)**  
```ts
{
  messages: [
    {
      author: string, // Will it be a user id ?
      content: string,
      media: list[string], // url to the media
      createdAt: timestamp,
      updatedAt?: timestamp
    }
  ]
}
```

### edit conversation

**Type** → `mutation`  
**Path** → `chat.setConversationState`

**Request (Output)**  
```ts
{
    {
      isHided: boolean,
      isMuted: boolean,
      isBlocked: boolean, // Need to define it is related to both the user and the conversation or only on of them
    }
}
```

### send message

**Type** → `mutation`  
**Path** → `chat.sendMessage`

**Request (Input)**  
```ts
{
  content: string,
  media: list[string], // url to the media
}
```

### delete message

**Type** → `mutation`  
**Path** → `chat.deleteMessage`

**Request (Input)**  
```ts
{
  message_id: string,
}
```

## Notification

