let nav1 = document.createElement("nav");

nav1.innerHTML=`<div class="container-table">
<h1 class=" text-center" id="title" style="color: black">DOM MANIPULATION FORM</h1>
</div>`;

document.body.append(nav1);

let container = document.createElement('div');

container.setAttribute('class','container');

let Row = document.createElement('div');

Row.setAttribute('class','row');

let Column = document.createElement('div');

Column.setAttribute('class','column');

let form1 = document.createElement('form');

form1.setAttribute('class','form-data','id','form');

let form_div1 = document.createElement('div');

form_div1.setAttribute('class','form-group');

form_div1.innerHTML=`<lable for="fname" class="form-lable">First name</lable><br>`;

var firstName = document.createElement('input');

firstName.setAttribute('type','text');

firstName.setAttribute('id','first-name');

firstName.setAttribute('required','');

form_div1.append(firstName);

form1.append(form_div1);

let form_div2 = document.createElement('div');

form_div2.setAttribute('class','form-group');

form_div2.innerHTML=`<lable for="lname" class="form-lable">Last name</lable><br>`;

var lastName = document.createElement('input');

lastName.setAttribute('type','text');

lastName.setAttribute('id','last-name');

lastName.setAttribute('required','');

form_div2.append(lastName);

form1.append(form_div2);

let form_div3 = document.createElement('div');

form_div3.setAttribute('class','form-group');

form_div3.innerHTML=`<lable class="form-lable">Gender </lable>

<div class="form-check">
<input class="form-check-input" type="radio" value = "Male" name="flexRadioDefault" id="male">
    <label class="form-check-label" for="male">
      Male
    </label>

  </div>
  <div class="form-check">
<input class="form-check-input" type="radio" value = "Female" name="flexRadioDefault" id="female">
    <label class="form-check-label" for="female">
      Female
    </label>

  </div>`;

form1.append(form_div3);

let form_div4 = document.createElement('div');

form_div4.setAttribute('class','form-group');

form_div4.innerHTML=`<lable for="address" class="form-lable">Address</lable><br>`;

var address = document.createElement('textarea');

address.setAttribute('type','text');

address.setAttribute('id','address');

address.setAttribute('required','');

form_div4.append(address);

form1.append(form_div4);

let form_div5 = document.createElement('div');

form_div5.setAttribute('class','form-group');

form_div5.innerHTML=`<lable for="pincode" class="form-lable">Pincode</lable><br>`;

var pincode = document.createElement('input');

pincode.setAttribute('type','text');

pincode.setAttribute('id','pincode');

pincode.setAttribute('required','');

form_div5.append(pincode);

form1.append(form_div5);

let form_div6 = document.createElement('div');

form_div6.setAttribute('class','form-group');

form_div6.innerHTML=`<lable for="state" class="form-lable">State</lable><br>`;

var state = document.createElement('input');

state.setAttribute('type','text');

state.setAttribute('id','state');

state.setAttribute('required','');

form_div6.append(state);

form1.append(form_div6);

let form_div7 = document.createElement('div');

form_div7.setAttribute('class','form-group ');

form_div7.innerHTML=`<lable for="Country" class="form-lable">Country</lable><br>`;

var country = document.createElement('input');

country.setAttribute('type','text');

country.setAttribute('id','country');

country.setAttribute('required','');

form_div7.append(country);

form1.append(form_div7);

let form_div8 = document.createElement('div');

form_div8.setAttribute('class','form-group');

form_div8.innerHTML=`<lable for="food" class="form-lable">Food-Items</lable>
<div class="form-check">
<input  class="form-check-input"  type="checkbox"  value="Idly"  id="Idly"  name="option"/>
<label class="form-check-label" for="Idly"> Idly </label>
</div>
<div class="form-check">
<input  class="form-check-input"  type="checkbox"  value="Dosa"  id="Dosa"  name="option" />
<label class="form-check-label" for="Dosa"> Dosa </label>
</div>
<div class="form-check">
<input  class="form-check-input"  type="checkbox"  value="Meals"  id="Meals"  name="option" />
<label class="form-check-label" for="Meals"> Meals </label>
</div>
<div class="form-check">
<input  class="form-check-input"  type="checkbox"  value="Chappathi"  id="Chappathi"  name="option" />
<label class="form-check-label" for="Chappathi"> Chappathi </label>
</div>
<div class="form-check">
  <input  class="form-check-input"  type="checkbox"  value="Poori"  id="poori"  name="option" />
  <label class="form-check-label" for="poori"> Poori </label>
</div><br><br>`;

form1.append(form_div8);

let form_button = document.createElement('button');

form_button.setAttribute('id','submit');

form_button.setAttribute('value','');

form_button.innerHTML='Submit';

form_div8.append(form_button);

form1.append(form_div8);

Column.append(form1);

Row.append(Column);

container.append(Row);

document.body.append(container);

let container2 = document.createElement('div');

container2.setAttribute('class','container1');

let Row1 = document.createElement('div');

Row1.setAttribute('class','row');

let Column1= document.createElement('div');

Column1.setAttribute('class','container1');

let Row_div1 = document.createElement("div");

Row_div1.setAttribute("class","mt-5");

Row_div1.innerHTML=`<h3>DataBase </h3>`;

Column1.append(Row_div1);

Row1.append(Column1);

const Row3 = document.createElement("div");

Row3.setAttribute("class","row mt-4");

Row3.innerHTML=` <table border ="1px" id="userTable" class="table table-striped">
<thead>
  <tr>
  <th scope="col">First Name</th>
  <th scope="col">Last Name</th>
  <th scope="col">Gender</th>
  <th scope="col">Address</th>
  <th scope="col">Pincode</th>
  <th scope="col">State</th>
  <th scope="col">Country</th>
  <th scope="col">Food</th>
  </tr>
</thead>
<tbody class="tablebody" id ="tbody">
</tbody>
</table>`;

container2.append(Row1);

container2.append(Row3);

document.body.append(container2);

let form_button1 = document.getElementById("submit");

form_button1.addEventListener('click',(event)=>{

  event.preventDefault();

 let checkboxes = document.querySelectorAll('input[name="option"]:checked');

 let values =[];

 checkboxes.forEach((checkbox)=>{

  values.push(checkbox.value);

 });

 document.getElementById('tbody').innerHTML=
 `<tr>

   <td> ${document.getElementById("first-name").value}</td>

   <td> ${document.getElementById("last-name").value}</td>

   <td>${document.querySelector('input[name="flexRadioDefault"]:checked').value}</td>

   <td> ${document.getElementById("address").value}</td>

   <td> ${document.getElementById("pincode").value}</td>

   <td> ${document.getElementById("state").value}</td>

   <td> ${document.getElementById("country").value}</td>
   
   <td>${values}</td>
</tr> `;

document.getElementById('form1').reset();

});




