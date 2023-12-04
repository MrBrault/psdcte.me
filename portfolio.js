let anchorP1 = ['<a href="../andrew616">Photography 1</a>',
              '<a href="../briseida148">Photography 1</a>',
              '<a href="../grady050">Photography 1</a>',
              '<a href="../isaac603">Photography 1</a>',
              '<a href="../matthew819">Photography 1</a>',
              '<a href="../odalis001">Photography 1</a>',
              '<a href="../oscar254">Photography 1</a>'
             ]



var rand = Math.floor(Math.random() * anchorP1.length);

document.getElementById("linkP1").innerHTML = anchorP1[rand];






let anchorP2 = ['<a href="../abizael">Photography2</a>',
                '<a href="../abizael">Photography2</a>'
               ]



var rand = Math.floor(Math.random() * anchorP2.length);

document.getElementById("linkP2").innerHTML = anchorP2[rand];







let anchorA = ['<a href="../thomas564">Animations</a>'
               '<a href="../thomas564">Animations</a>'
              ]



var rand = Math.floor(Math.random() * anchorA.length);

document.getElementById("linkA").innerHTML = anchorA[rand];
