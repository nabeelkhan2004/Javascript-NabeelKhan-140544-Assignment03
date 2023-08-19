// //                  Chapter 14 - 16 ARRAY
// //                  Point 01
// var studentNames = [];


// //                  Task 02
// var studentNames = {};


// //                  Task 03
// var strArray = ['Nabeel', 'Khan', 'Saylani', 'WMA140544'];


// //                  Task 04
// var numArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];


// //                  Task 05
// var boolArray = [true, false];


// //                  Task 06
// var mixedValArray = ['Nabeel', 'Khan', 'Sayani', 140544, true,];


// //                  Task 07
// var pakQualification = ['SSC', 'HSC', 'BCS', 'BS', 'BCOM', 'MS', 'M. Phil.', 'PhD'];

// document.write(pakQualification[0] + "<br>");
// document.write(pakQualification[1] + "<br>");
// document.write(pakQualification[2] + "<br>");
// document.write(pakQualification[3] + "<br>");
// document.write(pakQualification[4] + "<br>");
// document.write(pakQualification[5] + "<br>");
// document.write(pakQualification[6] + "<br>");
// document.write(pakQualification[7] + "<br>");

// //                  Task 08
// var studentNames = ['Nabeel', 'Shahzaib', 'Sarfaraz'];
// var studentScore = [405, 428, 447];

// document.write("Score of " + studentNames[0] + " is " + studentScore[0] + ". Percentage: " + (studentScore[0]/500 * 100).toFixed(2) + "&#37; <br>");
// document.write("Score of " + studentNames[1] + " is " + studentScore[1] + ". Percentage: " + (studentScore[1]/500 * 100).toFixed(2) + "&#37; <br>");
// document.write("Score of " + studentNames[2] + " is " + studentScore[2] + ". Percentage: " + (studentScore[2]/500 * 100).toFixed(2) + "&#37; <br>");

// //                  Task 09

// var colorName = ['Red', 'Green', 'Blue', 'Yellow', 'Orange', 'Purple'];

// document.write("<h3>Array of Color</h3>")

// document.write(colorName)

//                      a
// var userAddBeginning = prompt("Please add your favourite color at beginning", "Maroon");

// colorName.unshift(userAddBeginning);

// document.write("<h3>added user color " + colorName[0] +" at the beginning of the Array</h3>")

// document.write(colorName)

//                      b
// var userAddEnd = prompt("Please add your favourite color at end", "Indigo");

// colorName.push(userAddEnd);

// document.write("<h3>Added user color " + colorName[7] + " at the end of the Array</h3>")

// document.write(colorName);

//                      c
// var userAddColorBeg1 = prompt("Please add your favourite color 1 at Beginning", "Brown");
// var userAddColorBeg2 = prompt("Please add your favourite color 2 at Beginning", "White");

// colorName.splice(0, 0, userAddColorBeg1, userAddColorBeg2);

// document.write("<h3>Added 2 user colors " + colorName[0] + " & " + colorName[1] + " at the beginning of the Array</h3>")

// document.write(colorName);

//                      d
// document.write("<h3>Delete the first value</h3>");

// colorName.shift();

// document.write(colorName);

//                      e
// document.write("<h3>Delete the last value</h3>");

// colorName.pop();

// document.write(colorName);

//                      f
// var indexNum = +prompt("At which index you want to add the value?");
// var colorValue = prompt("What value you want to add?");

// colorName.splice(indexNum, 0, colorValue);


// document.write("<h3>Value added at " + indexNum + " Index </h3>")

// document.write(colorName);

//                      g
// var indexNum = +prompt("at what Index you want to delete the color?")
// var deleteNumOfVal = +prompt("How many value(s) you want to delete from index?")

// if(deleteNumOfVal === 0 ) {
//     ++deleteNumOfVal;
// }
    
// colorName.splice(indexNum, deleteNumOfVal);
    
