code = function get_random_color() {
    return '#' + Math.random().toString(16).substring(4);
    }

function () {

    var particleGenerator = function() {
        return {
            x: Math.random()*800,
            y: Math.random()*600,
            radius: Math.random()*15,
            color: get_random_color(),
        };
    };
    
    var maxNumberOfParticles = 500;
    var particleArray = [];
    
    while (particleArray.length < maxNumberOfParticles) {
        var newParticle = particleGenerator();
        particleArray.push(newParticle);
    }
    
    page.perFrame = function (delta) {
        page.clear();

        particleArray.forEach(function (p) {
            if (p.y < 600) {
                p.y = p.y + (0.3 * p.radius * delta);
            }
            page.draw(p);
        });
    };
};



    var Particle = {};

    

	var numberOfParticles = 0;

	while(numberOfParticles < 500) {


	Particle.y = Math.random()*600;
	Particle.x = Math.random()*800;
	Particle.radius = Math.random()*30;
	Particle.color = get_random_color();
	page.draw(Particle);

	numberOfParticles = numberOfParticles + 1;

	}
