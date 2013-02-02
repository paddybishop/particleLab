code = function () {

    var orangeParticle = {
        x: 400,
        y: 300,
        radius: 100,
        color: 'orange',
    };
    
    var sizeChange = 1;
    
    page.perFrame = function () {
        page.clear();
        
        orangeParticle.radius = orangeParticle.radius + sizeChange;
        
        if (orangeParticle.radius > 150) {
            sizeChange = -1;
        }
        
        if (orangeParticle.radius < 75) {
            sizeChange = 1;
        }
        
        page.draw(orangeParticle);
    };
};
