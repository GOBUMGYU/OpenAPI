package com.example.json_js;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.beans.Encoder;
import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.URL;
import java.net.URLEncoder;

@RestController
public class ApiJson {

    @GetMapping("")
    public void ApiJson() throws IOException {
        StringBuilder urlBuilder =
                new StringBuilder("http://apis.data.go.kr/B552061/jaywalking/getRestJaywalking"); //요청 URL
        urlBuilder.append("?" + URLEncoder.encode("ServiceKey", "UTF-8") + "=mZ5MJAUBDJlRSJJNU4PEQSsyph6%2FgtC6ICDbHRlf19oytHGC3tXLi0w%2Fhl2Zhh4nVUqHBmgxT2cagO9%2BfaP2JA%3D%3D"); //Service Key
        urlBuilder.append("&" + URLEncoder.encode("ServiceKey", "UTF-8") + "=" + URLEncoder.encode("mZ5MJAUBDJlRSJJNU4PEQSsyph6%2FgtC6ICDbHRlf19oytHGC3tXLi0w%2Fhl2Zhh4nVUqHBmgxT2cagO9%2BfaP2JA%3D%3D", "UTF-8"));
        urlBuilder.append("&" + URLEncoder.encode("searchYearCd", "UTF-8") + "=" + URLEncoder.encode("2017", "UTF-8")); //조회하고자 하는 연도 값 입력(값 없을 시 공백리턴
        urlBuilder.append("&" + URLEncoder.encode("siDo", "UTF-8") + "=" + URLEncoder.encode("11", "UTF-8"));
        urlBuilder.append("&" + URLEncoder.encode("guGun", "UTF-8") + "=" + URLEncoder.encode("680", "UTF-8"));
        urlBuilder.append("&" + URLEncoder.encode("type", "UTF-8") + "=" + URLEncoder.encode("json", "UTF-8")); //결과형식 (xml/json)
        urlBuilder.append("&" + URLEncoder.encode("numOfRows", "UTF-8") + "=" + URLEncoder.encode("10", "UTF-8")); //검색건수
        urlBuilder.append("&" + URLEncoder.encode("pageNo", "UTF-8") + "=" + URLEncoder.encode("1", "UTF-8")); //페이지 번호
        URL url = new URL(urlBuilder.toString());
        HttpURLConnection urlConn = (HttpURLConnection) url.openConnection();
        urlConn.setRequestMethod("GET");
        urlConn.setRequestProperty("Content-type", "application/json");
        System.out.println("Response code:" + urlConn.getResponseCode());
        BufferedReader br;
        if (urlConn.getResponseCode() >= 200 && urlConn.getResponseCode() <= 300) {
            br = new BufferedReader(new InputStreamReader(urlConn.getInputStream()));
        } else {
            br = new BufferedReader(new InputStreamReader(urlConn.getErrorStream()));
        }
        StringBuilder sb = new StringBuilder();
        String line;
        while ((line = br.readLine()) != null) {
            sb.append(line);
        }
        br.close();
        urlConn.disconnect();
        System.out.println(sb.toString());
    }
}

