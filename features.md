## IV.1 Registration and Signing-in

- [ ] Register user with the following fields: last name, first name, username, email, password
- [ ] Email verification via unique link before user can sign in
- [ ] Secure password policy (e.g. min. 8 chars, upper/lowercase, numbers)
- [ ] Show success message after registration
- [ ] Login with username and password
- [ ] Error handling for invalid credentials or unverified account
- [ ] "Forgot password?" link redirects to password reset flow
- [ ] Logout button visible from anywhere on the site
- [ ] On logout, redirect user to homepage or login page

## IV.2 User Profile

### 🧑‍🎤 Complete Profile

- [ ] Gender selection (simple list)
- [ ] Sexual preference selection
- [ ] Biography with min. 42 characters and restricted words moderation
- [ ] List of tags (dev-defined or user-generated)
- [ ] Profile pictures: 1 minimum, 5 maximum
- [ ] User designates one main profile picture

### 🛠️ Edit Profile Page

- [ ] Accessible at any time
- [ ] Fully responsive
- [ ] Profile page and dropdown in navbar:
  - [ ] See profile
  - [ ] Modify profile
  - [ ] Settings
  - [ ] Disconnect
- [ ] On mobile: dropdown with ⚙️ icon

### 👁️ Viewed Profiles

- [ ] Automatically saves viewed profiles with date
- [ ] Max 1 view per user per day
- [ ] Views can be cleaned by user or auto-deleted after 30 days
- [ ] Sections:
  - [ ] How you look to others
  - [ ] Recently visited
  - [ ] Who viewed you
- [ ] Icon/badge showing profiles seen
- [ ] Anonymous view mode (optional)
- [ ] Filters: date, age, etc.
- [ ] Notifications: “🔥 Sofiane saw your profile”
- [ ] Premium features (à la LinkedIn)
- [ ] Cross-match view (🔄)
- [ ] Optimizations:
  - [ ] Pagination or infinite scroll

### ❤️ Like System

- [ ] Save profile likes with date
- [ ] Sections:
  - [ ] Who liked you
  - [ ] Like history
- [ ] Like button accessible on user profiles
- [ ] Icon/badge for liked profiles
- [ ] Premium features
- [ ] Cross-match like (🔄)
- [ ] Notifications: “💖 Sofiane liked your profile!” (WebSocket or similar)

### 🌟 Fame Rating

- [ ] Public fame score on profiles
- [ ] Automatically calculated on server side at regular intervals (daily/hourly)
- [ ] Standard display (e.g. “🔥 Fame: 87/100” or “⭐ Fame: 4.3/5”)
- [ ] Filters for fame score
- [ ] Fame history / progression view
- [ ] Rankings / leaderboard
- [ ] Anti-cheat mechanisms to detect artificial fame boosting

### 📍 GPS Position

- [ ] Ask user consent for GPS geolocation (popup)
- [ ] Fallback methods (IP, timezone) if GPS refused
- [ ] Manual location editing in settings
- [ ] Update if significant movement detected
- [ ] Store location as structured data (city, area, coordinates)
- [ ] Comply with GDPR (opt-out, data deletion, etc.)

#### Options

- [ ] Display city in profile (e.g. "📍 Brooklyn, NY")
- [ ] Filter/search users by location/radius
- [ ] Show nearby users and distance
- [ ] Map preview in profile or settings

#### Optimizations

- [ ] Reduce GPS accuracy to neighborhood level
- [ ] Cache or update once per day/session
- [ ] Avoid raw lat/lon storage when not needed
- [ ] Deduplicate updates if no change
- [ ] Low-power GPS on mobile
- [ ] Secure location storage and transmission
- [ ] Auto-delete outdated location data (30 days)

## IV.3 Browsing

### ⚧️ Gender Suggest

- [ ] Users can set the gender(s) they want to match with
- [ ] Suggestions are limited to profiles matching the user’s selected preferences
- [ ] Default orientation is bisexual for users who don’t specify
- [ ] Users can update orientation and preferences in settings

#### Options

- [ ] Allow users to set multiple gender preferences
- [ ] Allow filtering by age, distance, interests in addition to gender

#### Optimizations

- [ ] Cache user orientation and preferences for faster filtering
- [ ] Precompute and store user gender + orientation pairs
- [ ] Use indexed queries to filter large datasets efficiently
- [ ] Allow batch processing or offline computation of suggestions to reduce server load

---

### 💘 Matches Intelligently

