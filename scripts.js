$(document).ready(function () {
  Atrapalos();
})
function Atrapalos(url) {

  $('.box-poke').html('');

  if (!url) {
    url = ' https://pokeapi.co/api/v2/pokemon/?limit=150"';
  }
  $.get(url, data => {

    data.results.forEach(pokemones => {
      $.get(pokemones.url, dataPokemon => {
        let frontimg = dataPokemon.sprites.front_default
        let name = dataPokemon.name
        let stats = dataPokemon.stats;
        let tipo = [];

        tipo = dataPokemon.types.map(tipoPokemon => tipoPokemon.type.name)

        CardTipo1(frontimg, name, stats[0].base_stat, stats[3].base_stat, stats[4].base_stat, stats[5].base_stat, tipo);
        Card(frontimg, name, stats[0].base_stat, stats[3].base_stat, stats[4].base_stat, stats[5].base_stat, tipo)

      })
    })
  })
}


(function () {
  $("#pokemon").hide();
});

function pokedex() {
  var poke = $("#NamePoke").val();

  if (poke !== undefined) {
    obtenerPokemon(poke);

    $("#botonpokedex")
  } else {
    alert("Ese pokemón no existe");
  }

  openPage('random', 'this', ' bisque', 'search')
}

// POKEMON 

function obtenerPokemon(poke) {
    $('.box-poke').html('');

  $.get("https://pokeapi.co/api/v2/pokemon/" + poke, data => {

    let frontimg = data.sprites.front_default
    let name = data.name
    let stats = data.stats;
    let tipo = [];

    tipo = data.types.map(tipoPokemon => tipo.push(tipoPokemon.type.name))


    CardTipo1(frontimg, name, stats[0].base_stat, stats[3].base_stat, stats[4].base_stat, stats[5].base_stat, tipo);
    Card(frontimg, name, stats[0].base_stat, stats[3].base_stat, stats[4].base_stat, stats[5].base_stat, tipo);

    $("#name")[0].innerHTML = data.name.toUpperCase();
    $("#pokemon")[0].src = data.sprites.front_default;
    $("#pokemon").show();
  });
}



// CARD DE CADA POKEMON

function Card(photo, nombre, velocidad, defensa, ataque, vida, tipo) {
  $('.box-poke').append(

    '<div class="card col-3 mx-5 my-3">' +
    '<img class="card-img-top" id="Imagen" src=" ' +
    photo +
    '" alt="Card image cap">' +
    '<div class="card-body">' +
    '<h2 class="card-title">' + nombre + '</h2>' +
    '<p class="card-text"> Velocidad : ' + velocidad + '  /  Defensa : ' + defensa + '</p>' +
    '<p class="card-text"> Ataque: ' + ataque + '   /  Vida: ' + vida + '</p>' +
    '<p class="card-text"> Tipo: ' + tipo + '</p>' +
    '<button class="btn btn-outline-dark" data-toggle="modal"  data-target= "#bus" onclick= "graficos(' + velocidad +','+ defensa + ',' +ataque+ ',' + vida+ ')">Gráfica Pokémon</button>' +
    '</div>' +
    '</div>'
  )
}


