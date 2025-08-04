// === LocalStorage ===
function obtenerAprobados() {
  const data = localStorage.getItem('mallaAprobados');
  return data ? JSON.parse(data) : [];
}

function guardarAprobados(aprobados) {
  localStorage.setItem('mallaAprobados', JSON.stringify(aprobados));
}

// === Créditos ===
const creditos = {};
for (const nombre in ramos) {
  creditos[nombre] = ramos[nombre].creditos || 10; // default 10 si no existe
}

function calcularCreditosAprobados() {
  const aprobados = obtenerAprobados();
  return aprobados.reduce((sum, nombre) => sum + (creditos[nombre] || 0), 0);
}

// === Lógica de desbloqueo ===
function actualizarDesbloqueos() {
  const aprobados = obtenerAprobados();
  const desbloqueados = new Set(aprobados);
  const totalCreditos = calcularCreditosAprobados();

  for (const nombre in ramos) {
    const ramo = ramos[nombre];
    const elem = document.getElementById(nombre);
    if (!elem) continue;

    if (aprobados.includes(nombre)) {
      elem.classList.remove("bloqueado");
      continue;
    }

    // Cumple si todos sus requisitos están en aprobados
    const cumple = (ramo.requisitos || []).every(req => aprobados.includes(req));

    if (cumple) {
      elem.classList.remove("bloqueado");
    } else {
      elem.classList.add("bloqueado");
    }
  }
}

// === Aprobar o desaprobar un ramo ===
function aprobar(e) {
  const ramo = e.currentTarget;
  const nombre = ramo.id;

  if (ramo.classList.contains('bloqueado')) return;

  ramo.classList.toggle('aprobado');

  const aprobados = obtenerAprobados();
  if (ramo.classList.contains('aprobado')) {
    if (!aprobados.includes(nombre)) aprobados.push(nombre);
  } else {
    const idx = aprobados.indexOf(nombre);
    if (idx > -1) aprobados.splice(idx, 1);
  }

  guardarAprobados(aprobados);
  actualizarDesbloqueos();
}

// === Renderizado de la malla ===
document.addEventListener("DOMContentLoaded", () => {
  const contenedor = document.getElementById("linea-tiempo");

  const ramosPorSemestre = {};
  for (const nombre in ramos) {
    const ramo = ramos[nombre];
    if (!ramosPorSemestre[ramo.semestre]) ramosPorSemestre[ramo.semestre] = [];
    ramosPorSemestre[ramo.semestre].push({ ...ramo, nombre });
  }

  const semestres = Object.keys(ramosPorSemestre).sort((a, b) => a - b);
  semestres.forEach(semestre => {
    const divSemestre = document.createElement("div");
    divSemestre.className = "semestre";

    const titulo = document.createElement("h2");
    titulo.textContent = `Semestre ${semestre}`;
    divSemestre.appendChild(titulo);

    ramosPorSemestre[semestre].forEach(ramo => {
      const div = document.createElement("div");
      div.className = `ramo ${ramo.tipo}`;
      div.id = ramo.nombre;

      const tituloRamo = document.createElement("strong");
      tituloRamo.textContent = ramo.nombre;
      div.appendChild(tituloRamo);

      divSemestre.appendChild(div);
    });

    contenedor.appendChild(divSemestre);
  });

  const aprobados = obtenerAprobados();
  const todosRamos = document.querySelectorAll(".ramo");

  todosRamos.forEach(ramo => {
    if (aprobados.includes(ramo.id)) {
      ramo.classList.add("aprobado");
    }
    ramo.addEventListener("click", aprobar);
  });

  actualizarDesbloqueos();
});
