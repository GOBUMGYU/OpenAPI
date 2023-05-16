    //JSON 데이터 객체와 문자열로 변환하기
    //JSON.parse() JSON데이터(문자열) -> 객체 , JSON.stringfy() 객체 --> 문자열

    //[1] : JSON.parse(jsonText) --> JSON 형식의 텍스트 --> 자바스크립트 객체로 반환
    let jsonText = '{"name":"홍길동", "age":20, "nationality": "대한민국"}';

    console.log("변환 전 :" + typeof jsonText);
    const jsonObj = JSON.parse(jsonText);
    console.log("변환 후 :" + typeof jsonObj); //type Object
    console.log("=========================");
    console.log(jsonObj.name);
    console.log(jsonObj.age);
    console.log(jsonObj.nationality);
    console.log(`나의 이름은 ${jsonObj.name}이고 나이는 ${jsonObj.age}살, 국적은 ${jsonObj.nationality}이야`);
    console.log("=========================");

    //[2] : JSON.stringfy (dataObj --> 데이터 객체를 --> JSON형식의 텍스트로 변환)
    const  jsonStr = JSON.stringify(jsonObj);
    console.log(typeof jsonStr);
    console.log(jsonStr);
