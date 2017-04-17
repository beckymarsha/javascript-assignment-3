// Do your work in this file.

var view = document.createElement("div");
view.className = "view";
document.body.appendChild(view);

var grass = document.createElement("div");
grass.className = "grass";
view.appendChild(grass);

var sun = document.createElement("div");
sun.className = "sun";
view.appendChild(sun);

function makeRay() {

var ray1 = document.createElement("ray-1");
ray1.className = "ray-1";
sun.appendChild(ray1);

var ray2 = document.createElement("ray-2");
ray2.className = "ray-2";
sun.appendChild(ray2);

var ray3 = document.createElement("ray-3");
ray3.className = "ray-3";
sun.appendChild(ray3);

var ray4 = document.createElement("ray-4");
ray4.className = "ray-4";
sun.appendChild(ray4);

var ray5 = document.createElement("ray-5");
ray5.className = "ray-5";
sun.appendChild(ray5);

}

var x = 0;
while (x < 2) {
    makeRay();
    sun.appendChild(ray1);
    sun.appendChild(ray2);
    sun.appendChild(ray3);
    sun.appendChild(ray4);
    sun.appendChild(ray5);
    x++;
}