console.log('Ajax file is called');

//  let fetchBtn = document.getElementById('fetch_btn');
// fetchBtn.addEventListener('click',buttonClickHandler);

// this function pursose is to fetch data from file
function getDataFromTextFileLocal()
{
    console.log('calling Json from External...');
    
    // first we create http object and that object we store a variable
    const xhr = new XMLHttpRequest();
    // and second step we open that object and set the parameters like get and post and true means asonchronis ya uns....
    xhr.open('GET' , 'ajax.txt' , true);     // ajax ki jaga hum url bhi likh raksta hai

    //inProgress
    xhr.onprogress = function(){
        console.log('InProgress.......');        // we can use it spiner too 
    }

    // load
    xhr.onload = function(){
        console.log('Onload is called.....');   // it means when all are loaded then it will be world
        if(this.status === 200)        {
            console.log('Response From Txt File : '+this.response);   // printing response from file
        }
        else{
            console.log('Custom Error in project'); // like other of 200 it will show error
        }   
    }     

    console.log('response.....'+this);
    xhr.send();                               
}

// fetch data from live json api
function getDataFromLiveApiJson()
{
    let var2 = new XMLHttpRequest();
    var2.open('GET', 'https://jsonplaceholder.typicode.com/todos/1');   // this api provide fake live json data 

    var2.onprogress = function(){
        console.log('InProgress.......');        // we can use it spiner too 
    }
        // load
    var2.onload = function(){
            console.log('Onload is called.....');   // it means when all are loaded then it will be world
            if(this.status === 200)
            {
                console.log('Response From Txt File : '+this.response);   // printing response from file
            }
            else{
                console.log('Custom Error in project'); // like other of 200 it will show error
            }            
    }     
    var2.send();
}

// post method add data from live json api  // http://dummy.restapiexample.com/employees
function AddDataFromLiveApiJson()
{
    let var3 = new XMLHttpRequest();

    var3.open('POST','http://dummy.restapiexample.com/api/v1/create',true);

    var3.onprogress = function()
    {
        console.log('InProgress...');
    }

    var3.onload = function(){
        console.log('Done...');
        if(this.status === 200)
        {
            console.log('Response Data... : '+this.response);
        }else{
            window.alert('Error');

        }

    }
    var3.getResponseHeader('Content-type','application/json');

    params = '{"name":"jhony8480","salary":"123","age":"23"}';
    var3.send(params);
}