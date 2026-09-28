# OBSIDIAN AUTO LAB — Luxury Automotive Detailing, PPF & Ceramic Coating Studio

A state-of-the-art, high-end website demo engineered specifically for a premium automotive detailing studio catering to luxury and performance marques (Porsche, BMW M, Mercedes-AMG, Audi RS, Range Rover, Ferrari, Lamborghini, etc.).

---

## 🌟 Live Demo Preview

To preview the website immediately:
- Simply double-click **`index.html`** in any web browser (Chrome, Edge, Safari, Firefox, Brave), or
- Run a local static server via terminal:
  ```bash
  python -m http.server 3000
  ```
  Then open `http://localhost:3000` in your browser.

---

## 💎 Design Direction & Brand Identity

- **Brand Concept**: **OBSIDIAN AUTO LAB** — *The Pinnacle of Automotive Protection & Detailing*
- **Color Palette**:
  - **Deep Obsidian Black (`#07080B`)**: Evokes the clean-room detailing bay environment.
  - **Graphite & Brushed Carbon (`#101520` / `#141A26`)**: Structural studio elements with soft metallic borders.
  - **Clean White Typography & Silver Details (`#FFFFFF` / `#E2E8F0`)**: Crisp, luxury editorial presentation.
  - **Electric Cyan & Precision Blue Accent (`#00D2FF` / `#0066FF`)**: Optical laser alignment, precision calipers, and high-tech ceramic quartz glow.
- **Visual Feeling**: Luxury + Automotive + Performance + Precision + Protection.

---

## 🚀 Key Sections & Standout Interactive Features

### 1. Cinematic Hero Section
- **Headline**: *“More Than A Car Wash. Protection. Perfection. Prestige.”*
- **Ambient Detailing Studio Environment**: Dark luxury lighting highlighting the reflections of a Porsche 911 GT3.
- **Floating HUD Chips**: Real-time laser scan animation with live studio status indicators (Max 2 vehicles per day).
- **Direct Conversion CTAs**: "Book Your Car", "Explore Services", and direct WhatsApp VIP link.

### 2. Standout Interactive Element: The Anatomy of Paint Perfection
- Directly below the hero, a multi-stage interactive surface restoration controller.
- Toggle or scrub between 4 progressive microscopic stages:
  1. **Stage 01: Untreated & Weathered Paint** (42 GU gloss, severe swirl-marks & road tar).
  2. **Stage 02: 2-Stage Precision Paint Correction** (89 GU gloss, 98% defect-free authentic optical clarity).
  3. **Stage 03: 8.5 Mil Optical TPU PPF** (215 microns ballistic stone-chip armor with self-healing polymers).
  4. **Stage 04: 10H Ceramic / Mirror Finish** (99.4 GU hyper-gloss, 118° hydrophobic lotus effect).

### 3. Complete Car Care Services (11 Studio Services)
- Filterable by: **PPF & Protective Coatings**, **Detailing & Paint Correction**, **Safe Washing & Interior**, and **Specialist Treatments**.
- All 11 dedicated services with technical highlights and bullet points:
  1. **Paint Protection Film — PPF** (*"Maximum Paint Protection"*)
  2. **Ceramic Coating** (*"Gloss + Hydrophobic Protection"*)
  3. **Premium Car Wash** (*"Safe Deep Cleaning"*)
  4. **Exterior Detailing** (*"Restore The Finish"*)
  5. **Interior Detailing** (*"Deep Interior Cleaning"*)
  6. **Paint Correction** (*"Mirror-Like Finish"*)
  7. **Graphene / Advanced Coating** (*"Advanced Protection"*)
  8. **Headlight Restoration** (*"Crystal Clarity"*)
  9. **Alloy & Tyre Detailing** (*"Brake Dust Barrier"*)
  10. **Windshield & Glass Coating** (*"Rain Repellency"*)
  11. **Engine Bay Detailing** (*"Factory-Fresh Engine"*)
