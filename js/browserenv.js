//브라우저 환경정보

function PrintBrowserEnv() {
    console.log('PrintBrowserEnv')
    console.log('PrintBrowserEnv')

    console.log(document.URL);
    console.log(location.href); // "https://www.example.com/"
    console.log(window.location.href); // "https://www.example.com/"
    console.log(location.search); // "?param1=value1&param2=value2"
    console.log(location.hash); // "#section1"
   
    //https://developer.mozilla.org/ko/docs/Web/API/Document/URL
    //https://developer.mozilla.org/ko/docs/Web/API/Location    
}