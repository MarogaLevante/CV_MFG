document.addEventListener('DOMContentLoaded', function() {
    const translations = {
        'en': {
            'profile': 'Professional Profile',
            'specialty': 'Broadcast IT Systems Specialist',
            'profile-text': 'Experienced professional in system administration, technical support, and IT project management for broadcast environments. Expertise in integration, maintenance, and troubleshooting of television production/post-production systems. Skilled in automation, networking, and software development.',
            'competencies': 'Key Competencies:',
            'comp1': 'Technical problem-solving',
            'comp2': 'High-pressure broadcast environments',
            'comp3': 'Process automation',
            'comp4': 'IT project management',
            'comp5': 'Clear and effective communication',
            'quote': '"Detail-oriented, results-driven professional committed to technical excellence. Combines a passion for broadcast technology with teaching experience and multicultural collaboration skills."',
            'experience': 'Professional Experience',
            'present': 'Present',
            'teacher': 'Spanish Language Teacher',
            'teacher-desc': 'Teach Spanish as a foreign language to all proficiency levels.',
            'expert': 'Broadcast IT Systems Expert',
            'expert-desc': 'Technical administration, integration, continuity support, NOC operations, post-production, content management, and TV studio systems.',
            'mentor': 'Project Co-Mentor',
            'mentor-desc': 'Guided student projects in the renovation and expansion of a TV production lab.',
            'admin': 'Audiovisual Systems Administrator',
            'admin-desc': 'Technical support and maintenance of broadcast infrastructure.',
            'education': 'Education & Certifications',
            'degree1': 'BSc in Computer Engineering (Software specialization)',
            'cert1': 'Official DELE Certification (A1-A2/B1)',
            'pmp': 'Project Management Professional (PMP)',
            'devops': 'Cloud DevOps & Automation Engineer',
            'sysadmin': 'Information Systems Administrator',
            'skills': 'Technical Skills',
            'broadcast': 'Broadcast Production & Media:',
            'editing': 'Editing/Post-production:',
            'live': 'Live Production:',
            'automation': 'Automation/Playout:',
            'monitoring': 'Monitoring:',
            'graphics': 'Graphics & CG:',
            'streaming': 'Streaming:',
            'cloud': 'Cloud & DevOps:',
            'workflow': 'Broadcast workflow automation (Python/JavaScript APIs)',
            'systems': 'Systems & Networking:',
            'systems-list': 'Windows/Linux/Mac OS, TCP/IP networks, SDI/IP infrastructure',
            'programming': 'Programming & Databases:',
            'prog-lang': 'Python, JavaScript, HTML/CSS, Java, C#, SQL, MySQL, MongoDB',
            'management': 'Management Tools:',
            'languages': 'Languages',
            'spanish': 'Spanish:',
            'english': 'English:',
            'native': 'Native',
            'intermediate': 'Intermediate',
            'location': 'Amman, Jordan'
        },
        'es': {
            'profile': 'Perfil Profesional',
            'specialty': 'Especialista en Sistemas IT para Broadcast',
            'profile-text': 'Profesional con amplia experiencia en administración de sistemas, soporte técnico y gestión de proyectos tecnológicos en entornos de televisión y producción audiovisual. Experto en integración, mantenimiento y resolución de problemas en sistemas broadcast, con sólidos conocimientos en automatización, redes y desarrollo de software.',
            'competencies': 'Competencias Clave:',
            'comp1': 'Resolución técnica de problemas',
            'comp2': 'Trabajo bajo presión en entornos broadcast',
            'comp3': 'Automatización de procesos',
            'comp4': 'Gestión de proyectos IT',
            'comp5': 'Comunicación clara y efectiva',
            'quote': '"Profesional meticulosa, orientada a resultados y comprometida con la excelencia técnica. Combino mi pasión por la tecnología broadcast con mi capacidad para enseñar y colaborar en equipos multidisciplinares."',
            'experience': 'Experiencia Profesional',
            'present': 'Actual',
            'teacher': 'Profesora de Español',
            'teacher-desc': 'Imparte clases de español como lengua extranjera para todos los niveles.',
            'expert': 'Experta en Sistemas IT para Broadcast',
            'expert-desc': 'Administración técnica, integración, soporte en continuidad, NOC, postproducción, gestión de contenido y estudios de televisión.',
            'mentor': 'Co-Mentora de Proyectos',
            'mentor-desc': 'Dirigió proyectos estudiantiles en la renovación y expansión de un laboratorio de producción televisiva.',
            'admin': 'Administradora de Sistemas Audiovisuales',
            'admin-desc': 'Soporte técnico y mantenimiento de infraestructuras broadcast.',
            'education': 'Formación y Certificaciones',
            'degree1': 'Grado en Ingeniería Informática (especialización en software)',
            'cert1': 'Certificación Oficial DELE (A1-A2/B1)',
            'pmp': 'Project Management Professional (PMP)',
            'devops': 'Ingeniera Cloud DevOps',
            'sysadmin': 'Administradora de Sistemas de Información',
            'skills': 'Habilidades Técnicas',
            'broadcast': 'Producción Broadcast & Medios:',
            'editing': 'Edición/Postproducción:',
            'live': 'Producción en vivo:',
            'automation': 'Automatización/Playout:',
            'monitoring': 'Monitorización:',
            'graphics': 'Gráficos y CG:',
            'streaming': 'Transmisión:',
            'cloud': 'Cloud & DevOps:',
            'workflow': 'Automatización de flujos broadcast (APIs en Python/JavaScript)',
            'systems': 'Sistemas y Redes:',
            'systems-list': 'Windows/Linux/Mac OS, redes TCP/IP, configuración de infraestructuras SDI/IP',
            'programming': 'Programación y Bases de Datos:',
            'prog-lang': 'Python, JavaScript, HTML/CSS, Java, C#, SQL, MySQL, MongoDB',
            'management': 'Herramientas de Gestión:',
            'languages': 'Idiomas',
            'spanish': 'Español:',
            'english': 'Inglés:',
            'native': 'Nativo',
            'intermediate': 'Intermedio',
            'location': 'Amán, Jordania'
        }
    };

    // Language switch functionality
    const switchEn = document.getElementById('switch-en');
    const switchEs = document.getElementById('switch-es');

    switchEn.addEventListener('click', function() {
        switchLanguage('en');
        this.classList.add('active');
        switchEs.classList.remove('active');
    });

    switchEs.addEventListener('click', function() {
        switchLanguage('es');
        this.classList.add('active');
        switchEn.classList.remove('active');
    });

    function switchLanguage(lang) {
        const elements = document.querySelectorAll('[key]');
        elements.forEach(element => {
            const key = element.getAttribute('key');
            if (translations[lang] && translations[lang][key]) {
                if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                    element.value = translations[lang][key];
                } else {
                    element.textContent = translations[lang][key];
                }
            }
        });
    }

    // Set default language to English
    switchLanguage('en');
    switchEn.classList.add('active');
});