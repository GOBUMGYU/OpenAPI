package com.example.json_js;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.URL;

@SpringBootApplication
public class JsonJsApplication {

    public static void main(String[] args) {
        SpringApplication.run(JsonJsApplication.class, args);
        //API 주소 선언 ->  URL클래스 객체 생성 (주소매핑) -> openConnection() 메서드를 이용하여 주소 연결 ->
        //BufferedReader InputStreamReader 로 클래스 읽기 -> 반환

        //버퍼 이용 : BufferedReader --> 버퍼를 이용해서 읽고 쓰는 함수,
        //버퍼(Buffer) : 입출력 속도 향상을 위해서 데이터를 일시적으로 메모리 영역의 한 곳에 모아두는 것
        //장점 ㅣ 버퍼를 이용하기 때문에 입출력 관련 어떤 처리 작업을 매우 빠르게 할 수 있다.
        BufferedReader br = null;
        try{

            //공공 API인증키 및 풀 주소
            //변수에 여러 값을 넣어서 주소 체계를 만들어야 한다 --> StringBuilder를 사용.
            //String 불변성을 가지므로 문자열을 더할 때 매번 새로운 객체를 생성해서 참조하는 방식.
            //StringBuilder 문자열을 더해 나갈 때 새로운 객체를 매번 생성하는 것이 아니라 기존 데이터값에 추가해가는 방식, 속도가 빠르다.
            //보통 공공 API 방식 -> StringBuilder 사용
            String urlStr = "https://apis.data.go.kr/B552061/jaywalking/getRestJaywalking?serviceKey=mZ5MJAUBDJlRSJJNU4PEQSsyph6%2FgtC6ICDbHRlf19oytHGC3tXLi0w%2Fhl2Zhh4nVUqHBmgxT2cagO9%2BfaP2JA%3D%3D&searchYearCd=2015&siDo=11&guGun=320&type=json&numOfRows=10&pageNo=1";

            //URL 클래스로 객체 생성 --> 2가지 방법 : 절대경로, 상대경로
            URL url = new URL(urlStr);

            //openConnection() 메서드를 이용한 연결
            //URL 주소의 원격 객체에 접속한 뒤 ->> 통신 할수 있는 URLConnection 객체 리턴
            HttpURLConnection urlConn = (HttpURLConnection) url.openConnection();
            urlConn.setRequestMethod("GET");
            urlConn.setRequestProperty("Content-type", "application/json");
            System.out.println("Response Code : " + urlConn.getResponseCode()); //200

            //InputStreamReader 클래스로 읽기
            //BufferedReader 는 InputStreamReader 의 객체를 입력값으로 사용
            br = new BufferedReader(new InputStreamReader(urlConn.getInputStream(), "UTF-8"));

            //결과 변수

            //String 사용
            /*String rst = "";
            String line;
            while((line = br.readLine()) != null) {
                rst += line + "\n";
            }
            System.out.println("rst = " + rst);*/

            //StringBuilder 사용
            StringBuilder sb = new StringBuilder();
            String line;
            while((line = br.readLine()) != null) {
                sb.append(line);
            }
            System.out.println("sb.toString() = " + sb.toString());

            //연결 해제
            br.close();
            urlConn.disconnect();
        }catch(Exception e) {
            System.out.println(e.getMessage());
        }
    }

}
