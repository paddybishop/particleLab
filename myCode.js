code = function () {

    function get_random_color() {
	return '#' + Math.random().toString(16).substring(4);
	}
	
    var Particle = 0;
	
    
	
	var numberOfParticles = 0;
	
	while(numberOfParticles < 500) {
	
	
	Particle.y = Math.random()*600;
	Particle.x = Math.random()*800;
	Particle.radius = Math.random()*30;
	Particle.color = get_random_color();
	page.draw(Particle);
	
	numberOfParticles = numberOfParticles + 1;
	
	}
	
	
	
    
    
};
