  const form = document.getElementById("registroTalento");
  const modal = new bootstrap.Modal(document.getElementById("modalExito"));

function validacionPaso(tabSelector) {
  const tab = document.querySelector(tabSelector);
  const entradas = tab.querySelectorAll("input, select, textarea");

  let validez = true;

  entradas.forEach(entrada => {
    if (!entrada.checkValidity()) {
      entrada.classList.add("is-invalid");
      validez = false;
    } else {
      entrada.classList.remove("is-invalid");
    }
  });
  return validez;
}

function irHacia(tabBtnId, tabId){
    document.querySelectorAll(".form-btn").forEach(btn =>{
        btn.classList.remove("active");
    });
    const btn = document.getElementById(tabBtnId);
    btn.classList.add("active");

    document.querySelectorAll(".tab-pane").forEach(panel =>{
        panel.classList.remove("show","active");
    });
    const panel = document.getElementById(tabId);
    panel.classList.add("show","active");
}

document.addEventListener("DOMContentLoaded", () =>{

    // Avanzar 
    document.getElementById("next1").addEventListener("click", () => {
        if (!validacionPaso("#tabEstudiante")) return;
        document.getElementById("tab2-btn").disabled = false;
        irHacia("tab2-btn","tabTalento");
    });

    document.getElementById("next2").addEventListener("click", () => {
        if (!validacionPaso("#tabTalento")) return;
        document.getElementById("tab3-btn").disabled = false;
        irHacia("tab3-btn","tabApoderado");
    });

    // volver
    document.getElementById("back2").addEventListener("click", () => {
        irHacia("tab1-btn","tabEstudiante");
    });

    document.getElementById("back3").addEventListener("click", () => {
        irHacia("tab2-btn","tabTalento");
    });

    // submit
});