import type { Component } from 'solid-js';
import {
  Router,
  Route,
  Routes,
} from "@solidjs/router";
import { I18nContext, createI18nContext } from "@solid-primitives/i18n";

import Home from './pages/Home';
import About from './pages/About';

const dict = {
  de: {
    about: `Grundsätzlich ist ein sauberer Weg erforderlich, um Pfade wie: /about, /es/about, /de/about zu erstellen, die dieselbe Komponente verwenden, aber sicherstellen, dass das Gebietsschema auf die Sprache im bereitgestellten Pfad umgeschaltet wird, sodass /about das englische Gebietsschema wäre , /es/about wäre spanisches Gebietsschema usw.
    Sie müssen einen sauberen und skalierbaren Weg finden, um dies zu implementieren, natürlich sollte sogar der Index seine eigenen lokalisierten Pfade haben. Verwenden Sie die unten aufgeführten Abhängigkeiten, um dies zu erreichen, und Typoskript, Sie können mehr Abhängigkeiten importieren, aber die Gesamtzahl auf ein Minimum beschränken. Sie können die offiziellen Solidjs-Vite-Vorlagen verwenden, um dies zu booten (solidjs/templates/ts).
    
    Erforderliche Abhängigkeiten
    solid-js @solidjs/router @solid-primitives/i18n`
  },
  en: {
    about: `Basically what is required is a clean way to make paths like: /about, /es/about, /de/about use the same component but making sure the locale is switched to the language in the path provided so /about would be english locale, /es/about would be spanish locale etc.
    You need to make a clean and scalable way to implement this, of course even the index should have it's own localized paths. Use dependencies listed below to achieve this and typescript, you can import more dependencies but keep the overall number to a minimum. You can use the official solidjs vite templates to bootstrap this (solidjs/templates/ts).
    
    Required dependencies
    solid-js @solidjs/router @solid-primitives/i18n`
  },
  es: {
    about: `Básicamente, lo que se requiere es una forma limpia de hacer que las rutas como: /about, /es/about, /de/about usen el mismo componente pero asegurándose de que la configuración regional esté cambiada al idioma en la ruta proporcionada, de modo que /about sea la configuración regional en inglés , /es/about sería español, etc.
    Debe crear una forma limpia y escalable de implementar esto, por supuesto, incluso el índice debe tener sus propias rutas localizadas. Use las dependencias que se enumeran a continuación para lograr esto y mecanografiar, puede importar más dependencias pero mantener el número total al mínimo. Puede usar las plantillas vite oficiales de solidjs para arrancar esto (solidjs/templates/ts).
    
    Dependencias requeridas
    solid-js @solidjs/router @solid-primitives/i18n`
  }
};
const value = createI18nContext(dict, "en");

const App: Component = () => {
  return (
    <I18nContext.Provider value={value}>
      <Router>
        <Routes>
          <Route path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/:language/about" component={About} />
        </Routes>
      </Router>
    </I18nContext.Provider>
  );
};

export default App;
