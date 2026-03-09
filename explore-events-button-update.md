# Explore Events Button Update

## Issue
The "EXPLORE EVENTS" button on the homepage was not redirecting to the events page when clicked.

## Root Cause
The button had no click handler or navigation functionality implemented.

## Solution
Added navigation functionality to the button in `HeroContent.tsx`:

1. Imported `useNavigate` hook from `react-router`
2. Initialized the navigate function using the hook
3. Added `onClick={() => navigate('/events')}` handler to the "EXPLORE EVENTS" button

## Files Modified
- `/src/app/components/HeroContent.tsx`

## Changes Made
```tsx
// Added import
import { useNavigate } from 'react-router';

// Added hook usage
const navigate = useNavigate();

// Added onClick handler to button
<button 
  onClick={() => navigate('/events')}
  className="neon-button neon-border-blue..."
>
  EXPLORE EVENTS
</button>
```

## Result
Clicking the "EXPLORE EVENTS" button now successfully redirects users to the `/events` page.
