function pow(num, degree) {
  if (degree === 0) {
    return 1;
  } else if (degree === 1) {
    return num;
  } else {
    return num * pow(num, degree - 1);
  }
}

// приклад використання
console.log(pow(2, 3)); 
console.log(pow(5, 2)); 
console.log(pow(10, 0));