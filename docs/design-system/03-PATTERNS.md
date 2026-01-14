# UI Patterns Library

> Composition patterns and common UI workflows

---

## 1. Task Card Pattern

Карточка задачи — основной UI-паттерн приложения.

### 1.1 Structure

```
┌─────────────────────────────────────────────────────────┐
│  ┌────────┐                                             │
│  │ ICON   │   Status Label                              │
│  │ IMAGE  │   Task Title                                │
│  │        │   ★ ★ ★ ★ ☆  (rating)                      │
│  └────────┘                                             │
│                                                         │
│  [Progress Indicator]                                   │
│                                                         │
│  Reward: 4 coins                      [Action Button]   │
└─────────────────────────────────────────────────────────┘
```

### 1.2 States

| State | Visual | Behavior |
|-------|--------|----------|
| **Pending** | Default appearance | Tappable, shows task detail |
| **Active** | Accent ring + glow | Currently in progress |
| **Completed** | Green background, checkmark | Dimmed, non-interactive |
| **Locked** | Grayscale, lock icon | Non-tappable |
| **Reward Pending** | Pulsing coin animation | Tap to collect |

### 1.3 Variants

```typescript
// Task Card Types
type TaskCardVariant =
  | "daily"       // Daily challenge tasks
  | "one-time"    // One-time tasks
  | "recurring"   // Weekly/monthly tasks
  | "bonus"       // Special reward tasks

// Size variants
type TaskCardSize =
  | "compact"     // List view
  | "default"     // Grid view
  | "expanded"    // Detail view
```

### 1.4 Component Composition

```tsx
<TaskCard status="active" variant="daily" size="default">
  <TaskCard.Image src="/tasks/laundry.svg" alt="" />
  <TaskCard.Content>
    <TaskCard.Status>Active</TaskCard.Status>
    <TaskCard.Title>Fold the Laundry</TaskCard.Title>
    <TaskCard.Rating value={4} max={5} />
  </TaskCard.Content>
  <TaskCard.Reward coins={4} />
  <TaskCard.Action onClick={handleComplete}>
    Complete
  </TaskCard.Action>
</TaskCard>
```

---

## 2. Progress Timeline Pattern

Вертикальная timeline с шагами/задачами.

### 2.1 Structure

```
  ●───────  Step 1 (Completed)
  │         Description
  │
  ●───────  Step 2 (Completed)
  │         Description
  │
  ◉───────  Step 3 (Active)
  │         Description
  │
  ○───────  Step 4 (Pending)
            Description
```

### 2.2 Node States

```css
/* Timeline node states */
.timeline-node-completed {
  background: hsl(var(--color-success));
  /* Checkmark icon inside */
}

.timeline-node-active {
  background: hsl(var(--color-surface-primary));
  border: 2px solid hsl(var(--color-primary));
  /* Dot inside */
}

.timeline-node-pending {
  background: hsl(var(--color-surface-secondary));
  border: 2px solid hsl(var(--color-border-default));
}
```

### 2.3 Usage

```tsx
<Timeline>
  <Timeline.Item status="completed">
    <Timeline.Title>Make the bed</Timeline.Title>
    <Timeline.Rating value={5} />
  </Timeline.Item>
  <Timeline.Item status="completed">
    <Timeline.Title>Do homework</Timeline.Title>
    <Timeline.Rating value={4} />
  </Timeline.Item>
  <Timeline.Item status="active">
    <Timeline.Title>Fold the laundry</Timeline.Title>
  </Timeline.Item>
  <Timeline.Item status="pending">
    <Timeline.Title>Close</Timeline.Title>
  </Timeline.Item>
</Timeline>
```

---

## 3. Calendar Grid Pattern

Месячный календарь с индикаторами выполнения.

### 3.1 Structure

