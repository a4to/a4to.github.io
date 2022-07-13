#!/usr/bin/env bash

cat << EOF > svgs.js
const svgs = [
EOF


for x in SVGs/*.svg; do
  cat << EOF >> svgs.js
  },
  {
    name: '$(basename $x .svg)',
    icon: "SVGs/$(basename $x .svg).svg"
EOF

done

echo '
  }
  ];


document.getElementById("svgs").innerHTML = `
  <h1>SVGs${svgs.length}</h1>
  `;

' >> svgs.js

  
