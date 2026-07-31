import * as LabComponents from './lab-components';
import React from 'react';

export const LAB_CATEGORIES = [
  "General",
  "Input",
  "Output",
  "Power",
  "Breadboards",
  "Microcontrollers",
  "Instruments",
  "Integrated Circuits",
  "Power Control",
  "Connectors",
  "Logic"
];

// Fallback style generator for components that don't have SVG models yet
const createPremiumStyle = (baseColor, type, width, height, borderRadius) => {
  const styles = {
    display: "flex", alignItems: "center", justifyContent: "center",
    width, height, borderRadius,
    transition: "all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1)",
    position: "relative",
  };
  // Simplified for brevity, same styles as before
  return { ...styles, background: baseColor, color: '#fff' }; 
};

// We wrap the imported SVG component in the ComponentShell
const wrapWithShell = (SvgComponent, name) => {
  if (!SvgComponent) return null;
  return (props) => (
    <LabComponents.ComponentShell name={name}>
      <SvgComponent {...props} />
    </LabComponents.ComponentShell>
  );
};

export const labComponentLibrary = [
  // ================= GENERAL =================
  { id: "gen-resistor", name: "Resistor", category: "General", component: wrapWithShell(LabComponents.Resistor, "Resistor") },
  { id: "gen-capacitor", name: "Capacitor", category: "General", component: wrapWithShell(LabComponents.Capacitor, "Capacitor") },
  { id: "gen-inductor", name: "Inductor", category: "General", component: wrapWithShell(LabComponents.Inductor, "Inductor") },
  { id: "gen-diode", name: "Diode", category: "General", component: wrapWithShell(LabComponents.Diode, "Diode") },
  { id: "gen-led", name: "LED", category: "General", component: wrapWithShell(LabComponents.LED, "LED") },
  { id: "gen-transistor", name: "Transistor", category: "General", component: wrapWithShell(LabComponents.Transistor, "Transistor") },
  { id: "gen-potentiometer", name: "Potentiometer", category: "General", component: wrapWithShell(LabComponents.Potentiometer, "Potentiometer") },
  { id: "gen-var-capacitor", name: "Variable Capacitor", category: "General", component: wrapWithShell(LabComponents.VariableCapacitor, "Variable Capacitor") },
  { id: "gen-thermistor", name: "Thermistor", category: "General", component: wrapWithShell(LabComponents.Thermistor, "Thermistor") },
  { id: "gen-photoresistor", name: "Photoresistor", category: "General", component: wrapWithShell(LabComponents.Photoresistor, "Photoresistor") },
  { id: "gen-fuse", name: "Fuse", category: "General", component: wrapWithShell(LabComponents.Fuse, "Fuse") },
  { id: "gen-crystal", name: "Crystal Oscillator", category: "General", component: wrapWithShell(LabComponents.CrystalOscillator, "Crystal Oscillator") },
  { id: "gen-relay", name: "Relay", category: "General", component: wrapWithShell(LabComponents.Relay, "Relay") },
  { id: "gen-piezo", name: "Piezo Buzzer", category: "General", component: wrapWithShell(LabComponents.PiezoBuzzer, "Piezo Buzzer") },
  { id: "gen-antenna", name: "Antenna", category: "General", component: wrapWithShell(LabComponents.Antenna, "Antenna") },

  // ================= INPUT =================
  { id: "in-push-btn", name: "Push Button", category: "Input", component: wrapWithShell(LabComponents.PushButton, "Push Button") },
  { id: "in-toggle-sw", name: "Toggle Switch", category: "Input", component: wrapWithShell(LabComponents.ToggleSwitch, "Toggle Switch") },
  { id: "in-slide-sw", name: "Slide Switch", category: "Input", component: wrapWithShell(LabComponents.SlideSwitch, "Slide Switch") },
  { id: "in-rotary-sw", name: "Rotary Switch", category: "Input", component: wrapWithShell(LabComponents.RotarySwitch, "Rotary Switch") },
  { id: "in-dip-sw", name: "DIP Switch", category: "Input", component: wrapWithShell(LabComponents.DIPSwitch, "DIP Switch") },
  { id: "in-keypad", name: "Keypad", category: "Input", component: wrapWithShell(LabComponents.Keypad, "Keypad") },
  { id: "in-joystick", name: "Joystick", category: "Input", component: wrapWithShell(LabComponents.Joystick, "Joystick") },
  { id: "in-potentiometer", name: "Input Potentiometer", category: "Input", component: wrapWithShell(LabComponents.InputPotentiometer, "Input Potentiometer") },
  { id: "in-rotary-enc", name: "Rotary Encoder", category: "Input", component: wrapWithShell(LabComponents.RotaryEncoder, "Rotary Encoder") },
  { id: "in-touch", name: "Touch Sensor", category: "Input", component: wrapWithShell(LabComponents.TouchSensor, "Touch Sensor") },
  { id: "in-ir", name: "IR Receiver", category: "Input", component: wrapWithShell(LabComponents.IRReceiver, "IR Receiver") },
  { id: "in-mic", name: "Microphone", category: "Input", component: wrapWithShell(LabComponents.Microphone, "Microphone") },
  { id: "in-light", name: "Light Sensor", category: "Input", component: wrapWithShell(LabComponents.LightSensor, "Light Sensor") },
  { id: "in-motion", name: "Motion Sensor", category: "Input", component: wrapWithShell(LabComponents.MotionSensor, "Motion Sensor") },
  { id: "in-hall", name: "Hall Effect Sensor", category: "Input", component: wrapWithShell(LabComponents.HallEffectSensor, "Hall Effect Sensor") },

  // ================= OUTPUT =================
  { id: "out-led", name: "Output LED", category: "Output", component: wrapWithShell(LabComponents.OutputLED, "Output LED") },
  { id: "out-rgb-led", name: "RGB LED", category: "Output", component: wrapWithShell(LabComponents.RGBLED, "RGB LED") },
  { id: "out-7seg", name: "7-Segment Display", category: "Output", component: wrapWithShell(LabComponents.SevenSegmentDisplay, "7-Segment Display") },
  { id: "out-lcd", name: "LCD Display", category: "Output", component: wrapWithShell(LabComponents.LCDDisplay, "LCD Display") },
  { id: "out-oled", name: "OLED Display", category: "Output", component: wrapWithShell(LabComponents.OLEDDisplay, "OLED Display") },
  { id: "out-tft", name: "TFT Display", category: "Output", component: wrapWithShell(LabComponents.TFTDisplay, "TFT Display") },
  { id: "out-speaker", name: "Speaker", category: "Output", component: wrapWithShell(LabComponents.Speaker, "Speaker") },
  { id: "out-buzzer", name: "Buzzer", category: "Output", component: wrapWithShell(LabComponents.Buzzer, "Buzzer") },
  { id: "out-vib-motor", name: "Vibration Motor", category: "Output", component: wrapWithShell(LabComponents.VibrationMotor, "Vibration Motor") },
  { id: "out-dc-motor", name: "DC Motor", category: "Output", component: wrapWithShell(LabComponents.DCMotor, "DC Motor") },
  { id: "out-servo", name: "Servo Motor", category: "Output", component: wrapWithShell(LabComponents.ServoMotor, "Servo Motor") },
  { id: "out-stepper", name: "Stepper Motor", category: "Output", component: wrapWithShell(LabComponents.StepperMotor, "Stepper Motor") },
  { id: "out-solenoid", name: "Solenoid", category: "Output", component: wrapWithShell(LabComponents.Solenoid, "Solenoid") },
  { id: "out-relay-mod", name: "Relay Module", category: "Output", component: wrapWithShell(LabComponents.RelayModule, "Relay Module") },

  // ================= POWER =================
  { id: "pwr-battery", name: "Battery", category: "Power", component: wrapWithShell(LabComponents.Battery, "Battery") },
  { id: "pwr-coin", name: "Coin Cell", category: "Power", component: wrapWithShell(LabComponents.CoinCell, "Coin Cell") },
  { id: "pwr-bat-holder", name: "Battery Holder", category: "Power", component: wrapWithShell(LabComponents.BatteryHolder, "Battery Holder") },
  { id: "pwr-dc-jack", name: "DC Power Jack", category: "Power", component: wrapWithShell(LabComponents.DCPowerJack, "DC Power Jack") },
  { id: "pwr-usb-conn", name: "USB Connector", category: "Power", component: wrapWithShell(LabComponents.USBConnector, "USB Connector") },
  { id: "pwr-vreg", name: "Voltage Regulator", category: "Power", component: wrapWithShell(LabComponents.VoltageRegulator, "Voltage Regulator") },
  { id: "pwr-buck", name: "Buck Converter", category: "Power", component: wrapWithShell(LabComponents.BuckConverter, "Buck Converter") },
  
  // ================= BREADBOARDS =================
  { id: "brd-mini", name: "Mini Breadboard", category: "Breadboards", component: wrapWithShell(LabComponents.MiniBreadboard, "Mini Breadboard") },
  { id: "brd-half", name: "Half-Size Breadboard", category: "Breadboards", component: wrapWithShell(LabComponents.HalfBreadboard, "Half-Size Breadboard") },
  { id: "brd-full", name: "Full-Size Breadboard", category: "Breadboards", component: wrapWithShell(LabComponents.FullBreadboard, "Full-Size Breadboard") },
  
  // ================= MICROCONTROLLERS =================
  { id: "mcu-uno", name: "Arduino Uno", category: "Microcontrollers", component: wrapWithShell(LabComponents.ArduinoUno, "Arduino Uno") },
  { id: "mcu-nano", name: "Arduino Nano", category: "Microcontrollers", component: wrapWithShell(LabComponents.ArduinoNano, "Arduino Nano") },
  { id: "mcu-esp32", name: "ESP32", category: "Microcontrollers", component: wrapWithShell(LabComponents.ESP32, "ESP32") },
  { id: "mcu-esp8266", name: "ESP8266", category: "Microcontrollers", component: wrapWithShell(LabComponents.ESP8266, "ESP8266") },
  { id: "mcu-pico", name: "Raspberry Pi Pico", category: "Microcontrollers", component: wrapWithShell(LabComponents.RaspberryPiPico, "Raspberry Pi Pico") },

  // ================= INSTRUMENTS =================
  { id: "inst-multimeter", name: "Multimeter", category: "Instruments", component: wrapWithShell(LabComponents.Multimeter, "Multimeter") },
  { id: "inst-oscilloscope", name: "Oscilloscope", category: "Instruments", component: wrapWithShell(LabComponents.Oscilloscope, "Oscilloscope") },
  { id: "inst-func-gen", name: "Function Generator", category: "Instruments", component: wrapWithShell(LabComponents.FunctionGenerator, "Function Generator") },
  { id: "inst-logic-analyzer", name: "Logic Analyzer", category: "Instruments", component: wrapWithShell(LabComponents.LogicAnalyzer, "Logic Analyzer") },

  // ================= INTEGRATED CIRCUITS =================
  { id: "ic-ne555", name: "NE555 Timer", category: "Integrated Circuits", component: wrapWithShell(LabComponents.NE555, "NE555 Timer") },
  { id: "ic-lm358", name: "LM358 Op-Amp", category: "Integrated Circuits", component: wrapWithShell(LabComponents.LM358, "LM358 Op-Amp") },
  { id: "ic-l293d", name: "L293D Motor Driver", category: "Integrated Circuits", component: wrapWithShell(LabComponents.L293D, "L293D Motor Driver") },
  { id: "ic-74hc595", name: "74HC595 Shift Register", category: "Integrated Circuits", component: wrapWithShell(LabComponents.ShiftRegister, "74HC595 Shift Register") },

  // ================= POWER CONTROL =================
  { id: "pctrl-mosfet", name: "MOSFET", category: "Power Control", component: wrapWithShell(LabComponents.MOSFET, "MOSFET") },
  { id: "pctrl-ssr", name: "Solid State Relay", category: "Power Control", component: wrapWithShell(LabComponents.SolidStateRelay, "Solid State Relay") },

  // ================= CONNECTORS =================
  { id: "conn-jumper", name: "Jumper Wires", category: "Connectors", component: wrapWithShell(LabComponents.JumperWires, "Jumper Wires") },
  { id: "conn-screw", name: "Screw Terminal Block", category: "Connectors", component: wrapWithShell(LabComponents.ScrewTerminalBlock, "Screw Terminal Block") },
  { id: "conn-pin-header", name: "Pin Header", category: "Connectors", component: wrapWithShell(LabComponents.PinHeader, "Pin Header") },

  // ================= LOGIC =================
  { id: "log-and", name: "AND Gate", category: "Logic", component: wrapWithShell(LabComponents.ANDGate, "AND Gate") },
  { id: "log-or", name: "OR Gate", category: "Logic", component: wrapWithShell(LabComponents.ORGate, "OR Gate") },
  { id: "log-not", name: "NOT Gate", category: "Logic", component: wrapWithShell(LabComponents.NOTGate, "NOT Gate") }
];

export const getComponentsByCategory = (category) => {
  return labComponentLibrary.filter(comp => comp.category === category);
};

export const getComponentById = (id) => {
  return labComponentLibrary.find(comp => comp.id === id);
};