```
┌─────────────────────────────────────────┐
│  Month ▼                                │
├────┬────┬────┬────┬────┬────┬────┤
│ Mon│ Tue│ Wed│ Thu│ Fri│ Sat│ Sun│
├────┼────┼────┼────┼────┼────┼────┤
│    │    │  ✓ │  ✓ │  ✓ │  ✓ │    │
│    │    │ ✓  │ ✓  │ ✓  │    │    │
│    │    │    │    │ ✗  │ ✗  │    │
│  ◉ │    │    │    │    │    │    │
└────┴────┴────┴────┴────┴────┴────┘
```

### 3.2 Day Cell States

| State | Visual | Token |
|-------|--------|-------|
| Empty | No indicator | - |
| All tasks done | Green checkmark | `--color-success` |
| Partial | Mixed indicator | `--color-warning` |
| Missed | Red X | `--color-error` |
| Today | Highlighted border | `--color-accent` |
| Selected | Filled background | `--color-primary` |

### 3.3 Mobile Adaptation

```
Mobile: Show dots instead of checkmarks
- Green dot = all done
- Yellow dot = partial
- Red dot = missed
- No dot = no tasks
```

---

## 4. Reward Collection Pattern

Анимация сбора награды (coins, stars).

### 4.1 Flow

```
1. Task completed
   ↓
2. Success toast appears
   ↓
3. Coin/reward flies to balance counter
   ↓
4. Balance updates with +N animation
   ↓
5. Optional: Celebration particles
```

### 4.2 Animation Sequence

```typescript
const rewardCollectionSequence = {
  // Step 1: Show reward badge on task
  showBadge: {
    duration: 200,
    ease: "spring",
    scale: [0, 1.2, 1],
  },

  // Step 2: Fly to counter
  flyToCounter: {
    duration: 500,
    ease: "out",
    path: "arc", // Curved trajectory
  },

  // Step 3: Counter increment
  incrementCounter: {
    duration: 300,
    ease: "bounce",
    scale: [1, 1.1, 1],
  },
}
```

### 4.3 Coin Component

```tsx
<Coin
  value={4}
  size="lg"
  animate={isCollecting}
  onCollectionComplete={handleComplete}
/>
```

---

## 5. Bottom Sheet Pattern

Модальное окно снизу экрана (mobile-first).

### 5.1 Structure

```
┌─────────────────────────────────────────┐
│           [ Drag Handle ]               │
├─────────────────────────────────────────┤
│                                         │
│   Content                               │
│                                         │
│   • List items                          │
│   • Forms                               │
│   • Actions                             │
│                                         │
├─────────────────────────────────────────┤
│   [Primary Action]    [Secondary]       │
└─────────────────────────────────────────┘
```

### 5.2 Behavior

| Gesture | Action |
|---------|--------|
| Drag down | Dismiss |
| Drag up | Expand to full |
| Tap backdrop | Dismiss |
| Escape key | Dismiss |

### 5.3 Snap Points

```typescript
const bottomSheetSnapPoints = {
  collapsed: 0,      // Hidden
  peek: 0.25,        // 25% of screen
  half: 0.5,         // 50% of screen
  expanded: 0.9,     // 90% of screen (with safe area)
}
```

---

## 6. Onboarding Flow Pattern

Первичное знакомство с приложением.

### 6.1 Screen Types

```
┌─────────────────┐
│                 │
│   [Illustration]│
│                 │
│   Title         │
│   Description   │
│                 │
│   ● ○ ○ ○       │  ← Progress dots
│                 │
│   [Next]        │
└─────────────────┘
```

### 6.2 Flow Sequence

1. **Welcome** — character introduction
2. **Tasks** — how tasks work
3. **Rewards** — earning coins
4. **Family** — connecting with parents
5. **Permissions** — notifications setup

### 6.3 Progress Indicator

```tsx
<OnboardingProgress
  total={5}
  current={2}
  variant="dots" // or "bar"
/>
```

---

## 7. Empty State Pattern

Placeholder когда нет контента.

### 7.1 Structure

```
┌─────────────────────────────────────────┐
│                                         │
│        [Illustration/Icon]              │
│                                         │
│           Title                         │
│        Description text                 │
│                                         │
│         [Action Button]                 │
│                                         │
└─────────────────────────────────────────┘
```

