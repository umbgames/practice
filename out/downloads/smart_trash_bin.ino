/*
  MASKIDO SMART TRASH BIN
  Premium beginner project - robust version

  Wiring:
  HC-SR04 TRIG -> D10
  HC-SR04 ECHO -> D9
  HC-SR04 VCC  -> Arduino 5V
  HC-SR04 GND  -> Arduino GND
  Servo signal -> D11
  Servo power  -> approved external regulated 5V supply (2A minimum)
  Servo GND    -> external GND
  Arduino GND  -> the same external GND (shared ground)
*/

#include <Servo.h>

const byte TRIG_PIN = 10;
const byte ECHO_PIN = 9;
const byte SERVO_PIN = 11;

const int OPEN_DISTANCE_CM = 12;
const int CLOSE_DISTANCE_CM = 18;
const int CLOSED_ANGLE = 5;
const int OPEN_ANGLE = 90;

const unsigned long HOLD_OPEN_MS = 1800;
const unsigned long SERVO_STEP_MS = 15;
const unsigned long PRINT_MS = 200;

Servo lidServo;
int currentAngle = CLOSED_ANGLE;
int targetAngle = CLOSED_ANGLE;
unsigned long lastHandSeen = 0;
unsigned long lastServoStep = 0;
unsigned long lastPrint = 0;

int readDistanceCm() {
  digitalWrite(TRIG_PIN, LOW);
  delayMicroseconds(2);
  digitalWrite(TRIG_PIN, HIGH);
  delayMicroseconds(10);
  digitalWrite(TRIG_PIN, LOW);

  unsigned long duration = pulseIn(ECHO_PIN, HIGH, 30000UL);
  if (duration == 0) return -1;
  return (int)(duration * 0.0343 / 2.0);
}

void moveServoSmoothly() {
  if (millis() - lastServoStep < SERVO_STEP_MS) return;
  lastServoStep = millis();

  if (currentAngle < targetAngle) currentAngle++;
  if (currentAngle > targetAngle) currentAngle--;
  lidServo.write(currentAngle);
}

void setup() {
  pinMode(TRIG_PIN, OUTPUT);
  pinMode(ECHO_PIN, INPUT);
  Serial.begin(9600);

  lidServo.attach(SERVO_PIN);
  lidServo.write(CLOSED_ANGLE);
}

void loop() {
  int distance = readDistanceCm();

  if (distance > 0 && distance <= OPEN_DISTANCE_CM) {
    lastHandSeen = millis();
    targetAngle = OPEN_ANGLE;
  }

  if (distance > CLOSE_DISTANCE_CM &&
      millis() - lastHandSeen > HOLD_OPEN_MS) {
    targetAngle = CLOSED_ANGLE;
  }

  if (distance == -1 &&
      millis() - lastHandSeen > HOLD_OPEN_MS) {
    targetAngle = CLOSED_ANGLE;
  }

  moveServoSmoothly();

  if (millis() - lastPrint >= PRINT_MS) {
    lastPrint = millis();
    Serial.print("Distance: ");
    Serial.print(distance);
    Serial.print(" cm | Target angle: ");
    Serial.println(targetAngle);
  }
}
