const fruits=["Avocado","Kiwi","Maembe","Mapera"]
for(let r of fruits){
    console.log(r);
}

fruits.push("Mzabibu");
console.log(fruits);
console.log(fruits.length);

const cars=["BMW","Zubaru","Vix"]
var i;
for (i=0;i<cars.length;i++){
    console.log(i);
}

var matunda=["Banana","Orange","Apple"]
matunda.splice(2,0,"Lemon","Kiwi")
console.log(matunda)

const vehicles=["Zubaru","Vix","BMW"]
vehicles.splice(1,2,"mazda")
console.log(vehicles)

const schools=["Jalaram","Kosawo","AkiraChix","Kenyatta"]
schools.splice(1,2,"Manyatta","Nairobi")
console.log(schools)