### 7.2 Variants

| Context | Illustration | Title | Action |
|---------|--------------|-------|--------|
| No tasks | Relaxing character | "All done!" | "Add new task" |
| No results | Search icon | "No matches" | "Clear filters" |
| Error | Sad character | "Oops!" | "Try again" |
| Offline | Cloud icon | "No connection" | "Retry" |

### 7.3 Usage

```tsx
<EmptyState
  illustration={<RelaxingOtterIllustration />}
  title="All done for today!"
  description="Great job completing all your tasks."
  action={{
    label: "Add new task",
    onClick: handleAddTask,
  }}
/>
```

---

## 8. Loading States Pattern

Различные состояния загрузки.

### 8.1 Types

| Type | Use Case | Visual |
|------|----------|--------|
| **Spinner** | Button loading | Rotating circle |
| **Skeleton** | Content loading | Pulsing shapes |
| **Progress** | File upload | Progress bar |
| **Dots** | Typing indicator | Animated dots |

### 8.2 Skeleton Pattern

```tsx
// Card skeleton
<Skeleton>
  <Skeleton.Circle size="lg" />   // Avatar
  <Skeleton.Line width="60%" />   // Title
  <Skeleton.Line width="40%" />   // Subtitle
</Skeleton>

// List skeleton
<SkeletonList count={5}>
  <Skeleton.Line />
</SkeletonList>
```

### 8.3 Loading Priority

```
1. Show skeleton immediately (0ms)
2. If loaded < 200ms, skip skeleton
3. Minimum skeleton display: 500ms (avoid flash)
4. After 5s, show "Still loading..." message
5. After 15s, show timeout error
```

---

## 9. Form Patterns

### 9.1 Field Layout

```
┌─────────────────────────────────────────┐
│  Label *                                │
│  ┌─────────────────────────────────┐    │
│  │ Placeholder...            [Icon]│    │
│  └─────────────────────────────────┘    │
│  Helper text or error message           │
└─────────────────────────────────────────┘
```

### 9.2 Validation States

| State | Border | Helper | Icon |
|-------|--------|--------|------|
| Default | `border-default` | Gray text | None |
| Focus | `border-focus` | Gray text | None |
| Error | `error` | Red text | Error icon |
| Success | `success` | Green text | Check icon |

### 9.3 Form Actions

```
┌─────────────────────────────────────────┐
│           [Secondary]   [Primary]       │
└─────────────────────────────────────────┘

Mobile:
┌─────────────────────────────────────────┐
│              [Primary - Full Width]     │
│              [Secondary - Text Link]    │
└─────────────────────────────────────────┘
```

---

## 10. Navigation Patterns

### 10.1 Bottom Navigation (Mobile)

```
┌─────────────────────────────────────────┐
│  🏠        ✓        🔖        ⚙️       │
│  Home    Tasks    Saved    Settings    │
└─────────────────────────────────────────┘

- Max 5 items
- Icon + label
- Active state: filled icon + bold label
- Badge for notifications
```

### 10.2 Tab Bar

```
┌─────────────────────────────────────────┐
│  [Daily Challenges]  [One Time]         │
└─────────────────────────────────────────┘

- Container background
- Active tab: white bg + shadow
- Inactive: transparent
```

### 10.3 Header Pattern

```
┌─────────────────────────────────────────┐
│  [←]        Page Title           [...]  │
└─────────────────────────────────────────┘

- Back button (left)
- Title (center)
- Actions (right)
- Safe area top
```

---

## Pattern Checklist

При создании нового паттерна:

- [ ] Desktop и mobile версии
- [ ] Все состояния задокументированы
- [ ] Анимации/transitions описаны
- [ ] Accessibility учтён
- [ ] Loading/empty/error states
- [ ] Touch targets проверены (min 44px)
- [ ] Keyboard navigation работает
- [ ] Примеры кода приложены