- Each card has an **"Inquire Service"** button that automatically scrolls to the booking form and pre-selects that specific service.

### 4. Featured PPF Section: "Protect The Paint. Preserve The Value."
- Interactive **Gloss vs Stealth Satin-Matte finish toggle** (see the car switch between optical mirror gloss and stealth satin).
- 4-layer architectural breakdown of TPU film (Self-healing top coat, TPU core, copolymer adhesive, OEM paint).
- Interactive **Heat Self-Healing simulator**: press the button to watch elastomeric polymers reflow and heal simulated scratches under heat.

### 5. Ceramic Coating Section: "Gloss You Can See. Protection You Can Feel."
- Interactive **Water Contact Angle Simulator**: compare Untreated Paint (45° sheet), Traditional Wax (75°), and 10H Ceramic Quartz Matrix (118° spherical water bead).

### 6. Interactive Before & After Comparison Slider
- Draggable split slider supporting mouse drag, touch gestures, and keyboard arrow keys.
- 5 real-world case studies:
  - *Swirl Marks & Holograms → 2-Stage Paint Correction*
  - *Heavy Road Grime → Decontaminated Foam Wash*
  - *Dull Clear Coat → 10H Ceramic Coated Reflection*
  - *Cloudy Oxidized Headlight → Restored UV-Sealed Lens*
  - *Soiled Shiny Leather → Steam Cleaned & Matte Conditioned*

### 7. Why Choose Us (8 Precision Pillars)
- Strict craftsmanship standards: Premium Products, Trained Detailers, Professional Equipment, Safe Washing Techniques, Attention To Detail, Advanced Paint Protection, Transparent Pricing, and Quality-Focused Service (no fabricated years or fake claims).

### 8. The 5-Stage Studio Protocol (Timeline)
- Visual 01 to 05 timeline: *Comprehensive Inspection → Preparation & Chemical Bath → Precision Paint Correction → Protection & Film Application → Final Inspection & IR Heat Curing*.

### 9. Service Packages & Quick Estimator
- 3 transparent packages:
  - **Essential Care** (CTA: *Get Price*)
  - **Detailing Pro** [Most Popular] (CTA: *Get Quote*)
  - **Ultimate Protection** (CTA: *Book Consultation*)
- Interactive **Vehicle Turnaround & Scope Estimator**: select Coupe, Luxury Sedan, Performance SUV, or Exotic Track Spec to see recommended package and turnaround time.

### 10. Work Gallery ("Cars We've Transformed")
- Filterable portfolio: Porsche, Mercedes-AMG, BMW M-Power, Audi RS, Exotics & SUVs.
- Interactive **High-Res Lightbox Inspector** to view details up close.

### 11. Testimonials Section
- Clearly marked demo/placeholder client feedback from owners of Porsche 911 GT3, Mercedes-AMG G63, and BMW M4 Competition.

### 12. High-Conversion Lead Generation & Booking System
- Comprehensive booking form with client name, phone number, vehicle make/model, year/color, service selection, and specific concerns.
- Real-time inline field validation and elegant success confirmation state.
- **Instant WhatsApp Link Generator**: formats all entered vehicle details and notes directly into a pre-filled WhatsApp message for one-click mobile/desktop booking!
- Direct studio phone line and address details.

### 13. Mobile-First Optimization & Sticky Bar
- Dedicated mobile bottom bar with quick **Call Studio**, **WhatsApp**, and **Book Now** actions.
- Touch-friendly before/after slider with clamped bounds.
- Floating WhatsApp button on desktop with real-time "Online" pulse ring.

---

## 📁 File Structure

```
car ppf/
│
├── index.html        # Complete semantic HTML5 structure with all sections
├── styles.css        # Responsive luxury dark automotive CSS & animations
├── script.js         # Interactive controllers, slider logic & WhatsApp generator
└── README.md         # Documentation & Client Demo Presentation Guide
```
