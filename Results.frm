{
  "fullScreen": "true", 
  "cached_js": "Results.onshow=function() {\nlet simpleScore = simple.length \nlet pinkScore = pink.length\nlet blackScore = black.length\nlet colorScore = color.length\nlet winner = \"\"\nlet qNumber = questionNum.length\nconsole.log(simple)\nconsole.log(simpleScore)\nconsole.log(simple.length)\n\n\nif (simpleScore > pinkScore && simpleScore > blackScore && simpleScore > colorScore) {\n  let winner = 'simple'\n  lblResults.textContent = \"YOU GOT: THE LUNA EARRING\"\n  imgResults.src = \"luna.jpg\"\n  lblDescription.textContent = \"Your genuine and unassuming nature is a perfect fit for the Luna!\"\n} else if (pinkScore > simpleScore && pinkScore > blackScore && pinkScore > colorScore) {\n  let winner = 'pink'\n  lblResults.textContent = \"YOU GOT: THE DOT EARRING\"\n  imgResults.src = \"dot.jpg\"\n  lblDescription.textContent = \"With your sweet and simple style we think you would be The Dot earring\"\n} else if (blackScore > simpleScore && blackScore > pinkScore && blackScore > colorScore) {\n  let winner = 'black'\n  lblResults.textContent = \"YOU GOT: THE NORA EARRING\"\n  imgResults.src = \"Nora.jpg\"\n} else if (colorScore > blackScore && colorScore > simpleScore && colorScore > pinkScore){\n  let winner = 'color'\n  lblResults.textContent = \"YOU GOT: THE ANGIE EARRING\"\n  imgResults.src = \"angie.jpg\"\n} else {\n  let winner = 'random'\n  lblResults.textContent = \"YOU GOT: THE BRENDA EARRING\"\n  imgResults.src = \"Brenda.jpg\"\n  }\n}\n\nhmbResults.onclick=function(s){\n  if(typeof(s) == \"object\") {\n    return\n} \n  switch(s) {\n    case 'Home':\n      ChangeForm(Home)\n      break\n    case 'Style':\n      ChangeForm(Style)\n      break\n    case 'Social':\n      ChangeForm(Social)\n      break\n  }\n}\n\n\n", 
  "height": 460, 
  "scroll_options": "mouseWheel:true, bounce:true, zoom:false", 
  "id": "Results", 
  "borderColor": "", 
  "style": "", 
  "cached_js_script_hash": "c720e453399169e56609a56823afa927", 
  "script": "Results.onshow=function() {\nlet simpleScore = simple.length \nlet pinkScore = pink.length\nlet blackScore = black.length\nlet colorScore = color.length\nlet winner = \"\"\nlet qNumber = questionNum.length\nconsole.log(simple)\nconsole.log(simpleScore)\nconsole.log(simple.length)\n\n\nif (simpleScore > pinkScore && simpleScore > blackScore && simpleScore > colorScore) {\n  let winner = 'simple'\n  lblResults.textContent = \"YOU GOT: THE LUNA EARRING\"\n  imgResults.src = \"luna.jpg\"\n  lblDescription.textContent = \"Your genuine and unassuming nature is a perfect fit for the Luna!\"\n} else if (pinkScore > simpleScore && pinkScore > blackScore && pinkScore > colorScore) {\n  let winner = 'pink'\n  lblResults.textContent = \"YOU GOT: THE DOT EARRING\"\n  imgResults.src = \"dot.jpg\"\n  lblDescription.textContent = \"With your sweet and simple style we think you love The Dot earrings\"\n} else if (blackScore > simpleScore && blackScore > pinkScore && blackScore > colorScore) {\n  let winner = 'black'\n  lblResults.textContent = \"YOU GOT: THE NORA EARRING\"\n  imgResults.src = \"Nora.jpg\"\n  lblDescription.textContent = \"You your go getter attitude we think you would love the Nora earrings!\"\n} else if (colorScore > blackScore && colorScore > simpleScore && colorScore > pinkScore){\n  let winner = 'color'\n  lblResults.textContent = \"YOU GOT: THE ANGIE EARRING\"\n  imgResults.src = \"angie.jpg\"\n  lblDescription.textContent = \"With your sweet and simple style we think you love The Angie earrings\"\n} else {\n  let winner = 'random'\n  lblResults.textContent = \"YOU GOT: THE BRENDA EARRING\"\n  imgResults.src = \"Brenda.jpg\"\n  lblDescription.textContent = \"With your cool and laid-back style we think you love The Brenda earrings\"\n  }\n}\n\nhmbResults.onclick=function(s){\n  if(typeof(s) == \"object\") {\n    return\n} \n  switch(s) {\n    case 'Home':\n      ChangeForm(Home)\n      break\n    case 'Style':\n      ChangeForm(Style)\n      break\n    case 'Social':\n      ChangeForm(Social)\n      break\n    case 'Twitter':\n      ChangeForm(Social)\n      break\n  }\n}\n\n\n", 
  "top": "0", 
  "!type": "Form", 
  "designWidth": 0, 
  "onresize": "", 
  "width": 320, 
  "theme": "", 
  "HTML": "", 
  "onkeypress": "", 
  "class": "", 
  "_uuid": "11815aabc8b24371b392492590ebddfd", 
  "backgroundimage": "", 
  "onhide": "", 
  "background": "#FCFBF6", 
  "attributes": "", 
  "scrolling": "false", 
  "setFocusID": "", 
  "openMode": "none", 
  "locked": false, 
  "language": "JavaScript", 
  "onshow": "", 
  "parentForm": "", 
  "children": [
    {
      "color": "#191e22", 
      "blockLevel": "", 
      "height": "auto", 
      "disabled": "", 
      "popBody": "Body", 
      "groupStyle": "", 
      "children": [], 
      "size": " btn-md", 
      "borderColor": "transparent", 
      "style": "float:right;", 
      "cached_js_script_hash": "d41d8cd98f00b204e9800998ecf8427e", 
      "mRight": "", 
      "top": 3, 
      "popTitle": "Title", 
      "pLeft": "", 
      "width": "auto", 
      "onmousemove": "", 
      "onmouseup": "", 
      "hidden": "", 
      "onclick": "", 
      "onmouseout": "", 
      "badgeAppearance": " badge-info", 
      "mAll": "", 
      "onmousedown": "", 
      "ontouchend": "", 
      "align": " dropdown-menu-right", 
      "appearance": " btn-secondary", 
      "value": "", 
      "borderWidth": "", 
      "pBottom": "", 
      "borderStyle": "", 
      "display": "", 
      "grouping": "", 
      "right": "auto", 
      "cached_js": "", 
      "mLeft": "", 
      "fontFamily": "futura", 
      "iconTitle": "", 
      "popClose": "hover", 
      "id": "hmbResults", 
      "pTop": "", 
      "bottom": "auto", 
      "!type": "Hamburger_bs4", 
      "onresize": "", 
      "fontSize": "", 
      "backgroundColor": "#FCFBF6", 
      "badge": "", 
      "pAll": "", 
      "mTop": "", 
      "dropdown": "dropdown", 
      "_uuid": "8e534f3e8cd94e2db07c1d272726f957", 
      "mBottom": "", 
      "fontWeight": "", 
      "class": "", 
      "icon": "menu", 
      "popStyle": "popover", 
      "fontStyle": "", 
      "outline": "", 
      "popPosition": "", 
      "ontouchmove": "", 
      "items": "Home\nShop\nSocial", 
      "script": "", 
      "expanded_pmp": true, 
      "pRight": "", 
      "ontouchstart": "", 
      "left": 3
    }, 
    {
      "right": "auto", 
      "onmousedown": "", 
      "cached_js": "", 
      "color": "#191e22", 
      "text": "", 
      "height": 35, 
      "fontFamily": "times", 
      "mRight": "", 
      "id": "lblDescription", 
      "onresize": "", 
      "children": [], 
      "borderColor": "", 
      "style": "", 
      "cached_js_script_hash": "d41d8cd98f00b204e9800998ecf8427e", 
      "script": "", 
      "top": 83, 
      "!type": "Label", 
      "pLeft": "", 
      "pTop": "", 
      "width": 319, 
      "onmousemove": "", 
      "onmouseup": "", 
      "fontSize": "15", 
      "hidden": "", 
      "borderWidth": "", 
      "onclick": "", 
      "onmouseout": "", 
      "_uuid": "ac22e6d076da491bafc7f1d3e9c49dcc", 
      "mTop": "", 
      "mBottom": "", 
      "fontWeight": "500", 
      "mAll": "", 
      "mLeft": "", 
      "class": "", 
      "backgroundColor": "", 
      "ontouchend": "", 
      "fontStyle": "italic", 
      "ontouchmove": "", 
      "align": "center", 
      "bottom": "auto", 
      "alignVertical": "top", 
      "expanded_pmp": true, 
      "pRight": "", 
      "pAll": "", 
      "pBottom": "", 
      "borderStyle": "", 
      "ontouchstart": "", 
      "display": "", 
      "left": 3
    }, 
    {
      "right": "auto", 
      "onmousedown": "", 
      "cached_js": "", 
      "color": "", 
      "height": 281, 
      "fontFamily": "", 
      "popBody": "Body", 
      "mRight": "", 
      "popClose": "hover", 
      "responsive": " img-fluid", 
      "onresize": "", 
      "expanded_pmp": true, 
      "children": [], 
      "style": "", 
      "cached_js_script_hash": "d41d8cd98f00b204e9800998ecf8427e", 
      "script": "", 
      "top": 139, 
      "!type": "Image_bs4", 
      "popTitle": "Title", 
      "pLeft": "", 
      "pTop": "", 
      "width": 250, 
      "onmousemove": "", 
      "onmouseup": "", 
      "fontSize": "", 
      "hidden": "", 
      "onclick": "", 
      "onmouseout": "", 
      "src": "", 
      "_uuid": "84576cf6b8e644c4a0329f1c644c0f97", 
      "mTop": "", 
      "mBottom": "", 
      "fontWeight": "", 
      "mAll": "", 
      "mLeft": "", 
      "class": "", 
      "backgroundColor": "", 
      "popStyle": "popover", 
      "ontouchend": "", 
      "fontStyle": "", 
      "center": "", 
      "popPosition": "", 
      "ontouchmove": "", 
      "bottom": "auto", 
      "shape": "", 
      "pRight": "", 
      "id": "imgResults", 
      "pAll": "", 
      "pBottom": "", 
      "ontouchstart": "", 
      "display": "", 
      "left": 36
    }, 
    {
      "right": "auto", 
      "onmousedown": "", 
      "cached_js": "", 
      "color": "#191e22", 
      "text": "", 
      "height": 35, 
      "fontFamily": "FUTURA", 
      "mRight": "", 
      "id": "lblResults", 
      "onresize": "", 
      "children": [], 
      "borderColor": "", 
      "style": "", 
      "cached_js_script_hash": "d41d8cd98f00b204e9800998ecf8427e", 
      "script": "", 
      "top": 47, 
      "!type": "Label", 
      "pLeft": "", 
      "pTop": "", 
      "width": 319, 
      "onmousemove": "", 
      "onmouseup": "", 
      "fontSize": "20", 
      "hidden": "", 
      "borderWidth": "", 
      "onclick": "", 
      "onmouseout": "", 
      "_uuid": "d75f756121384ccdb524d453e0e5cf9e", 
      "mTop": "", 
      "mBottom": "", 
      "fontWeight": "500", 
      "mAll": "", 
      "mLeft": "", 
      "class": "", 
      "backgroundColor": "", 
      "ontouchend": "", 
      "fontStyle": "", 
      "ontouchmove": "", 
      "align": "center", 
      "bottom": "auto", 
      "alignVertical": "top", 
      "expanded_pmp": true, 
      "pRight": "", 
      "pAll": "", 
      "pBottom": "", 
      "borderStyle": "", 
      "ontouchstart": "", 
      "display": "", 
      "left": 4
    }
  ], 
  "expanded_pmp": true, 
  "_functions": [
    {
      "cached_js_script_hash": "d41d8cd98f00b204e9800998ecf8427e", 
      "cached_js": "", 
      "script": "", 
      "_uuid": "602753b0e1194d0c86548e30656cab01", 
      "!type": "Form", 
      "expanded_pmp": true, 
      "id": "Results.onshow", 
      "location": [
        0, 
        1
      ], 
      "signature": "Results.onshow()", 
      "children": []
    }, 
    {
      "cached_js_script_hash": "d41d8cd98f00b204e9800998ecf8427e", 
      "cached_js": "", 
      "script": "", 
      "_uuid": "030622afd3a6458194ec408c154a0fab", 
      "!type": "Form", 
      "expanded_pmp": true, 
      "id": "hmbResults.onclick", 
      "location": [
        37, 
        38
      ], 
      "signature": "hmbResults.onclick(s)", 
      "children": []
    }
  ], 
  "designHeight": 0, 
  "borderWidth": "", 
  "modal": "false", 
  "position": "absolute", 
  "borderStyle": "", 
  "left": "0"
}