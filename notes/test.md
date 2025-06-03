# Matcha - Plan de Tests

## Backend

- [ ] User signup (email, password, profile creation)
- [ ] User login (authentication, JWT/token validation)
- [ ] Profile update (bio, interests, photos)
- [ ] Match system (like, mutual match detection)
- [ ] Block/report user functionality
- [ ] Message sending & retrieval
- [ ] Notifications system (new match, new message)
- [ ] Search system (Elasticsearch queries, filtering by age, distance, interests)
- [ ] Neo4j queries (graph relations: likes, blocks, matches)
- [ ] Rate limiting & abuse protection

## Frontend

- [ ] Login page (form validation, error handling)
- [ ] Signup page (form steps, password strength check)
- [ ] Profile editing page (update info, upload photos)
- [ ] Match/discover page (swipe or like/dislike interaction)
- [ ] Search page (filters, dynamic results display)
- [ ] Chat page (sending & receiving messages, real-time updates)
- [ ] Notifications display (new match, messages, system alerts)
- [ ] Error states & fallback UI (network errors, no results)

## Communication (tRPC)

- [ ] Frontend ↔ Backend: User authentication
- [ ] Frontend ↔ Backend: Profile data sync
- [ ] Frontend ↔ Backend: Match actions (like, block, report)
- [ ] Frontend ↔ Backend: Message system
- [ ] Frontend ↔ Backend: Notifications updates

## Security

- [ ] Unauthorized access blocked (protected routes, sensitive data)
- [ ] Input validation & sanitation (avoid injection attacks)
- [ ] Secure password storage (bcrypt or similar)
- [ ] Sensitive data encryption (JWT tokens, cookies)
- [ ] Rate limiting on sensitive endpoints (login, signup)
- [ ] CSRF and XSS protections in place

## Back Office

- [ ] User management page (admin view, search, suspend accounts)
- [ ] Reports & moderation page (view user reports, take actions)

## DevOps & Deployment

- [ ] Docker Compose builds and runs all services correctly
- [ ] Caddy reverse proxy works (routes, HTTPS certificates)
- [ ] Environment variables are correctly managed
- [ ] Logs & monitoring are accessible
- [ ] Database migrations or seeds run properly
