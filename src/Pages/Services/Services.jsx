import "./Services.css"

function Services () {



    // Categorias de servicios
    const categories = [
        {title: "Hematologia", emoji: "🩸", color: "teal"},
        {title: "Bioquimicas Sanguineas", emoji: "🧪", color: "purple"},
        {title: "Uroanalisis", emoji: "💧", color: "teal"},
        {title: "Coproparasitologicos", emoji: "🦠", color: "purple"},
        {title: "Dermatologicos", emoji: "🔬", color: "teal"},
        {title: "Microbiologia", emoji: "🧫", color: "purple"},
        {title: "Inmunologicos", emoji: "🛡️", color: "teal"},
        {title: "Examenes Especializados", emoji: "💉", color: "purple"},
        {title: "Radiologia", emoji: "📡", color: "teal"},
        {title: "Ecografia", emoji: "🔊", color: "purple"},
    ];

    // Lista de examenes por categoria
    const examsByCategory = [
        {
            category: "Hematologia",
            tests: [
                {name: "Cuadro hemático canino/felino (glóbulos rojos, leucocitos y plaquetas)"},
                {name: "Conteo de reticulocitos "},
                {name: "Frotis hemoparásitos en lamina"},   
            ]
        },

        {
            category: "Bioquimicas Sanguineas",
            tests: [
                {name: "Albumina"},
                {name: "Alanina aminotransferasa SGPT/ALT"},
                {name: "Amilasa pancreática"},
                {name: "Aspartato aminotransferasa SGOT/AST"},
                {name: "Bilirrubina directa / indirecta / total = Cada una"},
                {name: "Nitrógeno ureico BUN"},
                {name: "Calcio sérico"},
                {name: "Colesterol"},
                {name: "Creatinina"},
                {name: "Fosfatasa alcalina"},
                {name: "Fosforo sérico"},
                {name: "Gama glutamil transferasa GGT"},
                {name: "Glicemia"},
                {name: "Magnesio sérico"},
                {name: "Triglicéridos"},
            ]
        },

        {
            category: "Uroanalisis",
            tests: [
                {name: "Citoquímico de orina"},
                {name: "Espermograma"},
            ]
        },

        {
            category: "Coproparasitologicos",
            tests: [
                {name: "Coprológico"},
                {name: "Coprológico seriado (3 muestras)"}
            ]
        },

        {
            category: "Dermatologicos",
            tests: [
                {name: "Koh"},
                {name: "Cerumen"}
            ]
        },

        {
            category: "Microbiologia",
            tests: [
                {name: "Coprocultivo + Antibiograma (1 semana)"},
                {name: "Cultivo de Secreciones y Antibiograma (1 semana)"},
                {name: "Urocultivo y Antibiograma (1 semana)"}
            ]
        },

        {
            category: "Inmunologicos",
            tests: [
                {name: "Test de parvovirus"},
                {name: "Test de parvovirus, coronavirus y giardia canino"},
                {name: "Test de distemper"},
                {name: "Test de ehrlichia Canis"},
                {name: "Test de ehrlichia, anaplasma y babesia"},
                {name: "Test Embarazo canino"},
                {name: "Test de inmunodeficiencia felina (FIV) y leucemia felina (FeLV)"}
            ]    
        },

        {
            category: "Examenes Especializados",
            tests: [
                {name: "Tsh"},
                {name: "T4 total"},
                {name: "Lipasa especifica canina"},
                {name: "Lipasa especifica felina"},
                {name: "Histopatología (10 días hábiles)"}
            ]    
        },

        {
            category: "Radiologia",
            tests: [
                {name: "2 imágenes radiográficas (canino o felino)"},
                {name: "Imagen adicional"},
                {name: "3 imágenes más lectura"},
                {name: "Radiografía con medio de contraste sulfato de bario para mascotas de 2 a 10 kg"},
                {name: "Radiografía con medio de contraste sulfato de bario para mascotas de 11 a 20 kg"},
                {name: "Radiografía con medio de contraste sulfato de bario para mascotas de 20 a 30 kg"}
            ]
        },

        {
            category: "Ecografia",
            tests: [
                {name: "Ecografía abdominal canina"},
                {name: "Ecografía abdominal felina"},
            ]
        }
    ]

    return(
        <>
            <section className="services-hero">
                <div className="container">
                    <h1>Nuestros Servicios</h1>
                    <p>
                        Portafolio completo de servicios diagnósticos veterinarios con tecnología de punta
                    </p>
                </div>
            </section>

            <section className="categories-section">
                <div className="container">
                    <h2>Categorías de Servicios</h2>
                    <div className="categories-grid">
                        {categories.map((cat, index) => (
                            <div key={index} className={`category-card ${cat.color}`}>
                                <div className="category-icon">
                                    <span className="emoji-icon">{cat.emoji}</span>
                                </div>
                                <h3>{cat.title}</h3>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="pricing-section">
                <div className="container">
                    <h2>Lista de Examenes por Categoria</h2>
                    <div className="pricing-grid">
                        {examsByCategory.map((category, idx) => (
                            <div key={idx} className="price-table">
                                <h3 className="price-table-header">{category.category}</h3>
                                <div className="price-table-body">
                                    {category.tests.map((test, index) => (
                                        <div key={index} className="price-row">
                                            <span className="test-name">{test.name}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
};

export default Services;