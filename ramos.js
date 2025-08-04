const ramos = {
  // === SEMESTRE 1 ===
  "Precálculo": {
    semestre: 1,
    tipo: "obligatorio",
    requisitos: []
  },
  "Biología de la Célula": {
    semestre: 1,
    tipo: "obligatorio",
    requisitos: []
  },
  "Integrado de Ciencias Básicas para Farmacología": {
    semestre: 1,
    tipo: "obligatorio",
    requisitos: []
  },
  "Fundamentos Psicológicos para Terapia Ocupacional": {
    semestre: 1,
    tipo: "obligatorio",
    requisitos: []
  },
  "Desarrollo Creativo y Destrezas Terapéuticas": {
    semestre: 1,
    tipo: "obligatorio",
    requisitos: []
  },
  "Terapia Ocupacional: Profesión y Disciplina": {
    semestre: 1,
    tipo: "obligatorio",
    requisitos: []
  },

  // === SEMESTRE 2 ===
  "Física": {
    semestre: 2,
    tipo: "obligatorio",
    requisitos: []
  },
  "Fisiología": {
    semestre: 2,
    tipo: "obligatorio",
    requisitos: ["Biología de la Célula"]
  },
  "Morfología General y de Sistemas": {
    semestre: 2,
    tipo: "obligatorio",
    requisitos: []
  },
  "Ciclo Vital y Desarrollo Humano": {
    semestre: 2,
    tipo: "obligatorio",
    requisitos: ["Fundamentos Psicológicos para Terapia Ocupacional"]
  },
  "Desarrollo Lúdico y Destrezas Terapéuticas": {
    semestre: 2,
    tipo: "obligatorio",
    requisitos: ["Desarrollo Creativo y Destrezas Terapéuticas"]
  },
  "Formación Teológico": {
    semestre: 2,
    tipo: "teologico",
    requisitos: []
  },

  // === SEMESTRE 3 ===
  "Análisis del Movimiento Ocupacional": {
    semestre: 3,
    tipo: "obligatorio",
    requisitos: ["Morfología General y de Sistemas", "Física"]
  },
  "Fisiopatología General y de Sistemas": {
    semestre: 3,
    tipo: "obligatorio",
    requisitos: ["Fisiología"]
  },
  "Psicología del Trabajo y la Ocupación": {
    semestre: 3,
    tipo: "obligatorio",
    requisitos: []
  },
  "Neurociencias Aplicadas a Ciencias de la Salud": {
    semestre: 3,
    tipo: "obligatorio",
    requisitos: ["Fisiología"]
  },
  "Habilidades y Técnicas Terapéuticas I": {
    semestre: 3,
    tipo: "obligatorio",
    requisitos: ["Desarrollo Lúdico y Destrezas Terapéuticas"]
  },
  "OFG I": {
    semestre: 3,
    tipo: "ofg",
    requisitos: []
  },

  // === SEMESTRE 4 ===
  "Patologías del Sistema Músculoesquelético": {
    semestre: 4,
    tipo: "obligatorio",
    requisitos: ["Análisis del Movimiento Ocupacional"]
  },
  "Farmacología": {
    semestre: 4,
    tipo: "obligatorio",
    requisitos: ["Integrado de Ciencias Básicas para Farmacología"]
  },
  "Bioestadística": {
    semestre: 4,
    tipo: "obligatorio",
    requisitos: ["Precálculo"]
  },
  "Alteraciones del Sistema Nervioso en Niños y Adolescentes": {
    semestre: 4,
    tipo: "obligatorio",
    requisitos: ["Neurociencias Aplicadas a Ciencias de la Salud"]
  },
  "Habilidades y Técnicas Terapéuticas II": {
    semestre: 4,
    tipo: "obligatorio",
    requisitos: ["Habilidades y Técnicas Terapéuticas I"]
  },
  "OFG II": {
    semestre: 4,
    tipo: "ofg",
    requisitos: []
  },

  // === SEMESTRE 5 ===
  "Ergonomía y Salud Ocupacional": {
    semestre: 5,
    tipo: "obligatorio",
    requisitos: ["Patologías del Sistema Músculoesquelético"]
  },
  "Semiología y Anamnesis para Ciencias de la Salud": {
    semestre: 5,
    tipo: "obligatorio",
    requisitos: ["Habilidades y Técnicas Terapéuticas II"]
  },
  "Salud Pública": {
    semestre: 5,
    tipo: "obligatorio",
    requisitos: ["Bioestadística"]
  },
  "Salud Mental Infantojuvenil": {
    semestre: 5,
    tipo: "obligatorio",
    requisitos: ["Ciclo Vital y Desarrollo Humano", "Alteraciones del Sistema Nervioso en Niños y Adolescentes"]
  },
  "Alteraciones del Sistema Nervioso": {
    semestre: 5,
    tipo: "obligatorio",
    requisitos: ["Neurociencias Aplicadas a Ciencias de la Salud"]
  },
  "Filosofía: ¿Para Qué?": {
    semestre: 5,
    tipo: "filosofia",
    requisitos: []
  },

  // === SEMESTRE 6 ===
  "Tecnologías de Apoyo a la Rehabilitación e Inclusión Social": {
    semestre: 6,
    tipo: "obligatorio",
    requisitos: ["Ergonomía y Salud Ocupacional"]
  },
  "Razonamiento Profesional": {
    semestre: 6,
    tipo: "obligatorio",
    requisitos: ["Semiología y Anamnesis para Ciencias de la Salud"]
  },
  "Intervención y Rehabilitación Sociolaboral": {
    semestre: 6,
    tipo: "obligatorio",
    requisitos: ["Ergonomía y Salud Ocupacional"]
  },
  "Salud Mental Adulto y Persona Mayor": {
    semestre: 6,
    tipo: "obligatorio",
    requisitos: ["Alteraciones del Sistema Nervioso"]
  },
  "Bioética": {
    semestre: 6,
    tipo: "obligatorio",
    requisitos: ["Filosofía: ¿Para Qué?"]
  },
  "OFG III": {
    semestre: 6,
    tipo: "ofg",
    requisitos: []
  },

  // === SEMESTRE 7 ===
  "Ortótica": {
    semestre: 7,
    tipo: "obligatorio",
    requisitos: ["Tecnologías de Apoyo a la Rehabilitación e Inclusión Social"]
  },
  "Evaluación e Intervención en Niños y Adolescentes": {
    semestre: 7,
    tipo: "obligatorio",
    requisitos: ["Razonamiento Profesional", "Salud Mental Infantojuvenil"]
  },
  "Evaluación e Intervención Psicosocial y Comunitaria": {
    semestre: 7,
    tipo: "obligatorio",
    requisitos: ["Intervención y Rehabilitación Sociolaboral"]
  },
  "Ciclo Vital y Desarrollo Humano": {
    semestre: 7,
    tipo: "obligatorio",
    requisitos: ["Bioestadística", "Bioética"]
  },
  "OFG IV": {
    semestre: 7,
    tipo: "ofg",
    requisitos: []
  },
  "OFG V": {
    semestre: 7,
    tipo: "ofg",
    requisitos: []
  },

  // === SEMESTRE 8 ===
  "Evaluación e Intervención en Salud Física Adulto y Persona Mayor": {
    semestre: 8,
    tipo: "obligatorio",
    requisitos: ["Ortótica", "Bioética"]
  },
  "Optativo de Profundización": {
    semestre: 8,
    tipo: "optativo",
    requisitos: []
  },
  "Gestión en Organizaciones de Salud": {
    semestre: 8,
    tipo: "obligatorio",
    requisitos: ["Bioestadística"]
  },
  "Evaluación e Intervención en Salud Mental Adulto y Persona Mayor": {
    semestre: 8,
    tipo: "obligatorio",
    requisitos: ["Farmacología", "Salud Mental Adulto y Persona Mayor"]
  },
  "Unidad de Investigación en Ciencia de la Ocupación": {
    semestre: 8,
    tipo: "obligatorio",
    requisitos: ["Ciclo Vital y Desarrollo Humano"]
  },
  "OFG VI": {
    semestre: 8,
    tipo: "ofg",
    requisitos: []
  },

  // === SEMESTRE 9 ===
  "Internado en Salud Física": {
    semestre: 9,
    tipo: "internado",
    requisitos: [
      "Evaluación e Intervención en Salud Física Adulto y Persona Mayor",
      "Evaluación e Intervención en Salud Mental Adulto y Persona Mayor",
      "Unidad de Investigación en Ciencia de la Ocupación",
      "Gestión en Organizaciones de Salud",
      "Optativo de Profundización"
    ]
  },
  "Internado en Salud Mental": {
    semestre: 9,
    tipo: "internado",
    requisitos: [
      "Evaluación e Intervención en Salud Física Adulto y Persona Mayor",
      "Evaluación e Intervención en Salud Mental Adulto y Persona Mayor",
      "Unidad de Investigación en Ciencia de la Ocupación",
      "Gestión en Organizaciones de Salud",
      "Optativo de Profundización"
    ]
  },
  "Internado en Electivo I": {
    semestre: 9,
    tipo: "internado",
    requisitos: [
      "Evaluación e Intervención en Salud Física Adulto y Persona Mayor",
      "Evaluación e Intervención en Salud Mental Adulto y Persona Mayor",
      "Unidad de Investigación en Ciencia de la Ocupación",
      "Gestión en Organizaciones de Salud"
    ]
  },

  // === SEMESTRE 10 ===
  "Internado Infantojuvenil": {
    semestre: 10,
    tipo: "internado",
    requisitos: [
      "Evaluación e Intervención en Salud Física Adulto y Persona Mayor",
      "Evaluación e Intervención en Salud Mental Adulto y Persona Mayor",
      "Unidad de Investigación en Ciencia de la Ocupación",
      "Gestión en Organizaciones de Salud",
      "Optativo de Profundización"
    ]
  },
  "Internado Sociocomunitario": {
    semestre: 10,
    tipo: "internado",
    requisitos: [
      "Evaluación e Intervención en Salud Física Adulto y Persona Mayor",
      "Evaluación e Intervención en Salud Mental Adulto y Persona Mayor",
      "Unidad de Investigación en Ciencia de la Ocupación",
      "Gestión en Organizaciones de Salud",
      "Optativo de Profundización"
    ]
  },
  "Internado en Electivo II": {
    semestre: 10,
    tipo: "internado",
    requisitos: [
      "Evaluación e Intervención en Salud Física Adulto y Persona Mayor",
      "Evaluación e Intervención en Salud Mental Adulto y Persona Mayor",
      "Unidad de Investigación en Ciencia de la Ocupación",
      "Gestión en Organizaciones de Salud"
    ]
  }
};
