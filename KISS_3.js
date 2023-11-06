// KISS 원칙 적용 전.
// 하나의 클래스 안에 여러가지 기능들이 들어가있음.
class UserOrderService {
    userDb;
    orderDb;
    paymentClient;

    processUserOrder(userId, orderId) {

        // 사용자의 데이터베이스에서 사용자를 받아온 다음에, 
        const user = this.userDb.select(/* DB query */);
        if (!user) {
            throw Error('...');
        }

        // 주문데이터베이스에서 주문을 받아 온 다음에, 
        const order = orderDb.select(/* DB query */);
        if (!order) {
            throw Error('...');
        }

        // 각각에서 에러가 발생하지 않는다면 결제할 수 있는 클라이언트에 접속해서 
        // 여러가지 프로세스를 처리한 다음에
        paymentClient
            .connect(/* URL */)
            .then(/* process payment */)
            .catch(/* retry */)

        // 다시 주문 데이터베이스에 업데이트된 주문을 업데이트 한다.
        this.orderDb.updateOrder(order, PAID);

    }
}

// KISS 원칙 적용 후.
// 기능 분리해서 여러 클래스로 쪼갬
class UserService {
    userDb;
    getUser() {
        return this.userDb.select(/* DB query */)
    }
}

class OrderService {
    orderDb;
    createOrder(user, product) { }
    getOrder(orderId) {
        return orderDb.select(/* DB query */)
    }
    updateOrder(order) {
        orderDb.updateOrder(order, PAID)
    }
}

class paymentClient {
    paymentClient;
    processPayment(orderRequest) {
        return paymentClient
            .connect(/* URL */)
            .then(/* process payment */)
            .catch(/* retry */)

    }
}