- [ ] Matching system ranks profiles based on:
  - [ ] Proximity
  - [ ] Shared tags/interests
  - [ ] Fame rating
- [ ] Exclude blocked users and those outside the user’s orientation/preferences
- [ ] Use a computed "match score" to order results

#### Options

- [ ] Weight each criterion differently (e.g., 50% proximity, 30% shared tags, 20% fame)
- [ ] Let users prioritize one criterion (e.g., shared interests > fame)
- [ ] Add filters (age, gender, etc.) on matching page
- [ ] Display match scores visually (e.g., "🎯 85% compatibility")

#### Optimizations

- [ ] Precompute partial scores (e.g., shared tags count)
- [ ] Use spatial indexing for fast proximity search (e.g., PostGIS)
- [ ] Normalize fame and tag metrics to a comparable scale
- [ ] Use approximate nearest neighbor algorithms for proximity
- [ ] Store match history to avoid repeating low-quality matches
- [ ] Normalize tags (e.g., "Musique" == "musique")


## IV.4 Research

### 🔎 Advanced Search

- [ ] Users can search profiles with advanced filters:
  - [ ] Age range
  - [ ] Fame rating
  - [ ] Location
  - [ ] Tags/interests
- [ ] Results are sortable by:
  - [ ] Age
  - [ ] Location
  - [ ] Fame
  - [ ] Tags relevance
- [ ] Blocked users are excluded from search results

#### Options

- [ ] Display compatibility score in results
- [ ] Show users’ positions on a map (optional)

#### Optimizations

- [ ] Use pagination or infinite scroll to limit request load
- [ ] Optimize API queries for performance and scalability


## IV.5 Profile View

- [ ] Users can view other users' profiles
- [ ] Profiles display all available information except email and password
- [ ] Profile views are recorded in visit history
- [ ] Users can "like" another user's profile picture
- [ ] Users without a profile picture cannot like others
- [ ] Mutual likes create a “connection” enabling chat
- [ ] Users can remove a previously given like
- [ ] Removing a like disables chat and notifications from that user
- [ ] Users can check another user's fame rating
- [ ] Display “Online” badge or “Last seen X time ago”
- [ ] Users can report another user as a fake account
- [ ] Users can block another user
- [ ] Blocked users disappear from search results and notifications
- [ ] Blocked users cannot be contacted
- [ ] Clear indication if the viewed profile has liked the user
- [ ] Display if users are already connected
- [ ] Option to “unlike” or disconnect from a connected user
- [ ] Animation or special icon for mutual like (match)
- [ ] History of removed likes
- [ ] Option in settings to view blocked users
- [ ] Show total number of profile views

## IV.6 Chat

- [ ] Users can chat in real time after a mutual like (connection)
- [ ] Chat is available only between connected users
- [ ] Chat is disabled if one user removes their like or blocks the other
- [ ] Messages update in real time (WebSockets or polling)
- [ ] Show timestamps for each message
- [ ] Display sender’s identity (name + photo)
- [ ] Notification of new messages is visible from any page
- [ ] Chat icon or floating messenger accessible from all pages
- [ ] Typing indicators (e.g., “Sofiane is typing…”)
- [ ] Read receipts (e.g., "Seen at 14:20")
- [ ] Notification badges on the chat icon for new messages
- [ ] Option to mute conversations or disable notifications

## IV.7 Notifications

- [ ] Users receive real-time notifications (max 10s delay) for:
  - [ ] Receiving a like
  - [ ] Profile viewed
  - [ ] Receiving a message
  - [ ] Mutual like (match)
  - [ ] Connected user unlikes them (connection broken)
- [ ] Notifications are persistent (stored in database)
- [ ] Users can see unread notifications from any page

### Options

- [ ] Notification bell icon with red badge for unread count in nav bar
- [ ] Ability to mark all notifications as read
- [ ] Contextual pop-ups/toasts for real-time events
- [ ] Dedicated notification history section in user profile
- [ ] Option to disable specific notification types
- [ ] Different icons for notification types (❤️ like, 👁️ view, 💬 message, etc.)

### Optimizations

- [ ] Use WebSockets (e.g., Socket.IO) for live notifications
- [ ] Queue system (e.g., Redis Queue) for reliable delivery
- [ ] Group notifications intelligently (e.g., "3 people viewed your profile today")
- [ ] Auto-delete old notifications after 30 days or allow manual cleaning
- [ ] Local or SWR caching for instant notification display
- [ ] Support push notifications (web/mobile)
