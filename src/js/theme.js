// public/js/theme.js

// Función para aplicar el tema
const applyTheme = (theme) => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };
  
  // Función para inicializar el tema
  const initializeTheme = () => {
    const savedTheme = localStorage.getItem('theme');
    console.log("Tema guardado: " + savedTheme);
  
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  
    if (savedTheme) {
      applyTheme(savedTheme);
    } else {
      const theme = systemPrefersDark ? 'dark' : 'light';
      applyTheme(theme);
      localStorage.setItem('theme', theme);
    }
  };
  
  // Función para cambiar el tema
  const toggleTheme = () => {
    const currentTheme = localStorage.getItem('theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    applyTheme(newTheme);
    localStorage.setItem('theme', newTheme);
  };
  
  // Función para asignar el listener al botón
  const setupThemeToggle = () => {
    const themeToggleButton = document.getElementById('themeToggle');
    if (themeToggleButton) {
      themeToggleButton.addEventListener('click', toggleTheme);
    }
  };
  
  // Aplicar el tema y asignar el listener al cargar la página por primera vez
  initializeTheme();
  setupThemeToggle();
  
  // Escuchar el evento 'astro:after-swap' para aplicar el tema y reasignar el listener al cambiar de página
  document.addEventListener('astro:after-swap', () => {
    console.log("Nueva página cargada, aplicando tema y reasignando listener...");
    initializeTheme();
    setupThemeToggle(); // Reasignar el listener del botón
  });