var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var particles = [];
var num_particles = 10; // Cantidad de partículas
var minSpeed = 0.05; // Velocidad mínima del movimiento
var maxSpeed = 0.2; // Velocidad máxima del movimiento
var minOpacity = 0.06; // Opacidad mínima
var maxOpacity = 0.09; // Opacidad máxima
var rotationSpeed = 0.01; // Velocidad de rotación
var maxRotation = Math.PI / 0.05; // Máxima rotación (en radianes)
var minSize = 50; // Tamaño mínimo de las partículas
var maxSize = 100; // Tamaño máximo de las partículas

// Array de imágenes SVG
var svgImages = [];
var imageSources = ["ARCHIVOS/PAN.svg", "ARCHIVOS/FLOR.svg", "ARCHIVOS/CAL.svg"]; // Añade las rutas de tus SVGs aquí

// Cargar las imágenes SVG
for (var i = 0; i < imageSources.length; i++) {
    var img = new Image();
    img.src = imageSources[i];
    svgImages.push(img);
}

// Crear Partículas
var Particle = function () {
    this.x = canvas.width * Math.random();
    this.y = canvas.height * Math.random();
    this.vx = (Math.random() * (maxSpeed - minSpeed) + minSpeed) * (Math.random() < 0.5 ? -1 : 1);
    this.vy = (Math.random() * (maxSpeed - minSpeed) + minSpeed) * (Math.random() < 0.5 ? -1 : 1);
    this.opacity = Math.random() * (maxOpacity - minOpacity) + minOpacity;
    this.rotation = Math.random() * maxRotation * (Math.random() < 0.5 ? -1 : 1);
    this.rotationDirection = Math.random() < 0.5 ? 1 : -1;
    this.rotationSpeed = Math.random() * rotationSpeed * this.rotationDirection;
    this.size = Math.random() * (maxSize - minSize) + minSize; // Tamaño aleatorio entre minSize y maxSize
    this.image = svgImages[Math.floor(Math.random() * svgImages.length)]; // Elegir una imagen aleatoria
}

// Agregar función de dibujo al prototipo de la partícula
Particle.prototype.Draw = function (ctx) {
    ctx.globalAlpha = this.opacity;
    ctx.save();
    ctx.translate(this.x, this.y);
    ctx.rotate(this.rotation);
    ctx.drawImage(this.image, -this.size / 2, -this.size / 2, this.size, this.size); // Dibujar imagen SVG con tamaño
    ctx.restore();
    ctx.globalAlpha = 1;
}

// Agregar función de actualización al prototipo de la partícula
Particle.prototype.Update = function () {
    this.x += this.vx;
    this.y += this.vy;
    this.rotation += this.rotationSpeed;

    // Rebote en los bordes
    if (this.x < 0 || this.x > canvas.width) this.vx = -this.vx;
    if (this.y < 0 || this.y > canvas.height) this.vy = -this.vy;
}

// Bucle principal
function loop() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    for (var i = 0; i < num_particles; i++) {
        particles[i].Update();
        particles[i].Draw(ctx);
    }

    requestAnimationFrame(loop);
}

// Crear partículas y empezar el bucle
for (var i = 0; i < num_particles; i++) {
    particles.push(new Particle());
}

loop();

// Ajustar el tamaño del canvas cuando cambia el tamaño de la ventana
window.addEventListener('resize', function () {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});
