const paises = [
    {
        nombre: 'Inglaterra',
        descripcion: 'Deberías visitar Inglaterra por su rica historia, cultura diversa, impresionante arquitectura, paisajes hermosos y la oportunidad de explorar icónicos lugares como los siguientes:'
    }
    // Agrega más países y sus descripciones aquí
];

// Sitios turísticos de Inglaterra
const sitiosInglaterra = [
    {
        nombre: '1. Stonehenge',
        descripcion: 'Stonehenge es un antiguo monumento prehistórico ubicado en el sur de Inglaterra, en el condado de Wiltshire. Consiste en un círculo de piedras gigantes dispuestas en forma de anillo, algunas de las cuales son monolitos verticales y otras son piedras horizontales llamadas dinteles.\n\nStonehenge es uno de los monumentos megalíticos más famosos y enigmáticos del mundo. A lo largo de los años, ha sido objeto de numerosas teorías y especulaciones sobre su origen y significado, y ha atraído a visitantes de todo el mundo debido a su misteriosa belleza y a su importancia arqueológica y cultural. En 1986, fue designado como Patrimonio de la Humanidad por la UNESCO.',
        imagen: 'STONEHENGE.jpg'
    },
    {
        nombre: '2. Torre de Londres',
        descripcion: 'La Torre de Londres está considerada uno de los edificios más importantes de Europa. Ha funcionado como prisión, guarda del tesoro, observatorio y palacio.\n\nAl ingresar a la Torre de Londres, te encuentras rodeado por sus altos muros de piedra y torres majestuosas. El recorrido comienza con la Puerta del Traje de Rey, donde serás recibido por los famosos guardianes vestidos con trajes tradicionales. A medida que exploras el interior, te sumerges en la historia real de Inglaterra.\n\nEs un lugar que te permite sumergirte en la historia real de Inglaterra mientras disfrutas de la belleza de este imponente castillo. Es una experiencia inolvidable para cualquier turista interesado en la historia y la cultura de este país.',
        imagen: 'TORRE LONDRES.jpg'
    },
    {
        nombre: '3. El Muro de Hadrian',
        descripcion: 'Esta impresionante construcción ha estado en pie desde el año 122 d.C. durando su construcción 6 años y fue construida por el Emperador Romano Hadrian cuando ese territorio pertenecía a la colonia romana de Britannia con la intención de que sirviera de defensa de los escoceses quienes eran sus vecinos.\n\nHoy en día, el Muro de Adriano es un sitio del Patrimonio Mundial de la UNESCO y una atracción turística importante. Los visitantes pueden explorar los restos arqueológicos de la muralla, caminar por sus senderos y apreciar las vistas panorámicas de la campiña británica que ofrece. Además, el muro es un recordatorio impresionante de la duradera influencia del Imperio Romano en la historia de Gran Bretaña.',
        imagen: 'MURO HADRIAN.jpg'
    },
    {
        nombre: '4. Castillo de Windsor',
        descripcion: 'Windsor es el castillo habitado más grande y antiguo del mundo y está hermosamente construido entre dos espectaculares jardines. El complejo ocupa 5 hectáreas y su diseño mezcla características de fortaleza, palacio y pequeño pueblo, su arquitectura incluye diseños gregorianos y victorianos que se basan en la primera estructura de estilo medieval. Es un lugar imperdible para cualquier turista interesado en la cultura y la historia de Inglaterra.',
        imagen: 'CASTILLO WINDSOR.jpg'
    },
    {
        nombre: '5. Big Ben',
        descripcion: 'El Big Ben es uno de los iconos más reconocibles de Londres y un destino turístico emblemático en el Reino Unido. El reloj de la Torre del Reloj de Westminster es famoso por su precisión y su distintivo sonido de campanadas cada hora en punto. La vista del Big Ben es especialmente impresionante de noche, cuando la torre se ilumina y las manecillas del reloj destacan en el cielo oscuro de Londres. El Big Ben es un lugar de gran importancia histórica y cultural en el corazón de Londres y un punto de referencia imperdible para los turistas que visitan la ciudad.',
        imagen: 'BIG BEN.jpeg'
    },
    {
        nombre: '6. Universidad de Oxford',
        descripcion: 'La Universidad de Oxford es una de las instituciones educativas más antiguas y prestigiosas del mundo. Está ubicada en la ciudad de Oxford, en Inglaterra, y tiene una rica historia que se remonta a más de 900 años. Es una institución académica de renombre mundial que combina una rica historia, excelencia académica y una belleza arquitectónica impresionante. Su legado perdura y sigue siendo un lugar de estudio e investigación de vanguardia en el Reino Unido y en todo el mundo.',
        imagen: 'UNIVERSIDAD OXFORD.jpg'
    },
    {
        nombre: '7. Estadio Wembley',
        descripcion: 'Es uno de los estadios más famosos e icónicos del mundo. Está situado en el área de Wembley en Londres, Inglaterra. Tiene una capacidad de alrededor de 90,000 espectadores, lo que lo convierte en uno de los estadios más grandes de Europa. Es un lugar emblemático y un importante centro deportivo y de entretenimiento en Inglaterra. Es un punto de referencia icónico tanto para los amantes del fútbol como para los fanáticos de la música y la cultura popular.',
        imagen: 'ESTADIO WEMBLEY.jpg'
    }    
    // Agrega más sitios turísticos de Inglaterra aquí
];

// Función para cargar la información de un país y sus sitios turísticos en el main.
function cargarInformacionPais(pais, sitios) {
    const main = document.querySelector('main');
    main.innerHTML = `<h2>${pais.nombre}</h2>`;
    main.innerHTML += `<p>${pais.descripcion}</p>`;
    
    // Cargar los sitios turísticos de Inglaterra
    for (const sitio of sitios) {
        main.innerHTML += `<h3>${sitio.nombre}</h3>`;
        main.innerHTML += `<p>${sitio.descripcion}</p>`;
        main.innerHTML += `<img src="${sitio.imagen}" alt="${sitio.nombre}">`;
    }
}

// Escucha de eventos para cargar la información de un país al hacer clic en el enlace.
const enlaceInglaterra = document.querySelector('nav a'); // Cambia esto para apuntar al enlace de Inglaterra
enlaceInglaterra.addEventListener('click', (event) => {
    event.preventDefault();
    cargarInformacionPais(paises[0], sitiosInglaterra); // Inglaterra es el primer país en el arreglo
});
