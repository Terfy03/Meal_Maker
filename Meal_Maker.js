const menu ={
  _courses: {
    appetizers: '',
    mains: '',
    desserts:''
  },
  get appetizers(){
    return this._courses.appetizers;
  },
  set appetizers(appetizerIn){
    this._courses.appetizers = appetizerIn;
  },
  get mains(){
    return this._courses.mains;
  },
  set mains(mainsIn){
    this._courses.mains = mainsIn;
  },
  get desserts(){
    return this._courses.desserts;
  },
  set desserts(dessertsIn){
    this._courses.desserts = dessertsIn;
  },

  get courses(){
    return{
      appetizers: this.appetizer,
      mains: this.mains,
      desserts: this.desserts
    };
  },
  addDishToCourse(courseName, dishName, dishPrice){
    
    const dish = {
      name: courseName,
      price: dishPrice
    };
    return this._courses[courseName].push(dish);
  },

  getRandomDishFromCourse(courseName) {
    const dishes = menu._courses[courseName];
    const randomIndex = Math.floor(Math.random()*dishes.length);
    return dishes[randomIndex];
      },
  generateRandomMeal(){
    appetizer = this.getRandomDishFromCourse('appetizers');
    main = this.getRandomDishFromCourse('mains');
    dessert = this.getRandomDishFromCourse('desserts');
    totalPrice = appetizer.price + main.price + dessert.price;
    return (`Your final meal would be $(appetizer.name), $(main.name), $(dessert.name) and your total price is $(totalPrice)`);     
  }
};

menu.addDishToCourse('appetizers', 'Finger Fries', '50' );
menu.addDishToCourse('appetizers', 'Cold Drinks', '30' );menu.addDishToCourse('appetizers', 'Chicken 65', '70' );

menu.addDishToCourse('mains', 'Veg Biriyani', '100' );
menu.addDishToCourse('mains', 'Chicken Biriyani', '150' );
menu.addDishToCourse('mains', 'Thali', '120' );

menu.addDishToCourse('desserts', 'Ice Cream', '40' );
menu.addDishToCourse('desserts', 'Chocolate', '20' );
menu.addDishToCourse('desserts', 'Sweet Pan', '25' );

const meal = meal.generateRandomMeal();

console.log(meal);
