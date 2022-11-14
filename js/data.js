const productsData = [
    {
      id: 1,
      name: "TV SONY 32LP70B Smart 32'",
      precio: 50000,
      subName: "Su resolucion es HD. Tegnologia HDR para una calidad de imagen mejorada.Modo sonido:Dolby Audio, Clear voice, Virtual Surround",
      category: "SONY",
      cardImg: "../img/imagetvpeques/SONYNUEV.jpg",
    },
    {
      id: 2,
      name: "TV LG 60UN7100 LED 4K",
      precio: 80200,
      subName: "TV LG LED 4K",
      category: "LG",
      cardImg: "../img/imagetvpeques/LGAZ.jpg",
    },
    {
      id: 3,
      name: "TV LG 49'43KL100 TV LED",
      precio: 55000,
      subName: "4K Smart TV LED",
      category: "LG",
      cardImg: "../img/imagetvpeques/LG49.jpg",
    },
  
    {
      id: 4,
      name: "Samsung QE6570A TV LED 65",
      precio: 70600,
      subName: "TV LED 4K",
      category: "SAMSUNG",
      cardImg: "../img/imagetvpeques/SAMSUNG65.jpg",
    },
  
    {
      id: 5,
      name: "Samsung TU7000 Smart 43'",
      precio: 66600,
      subName: "TV Smart LED",
      category: "SAMSUNG",
      cardImg: "../img/imagetvpeques/SAMSUNG75.jpg",
    },
  
    {
      id: 6,
      name: "Sony 4K Ultra HD X80K de 43'",
      precio: 55500,
      subName: "Smart LED GOOGLE TV CON DOLBY VISION",
      category: "SONY",
      cardImg: "../img/imagetvpeques/SONY43.jpg",
    },
  
    {
      id: 7,
      name: "Sony X80KS32' 4K Ultra",
      precio: 68400,
      subName: "Smart tv 4k ultra HD LED",
      category: "SONY",
      cardImg: "../img/imagetvpeques/SONY85.jpg",
    },
  
    {
      id: 8,
      name: "Sony X8OJ TV 75' 4K LED",
      precio: 12000,
      subName: "TV Smart LED 4K",
      category: "SONY",
      cardImg: "../img/imagetvpeques/SONY85.jpg",
    },
  
    {
      id: 9,
      name: "Sony X85J-TV50' Smart TV",
      precio: 65375,
      subName: "Smart TV 4K Ultra HD LED",
      category: "XIAOMI",
      cardImg: "../img/imagetvpeques/tvImg2.jpg",
    },
  
    {
      id: 10,
      name: "XIAOMI LED 50' ELA1256",
      precio: 57.345,
      subName: "TV LED Smart TV",
      category: "XIAOMI",
      cardImg: "../img/imagetvpeques/tvImg3.jpg",
    },
    {
        id: 11,
        name: "PHILIPS ELA1256",
        precio: 61.645,
        subName: "TV LED Smart TV",
        category: "PHILIPS",
        cardImg: "../img/imagetvpeques/PHILIP3.jpg",
      },
      {
        id: 12,
        name: "PHILIPS 50' Smart TV",
        precio: 71.545,
        subName: "TV LED Smart TV",
        category: "PHILIPS",
        cardImg: "../img/imagetvpeques/PHILIPS2.jpg",
      },
      {
        id: 13,
        name: "PHILIPS LED 50' ELA1256",
        precio: 68245,
        subName: "TV LED Smart TV",
        category: "PHILIPS",
        cardImg: "../img/imagetvpeques/PHILIP3.jpg",
      },

  ];
  
  //paginacion 
  
  function splitProducts(size) {
    let chunk = [];
    for (let i = 0; i < productsData.length; i += size)
      chunk.push(productsData.slice(i, i + size));
  
    return chunk;
  }
  
  //division de productos
  const allProducts = {
    productList: splitProducts(6),
    next: 1,
    limit: splitProducts(6).length,
  };