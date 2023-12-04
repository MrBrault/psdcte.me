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
