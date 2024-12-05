function naverLogin(){
    const clientId = "8spRhaZdAbZLcdcd6e4Q";
    //리다이렉트URL을 utf-8로 인스코딩해서 저장
    const redirectURL = encodeURIComponent("http://192.168.30.12:5600/T3B1/member/login/naver");

    const state = Math.random().toString(36).substring(2);

    let apiURL = "https://nid.naver.com/oauth2.0/authorize?response_type=code";
    apiURL += "&client_id=" + clientId;
    apiURL += "&redirect_uri=" + redirectURL;
    apiURL += "&state=" + state;

    location.href = apiURL;
}