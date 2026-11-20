// ==================== CLÉ MOT (COLOR KEY FOR CLASS PLANNING) ====================
    const CLE_MOT_COLORS = [
      { key: 'Math', label: 'Blue: Math', color: '#38bdf8' },
      { key: 'English', label: 'Green: English', color: '#4ade80' },
      { key: 'PC', label: 'Amber: PC', color: '#fbbf24' },
      { key: 'SVT', label: 'Teal: SVT', color: '#2dd4bf' },
      { key: 'History', label: 'Coral: History', color: '#fb7185' },
      { key: 'French', label: 'Violet: French', color: '#a78bfa' }
    ];

    const DAYS = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const SLOTS = ['08:30 - 10:00', '10:15 - 11:45', '14:00 - 15:30', '15:45 - 17:15'];

    // ==================== STATE DATA ====================
    let subjectsData = [
      { id: 'SUB-01', name: 'Math', code: 'MATH-101' },
      { id: 'SUB-02', name: 'English', code: 'ENG-102' },
      { id: 'SUB-03', name: 'PC', code: 'PHYS-201' },
      { id: 'SUB-04', name: 'SVT', code: 'BIO-202' },
      { id: 'SUB-05', name: 'History', code: 'HIST-105' },
      { id: 'SUB-06', name: 'French', code: 'FR-103' }
    ];

    let classesData = [
      {
        id: 'CLS-01',
        name: 'Class 10-A',
        grade: 'Grade 10',
        average: 15.2,
        planning: [
          ['Math', 'English', 'PC', 'SVT'],
          ['French', 'Math', 'History', ''],
          ['English', 'PC', 'Math', 'SVT'],
          ['SVT', 'History', 'French', 'Math'],
          ['PC', 'English', 'Math', ''],
          ['Math', 'SVT', '', '']
        ]
      },
      {
        id: 'CLS-02',
        name: 'Class 11-A',
        grade: 'Grade 11',
        average: 16.4,
        planning: [
          ['PC', 'Math', 'SVT', 'English'],
          ['Math', 'PC', 'French', 'History'],
          ['SVT', 'Math', 'English', ''],
          ['Math', 'SVT', 'PC', 'French'],
          ['English', 'History', 'Math', ''],
          ['PC', 'Math', '', '']
        ]
      },
      {
        id: 'CLS-03',
        name: 'Class 11-B',
        grade: 'Grade 11',
        average: 14.8,
        planning: [
          ['English', 'French', 'Math', 'History'],
          ['SVT', 'English', 'PC', ''],
          ['Math', 'History', 'French', 'SVT'],
          ['English', 'Math', 'SVT', 'PC'],
          ['History', 'French', 'English', ''],
          ['French', 'Math', '', '']
        ]
      },
      {
        id: 'CLS-04',
        name: 'Class 12-A',
        grade: 'Grade 12',
        average: 16.1,
        planning: [
          ['Math', 'PC', 'Math', 'SVT'],
          ['PC', 'SVT', 'English', 'French'],
          ['Math', 'English', 'PC', ''],
          ['SVT', 'Math', 'History', 'PC'],
          ['French', 'PC', 'Math', ''],
          ['Math', 'SVT', '', '']
        ]
      }
    ];

    let studentsData = [
      {
        id: 'STU-101',
        name: 'Sara Bennani',
        className: 'Class 11-A',
        parentPhone: '+212 6 61 12 34 56',
        status: 'Active',
        notes: [
          { subject: 'Math', exam1: 17.5, exam2: 18.5 },
          { subject: 'English', exam1: 16.0, exam2: 17.0 },
          { subject: 'SVT', exam1: 15.5, exam2: 16.5 },
          { subject: 'PC', exam1: 18.0, exam2: 17.0 }
        ]
      },
      {
        id: 'STU-102',
        name: 'Omar Idrissi',
        className: 'Class 10-A',
        parentPhone: '+212 6 62 98 76 54',
        status: 'Active',
        notes: [
          { subject: 'Math', exam1: 14.5, exam2: 15.5 },
          { subject: 'English', exam1: 16.5, exam2: 17.5 },
          { subject: 'SVT', exam1: 13.0, exam2: 14.0 },
          { subject: 'PC', exam1: 15.0, exam2: 16.0 },
          { subject: 'History', exam1: 16.0, exam2: 15.0 }
        ]
      },
      {
        id: 'STU-103',
        name: 'Lina Tazi',
        className: 'Class 12-A',
        parentPhone: '+212 6 63 45 67 89',
        status: 'Active',
        notes: [
          { subject: 'Math', exam1: 18.0, exam2: 19.0 },
          { subject: 'PC', exam1: 17.5, exam2: 18.5 },
          { subject: 'SVT', exam1: 16.0, exam2: 17.0 },
          { subject: 'English', exam1: 15.0, exam2: 16.0 },
          { subject: 'French', exam1: 16.5, exam2: 17.5 },
          { subject: 'History', exam1: 14.5, exam2: 15.5 }
        ]
      },
      {
        id: 'STU-104',
        name: 'Mehdi Chraibi',
        className: 'Class 11-B',
        parentPhone: '+212 6 64 23 45 67',
        status: 'Active',
        notes: [
          { subject: 'Math', exam1: 13.5, exam2: 14.5 },
          { subject: 'English', exam1: 15.0, exam2: 16.0 },
          { subject: 'PC', exam1: 14.0, exam2: 15.0 }
        ]
      },
      {
        id: 'STU-105',
        name: 'Salma Berrada',
        className: 'Class 12-A',
        parentPhone: '+212 6 65 87 65 43',
        status: 'Inactive',
        notes: [
          { subject: 'Math', exam1: 19.0, exam2: 18.5 },
          { subject: 'English', exam1: 17.0, exam2: 18.0 },
          { subject: 'SVT', exam1: 17.5, exam2: 18.0 },
          { subject: 'PC', exam1: 18.5, exam2: 19.0 }
        ]
      },
      {
        id: 'STU-106',
        name: 'Youssef Fassi',
        className: 'Class 10-A',
        parentPhone: '+212 6 66 19 28 37',
        status: 'Active',
        notes: [
          { subject: 'Math', exam1: 15.0, exam2: 16.0 },
          { subject: 'SVT', exam1: 14.5, exam2: 15.5 },
          { subject: 'PC', exam1: 16.0, exam2: 15.0 },
          { subject: 'French', exam1: 13.5, exam2: 14.5 }
        ]
      }
    ];

    let teachersData = [
      { id: 'TCH-201', name: 'Dr. Nadia Mansouri', subject: 'Math', classes: ['Class 11-A', 'Class 12-A'], phone: '+212 6 70 11 22 33', status: 'Active' },
      { id: 'TCH-202', name: 'Prof. Rachid Alami', subject: 'PC', classes: ['Class 10-A', 'Class 11-A', 'Class 12-A'], phone: '+212 6 71 22 33 44', status: 'Active' },
      { id: 'TCH-203', name: 'Imane Benjelloun', subject: 'English', classes: ['Class 10-A', 'Class 11-B'], phone: '+212 6 72 33 44 55', status: 'Active' },
      { id: 'TCH-204', name: 'Samira Kabbaj', subject: 'SVT', classes: ['Class 11-A', 'Class 11-B', 'Class 12-A'], phone: '+212 6 74 55 66 77', status: 'Active' },
      { id: 'TCH-205', name: 'Karim El Amrani', subject: 'History', classes: ['Class 10-A', 'Class 11-B'], phone: '+212 6 73 44 55 66', status: 'InActive' }
    ];

    let nextStuId = 107;
    let nextTchId = 206;
    let nextClsId = 5;
    let nextSubId = 7;
    let activeStudentModalId = null;
    let activeClassPlanId = null;
    let pendingDelete = null;

    // ==================== CORE UI HELPERS ====================
    const toast = document.getElementById('toast');
    function showToast(msg) {
      toast.textContent = msg;
      toast.classList.add('show');
      clearTimeout(window._tTimer);
      window._tTimer = setTimeout(() => toast.classList.remove('show'), 2600);
    }

    function getInitials(name) {
      return name.replace(/^Dr\.\s|^Prof\.\s/i, '').trim().split(/\s+/).map((p) => p[0]).slice(0, 2).join('').toUpperCase();
    }

    function openModal(id) {
      document.getElementById(id).classList.add('open');
    }

    function closeModal(id) {
      document.getElementById(id).classList.remove('open');
    }

    document.querySelectorAll('[data-close]').forEach((btn) => {
      btn.addEventListener('click', () => closeModal(btn.getAttribute('data-close')));
    });

    document.querySelectorAll('.modal-backdrop').forEach((bd) => {
      bd.addEventListener('click', (e) => {
        if (e.target === bd) bd.classList.remove('open');
      });
    });

    // ==================== THEME & NAVIGATION ====================
    const themeToggleBtn = document.getElementById('themeToggleBtn');
    const themeIcon = document.getElementById('themeIcon');
    const settingsThemeSwitch = document.getElementById('settingsThemeSwitch');

    function setTheme(light) {
      document.body.classList.toggle('light-mode', light);
      themeIcon.className = light ? 'bx bx-moon' : 'bx bx-sun';
      settingsThemeSwitch.checked = light;
    }

    themeToggleBtn.addEventListener('click', () => {
      const isLight = !document.body.classList.contains('light-mode');
      setTheme(isLight);
      showToast(isLight ? 'Light Cyan Glass Mode' : 'Jet Black Slate Glass Mode');
    });

    settingsThemeSwitch.addEventListener('change', (e) => setTheme(e.target.checked));

    const navItems = document.querySelectorAll('.nav-item[data-view]');
    const viewSections = document.querySelectorAll('.view-section');

    function switchView(viewName) {
      navItems.forEach((n) => n.classList.toggle('active', n.getAttribute('data-view') === viewName));
      viewSections.forEach((s) => s.classList.remove('active'));
      const target = document.getElementById(`view-${viewName}`);
      if (target) target.classList.add('active');
      const nav = document.querySelector(`.nav-item[data-view="${viewName}"]`);
      if (nav) {
        document.getElementById('pageTitle').textContent = nav.getAttribute('data-title');
        document.getElementById('pageSubtitle').textContent = nav.getAttribute('data-sub');
      }
      document.getElementById('sidebar').classList.remove('open');
    }

    navItems.forEach((item) => {
      item.addEventListener('click', () => switchView(item.getAttribute('data-view')));
    });

    document.getElementById('brandLogo').addEventListener('click', () => switchView('dashboard'));
    document.getElementById('userBadge').addEventListener('click', () => switchView('profile'));
    document.getElementById('mobileMenuBtn').addEventListener('click', () => {
      document.getElementById('sidebar').classList.toggle('open');
    });

    // Notifications & Logout Handlers
    const notifBtn = document.getElementById('notifBtn');
    const notifDropdown = document.getElementById('notifDropdown');
    notifBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      notifDropdown.classList.toggle('open');
    });
    document.addEventListener('click', (e) => {
      if (!notifDropdown.contains(e.target) && !notifBtn.contains(e.target)) {
        notifDropdown.classList.remove('open');
      }
    });
    document.getElementById('markReadBtn').addEventListener('click', () => {
      document.getElementById('notifDot').style.display = 'none';
      notifDropdown.classList.remove('open');
      showToast('All notifications marked as read.');
    });
    // document.getElementById('langBtn').addEventListener('click', () => {
    //   showToast('Language: English (EN)');
    // });
    document.getElementById('logoutBtn').addEventListener('click', () => openModal('logoutConfirmModal'));
    document.getElementById('confirmLogoutBtn').addEventListener('click', () => {
      closeModal('logoutConfirmModal');
      document.getElementById('loggedOutScreen').classList.add('open');
    });
    document.getElementById('logBackInBtn').addEventListener('click', () => {
      document.getElementById('loggedOutScreen').classList.remove('open');
      showToast('Welcome back, Yassine Talbi!');
    });

    // ==================== STUDENT N-CORNER GEOMETRIC POTENTIAL SVG ====================
    function buildStudentPotentialRadarSVG(items, maxScore = 20, size = 250) {
      const n = Math.max(3, items.length);
      const cx = size / 2;
      const cy = size / 2;
      const radius = size * 0.34;
      const levels = 4;

      const getPoint = (index, ratio) => {
        const angle = (Math.PI * 2 * index) / n - Math.PI / 2;
        return {
          x: cx + radius * ratio * Math.cos(angle),
          y: cy + radius * ratio * Math.sin(angle)
        };
      };

      let gridSvg = `<circle cx="${cx}" cy="${cy}" r="${radius}" fill="none" stroke="var(--radar-grid)" stroke-dasharray="3 3" />`;
      for (let lvl = 1; lvl <= levels; lvl++) {
        const rRatio = lvl / levels;
        const ringPts = Array.from({ length: n }, (_, i) => {
          const p = getPoint(i, rRatio);
          return `${p.x.toFixed(1)},${p.y.toFixed(1)}`;
        }).join(' ');
        gridSvg += `<polygon points="${ringPts}" fill="none" stroke="var(--radar-grid)" stroke-width="1" />`;
      }

      let axesSvg = '';
      const dataPoints = [];

      items.forEach((item, i) => {
        const outer = getPoint(i, 1);
        const labelPt = getPoint(i, 1.24);
        const scoreRatio = Math.max(0.1, Math.min(1, item.value / maxScore));
        const valPt = getPoint(i, scoreRatio);
        dataPoints.push(valPt);

        axesSvg += `<line x1="${cx}" y1="${cy}" x2="${outer.x.toFixed(1)}" y2="${outer.y.toFixed(1)}" stroke="var(--radar-grid)" stroke-width="1" />`;
        axesSvg += `
          <text x="${labelPt.x.toFixed(1)}" y="${labelPt.y.toFixed(1)}" text-anchor="middle" dominant-baseline="middle"
                fill="currentColor" font-size="10.5" font-weight="700">
            ${item.label} (${item.value.toFixed(1)})
          </text>`;
      });

      const polyStr = dataPoints.map((p) => `${p.x.toFixed(1)},${p.y.toFixed(1)}`).join(' ');
      const verticesSvg = dataPoints
        .map(
          (p) =>
            `<circle cx="${p.x.toFixed(1)}" cy="${p.y.toFixed(1)}" r="4.5" fill="#e0fbfc" stroke="#253237" stroke-width="1.6" />`
        )
        .join('');

      return `
        <svg width="${size}" height="${size}" viewBox="0 0 ${size} ${size}" style="overflow:visible;">
          ${gridSvg}
          ${axesSvg}
          <polygon points="${polyStr}" fill="rgba(194, 223, 227, 0.26)" stroke="#c2dfe3" stroke-width="2.4" stroke-linejoin="round" />
          ${verticesSvg}
        </svg>`;
    }

    // ==================== DASHBOARD CONCENTRIC RADIAL ARC GEOMETRIC VISUALIZATION ====================
    function buildDashboardConcentricArcSVG(classes, size = 245) {
      const cx = size / 2;
      const cy = size / 2;
      const arcColors = ['#e0fbfc', '#9db4c0', '#c2dfe3', '#5c6b73', '#fee440'];
      const maxR = size * 0.42;
      const step = classes.length > 0 ? Math.min(20, (maxR - 28) / classes.length) : 18;

      let tracksSvg = '';
      let arcsSvg = '';

      classes.forEach((cls, idx) => {
        const r = maxR - idx * step;
        if (r <= 14) return;
        const circumference = 2 * Math.PI * r;
        const ratio = Math.max(0.05, Math.min(1, Number(cls.average) / 20));
        // Sweep across 270 degrees (3/4 geometric ring)
        const maxArc = circumference * 0.75;
        const dashLen = maxArc * ratio;
        const strokeColor = arcColors[idx % arcColors.length];

        // Background 270-deg track
        tracksSvg += `
          <circle cx="${cx}" cy="${cy}" r="${r.toFixed(1)}"
            fill="none" stroke="var(--radar-grid)" stroke-width="9"
            stroke-dasharray="${maxArc.toFixed(1)} ${circumference.toFixed(1)}"
            stroke-linecap="round"
            transform="rotate(135 ${cx} ${cy})" />`;

        // Active score arc
        arcsSvg += `
          <circle cx="${cx}" cy="${cy}" r="${r.toFixed(1)}"
            fill="none" stroke="${strokeColor}" stroke-width="9"
            stroke-dasharray="${dashLen.toFixed(1)} ${circumference.toFixed(1)}"
            stroke-linecap="round"
            transform="rotate(135 ${cx} ${cy})">
            <title>${cls.name}: ${Number(cls.average).toFixed(1)} / 20</title>
          </circle>`;
      });

      const overallAvg =
        classes.reduce((sum, c) => sum + Number(c.average), 0) / (classes.length || 1);

      return `
        <svg width="${size}" height="${size}" viewBox="0 0 ${size} ${size}">
          <circle cx="${cx}" cy="${cy}" r="36" fill="rgba(157, 180, 192, 0.12)" stroke="var(--glass-border-strong)" stroke-width="1" />
          ${tracksSvg}
          ${arcsSvg}
          <text x="${cx}" y="${cy - 4}" text-anchor="middle" fill="currentColor" font-size="16" font-weight="800">
            ${overallAvg.toFixed(1)}
          </text>
          <text x="${cx}" y="${cy + 13}" text-anchor="middle" fill="var(--text-muted)" font-size="9.5" font-weight="600">
            AVG / 20
          </text>
        </svg>`;
    }

    // ==================== 1. DASHBOARD RENDER ====================
    function renderDashboard() {
      document.getElementById('dashTotalStudents').textContent = studentsData.length;
      document.getElementById('dashTotalTeachers').textContent = teachersData.length;
      document.getElementById('dashTotalClasses').textContent = classesData.length;
      document.getElementById('dashTotalSubjects').textContent = subjectsData.length;

      const avgAll =
        classesData.reduce((sum, c) => sum + Number(c.average), 0) / (classesData.length || 1);
      document.getElementById('overallSchoolAvg').textContent = `School Avg: ${avgAll.toFixed(1)} / 20`;

      // Concentric Geometric Radial Arc Chart
      document.getElementById('dashGeoChartStage').innerHTML = buildDashboardConcentricArcSVG(classesData, 240);

      // Class Average Progress Bars
      document.getElementById('dashClassAvgBars').innerHTML = classesData
        .map((c) => {
          const pct = Math.min(100, Math.round((c.average / 20) * 100));
          return `
            <div class="class-avg-row">
              <div class="class-avg-top">
                <span>${c.name} <small style="color:var(--text-muted);">(${c.grade})</small></span>
                <strong>${Number(c.average).toFixed(1)} / 20</strong>
              </div>
              <div class="bar-track">
                <div class="bar-fill" style="width: ${pct}%;"></div>
              </div>
            </div>`;
        })
        .join('');
    }

    // Dashboard Quick Actions Shortcuts
    document.getElementById('qaAddStudent').addEventListener('click', () => openStudentForm());
    document.getElementById('qaAddTeacher').addEventListener('click', () => openTeacherForm());
    document.getElementById('qaAddClass').addEventListener('click', () => openClassForm());
    document.getElementById('qaAddSubject').addEventListener('click', () => openSubjectForm());

    // ==================== 2. STUDENTS MODULE ====================
    function populateDynamicDropdowns() {
      // Class options for student filter & forms
      const classOptions = classesData.map((c) => `<option value="${c.name}">${c.name}</option>`).join('');
      document.getElementById('stuClassFilter').innerHTML = `<option value="ALL">All Classes</option>${classOptions}`;
      document.getElementById('stuClassInput').innerHTML = classOptions;

      // Subject options for teacher filter & forms
      const subOptions = subjectsData.map((s) => `<option value="${s.name}">${s.name}</option>`).join('');
      document.getElementById('tchSubjectFilter').innerHTML = `<option value="ALL">All Subjects</option>${subOptions}`;
      document.getElementById('tchSubjectInput').innerHTML = subOptions;
      document.getElementById('tchClassFilter').innerHTML = `<option value="ALL">All Assigned Classes</option>${classOptions}`;
    }

    function getStudentOverallAvg(student) {
      if (!student.notes || !student.notes.length) return 0;
      const sum = student.notes.reduce((acc, n) => acc + (Number(n.exam1) + Number(n.exam2)) / 2, 0);
      return sum / student.notes.length;
    }

    function renderStudents() {
      const q = document.getElementById('stuSearchInput').value.trim().toLowerCase();
      const clsFilter = document.getElementById('stuClassFilter').value;
      const stFilter = document.getElementById('stuStatusFilter').value;

      // Update KPI cards
      document.getElementById('stuStatTotal').textContent = studentsData.length;
      document.getElementById('stuStatActive').textContent = studentsData.filter((s) => s.status === 'Active').length;
      const overallStuAvg =
        studentsData.reduce((acc, s) => acc + getStudentOverallAvg(s), 0) / (studentsData.length || 1);
      document.getElementById('stuStatAvg').textContent = overallStuAvg.toFixed(1);

      const filtered = studentsData.filter((s) => {
        const matchQ =
          s.name.toLowerCase().includes(q) ||
          s.id.toLowerCase().includes(q) ||
          s.parentPhone.toLowerCase().includes(q);
        const matchC = clsFilter === 'ALL' || s.className === clsFilter;
        const matchS = stFilter === 'ALL' || s.status === stFilter;
        return matchQ && matchC && matchS;
      });

      // Default Grid View
      const grid = document.getElementById('studentsGridView');
      grid.innerHTML = filtered.length
        ? filtered
            .map((s) => `
          <div class="entity-card">
            <div class="entity-card-top">
              <div class="user-cell">
                <div class="avatar-circle">${getInitials(s.name)}</div>
                <div class="user-meta">
                  <strong>${s.name}</strong>
                  <span>#${s.id} • ${s.className}</span>
                </div>
              </div>
              <span class="status ${s.status === 'Active' ? 'active' : 'soon'}">${s.status}</span>
            </div>
            <div class="entity-card-meta">
              <div><i class='bx bx-buildings'></i><span>Class: <strong>${s.className}</strong></span></div>
              <div><i class='bx bx-phone'></i><span>Parent: ${s.parentPhone}</span></div>
              <div><i class='bx bx-shape-polygon'></i><span>${s.notes.length} Subjects (${s.notes.length}-Corner Potential)</span></div>
            </div>
            <div class="entity-card-footer">
              <button type="button" class="tbl-btn see-more" onclick="openStudentSeeMore('${s.id}')">
                <i class='bx bx-show'></i> See More
              </button>
              <div class="row-actions">
                <button type="button" class="tbl-btn" title="Edit" onclick="openStudentForm('${s.id}')"><i class='bx bx-edit-alt'></i></button>
                <button type="button" class="tbl-btn danger" title="Delete" onclick="promptDelete('student', '${s.id}', '${s.name.replace(/'/g, "\\'")}')"><i class='bx bx-trash'></i></button>
              </div>
            </div>
          </div>`)
            .join('')
        : `<div class="glass-panel" style="grid-column:1/-1; text-align:center; color:var(--text-muted);">No students found.</div>`;

      // Optional Table View
      document.getElementById('studentsTableBody').innerHTML = filtered
        .map((s) => `
        <tr>
          <td><strong>#${s.id}</strong></td>
          <td>${s.name}</td>
          <td>${s.className}</td>
          <td>${s.parentPhone}</td>
          <td>${s.notes.map((n) => n.subject).join(', ')}</td>
          <td><span class="status ${s.status === 'Active' ? 'active' : 'soon'}">${s.status}</span></td>
          <td>
            <div class="row-actions">
              <button type="button" class="tbl-btn see-more" onclick="openStudentSeeMore('${s.id}')">See More</button>
              <button type="button" class="tbl-btn" onclick="openStudentForm('${s.id}')"><i class='bx bx-edit-alt'></i></button>
              <button type="button" class="tbl-btn danger" onclick="promptDelete('student', '${s.id}', '${s.name.replace(/'/g, "\\'")}')"><i class='bx bx-trash'></i></button>
            </div>
          </td>
        </tr>`)
        .join('');
    }

    document.getElementById('stuSearchInput').addEventListener('input', renderStudents);
    document.getElementById('stuClassFilter').addEventListener('change', renderStudents);
    document.getElementById('stuStatusFilter').addEventListener('change', renderStudents);

    // Toggle Grid (default) / Table
    const stuGridBtn = document.getElementById('stuGridBtn');
    const stuTableBtn = document.getElementById('stuTableBtn');
    stuGridBtn.addEventListener('click', () => {
      stuGridBtn.classList.add('active');
      stuTableBtn.classList.remove('active');
      document.getElementById('studentsGridView').style.display = 'grid';
      document.getElementById('studentsTableView').style.display = 'none';
    });
    stuTableBtn.addEventListener('click', () => {
      stuTableBtn.classList.add('active');
      stuGridBtn.classList.remove('active');
      document.getElementById('studentsGridView').style.display = 'none';
      document.getElementById('studentsTableView').style.display = 'block';
    });

    // Student "See More" Modal (Profile + Dynamic N-Corner Potential Shape + Exam Notes)
    function refreshStudentSeeMoreVisuals(student) {
      const cornerCount = student.notes.length;
      document.getElementById('stuCornerCountBadge').textContent = `${cornerCount} Corners (${cornerCount} Subjects)`;

      const radarItems = student.notes.map((n) => ({
        label: n.subject,
        value: (Number(n.exam1) + Number(n.exam2)) / 2
      }));

      const totalAvg =
        radarItems.reduce((sum, item) => sum + item.value, 0) / (radarItems.length || 1);
      document.getElementById('stuOverallAvgBadge').textContent = `Avg: ${totalAvg.toFixed(2)} / 20`;

      document.getElementById('studentPotentialSvgStage').innerHTML = buildStudentPotentialRadarSVG(
        radarItems,
        20,
        245
      );
    }

    window.openStudentSeeMore = function (id) {
      const s = studentsData.find((item) => item.id === id);
      if (!s) return;
      activeStudentModalId = id;

      document.getElementById('stuDetailModalTitle').textContent = `${s.name} — Student Profile & Potential`;
      document.getElementById('stuDetailProfileInfo').innerHTML = `
        <div class="detail-row"><span>Student ID</span><strong>#${s.id}</strong></div>
        <div class="detail-row"><span>Full Name</span><strong>${s.name}</strong></div>
        <div class="detail-row"><span>Class</span><strong>${s.className}</strong></div>
        <div class="detail-row"><span>Parent Phone</span><strong>${s.parentPhone}</strong></div>
        <div class="detail-row">
          <span>Status</span>
          <span class="status ${s.status === 'Active' ? 'active' : 'soon'}">${s.status}</span>
        </div>
      `;

      const notesBody = document.getElementById('stuExamNotesBody');
      notesBody.innerHTML = s.notes
        .map((n, idx) => {
          const avg = ((Number(n.exam1) + Number(n.exam2)) / 2).toFixed(2);
          return `
            <tr>
              <td><strong>${n.subject}</strong></td>
              <td><input readonly type="number" step="0.5" min="0" max="20" class="note-input" data-idx="${idx}" data-field="exam1" value="${n.exam1}" /></td>
              <td><input readonly type="number" step="0.5" min="0" max="20" class="note-input" data-idx="${idx}" data-field="exam2" value="${n.exam2}" /></td>
              <td><strong id="noteRowAvg-${idx}">${avg}</strong> / 20</td>
            </tr>`;
        })
        .join('');

      notesBody.querySelectorAll('.note-input').forEach((inp) => {
        inp.addEventListener('input', () => {
          const idx = Number(inp.getAttribute('data-idx'));
          const field = inp.getAttribute('data-field');
          const val = Math.max(0, Math.min(20, Number(inp.value) || 0));
          s.notes[idx][field] = val;
          const rowAvg = ((Number(s.notes[idx].exam1) + Number(s.notes[idx].exam2)) / 2).toFixed(2);
          const avgCell = document.getElementById(`noteRowAvg-${idx}`);
          if (avgCell) avgCell.textContent = rowAvg;
          refreshStudentSeeMoreVisuals(s);
        });
      });

      refreshStudentSeeMoreVisuals(s);
      openModal('studentSeeMoreModal');
    };

    document.getElementById('saveExamNotesBtn').addEventListener('click', () => {
      closeModal('studentSeeMoreModal');
      renderStudents();
      showToast('Student exam notes saved!');
    });

    // Add / Edit Student Modal
    window.openStudentForm = function (id = null) {
      const existing = id ? studentsData.find((s) => s.id === id) : null;
      document.getElementById('studentFormTitle').textContent = existing
        ? `Edit Student (#${existing.id})`
        : 'Add New Student';
      document.getElementById('editStudentId').value = existing ? existing.id : '';
      document.getElementById('stuNameInput').value = existing ? existing.name : '';
      document.getElementById('stuClassInput').value = existing ? existing.className : classesData[0]?.name || 'Class 10-A';
      document.getElementById('stuPhoneInput').value = existing ? existing.parentPhone : '';
      document.getElementById('stuStatusInput').value = existing ? existing.status : 'Active';

      const selectedSubs = existing ? existing.notes.map((n) => n.subject) : ['Math', 'English', 'SVT', 'PC'];
      document.getElementById('stuSubjectsCheckboxes').innerHTML = subjectsData
        .map(
          (sub) => `
          <label class="check-pill">
            <input type="checkbox" value="${sub.name}" ${selectedSubs.includes(sub.name) ? 'checked' : ''} />
            <span>${sub.name}</span>
          </label>`
        )
        .join('');

      openModal('studentFormModal');
    };

    document.getElementById('stuAddBtn').addEventListener('click', () => openStudentForm());

    document.getElementById('studentForm').addEventListener('submit', (e) => {
      e.preventDefault();
      const editId = document.getElementById('editStudentId').value;
      const checkedSubs = Array.from(
        document.querySelectorAll('#stuSubjectsCheckboxes input:checked')
      ).map((cb) => cb.value);

      if (checkedSubs.length < 3) {
        showToast('Please select at least 3 subjects for the geometric shape.');
        return;
      }

      const name = document.getElementById('stuNameInput').value.trim();
      const className = document.getElementById('stuClassInput').value;
      const parentPhone = document.getElementById('stuPhoneInput').value.trim();
      const status = document.getElementById('stuStatusInput').value;

      if (editId) {
        const idx = studentsData.findIndex((s) => s.id === editId);
        if (idx !== -1) {
          const oldNotes = studentsData[idx].notes;
          const mergedNotes = checkedSubs.map((subName) => {
            const found = oldNotes.find((n) => n.subject === subName);
            return found || { subject: subName, exam1: 15.0, exam2: 15.5 };
          });
          studentsData[idx] = {
            ...studentsData[idx],
            name,
            className,
            parentPhone,
            status,
            notes: mergedNotes
          };
        }
        showToast(`Updated ${name}.`);
      } else {
        const notes = checkedSubs.map((subName) => ({
          subject: subName,
          exam1: 15.0,
          exam2: 16.0
        }));
        studentsData.unshift({
          id: `STU-${nextStuId++}`,
          name,
          className,
          parentPhone,
          status,
          notes
        });
        showToast(`${name} added!`);
      }

      closeModal('studentFormModal');
      renderStudents();
      renderDashboard();
    });

    // ==================== 3. TEACHERS MODULE (1 SUBJECT, MULTI-CLASS, NO SEE MORE) ====================
    function renderTeachers() {
      const q = document.getElementById('tchSearchInput').value.trim().toLowerCase();
      const subFilter = document.getElementById('tchSubjectFilter').value;
      const clsFilter = document.getElementById('tchClassFilter').value;

      document.getElementById('tchStatTotal').textContent = teachersData.length;
      document.getElementById('tchStatActive').textContent = teachersData.filter((t) => t.status === 'Active').length;
      document.getElementById('tchStatSubjects').textContent = new Set(teachersData.map((t) => t.subject)).size;

      const filtered = teachersData.filter((t) => {
        const matchQ =
          t.name.toLowerCase().includes(q) ||
          t.subject.toLowerCase().includes(q) ||
          t.id.toLowerCase().includes(q);
        const matchSub = subFilter === 'ALL' || t.subject === subFilter;
        const matchCls = clsFilter === 'ALL' || t.classes.includes(clsFilter);
        return matchQ && matchSub && matchCls;
      });

      document.getElementById('teachersGridView').innerHTML = filtered.length
        ? filtered
            .map(
              (t) => `
          <div class="entity-card">
            <div class="entity-card-top">
              <div class="user-cell">
                <div class="avatar-circle">${getInitials(t.name)}</div>
                <div class="user-meta">
                  <strong>${t.name}</strong>
                  <span>#${t.id} • Single Subject</span>
                </div>
              </div>
              <span class="status ${t.status === 'Active' ? 'active' : 'soon'}">${t.status}</span>
            </div>
            <div class="entity-card-meta">
              <div><i class='bx bx-book-bookmark'></i><span>Subject: <strong>${t.subject}</strong></span></div>
              <div><i class='bx bx-phone'></i><span>${t.phone}</span></div>
              <div>
                <i class='bx bx-buildings'></i>
                <div class="tag-list">
                  ${t.classes.map((c) => `<span class="mini-tag">${c}</span>`).join('')}
                </div>
              </div>
            </div>
            <div class="entity-card-footer">
              <span style="font-size:0.76rem; color:var(--text-muted);">${t.classes.length} Assigned Classes</span>
              <div class="row-actions">
                <button type="button" class="tbl-btn" title="Edit Teacher" onclick="openTeacherForm('${t.id}')"><i class='bx bx-edit-alt'></i></button>
                <button type="button" class="tbl-btn danger" title="Delete Teacher" onclick="promptDelete('teacher', '${t.id}', '${t.name.replace(/'/g, "\\'")}')"><i class='bx bx-trash'></i></button>
              </div>
            </div>
          </div>`
            )
            .join('')
        : `<div class="glass-panel" style="grid-column:1/-1; text-align:center; color:var(--text-muted);">No teachers found.</div>`;

      document.getElementById('teachersTableBody').innerHTML = filtered
        .map(
          (t) => `
        <tr>
          <td><strong>#${t.id}</strong></td>
          <td>${t.name}</td>
          <td><span class="accent-pill">${t.subject}</span></td>
          <td>${t.classes.join(', ')}</td>
          <td>${t.phone}</td>
          <td><span class="status ${t.status === 'Active' ? 'active' : 'soon'}">${t.status}</span></td>
          <td>
            <div class="row-actions">
              <button type="button" class="tbl-btn" onclick="openTeacherForm('${t.id}')"><i class='bx bx-edit-alt'></i></button>
              <button type="button" class="tbl-btn danger" onclick="promptDelete('teacher', '${t.id}', '${t.name.replace(/'/g, "\\'")}')"><i class='bx bx-trash'></i></button>
            </div>
          </td>
        </tr>`
        )
        .join('');
    }

    document.getElementById('tchSearchInput').addEventListener('input', renderTeachers);
    document.getElementById('tchSubjectFilter').addEventListener('change', renderTeachers);
    document.getElementById('tchClassFilter').addEventListener('change', renderTeachers);

    const tchGridBtn = document.getElementById('tchGridBtn');
    const tchTableBtn = document.getElementById('tchTableBtn');
    tchGridBtn.addEventListener('click', () => {
      tchGridBtn.classList.add('active');
      tchTableBtn.classList.remove('active');
      document.getElementById('teachersGridView').style.display = 'grid';
      document.getElementById('teachersTableView').style.display = 'none';
    });
    tchTableBtn.addEventListener('click', () => {
      tchTableBtn.classList.add('active');
      tchGridBtn.classList.remove('active');
      document.getElementById('teachersGridView').style.display = 'none';
      document.getElementById('teachersTableView').style.display = 'block';
    });

    window.openTeacherForm = function (id = null) {
      const existing = id ? teachersData.find((t) => t.id === id) : null;
      document.getElementById('teacherFormTitle').textContent = existing
        ? `Edit Teacher (#${existing.id})`
        : 'Add New Teacher';
      document.getElementById('editTeacherId').value = existing ? existing.id : '';
      document.getElementById('tchNameInput').value = existing ? existing.name : '';
      document.getElementById('tchSubjectInput').value = existing ? existing.subject : subjectsData[0]?.name || 'Math';
      document.getElementById('tchPhoneInput').value = existing ? existing.phone : '';
      document.getElementById('tchStatusInput').value = existing ? existing.status : 'Active';

      const selectedClasses = existing ? existing.classes : [classesData[0]?.name || 'Class 10-A'];
      document.getElementById('tchClassesCheckboxes').innerHTML = classesData
        .map(
          (c) => `
          <label class="check-pill">
            <input type="checkbox" value="${c.name}" ${selectedClasses.includes(c.name) ? 'checked' : ''} />
            <span>${c.name}</span>
          </label>`
        )
        .join('');

      openModal('teacherFormModal');
    };

    document.getElementById('tchAddBtn').addEventListener('click', () => openTeacherForm());

    document.getElementById('teacherForm').addEventListener('submit', (e) => {
      e.preventDefault();
      const editId = document.getElementById('editTeacherId').value;
      const assignedClasses = Array.from(
        document.querySelectorAll('#tchClassesCheckboxes input:checked')
      ).map((cb) => cb.value);

      if (!assignedClasses.length) {
        showToast('Select at least one class for this teacher.');
        return;
      }

      const payload = {
        name: document.getElementById('tchNameInput').value.trim(),
        subject: document.getElementById('tchSubjectInput').value,
        classes: assignedClasses,
        phone: document.getElementById('tchPhoneInput').value.trim(),
        status: document.getElementById('tchStatusInput').value
      };

      if (editId) {
        const idx = teachersData.findIndex((t) => t.id === editId);
        if (idx !== -1) teachersData[idx] = { ...teachersData[idx], ...payload };
        showToast(`Updated teacher ${payload.name}.`);
      } else {
        teachersData.unshift({ id: `TCH-${nextTchId++}`, ...payload });
        showToast(`${payload.name} added!`);
      }

      closeModal('teacherFormModal');
      renderTeachers();
      renderDashboard();
    });

    // ==================== 4. CLASSES MODULE (NO HOMEROOM TEACHER, NO ROOM NUMBER, WEEKLY PLANNING + CLÉ MOT) ====================
    function renderClasses() {
      const q = document.getElementById('clsSearchInput').value.trim().toLowerCase();
      const gradeFilter = document.getElementById('clsGradeFilter').value;

      document.getElementById('clsStatTotal').textContent = classesData.length;
      // document.getElementById('clsStatPlans').textContent = classesData.length;
      const topAvg = classesData.reduce((m, c) => Math.max(m, Number(c.average)), 0);
      document.getElementById('clsStatTopAvg').textContent = topAvg.toFixed(1);

      const filtered = classesData.filter((c) => {
        const matchQ = c.name.toLowerCase().includes(q) || c.grade.toLowerCase().includes(q);
        const matchG = gradeFilter === 'ALL' || c.grade === gradeFilter;
        return matchQ && matchG;
      });

      document.getElementById('classesGridView').innerHTML = filtered.length
        ? filtered
            .map((c) => {
              const stuCount = studentsData.filter((s) => s.className === c.name).length;
              const filledSessions = c.planning.flat().filter(Boolean).length;
              return `
          <div class="entity-card">
            <div class="entity-card-top">
              <div class="user-cell">
                <div class="avatar-circle"><i class='bx bx-buildings'></i></div>
                <div class="user-meta">
                  <strong>${c.name}</strong>
                  <span>${c.grade}</span>
                </div>
              </div>
              <span class="accent-pill">Avg: ${Number(c.average).toFixed(1)}/20</span>
            </div>
            <div class="entity-card-meta">
              <div><i class='bx bxs-graduation'></i><span>Enrolled Students: <strong>${stuCount}</strong></span></div>
              <div><i class='bx bx-calendar-week'></i><span>Weekly Planning: <strong>${filledSessions} Active Sessions</strong></span></div>
            </div>
            <div class="entity-card-footer">
              <button type="button" class="tbl-btn see-more" onclick="openClassPlanning('${c.id}')">
                <i class='bx bx-calendar'></i> See More (Planning)
              </button>
              <div class="row-actions">
                <button type="button" class="tbl-btn" title="Edit Class" onclick="openClassForm('${c.id}')"><i class='bx bx-edit-alt'></i></button>
                <button type="button" class="tbl-btn danger" title="Delete Class" onclick="promptDelete('class', '${c.id}', '${c.name.replace(/'/g, "\\'")}')"><i class='bx bx-trash'></i></button>
              </div>
            </div>
          </div>`;
            })
            .join('')
        : `<div class="glass-panel" style="grid-column:1/-1; text-align:center; color:var(--text-muted);">No classes found.</div>`;
    }

    document.getElementById('clsSearchInput').addEventListener('input', renderClasses);
    document.getElementById('clsGradeFilter').addEventListener('change', renderClasses);

    function getCleMotColor(subKey) {
      const found = CLE_MOT_COLORS.find((item) => item.key.toLowerCase() === subKey.toLowerCase());
      return found ? found.color : '#9db4c0';
    }

    // ==================== DRAG & DROP CLASS WEEKLY PLANNING ====================
    let draftPlanning = [];
    let draggedPayload = null;

    window.openClassPlanning = function (id) {
      const cls = classesData.find((c) => c.id === id);
      if (!cls) return;
      activeClassPlanId = id;
      draftPlanning = cls.planning.map((row) => [...row]);

      document.getElementById('classPlanModalTitle').textContent = `${cls.name} (${cls.grade}) — Weekly Planning`;

      // Render Draggable Clé Mot Palette
      const paletteBar = document.getElementById('classCleMotBar');
      paletteBar.innerHTML =
        `<strong style="font-size:0.82rem; margin-right:4px;">Clé Mot (Hold & Drag):</strong>` +
        CLE_MOT_COLORS.map(
          (item) => `
          <span class="cle-item" draggable="true" data-subject="${item.key}">
            <span class="cle-swatch" style="background:${item.color};"></span>
            <span>${item.label}</span>
          </span>`
        ).join('');

      paletteBar.querySelectorAll('.cle-item').forEach((chip) => {
        chip.addEventListener('dragstart', (e) => {
          draggedPayload = { type: 'palette', subject: chip.getAttribute('data-subject') };
          e.dataTransfer.effectAllowed = 'copy';
          e.dataTransfer.setData('text/plain', draggedPayload.subject);
        });
      });

      renderTimetableMatrix();
      openModal('classPlanningModal');
    };

    function renderTimetableMatrix() {
      // Rows = Days (Monday - Saturday), Columns = Time Slots
      const thead = `
        <thead>
          <tr>
            <th style="text-align:left; padding-left:14px;">Day / Time</th>
            ${SLOTS.map((s) => `<th>${s}</th>`).join('')}
          </tr>
        </thead>`;

      const tbody = DAYS.map((day, dIdx) => {
        const cells = SLOTS.map((_, sIdx) => {
          const sub = draftPlanning[dIdx]?.[sIdx] || '';
          if (sub) {
            const bg = getCleMotColor(sub);
            return `
              <td class="plan-cell" data-day="${dIdx}" data-slot="${sIdx}">
                <div class="slot-badge" draggable="true" data-day="${dIdx}" data-slot="${sIdx}" style="background:${bg};">
                  <span>${sub}</span>
                  <button type="button" class="slot-remove" title="Remove subject" onclick="clearPlanningCell(${dIdx}, ${sIdx})">&times;</button>
                </div>
              </td>`;
          }
          return `
            <td class="plan-cell" data-day="${dIdx}" data-slot="${sIdx}">
              <span class="empty-slot-hint">Drop here</span>
            </td>`;
        }).join('');
        return `<tr><td class="day-col">${day}</td>${cells}</tr>`;
      }).join('');

      const tableEl = document.getElementById('classTimetable');
      tableEl.innerHTML = `${thead}<tbody>${tbody}</tbody>`;

      // Attach dragstart on placed slot badges (allows moving or swapping)
      tableEl.querySelectorAll('.slot-badge').forEach((badge) => {
        badge.addEventListener('dragstart', (e) => {
          e.stopPropagation();
          const fromDay = Number(badge.getAttribute('data-day'));
          const fromSlot = Number(badge.getAttribute('data-slot'));
          draggedPayload = {
            type: 'cell',
            fromDay,
            fromSlot,
            subject: draftPlanning[fromDay][fromSlot]
          };
          e.dataTransfer.effectAllowed = 'move';
          e.dataTransfer.setData('text/plain', draggedPayload.subject);
        });
      });

      // Attach dragover / dragleave / drop on every timetable cell
      tableEl.querySelectorAll('.plan-cell').forEach((cell) => {
        cell.addEventListener('dragover', (e) => {
          e.preventDefault();
          cell.classList.add('drag-over');
        });
        cell.addEventListener('dragleave', () => {
          cell.classList.remove('drag-over');
        });
        cell.addEventListener('drop', (e) => {
          e.preventDefault();
          cell.classList.remove('drag-over');
          if (!draggedPayload) return;

          const toDay = Number(cell.getAttribute('data-day'));
          const toSlot = Number(cell.getAttribute('data-slot'));

          if (draggedPayload.type === 'palette') {
            draftPlanning[toDay][toSlot] = draggedPayload.subject;
          } else if (draggedPayload.type === 'cell') {
            const { fromDay, fromSlot, subject } = draggedPayload;
            if (fromDay !== toDay || fromSlot !== toSlot) {
              const displaced = draftPlanning[toDay][toSlot];
              draftPlanning[toDay][toSlot] = subject;
              draftPlanning[fromDay][fromSlot] = displaced;
            }
          }
          draggedPayload = null;
          renderTimetableMatrix();
        });
      });
    }

    window.clearPlanningCell = function (dIdx, sIdx) {
      draftPlanning[dIdx][sIdx] = '';
      renderTimetableMatrix();
    };

    document.getElementById('clearAllPlanningBtn').addEventListener('click', () => {
      draftPlanning = DAYS.map(() => SLOTS.map(() => ''));
      renderTimetableMatrix();
      showToast('Schedule cleared. Drag subjects to rebuild.');
    });

    document.getElementById('saveClassPlanningBtn').addEventListener('click', () => {
      const cls = classesData.find((c) => c.id === activeClassPlanId);
      if (cls) {
        cls.planning = draftPlanning.map((row) => [...row]);
      }
      renderClasses();
      closeModal('classPlanningModal');
      showToast('Class weekly planning saved!');
    });

    window.openClassForm = function (id = null) {
      const existing = id ? classesData.find((c) => c.id === id) : null;
      document.getElementById('classFormTitle').textContent = existing ? `Edit ${existing.name}` : 'Add New Class';
      document.getElementById('editClassId').value = existing ? existing.id : '';
      document.getElementById('clsNameInput').value = existing ? existing.name : '';
      document.getElementById('clsGradeInput').value = existing ? existing.grade : 'Grade 10';
      document.getElementById('clsAvgInput').value = existing ? existing.average : 15.5;
      openModal('classFormModal');
    };

    document.getElementById('clsAddBtn').addEventListener('click', () => openClassForm());

    document.getElementById('classForm').addEventListener('submit', (e) => {
      e.preventDefault();
      const editId = document.getElementById('editClassId').value;
      const payload = {
        name: document.getElementById('clsNameInput').value.trim(),
        grade: document.getElementById('clsGradeInput').value,
        average: Number(document.getElementById('clsAvgInput').value)
      };

      if (editId) {
        const idx = classesData.findIndex((c) => c.id === editId);
        if (idx !== -1) classesData[idx] = { ...classesData[idx], ...payload };
        showToast(`Updated ${payload.name}.`);
      } else {
        classesData.push({
          id: `CLS-0${nextClsId++}`,
          ...payload,
          planning: [
            ['Math', 'English', 'PC', 'SVT'],
            ['SVT', 'Math', 'French', ''],
            ['English', 'History', 'Math', 'French'],
            ['PC', 'SVT', 'English', 'History'],
            ['Math', 'French', 'PC', ''],
            ['SVT', 'Math', '', '']
          ]
        });
        showToast(`${payload.name} created!`);
      }

      closeModal('classFormModal');
      populateDynamicDropdowns();
      renderClasses();
      renderDashboard();
    });

    // ==================== 5. SUBJECTS MODULE (ONLY ID, NAME, CODE) ====================
    function renderSubjects() {
      const q = document.getElementById('subSearchInput').value.trim().toLowerCase();
      const filtered = subjectsData.filter(
        (s) =>
          s.id.toLowerCase().includes(q) ||
          s.name.toLowerCase().includes(q) ||
          s.code.toLowerCase().includes(q)
      );

      document.getElementById('subjectsGridView').innerHTML = filtered.length
        ? filtered
            .map(
              (s) => `
          <div class="entity-card">
            <div class="entity-card-top">
              <div class="user-cell">
                <div class="avatar-circle"><i class='bx bx-book-bookmark'></i></div>
                <div class="user-meta">
                  <strong>${s.name}</strong>
                  <span>ID: ${s.id}</span>
                </div>
              </div>
              <span class="accent-pill">${s.code}</span>
            </div>
            <div class="entity-card-footer" style="border-top: 1px solid var(--glass-border); padding-top: 12px;">
              <span style="font-size:0.78rem; color:var(--text-muted);">Code: <strong>${s.code}</strong></span>
              <div class="row-actions">
                <button type="button" class="tbl-btn" title="Edit Subject" onclick="openSubjectForm('${s.id}')"><i class='bx bx-edit-alt'></i></button>
                <button type="button" class="tbl-btn danger" title="Delete Subject" onclick="promptDelete('subject', '${s.id}', '${s.name.replace(/'/g, "\\'")}')"><i class='bx bx-trash'></i></button>
              </div>
            </div>
          </div>`
            )
            .join('')
        : `<div class="glass-panel" style="grid-column:1/-1; text-align:center; color:var(--text-muted);">No subjects found.</div>`;

      document.getElementById('subjectsTableBody').innerHTML = filtered
        .map(
          (s) => `
        <tr>
          <td><strong>${s.id}</strong></td>
          <td>${s.name}</td>
          <td><span class="accent-pill">${s.code}</span></td>
          <td>
            <div class="row-actions">
              <button type="button" class="tbl-btn" onclick="openSubjectForm('${s.id}')"><i class='bx bx-edit-alt'></i></button>
              <button type="button" class="tbl-btn danger" onclick="promptDelete('subject', '${s.id}', '${s.name.replace(/'/g, "\\'")}')"><i class='bx bx-trash'></i></button>
            </div>
          </td>
        </tr>`
        )
        .join('');
    }

    document.getElementById('subSearchInput').addEventListener('input', renderSubjects);

    const subGridBtn = document.getElementById('subGridBtn');
    const subTableBtn = document.getElementById('subTableBtn');
    subGridBtn.addEventListener('click', () => {
      subGridBtn.classList.add('active');
      subTableBtn.classList.remove('active');
      document.getElementById('subjectsGridView').style.display = 'grid';
      document.getElementById('subjectsTableView').style.display = 'none';
    });
    subTableBtn.addEventListener('click', () => {
      subTableBtn.classList.add('active');
      subGridBtn.classList.remove('active');
      document.getElementById('subjectsGridView').style.display = 'none';
      document.getElementById('subjectsTableView').style.display = 'block';
    });

    window.openSubjectForm = function (id = null) {
      const existing = id ? subjectsData.find((s) => s.id === id) : null;
      document.getElementById('subjectFormTitle').textContent = existing
        ? `Edit Subject (${existing.id})`
        : 'Add New Subject';
      document.getElementById('editSubjectId').value = existing ? existing.id : '';
      document.getElementById('subNameInput').value = existing ? existing.name : '';
      document.getElementById('subCodeInput').value = existing ? existing.code : '';
      openModal('subjectFormModal');
    };

    document.getElementById('subAddBtn').addEventListener('click', () => openSubjectForm());

    document.getElementById('subjectForm').addEventListener('submit', (e) => {
      e.preventDefault();
      const editId = document.getElementById('editSubjectId').value;
      const name = document.getElementById('subNameInput').value.trim();
      const code = document.getElementById('subCodeInput').value.trim().toUpperCase();

      if (editId) {
        const idx = subjectsData.findIndex((s) => s.id === editId);
        if (idx !== -1) subjectsData[idx] = { ...subjectsData[idx], name, code };
        showToast(`Updated ${name} (${code}).`);
      } else {
        subjectsData.push({ id: `SUB-0${nextSubId++}`, name, code });
        showToast(`${name} (${code}) added!`);
      }

      closeModal('subjectFormModal');
      populateDynamicDropdowns();
      renderSubjects();
      renderDashboard();
    });

    // ==================== PROFILE, SETTINGS & DELETE ====================
    document.getElementById('profileForm').addEventListener('submit', (e) => {
      e.preventDefault();
      const fullName = `${document.getElementById('profFirstName').value.trim()} ${document.getElementById('profLastName').value.trim()}`;
      document.getElementById('headerAdminName').textContent = fullName;
      document.getElementById('headerAvatar').textContent = getInitials(fullName);
      showToast('Administrator profile saved!');
    });

    document.getElementById('passwordForm').addEventListener('submit', (e) => {
      e.preventDefault();
      e.target.reset();
      showToast('Password updated!');
    });

    document.getElementById('settingsForm').addEventListener('submit', (e) => {
      e.preventDefault();
      const brand = document.getElementById('setSchoolName').value.trim() || 'MySchool';
      document.getElementById('schoolBrandText').textContent = brand;
      document.title = `${brand} | Admin Platform`;
      showToast(`Settings applied for ${brand}!`);
    });

    window.promptDelete = function (type, id, label) {
      pendingDelete = { type, id };
      document.getElementById('deleteConfirmText').textContent = `Are you sure you want to delete ${label} (${id})?`;
      openModal('deleteConfirmModal');
    };

    document.getElementById('confirmDeleteBtn').addEventListener('click', () => {
      if (!pendingDelete) return;
      const { type, id } = pendingDelete;
      if (type === 'student') {
        studentsData = studentsData.filter((s) => s.id !== id);
        renderStudents();
      } else if (type === 'teacher') {
        teachersData = teachersData.filter((t) => t.id !== id);
        renderTeachers();
      } else if (type === 'class') {
        classesData = classesData.filter((c) => c.id !== id);
        populateDynamicDropdowns();
        renderClasses();
      } else if (type === 'subject') {
        subjectsData = subjectsData.filter((s) => s.id !== id);
        populateDynamicDropdowns();
        renderSubjects();
      }
      renderDashboard();
      pendingDelete = null;
      closeModal('deleteConfirmModal');
      showToast('Record deleted.');
    });

    // ==================== INIT ====================
    populateDynamicDropdowns();
    renderDashboard();
    renderStudents();
    renderTeachers();
    renderClasses();
    renderSubjects();

    // cloud code
    // ==================== I18N: ENGLISH / FRANÇAIS ====================
    // Paste this block at the END of your <script>, right after renderSubjects();
    // It translates static HTML, dynamic cards/tables/modals, SVG labels and toasts automatically.

    const FR_EXACT = {
      // Sidebar & header
      'Dashboard': 'Tableau de bord', 'Students': 'Élèves', 'Teachers': 'Enseignants', 'Classes': 'Classes',
      'Subjects': 'Matières', 'Profile': 'Profil', 'Settings': 'Paramètres', 'Log out': 'Déconnexion',
      'Notifications': 'Notifications', 'Switch Language': 'Changer de langue',
      'Toggle Dark / Light Glass': 'Basculer thème sombre / clair',
      'Toggle Menu': 'Afficher le menu',
      // Page titles & subtitles
      'DASHBOARD': 'TABLEAU DE BORD', 'STUDENTS': 'ÉLÈVES', 'TEACHERS': 'ENSEIGNANTS', 'CLASSES': 'CLASSES',
      'SUBJECTS': 'MATIÈRES', 'PROFILE': 'PROFIL', 'SETTINGS': 'PARAMÈTRES',
      'Overview of school performance, class results, and quick admin actions.': 'Aperçu des performances de l’école, des résultats des classes et des actions rapides d’administration.',
      'Manage student enrollments, subject potential shapes, and exam notes.': 'Gérez les inscriptions des élèves, les formes de potentiel par matière et les notes d’examen.',
      'Manage faculty members, single-subject specialties, and assigned classes.': 'Gérez le corps enseignant, les spécialités mono-matière et les classes assignées.',
      'Manage academic classes and color-coded weekly schedules.': 'Gérez les classes et les emplois du temps hebdomadaires codés par couleur.',
      'Curriculum subject registry (ID, Name, and Code).': 'Registre des matières du programme (ID, nom et code).',
      'Administrator account profile and security preferences.': 'Profil du compte administrateur et préférences de sécurité.',
      'Customize glass theme, school name, and academic settings.': 'Personnalisez le thème verre, le nom de l’école et les paramètres académiques.',
      // Dashboard
      'Total Students': 'Total des élèves', 'Total Teachers': 'Total des enseignants',
      'Total Classes': 'Total des classes', 'Total Subjects': 'Total des matières',
      'Active & Enrolled': 'Actifs et inscrits', '1 Subject / Multi-Class': '1 matière / plusieurs classes',
      'With Weekly Planning': 'Avec planning hebdomadaire', 'Curriculum Registry': 'Registre du programme',
      'Geometric Dash — Classes Average Results': 'Tableau géométrique — Moyennes des classes',
      'AVG / 20': 'MOY / 20',
      'Quick Actions': 'Actions rapides', 'Admin Shortcuts': 'Raccourcis admin',
      'Add Student': 'Ajouter un élève', 'Enroll student & assign subjects': 'Inscrire un élève et assigner des matières',
      'Add Teacher': 'Ajouter un enseignant', 'Assign 1 subject & classes': 'Assigner 1 matière et des classes',
      'Add Class': 'Ajouter une classe', 'Create class & weekly planning': 'Créer une classe et son planning hebdomadaire',
      'Add Subject': 'Ajouter une matière', 'Register ID, name & code': 'Enregistrer ID, nom et code',
      // Students
      'Active Students': 'Élèves actifs', 'School Average': 'Moyenne de l’école',
      'All registered records': 'Tous les dossiers enregistrés', 'Enrolled this term': 'Inscrits ce trimestre',
      'Overall exam average': 'Moyenne générale des examens',
      'Search name, ID, or phone...': 'Rechercher nom, ID ou téléphone...',
      'All Classes': 'Toutes les classes', 'All Statuses': 'Tous les statuts',
      'Active': 'Actif', 'Inactive': 'Inactif', 'On Leave': 'En congé',
      'Default: Grid View': 'Par défaut : vue grille', 'Grid View': 'Vue grille', 'Table View': 'Vue tableau',
      'ID': 'ID', 'Student Name': 'Nom de l’élève', 'Class': 'Classe', 'Parent Phone': 'Téléphone du parent',
      'Status': 'Statut', 'Actions': 'Actions',
      'See More': 'Voir plus', 'Edit': 'Modifier', 'Delete': 'Supprimer',
      'No students found.': 'Aucun élève trouvé.', 'No teachers found.': 'Aucun enseignant trouvé.',
      'No classes found.': 'Aucune classe trouvée.', 'No subjects found.': 'Aucune matière trouvée.',
      'Class:': 'Classe :', 'Subject:': 'Matière :', 'Code:': 'Code :',
      'Enrolled Students:': 'Élèves inscrits :', 'Weekly Planning:': 'Planning hebdomadaire :',
      // Teachers
      'Faculty roster': 'Liste du corps enseignant', 'Active Faculty': 'Enseignants actifs',
      'Teaching this term': 'En poste ce trimestre', 'Subjects Covered': 'Matières couvertes',
      '1 Subject per teacher': '1 matière par enseignant', 'Multi-Class Load': 'Charge multi-classes',
      'Avg classes / teacher': 'Moy. classes / enseignant',
      'Search teacher name or subject...': 'Rechercher un enseignant ou une matière...',
      'All Subjects': 'Toutes les matières', 'All Assigned Classes': 'Toutes les classes assignées',
      'Teacher Name': 'Nom de l’enseignant', 'Single Subject': 'Matière unique',
      'Assigned Classes': 'Classes assignées', 'Phone': 'Téléphone',
      'Edit Teacher': 'Modifier l’enseignant', 'Delete Teacher': 'Supprimer l’enseignant',
      // Classes
      'Active sections': 'Sections actives', 'Weekly Plannings': 'Plannings hebdomadaires',
      'Color-coded schedules': 'Emplois du temps colorés', 'Highest Class Avg': 'Meilleure moyenne de classe',
      'Out of 20': 'Sur 20', 'Color Legend Keys': 'Clés de légende', 'Subject color codes': 'Codes couleur des matières',
      'Search class name or grade...': 'Rechercher une classe ou un niveau...', 'All Grades': 'Tous les niveaux',
      'See More (Planning)': 'Voir plus (Planning)', 'Edit Class': 'Modifier la classe', 'Delete Class': 'Supprimer la classe',
      // Subjects
      'Search by ID, subject name, or code...': 'Rechercher par ID, nom ou code...',
      'Subject Name': 'Nom de la matière', 'Code': 'Code',
      'Edit Subject': 'Modifier la matière', 'Delete Subject': 'Supprimer la matière',
      // Profile & settings
      'Administrator Profile': 'Profil administrateur', 'Super Admin': 'Super administrateur',
      'First Name': 'Prénom', 'Last Name': 'Nom', 'Email': 'E-mail', 'Save Profile': 'Enregistrer le profil',
      'Security': 'Sécurité', 'Current Password': 'Mot de passe actuel', 'New Password': 'Nouveau mot de passe',
      'Minimum 6 characters': 'Minimum 6 caractères', 'Update Password': 'Mettre à jour le mot de passe',
      'School Settings': 'Paramètres de l’école', 'Platform Name': 'Nom de la plateforme',
      'Academic Year': 'Année scolaire', 'Apply Settings': 'Appliquer les paramètres',
      'Interface Preferences': 'Préférences d’interface', 'Light Cyan Glass Theme': 'Thème verre cyan clair',
      'Toggle between Jet Black slate and Light Cyan glass': 'Basculer entre l’ardoise noire et le verre cyan clair',
      // Notifications
      'Mark as read': 'Marquer comme lu', 'New Student Enrolled': 'Nouvel élève inscrit',
      // Student modal
      'Student Profile & Potential': 'Profil et potentiel de l’élève',
      'Geometric Subject Potential': 'Potentiel géométrique par matière',
      'Circular radar polygon with vertices matching the student\'s enrolled subjects.': 'Polygone radar circulaire dont les sommets correspondent aux matières de l’élève.',
      'Circular radar polygon with vertices matching the student’s enrolled subjects.': 'Polygone radar circulaire dont les sommets correspondent aux matières de l’élève.',
      'Student Exam Notes': 'Notes d’examen de l’élève',
      'Adjust exam scores below to preview live updates on the student\'s geometric potential shape.': 'Modifiez les notes ci-dessous pour voir en direct la forme de potentiel de l’élève.',
      'Subject': 'Matière', 'Exam 1': 'Examen 1', 'Exam 2': 'Examen 2', 'Average': 'Moyenne',
      'Close': 'Fermer', 'Save Notes': 'Enregistrer les notes',
      'Student ID': 'ID élève', 'Full Name': 'Nom complet',
      // Planning modal
      'Class Weekly Planning': 'Planning hebdomadaire de la classe',
      'Clé Mot (Hold & Drag):': 'Clé Mot (maintenir et glisser) :',
      'Blue: Math': 'Bleu : Maths', 'Green: English': 'Vert : Anglais', 'Amber: PC': 'Ambre : PC',
      'Teal: SVT': 'Turquoise : SVT', 'Coral: History': 'Corail : Histoire', 'Violet: French': 'Violet : Français',
      'Day / Time': 'Jour / Heure', 'Drop here': 'Déposer ici', 'Remove subject': 'Retirer la matière',
      'Monday': 'Lundi', 'Tuesday': 'Mardi', 'Wednesday': 'Mercredi', 'Thursday': 'Jeudi',
      'Friday': 'Vendredi', 'Saturday': 'Samedi',
      'Clear Schedule': 'Vider l’emploi du temps', 'Save Planning': 'Enregistrer le planning', 'Done': 'Terminé',
      // Forms
      'Add New Student': 'Ajouter un nouvel élève', 'Student Full Name': 'Nom complet de l’élève',
      'e.g., Karim Alaoui': 'ex. : Karim Alaoui', 'Enrollment Status': 'Statut d’inscription',
      'Enrolled Subjects (Determines corners of the Geometric Potential shape — pick at least 3)': 'Matières suivies (déterminent les sommets de la forme de potentiel — en choisir au moins 3)',
      'Cancel': 'Annuler', 'Save Student': 'Enregistrer l’élève',
      'Add New Teacher': 'Ajouter un nouvel enseignant', 'Teacher Full Name': 'Nom complet de l’enseignant',
      'e.g., Dr. Nadia Mansouri': 'ex. : Dr. Nadia Mansouri', 'Single Specialty Subject': 'Matière de spécialité unique',
      'Phone Number': 'Numéro de téléphone', 'Assigned Classes (Select multiple classes)': 'Classes assignées (sélection multiple)',
      'Save Teacher': 'Enregistrer l’enseignant',
      'Add New Class': 'Ajouter une nouvelle classe', 'Class Name': 'Nom de la classe',
      'e.g., Class 11-B': 'ex. : Classe 11-B', 'Grade Level': 'Niveau',
      'Class Average Result (/20)': 'Moyenne de la classe (/20)', 'Save Class': 'Enregistrer la classe',
      'Add New Subject': 'Ajouter une nouvelle matière', 'e.g., Mathematics': 'ex. : Mathématiques',
      'Subject Code': 'Code de la matière', 'e.g., MATH-101': 'ex. : MATH-101', 'Save Subject': 'Enregistrer la matière',
      // Confirmations
      'Confirm Deletion': 'Confirmer la suppression',
      'Are you sure you want to delete this record?': 'Voulez-vous vraiment supprimer cet enregistrement ?',
      'Log Out': 'Déconnexion', 'Are you sure you want to end your session?': 'Voulez-vous vraiment terminer votre session ?',
      'Session Closed': 'Session terminée',
      'You have been safely signed out of MySchool.': 'Vous avez été déconnecté de MySchool en toute sécurité.',
      'Sign Back In': 'Se reconnecter',
      // Toasts
      'Light Cyan Glass Mode': 'Mode verre cyan clair', 'Jet Black Slate Glass Mode': 'Mode verre ardoise noire',
      'All notifications marked as read.': 'Toutes les notifications ont été marquées comme lues.',
      'Please select at least 3 subjects for the geometric shape.': 'Veuillez choisir au moins 3 matières pour la forme géométrique.',
      'Student exam notes saved!': 'Notes d’examen enregistrées !',
      'Select at least one class for this teacher.': 'Sélectionnez au moins une classe pour cet enseignant.',
      'Schedule cleared. Drag subjects to rebuild.': 'Emploi du temps vidé. Glissez des matières pour le reconstruire.',
      'Class weekly planning saved!': 'Planning hebdomadaire enregistré !',
      'Administrator profile saved!': 'Profil administrateur enregistré !',
      'Password updated!': 'Mot de passe mis à jour !', 'Record deleted.': 'Enregistrement supprimé.',
      'Math': 'Maths'
    };

    const FR_MONTHS = { January: 'janvier', February: 'février', March: 'mars', April: 'avril', May: 'mai', June: 'juin',
      July: 'juillet', August: 'août', September: 'septembre', October: 'octobre', November: 'novembre', December: 'décembre' };

    // First matching rule wins (order matters: specific before generic)
    const FR_RULES = [
      [/^(January|February|March|April|May|June|July|August|September|October|November|December) (\d+), (\d{4})$/, (m, mo, d, y) => `${d} ${FR_MONTHS[mo]} ${y}`],
      [/^Updated teacher (.+)\.$/, 'Enseignant $1 mis à jour.'],
      [/^Updated (.+) \(([^()]+)\)\.$/, '$1 ($2) mis à jour.'],
      [/^Updated (.+)\.$/, '$1 mis à jour.'],
      [/^Settings applied for (.+)!$/, 'Paramètres appliqués pour $1 !'],
      [/^Welcome back, (.+)!$/, 'Bon retour, $1 !'],
      [/^(.+) added!$/, 'Ajout réussi : $1'],
      [/^(.+) created!$/, 'Création réussie : $1'],
      [/^(.+) — Student Profile & Potential$/, '$1 — Profil et potentiel de l’élève'],
      [/^(.+) — Weekly Planning$/, '$1 — Planning hebdomadaire'],
      [/^Edit Student \((.+)\)$/, 'Modifier l’élève ($1)'],
      [/^Edit Teacher \((.+)\)$/, 'Modifier l’enseignant ($1)'],
      [/^Edit Subject \((.+)\)$/, 'Modifier la matière ($1)'],
      [/^Edit (Class .+)$/, 'Modifier $1'],
      [/^Are you sure you want to delete (.+) \((.+)\)\?$/, 'Voulez-vous vraiment supprimer $1 ($2) ?'],
      [/^School Avg: (.+)$/, 'Moyenne école : $1'],
      [/^Avg: (.+)$/, 'Moy : $1'],
      [/^(\d+) Subjects \((\d+)-Corner Potential\)$/, '$1 matières (potentiel à $2 sommets)'],
      [/^(\d+) Corners \((\d+) Subjects\)$/, '$1 sommets ($2 matières)'],
      [/^(\d+) Corners$/, '$1 sommets'],
      [/^(\d+) Assigned Classes$/, '$1 classes assignées'],
      [/^(\d+) Active Sessions$/, '$1 sessions actives'],
      [/^Parent: (.+)$/, 'Parent : $1'],
      [/^(#\S+) • Single Subject$/, '$1 • Matière unique'],
      [/^ID: (.+)$/, 'ID : $1'],
      [/^(.+) joined (Class .+) • (\d+)m ago$/, '$1 a rejoint $2 • il y a $3 min'],
      [/^(Class .+) Planning Updated$/, 'Planning de $1 mis à jour'],
      [/^Math & PC exam prep slots added • (\d+)h ago$/, 'Créneaux de préparation Maths & PC ajoutés • il y a $1 h']
    ];

    // Always applied afterwards (class names, grades, subject names inside any text)
    const FR_TOKENS = [
      [/\bClass(?= \d)/g, 'Classe'], [/\bGrade(?= \d)/g, 'Niveau'],
      [/\bMath\b/g, 'Maths'], [/\bEnglish\b/g, 'Anglais'], [/\bHistory\b/g, 'Histoire'], [/\bFrench\b/g, 'Français']
    ];

    const FR_HINT_HTML = '<strong>Maintenez et glissez</strong> n’importe quelle puce de la palette Clé Mot ci-dessus et déposez-la dans une cellule jour/heure (ou glissez un bloc existant pour le déplacer ou l’échanger). Cliquez sur <strong>&times;</strong> sur un bloc pour le vider.';

    let currentLang = 'en';
    try { currentLang = localStorage.getItem('myschool_lang') === 'fr' ? 'fr' : 'en'; } catch (e) {}

    const i18nText = new WeakMap(); // text node -> { en, fr }
    const i18nAttr = new WeakMap(); // element  -> { attr: { en, fr } }

    function trFr(str) {
      const core = str.trim();
      if (!core) return str;
      let out;
      if (Object.prototype.hasOwnProperty.call(FR_EXACT, core)) {
        out = FR_EXACT[core];
      } else {
        out = core;
        for (const [re, rep] of FR_RULES) {
          if (re.test(core)) { out = core.replace(re, rep); break; }
        }
      }
      FR_TOKENS.forEach(([re, rep]) => { out = out.replace(re, rep); });
      return str.replace(core, () => out); // keep surrounding whitespace
    }

    function translateTextNode(n) {
      const rec = i18nText.get(n);
      if (currentLang === 'fr') {
        if (rec && n.nodeValue === rec.fr) return;
        const en = n.nodeValue;
        const fr = trFr(en);
        if (fr !== en) { i18nText.set(n, { en, fr }); n.nodeValue = fr; }
      } else if (rec && n.nodeValue === rec.fr) {
        n.nodeValue = rec.en;
        i18nText.delete(n);
      }
    }

    function translateAttrs(el) {
      ['placeholder', 'title'].forEach((attr) => {
        if (!el.hasAttribute(attr)) return;
        const store = i18nAttr.get(el) || {};
        const rec = store[attr];
        const cur = el.getAttribute(attr);
        if (currentLang === 'fr') {
          if (rec && cur === rec.fr) return;
          const fr = trFr(cur);
          if (fr !== cur) { store[attr] = { en: cur, fr }; i18nAttr.set(el, store); el.setAttribute(attr, fr); }
        } else if (rec && cur === rec.fr) {
          el.setAttribute(attr, rec.en);
          delete store[attr];
        }
      });
    }

    function translateAll() {
      const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, {
        acceptNode(n) {
          const tag = n.parentNode && n.parentNode.nodeName;
          return tag === 'SCRIPT' || tag === 'STYLE' ? NodeFilter.FILTER_REJECT : NodeFilter.FILTER_ACCEPT;
        }
      });
      const nodes = [];
      while (walker.nextNode()) nodes.push(walker.currentNode);
      nodes.forEach(translateTextNode);
      document.querySelectorAll('[placeholder],[title]').forEach(translateAttrs);

      if (currentLang === 'fr') {
        document.title = document.title.replace('| Admin Platform', '| Plateforme d’administration');
      } else {
        document.title = document.title.replace('| Plateforme d’administration', '| Admin Platform');
      }
    }

    const i18nObserver = new MutationObserver(() => { if (currentLang === 'fr') runTranslate(); });
    function runTranslate() {
      i18nObserver.disconnect();
      try { translateAll(); }
      finally { i18nObserver.observe(document.body, { childList: true, subtree: true, characterData: true }); }
    }

    function setLang(lang) {
      currentLang = lang;
      try { localStorage.setItem('myschool_lang', lang); } catch (e) {}
      document.documentElement.lang = lang;

      // Hint paragraph with <strong> tags in the planning modal
      const hint = document.querySelector('#classPlanningModal p');
      if (hint) {
        if (!hint.dataset.en) hint.dataset.en = hint.innerHTML;
        hint.innerHTML = lang === 'fr' ? FR_HINT_HTML : hint.dataset.en;
      }
      runTranslate();
    }

    // Language button (replaces the old "Language: English (EN)" toast handler)
    document.getElementById('langBtn').addEventListener('click', () => {
      setLang(currentLang === 'fr' ? 'en' : 'fr');
      showToast(currentLang === 'fr' ? 'Langue : Français (FR)' : 'Language: English (EN)');
    });

    setLang(currentLang);