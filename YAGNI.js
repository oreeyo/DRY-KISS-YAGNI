// YAGNI(You Aren't Gonna Need It)는 "당신이 그것을 필요로 하지 않을 것"이라는 의미의 소프트웨어 개발 원칙입니다. 
// 이 원칙은 개발자가 현재 필요하지 않은 기능이나 코드를 작성하는 것을 경계하도록 돕습니다. 
// YAGNI 원칙에 따르면, 미래에 필요할 것 같은 기능을 미리 구현하는 대신, 그 기능이 실제로 필요해질 때까지 기다려야 합니다.


// ### YAGNI 원칙을 적용하기 전:

function createMenu() {
    //...
    createSubMenu(); // 예상되는 기능 (확장성을 고려)
}

function createSubMenu() {
    // 아직 필요하지 않은 코드
}



// ### YAGNI 원칙을 적용한 후:
// YAGNI 원칙에 따르면, "아직 필요하지 않은" `createSubMenu` 함수는 제거해야한다.

function createMenu() {
    //...
}


