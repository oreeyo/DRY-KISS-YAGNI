// KISS 원칙
// Keep It Simple, Stupid
// 대부분의 시스템은 복잡한 것 보다 심플하게 만들어졌을 때, 최고로 잘 동작한다.
// 시스템을 디자인 할 때, 심플함이 주 목표가 되어야하고, 불필요한 복잡성은 피해야한다.

// 가령 10 줄짜리 코드를 한 줄로 바꾸기 위해서 화려한 테크닉을 이용해서 가독성을 떨어뜨리기 보다는,
// 누구나 이해할 수 있도록 심플하고 간결하게 작성하는게 좋음
// 되도록이면 누가 봐도 한번에 이해할 수 있도록.

// 그리고 한가지의 책임만 담당하고 있는 클래스를 심플하게 만드는 것이 좋다.
// UI는 UI에 관련된 로직들만, 
// 서비스 쪽은 단 하나의 기능을 담당하는 개별적인 심플한 서비스들을 만드는게 좋음.



// KISS 원칙 적용 전.
// isEven 이 true이면 처음으로 나오는 짝수의 값 리턴
// isEven 이 false이면 처음으로 나오는 홀수의 값 리턴

function getFirst(array, isEven) {
    return array.find(x => (isEven ? x % 2 === 0 : x % 2 !== 0))
}


// 위 함수를 좀 더 풀어서 적어보면...
function getFirst(array, isEven) {
    if (isEven) {
        return array.find(x => x % 2 === 0)
    } else {
        return array.find(x => x % 2 !== 0)
    }
}



// 하지만 함수에서 전달되는 인자의 값이 true인지 false 인지에 따라서 
// 다른 동작을 하도록 하는 것도 simple 하지 않다.

// 원하는 용도에 맞게 다른함수로 각각 만들어 둠으로써, 
// 각각의 함수를 이용해서 사용자가 원하는 함수를 호출 할 수 있다.

function getFirstOdd(array) {
    return array.find(x => x % 2 !== 0);
}

function getFirstEven(array) {
    return array.find(x => x % 2 === 0);
}