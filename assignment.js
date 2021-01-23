
    // https://github.com/saim201980/javascript-Assignment

    //1
    function kilometerToMeter(kilometer){
    var meter = kilometer * 1000; 
    return meter;
    }
    var result = kilometerToMeter(5);
    console.log(result);

    //2

     function budgetCalculator(watch, phone, laptop) {
      let watchs = 50 * watch;
      let phones = 100 * phone;
      let laptops = 500 * laptop;
      const total = watchs + phones + laptops;
      return total;
      }
  
       const totalcost = budgetCalculator(2, 2, 2);
       console.log(totalcost);

       //3

       function hotelCost(numOfRooms) {
        let num1 = 0, num2 = 0, num3 = 0;
        let rooms = numOfRooms;
        let array = new Array();
        for (let i = rooms; i > 0; i--) {
            array[i] = numOfRooms;
            numOfRooms--;
        }
        const result1 = array.filter(el => el <= 10);
        num1 = result1.length * 100;
    
        const result2 = array.filter(el => 11 <= el && el <= 20 );
        num2 = result2.length * 80;
    
        const result3 = array.filter(el => el >= 21);
        num3 = result3.length * 50;
        
        return num1 + num2 + num3;
     }
    
        const total = hotelCost(22);
        console.log(total);


       //4
        function megaFriend(array) {
        var max = array[0].length;
        array.map(v => max = Math.max(max, v.length));
        result = array.filter(v => v.length == max);
        return result;
      }
      
      console.log (megaFriend(['kamal', 'rahman', 'jamal']));