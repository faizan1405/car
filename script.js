/**
 * OBSIDIAN AUTO LAB - LUXURY AUTOMOTIVE STUDIO
 * Core Interactive JavaScript Controller
 */

document.addEventListener('DOMContentLoaded', () => {

  // =========================================================================
  // 1. STICKY NAVBAR & SCROLL BEHAVIOR
  // =========================================================================
  const navbar = document.getElementById('navbar');
  const mobileMenuBtn = document.getElementById('mobileMenuBtn');
  const mobileDrawer = document.getElementById('mobileDrawer');
  const closeDrawerBtn = document.getElementById('closeDrawerBtn');
  const mobileLinks = document.querySelectorAll('.mobile-link');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  }, { passive: true });

  // Mobile drawer controls
  if (mobileMenuBtn && mobileDrawer) {
    mobileMenuBtn.addEventListener('click', () => {
      mobileDrawer.classList.add('open');
      document.body.style.overflow = 'hidden';
    });

    const closeDrawer = () => {
      mobileDrawer.classList.remove('open');
      document.body.style.overflow = '';
    };

    if (closeDrawerBtn) closeDrawerBtn.addEventListener('click', closeDrawer);
    mobileLinks.forEach(link => link.addEventListener('click', closeDrawer));

    document.addEventListener('click', (e) => {
      if (mobileDrawer.classList.contains('open') && 
          !mobileDrawer.contains(e.target) && 
          !mobileMenuBtn.contains(e.target)) {
        closeDrawer();
      }
    });
  }

  // =========================================================================
  // 2. STANDOUT INTERACTIVE ELEMENT: MULTI-STAGE PAINT RESTORATION
  // =========================================================================
  const stageData = {
    1: {
      image: 'https://images.unsplash.com/photo-1601362840469-51e4d8d58785?auto=format&fit=crop&w=1600&q=85',
      badge: 'STAGE 01 • UNTREATED',
      title: 'Factory Clear Coat Under Harsh Daily Exposure',
      description: 'Improper washing, automatic car wash brushes, road tar, and UV radiation create severe spider-web swirls, holograms, water spots, and micro-marring. Sunlight scatters across the damaged clear coat, resulting in a dull, greyish, hazy paint surface.',
      hudStage: 'Untreated Paintwork',
      hudGloss: '42 GU (Dull)',
      hudAngle: '45° (Flat Sheet)',
      hudProtection: 'None',
      statDefects: 'High (85% Swirled)',
      statDepth: 'Flat / Scuffed',
      statIntervention: '2-Stage Machine Correction',
      swirlOpacity: 0.85,
      sweepOpacity: 0.15,
      filter: 'contrast(0.9) brightness(0.9) saturate(0.85)'
    },
    2: {
      image: 'https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?auto=format&fit=crop&w=1600&q=85',
      badge: 'STAGE 02 • PAINT CORRECTION',
      title: 'Compounded & Jewelled To Mirror Perfection',
      description: 'Using specialized Rupes dual-action random orbital polishers and diminishing abrasive compounds, our master detailers remove 95%+ of all swirls, micro-scratches, and oxidation without needlessly thinning the precious factory clear coat.',
      hudStage: 'Corrected & Jewelled',
      hudGloss: '89 GU (High Gloss)',
      hudAngle: '65° (Unprotected)',
      hudProtection: 'Temporary (Bare Paint)',
      statDefects: 'Defects Removed (98%)',
      statDepth: 'Deep Authentic Clarity',
      statIntervention: 'Lock In with TPU PPF / Ceramic',
      swirlOpacity: 0,
      sweepOpacity: 0.5,
      filter: 'contrast(1.08) brightness(1.02) saturate(1.05)'
    },
    3: {
      image: 'https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?auto=format&fit=crop&w=1600&q=85',
      badge: 'STAGE 03 • 8.5 MIL OPTICAL TPU PPF',
      title: 'Self-Healing Kinetic Impact Armor Installed',
      description: 'High-clarity 8.5 mil aliphatic polyurethane (PPF) is precision-cut via CAD templates and vacuum-applied with wrapped edges. High-velocity rock chips and flying gravel bounce off without ever piercing to the painted panel.',
      hudStage: '8.5 Mil TPU Armor',
      hudGloss: '94 GU (Glass Finish)',
      hudAngle: '95° (Water Repellent)',
      hudProtection: 'Ballistic Rock-Chip Barrier',
      statDefects: 'Self-Heals at 60°C',
      statDepth: 'Optical Clarity Shield',
      statIntervention: 'Topped with Ceramic Matrix',
      swirlOpacity: 0,
      sweepOpacity: 0.75,
      filter: 'contrast(1.12) brightness(1.04) saturate(1.08)'
    },
    4: {
      image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1600&q=85',
      badge: 'STAGE 04 • 10H CERAMIC & SHOWROOM FINISH',
      title: 'Hyper-Hydrophobic Museum Mirror Masterpiece',
      description: 'A certified 10H nano-ceramic matrix forms a permanent cross-linked SiO2 crystalline barrier. Sunlight refracts with intense candy depth, water beads at 118°, and road grime effortlessly slides off under standard garden hose pressure.',
      hudStage: 'Showroom Mirror Masterpiece',
      hudGloss: '99.4 GU (Hyper-Gloss)',
      hudAngle: '118° (Lotus Effect)',
      hudProtection: '10H Diamond Crystalline Matrix',
      statDefects: 'Permanent Defect Defense',
      statDepth: 'Hyper Wet Mirror Reflection',
      statIntervention: 'Handover & 5-Year Warranty',
      swirlOpacity: 0,
      sweepOpacity: 1,
      filter: 'contrast(1.18) brightness(1.08) saturate(1.15)'
    }
  };

  const stageButtons = document.querySelectorAll('.stage-step-btn');
  const stageRangeInput = document.getElementById('stageRangeInput');
  const stageMainImage = document.getElementById('stageMainImage');
  const swirlOverlay = document.getElementById('swirlOverlay');
  const stageSweep = document.getElementById('stageSweep');
  const hudStageName = document.getElementById('hudStageName');
  const hudGlossUnits = document.getElementById('hudGlossUnits');
  const hudContactAngle = document.getElementById('hudContactAngle');
  const hudProtectionLevel = document.getElementById('hudProtectionLevel');
  const stageBadge = document.getElementById('stageBadge');
  const stageTitle = document.getElementById('stageTitle');
  const stageDescription = document.getElementById('stageDescription');
  const statDefects = document.getElementById('statDefects');
  const statDepth = document.getElementById('statDepth');
  const statIntervention = document.getElementById('statIntervention');
  const btnNextStage = document.getElementById('btnNextStage');

  let currentStage = 1;

  function updateStage(stageNum) {
    currentStage = parseInt(stageNum, 10);
    const data = stageData[currentStage];
    if (!data) return;

    // Update active tab buttons
    stageButtons.forEach(btn => {
      const isMatch = parseInt(btn.dataset.stage, 10) === currentStage;
      btn.classList.toggle('active', isMatch);
      btn.setAttribute('aria-selected', isMatch ? 'true' : 'false');
    });

    // Update range input
    if (stageRangeInput) {
      stageRangeInput.value = currentStage;
    }

    // Smooth image transition
    if (stageMainImage) {
      stageMainImage.style.filter = data.filter;
      // Preload next image if needed
      stageMainImage.src = data.image;
    }

    if (swirlOverlay) swirlOverlay.style.opacity = data.swirlOpacity;
    if (stageSweep) stageSweep.style.opacity = data.sweepOpacity;

    // HUD Elements
    if (hudStageName) hudStageName.textContent = data.hudStage;
    if (hudGlossUnits) hudGlossUnits.textContent = data.hudGloss;
    if (hudContactAngle) hudContactAngle.textContent = data.hudAngle;
    if (hudProtectionLevel) hudProtectionLevel.textContent = data.hudProtection;

    // Drawer info
    if (stageBadge) stageBadge.textContent = data.badge;
    if (stageTitle) stageTitle.textContent = data.title;
    if (stageDescription) stageDescription.textContent = data.description;
    if (statDefects) statDefects.textContent = data.statDefects;
    if (statDepth) statDepth.textContent = data.statDepth;
    if (statIntervention) statIntervention.textContent = data.statIntervention;

    if (btnNextStage) {
      btnNextStage.innerHTML = currentStage === 4 
        ? '<i class="fa-solid fa-rotate-left"></i> Restart Stage 01' 
        : `Next: Stage 0${currentStage + 1} <i class="fa-solid fa-arrow-right"></i>`;
    }
  }

  stageButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      updateStage(btn.dataset.stage);
    });
  });

  if (stageRangeInput) {
    stageRangeInput.addEventListener('input', (e) => {
      updateStage(e.target.value);
    });
  }

  if (btnNextStage) {
    btnNextStage.addEventListener('click', () => {
      const next = currentStage === 4 ? 1 : currentStage + 1;
      updateStage(next);
    });
  }

  // =========================================================================
  // 3. SERVICES SECTION FILTERING & QUICK INQUIRY
  // =========================================================================
  const filterPills = document.querySelectorAll('.filter-pill');
  const serviceCards = document.querySelectorAll('.service-card');
  const serviceSelect = document.getElementById('serviceSelect');

  filterPills.forEach(pill => {
    pill.addEventListener('click', () => {
      filterPills.forEach(p => p.classList.remove('active'));
      pill.classList.add('active');

      const filterVal = pill.dataset.filter;
      serviceCards.forEach(card => {
        if (filterVal === 'all' || card.dataset.category === filterVal) {
          card.style.display = 'flex';
          setTimeout(() => card.style.opacity = '1', 20);
        } else {
          card.style.opacity = '0';
          card.style.display = 'none';
        }
      });
    });
  });

  // "Inquire Service" button handlers -> auto-select in booking form
  const inquireButtons = document.querySelectorAll('.btn-card-inquire, [data-service]');
  inquireButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      const sName = btn.getAttribute('data-service');
      if (sName && serviceSelect) {
        // Find matching option
        for (let i = 0; i < serviceSelect.options.length; i++) {
          if (serviceSelect.options[i].value.toLowerCase().includes(sName.toLowerCase()) || 
              sName.toLowerCase().includes(serviceSelect.options[i].value.toLowerCase())) {
            serviceSelect.selectedIndex = i;
            break;
          }
        }
      }
    });
  });

  // =========================================================================
  // 4. FEATURED PPF: GLOSS VS MATTE PREVIEW & SELF-HEALING SIMULATOR
  // =========================================================================
  const btnFinishGloss = document.getElementById('btnFinishGloss');
  const btnFinishMatte = document.getElementById('btnFinishMatte');
  const ppfPhoto = document.getElementById('ppfPhoto');
  const finishNote = document.getElementById('finishNote');
  const ppfCurrentBadgeText = document.getElementById('ppfCurrentBadgeText');

  if (btnFinishGloss && btnFinishMatte && ppfPhoto) {
    btnFinishGloss.addEventListener('click', () => {
      btnFinishGloss.classList.add('active');
      btnFinishMatte.classList.remove('active');
      ppfPhoto.classList.remove('matte-mode');
      ppfPhoto.src = 'https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?auto=format&fit=crop&w=1400&q=85';
      if (finishNote) {
        finishNote.innerHTML = '<i class="fa-solid fa-circle-info text-cyan"></i> <strong>Optical Ultra-Gloss:</strong> Deepens color richness and creates a glass-like finish with zero orange peel distortion.';
      }
      if (ppfCurrentBadgeText) ppfCurrentBadgeText.textContent = 'Optical Ultra-Gloss • 8.5 Mil TPU';
    });

    btnFinishMatte.addEventListener('click', () => {
      btnFinishMatte.classList.add('active');
      btnFinishGloss.classList.remove('active');
      ppfPhoto.classList.add('matte-mode');
      ppfPhoto.src = 'https://images.unsplash.com/photo-1520031441872-265e4ff70366?auto=format&fit=crop&w=1400&q=85';
      if (finishNote) {
        finishNote.innerHTML = '<i class="fa-solid fa-circle-info text-cyan"></i> <strong>Stealth Satin-Matte:</strong> Transforms any factory gloss paint into an aggressive, bespoke matte finish while preserving underlying clear coat.';
      }
      if (ppfCurrentBadgeText) ppfCurrentBadgeText.textContent = 'Stealth Satin-Matte • 8.5 Mil TPU';
    });
  }

  // Simulate Self-Healing Trigger
  const btnSimulateHeal = document.getElementById('btnSimulateHeal');
  const shProgressBar = document.getElementById('shProgressBar');
  const shStatus = document.getElementById('shStatus');

  if (btnSimulateHeal && shProgressBar && shStatus) {
    let isHealing = false;
    btnSimulateHeal.addEventListener('click', () => {
      if (isHealing) return;
      isHealing = true;
      btnSimulateHeal.disabled = true;

      const fill = shProgressBar.querySelector('.fill');
      fill.style.width = '0%';
      shStatus.innerHTML = '<span class="text-cyan"><i class="fa-solid fa-fire-burner"></i> Applying warm surface heat (60°C)...</span>';

      setTimeout(() => {
        fill.style.width = '100%';
        shStatus.innerHTML = '<span class="text-cyan"><i class="fa-solid fa-spinner fa-spin"></i> Cross-linked elastomeric polymers reflowing...</span>';
      }, 100);

      setTimeout(() => {
        shStatus.innerHTML = '<strong style="color: #10B981;"><i class="fa-solid fa-circle-check"></i> Self-Healing Complete:</strong> 100% Micro-scratches repaired.';
        btnSimulateHeal.disabled = false;
        isHealing = false;
      }, 2300);
    });
  }

  // =========================================================================
  // 5. CERAMIC WATER CONTACT ANGLE SIMULATOR
  // =========================================================================
  const surfaceButtons = document.querySelectorAll('.surface-btn');
  const beadAngleText = document.getElementById('beadAngleText');
  const beadStatusLabel = document.getElementById('beadStatusLabel');
  const ceramicWaterImg = document.getElementById('ceramicWaterImg');

  const surfaceData = {
    untreated: {
      angle: '45°',
      label: 'Untreated Surface: Water sheets flatly, dirt adheres readily',
      image: 'https://images.unsplash.com/photo-1601362840469-51e4d8d58785?auto=format&fit=crop&w=1200&q=85'
    },
    wax: {
      angle: '75°',
      label: 'Carnauba Wax: Weak water beading, evaporates after 3-4 weeks',
      image: 'https://images.unsplash.com/photo-1508974239320-0a029497e820?auto=format&fit=crop&w=1200&q=85'
    },
    ceramic: {
      angle: '118°',
      label: '10H Ceramic Matrix: Ultra-hydrophobic lotus beading (Years of durability)',
      image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=85'
    }
  };

  surfaceButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      surfaceButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const sType = btn.dataset.surface;
      const data = surfaceData[sType];
      if (data) {
        if (beadAngleText) beadAngleText.textContent = data.angle;
        if (beadStatusLabel) beadStatusLabel.textContent = data.label;
        if (ceramicWaterImg) ceramicWaterImg.src = data.image;
      }
    });
  });

  // =========================================================================
  // 6. INTERACTIVE BEFORE & AFTER COMPARISON SLIDER
  // =========================================================================
  const baSliderContainer = document.getElementById('baSliderContainer');
  const baBeforeLayer = document.getElementById('baBeforeLayer');
  const baHandle = document.getElementById('baHandle');
  const baBeforeImage = document.getElementById('baBeforeImage');
  const baAfterImage = document.getElementById('baAfterImage');
  const compTabs = document.querySelectorAll('.comp-tab');
  const baVehicleBadge = document.getElementById('baVehicleBadge');
  const baTreatmentTitle = document.getElementById('baTreatmentTitle');
  const baTreatmentDesc = document.getElementById('baTreatmentDesc');

  const caseStudies = {
    swirls: {
      beforeImg: 'https://images.unsplash.com/photo-1601362840469-51e4d8d58785?auto=format&fit=crop&w=1600&q=85',
      afterImg: 'https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?auto=format&fit=crop&w=1600&q=85',
      badge: 'Porsche 911 GT3 • Basalt Black Metallic',
      title: 'Severe Swirl Marks & Holograms to 100% Mirror Reflection',
      desc: 'Removed 15 years of improper brush washing swirls using a 2-stage rotary compound followed by Rupes orbital jewelling polish. Zero fillers used; authentic optical clarity restored.'
    },
    wash: {
      beforeImg: 'https://images.unsplash.com/photo-1563720223523-491ff04651de?auto=format&fit=crop&w=1600&q=85',
      afterImg: 'https://images.unsplash.com/photo-1607860108855-64acf2078ed9?auto=format&fit=crop&w=1600&q=85',
      badge: 'Range Rover Autobiography • Santorini Black',
      title: 'Heavily Soiled Highway Grime to Decontaminated Foam Perfection',
      desc: 'Complete 3-bucket decontamination wash, iron fallout dissolution on delicate wheels, and touchless warm-air drying followed by a 60-day hydrophobic polymer sealant.'
    },
    ceramic: {
      beforeImg: 'https://images.unsplash.com/photo-1606152421802-db97b9c7a11b?auto=format&fit=crop&w=1600&q=85',
      afterImg: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1600&q=85',
      badge: 'Audi RS6 Avant • Mythos Black Metallic',
      title: 'Dull Weathered Factory Clear Coat to 10H Ceramic Water Beading',
      desc: 'Multi-layer 10H quartz matrix application. Creates deep liquid gloss and a 118° hydrophobic contact angle that causes rain and road salt to wash away effortlessly.'
    },
    headlight: {
      beforeImg: 'https://images.unsplash.com/photo-1584345604476-8ec5e12e42dd?auto=format&fit=crop&w=1600&q=85',
      afterImg: 'https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?auto=format&fit=crop&w=1600&q=85',
      badge: 'Ford Mustang Dark Horse • Performance Lens',
      title: 'Cloudy Oxidized Polycarbonate to Crystal Clear Restored Optics',
      desc: 'Precision wet sanding from 1500 to 3000 grit, rotary jewel compounding, and hard-coat UV ceramic cure to guarantee 3+ years against future sun yellowing.'
    },
    interior: {
      beforeImg: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1600&q=85',
      afterImg: 'https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&w=1600&q=85',
      badge: 'Mercedes-AMG GT • Nappa Leather & Alcantara',
      title: 'Soiled Shiny Leather to Factory Matte & Sanitized Interior',
      desc: 'Low-moisture dry steam extraction of carpets and perforated seats, dye-transfer removal, and pH-balanced matte ceramic leather shield preventing grease accumulation.'
    }
  };

  // Case Study Tab Switching
  compTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      compTabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');

      const caseKey = tab.dataset.case;
      const data = caseStudies[caseKey];
      if (data) {
        if (baBeforeImage) baBeforeImage.src = data.beforeImg;
        if (baAfterImage) baAfterImage.src = data.afterImg;
        if (baVehicleBadge) baVehicleBadge.textContent = data.badge;
        if (baTreatmentTitle) baTreatmentTitle.textContent = data.title;
        if (baTreatmentDesc) baTreatmentDesc.textContent = data.desc;
      }
    });
  });

  // Slider Dragging Logic
  if (baSliderContainer && baBeforeLayer && baHandle) {
    let isDragging = false;

    const setSliderPosition = (xPos) => {
      const rect = baSliderContainer.getBoundingClientRect();
      let pos = (xPos - rect.left) / rect.width;
      pos = Math.max(0.02, Math.min(0.98, pos)); // Clamp between 2% and 98%
      const percent = pos * 100;

      baBeforeLayer.style.width = `${percent}%`;
      baHandle.style.left = `${percent}%`;

      const knob = baHandle.querySelector('.ba-handle-knob');
      if (knob) knob.setAttribute('aria-valuenow', Math.round(percent));
    };

    baSliderContainer.addEventListener('mousedown', (e) => {
      isDragging = true;
      setSliderPosition(e.clientX);
    });

    window.addEventListener('mousemove', (e) => {
      if (!isDragging) return;
      setSliderPosition(e.clientX);
    });

    window.addEventListener('mouseup', () => {
      isDragging = false;
    });

    // Touch Support
    baSliderContainer.addEventListener('touchstart', (e) => {
      isDragging = true;
      if (e.touches[0]) setSliderPosition(e.touches[0].clientX);
    }, { passive: true });

    window.addEventListener('touchmove', (e) => {
      if (!isDragging) return;
      if (e.touches[0]) setSliderPosition(e.touches[0].clientX);
    }, { passive: true });

    window.addEventListener('touchend', () => {
      isDragging = false;
    });

    // Keyboard Accessibility on Knob
    const knob = baHandle.querySelector('.ba-handle-knob');
    if (knob) {
      knob.addEventListener('keydown', (e) => {
        let currentPos = parseFloat(baHandle.style.left) || 50;
        if (e.key === 'ArrowLeft') {
          currentPos = Math.max(5, currentPos - 5);
          baBeforeLayer.style.width = `${currentPos}%`;
          baHandle.style.left = `${currentPos}%`;
          knob.setAttribute('aria-valuenow', Math.round(currentPos));
          e.preventDefault();
        } else if (e.key === 'ArrowRight') {
          currentPos = Math.min(95, currentPos + 5);
          baBeforeLayer.style.width = `${currentPos}%`;
          baHandle.style.left = `${currentPos}%`;
          knob.setAttribute('aria-valuenow', Math.round(currentPos));
          e.preventDefault();
        }
      });
    }
  }

  // =========================================================================
  // 7. VEHICLE PROFILE & SCOPE ESTIMATOR WIDGET
  // =========================================================================
  const vPills = document.querySelectorAll('.v-pill');
  const estVehicle = document.getElementById('estVehicle');
  const estPackage = document.getElementById('estPackage');
  const estTime = document.getElementById('estTime');
  const btnApplyEstimate = document.getElementById('btnApplyEstimate');
  const carMakeModelInput = document.getElementById('carMakeModel');

  const estimatorData = {
    coupe: {
      name: 'Sports Car / Coupe (e.g. 911, M4, AMG GT)',
      pkg: 'Detailing Pro or Track Pack PPF',
      time: '1 to 2 Studio Days',
      modelPlaceholder: 'Porsche 911 / BMW M4 / AMG GT'
    },
    sedan: {
      name: 'Luxury Sedan / Estate (e.g. S-Class, RS6, M5)',
      pkg: 'Detailing Pro + 5-Year Ceramic Matrix',
      time: '2 Studio Days',
      modelPlaceholder: 'Audi RS6 / Mercedes S-Class / BMW M5'
    },
    suv: {
      name: 'Performance SUV (e.g. G-Wagon, Urus, Range Rover)',
      pkg: 'Ultimate Protection (Full Body PPF or Dual Ceramic)',
      time: '2 to 3 Studio Days',
      modelPlaceholder: 'Mercedes G63 AMG / Range Rover / Urus'
    },
    exotic: {
      name: 'Exotic / Track Spec (e.g. GT3 RS, SVJ, SF90)',
      pkg: 'Custom Bespoke Full PPF & Carbon Fiber Ceramic',
      time: '3 to 4 Studio Days',
      modelPlaceholder: 'Porsche GT3 RS / Ferrari SF90 / Lamborghini'
    }
  };

  let selectedVClass = 'coupe';

  vPills.forEach(pill => {
    pill.addEventListener('click', () => {
      vPills.forEach(p => p.classList.remove('active'));
      pill.classList.add('active');

      selectedVClass = pill.dataset.vclass;
      const data = estimatorData[selectedVClass];
      if (data) {
        if (estVehicle) estVehicle.textContent = data.name;
        if (estPackage) estPackage.textContent = data.pkg;
        if (estTime) estTime.textContent = data.time;
      }
    });
  });

  if (btnApplyEstimate && carMakeModelInput) {
    btnApplyEstimate.addEventListener('click', () => {
      const data = estimatorData[selectedVClass];
      if (data) {
        carMakeModelInput.value = data.modelPlaceholder;
      }
    });
  }

  // Package Card Buttons -> Select corresponding package
  const packageButtons = document.querySelectorAll('[data-package]');
  packageButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const pkg = btn.dataset.package;
      if (pkg && serviceSelect) {
        for (let i = 0; i < serviceSelect.options.length; i++) {
          if (serviceSelect.options[i].value.toLowerCase().includes(pkg.toLowerCase())) {
            serviceSelect.selectedIndex = i;
            break;
          }
        }
      }
    });
  });

  // =========================================================================
  // 8. GALLERY FILTERING & FULLSCREEN LIGHTBOX MODAL
  // =========================================================================
  const gFilters = document.querySelectorAll('.g-filter');
  const galleryItems = document.querySelectorAll('.gallery-item');
  const lightboxModal = document.getElementById('lightboxModal');
  const lightboxImage = document.getElementById('lightboxImage');
  const lightboxCaption = document.getElementById('lightboxCaption');
  const lightboxClose = document.getElementById('lightboxClose');

  gFilters.forEach(filter => {
    filter.addEventListener('click', () => {
      gFilters.forEach(f => f.classList.remove('active'));
      filter.classList.add('active');

      const brand = filter.dataset.brand;
      galleryItems.forEach(item => {
        if (brand === 'all' || item.dataset.brand === brand) {
          item.style.display = 'block';
        } else {
          item.style.display = 'none';
        }
      });
    });
  });

  const expandButtons = document.querySelectorAll('.btn-expand-img');
  expandButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const imgUrl = btn.dataset.img;
      const title = btn.dataset.title;
      if (lightboxModal && lightboxImage) {
        lightboxImage.src = imgUrl;
        if (lightboxCaption) lightboxCaption.innerHTML = title;
        lightboxModal.classList.add('active');
        document.body.style.overflow = 'hidden';
      }
    });
  });

  const closeLightbox = () => {
    if (lightboxModal) {
      lightboxModal.classList.remove('active');
      document.body.style.overflow = '';
    }
  };

  if (lightboxClose) lightboxClose.addEventListener('click', closeLightbox);
  if (lightboxModal) {
    lightboxModal.addEventListener('click', (e) => {
      if (e.target === lightboxModal) closeLightbox();
    });
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeLightbox();
  });

  // =========================================================================
  // 9. BOOKING FORM VALIDATION & INSTANT WHATSAPP LINK GENERATOR
  // =========================================================================
  const bookingForm = document.getElementById('bookingForm');
  const clientNameInput = document.getElementById('clientName');
  const clientPhoneInput = document.getElementById('clientPhone');
  const carYearColorInput = document.getElementById('carYearColor');
  const clientMessageInput = document.getElementById('clientMessage');
  const formSuccessCard = document.getElementById('formSuccessCard');
  const successName = document.getElementById('successName');
  const successCar = document.getElementById('successCar');
  const btnResetForm = document.getElementById('btnResetForm');
  const btnSendViaWhatsApp = document.getElementById('btnSendViaWhatsApp');

  function validateForm() {
    let isValid = true;

    // Name
    const nameVal = clientNameInput ? clientNameInput.value.trim() : '';
    const nameGroup = clientNameInput ? clientNameInput.closest('.form-group') : null;
    if (!nameVal) {
      if (nameGroup) nameGroup.classList.add('has-error');
      isValid = false;
    } else {
      if (nameGroup) nameGroup.classList.remove('has-error');
    }

    // Phone
    const phoneVal = clientPhoneInput ? clientPhoneInput.value.trim() : '';
    const phoneGroup = clientPhoneInput ? clientPhoneInput.closest('.form-group') : null;
    if (!phoneVal || phoneVal.length < 7) {
      if (phoneGroup) phoneGroup.classList.add('has-error');
      isValid = false;
    } else {
      if (phoneGroup) phoneGroup.classList.remove('has-error');
    }

    // Car Make & Model
    const carVal = carMakeModelInput ? carMakeModelInput.value.trim() : '';
    const carGroup = carMakeModelInput ? carMakeModelInput.closest('.form-group') : null;
    if (!carVal) {
      if (carGroup) carGroup.classList.add('has-error');
      isValid = false;
    } else {
      if (carGroup) carGroup.classList.remove('has-error');
    }

    // Service Select
    const serviceVal = serviceSelect ? serviceSelect.value : '';
    const serviceGroup = serviceSelect ? serviceSelect.closest('.form-group') : null;
    if (!serviceVal) {
      if (serviceGroup) serviceGroup.classList.add('has-error');
      isValid = false;
    } else {
      if (serviceGroup) serviceGroup.classList.remove('has-error');
    }

    return isValid;
  }

  // Handle Form Submission
  if (bookingForm) {
    bookingForm.addEventListener('submit', (e) => {
      e.preventDefault();
      if (!validateForm()) return;

      const name = clientNameInput.value.trim();
      const car = carMakeModelInput.value.trim();

      if (successName) successName.textContent = name;
      if (successCar) successCar.textContent = car;

      bookingForm.style.display = 'none';
      if (formSuccessCard) formSuccessCard.style.display = 'block';
    });
  }

  // Direct WhatsApp Message Builder from Form Input
  if (btnSendViaWhatsApp) {
    btnSendViaWhatsApp.addEventListener('click', () => {
      const name = clientNameInput ? clientNameInput.value.trim() || 'Automotive Enthusiast' : 'Client';
      const phone = clientPhoneInput ? clientPhoneInput.value.trim() : 'Not provided';
      const car = carMakeModelInput ? carMakeModelInput.value.trim() || 'Luxury / Performance Vehicle' : 'Vehicle';
      const yearColor = carYearColorInput ? carYearColorInput.value.trim() : '';
      const service = serviceSelect ? serviceSelect.value || 'General Detailing / PPF Consultation' : 'Consultation';
      const message = clientMessageInput ? clientMessageInput.value.trim() : '';

      let text = `Hello Obsidian Auto Lab! I would like to book an automotive consultation:\n\n`;
      text += `👤 *Name:* ${name}\n`;
      text += `📞 *Phone:* ${phone}\n`;
      text += `🏎️ *Vehicle:* ${car} ${yearColor ? `(${yearColor})` : ''}\n`;
      text += `🛡️ *Desired Treatment:* ${service}\n`;
      if (message) {
        text += `💬 *Notes/Concerns:* ${message}\n`;
      }
      text += `\nPlease let me know your earliest studio availability.`;

      const encodedUrl = `https://wa.me/18005558989?text=${encodeURIComponent(text)}`;
      window.open(encodedUrl, '_blank', 'noopener');
    });
  }

  // Reset Form
  if (btnResetForm && bookingForm && formSuccessCard) {
    btnResetForm.addEventListener('click', () => {
      bookingForm.reset();
      bookingForm.style.display = 'flex';
      formSuccessCard.style.display = 'none';
    });
  }

});
