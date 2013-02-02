code = function () {

    function get_random_color() {
	return '#' + Math.random().toString(16).substring(4);
	}
	
    var Particle = {
        
        
    };
	
    
	
	var numberOfParticles = 0;
	
	while(numberOfParticles < 500) {
	
	
	Particle.y = Math.random()*600;
	Particle.x = Math.random()*800;
	Particle.radius = Math.random()*30;
	page.draw(Particle);
	color: get_random_color(),
	numberOfParticles = numberOfParticles + 1;
	
	}
	
	
	
    
    
};