// document.write("<h3>Value deleted from " + indexNum + " Index to " + (indexNum + (deleteNumOfVal - 1)) + " </h3>")
    
// document.write(colorName);
    
    
// //                  Task 10
    
// document.write("<h3>Students' score</h3>");
// var studentScore = [504, 805, 125, 324, 611, 241];

// document.write(studentScore);

// studentScore.sort();

// document.write("<h3>Sorted students' score</h3>");
// document.write(studentScore);


// //                  Task 11

// document.write("<h3>Name of Cities</h3>");
// var cities = ['Lahore', 'Karachi', 'Islamabad', 'Faislabad', 'Peshawar', 'Quetta', 'Hyderabad'];

// document.write(cities);

// var index1 = +prompt("Selected the index from you want to copy the value")
// var index2 = +prompt("Selected the last index you want to copy the value")

// var selectedCities = cities.slice(index1, (index2 + 1));

// document.write("<h3>Selected Cities</h3>");

// document.write(selectedCities)


// //                  Task 12

// document.write("<h3>Array of String to Join</h3>");
// var myNameArr = ['Hello', 'world,', 'my', 'name', 'is', 'Nabeel', 'Khan'];

// document.write(myNameArr)
// myNameArr = myNameArr.join(' ')

// document.write("<h3>Array of String after .Join()</h3>");

// document.write(myNameArr)

// //                  Task 13

// var fifoValues = [];
// document.write("<h3>Add values using .push() Mehtod </h3>");

// fifoValues.push('Karachi');
// document.write(fifoValues + "<br>");

// fifoValues.push('Lahore');
// document.write(fifoValues + "<br>");

// fifoValues.push('Islamabad');
// document.write(fifoValues + "<br>");

// fifoValues.push('Faisalabad');
// document.write(fifoValues + "<br>");

// fifoValues.push('Hyderabad');

// document.write(fifoValues);

// document.write("<h3>remove values using .shift() Mehtod </h3>");

// document.write(fifoValues + "<br>");
// fifoValues.shift();
// document.write(fifoValues + "<br>");

// fifoValues.shift();
// document.write(fifoValues + "<br>");

// fifoValues.shift();
// document.write(fifoValues + "<br>");

// fifoValues.shift();
// document.write(fifoValues + "<br>");

// //                  Task 14
// var lifoValues = [];
// document.write("<h3>Add values using .push() Mehtod </h3>");

// lifoValues.push('Karachi');
// document.write(lifoValues + "<br>");

// lifoValues.push('Lahore');
// document.write(lifoValues + "<br>");

// lifoValues.push('Islamabad');
// document.write(lifoValues + "<br>");

// lifoValues.push('Faisalabad');
// document.write(lifoValues + "<br>");

// lifoValues.push('Hyderabad');

// document.write(lifoValues);

// document.write("<h3>remove values using .pop() Mehtod </h3>");

// document.write(lifoValues + "<br>");
// lifoValues.pop();
// document.write(lifoValues + "<br>");

// lifoValues.pop();
// document.write(lifoValues + "<br>");

// lifoValues.pop();
// document.write(lifoValues + "<br>");

// lifoValues.pop();
// document.write(lifoValues + "<br>");

// //                  Task 15

// var phoneManufacaturers = ['Apple', 'Samsung', 'Motorola', 'Nokia', 'Sony', 'Haier'];

// document.write("<h3>Phone Manufactureres</h3>")
// document.write("<label> Select you favourite Mobile Brand <br>")
// document.write("<select>")
// document.write("<option>" + phoneManufacaturers[0] + "</option>")
// document.write("<option selected >" + phoneManufacaturers[1] + "</option>")
// document.write("<option>" + phoneManufacaturers[2] + "</option>")
// document.write("<option>" + phoneManufacaturers[3] + "</option>")
// document.write("<option>" + phoneManufacaturers[4] + "</option>")
// document.write("<option>" + phoneManufacaturers[5] + "</option>")
// document.write("</select>")
// document.write("</label>")