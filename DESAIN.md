# SYSTEM

Read this file BEFORE generating any UI.

## THEME

Tema: Fresh, Simple, Bright (Light Theme)
- Background global: #FAFAFA (warm white)
- Primary accent: #0EA5E9 (Sky Blue)
- Primary hover: #0284C7
- Text: #0F172A (Slate-900)
- Text muted: #64748B (Slate-500)
- Border: #E2E8F0 (Slate-200)
- Surface/cards: #FFFFFF + border-gray-200 + shadow-sm

Goal:
Recreate the AutoBekas landing page with fresh, bright, simple design.

Do not redesign structure.
Preserve spacing, hierarchy, proportions, and interactions.

Output:
Pixel-consistent implementation.

---

# PAGE STRUCTURE

Page Width:
100vw

Desktop Container:
1280px

Tablet:
100%

Mobile:
100%

Sections order:

1 Hero
2 Search
3 Benefits
4 CarGrid
5 WhyChooseUs
6 CTA
7 Footer

Gap between sections:
120px

Section padding:
160px top
160px bottom

Note: Search is rendered between Hero(920px) and Benefits(280px).
Search visually floats at the bottom of Hero via negative margin (-96px).
Its wrapper has `relative z-20` to stack above both Hero and Benefits.

---

# HERO SECTION

Component:
HeroSection.tsx

Height:
920px desktop

Desktop Layout:

------------------------------------
| Navbar                           |
|                                  |
| LEFT                RIGHT        |
| TEXT                CAR          |
|                                  |
| FEATURE ROW                      |
|                                  |
| SEARCH BAR                       |
------------------------------------

Grid:
12 columns

LEFT:
span 5

RIGHT:
span 7

Padding:
64px horizontal

---

# NAVBAR

Height:
80px (scrolled: 72px)

Background (top):
transparent

Background (scrolled):
rgba(255,255,255,0.92)

Blur (scrolled):
20px

Border bottom (scrolled):
1px solid rgba(0,0,0,0.06)

Sticky:
true (fixed)

Shadow:
none

Content:

LEFT:
Logo

CENTER:
Navigation

RIGHT:
Login

Logo Size:
140px

Nav Gap:
48px

Button:
outline (dark border, dark text, hover #0EA5E9 bg + white text)

---

# HERO CONTENT

Width:
520px

Alignment:
left

Top Offset:
180px

Order:

Headline
↓

Subtitle
↓

Feature Icons
↓

Search

---

# HERO TITLE

Text:

Temukan Mobil Bekas
Terbaik Untuk Anda

Font:
Inter

Size:
72px

Weight:
800

Line Height:
1.1

Color:
#FFFFFF (over hero background image)

Accent:
#0EA5E9

Spacing:
12px

Max Width:
580px

---

# HERO SUBTITLE

Font:
18px

Weight:
400

Color:
rgba(255,255,255,0.85)

Line Height:
1.8

Width:
420px

Margin Top:
24px

---

# FEATURE ROW

Items:
4

Layout:
horizontal

Gap:
40px

Each:

Icon:
40

Title:
14

Weight:
500

Color:
white

Top Margin:
48px

---

# HERO IMAGE

Position:
absolute

Right:
0

Bottom:
0

Width:
720px

Object:
contain

Layer:
above background

Shadow:
soft

Transform:

translateY(40px)

---

# HERO BACKGROUND

Image:
city skyline (dark, high-contrast for white text readability)

Overlay:

linear-gradient(
180deg,
rgba(0,0,0,.2),
rgba(0,0,0,.6)
)

Blur:
8px

---

# SEARCH BAR

Position:
floating

Height:
96px

Background:
white

Radius:
20px

Shadow:

0 20px 60px rgba(0,0,0,.08)

Layout:

Input
Select
Select
Select
Select
Button

Gap:
16px

Padding:
24px

Button Width:
160px

---

# SEARCH INPUT

Height:
56

Radius:
12

Border:
1px solid #D1D5DB

Padding:
16px

Focus:
sky blue glow

---

# BUTTON

Primary:

Background:
#0EA5E9

Hover:
#0284C7

Height:
56

Radius:
12

Weight:
600

Shadow:
none

Transition:
200ms

---

# BENEFITS SECTION

Height:
280px

Layout:
4 columns

Icon:
72

Title:
24

Description:
16

Alignment:
center

Gap:
32px

---

# CAR GRID

Component:
CarGrid.tsx

Desktop:
4 columns

Tablet:
2

Mobile:
1

Gap:
24px

Card:

Background:
white

Radius:
20px

Overflow:
hidden

Shadow:
0 10 40 rgba(0,0,0,.06)

Transition:
400ms

Hover:

translateY(-8px)

scale(1.02)

---

# CARD IMAGE

Ratio:
16:10

Height:
260px

Object:
cover

Hover:
scale(1.05)

Duration:
600ms

---

# CARD CONTENT

Padding:
24px

Title:
20px
600

Meta:
14px

Price:
32px
700

Color:
#0EA5E9

Location:
14px

---

# WHY SECTION

Layout:
3 columns

Card Height:
360px

Radius:
24px

Image:
top

Content:
bottom

Hover:
none

---

# MOTION

Library:
GSAP

Scroll:
ScrollTrigger

Smooth:
Lenis

---

# HERO TIMELINE

0–10%

Navbar fade

10–30%

Hero title reveal

30–45%

Subtitle reveal

45–60%

Car scale in

60–100%

Search bar rise

---

# STORY TIMELINE

Scroll pin:
true

Duration:
2000px

Sequence:

Car Freeze

↓

Car Separate

↓

Feature Explain

↓

Reassemble

↓

Transition

---

# ANIMATION RULES

Allowed:

opacity
transform
scale

Avoid:

top
left
margin
height

Duration:
600–1200ms

Ease:

power3.out

---

# RESPONSIVE

Desktop:
>=1280

Tablet:
768–1279

Mobile:
<768

Mobile Rules:

Hero:
vertical

Search:
stack

Grid:
horizontal scroll

Reduce animation:
50%

---

# ACCESSIBILITY

Contrast:
AA

Keyboard:
required

Reduced Motion:
supported

---

# IMPLEMENTATION

Use:

Next.js
Tailwind
GSAP
next/image

Avoid:

Bootstrap
MUI
inline style

Generate exact layout.

END