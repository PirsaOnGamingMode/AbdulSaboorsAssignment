interface Car {
    manufacturer: string;
    modelName: string;
    color?: string;
    optionalFeature?: string;
    // Add more properties as needed
  }
  
  function createCar(manufacturer: string, modelName: string, options: Partial<Car> = {}): Car {
    const car: Car = {
      manufacturer,
      modelName,
      ...options
    };
  
    return car;
  }
  
  // Example usage:
  const myCar = createCar('Toyota', 'Camry', { color: 'blue', optionalFeature: 'sunroof' });
  
  console.log(myCar);
  