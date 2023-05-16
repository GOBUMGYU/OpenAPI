//중첩된 JSON데이터 다루기
//한 권의 도서 정보를 갖고 있는 JSON데이터에서 해당 도서가 속해있는 카테고리를 출력
window.onload = () =>{
    //[1] : 중첩 데이터
    const book = {
        "isbn":"123-456-789",
        "author": {
            "name":"홍길동",
            "email":"soul1902@naver.com"
        },
        "editor": {
            "name":"이순신",
            "email":"lee@leesonnsin.com"
        },
        "title":"미움받을 용기",
        "category": [
            "인문학","철학"
        ]
    };

    console.log(book["author"].name); //홍길동
    console.log(book["editor"].name); //이순신
    console.log(book["isbn"]); //123-456-789
    console.log(book.isbn);
    console.log(book.author.name);

    //개별 엑세스
    var val = "";
    val = book.category[0];
    document.getElementById("table.board").innerText = val;

    //반복문을 이용한 엑세스
    //for
    for(let i = 0; i < book.category.length; i++) {
        //val +=  "<br>" + book.category[i]
        val += `<br> 해당 도서가 속한 카테고리는 ${book.category[i]}입니다.`;
    }
    document.getElementById("table.board").innerHTML = val;

    //for ..in
    for(let index in book.category) {
        val += "<br>" + book.category[index];
    }
    document.getElementById("table.board").innerHTML = val;

    //for ..of
    for(let value of book.category) {
        val += "<br>" + book.category
    }
    document.getElementById("table.board").innerHTML = val;
};