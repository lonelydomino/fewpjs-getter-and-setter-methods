// Add your Circle class here

class Circle {
    constructor(r){
        this.radius = r;
    }
   
    get diameter(){
        return this.radius * 2
    }
    get circumference() {
        return Math.PI * this.diameter
    }
    get area() {
        return Math.PI * (this.radius * this.radius)
    }
    set circumference(c){
        this.radius = c / (Math.PI * 2)
    }
    set diameter(d) {
        this.radius = d / 2
      }

}