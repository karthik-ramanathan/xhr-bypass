# xhr-bypass
proxy for api gateway especially useful when doing unit testing

### Installation
```
npm install --save xhr-bypass
```
### Methods

.GET() - to fire a get method
.POST() - to fire a post method

### Usage

```
import XHRBypass from "xhr-bypass";

XHRBypass.POST({
  url : "http://........",
  body : {
    variable1 : "value 1"
  }
}, (error, body)=>{
  if(error){
    console.log(error);
  }else{
    console.log(body);
  }
})

```
