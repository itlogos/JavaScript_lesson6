//1
class Robot {
    work(){
        console.log("Я Robot – я просто працюю");
    };
}

class CoffeeRobot extends Robot {
    work(){
        console.log("Я CoffeeRobot – я варю каву");
    }
}

class RobotDancer extends Robot {
    work(){
        console.log("Я RobotDancer – я просто танцюю");
    }
}

class RobotCooker extends Robot {
    work(){
        console.log("Я RobotCooker – я просто готую");
    }
}

let robotArray = [
    new Robot(),
    new CoffeeRobot(),
    new RobotDancer(),
    new RobotCooker()
];

robotArray.forEach(element => {
    element.work();
});