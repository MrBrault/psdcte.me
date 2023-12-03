let anchorP1 = ['<a href="../andrew616/index.html">Photography 1</a>',
              '<a href="../briseida148/index.html">Photography 1</a>',
              '<a href="../grady050/index.html">Photography 1</a>',
              '<a href="../isaac603/index.html">Photography 1</a>',
              '<a href="../matthew819/index.html">Photography 1</a>',
              '<a href="../odalis001/index.html">Photography 1</a>',
              '<a href="../oscar254/index.html">Photography 1</a>'
             ]



var rand = Math.floor(Math.random() * anchorP1.length);

document.getElementById("linkP1").innerHTML = anchorP1[rand];
