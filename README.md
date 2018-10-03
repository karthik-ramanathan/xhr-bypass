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

## An perfect example in JEST Unit Testing

```
import { shallow, mount, render } from 'enzyme';
import XHRBypass from "xhr-bypass";

import Sample from './Sample.jsx';

let customData = null;

describe("Testing the logon duration card component in the users page for all its child components", () => {
  test("fetching data", (done) => {
    XHRBypass.GET({url: "https://reqres.in/api/users?page=3"}, (error, body)=>{
      //customData = JSON.parse(body);
      customData = body;
      expect(customData.data.length).toBeGreaterThan(0);
      done();
    })
  })
  
  test("contains <Sample /> component", async () => {
    let wrapper = mount(<Sample data={customData.data}/>);
      const container = wrapper.find("li");
      //console.log(container.debug())
      expect(container.length).toBe(3);
  });
  
});

```