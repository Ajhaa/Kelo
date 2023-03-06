
function readfile(filepath){
    var result = null;
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open("GET", filepath, false);
    xmlhttp.send();
    if (xmlhttp.status==200) {
        result = xmlhttp.responseText;
    }
    return result;
}

data = JSON.parse(readfile("kelo.txt"));

document.write("<font size='+2'>");
document.write('<div style="position: relative; width: 100%;">');
for(let i = 0; i < data.length; i++){  
  document.write('<div style="position: absolute; left: 0; top: '+ (i*25) + 'px;">');
  document.write(data[i][0]);
  document.write('<span style="position: absolute; left: 15vw; top: 0;">' + Math.round(data[i][1]*10)/10 + '</span>');
  document.write('</div>');
}
document.write('</div>');
document.write("</font>");