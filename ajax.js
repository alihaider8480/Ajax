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

    var3.open('POST','http://dummy.restapiexample.com/api/v1/create',true);    // true means we did call this api and simultaniously it call another below process

    var3.onprogress = function()
    {
        console.log('InProgress...');
    }

    var3.onload = function(){       // onload means everything is loaded and done then it will be execute
        console.log('Done...');
        if(this.status === 200)     // all done  then we can check the status of request
        {
            console.log('Response Data... : '+this.response);
        }else{
            window.alert('Error');

        }

    }
    var3.getResponseHeader('Content-type','application/json');  // here we set the content type and headers of request it should be mendatory

    params = '{"name":"jhony8480","salary":"123","age":"23"}';     // here we set variables in object and set in a object
    var3.send(params);                                          // HERE WE  send the object of data
}

function FetchAllDataFromLiveApiJson()
{
    console.log('Called FetchAllDataFromLiveApiJson Method...')
    let fetchAllData = new XMLHttpRequest();

    fetchAllData.open('GET','http://dummy.restapiexample.com/api/v1/employees',true);

    fetchAllData.onprogress = function()
    {
        console.log('FetchAllDataFromLiveApiJson method in progress....');
    }

    fetchAllData.onload = function()
    {
        if(this.status === 200)
        {
            console.log('printing all employees');
            let list = JSON.parse(this.responseText);
            console.log(list);
        }else{
            console.log('Error Occured During FetchAllDataFromLiveApiJson Method Called try it more time if too many error show');
        }
    }
    fetchAllData.send();

    console.log('All Records Fetch...!!');
}