// DRY 원칙
// Don't Repeat Yourself
// 시스템 내에서 특정한 지식과 로직은 단 한곳에서 명확하고 신뢰할 수 있도록 존재해야한다.
// 코드나 기능, 로직, 의도가 반복되는 걸 피해라. 그래야 유지보수에 좋고, 재사용성에 좋다.



// DRY 원칙에 어긋나는 코드

// 사용자의 fullName을 출력하는 코드
// 같은 코드가 반복되고, 만약에 firstName 과 lastName 사이에 middleName 을 넣어주고 싶다면
// 다시 수정하는데에 있어서 번거로울 것임.

function greetings(user) {
    return `Hi ${user.firstName} ${user.lastName}`
}

function goodbye(user) {
    return `See you next time ${user.firstName} ${user.lastName}`
}




// DRY 원칙에 맞게끔 수정한 코드
// 반복되는 코드는 한곳에서 관리하게끔 수정.
class User {
    fullName() {
        return `${this.firstName} ${this.middletName} ${this.lastName}`
    }
}

function greetings(user) {
    return `Hi ${user.fullName}`;
}

function goodbye(user) {
    return `See you next time ${user.fullName}`
}