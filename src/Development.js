/* 
This doesn't need to be imported on a production enviroment 
Doesn't really matter if it does other than performance reasoning
*/ 

const Development = () => {
    console.log('%c DEVELOPMENT MODE ENABLED', 'background: black; color: red; font-size: 50px');
    return true;
}

export { Development }