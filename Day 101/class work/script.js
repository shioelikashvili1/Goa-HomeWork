async function asyncFunc(input) {
    return new Promise((resolve, reject) => {
      if (input === undefined || input === null) {
        
        resolve(42);
      } else {
    
        resolve(input);
      }
    });
  }
  

  asyncFunc().then(result => console.log(result));  
  asyncFunc(100).then(result => console.log(result)); 
  