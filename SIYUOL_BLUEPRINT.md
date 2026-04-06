# 💫 Siyuol — Complete App Blueprint
> *Your private space. Your love. Your world.*

--- 

## 📌 Overview

**Siyuol** is a privacy-first, all-in-one couple dashboard PWA (Progressive Web App) built for couples worldwide. It provides a fully encrypted, cozy private space where two people can chat, share memories, track their relationship, play games, and much more — all with end-to-end encryption and complete privacy.

- **Type:** Progressive Web App (PWA)
- **Aesthetic:** Cozy & warm — Sunset palette (coral, peach, soft purple) with Glassmorphism UI
- **Named after:** Siya (creator's girlfriend) — "Siya's Soul"

---

## 🛠️ Tech Stack

| Layer | Technology |
|-------|-----------|
| Frontend | React + Tailwind CSS |
| PWA | Vite PWA Plugin |
| Backend & Database | Supabase |
| Authentication | Supabase Auth |
| Realtime Chat | Supabase Realtime |
| File Storage | Supabase Storage |
| End-to-End Encryption | TweetNaCl.js |
| Location | Browser Geolocation API |
| Hosting | Netlify |
| Animations | Framer Motion |
| Particles / Sand Effects | TSParticles |

---

## 🎨 Design System

### Color Palette — Sunset
| Token | Color | Use |
|-------|-------|-----|
| `--primary` | `#FF6B6B` | Coral — CTAs, highlights |
| `--secondary` | `#FFB347` | Peach/Amber — accents |
| `--tertiary` | `#C9A7FF` | Soft Purple — gradients |
| `--bg-dark` | `#1A1025` | Deep background |
| `--bg-mid` | `#2D1B3D` | Card backgrounds |
| `--glass` | `rgba(255,255,255,0.08)` | Glassmorphism base |
| `--glass-border` | `rgba(255,255,255,0.15)` | Glass borders |
| `--text-primary` | `#FFFFFF` | Main text |
| `--text-muted` | `#C4A8D4` | Secondary text |

### Design Language
- **Primary style:** Glassmorphism (frosted glass cards, blur backgrounds)
- **Accent style:** Subtle Neumorphism on buttons/inputs for depth
- **Scrolling:** Text reveal on hero + scroll-triggered animations on sections + subtle parallax on backgrounds
- **Fonts:** `Playfair Display` (headings) + `Inter` (body)
- **Border radius:** Generous (16px–24px on cards)
- **Shadows:** Soft glow shadows using primary colors

---

## 🗺️ App Structure & Routes

```
/ ................................. Landing Page (public)
/login ............................ Auth — Login
/register ......................... Auth — Register
/verify ........................... Auth — Email Verification
/couple/link ...................... Couple linking (enter couple code)
/dashboard ........................ Main Dashboard (protected)
/chat ............................. Private Chat
/notes ............................ Love Notes
/journal .......................... Journal (personal + shared)
/memories ......................... Photo Memories
/dates ............................ Dates & Countdowns
/goals ............................ Bucket List & Goals
/location ......................... Location Sharing
/mood ............................. Mood Check-in
/vault ............................ Secret Vault
/games ............................ Fun & Games
/wishlist ......................... Wishlists
/surprises ........................ Surprise Planner
/insights ......................... Relationship Insights
/settings ......................... Settings
/admin ............................ Admin Panel (admin only, hidden)
```

---

## 🌐 Landing Page

### Sections (in order)

#### 1. Navbar (Sticky, Glassmorphism)
- Logo: Siyuol wordmark + small heart/flame icon (left)
- Nav links: Features, Privacy, How It Works, Pricing (center)
- Buttons: `Log In` (ghost) + `Get Started` (filled coral) (right)
- On scroll: backdrop blur increases, slight shadow appears

#### 2. Hero Section
- **Animation:** Text reveal on load (words animate in one by one)
- **Headline:** *"Your love deserves its own world"*
- **Subheadline:** *"A private, encrypted space built for just the two of you — chat, remember, grow, and love freely."*
- **CTAs:** `Start for Free` (primary) + `See How It Works` (ghost)
- **Visual:** Both phone + laptop mockup showing the dashboard
- **Background:** Animated sunset gradient + floating soft particle orbs
- **Parallax:** Background moves at 0.3x scroll speed

#### 3. Live Stats Bar
- Animated counters (from Supabase live data):
  - 💑 `X Couples Connected`
  - 💌 `X Love Notes Sent`
  - 🔒 `X Messages Encrypted`
  - 🌍 `X Countries`
- Glassmorphism bar, subtle shimmer animation

#### 4. Features Grid
- 3×3 or 4×2 grid of feature cards
- Each card: Icon + Title + One-line description
- Hover: Card lifts, glow border appears
- Features shown: Chat, Journal, Vault, Location, Mood, Games, Goals, Memories, Dates

#### 5. Feature Deep-Dive (Alternating Sections)
- One section per major feature
- Alternates: Left mockup + Right text, then Right mockup + Left text
- Scroll-triggered slide-in animations
- Features covered:
  - Private Encrypted Chat
  - Secret Vault
  - Location Sharing
  - Mood Check-ins
  - Couple Games & Fun
  - Memory Timeline

#### 6. "Made for Moments" Emotional Section
- Full-width cinematic section
- Soft warm background with floating petals/particles
- Three emotional use-cases shown with soft animations:
  - *"Remember your first date"*
  - *"Send a note at midnight"*
  - *"Always know you're close"*
- Pulls heartstrings — designed to convert

#### 7. How It Works (3 Steps)
- Clean 3-step horizontal flow with connecting line
- Step 1: Create your account
- Step 2: Share your couple code
- Step 3: Start your private world
- Each step: Number + Icon + Title + Description
- Scroll-triggered fade-in

#### 8. Security Deep Dive
- Headline: *"Built for two. Seen by none."*
- E2E encryption explained in simple language
- Visual diagram: Message → Encrypt → Send → Decrypt → Partner
- Trust points: No ads, No data selling, No backdoors, Fake vault, Screenshot protection
- Trust badges / shield icons

#### 9. Privacy Section
- *"We can't read your messages. Even if we wanted to."*
- What we collect vs what we don't
- GDPR / privacy commitment

#### 10. Localized Pricing Preview
- IP-detected country → show price in local currency
- Two tiers shown:
  - **Free:** 10MB storage, all core features
  - **Pro:** More storage + link storage (price varies by country)
- Clean comparison table
- *"Payment coming soon"* badge on paid tier

#### 11. Testimonials (Placeholder)
- 3 couple testimonials with avatar, name, country flag
- Soft card carousel

#### 12. FAQ Section
- Accordion-style expandable questions:
  - Is my data really private?
  - What happens if we break up?
  - How does the couple code work?
  - Can Siyuol admins read my messages?
  - How do I install it on my phone?
  - What happens after 10MB?

#### 13. PWA / Install Section
- *"Install Siyuol like an app — no App Store needed"*
- iOS + Android step-by-step visual instructions
- Phone mockup showing homescreen icon

#### 14. Final CTA Banner
- Full-width warm gradient banner
- *"Your private world is waiting"*
- `Create Your Space →` button

#### 15. Footer
- Logo + tagline (left)
- Links: Privacy Policy, Terms of Service, Contact, Report a Bug
- Social icons
- Copyright: *© 2025 Siyuol. Made with ❤️*

---

## 🔐 Authentication Flow

### Register
1. User enters **email**
2. App validates email format + checks against temp mail blocklist (disposable email domains)
3. If valid → animated **sand particle effect** plays
4. **Password field drops down** with smooth spring animation (Framer Motion)
5. User enters password + confirm password
6. User enters their **name**
7. Account created → verification email sent
8. Redirect to `/couple/link` to set up couple code

### Login
1. User enters **email**
2. Same validation + sand effect animation
3. Password field **drops in** with animation
4. On success → check if couple is linked
   - If linked → redirect to `/dashboard`
   - If not linked → redirect to `/couple/link`
5. If already logged in → **auto-redirect to `/dashboard`** (skip login page entirely)

### Couple Linking
- First person = **"Main" partner**
  - Gets a unique 6-character couple code generated
  - Shares it with their partner
- Second person = **"Partner"**
  - Enters the couple code
  - Accounts are linked
- After linking: Set couple name + optional couple profile photo link
- Both partners now share the same couple space

### Security Features
- Temp mail blocking (check against known disposable email domain list)
- App lock: PIN / Biometrics (device-level)
- Login activity log (device, time, location)
- Screenshot blocking inside app
- Session management (auto-logout on inactivity, configurable)

---

## 👫 Couple System

### Data Model
```
User (personal side)          Couple (shared side)
─────────────────────         ──────────────────────
- Personal diary              - Shared chat
- Personal vault              - Shared journal
- Personal wishlist           - Shared memories
- Personal mood               - Shared goals/bucket list
- Login activity              - Couple profile
                              - Shared vault
                              - Games history
```

### Sharing
- Items from personal side can be **optionally shared** to the couple's shared side
- Once shared, items **cannot** be un-shared (privacy by design)
- Both partners can see all shared content

### Unlinking (Breakup Mode 💔)
1. Either partner initiates unlink
2. Both get notified immediately
3. **1-week countdown timer** starts (visible to both)
4. During this week: both partners can export/download their data
5. After 7 days: **all data permanently and irreversibly deleted**
6. Accounts revert to solo (can re-link with someone new)

---

## 💬 Chat

- End-to-end encrypted (TweetNaCl.js, keys stored locally)
- Real-time via Supabase Realtime
- Features:
  - Text messages
  - Emoji reactions on messages
  - Voice messages (recorded in browser, stored compressed)
  - **"Thinking of you" ping** — one-tap notification, no text needed
  - Disappearing messages (set timer: 1h, 24h, 7d, never)
  - Message delivery & read receipts
  - Typing indicator

---

## 💌 Love Notes

- Separate from chat — for special, intentional messages
- Short sweet notes with optional mood tag
- **Scheduled notes:** Write now, deliver on a future date/time
- Notes displayed beautifully, like cards/letters
- Archive of all notes received

---

## 📖 Journal

### Personal Diary
- Fully private, only the writer can see
- Rich text editor (bold, italic, lists)
- Daily prompts (e.g., *"What made you smile today?"*)
- Tags and search

### Shared Couple Journal
- Both partners can write entries
- Entries attributed to author
- Read-only for the other (cannot edit partner's entry)
- Beautiful timeline view

---

## 📸 Memories

- **Storage limit:** 10MB per couple (free tier)
- **Warning:** At 8MB — soft warning banner
- **At 10MB:** Hard block, show upgrade options
- **Storage options after 10MB:**
  - Option A: Use external image links (cheaper paid tier)
  - Option B: Purchase more storage (higher paid tier)
- Prices shown in **local currency** (IP-detected)
- Images stored compressed in Supabase Storage
- **Memory Timeline:** Scrollable chronological view
- **"On This Day":** Flashback notification for memories from past years

---

## 📅 Dates & Countdowns

- **Days Together Counter:** Counts up from relationship start date
- **Anniversary Countdown:** Days until next anniversary
- **Important Dates Calendar:** Add custom dates (first date, birthdays, trips)
- **"On This Day" Flashbacks:** Pulls memories/notes from the same date in past years
- Date cards with beautiful animations on the actual day

---

## 🎯 Goals & Bucket List

- **Shared Bucket List:** Add items, mark as completed
- Completed items get a celebration animation (confetti)
- **Relationship Milestones Tracker:** First date, first trip, moved in together, etc.
- **Shared To-Do / Date Planner:** Plan upcoming dates with checklist
- Progress bar showing bucket list completion %

---

## 🌍 Location Sharing

- **Completely optional** — both partners must consent
- **Precise real-time location** — toggleable on/off anytime
- **"I'm on my way"** — one-tap quick share of current location with ETA
- **Saved Places:** Save meaningful locations (first date spot, favourite café, home)
- Location data encrypted, never stored permanently (real-time only)
- Clear visual indicator when sharing is active (so user always knows)

---

## 🔒 Secret Vault

### Personal Vault
- Fully private notes, only the owner can see
- Separate PIN to access (different from app PIN)
- **Fake Vault (Decoy PIN):** Enter decoy PIN → shows fake/empty vault
- AES encrypted

### Shared Vault
- Secrets both partners want to store together
- Requires both partners' PINs to access (optional setting)

---

## 😊 Mood Check-in

- Daily mood selection: 5 levels (😔 😕 😐 🙂 😄) + optional note
- Partner can see your mood on their dashboard
- **Mood History Graph:** Weekly and monthly view
- **Streak Tracker:** How many consecutive days both checked in
- Gentle daily reminder notification (optional)

---

## 📊 Relationship Insights

- **Streak Tracker:** Consecutive daily check-in days
- **Memory Stats:** "You've shared X memories together"
- **Notes Stats:** "You've sent X love notes"
- **Mood Trends:** Weekly mood graph for both partners
- **Relationship Level / Badge System:**
  - Levels based on days together + activity
  - Badges: First Note, First Memory, 100 Days, 365 Days, etc.
  - Celebratory animations when badges are earned

---

## 🎮 Fun & Games

### Couple Quiz
- "How well do you know each other?"
- Both answer same questions independently
- Compare answers, see match percentage
- New quiz packs regularly

### Truth or Dare
- Couples edition truth/dare cards
- Tap to reveal, mark as done

### Spin the Wheel
- Customizable wheel for: date ideas, who cooks tonight, movie choice
- Couples can add their own options

### Couple Compatibility Assessment
- Personality/compatibility quiz
- Results shown as a beautiful compatibility report

### Surprise Planner
- Plan a surprise for your partner (hidden from them)
- Set reveal date → partner gets notified on that date
- Include: what, where, notes, countdown

### Virtual Gifts
- Send animated stickers, cards, digital gifts
- Occasions: Birthday, Anniversary, Just Because, etc.
- Cute animations when gift is opened

---

## 🎁 Wishlist

- Each partner has a personal wishlist
- Can optionally share wishlist with partner (one-way visibility)
- Add items: name, link, price, priority
- Partner can mark items as "getting this" (hidden from wishlist owner)

---

## ⚙️ Settings

### Profile
- Display name, profile photo (link-based)
- Email change (with verification)
- Password change

### Couple Settings
- Couple name
- Couple profile photo
- Relationship start date
- Couple theme (custom color accent)

### Privacy & Security
- App lock (PIN / Biometrics)
- Change vault PIN
- Change decoy vault PIN
- Screenshot blocking toggle
- Login activity log
- Active sessions management

### Notifications
- Configure which notifications to receive
- Mood reminder time
- Love note delivery alerts
- Game invites

### Storage
- View current storage usage (X MB of 10 MB used)
- Delete specific memories to free space
- Upgrade storage (coming soon)

### Data
- Export all my data (JSON download)
- Export couple data (both must confirm)
- Delete my account
- Unlink from partner

### About
- App version
- Privacy Policy
- Terms of Service
- Report a Bug
- Contact

---

## 👑 Admin Panel (`/admin`)

> Accessible only to: `siyapatel2511.thakur@gmail.com`
> Hidden route — not linked anywhere in the app

### Dashboard Overview
- Total users (all time + today)
- Total couples linked
- Active users (last 7 days, last 30 days)
- New signups graph (daily/weekly/monthly)
- Total storage used across all couples
- Reports pending review

### User Management
- Search users by email / name
- View user details:
  - Account created date
  - Couple linked? (yes/no)
  - Storage usage
  - Last active
  - Account tier (free/pro/unlimited)
- Actions per user:
  - Ban / Unban
  - Delete account
  - Grant free paid tier (gift Pro access)
  - Revoke paid tier
  - View login activity

### Couple Management
- View all linked couples
- See couple stats (storage, activity)
- Force unlink a couple (admin action)

### Storage Management
- Total Supabase storage used
- Storage per couple (sorted by usage)
- Flag couples over their limit

### Reports System
- List of all submitted reports
- Each report shows:
  - Report type (Bug, Inappropriate behaviour, Account compromised, Other)
  - Description (free text from user)
  - Date submitted
  - Status: Pending / Reviewed / Resolved
- Admin can mark reports as reviewed/resolved
- Admin gets email notification on new report
- Reports are **anonymous** (reporter identity not shown)

### Announcements
- Write and send a notice to all users
- Appears as in-app notification banner
- History of past announcements

### Revenue (Ready for Later)
- Placeholder section for when payments are integrated
- Will show: revenue, active paid subscriptions, churn rate

---

## 👤 Special Accounts

| Email | Access Level |
|-------|-------------|
| `siyapatel2511.thakur@gmail.com` | Full Admin (Admin Panel + Unlimited storage) |
| `sahil2309singh@gmail.com` | Unlimited storage (no admin panel) |
| `siyapatel23102007@gmail.com` | Unlimited storage (no admin panel) |

- Admin can **gift Pro tier** to any user from the Admin Panel
- Gifted Pro tier can be revoked from Admin Panel at any time

---

## 🔐 Security & Encryption

### End-to-End Encryption (E2E)
- All messages, notes, journal entries, and vault content encrypted using **TweetNaCl.js**
- Encryption keys generated on device, **never sent to server**
- Server only stores encrypted ciphertext — even admins cannot read content
- Key exchange uses Diffie-Hellman via NaCl box

### Additional Security
- Temp mail blocking on registration
- App lock: PIN or biometric (device-level, via Web Authentication API)
- Screenshot blocking (where browser supports)
- Login activity log (IP, device, timestamp)
- Fake/decoy vault with alternate PIN
- All data in transit: HTTPS/TLS
- All data at rest: Supabase encrypted storage

---

## 💰 Pricing & Storage Model

### Free Tier
- 10MB shared storage per couple
- All core features included
- Warning notification at 8MB

### After 10MB — Two Upgrade Paths
| Option | Description | Cost |
|--------|-------------|------|
| **Link Storage** | Use external image links instead of uploads | Lower price |
| **More Storage** | Purchase additional storage (e.g., +50MB, +100MB) | Higher price |

### Pricing Display
- User's country detected via IP address
- Prices shown in local currency
- Payment integration: **coming later**

### Admin Gifting
- Admin can grant any user free Pro access from the Admin Panel
- Can also revoke gifted access

---

## 📱 PWA Configuration

- Installable on iOS and Android (Add to Home Screen)
- Offline support for: cached dashboard, journal, vault (read-only offline)
- Push notifications (Web Push API)
- Service worker for background sync
- App manifest with Siyuol icon, name, theme color
- Splash screen on launch

---

## 🗄️ Database Schema (Supabase)

### Tables

```
users
  - id (uuid, primary key)
  - email (text, unique)
  - name (text)
  - created_at (timestamp)
  - tier (enum: free, pro, unlimited, admin)
  - tier_granted_by (uuid, nullable — admin who gifted)
  - couple_id (uuid, nullable, FK → couples)
  - is_main_partner (boolean)
  - storage_used_bytes (integer)
  - is_banned (boolean)
  - last_active (timestamp)

couples
  - id (uuid, primary key)
  - couple_code (text, unique, 6 chars)
  - couple_name (text, nullable)
  - relationship_start_date (date, nullable)
  - main_user_id (uuid, FK → users)
  - partner_user_id (uuid, nullable, FK → users)
  - created_at (timestamp)
  - unlink_initiated_at (timestamp, nullable)
  - unlink_initiated_by (uuid, nullable)
  - deletion_scheduled_at (timestamp, nullable)
  - custom_theme (text, nullable)

messages
  - id (uuid, primary key)
  - couple_id (uuid, FK → couples)
  - sender_id (uuid, FK → users)
  - content (text, encrypted ciphertext)
  - message_type (enum: text, voice, ping, gift)
  - disappears_at (timestamp, nullable)
  - created_at (timestamp)
  - reactions (jsonb)

love_notes
  - id (uuid, primary key)
  - couple_id (uuid, FK → couples)
  - sender_id (uuid, FK → users)
  - content (text, encrypted)
  - mood_tag (text, nullable)
  - deliver_at (timestamp, nullable)
  - delivered (boolean)
  - created_at (timestamp)

journal_entries
  - id (uuid, primary key)
  - couple_id (uuid, FK → couples)
  - author_id (uuid, FK → users)
  - type (enum: personal, shared)
  - content (text, encrypted)
  - prompt (text, nullable)
  - created_at (timestamp)

memories
  - id (uuid, primary key)
  - couple_id (uuid, FK → couples)
  - uploader_id (uuid, FK → users)
  - storage_path (text, nullable — Supabase storage)
  - external_link (text, nullable — for link-based storage)
  - caption (text, nullable, encrypted)
  - taken_at (date, nullable)
  - size_bytes (integer)
  - created_at (timestamp)

important_dates
  - id (uuid, primary key)
  - couple_id (uuid, FK → couples)
  - title (text)
  - date (date)
  - type (enum: anniversary, birthday, custom)
  - created_at (timestamp)

bucket_list_items
  - id (uuid, primary key)
  - couple_id (uuid, FK → couples)
  - created_by (uuid, FK → users)
  - title (text)
  - completed (boolean)
  - completed_at (timestamp, nullable)
  - created_at (timestamp)

mood_checkins
  - id (uuid, primary key)
  - user_id (uuid, FK → users)
  - couple_id (uuid, FK → couples)
  - mood_level (integer, 1–5)
  - note (text, nullable, encrypted)
  - created_at (timestamp)

vault_items
  - id (uuid, primary key)
  - owner_id (uuid, FK → users)
  - couple_id (uuid, nullable, FK → couples)
  - type (enum: personal, shared)
  - content (text, encrypted)
  - created_at (timestamp)

locations
  - id (uuid, primary key)
  - user_id (uuid, FK → users)
  - couple_id (uuid, FK → couples)
  - latitude (float, encrypted)
  - longitude (float, encrypted)
  - sharing_active (boolean)
  - updated_at (timestamp)

saved_places
  - id (uuid, primary key)
  - couple_id (uuid, FK → couples)
  - name (text)
  - latitude (float)
  - longitude (float)
  - created_by (uuid, FK → users)
  - created_at (timestamp)

wishlists
  - id (uuid, primary key)
  - owner_id (uuid, FK → users)
  - couple_id (uuid, FK → couples)
  - item_name (text)
  - link (text, nullable)
  - price (text, nullable)
  - priority (enum: low, medium, high)
  - is_shared_with_partner (boolean)
  - claimed_by_partner (boolean)
  - created_at (timestamp)

surprises
  - id (uuid, primary key)
  - planner_id (uuid, FK → users)
  - couple_id (uuid, FK → couples)
  - title (text, encrypted)
  - description (text, nullable, encrypted)
  - reveal_at (timestamp)
  - revealed (boolean)
  - created_at (timestamp)

game_sessions
  - id (uuid, primary key)
  - couple_id (uuid, FK → couples)
  - game_type (enum: quiz, truth_dare, spin_wheel, compatibility)
  - data (jsonb, encrypted)
  - created_at (timestamp)

reports
  - id (uuid, primary key)
  - reporter_id (uuid, FK → users)
  - report_type (enum: bug, inappropriate, compromised, other)
  - description (text)
  - status (enum: pending, reviewed, resolved)
  - created_at (timestamp)

announcements
  - id (uuid, primary key)
  - created_by (uuid, FK → users)
  - title (text)
  - body (text)
  - created_at (timestamp)

login_activity
  - id (uuid, primary key)
  - user_id (uuid, FK → users)
  - ip_address (text)
  - device_info (text)
  - created_at (timestamp)
```

---

## 🚀 Build Order

> Build and deploy page by page, feature by feature.

1. ✅ **Landing Page** — Full design, all 15 sections, animations
2. ✅ **Auth Pages** — Register, Login (with sand animation), Email verify
3. ✅ **Couple Linking** — Code generation, partner joining flow
4. ✅ **Dashboard** — Main overview, couple stats, quick access
5. ✅ **Chat** — Realtime E2E encrypted chat
6. ✅ **Love Notes** — Notes + scheduled delivery
7. ✅ **Journal** — Personal diary + shared journal
8. ✅ **Memories** — Upload, timeline, on this day
9. ✅ **Dates & Countdowns** — Anniversary, important dates
10. ✅ **Goals & Bucket List**
11. ✅ **Location Sharing**
12. ✅ **Mood Check-in**
13. ✅ **Secret Vault** — Personal + shared + fake vault
14. ✅ **Fun & Games** — All game modes
15. ✅ **Wishlist**
16. ✅ **Surprise Planner**
17. ✅ **Insights & Badges**
18. ✅ **Settings** — All sections
19. ✅ **Admin Panel** — Full dashboard + reports + user management
20. ✅ **PWA Config** — Manifest, service worker, push notifications
21. ✅ **Pricing & Storage** — Upgrade flows, localized pricing display

---

## 📋 Notes for Developers

- Always encrypt content **client-side before** sending to Supabase
- Never log or expose encryption keys
- Location data is real-time only — never persist raw coordinates permanently
- Fake vault decoy PIN must open a completely convincing empty/fake vault
- Admin route `/admin` must not appear in any nav, sitemap, or public link
- Temp mail check must run on **every** registration attempt
- 1-week deletion countdown must be enforced by a **Supabase Edge Function** (cron job), not just client-side
- All prices must update dynamically based on IP geolocation — never hardcode USD only
- Storage usage must update in real-time after every upload

---

*Document Version: 1.0 | Last Updated: April 2026 | Built with ❤️ for Siya*