// PESTAÑA DE POKEMONES DEPENDIENDO A SU TIPO (con sus respectivas Cards)
function CardTipo1(photo, nombre, velocidad, defensa, ataque, vida, tipo, tipo2) {

  console.log(tipo);
  if (tipo[0] == "normal" || tipo[1] == "normal") {

    $('.pokenor').append(
      '<div class="card col-3 mx-5 my-3">' +
    '<img class="card-img-top" id="Imagen" src=" ' +
    photo +
    '" alt="Card image cap">' +
    '<div class="card-body">' +
    '<h2 class="card-title">' + nombre + '</h2>' +
    '<p class="card-text"> Velocidad : ' + velocidad + '  /  Defensa : ' + defensa + '</p>' +
    '<p class="card-text"> Ataque: ' + ataque + '   /  Vida: ' + vida + '</p>' +
    '<p class="card-text"> Tipo: ' + tipo + '</p>' +
    '<button class="btn btn-outline-dark" data-toggle="modal"  data-target= "#bus" onclick= "graficos(' + velocidad +','+ defensa + ',' +ataque+ ',' + vida+ ')">Gráfica Pokémon</button>' +
    '</div>' +
    '</div>'
    )
  }

  if (tipo[0] == "fire" || tipo[1] == "fire") {
    $('.pokefu').append(
      '<div class="card col-3 mx-5 my-3">' +
      '<img class="card-img-top" id="Imagen" src=" ' +
      photo +
      '" alt="Card image cap">' +
      '<div class="card-body">' +
      '<h2 class="card-title">' + nombre + '</h2>' +
      '<p class="card-text"> Velocidad : ' + velocidad + '  /  Defensa : ' + defensa + '</p>' +
      '<p class="card-text"> Ataque: ' + ataque + '   /  Vida: ' + vida + '</p>' +
      '<p class="card-text"> Tipo: ' + tipo + '</p>' +
      '<button class="btn btn-outline-dark" data-toggle="modal"  data-target= "#bus" onclick= "graficos(' + velocidad +','+ defensa + ',' +ataque+ ',' + vida+ ')">Gráfica Pokémon</button>' +
      '</div>' +
      '</div>'
    )
  }
  if (tipo[0] == "grass" || tipo[1] == "grass") {
    $('.pokepla').append(
      '<div class="card col-3 mx-5 my-3">' +
      '<img class="card-img-top" id="Imagen" src=" ' +
      photo +
      '" alt="Card image cap">' +
      '<div class="card-body">' +
      '<h2 class="card-title">' + nombre + '</h2>' +
      '<p class="card-text"> Velocidad : ' + velocidad + '  /  Defensa : ' + defensa + '</p>' +
      '<p class="card-text"> Ataque: ' + ataque + '   /  Vida: ' + vida + '</p>' +
      '<p class="card-text"> Tipo: ' + tipo + '</p>' +
      '<button class="btn btn-outline-dark" data-toggle="modal"  data-target= "#bus" onclick= "graficos(' + velocidad +','+ defensa + ',' +ataque+ ',' + vida+ ')">Gráfica Pokémon</button>' +
      '</div>' +
      '</div>'
    )
  }
  if (tipo[0] == "water" || tipo[1] == "water") {
    $('.pokea').append(
      '<div class="card col-3 mx-5 my-3">' +
      '<img class="card-img-top" id="Imagen" src=" ' +
      photo +
      '" alt="Card image cap">' +
      '<div class="card-body">' +
      '<h2 class="card-title">' + nombre + '</h2>' +
      '<p class="card-text"> Velocidad : ' + velocidad + '  /  Defensa : ' + defensa + '</p>' +
      '<p class="card-text"> Ataque: ' + ataque + '   /  Vida: ' + vida + '</p>' +
      '<p class="card-text"> Tipo: ' + tipo + '</p>' +
      '<button class="btn btn-outline-dark" data-toggle="modal"  data-target= "#bus" onclick= "graficos(' + velocidad +','+ defensa + ',' +ataque+ ',' + vida+ ')">Gráfica Pokémon</button>' +
      '</div>' +
      '</div>'
    )
  }
  if (tipo[0] == "electric" || tipo[1] == "electric") {
    $('.pokee').append(
      '<div class="card col-3 mx-5 my-3">' +
    '<img class="card-img-top" id="Imagen" src=" ' +
    photo +
    '" alt="Card image cap">' +
    '<div class="card-body">' +
    '<h2 class="card-title">' + nombre + '</h2>' +
    '<p class="card-text"> Velocidad : ' + velocidad + '  /  Defensa : ' + defensa + '</p>' +
    '<p class="card-text"> Ataque: ' + ataque + '   /  Vida: ' + vida + '</p>' +
    '<p class="card-text"> Tipo: ' + tipo + '</p>' +
    '<button class="btn btn-outline-dark" data-toggle="modal"  data-target= "#bus" onclick= "graficos(' + velocidad +','+ defensa + ',' +ataque+ ',' + vida+ ')">Gráfica Pokémon</button>' +
    '</div>' +
    '</div>'
    )
  }
  if (tipo[0] == "ground" || tipo[1] == "ground") {
    $('.poketi').append(
      '<div class="card col-3 mx-5 my-3">' +
    '<img class="card-img-top" id="Imagen" src=" ' +
    photo +
    '" alt="Card image cap">' +
    '<div class="card-body">' +
    '<h2 class="card-title">' + nombre + '</h2>' +
    '<p class="card-text"> Velocidad : ' + velocidad + '  /  Defensa : ' + defensa + '</p>' +
    '<p class="card-text"> Ataque: ' + ataque + '   /  Vida: ' + vida + '</p>' +
    '<p class="card-text"> Tipo: ' + tipo + '</p>' +
    '<button class="btn btn-outline-dark" data-toggle="modal"  data-target= "#bus" onclick= "graficos(' + velocidad +','+ defensa + ',' +ataque+ ',' + vida+ ')">Gráfica Pokémon</button>' +
    '</div>' +
    '</div>'
    )
  }
  if (tipo[0] == "ghost" || tipo[1] == "ghost") {
    $('.buu').append(
      '<div class="card col-3 mx-5 my-3">' +
    '<img class="card-img-top" id="Imagen" src=" ' +
    photo +
    '" alt="Card image cap">' +
    '<div class="card-body">' +
    '<h2 class="card-title">' + nombre + '</h2>' +
    '<p class="card-text"> Velocidad : ' + velocidad + '  /  Defensa : ' + defensa + '</p>' +
    '<p class="card-text"> Ataque: ' + ataque + '   /  Vida: ' + vida + '</p>' +
    '<p class="card-text"> Tipo: ' + tipo + '</p>' +
    '<button class="btn btn-outline-dark" data-toggle="modal"  data-target= "#bus" onclick= "graficos(' + velocidad +','+ defensa + ',' +ataque+ ',' + vida+ ')">Gráfica Pokémon</button>' +
    '</div>' +
    '</div>'
    )
  }
  if (tipo[0] == "poison" || tipo[1] == "poison") {
    $('.venipoke').append(
      '<div class="card col-3 mx-5 my-3">' +
    '<img class="card-img-top" id="Imagen" src=" ' +
    photo +
    '" alt="Card image cap">' +
    '<div class="card-body">' +
    '<h2 class="card-title">' + nombre + '</h2>' +
    '<p class="card-text"> Velocidad : ' + velocidad + '  /  Defensa : ' + defensa + '</p>' +
    '<p class="card-text"> Ataque: ' + ataque + '   /  Vida: ' + vida + '</p>' +
    '<p class="card-text"> Tipo: ' + tipo + '</p>' +
    '<button class="btn btn-outline-dark" data-toggle="modal"  data-target= "#bus" onclick= "graficos(' + velocidad +','+ defensa + ',' +ataque+ ',' + vida+ ')">Gráfica Pokémon</button>' +
    '</div>' +
    '</div>'
    )
  }
  if (tipo[0] == "flying" || tipo[1] == "flying") {
    $('.volapoke').append(
      '<div class="card col-3 mx-5 my-3">' +
    '<img class="card-img-top" id="Imagen" src=" ' +
    photo +
    '" alt="Card image cap">' +
    '<div class="card-body">' +
    '<h2 class="card-title">' + nombre + '</h2>' +
    '<p class="card-text"> Velocidad : ' + velocidad + '  /  Defensa : ' + defensa + '</p>' +
    '<p class="card-text"> Ataque: ' + ataque + '   /  Vida: ' + vida + '</p>' +
    '<p class="card-text"> Tipo: ' + tipo + '</p>' +
    '<button class="btn btn-outline-dark" data-toggle="modal"  data-target= "#bus" onclick= "graficos(' + velocidad +','+ defensa + ',' +ataque+ ',' + vida+ ')">Gráfica Pokémon</button>' +
    '</div>' +
    '</div>'
    )
  }
  if (tipo[0] == "bug" || tipo[1] == "bug") {
    $('.bichito').append(
      '<div class="card col-3 mx-5 my-3">' +
      '<img class="card-img-top" id="Imagen" src=" ' +
      photo +
      '" alt="Card image cap">' +
      '<div class="card-body">' +
      '<h2 class="card-title">' + nombre + '</h2>' +
      '<p class="card-text"> Velocidad : ' + velocidad + '  /  Defensa : ' + defensa + '</p>' +
      '<p class="card-text"> Ataque: ' + ataque + '   /  Vida: ' + vida + '</p>' +
      '<p class="card-text"> Tipo: ' + tipo + '</p>' +
      '<button class="btn btn-outline-dark" data-toggle="modal"  data-target= "#bus" onclick= "graficos(' + velocidad +','+ defensa + ',' +ataque+ ',' + vida+ ')">Gráfica Pokémon</button>' +
      '</div>' +
      '</div>'
    )
  }
  if (tipo[0] == "fairy" || tipo[1] == "fairy") {
    $('.hadita').append(
      '<div class="card col-3 mx-5 my-3">' +
      '<img class="card-img-top" id="Imagen" src=" ' +
      photo +
      '" alt="Card image cap">' +
      '<div class="card-body">' +
      '<h2 class="card-title">' + nombre + '</h2>' +
      '<p class="card-text"> Velocidad : ' + velocidad + '  /  Defensa : ' + defensa + '</p>' +
      '<p class="card-text"> Ataque: ' + ataque + '   /  Vida: ' + vida + '</p>' +
      '<p class="card-text"> Tipo: ' + tipo + '</p>' +
      '<button class="btn btn-outline-dark" data-toggle="modal"  data-target= "#bus" onclick= "graficos(' + velocidad +','+ defensa + ',' +ataque+ ',' + vida+ ')">Gráfica Pokémon</button>' +
      '</div>' +
      '</div>'
    )
  }
  if (tipo[0] == "fighting" || tipo[1] == "fighting") {
    $('.pokelu').append(
      '<div class="card col-3 mx-5 my-3">' +
      '<img class="card-img-top" id="Imagen" src=" ' +
      photo +
      '" alt="Card image cap">' +
      '<div class="card-body">' +
      '<h2 class="card-title">' + nombre + '</h2>' +
      '<p class="card-text"> Velocidad : ' + velocidad + '  /  Defensa : ' + defensa + '</p>' +
      '<p class="card-text"> Ataque: ' + ataque + '   /  Vida: ' + vida + '</p>' +
      '<p class="card-text"> Tipo: ' + tipo + '</p>' +
      '<button class="btn btn-outline-dark" data-toggle="modal"  data-target= "#bus" onclick= "graficos(' + velocidad +','+ defensa + ',' +ataque+ ',' + vida+ ')">Gráfica Pokémon</button>' +
      '</div>' +
      '</div>'
    )
  }
  if (tipo[0] == "psychic" || tipo[1] == "psychic") {
    $('.pokepsi').append(
      '<div class="card col-3 mx-5 my-3">' +
      '<img class="card-img-top" id="Imagen" src=" ' +
      photo +
      '" alt="Card image cap">' +
      '<div class="card-body">' +
      '<h2 class="card-title">' + nombre + '</h2>' +
      '<p class="card-text"> Velocidad : ' + velocidad + '  /  Defensa : ' + defensa + '</p>' +
      '<p class="card-text"> Ataque: ' + ataque + '   /  Vida: ' + vida + '</p>' +
      '<p class="card-text"> Tipo: ' + tipo + '</p>' +
      '<button class="btn btn-outline-dark" data-toggle="modal"  data-target= "#bus" onclick= "graficos(' + velocidad +','+ defensa + ',' +ataque+ ',' + vida+ ')">Gráfica Pokémon</button>' +
      '</div>' +
      '</div>'
    )
  }
  if (tipo[0] == "rock" || tipo[1] == "rock") {
    $('.pokerock').append(
      '<div class="card col-3 mx-5 my-3">' +
    '<img class="card-img-top" id="Imagen" src=" ' +
    photo +
    '" alt="Card image cap">' +
    '<div class="card-body">' +
    '<h2 class="card-title">' + nombre + '</h2>' +
    '<p class="card-text"> Velocidad : ' + velocidad + '  /  Defensa : ' + defensa + '</p>' +
    '<p class="card-text"> Ataque: ' + ataque + '   /  Vida: ' + vida + '</p>' +
    '<p class="card-text"> Tipo: ' + tipo + '</p>' +
    '<button class="btn btn-outline-dark" data-toggle="modal"  data-target= "#bus" onclick= "graficos(' + velocidad +','+ defensa + ',' +ataque+ ',' + vida+ ')">Gráfica Pokémon</button>' +
    '</div>' +
    '</div>'
    )
  }
  if (tipo[0] == "steel" || tipo[1] == "steel") {
    $('.acepoke').append(
      '<div class="card col-3 mx-5 my-3">' +
    '<img class="card-img-top" id="Imagen" src=" ' +
    photo +
    '" alt="Card image cap">' +
    '<div class="card-body">' +
    '<h2 class="card-title">' + nombre + '</h2>' +
    '<p class="card-text"> Velocidad : ' + velocidad + '  /  Defensa : ' + defensa + '</p>' +
    '<p class="card-text"> Ataque: ' + ataque + '   /  Vida: ' + vida + '</p>' +
    '<p class="card-text"> Tipo: ' + tipo + '</p>' +
    '<button class="btn btn-outline-dark" data-toggle="modal"  data-target= "#bus" onclick= "graficos(' + velocidad +','+ defensa + ',' +ataque+ ',' + vida+ ')">Gráfica Pokémon</button>' +
    '</div>' +
    '</div>'
    )
  }
  if (tipo[0] == "ice" || tipo[1] == "ice") {
    $('.hiepoke').append(
      '<div class="card col-3 mx-5 my-3">' +
    '<img class="card-img-top" id="Imagen" src=" ' +
    photo +
    '" alt="Card image cap">' +
    '<div class="card-body">' +
    '<h2 class="card-title">' + nombre + '</h2>' +
    '<p class="card-text"> Velocidad : ' + velocidad + '  /  Defensa : ' + defensa + '</p>' +
    '<p class="card-text"> Ataque: ' + ataque + '   /  Vida: ' + vida + '</p>' +
    '<p class="card-text"> Tipo: ' + tipo + '</p>' +
    '<button class="btn btn-outline-dark" data-toggle="modal"  data-target= "#bus" onclick= "graficos(' + velocidad +','+ defensa + ',' +ataque+ ',' + vida+ ')">Gráfica Pokémon</button>' +
    '</div>' +
    '</div>'
    )
  }
  if (tipo[0] == "dragon" || tipo[1] == "dragon") {
    $('.pokedra').append(
      '<div class="card col-3 mx-5 my-3">' +
    '<img class="card-img-top" id="Imagen" src=" ' +
    photo +
    '" alt="Card image cap">' +
    '<div class="card-body">' +
    '<h2 class="card-title">' + nombre + '</h2>' +
    '<p class="card-text"> Velocidad : ' + velocidad + '  /  Defensa : ' + defensa + '</p>' +
    '<p class="card-text"> Ataque: ' + ataque + '   /  Vida: ' + vida + '</p>' +
    '<p class="card-text"> Tipo: ' + tipo + '</p>' +
    '<button class="btn btn-outline-dark" data-toggle="modal"  data-target= "#bus" onclick= "graficos(' + velocidad +','+ defensa + ',' +ataque+ ',' + vida+ ')">Gráfica Pokémon</button>' +
    '</div>' +
    '</div>'
    )
  }

}


function graficos(velocidad, defensa, ataque, vida) {

  var chart = new CanvasJS.Chart("ContainerPokemon", {
    theme: "light1", // "light2", "dark1", "dark2"
    animationEnabled: false, // change to true		
    title:{
      text: "Habilidad Pókemon"
    },
    data: [
    {
      // Change type to "bar", "area", "spline", "pie",etc.
      type: "column",
      dataPoints: [
        { y: velocidad,  label: "Velocidad"},
        { y: defensa, label: "Defensa" },
        { y: ataque, label: "Ataque"  },
        { y: vida, label: "Ptos de Vida" },
    
      ]
    }
    ]
  });
  chart.render();
  
  }
  

//  Eventos colors

function openPage(pageName, elmnt, color, search) {
  console.log(elmnt)
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablink");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].style.backgroundColor = "";
  }
  document.getElementById(pageName).style.display = "block";
  if (search) {
    document.getElementById('defaultOpen').style.backgroundColor = color;
  } else {
    elmnt.style.backgroundColor = color;
  }
 
}
document.getElementById("defaultOpen").click();