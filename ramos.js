const ramos = {
  // === SEMESTRE 1 ===
  "Precálculo": {
    codigo: "MAT1000",
    semestre: 1,
    tipo: "obligatorio",
    requisitos: []
  },
  "Biología de la Célula": {
    codigo: "BIO141C",
    semestre: 1,
    tipo: "obligatorio",
    requisitos: []
  },
  "Integrado de Ciencias Básicas para Farmacología": {
    codigo: "MET101A",
    semestre: 1,
    tipo: "obligatorio",
    requisitos: []
  },
  "Fundamentos Psicológicos para Terapia Ocupacional": {
    codigo: "MET102A",
    semestre: 1,
    tipo: "obligatorio",
    requisitos: []
  },
  "Desarrollo Creativo y Destrezas Terapéuticas": {
    codigo: "OCU101A",
    semestre: 1,
    tipo: "obligatorio",
    requisitos: []
  },
  "Terapia Ocupacional: Profesión y Disciplina": {
    codigo: "OCU102A",
    semestre: 1,
    tipo: "obligatorio",
    requisitos: []
  },

  // === SEMESTRE 2 ===
  "Física": {
    codigo: "FIS109A",
    semestre: 2,
    tipo: "obligatorio",
    requisitos: []
  },
  "Fisiología": {
    codigo: "BIO135T",
    semestre: 2,
    tipo: "obligatorio",
    requisitos: ["BIO141C"]
  },
  "Morfología General y de Sistemas": {
    codigo: "MET201A",
    semestre: 2,
    tipo: "obligatorio",
    requisitos: []
  },
  "Ciclo Vital y Desarrollo Humano": {
    codigo: "MET202A",
    semestre: 2,
    tipo: "obligatorio",
    requisitos: ["MET102A"]
  },
  "Desarrollo Lúdico y Destrezas Terapéuticas": {
    codigo: "OCU201A",
    semestre: 2,
    tipo: "obligatorio",
    requisitos: ["OCU101A"]
  },
  "Formación Teológico": {
    codigo: "TEOLOGICO",
    semestre: 2,
    tipo: "teologico",
    requisitos: []
  },

  // === SEMESTRE 3 ===
  "Análisis del Movimiento Ocupacional": {
    codigo: "CSS301A",
    semestre: 3,
    tipo: "obligatorio",
    requisitos: ["MET201A", "FIS109A"]
  },
  "Fisiopatología General y de Sistemas": {
    codigo: "MET301A",
    semestre: 3,
    tipo: "obligatorio",
    requisitos: ["BIO135T"]
  },
  "Psicología del Trabajo y la Ocupación": {
    codigo: "PSI2502",
    semestre: 3,
    tipo: "obligatorio",
    requisitos: []
  },
  "Neurociencias Aplicadas a Ciencias de la Salud": {
    codigo: "CSS302A",
    semestre: 3,
    tipo: "obligatorio",
    requisitos: ["BIO135T"]
  },
  "Habilidades y Técnicas Terapéuticas I": {
    codigo: "OCU301A",
    semestre: 3,
    tipo: "obligatorio",
    requisitos: ["OCU201A"]
  },
  "OFG I": {
    codigo: "OFG1",
    semestre: 3,
    tipo: "ofg",
    requisitos: []
  },

  // === SEMESTRE 4 ===
  "Patologías del Sistema Músculoesquelético": {
    codigo: "CSS401A",
    semestre: 4,
    tipo: "obligatorio",
    requisitos: ["CSS301A"]
  },
  "Farmacología": {
    codigo: "MET401A",
    semestre: 4,
    tipo: "obligatorio",
    requisitos: ["MET101A"]
  },
  "Bioestadística": {
    codigo: "MET402A",
    semestre: 4,
    tipo: "obligatorio",
    requisitos: ["MAT1000"]
  },
  "Alteraciones del Sistema Nervioso en Niños y Adolescentes": {
    codigo: "MET403A",
    semestre: 4,
    tipo: "obligatorio",
    requisitos: ["CSS302A"]
  },
  "Habilidades y Técnicas Terapéuticas II": {
    codigo: "OCU401A",
    semestre: 4,
    tipo: "obligatorio",
    requisitos: ["OCU301A"]
  },
  "OFG II": {
    codigo: "OFG2",
    semestre: 4,
    tipo: "ofg",
    requisitos: []
  },

  // === SEMESTRE 5 ===
  "Ergonomía y Salud Ocupacional": {
    codigo: "OCU501A",
    semestre: 5,
    tipo: "obligatorio",
    requisitos: ["CSS401A"]
  },
  "Semiología y Anamnesis para Ciencias de la Salud": {
    codigo: "OCU502A",
    semestre: 5,
    tipo: "obligatorio",
    requisitos: ["OCU401A"]
  },
  "Salud Pública": {
    codigo: "MET501A",
    semestre: 5,
    tipo: "obligatorio",
    requisitos: ["MET402A"]
  },
  "Salud Mental Infantojuvenil": {
    codigo: "MET502A",
    semestre: 5,
    tipo: "obligatorio",
    requisitos: ["MET202A", "MET403A"]
  },
  "Alteraciones del Sistema Nervioso": {
    codigo: "MET503A",
    semestre: 5,
    tipo: "obligatorio",
    requisitos: ["CSS302A"]
  },
  "Filosofía: ¿Para Qué?": {
    codigo: "FIL2001",
    semestre: 5,
    tipo: "filosofia",
    requisitos: []
  },

  // === SEMESTRE 6 ===
  "Tecnologías de Apoyo a la Rehabilitación e Inclusión Social": {
    codigo: "OCU601A",
    semestre: 6,
    tipo: "obligatorio",
    requisitos: ["OCU501A"]
  },
  "Razonamiento Profesional": {
    codigo: "OCU602A",
    semestre: 6,
    tipo: "obligatorio",
    requisitos: ["OCU502A"]
  },
  "Intervención y Rehabilitación Sociolaboral": {
    codigo: "OCU603A",
    semestre: 6,
    tipo: "obligatorio",
    requisitos: ["OCU501A"]
  },
  "Salud Mental Adulto y Persona Mayor": {
    codigo: "MET601A",
    semestre: 6,
    tipo: "obligatorio",
    requisitos: ["MET503A"]
  },
  "Bioética": {
    codigo: "CSS601A",
    semestre: 6,
    tipo: "obligatorio",
    requisitos: ["FIL2001"]
  },
  "OFG III": {
    codigo: "OFG3",
    semestre: 6,
    tipo: "ofg",
    requisitos: []
  },

  // === SEMESTRE 7 ===
  "Ortótica": {
    codigo: "OCU701A",
    semestre: 7,
    tipo: "obligatorio",
    requisitos: ["OCU601A"]
  },
  "Evaluación e Intervención en Niños y Adolescentes": {
    codigo: "OCU702A",
    semestre: 7,
    tipo: "obligatorio",
    requisitos: ["OCU602A", "MET502A"]
  },
  "Evaluación e Intervención Psicosocial y Comunitaria": {
    codigo: "OCU703A",
    semestre: 7,
    tipo: "obligatorio",
    requisitos: ["OCU603A"]
  },
  "Ciclo Vital y Desarrollo Humano": {
    codigo: "OCU704A",
    semestre: 7,
    tipo: "obligatorio",
    requisitos: ["MET402A", "CSS601A"]
  },
  "OFG IV": {
    codigo: "OFG4",
    semestre: 7,
    tipo: "ofg",
    requisitos: []
  },
  "OFG V": {
    codigo: "OFG5",
    semestre: 7,
    tipo: "ofg",
    requisitos: []
  },

  // === SEMESTRE 8 ===
  "Evaluación e Intervención en Salud Física Adulto y Persona Mayor": {
    codigo: "OCU801A",
    semestre: 8,
    tipo: "obligatorio",
    requisitos: ["OCU701A", "CSS601A"]
  },
  "Optativo de Profundización": {
    codigo: "OCU804X",
    semestre: 8,
    tipo: "optativo",
    requisitos: []
  },
  "Gestión en Organizaciones de Salud": {
    codigo: "MET801A",
    semestre: 8,
    tipo: "obligatorio",
    requisitos: ["MET402A"]
  },
  "Evaluación e Intervención en Salud Mental Adulto y Persona Mayor": {
    codigo: "OCU802A",
    semestre: 8,
    tipo: "obligatorio",
    requisitos: ["MET401A", "MET601A"]
  },
  "Unidad de Investigación en Ciencia de la Ocupación": {
    codigo: "OCU803A",
    semestre: 8,
    tipo: "obligatorio",
    requisitos: ["OCU704A"]
  },
  "OFG VI": {
    codigo: "OFG6",
    semestre: 8,
    tipo: "ofg",
    requisitos: []
  },

  // === SEMESTRE 9 ===
  "Internado en Salud Física": {
    codigo: "OCU901A",
    semestre: 9,
    tipo: "internado",
    requisitos: ["OCU801A", "OCU802A", "OCU803A", "MET801A", "OCU804X"]
  },
  "Internado en Salud Mental": {
    codigo: "OCU902A",
    semestre: 9,
    tipo: "internado",
    requisitos: ["OCU801A", "OCU802A", "OCU803A", "MET801A", "OCU804X"]
  },
  "Internado en Electivo I": {
    codigo: "OCU905A",
    semestre: 9,
    tipo: "internado",
    requisitos: ["OCU801A", "OCU802A", "OCU803A", "MET801A"]
  },

  // === SEMESTRE 10 ===
  "Internado Infantojuvenil": {
    codigo: "OCU903A",
    semestre: 10,
    tipo: "internado",
    requisitos: ["OCU801A", "OCU802A", "OCU803A", "MET801A", "OCU804X"]
  },
  "Internado Sociocomunitario": {
    codigo: "OCU904A",
    semestre: 10,
    tipo: "internado",
    requisitos: ["OCU801A", "OCU802A", "OCU803A", "MET801A", "OCU804X"]
  },
  "Internado en Electivo II": {
    codigo: "OCU906A",
    semestre: 10,
    tipo: "internado",
    requisitos: ["OCU801A", "OCU802A", "OCU803A", "MET801A"]
  }
};
