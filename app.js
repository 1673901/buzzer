var rpio = require ('rpio');
rpio.open(37, rpio.OUTPUT, rpio.LOW);

sound5();

function sound1(){
rpio.write(37, rpio.HIGH);
rpio.msleep(400);

rpio.write(37, rpio.LOW);
rpio.msleep(100);

rpio.write(37, rpio.HIGH);
rpio.msleep(500);

rpio.write(37, rpio.LOW);
rpio.msleep(100);

rpio.write(37, rpio.HIGH);
rpio.msleep(600);

rpio.write(37, rpio.LOW);
//rpio.msleep(100);
};

function sound2(){
rpio.write(37, rpio.HIGH);
rpio.msleep(400);

rpio.write(37, rpio.LOW);
rpio.msleep(100);

rpio.write(37, rpio.HIGH);
rpio.msleep(600);

rpio.write(37, rpio.LOW);
rpio.msleep(100);

rpio.write(37, rpio.HIGH);
rpio.msleep(800);

rpio.write(37, rpio.LOW);
//rpio.msleep(100);
};

function sound3(){
rpio.write(37, rpio.HIGH);
rpio.msleep(500);

rpio.write(37, rpio.LOW);
rpio.msleep(50);

rpio.write(37, rpio.HIGH);
rpio.msleep(500);

rpio.write(37, rpio.LOW);
rpio.msleep(50);

rpio.write(37, rpio.HIGH);
rpio.msleep(500);

rpio.write(37, rpio.LOW);
//rpio.msleep(100);
};

function sound4(){
rpio.write(37, rpio.HIGH);
rpio.msleep(300);

rpio.write(37, rpio.LOW);
rpio.msleep(20);

rpio.write(37, rpio.HIGH);
rpio.msleep(300);

rpio.write(37, rpio.LOW);
rpio.msleep(20);

rpio.write(37, rpio.HIGH);
rpio.msleep(300);

rpio.write(37, rpio.LOW);
//rpio.msleep(100);
};

function sound5(){
rpio.write(37, rpio.HIGH);
rpio.msleep(700);

rpio.write(37, rpio.LOW);
rpio.msleep(100);

rpio.write(37, rpio.HIGH);
rpio.msleep(700);

rpio.write(37, rpio.LOW);
rpio.msleep(200);

rpio.write(37, rpio.HIGH);
rpio.msleep(700);

rpio.write(37, rpio.LOW);
//rpio.msleep(100);
};
