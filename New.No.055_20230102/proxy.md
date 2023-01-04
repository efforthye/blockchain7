# proxy란 ?
- 위키백과 왈 : proxy는 클라이언트가 자신을 통해서 다른 네트워크 서비스에 간접적으로 접속할 수 있게 해주는 컴퓨터 시스템이나 응용 프로그램이다.
- 간단하게 말하면 서버와 클라이언트 사이에 중간 과정이다.
- proxy는 무엇을 하는가? -> 클라이언트가 서버에 요청을 보낼 때 중간에 자신(proxy)이 가로채서 자신(proxy)이 보낸 것처럼 서버에 요청을 보낸다.
- VPN : 중간 단계를 거쳐 나의 아이피 주소를 바꾸는 우회 프로그램, proxy와 비슷한 개념이라고 한다.
- 서버에 요청 시에 자신(클라이언트)의 데이터를 숨길 수 있다. ex) 대형 마트에서 계란 한정 판매 세일을 함(한판 천원/한명만) -> 4명의 친구가 대형마트(Server)에서 쇼핑을 하고 있었음 -> A(실제 클라이언트, 브라우저 등등)라는 친구가 계란을 좋아해 여러 판을 사고 싶어함 -> BCD(프록시 역할) 친구가 자신의 이름으로 계란을 사서 A라는 친구에게 주고 돈을 받았음 == proxy는 Server를 속이고 자신이 계란을 산 것처럼 했다. -> B,C,D가 산 계란은 실제로 A가 산 것이다. (중요.?)

# Reverse Proxy(중요)
- Proxy와 반대 역할을 하는 기능이다.
- 요청을 보낼 때(클라이언트)가 아닌 요청을 받은 후(서버)에 처리한다.
- 서버(A)가 요청을 받은 후 다른 서버(B)에 요청을 보내서 응답을 받고, 해당 응답을 자신(A)이 응답하는 것처럼 클라이언트에 전달(응답)한다.
- ex)
    1. 대학원생이 열심히 논문을 준비했지만 해당 논문은 교수가 자신의 이름으로 발표를 하게 된다.
        - 대학원생은 위에서의 B서버이고 교수는 A서버이다. 발표를 듣게 되는 다수의 청중은 클라이언트이다.
        - 클라이언트 입장에서는 해당 정보는 A서버가 보낸 응답으로 인식한다.
        - A서버가 Reverse Proxy이다. (!)
- ex2)
    1. 어떤 사람(B)이 기부 단체(A)에 익명으로 기부를 했다.
    2. 기부금으로 지원금을 받은 사람(클라이언트)은 기부 단체에서 준 돈인 줄 알게 된다.
        - 클라이언트