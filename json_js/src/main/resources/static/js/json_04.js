//JSON 데이터를 웹페이지로 출력하기
//Parsing --> 다른 형식으로 저장된 데이터를 목적에 맞는 형태의 형식으로 변환하는 것
//JSON Parsing --> Json형식의 텍스트 문자열을 목적에 맞게 객체로 변환
window.onload = () => {
    document.getElementById('btn').addEventListener('click', function (){
        console.log('test');
        let json = {
            "book": [{
                "isbn": "123-456-789",
                "author": {
                    "name": "홍길동",
                    "email": "soul1902@naver.com"
                },
                "editor": {
                    "name": "이순신",
                    "email": "lee@leesonnsin.com"
                },
                "title": "미움받을 용기",
                "category": [
                    "인문학", "철학"
                ],
                "picture": "images/aaa.jpg",
                "description": "미움받을 용기 절찬리에 판매중 ~",
                "comments": [{
                    "id": "김소원",
                    "text": "두권구매했습니다. 한권은 남자친구 선물!!."
                },
                    {
                        "id": "정의선",
                        "text": "많은 것을 느꼈습니다 감사합니다."
                    },
                    {
                        "id": "김범수",
                        "text": "좋은 글 감사합니다 작가님."
                    },
                    {
                        "id": "이순신",
                        "text": "좋은 내용인 것 같아요 용기 얻어갑니다 .. ㅋㅋ"
                    },
                    {
                        "id": "강감찬",
                        "text": "보면서 느낀점이 많습니다. 쉽게 읽을 수 있어 좋았어요 굳굳"
                    }],
                "comwinner": ["김범수", "이순신", "강감찬"],
                "add1": false,
                "add2": true
            }]
        } //let json

        json = json.book;
        for(let i = 0; i < json.length; i++) {
            console.log(json[i].comments);
            console.log(json[i].comwinner);
        }

        //ul태그 노드 생성
        let ul = document.createElement("ul");
        let bookList = document.getElementById("bookList");
        bookList.after(ul);

        for(let i = 0; i < json.length; i++) {
            for(let j = 0; j < json[i].comments.length; j++) {
                let bookComments = json[i].comments[j];
                //댓글 참가자
                console.log(bookComments.id + ":" + bookComments.text);

                //li애그 노드 생성
                let li = document.createElement("li");
                //테스트 노드 생성
                let txtNoode = document.createTextNode(bookComments.id + ":" + bookComments.text);
                li.appendChild(txtNoode);
                ul.appendChild(li);
                //bookList 붙이기
                bookList.remove(ul)
                bookList.after(ul);
            }
            //당첨자
            //console.log(json[i].comwinner.join(","));
            //let txtNode = document.createTextNode(json[i].comwinner.join(","));
            document.getElementById("bookListWinner").innerHTML = json[i].comwinner.join(",");
            //bookListWinner.append(txtNode);
        }

    }); //document

}; //window.onload